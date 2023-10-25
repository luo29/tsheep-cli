import Command from "@tsheep.com/command";
declare class CustomCommand extends Command {
    get command(): string;
    get description(): string;
    get options(): void;
    action([name, opts]: [any, any]): Promise<void>;
    preAction(): void;
    postAction(): void;
    createCustomRes(): Promise<void>;
    initLocal(): Promise<void>;
}
declare function Custom(instance: any): CustomCommand;
export default Custom;
