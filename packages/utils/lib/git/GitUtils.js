import { makeList } from "../inquirer.js";
import log from "../log.js";
import Github from "./Github.js";
import Gitee from "./Gitee.js";
import { getGitPlatform, getGitLogin, getGitOwn } from "./GitServer.js";

export async function initGitServer() {
  let platform = getGitPlatform();
  if (!platform) {
    platform = await makeList({
      message: "请选择Git平台",
      choices: [
        {
          name: "Github",
          value: "github",
        },
        {
          name: "Gitee",
          value: "gitee",
        },
      ],
    });
  }
  log.verbose("plarform", platform);
  let gitAPI;
  if (platform === "github") {
    gitAPI = new Github();
  } else {
    gitAPI = new Gitee();
  }
  gitAPI.savePlatform(platform);
  await gitAPI.init();
  return gitAPI;
}

export async function initGitType(gitAPI) {
  // 仓库类型
  let gitOwn = getGitOwn();
  // 仓库登录名
  let gitLogin = getGitLogin();
  if (!gitLogin && !gitOwn) {
    const user = await gitAPI.getUser();
    const org = await gitAPI.getOrg();
    log.verbose("user", user);
    log.verbose("org", org);
    if (!gitOwn) {
      gitOwn = await makeList({
        message: "请选择仓库类型",
        choices: [
          {
            name: "User",
            value: "user",
          },
          {
            name: "Organization",
            value: "org",
          },
        ],
      });
      log.verbose("gitOwn", gitOwn);
    }
    if (gitOwn === "user") {
      gitLogin = user?.login;
    } else {
      const orgList = org.map((item) => ({
        name: item.name || item.login,
        value: item.login,
      }));
      gitLogin = await makeList({
        message: "请选择组织",
        choices: orgList,
      });
    }
    log.verbose("gitLogin", gitLogin);
    gitAPI.saveOwn(gitOwn);
    gitAPI.saveLogin(gitLogin);
  }
  if (!gitLogin || !gitOwn) {
    throw new Error(
      `为获取到用户的Git登录信息！请使用 "t-tsheep commit --clear" 清除缓存后重试`
    );
  }
  return gitLogin;
}
