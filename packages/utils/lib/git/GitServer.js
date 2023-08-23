import path from "node:path";
import fs from "node:fs";
import { homedir, platform } from "node:os";
import { pathExistsSync } from "path-exists";
import fse from "fs-extra";
import { makePassword } from "../inquirer.js";
import { log } from "@tsheep.com/utils";

const TEMP_HOME = ".tsheep-cli";
const TEMP_TOKEN = ".token";
const TEMP_PLATFORM = ".git_platform";

function createTokenPath() {
  return path.resolve(homedir(), TEMP_HOME, TEMP_TOKEN);
}

function createPlatformPath() {
  return path.resolve(homedir(), TEMP_HOME, TEMP_PLATFORM);
}

function getGitPlatform() {
  if (pathExistsSync(createPlatformPath())) {
    return fs.readFileSync(createPlatformPath()).toString();
  }
  return null;
}

class GitServer {
  constructor() {}

  async init() {
    // 判断token是否录入
    const tokenPath = createTokenPath();
    console.log(tokenPath);
    if (pathExistsSync(tokenPath)) {
      this.token = fse.readFileSync(tokenPath).toString();
    } else {
      this.token = await this.getToken();
      fs.writeFileSync(tokenPath, this.token);
    }
    log.verbose("token", this.token);
  }
  getToken() {
    return makePassword({
      message: "请输入token信息:",
    });
  }

  savePlatform(platform) {
    fs.writeFileSync(createPlatformPath(), platform);
  }
}

export { GitServer, getGitPlatform };
