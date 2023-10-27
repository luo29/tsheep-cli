import Command from "@tsheep.com/command";
declare class LintCommand extends Command {
    get command(): void;
    get description(): void;
    get options(): any[];
    extractESlint(resultText: any, type: any): any;
    parseESlintResult(resultText: any): {
        problems: number;
        errors: number;
        warnings: number;
    };
    action(): Promise<void>;
    eslintAction(): Promise<void>;
    jestAction(): Promise<void>;
    mochaAction(): Promise<void>;
}
declare function Lint(instance: any): LintCommand;
export default Lint;
