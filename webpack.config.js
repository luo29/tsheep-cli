import path from "path";
import { fileURLToPath } from "url";
import nodeExternals from "webpack-node-externals";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
//webpack的所有配置信息
export default {
  mode:"development",
  //入口文件
  entry: {
    "cli/bin/cli": "./src/cli/bin/cli.ts",
    "cli/lib/createCLI": "./src/cli/lib/createCLI.ts",
    "cli/lib/exception": "./src/cli/lib/exception.ts",
    "cli/lib/index": "./src/cli/lib/index.ts",
    "command/lib/index": "./src/command/lib/index.ts",
    "commit/lib/index": "./src/commit/lib/index.ts",
    "custom/lib/index": "./src/custom/lib/index.ts",
    "utils/lib/index": "./src/utils/lib/index.ts",
    "utils/lib/inquirer": "./src/utils/lib/inquirer.ts",
    "utils/lib/isDebug": "./src/utils/lib/isDebug.ts",
    "utils/lib/log": "./src/utils/lib/log.ts",
    "utils/lib/npm": "./src/utils/lib/npm.ts",
    "utils/lib/request": "./src/utils/lib/request.ts",
    "utils/lib/git/Gitee": "./src/utils/lib/git/Gitee.ts",
    "utils/lib/git/Github": "./src/utils/lib/git/Github.ts",
    "utils/lib/git/GitServer": "./src/utils/lib/git/GitServer.ts",
    "utils/lib/git/GitUtils": "./src/utils/lib/git/GitUtils.ts",
  },
  devtool: "inline-source-map",
  //指定打包文件所在目录
  output: {
    filename: "[name].js", //打包文件的名字
    path: path.resolve(__dirname, "packages"), //指定打包文件的目录
  },
  //用来指定那些模块可以用来备注引入
  resolve: {
    extensions: [".ts", ".js"],
  },
  //指定webpack的打包使用的模块
  module: {
    rules: [
      {
        test: /\.ts$/, //规则生效的文件
        use: {
          loader: "ts-loader", //要使用的loader
        },
        exclude: /node_modules/, //编译排除的文件
      },
    ],
  },

  plugins: [new ForkTsCheckerWebpackPlugin()],
  externals: [nodeExternals()],
};
