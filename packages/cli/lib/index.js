import createInitCommand from "@tsheep.com/init";
import createInstallCommand from "@tsheep.com/install";
import createCLI from "./createCLI.js";
import createLintCommand from "@tsheep.com/lint";
import createCommitCommand from "@tsheep.com/commit";
import createCustomCommand from "@tsheep.com/custom";
import "./exception.js";
export default function (argv) {
    const program = createCLI();
    createInitCommand(program);
    createInstallCommand(program);
    createLintCommand(program);
    createCommitCommand(program);
    createCustomCommand(program);
    program.parse(process.argv);
}
//# sourceMappingURL=index.js.map