const commander = require("commander");
const createInitCommand = require("@tsheep.com/init");
const { log } = require("@tsheep.com/utils");

const { program } = commander;
const pkg = require("../package.json");
module.exports = function (argv) {
  log.success("version", pkg.version);
  program
    .name(Object.keys(pkg.bin)[0])
    .usage("<command> [options]")
    .version(pkg.version)
    .option("-d, --debug", "是否开启调试模式", false);
  createInitCommand(program);
  program.parse(process.argv);
};
