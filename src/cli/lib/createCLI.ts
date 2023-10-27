import path from "path-browserify";
import { program } from "commander";
import fse from "fs-extra";
import Semver from "semver";
import chalk from "chalk";
import { log } from "@tsheep.com/utils";
import { dirname } from "dirname-filename-esm";

const __filename = dirname(import.meta);
const pkgPath = path.resolve(__filename, "../package.json");
const pkg = fse.readJSONSync(pkgPath);
const LOWEST_NODE_VERSION = "14.0.0";
function checkNodeVersion() {
  log.success("node version", process.version);
  if (!Semver.gte(process.version, LOWEST_NODE_VERSION)) {
    throw new Error(
      chalk.red(`tsheep-cli需要安装${LOWEST_NODE_VERSION}以上的版本的Node.js`)
    );
  }
}
function preAction() {
  // 检查Node版本
  checkNodeVersion();
}
export default function createCLI() {
  log.success("version", pkg.version);
  program
    .name(Object.keys(pkg.bin)[0])
    .usage("<command> [options]")
    .version(pkg.version)
    .option("-d, --debug", "是否开启调试模式", false)
    .hook("preAction", preAction);
  program.on("option:debug", function () {
    if (program.opts().debug) {
      log.verbose("debug", "launch debug mode!");
    }
  });
  program.on("command:*", function (obj) {
    log.error("未知的命令：" + obj[0]);
  });
  return program;
}
