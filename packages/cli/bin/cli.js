#!/usr/bin/env node

import importLocal from "import-local";
import { log } from "@tsheep.com/utils";
import entry from "../lib/index.js";
import { filename } from "dirname-filename-esm";
const __filename = filename(import.meta);
if (importLocal(__filename)) {
  log.info("cli", "使用本次 cli-tsheep 版本");
} else {
  entry(process.argv.slice(2));
}
