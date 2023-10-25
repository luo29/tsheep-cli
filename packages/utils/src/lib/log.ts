import  log  from "npmlog";
import isDebug from "./isDebug.js";

if (isDebug()) {
  log.level = "verbose";
} else {
  log.level = "info";
}
log.heading = "tsheep";
log.addLevel("success", 2000, { fg: "green", bold: true });
export default log;
