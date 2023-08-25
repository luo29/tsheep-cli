import createInitCommand from "@tsheep.com/init";
import createInstallCommand from "@tsheep.com/install";
import createCLI from "./createCLI.js";
import createLintCommand from "@tsheep.com/lint";
import "./exception.js";

export default function (argv) {
  const program = createCLI();
  createInitCommand(program);
  createInstallCommand(program);
  createLintCommand(program);
  program.parse(process.argv);
}
