import Command from "@tsheep.com/command";
declare class CustomCommand extends Command {
    gitAPI: any;
    name: any;
    git: any;
    get command(): void;
    get description(): void;
    get options(): any[];
    action([name, opts]: [any, any]): Promise<void>;
    preAction(): void;
    postAction(): void;
    createCustomRes(): Promise<void>;
    initLocal(): Promise<void>;
}
declare function Custom(instance: any): CustomCommand;
export default Custom;
