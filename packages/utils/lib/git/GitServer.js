import path from "node:path";
import fs from "node:fs";
import { homedir, platform } from "node:os";
import { pathExistsSync } from "path-exists";
import { execa } from "execa";
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
    this.platform = platform;
    fs.writeFileSync(createPlatformPath(), platform);
  }

  getPlatform() {
    return this.platform;
  }

  cloneRepo(fullName, tag) {
    if (tag) {
      return execa("git", ["clone", this.getRepoUrl(fullName), "-b", tag]);
    } else {
      return execa("git", ["clone", this.getRepoUrl(fullName)]);
    }
  }

  installDependencies(cwd, fullName) {
    const projectPath = getProjectPath(cwd, fullName);
    if (pathExistsSync(projectPath)) {
      return execa("npm", ["install"], { cwd: projectPath });
    }
    return null;
  }

  async runRepo(cwd, fullName) {
    const projectPath = getProjectPath(cwd, fullName);
    const pkg = getPackageJson(cwd, fullName);
    if (pkg) {
      const { scripts, bin, name } = pkg;
      if (bin) {
        await execa("npm", ["install", "-g", name], {
          cwd: projectPath,
          stdout: "inherit",
        });
      }
      if (scripts && scripts.dev) {
        return execa("npm", ["run", "dev"], {
          cwd: projectPath,
          stdout: "inherit",
        });
      } else if (scripts && scripts.start) {
        return execa("npm", ["start"], { cwd: projectPath, stdout: "inherit" });
      } else {
        log.warn("未找到启动命令！");
      }
    }
  }
}

function getPackageJson(cwd, fullName) {
  const projectPath = getProjectPath(cwd, fullName);
  const pkgPath = path.resolve(projectPath, "package.json");
  if (pathExistsSync(pkgPath)) {
    return fse.readJSONSync(pkgPath);
  }
}

function getProjectPath(cwd, fullName) {
  const projectName = fullName.split("/")[1];
  return path.resolve(cwd, projectName);
}

export { GitServer, getGitPlatform };
