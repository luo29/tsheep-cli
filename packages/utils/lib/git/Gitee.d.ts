import { GitServer } from "./GitServer.js";
declare class Github extends GitServer {
    service: any;
    constructor();
    get(url: any, params: any, headers: any): any;
    post(url: any, data: any, headers: any): any;
    searchRepositories(params: any): any;
    getTags(fullName: any): any;
    getRepoUrl(fullName: any): string;
    getUser(): any;
    getOrg(): any;
    getRepo(owner: any, repo: any): any;
    createRepo(name: any): Promise<any>;
}
export default Github;
