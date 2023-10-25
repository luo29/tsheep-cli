var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import path from "node:path";
import Command from "@tsheep.com/command";
import { log, makeList, printErrorLog } from "@tsheep.com/utils";
import { ESLint } from "eslint";
import { execa } from "execa";
import ora from "ora";
import jest from "jest";
import Mocha from "mocha";
import vueConfig from "./eslint/vueConfig.js";
class LintCommand extends Command {
    get command() {
        return "lint";
    }
    get description() {
        return "lint project";
    }
    get options() {
        return [];
    }
    extractESlint(resultText, type) {
        const problems = /[0-9]+ problems/;
        const warnings = /([0-9]+) warnings/;
        const errors = /([0-9]+) errors/;
        switch (type) {
            case "problems":
                return resultText.match(problems)[0].match(/[0-9]+/)[0];
            case "warnings":
                return resultText.match(warnings)[0].match(/[0-9]+/)[0];
            case "errors":
                return resultText.match(errors)[0].match(/[0-9]+/)[0];
            default:
                return null;
        }
    }
    parseESlintResult(resultText) {
        const problems = this.extractESlint(resultText, "problems");
        const errors = this.extractESlint(resultText, "errors");
        const warnings = this.extractESlint(resultText, "warnings");
        return {
            problems: +problems || 0,
            errors: +errors || 0,
            warnings: +warnings || 0,
        };
    }
    action() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.eslintAction();
            const testMode = yield makeList({
                choices: [
                    { name: "jest", value: "jest" },
                    { name: "mocha", value: "mocha" },
                ],
                message: "请选择测试模型",
            });
            if (testMode === "jest") {
                yield this.jestAction();
            }
            else {
                yield this.mochaAction();
            }
        });
    }
    eslintAction() {
        return __awaiter(this, void 0, void 0, function* () {
            log.verbose("lint");
            const spinner = ora("正在安装ESlint相关依赖").start();
            try {
                yield execa("npm", ["install", "-D", "eslint-plugin-vue"]);
                yield execa("npm", ["install", "-D", "eslint-config-airbnb-base"]);
            }
            catch (e) {
                printErrorLog(e);
            }
            finally {
                spinner.stop();
            }
            log.info("正在进行eslint检查");
            const cwd = process.cwd();
            const eslint = new ESLint({ cwd, overrideConfig: vueConfig });
            const results = yield eslint.lintFiles(["./src/**/*.js", "./src/**/*.vue"]);
            const formatter = yield eslint.loadFormatter("stylish");
            const resultText = formatter.format(results);
            const eslintResult = this.parseESlintResult(resultText);
            log.verbose("eslintResult", eslintResult);
            log.success("eslint检查完毕", "错误：" + eslintResult.errors, "，警告：" + eslintResult.warnings);
        });
    }
    jestAction() {
        return __awaiter(this, void 0, void 0, function* () {
            log.info("自动执行jest测试");
            yield jest.run("test");
            log.success("jest测试执行成功");
        });
    }
    mochaAction() {
        return __awaiter(this, void 0, void 0, function* () {
            const cwd = process.cwd();
            log.info("自动执行mocha测试");
            const mochaInstance = new Mocha();
            mochaInstance.addFile(path.resolve(cwd, "__tests__/mocha_test.js"));
            mochaInstance.run(() => {
                log.success("mocha测试执行完毕");
            });
        });
    }
}
function Lint(instance) {
    return new LintCommand(instance);
}
export default Lint;
//# sourceMappingURL=index.js.map