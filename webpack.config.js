import path from "path";
import { fileURLToPath } from "url";
import nodeExternals from "webpack-node-externals";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
//webpack的所有配置信息
export default {
  optimization: {
    minimize: false, // 关闭代码压缩，可选
  },
  //入口文件
  entry: {
    "cli/bin/cli": "./src/cli/bin/cli.ts",
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
