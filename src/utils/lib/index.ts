import log from "./log";
import isDebug from "./isDebug";
import { makeList, makeInput, makePassword } from "./inquirer";
import { getLatestVersion } from "./npm";
import request from "./request";
import Github from "./git/Github";
import Gitee from "./git/Gitee";
import { getGitPlatform, clearCache } from "./git/GitServer";
import {
  initGitServer,
  initGitType,
  createRemoteRepo,
} from "./git/GitUtils";

export function printErrorLog(e, type) {
  if (isDebug()) {
    log.error(type, e);
  } else {
    log.error(type, e.message);
  }
}
export {
  log,
  isDebug,
  makeList,
  makeInput,
  makePassword,
  getLatestVersion,
  request,
  Github,
  Gitee,
  getGitPlatform,
  initGitServer,
  initGitType,
  clearCache,
  createRemoteRepo,
};
