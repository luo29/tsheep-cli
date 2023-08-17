import path from "node:path";
import { execa } from "execa";
const CLI = path.join(__dirname, "../bin/cli.js");
console.log(CLI);
const bin =
  () =>
  (...args) =>
    execa(CLI, args);
console.log(bin);
// 运行错误的命令
test("run error command", async () => {
  const { stderr } = await bin()("iii");
  expect(stderr).toContain("未知的命令：iii");
});

// 测试help命令不报错
test("should not throw error when use --help", async () => {
  let error = null;
  try {
    await bin()("--help");
  } catch (e) {
    error = e;
  }
  expect(error).toBe(null);
});

// 测试version正确显示
test("show correct version", async () => {
  const { stdout } = await bin()("--version");
  expect(stdout).toContain(require("../package.json").version);
});

// 测试是否正确开启debug模式
test("open debug mode", async () => {
  let error = null;
  try {
    await bin()("--debug");
  } catch (e) {
    error = e;
  }
  expect(error.message).toContain();
});
