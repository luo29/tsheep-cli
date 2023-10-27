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
const BASE_URL = "https://api.github.com";
class Github extends GitServer {
    constructor() {
        super();
        this.service = axios.create({
            baseURL: BASE_URL,
            timeout: 5000,
        });
        this.service.interceptors.request.use((config) => {
            config.headers["Authorization"] = `Bearer ${this.token}`;
            config.headers["Accept"] = " application/vnd.github+json";
            config.headers["X-GitHub-Api-Version"] = "2022-11-28";
            return config;
        }, (error) => {
            return Promise.reject(error);
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
            params,
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
    searchCode(params) {
        return this.get("/search/code", params, null);
    }
    getTags(fullName, params) {
        return this.get(`/repos/${fullName}/tags`, params, null);
    }
    getRepoUrl(fullName) {
        return `https://github.com/${fullName}.git`;
    }
    getUser() {
        return this.get("/user", null, null);
    }
    getOrg() {
        return this.get("/user/orgs", null, null);
    }
    getRepo(owner, repo) {
        return this.get(`/repos/${owner}/${repo}`, {
            accept: "application/vnd.github+json",
        }, null).catch((err) => {
            return null;
        });
    }
    createRepo(name) {
        return __awaiter(this, void 0, void 0, function* () {
            const repo = yield this.getRepo(this.login, name);
            if (!repo) {
                log.info("仓库不存在，开始创建");
                if (this.own === "user") {
                    return this.post("/user/repos", { name }, {
                        accept: "application/vnd.github+json",
                    });
                }
                else if (this.own === "org") {
                    const url = "orgs/" + this.login + "/repos";
                    return this.post(url, { name }, {
                        accept: "application/vnd.github+json",
                    });
                }
            }
            else {
                log.info("仓库存在，直接返回");
                return repo;
            }
        });
    }
    createCustomRepo(name) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(name, "212");
            const repo = yield this.getRepo(this.login, name);
            if (!repo) {
                log.info("仓库不存在，开始创建");
                console.log(repo);
                return this.post("/user/repos", { name }, {
                    accept: "application/vnd.github+json",
                });
            }
            else {
                log.info("仓库存在，直接返回");
                return repo;
            }
        });
    }
}
export default Github;
//# sourceMappingURL=Github.js.map