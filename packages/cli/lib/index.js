const commander = require("commander");
const semver = require("semver");
const createInitCommand = require("@tsheep.com/init");
const { log, isDebug } = require("@tsheep.com/utils");
const { program } = commander;
const pkg = require("../package.json");
const LOWEST_NODE_VERSION = "14.0.0";
function checkNodeVersion() {
  log.success("node version", process.version);
  if (!semver.gte(process.version, LOWEST_NODE_VERSION)) {
    throw new Error(
      `tsheep-cli需要安装${LOWEST_NODE_VERSION}以上的版本的Node.js`
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
module.exports = function (argv) {
  log.success("version", pkg.version);
  program
    .name(Object.keys(pkg.bin)[0])
    .usage("<command> [options]")
    .version(pkg.version)
    .option("-d, --debug", "是否开启调试模式", false)
    .hook("preAction", preAction);
  createInitCommand(program);
  program.parse(process.argv);
};
