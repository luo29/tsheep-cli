import Command from "@tsheep.com/command";
declare class CommitCommand extends Command {
    gitAPI: any;
    name: any;
    git: any;
    get command(): void;
    get description(): void;
    get options(): (string | boolean)[][];
    action([{ clear }]: [{
        clear: any;
    }]): Promise<void>;
    createRemoteRepoe(): Promise<void>;
    initLocal(): Promise<void>;
}
declare function Commit(instance: any): CommitCommand;
export default Commit;
