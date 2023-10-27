import Command from "@tsheep.com/command";
declare class InitCommand extends Command {
    get command(): void;
    get description(): void;
    get options(): (string | boolean)[][];
    action([name, opts]: [any, any]): Promise<void>;
    preAction(): void;
    postAction(): void;
}
declare function Init(instance: any): InitCommand;
export default Init;
