"use strict";
import Command from "@tsheep.com/command";
import { log } from "@tsheep.com/utils";
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
  action([name, opts]) {
    log.info("init", name, opts);
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
