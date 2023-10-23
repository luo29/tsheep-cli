"use strict";
import Command from "@tsheep.com/command";
import { Github, log, initGitServer } from "@tsheep.com/utils";

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
    // log.info("custom", name, opts);
    console.log("custom");
    this.createCustomRes();
  }
  preAction() {
    // console.log("pre");
  }
  postAction() {
    // console.log("post");
  }
  // 创建自定义git平台首页仓库
  async createCustomRes() {
    // let gitAPI = new Github()
    // const user = await gitAPI.getUser()
    // console.log(user);
    // // 获取git账号名称
    // getGitName()
    // // 创建readme文件
    // createREADME()
    this.gitAPI = await initGitServer();
    const user = await this.gitAPI.getUser()
    console.log(user);
    const gitLogin = user.login
    console.log(gitLogin);
  }
}
function Custom(instance) {
  return new CustomCommand(instance);
}
export default Custom;
