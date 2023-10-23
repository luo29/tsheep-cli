"use strict";
import Command from "@tsheep.com/command";
import { log } from "@tsheep.com/utils";

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
  get options() {
   
  }
  async action([name, opts]) {
    // log.info("custom", name, opts);
    console.log("custom");
  }
  preAction() {
    // console.log("pre");
  }
  postAction() {
    // console.log("post");
  }
}
function Custom(instance) {
  return new CustomCommand(instance);
}
export default Custom;
