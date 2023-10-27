import urlJoin from "url-join";
import axios from "axios";
import log from "./log";
function getNpmInfo(npmName) {
  const registry = "https://registry.npmjs.org/";
  const url = urlJoin(registry, npmName);
  return axios.get(url).then((response) => {
    try {
      return response.data;
    } catch (err) {
      return Promise.reject(err);
    }
  });
}
export function getLatestVersion(npmName) {
  return getNpmInfo(npmName).then((data) => {
    if (!data["dist-tags"] || !data["dist-tags"].latest) {
      log.error("没有 latest 版本号");
      return Promise.reject(new Error("没有 latest 版本号"));
    }
    return data["dist-tags"].latest;
  });
  //   return "1.0.0";
}
