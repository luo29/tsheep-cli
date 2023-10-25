import { homedir } from "node:os";
import path from "node:path";
import {
  log,
  makeInput,
  makeList,
  getLatestVersion,
  request,
  printErrorLog,
} from "@tsheep.com/utils";
const ADD_TYPE_PROJECT = "project";
const ADD_TYPE_PAGE = "page";
const ADD_TYPE = [
  { name: "项目", value: ADD_TYPE_PROJECT },
  { name: "页面", value: ADD_TYPE_PAGE },
];
const TEMP_HOME = ".tsheep-cli";
function getAddType() {
  return makeList({
    choices: ADD_TYPE,
    message: "请选择初始化类型",
    defaultValue: ADD_TYPE_PROJECT,
  });
}

// 获取项目名称
function getAddName() {
  return makeInput({
    message: "请输入项目名称",
    defaultValue: "",
    validate(v) {
      if (v.length > 0) {
        return true;
      }
      return "项目名称必须输入！";
    },
  });
}

// 选择项目模板
function getAddTemplate(ADD_TEMPLATE) {
  return makeList({
    choices: ADD_TEMPLATE,
    message: "请选择项目模板",
  });
}

// 选择所在团队
function getAddTeam(team) {
  return makeList({
    choices: team.map((item) => ({ name: item, value: item })),
    message: "请选择团队",
  });
}

// 安装缓存目录
function makeTargetPath() {
  return path.resolve(`${homedir()}/${TEMP_HOME}`, "addTemplate");
}

// 通过API获取项目模板
async function getTemplateFromApi() {
  try {
    const data = await request({
      url: "/v1/project",
      method: "get",
    });
    log.info("template", data);
    return data;
  } catch (e) {
    printErrorLog(e);
    return null;
  }
}

export default async function createTemplate(name, opts) {
  const ADD_TEMPLATE = await getTemplateFromApi();
  if (!ADD_TEMPLATE) {
    throw new Error("项目模板不存在！");
  }
  const { type = null, template } = opts;
  let addType; // 创建项目类型
  let addName; // 常见项目名称
  let selectedTemplate; // 创建项目模板
  if (type) {
    addType = type;
  } else {
    addType = await getAddType();
  }
  if (addType === ADD_TYPE_PROJECT) {
    if (name) {
      addName = name;
    } else {
      addName = await getAddName();
    }
    if (template) {
      selectedTemplate = ADD_TEMPLATE.find((tp) => tp.value === template);
      if (!selectedTemplate) {
        throw new Error(`项目模板 ${template} 不存在！`);
      }
    } else {
      // 获取团队信息
      let teamList = ADD_TEMPLATE.map((_) => _.team);
      teamList = [...new Set(teamList)];
      const addTeam = await getAddTeam(teamList);
      const addTemplate = await getAddTemplate(
        ADD_TEMPLATE.filter((_) => _.team === addTeam)
      );
      selectedTemplate = ADD_TEMPLATE.find((_) => _.value === addTemplate);
    }
    // 获取最新版本号
    const latestVersion = await getLatestVersion(selectedTemplate.npmName);
    selectedTemplate.version = latestVersion;
    const targetPath = makeTargetPath();
    return {
      type: addType,
      name: addName,
      template: selectedTemplate,
      targetPath,
    };
  } else {
    throw new Error(`创建的项目类型 ${addType} 不支持`);
  }
}
