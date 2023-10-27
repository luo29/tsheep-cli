import axios from "axios";
import { GitServer } from "./GitServer.js";
import log from "../log.js";

const BASE_URL = "https://gitee.com/api/v5";

class Github extends GitServer {
  service: any;
  constructor() {
    super();
    this.service = axios.create({
      baseURL: BASE_URL,
      timeout: 5000,
    });
    this.service.interceptors.response.use(
      (response) => {
        return response.data;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
  }
  get(url, params, headers) {
    return this.service({
      url,
      params: {
        ...params,
        access_token: this.token,
      },
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
    return this.get("/search/repositories", params,null);
  }

  getTags(fullName) {
    return this.get(`/repos/${fullName}/tags`,null,null);
  }

  getRepoUrl(fullName) {
    return `https://gitee.com/${fullName}.git`;
  }

  getUser() {
    return this.get("/user",null,null);
  }

  getOrg() {
    return this.get("/user/orgs",null,null);
  }

  getRepo(owner, repo) {
    return this.get(`/repos/${owner}/${repo}`,null,null).catch((err) => {
      return null;
    });
  }

  async createRepo(name) {
    const repo = await this.getRepo(this.login, name);
    if (!repo) {
      log.info("仓库不存在，开始创建");
      if (this.own === "user") {
        return this.post("/user/repos", { name },null);
      } else if (this.own === "org") {
        const url = "orgs/" + this.login + "/repos";
        return this.post(url, { name },null);
      }
    } else {
      log.info("仓库存在，直接返回");
      return repo;
    }
  }
}

export default Github;
