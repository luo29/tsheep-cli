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
import { pathExistsSync } from "path-exists";
import fse from "fs-extra";
import ora from "ora";
import { execa } from "execa";
import { printErrorLog, log } from "@tsheep.com/utils";
function getCacheDir(targetPath) {
    return path.resolve(targetPath, "node_modules");
}
function makeCacheDir(targetPath) {
    const cacheDir = getCacheDir(targetPath);
    if (!pathExistsSync(cacheDir)) {
        fse.mkdirpSync(cacheDir);
    }
}
function downloadAddTemplate(targetPath, selectedTemplate) {
    return __awaiter(this, void 0, void 0, function* () {
        const { npmName, version } = selectedTemplate;
        const installCommand = "npm";
        const installArgs = ["install", `${npmName}@${version}`];
        const cwd = targetPath;
        log.info("installArgs", installArgs);
        log.info("cwd", cwd);
        const subprocess = execa(installCommand, installArgs, { cwd });
        yield subprocess;
    });
}
export default function downloadTemplate(selectedTemplate) {
    return __awaiter(this, void 0, void 0, function* () {
        const { targetPath, template } = selectedTemplate;
        makeCacheDir(targetPath);
        const spinner = ora("正在下载模板...").start();
        try {
            yield downloadAddTemplate(targetPath, template);
            spinner.stop();
            log.success("下载模板成功");
        }
        catch (e) {
            spinner.stop();
            printErrorLog(e, null);
        }
    });
}
//# sourceMappingURL=downloadTemplate.js.map