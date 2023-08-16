"use strict";
const Command = require("@tsheep.com/command");
const { log } = require("@tsheep.com/utils");
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
    log.verbose("init", name, opts);
  }
  preAction() {
    console.log("pre");
  }
  postAction() {
    console.log("post");
  }
}
function Init(instance) {
  return new InitCommand(instance);
}
module.exports = Init;
