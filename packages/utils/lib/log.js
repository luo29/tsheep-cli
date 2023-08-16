const log = require("npmlog");
const isDebug = require("./isDebug");

if (isDebug()) {
  log.level = "verbose";
} else {
  log.level = "info";
}
log.heading = "tsheep";
log.addLevel("success", 2000, { fg: "green", bold: true });
module.exports = log;
