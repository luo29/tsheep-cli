"use strict";
import path from "node:path";
import fs from "node:fs";
import Command from "@tsheep.com/command";
import { log, initGitServer, initGitType } from "@tsheep.com/utils";
import SimpleGit from "simple-git";

/**
 * examples：
 * t-tsheep init
 * t-tsheep init aaa --type project -tp template-react18 --force
 */
class CustomCommand extends Command {
  get command() {
    return "custom";
  }
  get description() {
    return "custom git";
  }
  get options() {}
  async action([name, opts]) {
    this.gitAPI = await initGitServer();
    const user = await this.gitAPI.getUser();
    this.name = user.login;
    this.createCustomRes();
    this.initLocal();
  }
  preAction() {
    // console.log("pre");
  }
  postAction() {
    // console.log("post");
  }
  // 创建自定义git平台首页仓库
  async createCustomRes() {
    // 得到git用户信息
    await initGitType(this.gitAPI);
    // 创建远程仓库
    await this.gitAPI.createCustomRepo(this.name);
  }
  async initLocal() {
    // 生成git remote 地址
    const remoteUrl = await this.gitAPI.getRepoUrl(
      `${this.gitAPI.login}/${this.name}`
    );
    // 初始化git对象
    this.git = SimpleGit(process.cwd());
    const gitDir = path.resolve(process.cwd(), ".git");
    if (!fs.existsSync(gitDir)) {
      await this.git.init();
      log.success("完成git初始化");
    }
    // 获取所有得remotes
    const remotes = await this.git.getRemotes();
    if (!remotes.find((remote) => remote.name === "origin")) {
      this.git.addRemote("origin", remoteUrl);
      log.success("添加git remote", remoteUrl);
    }
    // 创建README.md文件
    const dir = process.cwd();
    const gitREADME = path.resolve(dir, "README.md");
    if (!fs.existsSync(gitREADME)) {
      log.info("README.md 文件开始创建");
      fs.writeFileSync(gitREADME, "test");
      log.success("README.md 文件创建成功");
    }
    await this.git.add("README.md");
    await this.git.commit("test");
    await this.git.branch(["-m", "master", "main"]);
    setTimeout(() => {
      this.git.push(remoteUrl, "main");
    }, 1000);
  }
}
function Custom(instance) {
  return new CustomCommand(instance);
}
export default Custom;
