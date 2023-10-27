declare function getGitPlatform(): string;
declare function getGitOwn(): string;
declare function getGitLogin(): string;
declare class GitServer {
    token: any;
    platform: any;
    own: any;
    login: any;
    constructor();
    init(): Promise<void>;
    getToken(): any;
    savePlatform(platform: any): void;
    saveOwn(own: any): void;
    saveLogin(login: any): void;
    getPlatform(): any;
    getOwn(): any;
    getLogin(): any;
    cloneRepo(fullName: any, tag: any): import("execa").ExecaChildProcess<string>;
    getRepoUrl(fullName: any): string;
    installDependencies(cwd: any, fullName: any): import("execa").ExecaChildProcess<string>;
    runRepo(cwd: any, fullName: any): Promise<import("execa").ExecaReturnValue<string>>;
    getUser(): void;
    getOrg(): void;
}
declare function clearCache(): void;
export { GitServer, getGitPlatform, clearCache, getGitOwn, getGitLogin };
