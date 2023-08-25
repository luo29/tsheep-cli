import Command from "@tsheep.com/command";
import { log, printErrorLog } from "@tsheep.com/utils";
import { ESLint } from "eslint";
import { execa } from "execa";
import ora from "ora";
import jest from "jest";
import vueConfig from "./eslint/vueConfig.js";

/**
 * examples：
 * t-tsheep lint
 */
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

  async action() {
    log.verbose("lint");
    // 1.eslint
    // 准备安装依赖
    const spinner = ora("正在安装ESlint相关依赖").start();
    try {
      await execa("npm", ["install", "-D", "eslint-plugin-vue"]);
      await execa("npm", ["install", "-D", "eslint-config-airbnb-base"]);
    } catch (e) {
      printErrorLog(e);
    } finally {
      spinner.stop();
    }
    log.info("正在进行eslint检查");
    // 执行工作，eslint
    const cwd = process.cwd();
    const eslint = new ESLint({ cwd, overrideConfig: vueConfig });
    const results = await eslint.lintFiles(["./src/**/*.js", "./src/**/*.vue"]);
    const formatter = await eslint.loadFormatter("stylish");
    const resultText = formatter.format(results);
    const eslintResult = this.parseESlintResult(resultText);
    log.verbose("eslintResult", eslintResult);
    log.success(
      "eslint检查完毕",
      "错误：" + eslintResult.errors,
      "，警告：" + eslintResult.warnings
    );
    // 2.jest/mocha
    log.info("自动执行jest测试")
    await jest.run("test");
    log.success('jest测试执行成功')
  }
}
function Lint(instance) {
  return new LintCommand(instance);
}
export default Lint;
