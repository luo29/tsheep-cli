import fs from "node:fs";
import path from "node:path";
import { homedir } from "node:os";
import Command from "@tsheep.com/command";
import { log, getGitPlatform, initGitServer } from "@tsheep.com/utils";

const CACHE_DIR = ".tsheep-cli";
const FILE_GIT_PLATFORM = ".git_platform";

class CommitCommand extends Command {
  get command() {
    return "commit";
  }
  get description() {
    return "commit project";
  }
  action() {
    this.createRemoteRepo();
  }

  // 阶段1：创建远程仓库
  async createRemoteRepo() {
    this.gitAPI = await initGitServer();
    console.log(this.gitAPI);
  }
}

function Commit(instance) {
  return new CommitCommand(instance);
}

export default Commit;
