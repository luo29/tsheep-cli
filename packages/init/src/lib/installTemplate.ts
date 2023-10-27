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
  return path.resolve(
    targetPath,
    "node_modules",
    template.npmName,
    "plugins",
    "index.js"
  );
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

async function ejsRender(targetPath, installDir, template, name) {
  log.verbose("ejsRender", installDir, template);
  const { ignore } = template;
  // 执行插件
  let data;
  const pluginPath = getPluginFilePath(targetPath, template);
  if (pathExistsSync(pluginPath)) {
    const pluginFn = (await import(`file:///${pluginPath}`)).default;
    const api = {
      makeList,
      makeInput,
    };
    data = await pluginFn(api);
  }
  const ejsData = {
    data: {
      name,
      ...data,
    },
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
          } else {
            printErrorLog(err,null);
          }
        });
      });
    });
}

export default async function installTemplate(selectedTemplate, opts) {
  const { force = false } = opts;
  const { targetPath, name, template } = selectedTemplate;
  const rootDir = process.cwd();
  fse.ensureDirSync(targetPath);
  const installDir = path.resolve(`${rootDir}/${name}`);
  if (pathExistsSync(installDir)) {
    if (!force) {
      log.error(`当前目录下已存在 ${installDir} 文件夹`);
      return;
    } else {
      fse.removeSync(installDir);
      fse.ensureDirSync(installDir);
    }
  } else {
    fse.ensureDirSync(installDir);
  }
  copyFile(targetPath, template, installDir);
  await ejsRender(targetPath, installDir, template, name);
}
