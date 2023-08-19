"use strict";
import Command from "@tsheep.com/command";
import { log } from "@tsheep.com/utils";
import createTemplate from "./createTemplate.js";
import downloadTemplate from "./downloadTemplate.js";
class InitCommand extends Command {
  get command() {
    return "init [name]";
  }
  get description() {
    return "init project";
  }
  get options() {
    return [["-f, --force", "是否强制更新", false]];
  }
  async action([name, opts]) {
    log.info("init", name, opts);
    // 1、选择项目模板，生成项目信息
    const selectedTemplate = await createTemplate(name, opts);
    // 2、下载项目模板至缓存目录
    await downloadTemplate(selectedTemplate);
    // 3、安装项目模板至项目目录
  }
  preAction() {
    // console.log("pre");
  }
  postAction() {
    // console.log("post");
  }
}
function Init(instance) {
  return new InitCommand(instance);
}
export default Init;
