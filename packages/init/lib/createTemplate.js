import { log, makeInput, makeList, getLatestVersion } from "@tsheep.com/utils";
const ADD_TYPE_PROJECT = "project";
const ADD_TYPE_PAGE = "page";
const ADD_TEMPLATE = [
  {
    name: "vue3项目模板",
    value: "template-vue3",
    npmName: "@tsheep.com/template-vue3",
    version: "1.0.1",
  },
  {
    name: "react18项目模板",
    value: "template-react18",
    npmName: "@tsheep.com/template-react18",
    version: "1.0.0",
  },
];
const ADD_TYPE = [
  { name: "项目", value: ADD_TYPE_PROJECT },
  { name: "页面", value: ADD_TYPE_PAGE },
];
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
  });
}

// 选择项目模板
function getAddTemplate() {
  return makeList({
    choices: ADD_TEMPLATE,
    message: "请选择项目模板",
  });
}

export default async function createTemplate(name, opts) {
  // 获取创建类型
  const addType = await getAddType();
  log.info("addType", addType);
  if (addType === ADD_TYPE_PROJECT) {
    const addName = await getAddName();
    log.info("addName", addName);
    const addTemplate = await getAddTemplate();
    log.info("addTemplate", addTemplate);
    const selectedTemplate = ADD_TEMPLATE.find((_) => _.value === addTemplate);
    log.info("selectedTemplate", selectedTemplate);
    // 获取最新版本号
    const latestVersion = await getLatestVersion(selectedTemplate.npmName);
    log.info("latestVersion", latestVersion);
    selectedTemplate.version = latestVersion;
    return {
      type: addType,
      name: addName,
      template: selectedTemplate,
    };
  }
}
