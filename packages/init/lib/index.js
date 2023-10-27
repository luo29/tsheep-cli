"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import Command from "@tsheep.com/command";
import { log } from "@tsheep.com/utils";
import createTemplate from "./createTemplate.js";
import downloadTemplate from "./downloadTemplate.js";
import installTemplate from "./installTemplate.js";
class InitCommand extends Command {
    get command() {
        return;
    }
    get description() {
        return;
    }
    get options() {
        return [
            ["-f, --force", "是否强制更新", false],
            ["-t, --type <type>", "项目类型(值:project/page)"],
            ["-tp, --template <template>", "模板名称"],
        ];
    }
    action([name, opts]) {
        return __awaiter(this, void 0, void 0, function* () {
            log.info("init", name, opts);
            const selectedTemplate = yield createTemplate(name, opts);
            yield downloadTemplate(selectedTemplate);
            yield installTemplate(selectedTemplate, opts);
        });
    }
    preAction() {
    }
    postAction() {
    }
}
function Init(instance) {
    return new InitCommand(instance);
}
export default Init;
//# sourceMappingURL=index.js.map