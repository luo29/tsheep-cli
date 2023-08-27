import path from "node:path";
import fse from "fs-extra";
import Command from "@tsheep.com/command";
import {
  log,
  initGitServer,
  initGitType,
  clearCache,
  createRemoteRepo,
} from "@tsheep.com/utils";

const CACHE_DIR = ".tsheep-cli";
const FILE_GIT_PLATFORM = ".git_platform";

class CommitCommand extends Command {
  get command() {
    return "commit";
  }
  get description() {
    return "commit project";
  }
  get options() {
    return [["-c, --clear", "清空缓存", false]];
  }
  async action([{ clear }]) {
    if (clear) {
      clearCache();
    }
    await this.createRemoteRepo();
  }

  // 阶段1：创建远程仓库
  async createRemoteRepo() {
    // 1.实例化Git对象
    this.gitAPI = await initGitServer();
    // 2.仓库类型选择
    await initGitType(this.gitAPI);
    // 3.创建远程仓库
    const dir = process.cwd();
    const pkg = fse.readJSONSync(path.resolve(dir, "package.json"));
    await createRemoteRepo(this.gitAPI, pkg.name);
  }
}

function Commit(instance) {
  return new CommitCommand(instance);
}

export default Commit;
