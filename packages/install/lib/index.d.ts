import Command from "@tsheep.com/command";
declare class InstallCommand extends Command {
    page: number;
    keyword: any;
    selectedTag: any;
    gitAPI: any;
    mode: any;
    language: any;
    per_page: number;
    q: string;
    tagPage: number;
    tarPerPage: number;
    get command(): void;
    get description(): void;
    get option(): any[];
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
