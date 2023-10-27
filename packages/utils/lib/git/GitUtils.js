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
/*!***************************************!*\
  !*** ./src/utils/lib/git/GitUtils.ts ***!
  \***************************************/
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

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMvbGliL2dpdC9HaXRVdGlscy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUE2QjtBQUNKO0FBQ21CO0FBQ0M7QUFDZjtBQUNIO0FBQ2dCO0FBQ2xCO0FBRXpCLE1BQU0sU0FBUyxHQUFHLGFBQWEsQ0FBQztBQUNoQyxNQUFNLFVBQVUsR0FBRyxZQUFZLENBQUM7QUFDaEMsTUFBTSxhQUFhLEdBQUcsZUFBZSxDQUFDO0FBQ3RDLE1BQU0sUUFBUSxHQUFHLFVBQVUsQ0FBQztBQUM1QixNQUFNLFVBQVUsR0FBRyxZQUFZLENBQUM7QUFFaEMsU0FBUyxlQUFlO0lBQ3RCLE9BQU8sd0RBQVksQ0FBQyxnREFBTyxFQUFFLEVBQUUsU0FBUyxFQUFFLFVBQVUsQ0FBQyxDQUFDO0FBQ3hELENBQUM7QUFFRCxTQUFTLGtCQUFrQjtJQUN6QixPQUFPLHdEQUFZLENBQUMsZ0RBQU8sRUFBRSxFQUFFLFNBQVMsRUFBRSxhQUFhLENBQUMsQ0FBQztBQUMzRCxDQUFDO0FBRUQsU0FBUyxhQUFhO0lBQ3BCLE9BQU8sd0RBQVksQ0FBQyxnREFBTyxFQUFFLEVBQUUsU0FBUyxFQUFFLFFBQVEsQ0FBQyxDQUFDO0FBQ3RELENBQUM7QUFFRCxTQUFTLGVBQWU7SUFDdEIsT0FBTyx3REFBWSxDQUFDLGdEQUFPLEVBQUUsRUFBRSxTQUFTLEVBQUUsVUFBVSxDQUFDLENBQUM7QUFDeEQsQ0FBQztBQUVELFNBQVMsY0FBYztJQUNyQixJQUFJLDJEQUFjLENBQUMsa0JBQWtCLEVBQUUsQ0FBQyxFQUFFO1FBQ3hDLE9BQU8sMkRBQWUsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUM7S0FDekQ7SUFDRCxPQUFPLElBQUksQ0FBQztBQUNkLENBQUM7QUFFRCxTQUFTLFNBQVM7SUFDaEIsSUFBSSwyREFBYyxDQUFDLGFBQWEsRUFBRSxDQUFDLEVBQUU7UUFDbkMsT0FBTywyREFBZSxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUM7S0FDcEQ7SUFDRCxPQUFPLElBQUksQ0FBQztBQUNkLENBQUM7QUFFRCxTQUFTLFdBQVc7SUFDbEIsSUFBSSwyREFBYyxDQUFDLGVBQWUsRUFBRSxDQUFDLEVBQUU7UUFDckMsT0FBTywyREFBZSxDQUFDLGVBQWUsRUFBRSxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUM7S0FDdEQ7SUFDRCxPQUFPLElBQUksQ0FBQztBQUNkLENBQUM7QUFFRCxNQUFNLFNBQVM7SUFLYixnQkFBZSxDQUFDO0lBRVYsSUFBSTs7WUFFUixNQUFNLFNBQVMsR0FBRyxlQUFlLEVBQUUsQ0FBQztZQUNwQyxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ3ZCLElBQUksMkRBQWMsQ0FBQyxTQUFTLENBQUMsRUFBRTtnQkFDN0IsSUFBSSxDQUFDLEtBQUssR0FBRyw0REFBZ0IsQ0FBQyxTQUFTLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQzthQUNyRDtpQkFBTTtnQkFDTCxJQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO2dCQUNuQyw0REFBZ0IsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQ3pDO1lBQ0QsNENBQUcsQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNuQyxDQUFDO0tBQUE7SUFDRCxRQUFRO1FBQ04sT0FBTyx1REFBWSxDQUFDO1lBQ2xCLE9BQU8sRUFBRSxhQUFhO1NBQ3ZCLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxZQUFZLENBQUMsUUFBUTtRQUNuQixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6Qiw0REFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQ25ELENBQUM7SUFFRCxPQUFPLENBQUMsR0FBRztRQUNULElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBQ2YsNERBQWdCLENBQUMsYUFBYSxFQUFFLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUVELFNBQVMsQ0FBQyxLQUFLO1FBQ2IsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsNERBQWdCLENBQUMsZUFBZSxFQUFFLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUVELFdBQVc7UUFDVCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDdkIsQ0FBQztJQUVELE1BQU07UUFDSixPQUFPLElBQUksQ0FBQyxHQUFHLENBQUM7SUFDbEIsQ0FBQztJQUVELFFBQVE7UUFDTixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDcEIsQ0FBQztJQUVELFNBQVMsQ0FBQyxRQUFRLEVBQUUsR0FBRztRQUNyQixJQUFJLEdBQUcsRUFBRTtZQUNQLE9BQU8sNENBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsRUFBRSxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztTQUN0RTthQUFNO1lBQ0wsT0FBTyw0Q0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUMzRDtJQUNILENBQUM7SUFDRCxVQUFVLENBQUMsUUFBYTtRQUN0QixNQUFNLElBQUksS0FBSyxDQUFDLHlCQUF5QixDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUVELG1CQUFtQixDQUFDLEdBQUcsRUFBRSxRQUFRO1FBQy9CLE1BQU0sV0FBVyxHQUFHLGNBQWMsQ0FBQyxHQUFHLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDbEQsSUFBSSwyREFBYyxDQUFDLFdBQVcsQ0FBQyxFQUFFO1lBQy9CLE9BQU8sNENBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQyxTQUFTLENBQUMsRUFBRSxFQUFFLEdBQUcsRUFBRSxXQUFXLEVBQUUsQ0FBQyxDQUFDO1NBQ3hEO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRUssT0FBTyxDQUFDLEdBQUcsRUFBRSxRQUFROztZQUN6QixNQUFNLFdBQVcsR0FBRyxjQUFjLENBQUMsR0FBRyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1lBQ2xELE1BQU0sR0FBRyxHQUFHLGNBQWMsQ0FBQyxHQUFHLEVBQUUsUUFBUSxDQUFDLENBQUM7WUFDMUMsSUFBSSxHQUFHLEVBQUU7Z0JBQ1AsTUFBTSxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEdBQUcsR0FBRyxDQUFDO2dCQUNuQyxJQUFJLEdBQUcsRUFBRTtvQkFDUCxNQUFNLDRDQUFLLENBQUMsS0FBSyxFQUFFLENBQUMsU0FBUyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsRUFBRTt3QkFDMUMsR0FBRyxFQUFFLFdBQVc7d0JBQ2hCLE1BQU0sRUFBRSxTQUFTO3FCQUNsQixDQUFDLENBQUM7aUJBQ0o7Z0JBQ0QsSUFBSSxPQUFPLElBQUksT0FBTyxDQUFDLEdBQUcsRUFBRTtvQkFDMUIsT0FBTyw0Q0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsRUFBRTt3QkFDbEMsR0FBRyxFQUFFLFdBQVc7d0JBQ2hCLE1BQU0sRUFBRSxTQUFTO3FCQUNsQixDQUFDLENBQUM7aUJBQ0o7cUJBQU0sSUFBSSxPQUFPLElBQUksT0FBTyxDQUFDLEtBQUssRUFBRTtvQkFDbkMsT0FBTyw0Q0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUUsR0FBRyxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQztpQkFDekU7cUJBQU07b0JBQ0wsNENBQUcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7aUJBQ3RCO2FBQ0Y7UUFDSCxDQUFDO0tBQUE7SUFFRCxPQUFPO1FBQ0wsTUFBTSxJQUFJLEtBQUssQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFFRCxNQUFNO1FBQ0osTUFBTSxJQUFJLEtBQUssQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDO0lBQ2pELENBQUM7Q0FRRjtBQUVELFNBQVMsY0FBYyxDQUFDLEdBQUcsRUFBRSxRQUFRO0lBQ25DLE1BQU0sV0FBVyxHQUFHLGNBQWMsQ0FBQyxHQUFHLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDbEQsTUFBTSxPQUFPLEdBQUcsd0RBQVksQ0FBQyxXQUFXLEVBQUUsY0FBYyxDQUFDLENBQUM7SUFDMUQsSUFBSSwyREFBYyxDQUFDLE9BQU8sQ0FBQyxFQUFFO1FBQzNCLE9BQU8sNERBQWdCLENBQUMsT0FBTyxDQUFDLENBQUM7S0FDbEM7QUFDSCxDQUFDO0FBRUQsU0FBUyxjQUFjLENBQUMsR0FBRyxFQUFFLFFBQVE7SUFDbkMsTUFBTSxXQUFXLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMzQyxPQUFPLHdEQUFZLENBQUMsR0FBRyxFQUFFLFdBQVcsQ0FBQyxDQUFDO0FBQ3hDLENBQUM7QUFFRCxTQUFTLFVBQVU7SUFDakIsTUFBTSxRQUFRLEdBQUcsa0JBQWtCLEVBQUUsQ0FBQztJQUN0QyxNQUFNLEtBQUssR0FBRyxlQUFlLEVBQUUsQ0FBQztJQUNoQyxNQUFNLEdBQUcsR0FBRyxhQUFhLEVBQUUsQ0FBQztJQUM1QixNQUFNLEtBQUssR0FBRyxlQUFlLEVBQUUsQ0FBQztJQUNoQywwREFBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3pCLDBEQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDdEIsMERBQWMsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNwQiwwREFBYyxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ3hCLENBQUM7QUFFd0U7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0wvQztBQUNjO0FBQ2Y7QUFFekIsTUFBTSxRQUFRLEdBQUcsMEJBQTBCLENBQUM7QUFFNUMsTUFBTSxNQUFPLFNBQVEsaURBQVM7SUFFNUI7UUFDRSxLQUFLLEVBQUUsQ0FBQztRQUNSLElBQUksQ0FBQyxPQUFPLEdBQUcsbURBQVksQ0FBQztZQUMxQixPQUFPLEVBQUUsUUFBUTtZQUNqQixPQUFPLEVBQUUsSUFBSTtTQUNkLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQ3BDLENBQUMsUUFBUSxFQUFFLEVBQUU7WUFDWCxPQUFPLFFBQVEsQ0FBQyxJQUFJLENBQUM7UUFDdkIsQ0FBQyxFQUNELENBQUMsS0FBSyxFQUFFLEVBQUU7WUFDUixPQUFPLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDL0IsQ0FBQyxDQUNGLENBQUM7SUFDSixDQUFDO0lBQ0QsR0FBRyxDQUFDLEdBQUcsRUFBRSxNQUFNLEVBQUUsT0FBTztRQUN0QixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDbEIsR0FBRztZQUNILE1BQU0sa0NBQ0QsTUFBTSxLQUNULFlBQVksRUFBRSxJQUFJLENBQUMsS0FBSyxHQUN6QjtZQUNELE1BQU0sRUFBRSxLQUFLO1lBQ2IsT0FBTztTQUNSLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDRCxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxPQUFPO1FBQ3JCLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUNsQixHQUFHO1lBQ0gsSUFBSTtZQUNKLE1BQU0sRUFBRTtnQkFDTixZQUFZLEVBQUUsSUFBSSxDQUFDLEtBQUs7YUFDekI7WUFDRCxNQUFNLEVBQUUsTUFBTTtZQUNkLE9BQU87U0FDUixDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsa0JBQWtCLENBQUMsTUFBTTtRQUN2QixPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsc0JBQXNCLEVBQUUsTUFBTSxFQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3ZELENBQUM7SUFFRCxPQUFPLENBQUMsUUFBUTtRQUNkLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLFFBQVEsT0FBTyxFQUFDLElBQUksRUFBQyxJQUFJLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBRUQsVUFBVSxDQUFDLFFBQVE7UUFDakIsT0FBTyxxQkFBcUIsUUFBUSxNQUFNLENBQUM7SUFDN0MsQ0FBQztJQUVELE9BQU87UUFDTCxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFDLElBQUksRUFBQyxJQUFJLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBRUQsTUFBTTtRQUNKLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUMsSUFBSSxFQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFFRCxPQUFPLENBQUMsS0FBSyxFQUFFLElBQUk7UUFDakIsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsS0FBSyxJQUFJLElBQUksRUFBRSxFQUFDLElBQUksRUFBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRTtZQUNqRSxPQUFPLElBQUksQ0FBQztRQUNkLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVLLFVBQVUsQ0FBQyxJQUFJOztZQUNuQixNQUFNLElBQUksR0FBRyxNQUFNLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztZQUNsRCxJQUFJLENBQUMsSUFBSSxFQUFFO2dCQUNULDRDQUFHLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO2dCQUN2QixJQUFJLElBQUksQ0FBQyxHQUFHLEtBQUssTUFBTSxFQUFFO29CQUN2QixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLEVBQUUsSUFBSSxFQUFFLEVBQUMsSUFBSSxDQUFDLENBQUM7aUJBQ2hEO3FCQUFNLElBQUksSUFBSSxDQUFDLEdBQUcsS0FBSyxLQUFLLEVBQUU7b0JBQzdCLE1BQU0sR0FBRyxHQUFHLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQztvQkFDNUMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxFQUFFLElBQUksRUFBRSxFQUFDLElBQUksQ0FBQyxDQUFDO2lCQUN0QzthQUNGO2lCQUFNO2dCQUNMLDRDQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO2dCQUN0QixPQUFPLElBQUksQ0FBQzthQUNiO1FBQ0gsQ0FBQztLQUFBO0NBQ0Y7QUFFRCxpRUFBZSxNQUFNLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekZJO0FBQ2M7QUFDZjtBQUV6QixNQUFNLFFBQVEsR0FBRyx3QkFBd0IsQ0FBQztBQUUxQyxNQUFNLE1BQU8sU0FBUSxpREFBUztJQUU1QjtRQUNFLEtBQUssRUFBRSxDQUFDO1FBQ1IsSUFBSSxDQUFDLE9BQU8sR0FBRyxtREFBWSxDQUFDO1lBQzFCLE9BQU8sRUFBRSxRQUFRO1lBQ2pCLE9BQU8sRUFBRSxJQUFJO1NBQ2QsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FDbkMsQ0FBQyxNQUFNLEVBQUUsRUFBRTtZQUNULE1BQU0sQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDLEdBQUcsVUFBVSxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDekQsTUFBTSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsR0FBRyw4QkFBOEIsQ0FBQztZQUMxRCxNQUFNLENBQUMsT0FBTyxDQUFDLHNCQUFzQixDQUFDLEdBQUcsWUFBWSxDQUFDO1lBQ3RELE9BQU8sTUFBTSxDQUFDO1FBQ2hCLENBQUMsRUFDRCxDQUFDLEtBQUssRUFBRSxFQUFFO1lBQ1IsT0FBTyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQy9CLENBQUMsQ0FDRixDQUFDO1FBQ0YsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FDcEMsQ0FBQyxRQUFRLEVBQUUsRUFBRTtZQUNYLE9BQU8sUUFBUSxDQUFDLElBQUksQ0FBQztRQUN2QixDQUFDLEVBQ0QsQ0FBQyxLQUFLLEVBQUUsRUFBRTtZQUNSLE9BQU8sT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMvQixDQUFDLENBQ0YsQ0FBQztJQUNKLENBQUM7SUFDRCxHQUFHLENBQUMsR0FBRyxFQUFFLE1BQU0sRUFBRSxPQUFPO1FBQ3RCLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUNsQixHQUFHO1lBQ0gsTUFBTTtZQUNOLE1BQU0sRUFBRSxLQUFLO1lBQ2IsT0FBTztTQUNSLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDRCxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxPQUFPO1FBQ3JCLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUNsQixHQUFHO1lBQ0gsSUFBSTtZQUNKLE1BQU0sRUFBRTtnQkFDTixZQUFZLEVBQUUsSUFBSSxDQUFDLEtBQUs7YUFDekI7WUFDRCxNQUFNLEVBQUUsTUFBTTtZQUNkLE9BQU87U0FDUixDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsa0JBQWtCLENBQUMsTUFBTTtRQUN2QixPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsc0JBQXNCLEVBQUUsTUFBTSxFQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3ZELENBQUM7SUFFRCxVQUFVLENBQUMsTUFBTTtRQUNmLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsTUFBTSxFQUFDLElBQUksQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFFRCxPQUFPLENBQUMsUUFBUSxFQUFFLE1BQU07UUFDdEIsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsUUFBUSxPQUFPLEVBQUUsTUFBTSxFQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFELENBQUM7SUFFRCxVQUFVLENBQUMsUUFBUTtRQUNqQixPQUFPLHNCQUFzQixRQUFRLE1BQU0sQ0FBQztJQUM5QyxDQUFDO0lBRUQsT0FBTztRQUNMLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUMsSUFBSSxFQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFFRCxNQUFNO1FBQ0osT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBQyxJQUFJLEVBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUVELE9BQU8sQ0FBQyxLQUFLLEVBQUUsSUFBSTtRQUNqQixPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxLQUFLLElBQUksSUFBSSxFQUFFLEVBQUU7WUFDekMsTUFBTSxFQUFFLDZCQUE2QjtTQUN0QyxFQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFO1lBQ3BCLE9BQU8sSUFBSSxDQUFDO1FBQ2QsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUssVUFBVSxDQUFDLElBQUk7O1lBQ25CLE1BQU0sSUFBSSxHQUFHLE1BQU0sSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQ2xELElBQUksQ0FBQyxJQUFJLEVBQUU7Z0JBQ1QsNENBQUcsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7Z0JBQ3ZCLElBQUksSUFBSSxDQUFDLEdBQUcsS0FBSyxNQUFNLEVBQUU7b0JBQ3ZCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FDZCxhQUFhLEVBQ2IsRUFBRSxJQUFJLEVBQUUsRUFDUjt3QkFDRSxNQUFNLEVBQUUsNkJBQTZCO3FCQUN0QyxDQUNGLENBQUM7aUJBQ0g7cUJBQU0sSUFBSSxJQUFJLENBQUMsR0FBRyxLQUFLLEtBQUssRUFBRTtvQkFDN0IsTUFBTSxHQUFHLEdBQUcsT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDO29CQUM1QyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQ2QsR0FBRyxFQUNILEVBQUUsSUFBSSxFQUFFLEVBQ1I7d0JBQ0UsTUFBTSxFQUFFLDZCQUE2QjtxQkFDdEMsQ0FDRixDQUFDO2lCQUNIO2FBQ0Y7aUJBQU07Z0JBQ0wsNENBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7Z0JBQ3RCLE9BQU8sSUFBSSxDQUFDO2FBQ2I7UUFDSCxDQUFDO0tBQUE7SUFDSyxnQkFBZ0IsQ0FBQyxJQUFJOztZQUN6QixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksRUFBQyxLQUFLLENBQUMsQ0FBQztZQUN4QixNQUFNLElBQUksR0FBRyxNQUFNLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztZQUNsRCxJQUFHLENBQUMsSUFBSSxFQUFDO2dCQUNQLDRDQUFHLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO2dCQUN2QixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNsQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQ2QsYUFBYSxFQUNiLEVBQUUsSUFBSSxFQUFFLEVBQ1I7b0JBQ0UsTUFBTSxFQUFFLDZCQUE2QjtpQkFDdEMsQ0FDRixDQUFDO2FBQ0g7aUJBQUs7Z0JBQ0osNENBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7Z0JBQ3RCLE9BQU8sSUFBSSxDQUFDO2FBQ2I7UUFDSCxDQUFDO0tBQUE7Q0FDRjtBQUVELGlFQUFlLE1BQU0sRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNySVU7QUFFaEMsU0FBUyxJQUFJLENBQUMsRUFDWixPQUFPLEVBQ1AsWUFBWSxFQUNaLE9BQU8sR0FBRyxLQUFLLEVBQ2YsSUFBSSxHQUFHLE1BQU0sRUFDYixPQUFPLEdBQUcsSUFBSSxFQUNkLElBQUksR0FBRyxHQUFHLEVBQ1YsUUFBUSxFQUNSLFFBQVEsRUFDUixJQUFJLEdBQ0w7SUFDQyxNQUFNLE9BQU8sR0FBTztRQUNsQixJQUFJLEVBQUUsTUFBTTtRQUNaLFlBQVksRUFBRSxZQUFZO1FBQzFCLE9BQU87UUFDUCxJQUFJO1FBQ0osT0FBTztRQUNQLElBQUk7UUFDSixRQUFRO1FBQ1IsUUFBUTtRQUNSLElBQUk7S0FDTCxDQUFDO0lBQ0YsSUFBSSxJQUFJLEtBQUssTUFBTSxFQUFFO1FBQ25CLE9BQU8sQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0tBQzNCO0lBQ0QsT0FBTyxzREFBZSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ2hFLENBQUM7QUFFTSxTQUFTLFFBQVEsQ0FBQyxNQUFNO0lBQzdCLE9BQU8sSUFBSSxtQkFBTSxNQUFNLEVBQUcsQ0FBQztBQUM3QixDQUFDO0FBRU0sU0FBUyxTQUFTLENBQUMsTUFBTTtJQUM5QixPQUFPLElBQUksaUJBQ1QsSUFBSSxFQUFFLE9BQU8sSUFDVixNQUFNLEVBQ1QsQ0FBQztBQUNMLENBQUM7QUFFTSxTQUFTLFlBQVksQ0FBQyxNQUFNO0lBQ2pDLE9BQU8sSUFBSSxpQkFDVCxJQUFJLEVBQUUsVUFBVSxJQUNiLE1BQU0sRUFDVCxDQUFDO0FBQ0wsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7OztBQzlDYyxTQUFTLE9BQU87SUFDN0IsT0FBTyxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUN6RSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRjBCO0FBQ0s7QUFFaEMsSUFBSSxvREFBTyxFQUFFLEVBQUU7SUFDYixxREFBUyxHQUFHLFNBQVMsQ0FBQztDQUN2QjtLQUFNO0lBQ0wscURBQVMsR0FBRyxNQUFNLENBQUM7Q0FDcEI7QUFDRCx1REFBVyxHQUFHLFFBQVEsQ0FBQztBQUN2QixzREFBWSxDQUFDLFNBQVMsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0FBQzNELGlFQUFlLCtDQUFHLEVBQUM7Ozs7Ozs7Ozs7OztBQ1ZuQjs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOdUM7QUFDZDtBQUNLO0FBQ0Y7QUFDeUM7QUFFOUQsU0FBZSxhQUFhOztRQUNqQyxJQUFJLFFBQVEsR0FBRywwREFBYyxFQUFFLENBQUM7UUFDaEMsNENBQUcsQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDYixRQUFRLEdBQUcsTUFBTSxtREFBUSxDQUFDO2dCQUN4QixPQUFPLEVBQUUsVUFBVTtnQkFDbkIsT0FBTyxFQUFFO29CQUNQO3dCQUNFLElBQUksRUFBRSxRQUFRO3dCQUNkLEtBQUssRUFBRSxRQUFRO3FCQUNoQjtvQkFDRDt3QkFDRSxJQUFJLEVBQUUsT0FBTzt3QkFDYixLQUFLLEVBQUUsT0FBTztxQkFDZjtpQkFDRjthQUNGLENBQUMsQ0FBQztTQUNKO1FBQ0QsNENBQUcsQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQ2xDLElBQUksTUFBTSxDQUFDO1FBQ1gsSUFBSSxRQUFRLEtBQUssUUFBUSxFQUFFO1lBQ3pCLE1BQU0sR0FBRyxJQUFJLCtDQUFNLEVBQUUsQ0FBQztTQUN2QjthQUFNO1lBQ0wsTUFBTSxHQUFHLElBQUksOENBQUssRUFBRSxDQUFDO1NBQ3RCO1FBQ0QsTUFBTSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM5QixNQUFNLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNwQixPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDO0NBQUE7QUFFTSxTQUFlLFdBQVcsQ0FBQyxNQUFNOztRQUV0QyxJQUFJLE1BQU0sR0FBRyxxREFBUyxFQUFFLENBQUM7UUFFekIsSUFBSSxRQUFRLEdBQUcsdURBQVcsRUFBRSxDQUFDO1FBQzdCLElBQUksQ0FBQyxRQUFRLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDeEIsTUFBTSxJQUFJLEdBQUcsTUFBTSxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDcEMsTUFBTSxHQUFHLEdBQUcsTUFBTSxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDbEMsNENBQUcsQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQzFCLDRDQUFHLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQztZQUN4QixJQUFJLENBQUMsTUFBTSxFQUFFO2dCQUNYLE1BQU0sR0FBRyxNQUFNLG1EQUFRLENBQUM7b0JBQ3RCLE9BQU8sRUFBRSxTQUFTO29CQUNsQixPQUFPLEVBQUU7d0JBQ1A7NEJBQ0UsSUFBSSxFQUFFLE1BQU07NEJBQ1osS0FBSyxFQUFFLE1BQU07eUJBQ2Q7d0JBQ0Q7NEJBQ0UsSUFBSSxFQUFFLGNBQWM7NEJBQ3BCLEtBQUssRUFBRSxLQUFLO3lCQUNiO3FCQUNGO2lCQUNGLENBQUMsQ0FBQztnQkFDSCw0Q0FBRyxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUM7YUFDL0I7WUFDRCxJQUFJLE1BQU0sS0FBSyxNQUFNLEVBQUU7Z0JBQ3JCLFFBQVEsR0FBRyxJQUFJLGFBQUosSUFBSSx1QkFBSixJQUFJLENBQUUsS0FBSyxDQUFDO2FBQ3hCO2lCQUFNO2dCQUNMLE1BQU0sT0FBTyxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUM7b0JBQ2pDLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxLQUFLO29CQUM3QixLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7aUJBQ2xCLENBQUMsQ0FBQyxDQUFDO2dCQUNKLFFBQVEsR0FBRyxNQUFNLG1EQUFRLENBQUM7b0JBQ3hCLE9BQU8sRUFBRSxPQUFPO29CQUNoQixPQUFPLEVBQUUsT0FBTztpQkFDakIsQ0FBQyxDQUFDO2FBQ0o7WUFDRCw0Q0FBRyxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsUUFBUSxDQUFDLENBQUM7U0FDbkM7UUFDRCxJQUFJLENBQUMsUUFBUSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ3hCLE1BQU0sSUFBSSxLQUFLLENBQ2Isc0RBQXNELENBQ3ZELENBQUM7U0FDSDtRQUNELE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDdkIsTUFBTSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUMzQixPQUFPLFFBQVEsQ0FBQztJQUNsQixDQUFDO0NBQUE7QUFFTSxTQUFlLGdCQUFnQixDQUFDLE1BQU0sRUFBRSxJQUFJOztRQUNqRCxNQUFNLEdBQUcsR0FBRyxNQUFNLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDNUMsQ0FBQztDQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcm9vdC8uL3NyYy91dGlscy9saWIvZ2l0L0dpdFNlcnZlci50cyIsIndlYnBhY2s6Ly9yb290Ly4vc3JjL3V0aWxzL2xpYi9naXQvR2l0ZWUudHMiLCJ3ZWJwYWNrOi8vcm9vdC8uL3NyYy91dGlscy9saWIvZ2l0L0dpdGh1Yi50cyIsIndlYnBhY2s6Ly9yb290Ly4vc3JjL3V0aWxzL2xpYi9pbnF1aXJlci50cyIsIndlYnBhY2s6Ly9yb290Ly4vc3JjL3V0aWxzL2xpYi9pc0RlYnVnLnRzIiwid2VicGFjazovL3Jvb3QvLi9zcmMvdXRpbHMvbGliL2xvZy50cyIsIndlYnBhY2s6Ly9yb290L2V4dGVybmFsIGNvbW1vbmpzIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly9yb290L2V4dGVybmFsIGNvbW1vbmpzIFwiZXhlY2FcIiIsIndlYnBhY2s6Ly9yb290L2V4dGVybmFsIGNvbW1vbmpzIFwiZnMtZXh0cmFcIiIsIndlYnBhY2s6Ly9yb290L2V4dGVybmFsIGNvbW1vbmpzIFwiaW5xdWlyZXJcIiIsIndlYnBhY2s6Ly9yb290L2V4dGVybmFsIGNvbW1vbmpzIFwibnBtbG9nXCIiLCJ3ZWJwYWNrOi8vcm9vdC9leHRlcm5hbCBjb21tb25qcyBcInBhdGgtZXhpc3RzXCIiLCJ3ZWJwYWNrOi8vcm9vdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yb290L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jvb3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jvb3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yb290L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcm9vdC8uL3NyYy91dGlscy9saWIvZ2l0L0dpdFV0aWxzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBwYXRoIGZyb20gXCJub2RlOnBhdGhcIjtcbmltcG9ydCBmcyBmcm9tIFwibm9kZTpmc1wiO1xuaW1wb3J0IHsgaG9tZWRpciwgcGxhdGZvcm0gfSBmcm9tIFwibm9kZTpvc1wiO1xuaW1wb3J0IHsgcGF0aEV4aXN0c1N5bmMgfSBmcm9tIFwicGF0aC1leGlzdHNcIjtcbmltcG9ydCB7IGV4ZWNhIH0gZnJvbSBcImV4ZWNhXCI7XG5pbXBvcnQgZnNlIGZyb20gXCJmcy1leHRyYVwiO1xuaW1wb3J0IHsgbWFrZVBhc3N3b3JkIH0gZnJvbSBcIi4uL2lucXVpcmVyXCI7XG5pbXBvcnQgbG9nIGZyb20gXCIuLi9sb2dcIjtcblxuY29uc3QgVEVNUF9IT01FID0gXCIudHNoZWVwLWNsaVwiO1xuY29uc3QgVEVNUF9UT0tFTiA9IFwiLmdpdF90b2tlblwiO1xuY29uc3QgVEVNUF9QTEFURk9STSA9IFwiLmdpdF9wbGF0Zm9ybVwiO1xuY29uc3QgVEVNUF9PV04gPSBcIi5naXRfb3duXCI7XG5jb25zdCBURU1QX0xPR0lOID0gXCIuZ2l0X2xvZ2luXCI7XG5cbmZ1bmN0aW9uIGNyZWF0ZVRva2VuUGF0aCgpIHtcbiAgcmV0dXJuIHBhdGgucmVzb2x2ZShob21lZGlyKCksIFRFTVBfSE9NRSwgVEVNUF9UT0tFTik7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVBsYXRmb3JtUGF0aCgpIHtcbiAgcmV0dXJuIHBhdGgucmVzb2x2ZShob21lZGlyKCksIFRFTVBfSE9NRSwgVEVNUF9QTEFURk9STSk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU93blBhdGgoKSB7XG4gIHJldHVybiBwYXRoLnJlc29sdmUoaG9tZWRpcigpLCBURU1QX0hPTUUsIFRFTVBfT1dOKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTG9naW5QYXRoKCkge1xuICByZXR1cm4gcGF0aC5yZXNvbHZlKGhvbWVkaXIoKSwgVEVNUF9IT01FLCBURU1QX0xPR0lOKTtcbn1cblxuZnVuY3Rpb24gZ2V0R2l0UGxhdGZvcm0oKSB7XG4gIGlmIChwYXRoRXhpc3RzU3luYyhjcmVhdGVQbGF0Zm9ybVBhdGgoKSkpIHtcbiAgICByZXR1cm4gZnMucmVhZEZpbGVTeW5jKGNyZWF0ZVBsYXRmb3JtUGF0aCgpKS50b1N0cmluZygpO1xuICB9XG4gIHJldHVybiBudWxsO1xufVxuXG5mdW5jdGlvbiBnZXRHaXRPd24oKSB7XG4gIGlmIChwYXRoRXhpc3RzU3luYyhjcmVhdGVPd25QYXRoKCkpKSB7XG4gICAgcmV0dXJuIGZzLnJlYWRGaWxlU3luYyhjcmVhdGVPd25QYXRoKCkpLnRvU3RyaW5nKCk7XG4gIH1cbiAgcmV0dXJuIG51bGw7XG59XG5cbmZ1bmN0aW9uIGdldEdpdExvZ2luKCkge1xuICBpZiAocGF0aEV4aXN0c1N5bmMoY3JlYXRlTG9naW5QYXRoKCkpKSB7XG4gICAgcmV0dXJuIGZzLnJlYWRGaWxlU3luYyhjcmVhdGVMb2dpblBhdGgoKSkudG9TdHJpbmcoKTtcbiAgfVxuICByZXR1cm4gbnVsbDtcbn1cblxuY2xhc3MgR2l0U2VydmVyIHtcbiAgdG9rZW46IGFueTtcbiAgcGxhdGZvcm06IGFueTtcbiAgb3duOiBhbnk7XG4gIGxvZ2luOiBhbnk7XG4gIGNvbnN0cnVjdG9yKCkge31cblxuICBhc3luYyBpbml0KCkge1xuICAgIC8vIOWIpOaWrXRva2Vu5piv5ZCm5b2V5YWlXG4gICAgY29uc3QgdG9rZW5QYXRoID0gY3JlYXRlVG9rZW5QYXRoKCk7XG4gICAgY29uc29sZS5sb2codG9rZW5QYXRoKTtcbiAgICBpZiAocGF0aEV4aXN0c1N5bmModG9rZW5QYXRoKSkge1xuICAgICAgdGhpcy50b2tlbiA9IGZzZS5yZWFkRmlsZVN5bmModG9rZW5QYXRoKS50b1N0cmluZygpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnRva2VuID0gYXdhaXQgdGhpcy5nZXRUb2tlbigpO1xuICAgICAgZnMud3JpdGVGaWxlU3luYyh0b2tlblBhdGgsIHRoaXMudG9rZW4pO1xuICAgIH1cbiAgICBsb2cudmVyYm9zZShcInRva2VuXCIsIHRoaXMudG9rZW4pO1xuICB9XG4gIGdldFRva2VuKCkge1xuICAgIHJldHVybiBtYWtlUGFzc3dvcmQoe1xuICAgICAgbWVzc2FnZTogXCLor7fovpPlhaV0b2tlbuS/oeaBrzpcIixcbiAgICB9KTtcbiAgfVxuXG4gIHNhdmVQbGF0Zm9ybShwbGF0Zm9ybSkge1xuICAgIHRoaXMucGxhdGZvcm0gPSBwbGF0Zm9ybTtcbiAgICBmcy53cml0ZUZpbGVTeW5jKGNyZWF0ZVBsYXRmb3JtUGF0aCgpLCBwbGF0Zm9ybSk7XG4gIH1cblxuICBzYXZlT3duKG93bikge1xuICAgIHRoaXMub3duID0gb3duO1xuICAgIGZzLndyaXRlRmlsZVN5bmMoY3JlYXRlT3duUGF0aCgpLCBvd24pO1xuICB9XG5cbiAgc2F2ZUxvZ2luKGxvZ2luKSB7XG4gICAgdGhpcy5sb2dpbiA9IGxvZ2luO1xuICAgIGZzLndyaXRlRmlsZVN5bmMoY3JlYXRlTG9naW5QYXRoKCksIGxvZ2luKTtcbiAgfVxuXG4gIGdldFBsYXRmb3JtKCkge1xuICAgIHJldHVybiB0aGlzLnBsYXRmb3JtO1xuICB9XG5cbiAgZ2V0T3duKCkge1xuICAgIHJldHVybiB0aGlzLm93bjtcbiAgfVxuXG4gIGdldExvZ2luKCkge1xuICAgIHJldHVybiB0aGlzLmxvZ2luO1xuICB9XG5cbiAgY2xvbmVSZXBvKGZ1bGxOYW1lLCB0YWcpIHtcbiAgICBpZiAodGFnKSB7XG4gICAgICByZXR1cm4gZXhlY2EoXCJnaXRcIiwgW1wiY2xvbmVcIiwgdGhpcy5nZXRSZXBvVXJsKGZ1bGxOYW1lKSwgXCItYlwiLCB0YWddKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGV4ZWNhKFwiZ2l0XCIsIFtcImNsb25lXCIsIHRoaXMuZ2V0UmVwb1VybChmdWxsTmFtZSldKTtcbiAgICB9XG4gIH1cbiAgZ2V0UmVwb1VybChmdWxsTmFtZTogYW55KTogc3RyaW5nIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcbiAgfVxuXG4gIGluc3RhbGxEZXBlbmRlbmNpZXMoY3dkLCBmdWxsTmFtZSkge1xuICAgIGNvbnN0IHByb2plY3RQYXRoID0gZ2V0UHJvamVjdFBhdGgoY3dkLCBmdWxsTmFtZSk7XG4gICAgaWYgKHBhdGhFeGlzdHNTeW5jKHByb2plY3RQYXRoKSkge1xuICAgICAgcmV0dXJuIGV4ZWNhKFwibnBtXCIsIFtcImluc3RhbGxcIl0sIHsgY3dkOiBwcm9qZWN0UGF0aCB9KTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBhc3luYyBydW5SZXBvKGN3ZCwgZnVsbE5hbWUpIHtcbiAgICBjb25zdCBwcm9qZWN0UGF0aCA9IGdldFByb2plY3RQYXRoKGN3ZCwgZnVsbE5hbWUpO1xuICAgIGNvbnN0IHBrZyA9IGdldFBhY2thZ2VKc29uKGN3ZCwgZnVsbE5hbWUpO1xuICAgIGlmIChwa2cpIHtcbiAgICAgIGNvbnN0IHsgc2NyaXB0cywgYmluLCBuYW1lIH0gPSBwa2c7XG4gICAgICBpZiAoYmluKSB7XG4gICAgICAgIGF3YWl0IGV4ZWNhKFwibnBtXCIsIFtcImluc3RhbGxcIiwgXCItZ1wiLCBuYW1lXSwge1xuICAgICAgICAgIGN3ZDogcHJvamVjdFBhdGgsXG4gICAgICAgICAgc3Rkb3V0OiBcImluaGVyaXRcIixcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBpZiAoc2NyaXB0cyAmJiBzY3JpcHRzLmRldikge1xuICAgICAgICByZXR1cm4gZXhlY2EoXCJucG1cIiwgW1wicnVuXCIsIFwiZGV2XCJdLCB7XG4gICAgICAgICAgY3dkOiBwcm9qZWN0UGF0aCxcbiAgICAgICAgICBzdGRvdXQ6IFwiaW5oZXJpdFwiLFxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSBpZiAoc2NyaXB0cyAmJiBzY3JpcHRzLnN0YXJ0KSB7XG4gICAgICAgIHJldHVybiBleGVjYShcIm5wbVwiLCBbXCJzdGFydFwiXSwgeyBjd2Q6IHByb2plY3RQYXRoLCBzdGRvdXQ6IFwiaW5oZXJpdFwiIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbG9nLndhcm4oXCLmnKrmib7liLDlkK/liqjlkb3ku6TvvIFcIik7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZ2V0VXNlcigpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJnZXRVc2VyIG11c3QgYmUgaW1wbGVtZW50ZWQhXCIpO1xuICB9XG5cbiAgZ2V0T3JnKCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcImdldE9yZyBtdXN0IGJlIGltcGxlbWVudGVkIVwiKTtcbiAgfVxuXG4gIC8vIGNyZWF0ZVJlcG8oKSB7XG4gIC8vICAgdGhyb3cgbmV3IEVycm9yKFwiY3JlYXRlUmVwbyBtdXN0IGJlIGltcGxlbWVudGVkIVwiKTtcbiAgLy8gfVxuICAvLyBjcmVhdGVDdXN0b21SZXBvKCkge1xuICAvLyAgIHRocm93IG5ldyBFcnJvcihcImNyZWF0ZUN1c3RvbVJlcG8gbXVzdCBiZSBpbXBsZW1lbnRlZCFcIik7XG4gIC8vIH1cbn1cblxuZnVuY3Rpb24gZ2V0UGFja2FnZUpzb24oY3dkLCBmdWxsTmFtZSkge1xuICBjb25zdCBwcm9qZWN0UGF0aCA9IGdldFByb2plY3RQYXRoKGN3ZCwgZnVsbE5hbWUpO1xuICBjb25zdCBwa2dQYXRoID0gcGF0aC5yZXNvbHZlKHByb2plY3RQYXRoLCBcInBhY2thZ2UuanNvblwiKTtcbiAgaWYgKHBhdGhFeGlzdHNTeW5jKHBrZ1BhdGgpKSB7XG4gICAgcmV0dXJuIGZzZS5yZWFkSlNPTlN5bmMocGtnUGF0aCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0UHJvamVjdFBhdGgoY3dkLCBmdWxsTmFtZSkge1xuICBjb25zdCBwcm9qZWN0TmFtZSA9IGZ1bGxOYW1lLnNwbGl0KFwiL1wiKVsxXTtcbiAgcmV0dXJuIHBhdGgucmVzb2x2ZShjd2QsIHByb2plY3ROYW1lKTtcbn1cblxuZnVuY3Rpb24gY2xlYXJDYWNoZSgpIHtcbiAgY29uc3QgcGxhcmZvcm0gPSBjcmVhdGVQbGF0Zm9ybVBhdGgoKTtcbiAgY29uc3QgdG9rZW4gPSBjcmVhdGVUb2tlblBhdGgoKTtcbiAgY29uc3Qgb3duID0gY3JlYXRlT3duUGF0aCgpO1xuICBjb25zdCBsb2dpbiA9IGNyZWF0ZUxvZ2luUGF0aCgpO1xuICBmc2UucmVtb3ZlU3luYyhwbGFyZm9ybSk7XG4gIGZzZS5yZW1vdmVTeW5jKHRva2VuKTtcbiAgZnNlLnJlbW92ZVN5bmMob3duKTtcbiAgZnNlLnJlbW92ZVN5bmMobG9naW4pO1xufVxuXG5leHBvcnQgeyBHaXRTZXJ2ZXIsIGdldEdpdFBsYXRmb3JtLCBjbGVhckNhY2hlLCBnZXRHaXRPd24sIGdldEdpdExvZ2luIH07XG4iLCJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgeyBHaXRTZXJ2ZXIgfSBmcm9tIFwiLi9HaXRTZXJ2ZXJcIjtcbmltcG9ydCBsb2cgZnJvbSBcIi4uL2xvZ1wiO1xuXG5jb25zdCBCQVNFX1VSTCA9IFwiaHR0cHM6Ly9naXRlZS5jb20vYXBpL3Y1XCI7XG5cbmNsYXNzIEdpdGh1YiBleHRlbmRzIEdpdFNlcnZlciB7XG4gIHNlcnZpY2U6IGFueTtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnNlcnZpY2UgPSBheGlvcy5jcmVhdGUoe1xuICAgICAgYmFzZVVSTDogQkFTRV9VUkwsXG4gICAgICB0aW1lb3V0OiA1MDAwLFxuICAgIH0pO1xuICAgIHRoaXMuc2VydmljZS5pbnRlcmNlcHRvcnMucmVzcG9uc2UudXNlKFxuICAgICAgKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xuICAgICAgfSxcbiAgICAgIChlcnJvcikgPT4ge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IpO1xuICAgICAgfVxuICAgICk7XG4gIH1cbiAgZ2V0KHVybCwgcGFyYW1zLCBoZWFkZXJzKSB7XG4gICAgcmV0dXJuIHRoaXMuc2VydmljZSh7XG4gICAgICB1cmwsXG4gICAgICBwYXJhbXM6IHtcbiAgICAgICAgLi4ucGFyYW1zLFxuICAgICAgICBhY2Nlc3NfdG9rZW46IHRoaXMudG9rZW4sXG4gICAgICB9LFxuICAgICAgbWV0aG9kOiBcImdldFwiLFxuICAgICAgaGVhZGVycyxcbiAgICB9KTtcbiAgfVxuICBwb3N0KHVybCwgZGF0YSwgaGVhZGVycykge1xuICAgIHJldHVybiB0aGlzLnNlcnZpY2Uoe1xuICAgICAgdXJsLFxuICAgICAgZGF0YSxcbiAgICAgIHBhcmFtczoge1xuICAgICAgICBhY2Nlc3NfdG9rZW46IHRoaXMudG9rZW4sXG4gICAgICB9LFxuICAgICAgbWV0aG9kOiBcInBvc3RcIixcbiAgICAgIGhlYWRlcnMsXG4gICAgfSk7XG4gIH1cblxuICBzZWFyY2hSZXBvc2l0b3JpZXMocGFyYW1zKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KFwiL3NlYXJjaC9yZXBvc2l0b3JpZXNcIiwgcGFyYW1zLG51bGwpO1xuICB9XG5cbiAgZ2V0VGFncyhmdWxsTmFtZSkge1xuICAgIHJldHVybiB0aGlzLmdldChgL3JlcG9zLyR7ZnVsbE5hbWV9L3RhZ3NgLG51bGwsbnVsbCk7XG4gIH1cblxuICBnZXRSZXBvVXJsKGZ1bGxOYW1lKSB7XG4gICAgcmV0dXJuIGBodHRwczovL2dpdGVlLmNvbS8ke2Z1bGxOYW1lfS5naXRgO1xuICB9XG5cbiAgZ2V0VXNlcigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXQoXCIvdXNlclwiLG51bGwsbnVsbCk7XG4gIH1cblxuICBnZXRPcmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KFwiL3VzZXIvb3Jnc1wiLG51bGwsbnVsbCk7XG4gIH1cblxuICBnZXRSZXBvKG93bmVyLCByZXBvKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KGAvcmVwb3MvJHtvd25lcn0vJHtyZXBvfWAsbnVsbCxudWxsKS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9KTtcbiAgfVxuXG4gIGFzeW5jIGNyZWF0ZVJlcG8obmFtZSkge1xuICAgIGNvbnN0IHJlcG8gPSBhd2FpdCB0aGlzLmdldFJlcG8odGhpcy5sb2dpbiwgbmFtZSk7XG4gICAgaWYgKCFyZXBvKSB7XG4gICAgICBsb2cuaW5mbyhcIuS7k+W6k+S4jeWtmOWcqO+8jOW8gOWni+WIm+W7ulwiKTtcbiAgICAgIGlmICh0aGlzLm93biA9PT0gXCJ1c2VyXCIpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucG9zdChcIi91c2VyL3JlcG9zXCIsIHsgbmFtZSB9LG51bGwpO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLm93biA9PT0gXCJvcmdcIikge1xuICAgICAgICBjb25zdCB1cmwgPSBcIm9yZ3MvXCIgKyB0aGlzLmxvZ2luICsgXCIvcmVwb3NcIjtcbiAgICAgICAgcmV0dXJuIHRoaXMucG9zdCh1cmwsIHsgbmFtZSB9LG51bGwpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBsb2cuaW5mbyhcIuS7k+W6k+WtmOWcqO+8jOebtOaOpei/lOWbnlwiKTtcbiAgICAgIHJldHVybiByZXBvO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBHaXRodWI7XG4iLCJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgeyBHaXRTZXJ2ZXIgfSBmcm9tIFwiLi9HaXRTZXJ2ZXJcIjtcbmltcG9ydCBsb2cgZnJvbSBcIi4uL2xvZ1wiO1xuXG5jb25zdCBCQVNFX1VSTCA9IFwiaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbVwiO1xuXG5jbGFzcyBHaXRodWIgZXh0ZW5kcyBHaXRTZXJ2ZXIge1xuICBzZXJ2aWNlOiBhbnk7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5zZXJ2aWNlID0gYXhpb3MuY3JlYXRlKHtcbiAgICAgIGJhc2VVUkw6IEJBU0VfVVJMLFxuICAgICAgdGltZW91dDogNTAwMCxcbiAgICB9KTtcbiAgICB0aGlzLnNlcnZpY2UuaW50ZXJjZXB0b3JzLnJlcXVlc3QudXNlKFxuICAgICAgKGNvbmZpZykgPT4ge1xuICAgICAgICBjb25maWcuaGVhZGVyc1tcIkF1dGhvcml6YXRpb25cIl0gPSBgQmVhcmVyICR7dGhpcy50b2tlbn1gO1xuICAgICAgICBjb25maWcuaGVhZGVyc1tcIkFjY2VwdFwiXSA9IFwiIGFwcGxpY2F0aW9uL3ZuZC5naXRodWIranNvblwiO1xuICAgICAgICBjb25maWcuaGVhZGVyc1tcIlgtR2l0SHViLUFwaS1WZXJzaW9uXCJdID0gXCIyMDIyLTExLTI4XCI7XG4gICAgICAgIHJldHVybiBjb25maWc7XG4gICAgICB9LFxuICAgICAgKGVycm9yKSA9PiB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvcik7XG4gICAgICB9XG4gICAgKTtcbiAgICB0aGlzLnNlcnZpY2UuaW50ZXJjZXB0b3JzLnJlc3BvbnNlLnVzZShcbiAgICAgIChyZXNwb25zZSkgPT4ge1xuICAgICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcbiAgICAgIH0sXG4gICAgICAoZXJyb3IpID0+IHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yKTtcbiAgICAgIH1cbiAgICApO1xuICB9XG4gIGdldCh1cmwsIHBhcmFtcywgaGVhZGVycykge1xuICAgIHJldHVybiB0aGlzLnNlcnZpY2Uoe1xuICAgICAgdXJsLFxuICAgICAgcGFyYW1zLFxuICAgICAgbWV0aG9kOiBcImdldFwiLFxuICAgICAgaGVhZGVycyxcbiAgICB9KTtcbiAgfVxuICBwb3N0KHVybCwgZGF0YSwgaGVhZGVycykge1xuICAgIHJldHVybiB0aGlzLnNlcnZpY2Uoe1xuICAgICAgdXJsLFxuICAgICAgZGF0YSxcbiAgICAgIHBhcmFtczoge1xuICAgICAgICBhY2Nlc3NfdG9rZW46IHRoaXMudG9rZW4sXG4gICAgICB9LFxuICAgICAgbWV0aG9kOiBcInBvc3RcIixcbiAgICAgIGhlYWRlcnMsXG4gICAgfSk7XG4gIH1cblxuICBzZWFyY2hSZXBvc2l0b3JpZXMocGFyYW1zKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KFwiL3NlYXJjaC9yZXBvc2l0b3JpZXNcIiwgcGFyYW1zLG51bGwpO1xuICB9XG5cbiAgc2VhcmNoQ29kZShwYXJhbXMpIHtcbiAgICByZXR1cm4gdGhpcy5nZXQoXCIvc2VhcmNoL2NvZGVcIiwgcGFyYW1zLG51bGwpO1xuICB9XG5cbiAgZ2V0VGFncyhmdWxsTmFtZSwgcGFyYW1zKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KGAvcmVwb3MvJHtmdWxsTmFtZX0vdGFnc2AsIHBhcmFtcyxudWxsKTtcbiAgfVxuXG4gIGdldFJlcG9VcmwoZnVsbE5hbWUpIHtcbiAgICByZXR1cm4gYGh0dHBzOi8vZ2l0aHViLmNvbS8ke2Z1bGxOYW1lfS5naXRgO1xuICB9XG5cbiAgZ2V0VXNlcigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXQoXCIvdXNlclwiLG51bGwsbnVsbCk7XG4gIH1cblxuICBnZXRPcmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KFwiL3VzZXIvb3Jnc1wiLG51bGwsbnVsbCk7XG4gIH1cblxuICBnZXRSZXBvKG93bmVyLCByZXBvKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KGAvcmVwb3MvJHtvd25lcn0vJHtyZXBvfWAsIHtcbiAgICAgIGFjY2VwdDogXCJhcHBsaWNhdGlvbi92bmQuZ2l0aHViK2pzb25cIixcbiAgICB9LG51bGwpLmNhdGNoKChlcnIpID0+IHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH0pO1xuICB9XG5cbiAgYXN5bmMgY3JlYXRlUmVwbyhuYW1lKSB7XG4gICAgY29uc3QgcmVwbyA9IGF3YWl0IHRoaXMuZ2V0UmVwbyh0aGlzLmxvZ2luLCBuYW1lKTtcbiAgICBpZiAoIXJlcG8pIHtcbiAgICAgIGxvZy5pbmZvKFwi5LuT5bqT5LiN5a2Y5Zyo77yM5byA5aeL5Yib5bu6XCIpO1xuICAgICAgaWYgKHRoaXMub3duID09PSBcInVzZXJcIikge1xuICAgICAgICByZXR1cm4gdGhpcy5wb3N0KFxuICAgICAgICAgIFwiL3VzZXIvcmVwb3NcIixcbiAgICAgICAgICB7IG5hbWUgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBhY2NlcHQ6IFwiYXBwbGljYXRpb24vdm5kLmdpdGh1Yitqc29uXCIsXG4gICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLm93biA9PT0gXCJvcmdcIikge1xuICAgICAgICBjb25zdCB1cmwgPSBcIm9yZ3MvXCIgKyB0aGlzLmxvZ2luICsgXCIvcmVwb3NcIjtcbiAgICAgICAgcmV0dXJuIHRoaXMucG9zdChcbiAgICAgICAgICB1cmwsXG4gICAgICAgICAgeyBuYW1lIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgYWNjZXB0OiBcImFwcGxpY2F0aW9uL3ZuZC5naXRodWIranNvblwiLFxuICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgbG9nLmluZm8oXCLku5PlupPlrZjlnKjvvIznm7TmjqXov5Tlm55cIik7XG4gICAgICByZXR1cm4gcmVwbztcbiAgICB9XG4gIH1cbiAgYXN5bmMgY3JlYXRlQ3VzdG9tUmVwbyhuYW1lKXtcbiAgICBjb25zb2xlLmxvZyhuYW1lLFwiMjEyXCIpO1xuICAgIGNvbnN0IHJlcG8gPSBhd2FpdCB0aGlzLmdldFJlcG8odGhpcy5sb2dpbiwgbmFtZSk7XG4gICAgaWYoIXJlcG8pe1xuICAgICAgbG9nLmluZm8oXCLku5PlupPkuI3lrZjlnKjvvIzlvIDlp4vliJvlu7pcIik7XG4gICAgICBjb25zb2xlLmxvZyhyZXBvKTtcbiAgICAgIHJldHVybiB0aGlzLnBvc3QoXG4gICAgICAgIFwiL3VzZXIvcmVwb3NcIixcbiAgICAgICAgeyBuYW1lIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBhY2NlcHQ6IFwiYXBwbGljYXRpb24vdm5kLmdpdGh1Yitqc29uXCIsXG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgfWVsc2Uge1xuICAgICAgbG9nLmluZm8oXCLku5PlupPlrZjlnKjvvIznm7TmjqXov5Tlm55cIik7XG4gICAgICByZXR1cm4gcmVwbztcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgR2l0aHViO1xuIiwiaW1wb3J0IGlucXVpcmVyIGZyb20gXCJpbnF1aXJlclwiO1xuXG5mdW5jdGlvbiBtYWtlKHtcbiAgY2hvaWNlcyxcbiAgZGVmYXVsdFZhbHVlLFxuICBtZXNzYWdlID0gXCLor7fpgInmi6lcIixcbiAgdHlwZSA9IFwibGlzdFwiLFxuICByZXF1aXJlID0gdHJ1ZSxcbiAgbWFzayA9IFwiKlwiLFxuICB2YWxpZGF0ZSxcbiAgcGFnZVNpemUsXG4gIGxvb3AsXG59KSB7XG4gIGNvbnN0IG9wdGlvbnM6YW55ID0ge1xuICAgIG5hbWU6IFwibmFtZVwiLFxuICAgIGRlZmF1bHRWYWx1ZTogZGVmYXVsdFZhbHVlLFxuICAgIG1lc3NhZ2UsXG4gICAgdHlwZSxcbiAgICByZXF1aXJlLFxuICAgIG1hc2ssXG4gICAgdmFsaWRhdGUsXG4gICAgcGFnZVNpemUsXG4gICAgbG9vcCxcbiAgfTtcbiAgaWYgKHR5cGUgPT09IFwibGlzdFwiKSB7XG4gICAgb3B0aW9ucy5jaG9pY2VzID0gY2hvaWNlcztcbiAgfVxuICByZXR1cm4gaW5xdWlyZXIucHJvbXB0KG9wdGlvbnMpLnRoZW4oKGFuc3dlcikgPT4gYW5zd2VyLm5hbWUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWFrZUxpc3QocGFyYW1zKSB7XG4gIHJldHVybiBtYWtlKHsgLi4ucGFyYW1zIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWFrZUlucHV0KHBhcmFtcykge1xuICByZXR1cm4gbWFrZSh7XG4gICAgdHlwZTogXCJpbnB1dFwiLFxuICAgIC4uLnBhcmFtcyxcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtYWtlUGFzc3dvcmQocGFyYW1zKSB7XG4gIHJldHVybiBtYWtlKHtcbiAgICB0eXBlOiBcInBhc3N3b3JkXCIsXG4gICAgLi4ucGFyYW1zLFxuICB9KTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzRGVidWcoKSB7XG4gIHJldHVybiBwcm9jZXNzLmFyZ3YuaW5jbHVkZXMoXCItLWRlYnVnXCIpIHx8IHByb2Nlc3MuYXJndi5pbmNsdWRlcyhcIi1kXCIpO1xufVxuIiwiaW1wb3J0ICBsb2cgIGZyb20gXCJucG1sb2dcIjtcbmltcG9ydCBpc0RlYnVnIGZyb20gXCIuL2lzRGVidWdcIjtcblxuaWYgKGlzRGVidWcoKSkge1xuICBsb2cubGV2ZWwgPSBcInZlcmJvc2VcIjtcbn0gZWxzZSB7XG4gIGxvZy5sZXZlbCA9IFwiaW5mb1wiO1xufVxubG9nLmhlYWRpbmcgPSBcInRzaGVlcFwiO1xubG9nLmFkZExldmVsKFwic3VjY2Vzc1wiLCAyMDAwLCB7IGZnOiBcImdyZWVuXCIsIGJvbGQ6IHRydWUgfSk7XG5leHBvcnQgZGVmYXVsdCBsb2c7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJleGVjYVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmcy1leHRyYVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJpbnF1aXJlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJucG1sb2dcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGF0aC1leGlzdHNcIik7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IG1ha2VMaXN0IH0gZnJvbSBcIi4uL2lucXVpcmVyXCI7XG5pbXBvcnQgbG9nIGZyb20gXCIuLi9sb2dcIjtcbmltcG9ydCBHaXRodWIgZnJvbSBcIi4vR2l0aHViXCI7XG5pbXBvcnQgR2l0ZWUgZnJvbSBcIi4vR2l0ZWVcIjtcbmltcG9ydCB7IGdldEdpdFBsYXRmb3JtLCBnZXRHaXRMb2dpbiwgZ2V0R2l0T3duIH0gZnJvbSBcIi4vR2l0U2VydmVyXCI7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBpbml0R2l0U2VydmVyKCkge1xuICBsZXQgcGxhdGZvcm0gPSBnZXRHaXRQbGF0Zm9ybSgpO1xuICBsb2cudmVyYm9zZShcInBsYXJmb3JtXCIsIHBsYXRmb3JtKTtcbiAgaWYgKCFwbGF0Zm9ybSkge1xuICAgIHBsYXRmb3JtID0gYXdhaXQgbWFrZUxpc3Qoe1xuICAgICAgbWVzc2FnZTogXCLor7fpgInmi6lHaXTlubPlj7BcIixcbiAgICAgIGNob2ljZXM6IFtcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6IFwiR2l0aHViXCIsXG4gICAgICAgICAgdmFsdWU6IFwiZ2l0aHViXCIsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiBcIkdpdGVlXCIsXG4gICAgICAgICAgdmFsdWU6IFwiZ2l0ZWVcIixcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfSk7XG4gIH1cbiAgbG9nLnZlcmJvc2UoXCJwbGFyZm9ybVwiLCBwbGF0Zm9ybSk7XG4gIGxldCBnaXRBUEk7XG4gIGlmIChwbGF0Zm9ybSA9PT0gXCJnaXRodWJcIikge1xuICAgIGdpdEFQSSA9IG5ldyBHaXRodWIoKTtcbiAgfSBlbHNlIHtcbiAgICBnaXRBUEkgPSBuZXcgR2l0ZWUoKTtcbiAgfVxuICBnaXRBUEkuc2F2ZVBsYXRmb3JtKHBsYXRmb3JtKTtcbiAgYXdhaXQgZ2l0QVBJLmluaXQoKTtcbiAgcmV0dXJuIGdpdEFQSTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGluaXRHaXRUeXBlKGdpdEFQSSkge1xuICAvLyDku5PlupPnsbvlnotcbiAgbGV0IGdpdE93biA9IGdldEdpdE93bigpO1xuICAvLyDku5PlupPnmbvlvZXlkI1cbiAgbGV0IGdpdExvZ2luID0gZ2V0R2l0TG9naW4oKTtcbiAgaWYgKCFnaXRMb2dpbiAmJiAhZ2l0T3duKSB7XG4gICAgY29uc3QgdXNlciA9IGF3YWl0IGdpdEFQSS5nZXRVc2VyKCk7XG4gICAgY29uc3Qgb3JnID0gYXdhaXQgZ2l0QVBJLmdldE9yZygpO1xuICAgIGxvZy52ZXJib3NlKFwidXNlclwiLCB1c2VyKTtcbiAgICBsb2cudmVyYm9zZShcIm9yZ1wiLCBvcmcpO1xuICAgIGlmICghZ2l0T3duKSB7XG4gICAgICBnaXRPd24gPSBhd2FpdCBtYWtlTGlzdCh7XG4gICAgICAgIG1lc3NhZ2U6IFwi6K+36YCJ5oup5LuT5bqT57G75Z6LXCIsXG4gICAgICAgIGNob2ljZXM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiBcIlVzZXJcIixcbiAgICAgICAgICAgIHZhbHVlOiBcInVzZXJcIixcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6IFwiT3JnYW5pemF0aW9uXCIsXG4gICAgICAgICAgICB2YWx1ZTogXCJvcmdcIixcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgfSk7XG4gICAgICBsb2cudmVyYm9zZShcImdpdE93blwiLCBnaXRPd24pO1xuICAgIH1cbiAgICBpZiAoZ2l0T3duID09PSBcInVzZXJcIikge1xuICAgICAgZ2l0TG9naW4gPSB1c2VyPy5sb2dpbjtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qgb3JnTGlzdCA9IG9yZy5tYXAoKGl0ZW0pID0+ICh7XG4gICAgICAgIG5hbWU6IGl0ZW0ubmFtZSB8fCBpdGVtLmxvZ2luLFxuICAgICAgICB2YWx1ZTogaXRlbS5sb2dpbixcbiAgICAgIH0pKTtcbiAgICAgIGdpdExvZ2luID0gYXdhaXQgbWFrZUxpc3Qoe1xuICAgICAgICBtZXNzYWdlOiBcIuivt+mAieaLqee7hOe7h1wiLFxuICAgICAgICBjaG9pY2VzOiBvcmdMaXN0LFxuICAgICAgfSk7XG4gICAgfVxuICAgIGxvZy52ZXJib3NlKFwiZ2l0TG9naW5cIiwgZ2l0TG9naW4pO1xuICB9XG4gIGlmICghZ2l0TG9naW4gfHwgIWdpdE93bikge1xuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgIGDkuLrojrflj5bliLDnlKjmiLfnmoRHaXTnmbvlvZXkv6Hmga/vvIHor7fkvb/nlKggXCJ0LXRzaGVlcCBjb21taXQgLS1jbGVhclwiIOa4hemZpOe8k+WtmOWQjumHjeivlWBcbiAgICApO1xuICB9XG4gIGdpdEFQSS5zYXZlT3duKGdpdE93bik7XG4gIGdpdEFQSS5zYXZlTG9naW4oZ2l0TG9naW4pO1xuICByZXR1cm4gZ2l0TG9naW47XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVSZW1vdGVSZXBvKGdpdEFQSSwgbmFtZSkge1xuICBjb25zdCByZXQgPSBhd2FpdCBnaXRBUEkuY3JlYXRlUmVwbyhuYW1lKTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==