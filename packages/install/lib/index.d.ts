import Command from "@tsheep.com/command";
declare class InstallCommand extends Command {
    get command(): string;
    get description(): string;
    get option(): void;
    action(): Promise<void>;
    downloadRepo(): Promise<void>;
    installDependencies(): Promise<void>;
    runRepo(): Promise<void>;
    generateGitAPI(): Promise<void>;
    searchGitAPI(): Promise<void>;
    doSearch(): Promise<void>;
    nextPage(): void;
    prevPage(): void;
    selectTags(): Promise<void>;
    doSelectTags(): Promise<void>;
    nextTags(): Promise<void>;
    prevTags(): Promise<void>;
}
declare function Install(instance: any): InstallCommand;
export default Install;
