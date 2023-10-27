"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import path from "node:path";
import fs from "node:fs";
import Command from "@tsheep.com/command";
import { log, initGitServer, initGitType } from "@tsheep.com/utils";
import SimpleGit from "simple-git";
class CustomCommand extends Command {
    get command() {
        return;
    }
    get description() {
        return;
    }
    get options() {
        return [];
    }
    action([name, opts]) {
        return __awaiter(this, void 0, void 0, function* () {
            this.gitAPI = yield initGitServer();
            const user = yield this.gitAPI.getUser();
            this.name = user.login;
            this.createCustomRes();
            this.initLocal();
        });
    }
    preAction() {
    }
    postAction() {
    }
    createCustomRes() {
        return __awaiter(this, void 0, void 0, function* () {
            yield initGitType(this.gitAPI);
            yield this.gitAPI.createCustomRepo(this.name);
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
            const dir = process.cwd();
            const gitREADME = path.resolve(dir, "README.md");
            if (!fs.existsSync(gitREADME)) {
                log.info("README.md 文件开始创建");
                fs.writeFileSync(gitREADME, "test");
                log.success("README.md 文件创建成功");
            }
            yield this.git.add("README.md");
            yield this.git.commit("test");
            yield this.git.branch(["-m", "master", "main"]);
            setTimeout(() => {
                this.git.push(remoteUrl, "main");
            }, 1000);
        });
    }
}
function Custom(instance) {
    return new CustomCommand(instance);
}
export default Custom;
//# sourceMappingURL=index.js.map