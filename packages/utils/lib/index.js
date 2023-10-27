/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/utils/lib/git/GitServer.ts":
/*!****************************************!*\
  !*** ./src/utils/lib/git/GitServer.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GitServer: () => (/* binding */ GitServer),
/* harmony export */   clearCache: () => (/* binding */ clearCache),
/* harmony export */   getGitLogin: () => (/* binding */ getGitLogin),
/* harmony export */   getGitOwn: () => (/* binding */ getGitOwn),
/* harmony export */   getGitPlatform: () => (/* binding */ getGitPlatform)
/* harmony export */ });
/* harmony import */ var node_path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! node:path */ "node:path");
/* harmony import */ var node_path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(node_path__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var node_fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! node:fs */ "node:fs");
/* harmony import */ var node_fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(node_fs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var node_os__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! node:os */ "node:os");
/* harmony import */ var node_os__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(node_os__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var path_exists__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! path-exists */ "path-exists");
/* harmony import */ var path_exists__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(path_exists__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var execa__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! execa */ "execa");
/* harmony import */ var execa__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(execa__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var fs_extra__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! fs-extra */ "fs-extra");
/* harmony import */ var fs_extra__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(fs_extra__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _inquirer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../inquirer */ "./src/utils/lib/inquirer.ts");
/* harmony import */ var _log__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../log */ "./src/utils/lib/log.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};








const TEMP_HOME = ".tsheep-cli";
const TEMP_TOKEN = ".git_token";
const TEMP_PLATFORM = ".git_platform";
const TEMP_OWN = ".git_own";
const TEMP_LOGIN = ".git_login";
function createTokenPath() {
    return node_path__WEBPACK_IMPORTED_MODULE_0___default().resolve((0,node_os__WEBPACK_IMPORTED_MODULE_2__.homedir)(), TEMP_HOME, TEMP_TOKEN);
}
function createPlatformPath() {
    return node_path__WEBPACK_IMPORTED_MODULE_0___default().resolve((0,node_os__WEBPACK_IMPORTED_MODULE_2__.homedir)(), TEMP_HOME, TEMP_PLATFORM);
}
function createOwnPath() {
    return node_path__WEBPACK_IMPORTED_MODULE_0___default().resolve((0,node_os__WEBPACK_IMPORTED_MODULE_2__.homedir)(), TEMP_HOME, TEMP_OWN);
}
function createLoginPath() {
    return node_path__WEBPACK_IMPORTED_MODULE_0___default().resolve((0,node_os__WEBPACK_IMPORTED_MODULE_2__.homedir)(), TEMP_HOME, TEMP_LOGIN);
}
function getGitPlatform() {
    if ((0,path_exists__WEBPACK_IMPORTED_MODULE_3__.pathExistsSync)(createPlatformPath())) {
        return node_fs__WEBPACK_IMPORTED_MODULE_1___default().readFileSync(createPlatformPath()).toString();
    }
    return null;
}
function getGitOwn() {
    if ((0,path_exists__WEBPACK_IMPORTED_MODULE_3__.pathExistsSync)(createOwnPath())) {
        return node_fs__WEBPACK_IMPORTED_MODULE_1___default().readFileSync(createOwnPath()).toString();
    }
    return null;
}
function getGitLogin() {
    if ((0,path_exists__WEBPACK_IMPORTED_MODULE_3__.pathExistsSync)(createLoginPath())) {
        return node_fs__WEBPACK_IMPORTED_MODULE_1___default().readFileSync(createLoginPath()).toString();
    }
    return null;
}
class GitServer {
    constructor() { }
    init() {
        return __awaiter(this, void 0, void 0, function* () {
            const tokenPath = createTokenPath();
            console.log(tokenPath);
            if ((0,path_exists__WEBPACK_IMPORTED_MODULE_3__.pathExistsSync)(tokenPath)) {
                this.token = fs_extra__WEBPACK_IMPORTED_MODULE_5___default().readFileSync(tokenPath).toString();
            }
            else {
                this.token = yield this.getToken();
                node_fs__WEBPACK_IMPORTED_MODULE_1___default().writeFileSync(tokenPath, this.token);
            }
            _log__WEBPACK_IMPORTED_MODULE_7__["default"].verbose("token", this.token);
        });
    }
    getToken() {
        return (0,_inquirer__WEBPACK_IMPORTED_MODULE_6__.makePassword)({
            message: "请输入token信息:",
        });
    }
    savePlatform(platform) {
        this.platform = platform;
        node_fs__WEBPACK_IMPORTED_MODULE_1___default().writeFileSync(createPlatformPath(), platform);
    }
    saveOwn(own) {
        this.own = own;
        node_fs__WEBPACK_IMPORTED_MODULE_1___default().writeFileSync(createOwnPath(), own);
    }
    saveLogin(login) {
        this.login = login;
        node_fs__WEBPACK_IMPORTED_MODULE_1___default().writeFileSync(createLoginPath(), login);
    }
    getPlatform() {
        return this.platform;
    }
    getOwn() {
        return this.own;
    }
    getLogin() {
        return this.login;
    }
    cloneRepo(fullName, tag) {
        if (tag) {
            return (0,execa__WEBPACK_IMPORTED_MODULE_4__.execa)("git", ["clone", this.getRepoUrl(fullName), "-b", tag]);
        }
        else {
            return (0,execa__WEBPACK_IMPORTED_MODULE_4__.execa)("git", ["clone", this.getRepoUrl(fullName)]);
        }
    }
    getRepoUrl(fullName) {
        throw new Error("Method not implemented.");
    }
    installDependencies(cwd, fullName) {
        const projectPath = getProjectPath(cwd, fullName);
        if ((0,path_exists__WEBPACK_IMPORTED_MODULE_3__.pathExistsSync)(projectPath)) {
            return (0,execa__WEBPACK_IMPORTED_MODULE_4__.execa)("npm", ["install"], { cwd: projectPath });
        }
        return null;
    }
    runRepo(cwd, fullName) {
        return __awaiter(this, void 0, void 0, function* () {
            const projectPath = getProjectPath(cwd, fullName);
            const pkg = getPackageJson(cwd, fullName);
            if (pkg) {
                const { scripts, bin, name } = pkg;
                if (bin) {
                    yield (0,execa__WEBPACK_IMPORTED_MODULE_4__.execa)("npm", ["install", "-g", name], {
                        cwd: projectPath,
                        stdout: "inherit",
                    });
                }
                if (scripts && scripts.dev) {
                    return (0,execa__WEBPACK_IMPORTED_MODULE_4__.execa)("npm", ["run", "dev"], {
                        cwd: projectPath,
                        stdout: "inherit",
                    });
                }
                else if (scripts && scripts.start) {
                    return (0,execa__WEBPACK_IMPORTED_MODULE_4__.execa)("npm", ["start"], { cwd: projectPath, stdout: "inherit" });
                }
                else {
                    _log__WEBPACK_IMPORTED_MODULE_7__["default"].warn("未找到启动命令！");
                }
            }
        });
    }
    getUser() {
        throw new Error("getUser must be implemented!");
    }
    getOrg() {
        throw new Error("getOrg must be implemented!");
    }
}
function getPackageJson(cwd, fullName) {
    const projectPath = getProjectPath(cwd, fullName);
    const pkgPath = node_path__WEBPACK_IMPORTED_MODULE_0___default().resolve(projectPath, "package.json");
    if ((0,path_exists__WEBPACK_IMPORTED_MODULE_3__.pathExistsSync)(pkgPath)) {
        return fs_extra__WEBPACK_IMPORTED_MODULE_5___default().readJSONSync(pkgPath);
    }
}
function getProjectPath(cwd, fullName) {
    const projectName = fullName.split("/")[1];
    return node_path__WEBPACK_IMPORTED_MODULE_0___default().resolve(cwd, projectName);
}
function clearCache() {
    const plarform = createPlatformPath();
    const token = createTokenPath();
    const own = createOwnPath();
    const login = createLoginPath();
    fs_extra__WEBPACK_IMPORTED_MODULE_5___default().removeSync(plarform);
    fs_extra__WEBPACK_IMPORTED_MODULE_5___default().removeSync(token);
    fs_extra__WEBPACK_IMPORTED_MODULE_5___default().removeSync(own);
    fs_extra__WEBPACK_IMPORTED_MODULE_5___default().removeSync(login);
}



/***/ }),

/***/ "./src/utils/lib/git/GitUtils.ts":
/*!***************************************!*\
  !*** ./src/utils/lib/git/GitUtils.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createRemoteRepo: () => (/* binding */ createRemoteRepo),
/* harmony export */   initGitServer: () => (/* binding */ initGitServer),
/* harmony export */   initGitType: () => (/* binding */ initGitType)
/* harmony export */ });
/* harmony import */ var _inquirer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../inquirer */ "./src/utils/lib/inquirer.ts");
/* harmony import */ var _log__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../log */ "./src/utils/lib/log.ts");
/* harmony import */ var _Github__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Github */ "./src/utils/lib/git/Github.ts");
/* harmony import */ var _Gitee__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Gitee */ "./src/utils/lib/git/Gitee.ts");
/* harmony import */ var _GitServer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./GitServer */ "./src/utils/lib/git/GitServer.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};





function initGitServer() {
    return __awaiter(this, void 0, void 0, function* () {
        let platform = (0,_GitServer__WEBPACK_IMPORTED_MODULE_4__.getGitPlatform)();
        _log__WEBPACK_IMPORTED_MODULE_1__["default"].verbose("plarform", platform);
        if (!platform) {
            platform = yield (0,_inquirer__WEBPACK_IMPORTED_MODULE_0__.makeList)({
                message: "请选择Git平台",
                choices: [
                    {
                        name: "Github",
                        value: "github",
                    },
                    {
                        name: "Gitee",
                        value: "gitee",
                    },
                ],
            });
        }
        _log__WEBPACK_IMPORTED_MODULE_1__["default"].verbose("plarform", platform);
        let gitAPI;
        if (platform === "github") {
            gitAPI = new _Github__WEBPACK_IMPORTED_MODULE_2__["default"]();
        }
        else {
            gitAPI = new _Gitee__WEBPACK_IMPORTED_MODULE_3__["default"]();
        }
        gitAPI.savePlatform(platform);
        yield gitAPI.init();
        return gitAPI;
    });
}
function initGitType(gitAPI) {
    return __awaiter(this, void 0, void 0, function* () {
        let gitOwn = (0,_GitServer__WEBPACK_IMPORTED_MODULE_4__.getGitOwn)();
        let gitLogin = (0,_GitServer__WEBPACK_IMPORTED_MODULE_4__.getGitLogin)();
        if (!gitLogin && !gitOwn) {
            const user = yield gitAPI.getUser();
            const org = yield gitAPI.getOrg();
            _log__WEBPACK_IMPORTED_MODULE_1__["default"].verbose("user", user);
            _log__WEBPACK_IMPORTED_MODULE_1__["default"].verbose("org", org);
            if (!gitOwn) {
                gitOwn = yield (0,_inquirer__WEBPACK_IMPORTED_MODULE_0__.makeList)({
                    message: "请选择仓库类型",
                    choices: [
                        {
                            name: "User",
                            value: "user",
                        },
                        {
                            name: "Organization",
                            value: "org",
                        },
                    ],
                });
                _log__WEBPACK_IMPORTED_MODULE_1__["default"].verbose("gitOwn", gitOwn);
            }
            if (gitOwn === "user") {
                gitLogin = user === null || user === void 0 ? void 0 : user.login;
            }
            else {
                const orgList = org.map((item) => ({
                    name: item.name || item.login,
                    value: item.login,
                }));
                gitLogin = yield (0,_inquirer__WEBPACK_IMPORTED_MODULE_0__.makeList)({
                    message: "请选择组织",
                    choices: orgList,
                });
            }
            _log__WEBPACK_IMPORTED_MODULE_1__["default"].verbose("gitLogin", gitLogin);
        }
        if (!gitLogin || !gitOwn) {
            throw new Error(`为获取到用户的Git登录信息！请使用 "t-tsheep commit --clear" 清除缓存后重试`);
        }
        gitAPI.saveOwn(gitOwn);
        gitAPI.saveLogin(gitLogin);
        return gitLogin;
    });
}
function createRemoteRepo(gitAPI, name) {
    return __awaiter(this, void 0, void 0, function* () {
        const ret = yield gitAPI.createRepo(name);
    });
}


/***/ }),

/***/ "./src/utils/lib/git/Gitee.ts":
/*!************************************!*\
  !*** ./src/utils/lib/git/Gitee.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _GitServer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GitServer */ "./src/utils/lib/git/GitServer.ts");
/* harmony import */ var _log__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../log */ "./src/utils/lib/log.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



const BASE_URL = "https://gitee.com/api/v5";
class Github extends _GitServer__WEBPACK_IMPORTED_MODULE_1__.GitServer {
    constructor() {
        super();
        this.service = axios__WEBPACK_IMPORTED_MODULE_0___default().create({
            baseURL: BASE_URL,
            timeout: 5000,
        });
        this.service.interceptors.response.use((response) => {
            return response.data;
        }, (error) => {
            return Promise.reject(error);
        });
    }
    get(url, params, headers) {
        return this.service({
            url,
            params: Object.assign(Object.assign({}, params), { access_token: this.token }),
            method: "get",
            headers,
        });
    }
    post(url, data, headers) {
        return this.service({
            url,
            data,
            params: {
                access_token: this.token,
            },
            method: "post",
            headers,
        });
    }
    searchRepositories(params) {
        return this.get("/search/repositories", params, null);
    }
    getTags(fullName) {
        return this.get(`/repos/${fullName}/tags`, null, null);
    }
    getRepoUrl(fullName) {
        return `https://gitee.com/${fullName}.git`;
    }
    getUser() {
        return this.get("/user", null, null);
    }
    getOrg() {
        return this.get("/user/orgs", null, null);
    }
    getRepo(owner, repo) {
        return this.get(`/repos/${owner}/${repo}`, null, null).catch((err) => {
            return null;
        });
    }
    createRepo(name) {
        return __awaiter(this, void 0, void 0, function* () {
            const repo = yield this.getRepo(this.login, name);
            if (!repo) {
                _log__WEBPACK_IMPORTED_MODULE_2__["default"].info("仓库不存在，开始创建");
                if (this.own === "user") {
                    return this.post("/user/repos", { name }, null);
                }
                else if (this.own === "org") {
                    const url = "orgs/" + this.login + "/repos";
                    return this.post(url, { name }, null);
                }
            }
            else {
                _log__WEBPACK_IMPORTED_MODULE_2__["default"].info("仓库存在，直接返回");
                return repo;
            }
        });
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Github);


/***/ }),

/***/ "./src/utils/lib/git/Github.ts":
/*!*************************************!*\
  !*** ./src/utils/lib/git/Github.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _GitServer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GitServer */ "./src/utils/lib/git/GitServer.ts");
/* harmony import */ var _log__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../log */ "./src/utils/lib/log.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



const BASE_URL = "https://api.github.com";
class Github extends _GitServer__WEBPACK_IMPORTED_MODULE_1__.GitServer {
    constructor() {
        super();
        this.service = axios__WEBPACK_IMPORTED_MODULE_0___default().create({
            baseURL: BASE_URL,
            timeout: 5000,
        });
        this.service.interceptors.request.use((config) => {
            config.headers["Authorization"] = `Bearer ${this.token}`;
            config.headers["Accept"] = " application/vnd.github+json";
            config.headers["X-GitHub-Api-Version"] = "2022-11-28";
            return config;
        }, (error) => {
            return Promise.reject(error);
        });
        this.service.interceptors.response.use((response) => {
            return response.data;
        }, (error) => {
            return Promise.reject(error);
        });
    }
    get(url, params, headers) {
        return this.service({
            url,
            params,
            method: "get",
            headers,
        });
    }
    post(url, data, headers) {
        return this.service({
            url,
            data,
            params: {
                access_token: this.token,
            },
            method: "post",
            headers,
        });
    }
    searchRepositories(params) {
        return this.get("/search/repositories", params, null);
    }
    searchCode(params) {
        return this.get("/search/code", params, null);
    }
    getTags(fullName, params) {
        return this.get(`/repos/${fullName}/tags`, params, null);
    }
    getRepoUrl(fullName) {
        return `https://github.com/${fullName}.git`;
    }
    getUser() {
        return this.get("/user", null, null);
    }
    getOrg() {
        return this.get("/user/orgs", null, null);
    }
    getRepo(owner, repo) {
        return this.get(`/repos/${owner}/${repo}`, {
            accept: "application/vnd.github+json",
        }, null).catch((err) => {
            return null;
        });
    }
    createRepo(name) {
        return __awaiter(this, void 0, void 0, function* () {
            const repo = yield this.getRepo(this.login, name);
            if (!repo) {
                _log__WEBPACK_IMPORTED_MODULE_2__["default"].info("仓库不存在，开始创建");
                if (this.own === "user") {
                    return this.post("/user/repos", { name }, {
                        accept: "application/vnd.github+json",
                    });
                }
                else if (this.own === "org") {
                    const url = "orgs/" + this.login + "/repos";
                    return this.post(url, { name }, {
                        accept: "application/vnd.github+json",
                    });
                }
            }
            else {
                _log__WEBPACK_IMPORTED_MODULE_2__["default"].info("仓库存在，直接返回");
                return repo;
            }
        });
    }
    createCustomRepo(name) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(name, "212");
            const repo = yield this.getRepo(this.login, name);
            if (!repo) {
                _log__WEBPACK_IMPORTED_MODULE_2__["default"].info("仓库不存在，开始创建");
                console.log(repo);
                return this.post("/user/repos", { name }, {
                    accept: "application/vnd.github+json",
                });
            }
            else {
                _log__WEBPACK_IMPORTED_MODULE_2__["default"].info("仓库存在，直接返回");
                return repo;
            }
        });
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Github);


/***/ }),

/***/ "./src/utils/lib/inquirer.ts":
/*!***********************************!*\
  !*** ./src/utils/lib/inquirer.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   makeInput: () => (/* binding */ makeInput),
/* harmony export */   makeList: () => (/* binding */ makeList),
/* harmony export */   makePassword: () => (/* binding */ makePassword)
/* harmony export */ });
/* harmony import */ var inquirer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! inquirer */ "inquirer");
/* harmony import */ var inquirer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(inquirer__WEBPACK_IMPORTED_MODULE_0__);

function make({ choices, defaultValue, message = "请选择", type = "list", require = true, mask = "*", validate, pageSize, loop, }) {
    const options = {
        name: "name",
        defaultValue: defaultValue,
        message,
        type,
        require,
        mask,
        validate,
        pageSize,
        loop,
    };
    if (type === "list") {
        options.choices = choices;
    }
    return inquirer__WEBPACK_IMPORTED_MODULE_0___default().prompt(options).then((answer) => answer.name);
}
function makeList(params) {
    return make(Object.assign({}, params));
}
function makeInput(params) {
    return make(Object.assign({ type: "input" }, params));
}
function makePassword(params) {
    return make(Object.assign({ type: "password" }, params));
}


/***/ }),

/***/ "./src/utils/lib/isDebug.ts":
/*!**********************************!*\
  !*** ./src/utils/lib/isDebug.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isDebug)
/* harmony export */ });
function isDebug() {
    return process.argv.includes("--debug") || process.argv.includes("-d");
}


/***/ }),

/***/ "./src/utils/lib/log.ts":
/*!******************************!*\
  !*** ./src/utils/lib/log.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var npmlog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! npmlog */ "npmlog");
/* harmony import */ var npmlog__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(npmlog__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _isDebug__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isDebug */ "./src/utils/lib/isDebug.ts");


if ((0,_isDebug__WEBPACK_IMPORTED_MODULE_1__["default"])()) {
    (npmlog__WEBPACK_IMPORTED_MODULE_0___default().level) = "verbose";
}
else {
    (npmlog__WEBPACK_IMPORTED_MODULE_0___default().level) = "info";
}
(npmlog__WEBPACK_IMPORTED_MODULE_0___default().heading) = "tsheep";
npmlog__WEBPACK_IMPORTED_MODULE_0___default().addLevel("success", 2000, { fg: "green", bold: true });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((npmlog__WEBPACK_IMPORTED_MODULE_0___default()));


/***/ }),

/***/ "./src/utils/lib/npm.ts":
/*!******************************!*\
  !*** ./src/utils/lib/npm.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getLatestVersion: () => (/* binding */ getLatestVersion)
/* harmony export */ });
/* harmony import */ var url_join__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! url-join */ "url-join");
/* harmony import */ var url_join__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(url_join__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _log__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./log */ "./src/utils/lib/log.ts");



function getNpmInfo(npmName) {
    const registry = "https://registry.npmjs.org/";
    const url = url_join__WEBPACK_IMPORTED_MODULE_0___default()(registry, npmName);
    return axios__WEBPACK_IMPORTED_MODULE_1___default().get(url).then((response) => {
        try {
            return response.data;
        }
        catch (err) {
            return Promise.reject(err);
        }
    });
}
function getLatestVersion(npmName) {
    return getNpmInfo(npmName).then((data) => {
        if (!data["dist-tags"] || !data["dist-tags"].latest) {
            _log__WEBPACK_IMPORTED_MODULE_2__["default"].error("没有 latest 版本号");
            return Promise.reject(new Error("没有 latest 版本号"));
        }
        return data["dist-tags"].latest;
    });
}


/***/ }),

/***/ "./src/utils/lib/request.ts":
/*!**********************************!*\
  !*** ./src/utils/lib/request.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

const BASE_URL = "http://127.0.0.1:7001";
const request = axios__WEBPACK_IMPORTED_MODULE_0___default().create({
    baseURL: BASE_URL,
    timeout: 5000,
});
function onSuccess(response) {
    return response.data;
}
function onFailed(error) {
    return Promise.reject(error);
}
request.interceptors.response.use(onSuccess, onFailed);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (request);


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ "execa":
/*!************************!*\
  !*** external "execa" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("execa");

/***/ }),

/***/ "fs-extra":
/*!***************************!*\
  !*** external "fs-extra" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("fs-extra");

/***/ }),

/***/ "inquirer":
/*!***************************!*\
  !*** external "inquirer" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("inquirer");

/***/ }),

/***/ "npmlog":
/*!*************************!*\
  !*** external "npmlog" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("npmlog");

/***/ }),

/***/ "path-exists":
/*!******************************!*\
  !*** external "path-exists" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("path-exists");

/***/ }),

/***/ "url-join":
/*!***************************!*\
  !*** external "url-join" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("url-join");

/***/ }),

/***/ "node:fs":
/*!***************!*\
  !*** node:fs ***!
  \***************/
/***/ (() => {

throw new Error("Module build failed: UnhandledSchemeError: Reading from \"node:fs\" is not handled by plugins (Unhandled scheme).\nWebpack supports \"data:\" and \"file:\" URIs by default.\nYou may need an additional plugin to handle \"node:\" URIs.\n    at /home/xiezhiyang/tsheep/tsheep-cli/node_modules/webpack/lib/NormalModule.js:838:25\n    at Hook.eval [as callAsync] (eval at create (/home/xiezhiyang/tsheep/tsheep-cli/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:6:1)\n    at Object.processResource (/home/xiezhiyang/tsheep/tsheep-cli/node_modules/webpack/lib/NormalModule.js:835:8)\n    at processResource (/home/xiezhiyang/tsheep/tsheep-cli/node_modules/loader-runner/lib/LoaderRunner.js:220:11)\n    at iteratePitchingLoaders (/home/xiezhiyang/tsheep/tsheep-cli/node_modules/loader-runner/lib/LoaderRunner.js:171:10)\n    at runLoaders (/home/xiezhiyang/tsheep/tsheep-cli/node_modules/loader-runner/lib/LoaderRunner.js:398:2)\n    at NormalModule._doBuild (/home/xiezhiyang/tsheep/tsheep-cli/node_modules/webpack/lib/NormalModule.js:825:3)\n    at NormalModule.build (/home/xiezhiyang/tsheep/tsheep-cli/node_modules/webpack/lib/NormalModule.js:969:15)\n    at /home/xiezhiyang/tsheep/tsheep-cli/node_modules/webpack/lib/Compilation.js:1377:12\n    at NormalModule.needBuild (/home/xiezhiyang/tsheep/tsheep-cli/node_modules/webpack/lib/NormalModule.js:1257:32)");

/***/ }),

/***/ "node:os":
/*!***************!*\
  !*** node:os ***!
  \***************/
/***/ (() => {

throw new Error("Module build failed: UnhandledSchemeError: Reading from \"node:os\" is not handled by plugins (Unhandled scheme).\nWebpack supports \"data:\" and \"file:\" URIs by default.\nYou may need an additional plugin to handle \"node:\" URIs.\n    at /home/xiezhiyang/tsheep/tsheep-cli/node_modules/webpack/lib/NormalModule.js:838:25\n    at Hook.eval [as callAsync] (eval at create (/home/xiezhiyang/tsheep/tsheep-cli/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:6:1)\n    at Object.processResource (/home/xiezhiyang/tsheep/tsheep-cli/node_modules/webpack/lib/NormalModule.js:835:8)\n    at processResource (/home/xiezhiyang/tsheep/tsheep-cli/node_modules/loader-runner/lib/LoaderRunner.js:220:11)\n    at iteratePitchingLoaders (/home/xiezhiyang/tsheep/tsheep-cli/node_modules/loader-runner/lib/LoaderRunner.js:171:10)\n    at runLoaders (/home/xiezhiyang/tsheep/tsheep-cli/node_modules/loader-runner/lib/LoaderRunner.js:398:2)\n    at NormalModule._doBuild (/home/xiezhiyang/tsheep/tsheep-cli/node_modules/webpack/lib/NormalModule.js:825:3)\n    at NormalModule.build (/home/xiezhiyang/tsheep/tsheep-cli/node_modules/webpack/lib/NormalModule.js:969:15)\n    at /home/xiezhiyang/tsheep/tsheep-cli/node_modules/webpack/lib/Compilation.js:1377:12\n    at NormalModule.needBuild (/home/xiezhiyang/tsheep/tsheep-cli/node_modules/webpack/lib/NormalModule.js:1257:32)");

/***/ }),

/***/ "node:path":
/*!*****************!*\
  !*** node:path ***!
  \*****************/
/***/ (() => {

throw new Error("Module build failed: UnhandledSchemeError: Reading from \"node:path\" is not handled by plugins (Unhandled scheme).\nWebpack supports \"data:\" and \"file:\" URIs by default.\nYou may need an additional plugin to handle \"node:\" URIs.\n    at /home/xiezhiyang/tsheep/tsheep-cli/node_modules/webpack/lib/NormalModule.js:838:25\n    at Hook.eval [as callAsync] (eval at create (/home/xiezhiyang/tsheep/tsheep-cli/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:6:1)\n    at Hook.CALL_ASYNC_DELEGATE [as _callAsync] (/home/xiezhiyang/tsheep/tsheep-cli/node_modules/tapable/lib/Hook.js:18:14)\n    at Object.processResource (/home/xiezhiyang/tsheep/tsheep-cli/node_modules/webpack/lib/NormalModule.js:835:8)\n    at processResource (/home/xiezhiyang/tsheep/tsheep-cli/node_modules/loader-runner/lib/LoaderRunner.js:220:11)\n    at iteratePitchingLoaders (/home/xiezhiyang/tsheep/tsheep-cli/node_modules/loader-runner/lib/LoaderRunner.js:171:10)\n    at runLoaders (/home/xiezhiyang/tsheep/tsheep-cli/node_modules/loader-runner/lib/LoaderRunner.js:398:2)\n    at NormalModule._doBuild (/home/xiezhiyang/tsheep/tsheep-cli/node_modules/webpack/lib/NormalModule.js:825:3)\n    at NormalModule.build (/home/xiezhiyang/tsheep/tsheep-cli/node_modules/webpack/lib/NormalModule.js:969:15)\n    at /home/xiezhiyang/tsheep/tsheep-cli/node_modules/webpack/lib/Compilation.js:1377:12");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!********************************!*\
  !*** ./src/utils/lib/index.ts ***!
  \********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Gitee: () => (/* reexport safe */ _git_Gitee__WEBPACK_IMPORTED_MODULE_6__["default"]),
/* harmony export */   Github: () => (/* reexport safe */ _git_Github__WEBPACK_IMPORTED_MODULE_5__["default"]),
/* harmony export */   clearCache: () => (/* reexport safe */ _git_GitServer__WEBPACK_IMPORTED_MODULE_7__.clearCache),
/* harmony export */   createRemoteRepo: () => (/* reexport safe */ _git_GitUtils__WEBPACK_IMPORTED_MODULE_8__.createRemoteRepo),
/* harmony export */   getGitPlatform: () => (/* reexport safe */ _git_GitServer__WEBPACK_IMPORTED_MODULE_7__.getGitPlatform),
/* harmony export */   getLatestVersion: () => (/* reexport safe */ _npm__WEBPACK_IMPORTED_MODULE_3__.getLatestVersion),
/* harmony export */   initGitServer: () => (/* reexport safe */ _git_GitUtils__WEBPACK_IMPORTED_MODULE_8__.initGitServer),
/* harmony export */   initGitType: () => (/* reexport safe */ _git_GitUtils__WEBPACK_IMPORTED_MODULE_8__.initGitType),
/* harmony export */   isDebug: () => (/* reexport safe */ _isDebug__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   log: () => (/* reexport safe */ _log__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   makeInput: () => (/* reexport safe */ _inquirer__WEBPACK_IMPORTED_MODULE_2__.makeInput),
/* harmony export */   makeList: () => (/* reexport safe */ _inquirer__WEBPACK_IMPORTED_MODULE_2__.makeList),
/* harmony export */   makePassword: () => (/* reexport safe */ _inquirer__WEBPACK_IMPORTED_MODULE_2__.makePassword),
/* harmony export */   printErrorLog: () => (/* binding */ printErrorLog),
/* harmony export */   request: () => (/* reexport safe */ _request__WEBPACK_IMPORTED_MODULE_4__["default"])
/* harmony export */ });
/* harmony import */ var _log__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./log */ "./src/utils/lib/log.ts");
/* harmony import */ var _isDebug__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isDebug */ "./src/utils/lib/isDebug.ts");
/* harmony import */ var _inquirer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./inquirer */ "./src/utils/lib/inquirer.ts");
/* harmony import */ var _npm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./npm */ "./src/utils/lib/npm.ts");
/* harmony import */ var _request__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./request */ "./src/utils/lib/request.ts");
/* harmony import */ var _git_Github__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./git/Github */ "./src/utils/lib/git/Github.ts");
/* harmony import */ var _git_Gitee__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./git/Gitee */ "./src/utils/lib/git/Gitee.ts");
/* harmony import */ var _git_GitServer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./git/GitServer */ "./src/utils/lib/git/GitServer.ts");
/* harmony import */ var _git_GitUtils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./git/GitUtils */ "./src/utils/lib/git/GitUtils.ts");









function printErrorLog(e, type) {
    if ((0,_isDebug__WEBPACK_IMPORTED_MODULE_1__["default"])()) {
        _log__WEBPACK_IMPORTED_MODULE_0__["default"].error(type, e);
    }
    else {
        _log__WEBPACK_IMPORTED_MODULE_0__["default"].error(type, e.message);
    }
}


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxJQUFJLG9EQUFPLEVBQUUsRUFBRTtRQUNiLDRDQUFHLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztLQUNwQjtTQUFNO1FBQ0wsNENBQUcsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQztLQUM1QjtBQUNILENBQUM7QUFnQkMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yb290Ly4vc3JjL3V0aWxzL2xpYi9naXQvR2l0U2VydmVyLnRzIiwid2VicGFjazovL3Jvb3QvLi9zcmMvdXRpbHMvbGliL2dpdC9HaXRVdGlscy50cyIsIndlYnBhY2s6Ly9yb290Ly4vc3JjL3V0aWxzL2xpYi9naXQvR2l0ZWUudHMiLCJ3ZWJwYWNrOi8vcm9vdC8uL3NyYy91dGlscy9saWIvZ2l0L0dpdGh1Yi50cyIsIndlYnBhY2s6Ly9yb290Ly4vc3JjL3V0aWxzL2xpYi9pbnF1aXJlci50cyIsIndlYnBhY2s6Ly9yb290Ly4vc3JjL3V0aWxzL2xpYi9pc0RlYnVnLnRzIiwid2VicGFjazovL3Jvb3QvLi9zcmMvdXRpbHMvbGliL2xvZy50cyIsIndlYnBhY2s6Ly9yb290Ly4vc3JjL3V0aWxzL2xpYi9ucG0udHMiLCJ3ZWJwYWNrOi8vcm9vdC8uL3NyYy91dGlscy9saWIvcmVxdWVzdC50cyIsIndlYnBhY2s6Ly9yb290L2V4dGVybmFsIGNvbW1vbmpzIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly9yb290L2V4dGVybmFsIGNvbW1vbmpzIFwiZXhlY2FcIiIsIndlYnBhY2s6Ly9yb290L2V4dGVybmFsIGNvbW1vbmpzIFwiZnMtZXh0cmFcIiIsIndlYnBhY2s6Ly9yb290L2V4dGVybmFsIGNvbW1vbmpzIFwiaW5xdWlyZXJcIiIsIndlYnBhY2s6Ly9yb290L2V4dGVybmFsIGNvbW1vbmpzIFwibnBtbG9nXCIiLCJ3ZWJwYWNrOi8vcm9vdC9leHRlcm5hbCBjb21tb25qcyBcInBhdGgtZXhpc3RzXCIiLCJ3ZWJwYWNrOi8vcm9vdC9leHRlcm5hbCBjb21tb25qcyBcInVybC1qb2luXCIiLCJ3ZWJwYWNrOi8vcm9vdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yb290L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jvb3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jvb3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yb290L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcm9vdC8uL3NyYy91dGlscy9saWIvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHBhdGggZnJvbSBcIm5vZGU6cGF0aFwiO1xuaW1wb3J0IGZzIGZyb20gXCJub2RlOmZzXCI7XG5pbXBvcnQgeyBob21lZGlyLCBwbGF0Zm9ybSB9IGZyb20gXCJub2RlOm9zXCI7XG5pbXBvcnQgeyBwYXRoRXhpc3RzU3luYyB9IGZyb20gXCJwYXRoLWV4aXN0c1wiO1xuaW1wb3J0IHsgZXhlY2EgfSBmcm9tIFwiZXhlY2FcIjtcbmltcG9ydCBmc2UgZnJvbSBcImZzLWV4dHJhXCI7XG5pbXBvcnQgeyBtYWtlUGFzc3dvcmQgfSBmcm9tIFwiLi4vaW5xdWlyZXJcIjtcbmltcG9ydCBsb2cgZnJvbSBcIi4uL2xvZ1wiO1xuXG5jb25zdCBURU1QX0hPTUUgPSBcIi50c2hlZXAtY2xpXCI7XG5jb25zdCBURU1QX1RPS0VOID0gXCIuZ2l0X3Rva2VuXCI7XG5jb25zdCBURU1QX1BMQVRGT1JNID0gXCIuZ2l0X3BsYXRmb3JtXCI7XG5jb25zdCBURU1QX09XTiA9IFwiLmdpdF9vd25cIjtcbmNvbnN0IFRFTVBfTE9HSU4gPSBcIi5naXRfbG9naW5cIjtcblxuZnVuY3Rpb24gY3JlYXRlVG9rZW5QYXRoKCkge1xuICByZXR1cm4gcGF0aC5yZXNvbHZlKGhvbWVkaXIoKSwgVEVNUF9IT01FLCBURU1QX1RPS0VOKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlUGxhdGZvcm1QYXRoKCkge1xuICByZXR1cm4gcGF0aC5yZXNvbHZlKGhvbWVkaXIoKSwgVEVNUF9IT01FLCBURU1QX1BMQVRGT1JNKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlT3duUGF0aCgpIHtcbiAgcmV0dXJuIHBhdGgucmVzb2x2ZShob21lZGlyKCksIFRFTVBfSE9NRSwgVEVNUF9PV04pO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVMb2dpblBhdGgoKSB7XG4gIHJldHVybiBwYXRoLnJlc29sdmUoaG9tZWRpcigpLCBURU1QX0hPTUUsIFRFTVBfTE9HSU4pO1xufVxuXG5mdW5jdGlvbiBnZXRHaXRQbGF0Zm9ybSgpIHtcbiAgaWYgKHBhdGhFeGlzdHNTeW5jKGNyZWF0ZVBsYXRmb3JtUGF0aCgpKSkge1xuICAgIHJldHVybiBmcy5yZWFkRmlsZVN5bmMoY3JlYXRlUGxhdGZvcm1QYXRoKCkpLnRvU3RyaW5nKCk7XG4gIH1cbiAgcmV0dXJuIG51bGw7XG59XG5cbmZ1bmN0aW9uIGdldEdpdE93bigpIHtcbiAgaWYgKHBhdGhFeGlzdHNTeW5jKGNyZWF0ZU93blBhdGgoKSkpIHtcbiAgICByZXR1cm4gZnMucmVhZEZpbGVTeW5jKGNyZWF0ZU93blBhdGgoKSkudG9TdHJpbmcoKTtcbiAgfVxuICByZXR1cm4gbnVsbDtcbn1cblxuZnVuY3Rpb24gZ2V0R2l0TG9naW4oKSB7XG4gIGlmIChwYXRoRXhpc3RzU3luYyhjcmVhdGVMb2dpblBhdGgoKSkpIHtcbiAgICByZXR1cm4gZnMucmVhZEZpbGVTeW5jKGNyZWF0ZUxvZ2luUGF0aCgpKS50b1N0cmluZygpO1xuICB9XG4gIHJldHVybiBudWxsO1xufVxuXG5jbGFzcyBHaXRTZXJ2ZXIge1xuICB0b2tlbjogYW55O1xuICBwbGF0Zm9ybTogYW55O1xuICBvd246IGFueTtcbiAgbG9naW46IGFueTtcbiAgY29uc3RydWN0b3IoKSB7fVxuXG4gIGFzeW5jIGluaXQoKSB7XG4gICAgLy8g5Yik5patdG9rZW7mmK/lkKblvZXlhaVcbiAgICBjb25zdCB0b2tlblBhdGggPSBjcmVhdGVUb2tlblBhdGgoKTtcbiAgICBjb25zb2xlLmxvZyh0b2tlblBhdGgpO1xuICAgIGlmIChwYXRoRXhpc3RzU3luYyh0b2tlblBhdGgpKSB7XG4gICAgICB0aGlzLnRva2VuID0gZnNlLnJlYWRGaWxlU3luYyh0b2tlblBhdGgpLnRvU3RyaW5nKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudG9rZW4gPSBhd2FpdCB0aGlzLmdldFRva2VuKCk7XG4gICAgICBmcy53cml0ZUZpbGVTeW5jKHRva2VuUGF0aCwgdGhpcy50b2tlbik7XG4gICAgfVxuICAgIGxvZy52ZXJib3NlKFwidG9rZW5cIiwgdGhpcy50b2tlbik7XG4gIH1cbiAgZ2V0VG9rZW4oKSB7XG4gICAgcmV0dXJuIG1ha2VQYXNzd29yZCh7XG4gICAgICBtZXNzYWdlOiBcIuivt+i+k+WFpXRva2Vu5L+h5oGvOlwiLFxuICAgIH0pO1xuICB9XG5cbiAgc2F2ZVBsYXRmb3JtKHBsYXRmb3JtKSB7XG4gICAgdGhpcy5wbGF0Zm9ybSA9IHBsYXRmb3JtO1xuICAgIGZzLndyaXRlRmlsZVN5bmMoY3JlYXRlUGxhdGZvcm1QYXRoKCksIHBsYXRmb3JtKTtcbiAgfVxuXG4gIHNhdmVPd24ob3duKSB7XG4gICAgdGhpcy5vd24gPSBvd247XG4gICAgZnMud3JpdGVGaWxlU3luYyhjcmVhdGVPd25QYXRoKCksIG93bik7XG4gIH1cblxuICBzYXZlTG9naW4obG9naW4pIHtcbiAgICB0aGlzLmxvZ2luID0gbG9naW47XG4gICAgZnMud3JpdGVGaWxlU3luYyhjcmVhdGVMb2dpblBhdGgoKSwgbG9naW4pO1xuICB9XG5cbiAgZ2V0UGxhdGZvcm0oKSB7XG4gICAgcmV0dXJuIHRoaXMucGxhdGZvcm07XG4gIH1cblxuICBnZXRPd24oKSB7XG4gICAgcmV0dXJuIHRoaXMub3duO1xuICB9XG5cbiAgZ2V0TG9naW4oKSB7XG4gICAgcmV0dXJuIHRoaXMubG9naW47XG4gIH1cblxuICBjbG9uZVJlcG8oZnVsbE5hbWUsIHRhZykge1xuICAgIGlmICh0YWcpIHtcbiAgICAgIHJldHVybiBleGVjYShcImdpdFwiLCBbXCJjbG9uZVwiLCB0aGlzLmdldFJlcG9VcmwoZnVsbE5hbWUpLCBcIi1iXCIsIHRhZ10pO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZXhlY2EoXCJnaXRcIiwgW1wiY2xvbmVcIiwgdGhpcy5nZXRSZXBvVXJsKGZ1bGxOYW1lKV0pO1xuICAgIH1cbiAgfVxuICBnZXRSZXBvVXJsKGZ1bGxOYW1lOiBhbnkpOiBzdHJpbmcge1xuICAgIHRocm93IG5ldyBFcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xuICB9XG5cbiAgaW5zdGFsbERlcGVuZGVuY2llcyhjd2QsIGZ1bGxOYW1lKSB7XG4gICAgY29uc3QgcHJvamVjdFBhdGggPSBnZXRQcm9qZWN0UGF0aChjd2QsIGZ1bGxOYW1lKTtcbiAgICBpZiAocGF0aEV4aXN0c1N5bmMocHJvamVjdFBhdGgpKSB7XG4gICAgICByZXR1cm4gZXhlY2EoXCJucG1cIiwgW1wiaW5zdGFsbFwiXSwgeyBjd2Q6IHByb2plY3RQYXRoIH0pO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGFzeW5jIHJ1blJlcG8oY3dkLCBmdWxsTmFtZSkge1xuICAgIGNvbnN0IHByb2plY3RQYXRoID0gZ2V0UHJvamVjdFBhdGgoY3dkLCBmdWxsTmFtZSk7XG4gICAgY29uc3QgcGtnID0gZ2V0UGFja2FnZUpzb24oY3dkLCBmdWxsTmFtZSk7XG4gICAgaWYgKHBrZykge1xuICAgICAgY29uc3QgeyBzY3JpcHRzLCBiaW4sIG5hbWUgfSA9IHBrZztcbiAgICAgIGlmIChiaW4pIHtcbiAgICAgICAgYXdhaXQgZXhlY2EoXCJucG1cIiwgW1wiaW5zdGFsbFwiLCBcIi1nXCIsIG5hbWVdLCB7XG4gICAgICAgICAgY3dkOiBwcm9qZWN0UGF0aCxcbiAgICAgICAgICBzdGRvdXQ6IFwiaW5oZXJpdFwiLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGlmIChzY3JpcHRzICYmIHNjcmlwdHMuZGV2KSB7XG4gICAgICAgIHJldHVybiBleGVjYShcIm5wbVwiLCBbXCJydW5cIiwgXCJkZXZcIl0sIHtcbiAgICAgICAgICBjd2Q6IHByb2plY3RQYXRoLFxuICAgICAgICAgIHN0ZG91dDogXCJpbmhlcml0XCIsXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIGlmIChzY3JpcHRzICYmIHNjcmlwdHMuc3RhcnQpIHtcbiAgICAgICAgcmV0dXJuIGV4ZWNhKFwibnBtXCIsIFtcInN0YXJ0XCJdLCB7IGN3ZDogcHJvamVjdFBhdGgsIHN0ZG91dDogXCJpbmhlcml0XCIgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsb2cud2FybihcIuacquaJvuWIsOWQr+WKqOWRveS7pO+8gVwiKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBnZXRVc2VyKCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcImdldFVzZXIgbXVzdCBiZSBpbXBsZW1lbnRlZCFcIik7XG4gIH1cblxuICBnZXRPcmcoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiZ2V0T3JnIG11c3QgYmUgaW1wbGVtZW50ZWQhXCIpO1xuICB9XG5cbiAgLy8gY3JlYXRlUmVwbygpIHtcbiAgLy8gICB0aHJvdyBuZXcgRXJyb3IoXCJjcmVhdGVSZXBvIG11c3QgYmUgaW1wbGVtZW50ZWQhXCIpO1xuICAvLyB9XG4gIC8vIGNyZWF0ZUN1c3RvbVJlcG8oKSB7XG4gIC8vICAgdGhyb3cgbmV3IEVycm9yKFwiY3JlYXRlQ3VzdG9tUmVwbyBtdXN0IGJlIGltcGxlbWVudGVkIVwiKTtcbiAgLy8gfVxufVxuXG5mdW5jdGlvbiBnZXRQYWNrYWdlSnNvbihjd2QsIGZ1bGxOYW1lKSB7XG4gIGNvbnN0IHByb2plY3RQYXRoID0gZ2V0UHJvamVjdFBhdGgoY3dkLCBmdWxsTmFtZSk7XG4gIGNvbnN0IHBrZ1BhdGggPSBwYXRoLnJlc29sdmUocHJvamVjdFBhdGgsIFwicGFja2FnZS5qc29uXCIpO1xuICBpZiAocGF0aEV4aXN0c1N5bmMocGtnUGF0aCkpIHtcbiAgICByZXR1cm4gZnNlLnJlYWRKU09OU3luYyhwa2dQYXRoKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRQcm9qZWN0UGF0aChjd2QsIGZ1bGxOYW1lKSB7XG4gIGNvbnN0IHByb2plY3ROYW1lID0gZnVsbE5hbWUuc3BsaXQoXCIvXCIpWzFdO1xuICByZXR1cm4gcGF0aC5yZXNvbHZlKGN3ZCwgcHJvamVjdE5hbWUpO1xufVxuXG5mdW5jdGlvbiBjbGVhckNhY2hlKCkge1xuICBjb25zdCBwbGFyZm9ybSA9IGNyZWF0ZVBsYXRmb3JtUGF0aCgpO1xuICBjb25zdCB0b2tlbiA9IGNyZWF0ZVRva2VuUGF0aCgpO1xuICBjb25zdCBvd24gPSBjcmVhdGVPd25QYXRoKCk7XG4gIGNvbnN0IGxvZ2luID0gY3JlYXRlTG9naW5QYXRoKCk7XG4gIGZzZS5yZW1vdmVTeW5jKHBsYXJmb3JtKTtcbiAgZnNlLnJlbW92ZVN5bmModG9rZW4pO1xuICBmc2UucmVtb3ZlU3luYyhvd24pO1xuICBmc2UucmVtb3ZlU3luYyhsb2dpbik7XG59XG5cbmV4cG9ydCB7IEdpdFNlcnZlciwgZ2V0R2l0UGxhdGZvcm0sIGNsZWFyQ2FjaGUsIGdldEdpdE93biwgZ2V0R2l0TG9naW4gfTtcbiIsImltcG9ydCB7IG1ha2VMaXN0IH0gZnJvbSBcIi4uL2lucXVpcmVyXCI7XG5pbXBvcnQgbG9nIGZyb20gXCIuLi9sb2dcIjtcbmltcG9ydCBHaXRodWIgZnJvbSBcIi4vR2l0aHViXCI7XG5pbXBvcnQgR2l0ZWUgZnJvbSBcIi4vR2l0ZWVcIjtcbmltcG9ydCB7IGdldEdpdFBsYXRmb3JtLCBnZXRHaXRMb2dpbiwgZ2V0R2l0T3duIH0gZnJvbSBcIi4vR2l0U2VydmVyXCI7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBpbml0R2l0U2VydmVyKCkge1xuICBsZXQgcGxhdGZvcm0gPSBnZXRHaXRQbGF0Zm9ybSgpO1xuICBsb2cudmVyYm9zZShcInBsYXJmb3JtXCIsIHBsYXRmb3JtKTtcbiAgaWYgKCFwbGF0Zm9ybSkge1xuICAgIHBsYXRmb3JtID0gYXdhaXQgbWFrZUxpc3Qoe1xuICAgICAgbWVzc2FnZTogXCLor7fpgInmi6lHaXTlubPlj7BcIixcbiAgICAgIGNob2ljZXM6IFtcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6IFwiR2l0aHViXCIsXG4gICAgICAgICAgdmFsdWU6IFwiZ2l0aHViXCIsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiBcIkdpdGVlXCIsXG4gICAgICAgICAgdmFsdWU6IFwiZ2l0ZWVcIixcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfSk7XG4gIH1cbiAgbG9nLnZlcmJvc2UoXCJwbGFyZm9ybVwiLCBwbGF0Zm9ybSk7XG4gIGxldCBnaXRBUEk7XG4gIGlmIChwbGF0Zm9ybSA9PT0gXCJnaXRodWJcIikge1xuICAgIGdpdEFQSSA9IG5ldyBHaXRodWIoKTtcbiAgfSBlbHNlIHtcbiAgICBnaXRBUEkgPSBuZXcgR2l0ZWUoKTtcbiAgfVxuICBnaXRBUEkuc2F2ZVBsYXRmb3JtKHBsYXRmb3JtKTtcbiAgYXdhaXQgZ2l0QVBJLmluaXQoKTtcbiAgcmV0dXJuIGdpdEFQSTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGluaXRHaXRUeXBlKGdpdEFQSSkge1xuICAvLyDku5PlupPnsbvlnotcbiAgbGV0IGdpdE93biA9IGdldEdpdE93bigpO1xuICAvLyDku5PlupPnmbvlvZXlkI1cbiAgbGV0IGdpdExvZ2luID0gZ2V0R2l0TG9naW4oKTtcbiAgaWYgKCFnaXRMb2dpbiAmJiAhZ2l0T3duKSB7XG4gICAgY29uc3QgdXNlciA9IGF3YWl0IGdpdEFQSS5nZXRVc2VyKCk7XG4gICAgY29uc3Qgb3JnID0gYXdhaXQgZ2l0QVBJLmdldE9yZygpO1xuICAgIGxvZy52ZXJib3NlKFwidXNlclwiLCB1c2VyKTtcbiAgICBsb2cudmVyYm9zZShcIm9yZ1wiLCBvcmcpO1xuICAgIGlmICghZ2l0T3duKSB7XG4gICAgICBnaXRPd24gPSBhd2FpdCBtYWtlTGlzdCh7XG4gICAgICAgIG1lc3NhZ2U6IFwi6K+36YCJ5oup5LuT5bqT57G75Z6LXCIsXG4gICAgICAgIGNob2ljZXM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiBcIlVzZXJcIixcbiAgICAgICAgICAgIHZhbHVlOiBcInVzZXJcIixcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6IFwiT3JnYW5pemF0aW9uXCIsXG4gICAgICAgICAgICB2YWx1ZTogXCJvcmdcIixcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgfSk7XG4gICAgICBsb2cudmVyYm9zZShcImdpdE93blwiLCBnaXRPd24pO1xuICAgIH1cbiAgICBpZiAoZ2l0T3duID09PSBcInVzZXJcIikge1xuICAgICAgZ2l0TG9naW4gPSB1c2VyPy5sb2dpbjtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qgb3JnTGlzdCA9IG9yZy5tYXAoKGl0ZW0pID0+ICh7XG4gICAgICAgIG5hbWU6IGl0ZW0ubmFtZSB8fCBpdGVtLmxvZ2luLFxuICAgICAgICB2YWx1ZTogaXRlbS5sb2dpbixcbiAgICAgIH0pKTtcbiAgICAgIGdpdExvZ2luID0gYXdhaXQgbWFrZUxpc3Qoe1xuICAgICAgICBtZXNzYWdlOiBcIuivt+mAieaLqee7hOe7h1wiLFxuICAgICAgICBjaG9pY2VzOiBvcmdMaXN0LFxuICAgICAgfSk7XG4gICAgfVxuICAgIGxvZy52ZXJib3NlKFwiZ2l0TG9naW5cIiwgZ2l0TG9naW4pO1xuICB9XG4gIGlmICghZ2l0TG9naW4gfHwgIWdpdE93bikge1xuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgIGDkuLrojrflj5bliLDnlKjmiLfnmoRHaXTnmbvlvZXkv6Hmga/vvIHor7fkvb/nlKggXCJ0LXRzaGVlcCBjb21taXQgLS1jbGVhclwiIOa4hemZpOe8k+WtmOWQjumHjeivlWBcbiAgICApO1xuICB9XG4gIGdpdEFQSS5zYXZlT3duKGdpdE93bik7XG4gIGdpdEFQSS5zYXZlTG9naW4oZ2l0TG9naW4pO1xuICByZXR1cm4gZ2l0TG9naW47XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVSZW1vdGVSZXBvKGdpdEFQSSwgbmFtZSkge1xuICBjb25zdCByZXQgPSBhd2FpdCBnaXRBUEkuY3JlYXRlUmVwbyhuYW1lKTtcbn1cbiIsImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB7IEdpdFNlcnZlciB9IGZyb20gXCIuL0dpdFNlcnZlclwiO1xuaW1wb3J0IGxvZyBmcm9tIFwiLi4vbG9nXCI7XG5cbmNvbnN0IEJBU0VfVVJMID0gXCJodHRwczovL2dpdGVlLmNvbS9hcGkvdjVcIjtcblxuY2xhc3MgR2l0aHViIGV4dGVuZHMgR2l0U2VydmVyIHtcbiAgc2VydmljZTogYW55O1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuc2VydmljZSA9IGF4aW9zLmNyZWF0ZSh7XG4gICAgICBiYXNlVVJMOiBCQVNFX1VSTCxcbiAgICAgIHRpbWVvdXQ6IDUwMDAsXG4gICAgfSk7XG4gICAgdGhpcy5zZXJ2aWNlLmludGVyY2VwdG9ycy5yZXNwb25zZS51c2UoXG4gICAgICAocmVzcG9uc2UpID0+IHtcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XG4gICAgICB9LFxuICAgICAgKGVycm9yKSA9PiB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvcik7XG4gICAgICB9XG4gICAgKTtcbiAgfVxuICBnZXQodXJsLCBwYXJhbXMsIGhlYWRlcnMpIHtcbiAgICByZXR1cm4gdGhpcy5zZXJ2aWNlKHtcbiAgICAgIHVybCxcbiAgICAgIHBhcmFtczoge1xuICAgICAgICAuLi5wYXJhbXMsXG4gICAgICAgIGFjY2Vzc190b2tlbjogdGhpcy50b2tlbixcbiAgICAgIH0sXG4gICAgICBtZXRob2Q6IFwiZ2V0XCIsXG4gICAgICBoZWFkZXJzLFxuICAgIH0pO1xuICB9XG4gIHBvc3QodXJsLCBkYXRhLCBoZWFkZXJzKSB7XG4gICAgcmV0dXJuIHRoaXMuc2VydmljZSh7XG4gICAgICB1cmwsXG4gICAgICBkYXRhLFxuICAgICAgcGFyYW1zOiB7XG4gICAgICAgIGFjY2Vzc190b2tlbjogdGhpcy50b2tlbixcbiAgICAgIH0sXG4gICAgICBtZXRob2Q6IFwicG9zdFwiLFxuICAgICAgaGVhZGVycyxcbiAgICB9KTtcbiAgfVxuXG4gIHNlYXJjaFJlcG9zaXRvcmllcyhwYXJhbXMpIHtcbiAgICByZXR1cm4gdGhpcy5nZXQoXCIvc2VhcmNoL3JlcG9zaXRvcmllc1wiLCBwYXJhbXMsbnVsbCk7XG4gIH1cblxuICBnZXRUYWdzKGZ1bGxOYW1lKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KGAvcmVwb3MvJHtmdWxsTmFtZX0vdGFnc2AsbnVsbCxudWxsKTtcbiAgfVxuXG4gIGdldFJlcG9VcmwoZnVsbE5hbWUpIHtcbiAgICByZXR1cm4gYGh0dHBzOi8vZ2l0ZWUuY29tLyR7ZnVsbE5hbWV9LmdpdGA7XG4gIH1cblxuICBnZXRVc2VyKCkge1xuICAgIHJldHVybiB0aGlzLmdldChcIi91c2VyXCIsbnVsbCxudWxsKTtcbiAgfVxuXG4gIGdldE9yZygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXQoXCIvdXNlci9vcmdzXCIsbnVsbCxudWxsKTtcbiAgfVxuXG4gIGdldFJlcG8ob3duZXIsIHJlcG8pIHtcbiAgICByZXR1cm4gdGhpcy5nZXQoYC9yZXBvcy8ke293bmVyfS8ke3JlcG99YCxudWxsLG51bGwpLmNhdGNoKChlcnIpID0+IHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH0pO1xuICB9XG5cbiAgYXN5bmMgY3JlYXRlUmVwbyhuYW1lKSB7XG4gICAgY29uc3QgcmVwbyA9IGF3YWl0IHRoaXMuZ2V0UmVwbyh0aGlzLmxvZ2luLCBuYW1lKTtcbiAgICBpZiAoIXJlcG8pIHtcbiAgICAgIGxvZy5pbmZvKFwi5LuT5bqT5LiN5a2Y5Zyo77yM5byA5aeL5Yib5bu6XCIpO1xuICAgICAgaWYgKHRoaXMub3duID09PSBcInVzZXJcIikge1xuICAgICAgICByZXR1cm4gdGhpcy5wb3N0KFwiL3VzZXIvcmVwb3NcIiwgeyBuYW1lIH0sbnVsbCk7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMub3duID09PSBcIm9yZ1wiKSB7XG4gICAgICAgIGNvbnN0IHVybCA9IFwib3Jncy9cIiArIHRoaXMubG9naW4gKyBcIi9yZXBvc1wiO1xuICAgICAgICByZXR1cm4gdGhpcy5wb3N0KHVybCwgeyBuYW1lIH0sbnVsbCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGxvZy5pbmZvKFwi5LuT5bqT5a2Y5Zyo77yM55u05o6l6L+U5ZueXCIpO1xuICAgICAgcmV0dXJuIHJlcG87XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdpdGh1YjtcbiIsImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB7IEdpdFNlcnZlciB9IGZyb20gXCIuL0dpdFNlcnZlclwiO1xuaW1wb3J0IGxvZyBmcm9tIFwiLi4vbG9nXCI7XG5cbmNvbnN0IEJBU0VfVVJMID0gXCJodHRwczovL2FwaS5naXRodWIuY29tXCI7XG5cbmNsYXNzIEdpdGh1YiBleHRlbmRzIEdpdFNlcnZlciB7XG4gIHNlcnZpY2U6IGFueTtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnNlcnZpY2UgPSBheGlvcy5jcmVhdGUoe1xuICAgICAgYmFzZVVSTDogQkFTRV9VUkwsXG4gICAgICB0aW1lb3V0OiA1MDAwLFxuICAgIH0pO1xuICAgIHRoaXMuc2VydmljZS5pbnRlcmNlcHRvcnMucmVxdWVzdC51c2UoXG4gICAgICAoY29uZmlnKSA9PiB7XG4gICAgICAgIGNvbmZpZy5oZWFkZXJzW1wiQXV0aG9yaXphdGlvblwiXSA9IGBCZWFyZXIgJHt0aGlzLnRva2VufWA7XG4gICAgICAgIGNvbmZpZy5oZWFkZXJzW1wiQWNjZXB0XCJdID0gXCIgYXBwbGljYXRpb24vdm5kLmdpdGh1Yitqc29uXCI7XG4gICAgICAgIGNvbmZpZy5oZWFkZXJzW1wiWC1HaXRIdWItQXBpLVZlcnNpb25cIl0gPSBcIjIwMjItMTEtMjhcIjtcbiAgICAgICAgcmV0dXJuIGNvbmZpZztcbiAgICAgIH0sXG4gICAgICAoZXJyb3IpID0+IHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yKTtcbiAgICAgIH1cbiAgICApO1xuICAgIHRoaXMuc2VydmljZS5pbnRlcmNlcHRvcnMucmVzcG9uc2UudXNlKFxuICAgICAgKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xuICAgICAgfSxcbiAgICAgIChlcnJvcikgPT4ge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IpO1xuICAgICAgfVxuICAgICk7XG4gIH1cbiAgZ2V0KHVybCwgcGFyYW1zLCBoZWFkZXJzKSB7XG4gICAgcmV0dXJuIHRoaXMuc2VydmljZSh7XG4gICAgICB1cmwsXG4gICAgICBwYXJhbXMsXG4gICAgICBtZXRob2Q6IFwiZ2V0XCIsXG4gICAgICBoZWFkZXJzLFxuICAgIH0pO1xuICB9XG4gIHBvc3QodXJsLCBkYXRhLCBoZWFkZXJzKSB7XG4gICAgcmV0dXJuIHRoaXMuc2VydmljZSh7XG4gICAgICB1cmwsXG4gICAgICBkYXRhLFxuICAgICAgcGFyYW1zOiB7XG4gICAgICAgIGFjY2Vzc190b2tlbjogdGhpcy50b2tlbixcbiAgICAgIH0sXG4gICAgICBtZXRob2Q6IFwicG9zdFwiLFxuICAgICAgaGVhZGVycyxcbiAgICB9KTtcbiAgfVxuXG4gIHNlYXJjaFJlcG9zaXRvcmllcyhwYXJhbXMpIHtcbiAgICByZXR1cm4gdGhpcy5nZXQoXCIvc2VhcmNoL3JlcG9zaXRvcmllc1wiLCBwYXJhbXMsbnVsbCk7XG4gIH1cblxuICBzZWFyY2hDb2RlKHBhcmFtcykge1xuICAgIHJldHVybiB0aGlzLmdldChcIi9zZWFyY2gvY29kZVwiLCBwYXJhbXMsbnVsbCk7XG4gIH1cblxuICBnZXRUYWdzKGZ1bGxOYW1lLCBwYXJhbXMpIHtcbiAgICByZXR1cm4gdGhpcy5nZXQoYC9yZXBvcy8ke2Z1bGxOYW1lfS90YWdzYCwgcGFyYW1zLG51bGwpO1xuICB9XG5cbiAgZ2V0UmVwb1VybChmdWxsTmFtZSkge1xuICAgIHJldHVybiBgaHR0cHM6Ly9naXRodWIuY29tLyR7ZnVsbE5hbWV9LmdpdGA7XG4gIH1cblxuICBnZXRVc2VyKCkge1xuICAgIHJldHVybiB0aGlzLmdldChcIi91c2VyXCIsbnVsbCxudWxsKTtcbiAgfVxuXG4gIGdldE9yZygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXQoXCIvdXNlci9vcmdzXCIsbnVsbCxudWxsKTtcbiAgfVxuXG4gIGdldFJlcG8ob3duZXIsIHJlcG8pIHtcbiAgICByZXR1cm4gdGhpcy5nZXQoYC9yZXBvcy8ke293bmVyfS8ke3JlcG99YCwge1xuICAgICAgYWNjZXB0OiBcImFwcGxpY2F0aW9uL3ZuZC5naXRodWIranNvblwiLFxuICAgIH0sbnVsbCkuY2F0Y2goKGVycikgPT4ge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfSk7XG4gIH1cblxuICBhc3luYyBjcmVhdGVSZXBvKG5hbWUpIHtcbiAgICBjb25zdCByZXBvID0gYXdhaXQgdGhpcy5nZXRSZXBvKHRoaXMubG9naW4sIG5hbWUpO1xuICAgIGlmICghcmVwbykge1xuICAgICAgbG9nLmluZm8oXCLku5PlupPkuI3lrZjlnKjvvIzlvIDlp4vliJvlu7pcIik7XG4gICAgICBpZiAodGhpcy5vd24gPT09IFwidXNlclwiKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnBvc3QoXG4gICAgICAgICAgXCIvdXNlci9yZXBvc1wiLFxuICAgICAgICAgIHsgbmFtZSB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGFjY2VwdDogXCJhcHBsaWNhdGlvbi92bmQuZ2l0aHViK2pzb25cIixcbiAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMub3duID09PSBcIm9yZ1wiKSB7XG4gICAgICAgIGNvbnN0IHVybCA9IFwib3Jncy9cIiArIHRoaXMubG9naW4gKyBcIi9yZXBvc1wiO1xuICAgICAgICByZXR1cm4gdGhpcy5wb3N0KFxuICAgICAgICAgIHVybCxcbiAgICAgICAgICB7IG5hbWUgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBhY2NlcHQ6IFwiYXBwbGljYXRpb24vdm5kLmdpdGh1Yitqc29uXCIsXG4gICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBsb2cuaW5mbyhcIuS7k+W6k+WtmOWcqO+8jOebtOaOpei/lOWbnlwiKTtcbiAgICAgIHJldHVybiByZXBvO1xuICAgIH1cbiAgfVxuICBhc3luYyBjcmVhdGVDdXN0b21SZXBvKG5hbWUpe1xuICAgIGNvbnNvbGUubG9nKG5hbWUsXCIyMTJcIik7XG4gICAgY29uc3QgcmVwbyA9IGF3YWl0IHRoaXMuZ2V0UmVwbyh0aGlzLmxvZ2luLCBuYW1lKTtcbiAgICBpZighcmVwbyl7XG4gICAgICBsb2cuaW5mbyhcIuS7k+W6k+S4jeWtmOWcqO+8jOW8gOWni+WIm+W7ulwiKTtcbiAgICAgIGNvbnNvbGUubG9nKHJlcG8pO1xuICAgICAgcmV0dXJuIHRoaXMucG9zdChcbiAgICAgICAgXCIvdXNlci9yZXBvc1wiLFxuICAgICAgICB7IG5hbWUgfSxcbiAgICAgICAge1xuICAgICAgICAgIGFjY2VwdDogXCJhcHBsaWNhdGlvbi92bmQuZ2l0aHViK2pzb25cIixcbiAgICAgICAgfVxuICAgICAgKTtcbiAgICB9ZWxzZSB7XG4gICAgICBsb2cuaW5mbyhcIuS7k+W6k+WtmOWcqO+8jOebtOaOpei/lOWbnlwiKTtcbiAgICAgIHJldHVybiByZXBvO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBHaXRodWI7XG4iLCJpbXBvcnQgaW5xdWlyZXIgZnJvbSBcImlucXVpcmVyXCI7XG5cbmZ1bmN0aW9uIG1ha2Uoe1xuICBjaG9pY2VzLFxuICBkZWZhdWx0VmFsdWUsXG4gIG1lc3NhZ2UgPSBcIuivt+mAieaLqVwiLFxuICB0eXBlID0gXCJsaXN0XCIsXG4gIHJlcXVpcmUgPSB0cnVlLFxuICBtYXNrID0gXCIqXCIsXG4gIHZhbGlkYXRlLFxuICBwYWdlU2l6ZSxcbiAgbG9vcCxcbn0pIHtcbiAgY29uc3Qgb3B0aW9uczphbnkgPSB7XG4gICAgbmFtZTogXCJuYW1lXCIsXG4gICAgZGVmYXVsdFZhbHVlOiBkZWZhdWx0VmFsdWUsXG4gICAgbWVzc2FnZSxcbiAgICB0eXBlLFxuICAgIHJlcXVpcmUsXG4gICAgbWFzayxcbiAgICB2YWxpZGF0ZSxcbiAgICBwYWdlU2l6ZSxcbiAgICBsb29wLFxuICB9O1xuICBpZiAodHlwZSA9PT0gXCJsaXN0XCIpIHtcbiAgICBvcHRpb25zLmNob2ljZXMgPSBjaG9pY2VzO1xuICB9XG4gIHJldHVybiBpbnF1aXJlci5wcm9tcHQob3B0aW9ucykudGhlbigoYW5zd2VyKSA9PiBhbnN3ZXIubmFtZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtYWtlTGlzdChwYXJhbXMpIHtcbiAgcmV0dXJuIG1ha2UoeyAuLi5wYXJhbXMgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtYWtlSW5wdXQocGFyYW1zKSB7XG4gIHJldHVybiBtYWtlKHtcbiAgICB0eXBlOiBcImlucHV0XCIsXG4gICAgLi4ucGFyYW1zLFxuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VQYXNzd29yZChwYXJhbXMpIHtcbiAgcmV0dXJuIG1ha2Uoe1xuICAgIHR5cGU6IFwicGFzc3dvcmRcIixcbiAgICAuLi5wYXJhbXMsXG4gIH0pO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNEZWJ1ZygpIHtcbiAgcmV0dXJuIHByb2Nlc3MuYXJndi5pbmNsdWRlcyhcIi0tZGVidWdcIikgfHwgcHJvY2Vzcy5hcmd2LmluY2x1ZGVzKFwiLWRcIik7XG59XG4iLCJpbXBvcnQgIGxvZyAgZnJvbSBcIm5wbWxvZ1wiO1xuaW1wb3J0IGlzRGVidWcgZnJvbSBcIi4vaXNEZWJ1Z1wiO1xuXG5pZiAoaXNEZWJ1ZygpKSB7XG4gIGxvZy5sZXZlbCA9IFwidmVyYm9zZVwiO1xufSBlbHNlIHtcbiAgbG9nLmxldmVsID0gXCJpbmZvXCI7XG59XG5sb2cuaGVhZGluZyA9IFwidHNoZWVwXCI7XG5sb2cuYWRkTGV2ZWwoXCJzdWNjZXNzXCIsIDIwMDAsIHsgZmc6IFwiZ3JlZW5cIiwgYm9sZDogdHJ1ZSB9KTtcbmV4cG9ydCBkZWZhdWx0IGxvZztcbiIsImltcG9ydCB1cmxKb2luIGZyb20gXCJ1cmwtam9pblwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IGxvZyBmcm9tIFwiLi9sb2dcIjtcbmZ1bmN0aW9uIGdldE5wbUluZm8obnBtTmFtZSkge1xuICBjb25zdCByZWdpc3RyeSA9IFwiaHR0cHM6Ly9yZWdpc3RyeS5ucG1qcy5vcmcvXCI7XG4gIGNvbnN0IHVybCA9IHVybEpvaW4ocmVnaXN0cnksIG5wbU5hbWUpO1xuICByZXR1cm4gYXhpb3MuZ2V0KHVybCkudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyKTtcbiAgICB9XG4gIH0pO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdldExhdGVzdFZlcnNpb24obnBtTmFtZSkge1xuICByZXR1cm4gZ2V0TnBtSW5mbyhucG1OYW1lKS50aGVuKChkYXRhKSA9PiB7XG4gICAgaWYgKCFkYXRhW1wiZGlzdC10YWdzXCJdIHx8ICFkYXRhW1wiZGlzdC10YWdzXCJdLmxhdGVzdCkge1xuICAgICAgbG9nLmVycm9yKFwi5rKh5pyJIGxhdGVzdCDniYjmnKzlj7dcIik7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwi5rKh5pyJIGxhdGVzdCDniYjmnKzlj7dcIikpO1xuICAgIH1cbiAgICByZXR1cm4gZGF0YVtcImRpc3QtdGFnc1wiXS5sYXRlc3Q7XG4gIH0pO1xuICAvLyAgIHJldHVybiBcIjEuMC4wXCI7XG59XG4iLCJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5cbmNvbnN0IEJBU0VfVVJMID0gXCJodHRwOi8vMTI3LjAuMC4xOjcwMDFcIjtcblxuY29uc3QgcmVxdWVzdCA9IGF4aW9zLmNyZWF0ZSh7XG4gIGJhc2VVUkw6IEJBU0VfVVJMLFxuICB0aW1lb3V0OiA1MDAwLFxufSk7XG5cbmZ1bmN0aW9uIG9uU3VjY2VzcyhyZXNwb25zZSkge1xuICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcbn1cbmZ1bmN0aW9uIG9uRmFpbGVkKGVycm9yKSB7XG4gIHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvcik7XG59XG5cbnJlcXVlc3QuaW50ZXJjZXB0b3JzLnJlc3BvbnNlLnVzZShvblN1Y2Nlc3MsIG9uRmFpbGVkKTtcblxuZXhwb3J0IGRlZmF1bHQgcmVxdWVzdFxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXhlY2FcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZnMtZXh0cmFcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaW5xdWlyZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibnBtbG9nXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInBhdGgtZXhpc3RzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInVybC1qb2luXCIpOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgbG9nIGZyb20gXCIuL2xvZ1wiO1xuaW1wb3J0IGlzRGVidWcgZnJvbSBcIi4vaXNEZWJ1Z1wiO1xuaW1wb3J0IHsgbWFrZUxpc3QsIG1ha2VJbnB1dCwgbWFrZVBhc3N3b3JkIH0gZnJvbSBcIi4vaW5xdWlyZXJcIjtcbmltcG9ydCB7IGdldExhdGVzdFZlcnNpb24gfSBmcm9tIFwiLi9ucG1cIjtcbmltcG9ydCByZXF1ZXN0IGZyb20gXCIuL3JlcXVlc3RcIjtcbmltcG9ydCBHaXRodWIgZnJvbSBcIi4vZ2l0L0dpdGh1YlwiO1xuaW1wb3J0IEdpdGVlIGZyb20gXCIuL2dpdC9HaXRlZVwiO1xuaW1wb3J0IHsgZ2V0R2l0UGxhdGZvcm0sIGNsZWFyQ2FjaGUgfSBmcm9tIFwiLi9naXQvR2l0U2VydmVyXCI7XG5pbXBvcnQge1xuICBpbml0R2l0U2VydmVyLFxuICBpbml0R2l0VHlwZSxcbiAgY3JlYXRlUmVtb3RlUmVwbyxcbn0gZnJvbSBcIi4vZ2l0L0dpdFV0aWxzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBwcmludEVycm9yTG9nKGUsIHR5cGUpIHtcbiAgaWYgKGlzRGVidWcoKSkge1xuICAgIGxvZy5lcnJvcih0eXBlLCBlKTtcbiAgfSBlbHNlIHtcbiAgICBsb2cuZXJyb3IodHlwZSwgZS5tZXNzYWdlKTtcbiAgfVxufVxuZXhwb3J0IHtcbiAgbG9nLFxuICBpc0RlYnVnLFxuICBtYWtlTGlzdCxcbiAgbWFrZUlucHV0LFxuICBtYWtlUGFzc3dvcmQsXG4gIGdldExhdGVzdFZlcnNpb24sXG4gIHJlcXVlc3QsXG4gIEdpdGh1YixcbiAgR2l0ZWUsXG4gIGdldEdpdFBsYXRmb3JtLFxuICBpbml0R2l0U2VydmVyLFxuICBpbml0R2l0VHlwZSxcbiAgY2xlYXJDYWNoZSxcbiAgY3JlYXRlUmVtb3RlUmVwbyxcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=