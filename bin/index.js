#!/usr/bin/env node
const yargs = require("yargs/yargs");
const { hideBin } = require("yargs/helpers");
const arg = hideBin(process.argv);
const cli = yargs(arg);
const dedent = require("dedent");
cli
  .usage("Usage：tsheep [command] <options>")
  .demandCommand(
    1,
    "A command is required. Pass --help to see all available commands and options"
  )
  .alias("h", "help")
  .alias("v", "version")
  .wrap(cli.terminalWidth()) // 宽度发生变化
  .epilogue(
    dedent`
    When a command fails,all logs are written to lerna-debug.log in the current working directory.

    For more information,find our manual at https://github.com/xxx/xxx
  `
  )
  .options({
    debug: {
      type: "boolean",
      describe: "Bootstrap debug mode",
      alias: "d",
    },
  })
  .option("registry", {
    type: "string",
    describe: "Define global registry",
    alias: "r",
  })
  .group(["debug"], "Dev Options:")
  .strict().argv;
