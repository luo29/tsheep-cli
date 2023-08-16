import { program } from "commander";
import Semver from "Semver";
import chalk from "chalk";
import path from "node:path";
import { dirname } from "dirname-filename-esm";
import createInitCommand from "@tsheep.com/init";
import { log, isDebug } from "@tsheep.com/utils";
import fse from "fs-extra";
const __filename = dirname(import.meta);
const pkgPath = path.resolve(__filename, "../package.json");
const pkg = fse.readJSONSync(pkgPath);;
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
process.on("uncaughtException", (e) => {
  console.log(e);
  if (isDebug()) {
    console.log(e);
  } else {
    console.log(e.message);
  }
});
export default function (argv) {
  log.success("version", pkg.version);
  program
    .name(Object.keys(pkg.bin)[0])
    .usage("<command> [options]")
    .version(pkg.version)
    .option("-d, --debug", "是否开启调试模式", false)
    .hook("preAction", preAction);
  createInitCommand(program);
  program.parse(process.argv);
}
