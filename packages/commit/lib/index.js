import fs from "node:fs";
import path from "node:path";
import fse from "fs-extra";
import SimpleGit from "simple-git";
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
    await this.initLocal();
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
    this.name = pkg.name;
    await createRemoteRepo(this.gitAPI, this.name);
    // 4.生成.gitignore
    const gitIgnorePath = path.resolve(dir, ".gitignore");
    if (!fs.existsSync(gitIgnorePath)) {
      log.info(".gitignore 文件开始创建");
      fs.writeFileSync(gitIgnorePath, "node_modules");
      log.success(".gitignore 创建成功！");
    }
  }

  // 阶段2：git本地初始化
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
    const status = await this.git.status();
    // 拉取远程master分支
    await this.git.pull("origin", "master").catch((err) => {
      log.verbose("git pull origin master", err.message);
      if (err.message.indexOf("couldn't find remote ref master") >= 0) {
        log.warn("获取远程[master]分支失败！");
      }
    });
  }
}

function Commit(instance) {
  return new CommitCommand(instance);
}

export default Commit;
