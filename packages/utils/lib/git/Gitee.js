var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import axios from "axios";
import { GitServer } from "./GitServer.js";
import log from "../log.js";
const BASE_URL = "https://gitee.com/api/v5";
class Github extends GitServer {
    constructor() {
        super();
        this.service = axios.create({
            baseURL: BASE_URL,
            timeout: 5000,
        });
        this.service.interceptors.response.use((response) => {
            return response.data;
        }, (error) => {
            return Promise.reject(error);
        });
    }
    get(url, params, headers) {
        return this.service({
            url,
            params: Object.assign(Object.assign({}, params), { access_token: this.token }),
            method: "get",
            headers,
        });
    }
    post(url, data, headers) {
        return this.service({
            url,
            data,
            params: {
                access_token: this.token,
            },
            method: "post",
            headers,
        });
    }
    searchRepositories(params) {
        return this.get("/search/repositories", params, null);
    }
    getTags(fullName) {
        return this.get(`/repos/${fullName}/tags`, null, null);
    }
    getRepoUrl(fullName) {
        return `https://gitee.com/${fullName}.git`;
    }
    getUser() {
        return this.get("/user", null, null);
    }
    getOrg() {
        return this.get("/user/orgs", null, null);
    }
    getRepo(owner, repo) {
        return this.get(`/repos/${owner}/${repo}`, null, null).catch((err) => {
            return null;
        });
    }
    createRepo(name) {
        return __awaiter(this, void 0, void 0, function* () {
            const repo = yield this.getRepo(this.login, name);
            if (!repo) {
                log.info("仓库不存在，开始创建");
                if (this.own === "user") {
                    return this.post("/user/repos", { name }, null);
                }
                else if (this.own === "org") {
                    const url = "orgs/" + this.login + "/repos";
                    return this.post(url, { name }, null);
                }
            }
            else {
                log.info("仓库存在，直接返回");
                return repo;
            }
        });
    }
}
export default Github;
//# sourceMappingURL=Gitee.js.map