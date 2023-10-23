"use strict";
import path from "node:path";
import fs from "node:fs";
import Command from "@tsheep.com/command";
import {  log, initGitServer,initGitType } from "@tsheep.com/utils";
import SimpleGit from "simple-git";
import { execa } from "execa";

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
    this.gitAPI = await initGitServer();
    const user = await this.gitAPI.getUser();
    this.name = user.login;
    this.createCustomRes();
    this.initLocal()
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
    await this.gitAPI.createCustomRepo(this.name)
    // 创建README.md文件
    const dir = process.cwd();
    const gitREADME = path.resolve(dir, "README.md");
    if (!fs.existsSync(gitREADME)) {
      log.info("README.md 文件开始创建");
      fs.writeFileSync(gitREADME,"test");
      log.success("README.md 文件创建成功");
    }
  }
  async initLocal() {
    // 生成git remote 地址
    const remoteUrl = await this.gitAPI.getRepoUrl(
      `${this.gitAPI.login}/${this.name}`
    );
    console.log(remoteUrl);
    // 初始化git对象
    this.git = SimpleGit(process.cwd());
    const gitDir = path.resolve(process.cwd(), ".git");
    console.log(gitDir);
    await execa("git" ["branch","-m" ,"master","main"])
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
    // const status = await this.git.status();
    // 拉取远程master分支
    await this.git.pull("origin", "main").catch((err) => {
      log.verbose("git pull origin main", err.message);
      if (err.message.indexOf("couldn't find remote ref main") >= 0) {
        log.warn("获取远程[main]分支失败！");
      }
    });
  }
}
function Custom(instance) {
  return new CustomCommand(instance);
}
export default Custom;
