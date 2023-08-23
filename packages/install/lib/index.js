import Command from "@tsheep.com/command";
import {
  log,
  Github,
  Gitee,
  makeList,
  getGitPlatform,
} from "@tsheep.com/utils";

class InstallCommand extends Command {
  get command() {
    return "install";
  }
  get description() {
    return "install project";
  }
  get option() {}
  async action() {
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
    const searchResult = await gitAPI.searchRepositories({
      q: "vue",
      language: "JavaScript",
      order: "desc",
      sort: "stars_count",
      per_page: 5,
      page: 1,
    });
    console.log(searchResult);
  }
}

function Install(instance) {
  return new InstallCommand(instance);
}

export default Install;
