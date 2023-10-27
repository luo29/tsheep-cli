var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import fs from "node:fs";
import path from "node:path";
import fse from "fs-extra";
import SimpleGit from "simple-git";
import Command from "@tsheep.com/command";
import { log, initGitServer, initGitType, clearCache, createRemoteRepo, } from "@tsheep.com/utils";
const CACHE_DIR = ".tsheep-cli";
const FILE_GIT_PLATFORM = ".git_platform";
class CommitCommand extends Command {
    get command() {
        return;
    }
    get description() {
        return;
    }
    get options() {
        return [["-c, --clear", "清空缓存", false]];
    }
    action([{ clear }]) {
        return __awaiter(this, void 0, void 0, function* () {
            if (clear) {
                clearCache();
            }
            yield this.createRemoteRepoe();
            yield this.initLocal();
        });
    }
    createRemoteRepoe() {
        return __awaiter(this, void 0, void 0, function* () {
            this.gitAPI = yield initGitServer();
            yield initGitType(this.gitAPI);
            const dir = process.cwd();
            const pkg = fse.readJSONSync(path.resolve(dir, "package.json"));
            this.name = pkg.name;
            yield createRemoteRepo(this.gitAPI, this.name);
            const gitIgnorePath = path.resolve(dir, ".gitignore");
            if (!fs.existsSync(gitIgnorePath)) {
                log.info(".gitignore 文件开始创建");
                fs.writeFileSync(gitIgnorePath, "node_modules");
                log.success(".gitignore 创建成功！");
            }
        });
    }
    initLocal() {
        return __awaiter(this, void 0, void 0, function* () {
            const remoteUrl = yield this.gitAPI.getRepoUrl(`${this.gitAPI.login}/${this.name}`);
            this.git = SimpleGit(process.cwd());
            const gitDir = path.resolve(process.cwd(), ".git");
            if (!fs.existsSync(gitDir)) {
                yield this.git.init();
                log.success("完成git初始化");
            }
            const remotes = yield this.git.getRemotes();
            if (!remotes.find((remote) => remote.name === "origin")) {
                this.git.addRemote("origin", remoteUrl);
                log.success("添加git remote", remoteUrl);
            }
            const status = yield this.git.status();
            yield this.git.pull("origin", "master").catch((err) => {
                log.verbose("git pull origin master", err.message);
                if (err.message.indexOf("couldn't find remote ref master") >= 0) {
                    log.warn("获取远程[master]分支失败！");
                }
            });
        });
    }
}
function Commit(instance) {
    return new CommitCommand(instance);
}
export default Commit;
//# sourceMappingURL=index.js.map