var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import ora from "ora";
import Command from "@tsheep.com/command";
import { log, makeList, initGitServer, makeInput, printErrorLog, getGitPlatform, } from "@tsheep.com/utils";
const PREV_PAGE = "${prev_page}";
const NEXT_PAHE = "${next_page}";
const SEARCH_MODE_REPO = "search_repo";
const SEARCH_MODE_CODE = "search_code";
class InstallCommand extends Command {
    get command() {
        return "install";
    }
    get description() {
        return "install project";
    }
    get option() { }
    action() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.generateGitAPI();
            yield this.searchGitAPI();
            yield this.selectTags();
            log.verbose("full_name", this.keyword);
            log.verbose("selected_tag", this.selectedTag);
            yield this.downloadRepo();
            yield this.installDependencies();
            yield this.runRepo();
        });
    }
    downloadRepo() {
        return __awaiter(this, void 0, void 0, function* () {
            const spinner = ora(`正在下载:${this.keyword}(${this.selectedTag})`).start();
            try {
                yield this.gitAPI.cloneRepo(this.keyword, this.selectedTag);
                spinner.stop();
                log.success(`下载成功${this.keyword}(${this.selectedTag})`);
            }
            catch (e) {
                spinner.stop();
                printErrorLog(e);
            }
        });
    }
    installDependencies() {
        return __awaiter(this, void 0, void 0, function* () {
            const spinner = ora(`正在安装依赖:${this.keyword}(${this.selectedTag})`).start();
            try {
                const ret = yield this.gitAPI.installDependencies(process.cwd(), this.keyword, this.selectedTag);
                spinner.stop();
                if (!ret) {
                    printErrorLog(`依赖安装失败${this.keyword}(${this.selectedTag})`);
                }
                else {
                    log.success(`依赖安装成功${this.keyword}(${this.selectedTag})`);
                }
            }
            catch (e) {
                spinner.stop();
                printErrorLog(e);
            }
        });
    }
    runRepo() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.gitAPI.runRepo(process.cwd(), this.keyword);
        });
    }
    generateGitAPI() {
        return __awaiter(this, void 0, void 0, function* () {
            this.gitAPI = yield initGitServer();
        });
    }
    searchGitAPI() {
        return __awaiter(this, void 0, void 0, function* () {
            const platform = getGitPlatform();
            if (platform === "github") {
                this.mode = yield makeList({
                    message: "请选择搜索的模式",
                    choices: [
                        { name: "仓库", value: SEARCH_MODE_REPO },
                        {
                            name: "源码",
                            value: SEARCH_MODE_CODE,
                        },
                    ],
                });
            }
            else {
                this.mode = SEARCH_MODE_REPO;
            }
            this.q = yield makeInput({
                message: "请输入搜索关键词",
                validate(value) {
                    if (value.length > 0) {
                        return true;
                    }
                    else {
                        return "请输入搜索关键词";
                    }
                },
            });
            if (this.mode === SEARCH_MODE_REPO) {
                this.language = yield makeInput({
                    message: "请输入开发语言",
                });
            }
            log.verbose("search word", this.q, this.language, platform);
            this.page = 1;
            this.per_page = 10;
            yield this.doSearch();
        });
    }
    doSearch() {
        return __awaiter(this, void 0, void 0, function* () {
            const platform = getGitPlatform();
            let searchResult;
            let count;
            let list = [];
            if (platform === "github") {
                const params = {
                    q: this.q + (this.language ? `+language:${this.language}` : ""),
                    order: "desc",
                    per_page: this.per_page,
                    page: this.page,
                };
                log.verbose("search params", params);
                if (this.mode === SEARCH_MODE_REPO) {
                    searchResult = yield this.gitAPI.searchRepositories(params);
                    list = searchResult.items.map((item) => ({
                        name: `${item.full_name}(${item.description})`,
                        value: item.full_name,
                    }));
                }
                else {
                    searchResult = yield this.gitAPI.searchCode(params);
                    list = searchResult.items.map((item) => ({
                        name: item.repository.full_name +
                            (item.repository && `(${item.repository.description})`),
                        value: item.repository.full_name,
                    }));
                }
                count = searchResult.total_count;
            }
            else {
                const params = {
                    q: this.q,
                    order: "desc",
                    per_page: this.per_page,
                    page: this.page,
                };
                if (this.language) {
                    params.language = this.language;
                }
                log.verbose("search params", params);
                searchResult = yield this.gitAPI.searchRepositories(params);
                count = 9999;
                list = searchResult.map((item) => ({
                    name: `${item.full_name}(${item.description})`,
                    value: item.full_name,
                }));
            }
            if ((platform === "github" && this.page * this.per_page < count) ||
                list.length > 0) {
                list.push({
                    name: "下一页",
                    value: NEXT_PAHE,
                });
            }
            if (this.page > 1) {
                list.unshift({
                    name: "上一页",
                    value: PREV_PAGE,
                });
            }
            if (count > 0) {
                const keyword = yield makeList({
                    message: platform === "github" ? `请选择下载的项目(共${count}条数据)` : "",
                    choices: list,
                });
                if (keyword === NEXT_PAHE) {
                    yield this.nextPage();
                    yield this.doSearch();
                }
                else if (keyword === PREV_PAGE) {
                    yield this.prevPage();
                    yield this.doSearch();
                }
                else {
                    this.keyword = keyword;
                }
            }
        });
    }
    nextPage() {
        this.page++;
    }
    prevPage() {
        this.page--;
    }
    selectTags() {
        return __awaiter(this, void 0, void 0, function* () {
            let tagsList;
            this.tagPage = 1;
            this.tarPerPage = 30;
            if (getGitPlatform() === "github") {
                tagsList = yield this.doSelectTags();
            }
            else {
                tagsList = yield this.doSelectTags();
            }
        });
    }
    doSelectTags() {
        return __awaiter(this, void 0, void 0, function* () {
            const plarform = getGitPlatform();
            let tagsListChoices = [];
            if (plarform === "github") {
                const params = {
                    page: this.tagPage,
                    per_page: this.tarPerPage,
                };
                const tagsList = yield this.gitAPI.getTags(this.keyword, params);
                tagsListChoices = tagsList.map((item) => ({
                    name: item.name,
                    value: item.name,
                }));
                if (tagsList.length > 0) {
                    tagsListChoices.push({
                        name: "下一页",
                        value: NEXT_PAHE,
                    });
                }
                if (this.tagPage > 1) {
                    tagsListChoices.unshift({
                        name: "上一页",
                        value: PREV_PAGE,
                    });
                }
            }
            else {
                const tagList = yield this.gitAPI.getTags(this.keyword);
                tagsListChoices = tagList.map((item) => ({
                    name: item.name,
                    value: item.name,
                }));
            }
            const selectedTag = yield makeList({
                message: "请选择tag",
                choices: tagsListChoices,
            });
            if (selectedTag === NEXT_PAHE) {
                yield this.nextTags();
            }
            else if (selectedTag === PREV_PAGE) {
                yield this.prevTags();
                yield this.doSelectTags();
            }
            else {
                this.selectedTag = selectedTag;
            }
        });
    }
    nextTags() {
        return __awaiter(this, void 0, void 0, function* () {
            this.tagPage++;
            yield this.doSelectTags();
        });
    }
    prevTags() {
        return __awaiter(this, void 0, void 0, function* () {
            this.tagPage--;
            yield this.doSelectTags();
        });
    }
}
function Install(instance) {
    return new InstallCommand(instance);
}
export default Install;
//# sourceMappingURL=index.js.map