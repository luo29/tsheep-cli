import Command from "@tsheep.com/command";
declare class CommitCommand extends Command {
    get command(): string;
    get description(): string;
    get options(): (string | boolean)[][];
    action([{ clear }]: [{
        clear: any;
    }]): Promise<void>;
    createRemoteRepoe(): Promise<void>;
    initLocal(): Promise<void>;
}
declare function Commit(instance: any): CommitCommand;
export default Commit;
