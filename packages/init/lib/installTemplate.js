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
import fse from "fs-extra";
import { pathExistsSync } from "path-exists";
import ora from "ora";
import ejs from "ejs";
import { glob } from "glob";
import { log, printErrorLog, makeList, makeInput } from "@tsheep.com/utils";
function getCacheFilePath(targetPath, template) {
    return path.resolve(targetPath, "node_modules", template.npmName, "template");
}
function getPluginFilePath(targetPath, template) {
    return path.resolve(targetPath, "node_modules", template.npmName, "plugins", "index.js");
}
function copyFile(targetPath, template, installDir) {
    const originFile = getCacheFilePath(targetPath, template);
    const fileList = fse.readdirSync(originFile);
    const spinner = ora("正在拷贝模板文件...").start();
    fileList.map((file) => {
        fse.copySync(`${originFile}/${file}`, `${installDir}/${file}`);
    });
    spinner.stop();
    log.success("模板拷贝成功！");
}
function ejsRender(targetPath, installDir, template, name) {
    return __awaiter(this, void 0, void 0, function* () {
        log.verbose("ejsRender", installDir, template);
        const { ignore } = template;
        let data;
        const pluginPath = getPluginFilePath(targetPath, template);
        if (pathExistsSync(pluginPath)) {
            const pluginFn = (yield import(`file:///${pluginPath}`)).default;
            const api = {
                makeList,
                makeInput,
            };
            data = yield pluginFn(api);
        }
        const ejsData = {
            data: Object.assign({ name }, data),
        };
        glob
            .glob("**", {
            cwd: installDir,
            nodir: true,
            ignore: [...ignore, "**/node_modules/**"],
        })
            .then((files) => {
            files.forEach((file) => {
                const filePath = path.join(installDir, file);
                ejs.renderFile(filePath, ejsData, (err, result) => {
                    if (!err) {
                        fse.writeFileSync(filePath, result);
                    }
                    else {
                        printErrorLog(err, null);
                    }
                });
            });
        });
    });
}
export default function installTemplate(selectedTemplate, opts) {
    return __awaiter(this, void 0, void 0, function* () {
        const { force = false } = opts;
        const { targetPath, name, template } = selectedTemplate;
        const rootDir = process.cwd();
        fse.ensureDirSync(targetPath);
        const installDir = path.resolve(`${rootDir}/${name}`);
        if (pathExistsSync(installDir)) {
            if (!force) {
                log.error(`当前目录下已存在 ${installDir} 文件夹`);
                return;
            }
            else {
                fse.removeSync(installDir);
                fse.ensureDirSync(installDir);
            }
        }
        else {
            fse.ensureDirSync(installDir);
        }
        copyFile(targetPath, template, installDir);
        yield ejsRender(targetPath, installDir, template, name);
    });
}
//# sourceMappingURL=installTemplate.js.map