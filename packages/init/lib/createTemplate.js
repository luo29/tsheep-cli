var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { homedir } from "node:os";
import path from "node:path";
import { log, makeInput, makeList, getLatestVersion, request, printErrorLog, } from "@tsheep.com/utils";
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
function getAddTemplate(ADD_TEMPLATE) {
    return makeList({
        choices: ADD_TEMPLATE,
        message: "请选择项目模板",
    });
}
function getAddTeam(team) {
    return makeList({
        choices: team.map((item) => ({ name: item, value: item })),
        message: "请选择团队",
    });
}
function makeTargetPath() {
    return path.resolve(`${homedir()}/${TEMP_HOME}`, "addTemplate");
}
function getTemplateFromApi() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const data = yield request({
                url: "/v1/project",
                method: "get",
            });
            log.info("template", data);
            return data;
        }
        catch (e) {
            printErrorLog(e);
            return null;
        }
    });
}
export default function createTemplate(name, opts) {
    return __awaiter(this, void 0, void 0, function* () {
        const ADD_TEMPLATE = yield getTemplateFromApi();
        if (!ADD_TEMPLATE) {
            throw new Error("项目模板不存在！");
        }
        const { type = null, template } = opts;
        let addType;
        let addName;
        let selectedTemplate;
        if (type) {
            addType = type;
        }
        else {
            addType = yield getAddType();
        }
        if (addType === ADD_TYPE_PROJECT) {
            if (name) {
                addName = name;
            }
            else {
                addName = yield getAddName();
            }
            if (template) {
                selectedTemplate = ADD_TEMPLATE.find((tp) => tp.value === template);
                if (!selectedTemplate) {
                    throw new Error(`项目模板 ${template} 不存在！`);
                }
            }
            else {
                let teamList = ADD_TEMPLATE.map((_) => _.team);
                teamList = [...new Set(teamList)];
                const addTeam = yield getAddTeam(teamList);
                const addTemplate = yield getAddTemplate(ADD_TEMPLATE.filter((_) => _.team === addTeam));
                selectedTemplate = ADD_TEMPLATE.find((_) => _.value === addTemplate);
            }
            const latestVersion = yield getLatestVersion(selectedTemplate.npmName);
            selectedTemplate.version = latestVersion;
            const targetPath = makeTargetPath();
            return {
                type: addType,
                name: addName,
                template: selectedTemplate,
                targetPath,
            };
        }
        else {
            throw new Error(`创建的项目类型 ${addType} 不支持`);
        }
    });
}
//# sourceMappingURL=createTemplate.js.map