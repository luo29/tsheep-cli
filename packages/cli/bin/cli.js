#!/usr/bin/env node

const importLocal = require("import-local");
const { log } = require("@tsheep.com/utils");
const entry = require("../lib/index");
if (importLocal(__filename)) {
  log.info("cli", "使用本次 cli-tsheep 版本");
} else {
  entry(process.argv.slice(2));
}
