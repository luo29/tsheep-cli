var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { makeList } from "../inquirer.js";
import log from "../log.js";
import Github from "./Github.js";
import Gitee from "./Gitee.js";
import { getGitPlatform, getGitLogin, getGitOwn } from "./GitServer.js";
export function initGitServer() {
    return __awaiter(this, void 0, void 0, function* () {
        let platform = getGitPlatform();
        log.verbose("plarform", platform);
        if (!platform) {
            platform = yield makeList({
                message: "请选择Git平台",
                choices: [
                    {
                        name: "Github",
                        value: "github",
                    },
                    {
                        name: "Gitee",
                        value: "gitee",
                    },
                ],
            });
        }
        log.verbose("plarform", platform);
        let gitAPI;
        if (platform === "github") {
            gitAPI = new Github();
        }
        else {
            gitAPI = new Gitee();
        }
        gitAPI.savePlatform(platform);
        yield gitAPI.init();
        return gitAPI;
    });
}
export function initGitType(gitAPI) {
    return __awaiter(this, void 0, void 0, function* () {
        let gitOwn = getGitOwn();
        let gitLogin = getGitLogin();
        if (!gitLogin && !gitOwn) {
            const user = yield gitAPI.getUser();
            const org = yield gitAPI.getOrg();
            log.verbose("user", user);
            log.verbose("org", org);
            if (!gitOwn) {
                gitOwn = yield makeList({
                    message: "请选择仓库类型",
                    choices: [
                        {
                            name: "User",
                            value: "user",
                        },
                        {
                            name: "Organization",
                            value: "org",
                        },
                    ],
                });
                log.verbose("gitOwn", gitOwn);
            }
            if (gitOwn === "user") {
                gitLogin = user === null || user === void 0 ? void 0 : user.login;
            }
            else {
                const orgList = org.map((item) => ({
                    name: item.name || item.login,
                    value: item.login,
                }));
                gitLogin = yield makeList({
                    message: "请选择组织",
                    choices: orgList,
                });
            }
            log.verbose("gitLogin", gitLogin);
        }
        if (!gitLogin || !gitOwn) {
            throw new Error(`为获取到用户的Git登录信息！请使用 "t-tsheep commit --clear" 清除缓存后重试`);
        }
        gitAPI.saveOwn(gitOwn);
        gitAPI.saveLogin(gitLogin);
        return gitLogin;
    });
}
export function createRemoteRepo(gitAPI, name) {
    return __awaiter(this, void 0, void 0, function* () {
        const ret = yield gitAPI.createRepo(name);
    });
}
//# sourceMappingURL=GitUtils.js.map