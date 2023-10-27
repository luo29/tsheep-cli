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
/*!************************************!*\
  !*** ./src/utils/lib/git/Gitee.ts ***!
  \************************************/
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

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0lBQzFDLENBQUM7SUFFRCxPQUFPLENBQUMsS0FBSyxFQUFFLElBQUk7UUFDakIsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsS0FBSyxJQUFJLElBQUksRUFBRSxFQUFDLElBQUksRUFBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRTtZQUNqRSxPQUFPLElBQUksQ0FBQztRQUNkLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVLLFVBQVUsQ0FBQyxJQUFJOztZQUNuQixNQUFNLElBQUksR0FBRyxNQUFNLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztZQUNsRCxJQUFJLENBQUMsSUFBSSxFQUFFO2dCQUNULDRDQUFHLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO2dCQUN2QixJQUFJLElBQUksQ0FBQyxHQUFHLEtBQUssTUFBTSxFQUFFO29CQUN2QixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLEVBQUUsSUFBSSxFQUFFLEVBQUMsSUFBSSxDQUFDLENBQUM7aUJBQ2hEO3FCQUFNLElBQUksSUFBSSxDQUFDLEdBQUcsS0FBSyxLQUFLLEVBQUU7b0JBQzdCLE1BQU0sR0FBRyxHQUFHLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQztvQkFDNUMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxFQUFFLElBQUksRUFBRSxFQUFDLElBQUksQ0FBQyxDQUFDO2lCQUN0QzthQUNGO2lCQUFNO2dCQUNMLDRDQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO2dCQUN0QixPQUFPLElBQUksQ0FBQzthQUNiO1FBQ0gsQ0FBQztLQUFBO0NBQ0Y7QUFFRCxpRUFBZSxNQUFNLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yb290Ly4vc3JjL3V0aWxzL2xpYi9naXQvR2l0U2VydmVyLnRzIiwid2VicGFjazovL3Jvb3QvLi9zcmMvdXRpbHMvbGliL2lucXVpcmVyLnRzIiwid2VicGFjazovL3Jvb3QvLi9zcmMvdXRpbHMvbGliL2lzRGVidWcudHMiLCJ3ZWJwYWNrOi8vcm9vdC8uL3NyYy91dGlscy9saWIvbG9nLnRzIiwid2VicGFjazovL3Jvb3QvZXh0ZXJuYWwgY29tbW9uanMgXCJheGlvc1wiIiwid2VicGFjazovL3Jvb3QvZXh0ZXJuYWwgY29tbW9uanMgXCJleGVjYVwiIiwid2VicGFjazovL3Jvb3QvZXh0ZXJuYWwgY29tbW9uanMgXCJmcy1leHRyYVwiIiwid2VicGFjazovL3Jvb3QvZXh0ZXJuYWwgY29tbW9uanMgXCJpbnF1aXJlclwiIiwid2VicGFjazovL3Jvb3QvZXh0ZXJuYWwgY29tbW9uanMgXCJucG1sb2dcIiIsIndlYnBhY2s6Ly9yb290L2V4dGVybmFsIGNvbW1vbmpzIFwicGF0aC1leGlzdHNcIiIsIndlYnBhY2s6Ly9yb290L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jvb3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcm9vdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcm9vdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jvb3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yb290Ly4vc3JjL3V0aWxzL2xpYi9naXQvR2l0ZWUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHBhdGggZnJvbSBcIm5vZGU6cGF0aFwiO1xuaW1wb3J0IGZzIGZyb20gXCJub2RlOmZzXCI7XG5pbXBvcnQgeyBob21lZGlyLCBwbGF0Zm9ybSB9IGZyb20gXCJub2RlOm9zXCI7XG5pbXBvcnQgeyBwYXRoRXhpc3RzU3luYyB9IGZyb20gXCJwYXRoLWV4aXN0c1wiO1xuaW1wb3J0IHsgZXhlY2EgfSBmcm9tIFwiZXhlY2FcIjtcbmltcG9ydCBmc2UgZnJvbSBcImZzLWV4dHJhXCI7XG5pbXBvcnQgeyBtYWtlUGFzc3dvcmQgfSBmcm9tIFwiLi4vaW5xdWlyZXJcIjtcbmltcG9ydCBsb2cgZnJvbSBcIi4uL2xvZ1wiO1xuXG5jb25zdCBURU1QX0hPTUUgPSBcIi50c2hlZXAtY2xpXCI7XG5jb25zdCBURU1QX1RPS0VOID0gXCIuZ2l0X3Rva2VuXCI7XG5jb25zdCBURU1QX1BMQVRGT1JNID0gXCIuZ2l0X3BsYXRmb3JtXCI7XG5jb25zdCBURU1QX09XTiA9IFwiLmdpdF9vd25cIjtcbmNvbnN0IFRFTVBfTE9HSU4gPSBcIi5naXRfbG9naW5cIjtcblxuZnVuY3Rpb24gY3JlYXRlVG9rZW5QYXRoKCkge1xuICByZXR1cm4gcGF0aC5yZXNvbHZlKGhvbWVkaXIoKSwgVEVNUF9IT01FLCBURU1QX1RPS0VOKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlUGxhdGZvcm1QYXRoKCkge1xuICByZXR1cm4gcGF0aC5yZXNvbHZlKGhvbWVkaXIoKSwgVEVNUF9IT01FLCBURU1QX1BMQVRGT1JNKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlT3duUGF0aCgpIHtcbiAgcmV0dXJuIHBhdGgucmVzb2x2ZShob21lZGlyKCksIFRFTVBfSE9NRSwgVEVNUF9PV04pO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVMb2dpblBhdGgoKSB7XG4gIHJldHVybiBwYXRoLnJlc29sdmUoaG9tZWRpcigpLCBURU1QX0hPTUUsIFRFTVBfTE9HSU4pO1xufVxuXG5mdW5jdGlvbiBnZXRHaXRQbGF0Zm9ybSgpIHtcbiAgaWYgKHBhdGhFeGlzdHNTeW5jKGNyZWF0ZVBsYXRmb3JtUGF0aCgpKSkge1xuICAgIHJldHVybiBmcy5yZWFkRmlsZVN5bmMoY3JlYXRlUGxhdGZvcm1QYXRoKCkpLnRvU3RyaW5nKCk7XG4gIH1cbiAgcmV0dXJuIG51bGw7XG59XG5cbmZ1bmN0aW9uIGdldEdpdE93bigpIHtcbiAgaWYgKHBhdGhFeGlzdHNTeW5jKGNyZWF0ZU93blBhdGgoKSkpIHtcbiAgICByZXR1cm4gZnMucmVhZEZpbGVTeW5jKGNyZWF0ZU93blBhdGgoKSkudG9TdHJpbmcoKTtcbiAgfVxuICByZXR1cm4gbnVsbDtcbn1cblxuZnVuY3Rpb24gZ2V0R2l0TG9naW4oKSB7XG4gIGlmIChwYXRoRXhpc3RzU3luYyhjcmVhdGVMb2dpblBhdGgoKSkpIHtcbiAgICByZXR1cm4gZnMucmVhZEZpbGVTeW5jKGNyZWF0ZUxvZ2luUGF0aCgpKS50b1N0cmluZygpO1xuICB9XG4gIHJldHVybiBudWxsO1xufVxuXG5jbGFzcyBHaXRTZXJ2ZXIge1xuICB0b2tlbjogYW55O1xuICBwbGF0Zm9ybTogYW55O1xuICBvd246IGFueTtcbiAgbG9naW46IGFueTtcbiAgY29uc3RydWN0b3IoKSB7fVxuXG4gIGFzeW5jIGluaXQoKSB7XG4gICAgLy8g5Yik5patdG9rZW7mmK/lkKblvZXlhaVcbiAgICBjb25zdCB0b2tlblBhdGggPSBjcmVhdGVUb2tlblBhdGgoKTtcbiAgICBjb25zb2xlLmxvZyh0b2tlblBhdGgpO1xuICAgIGlmIChwYXRoRXhpc3RzU3luYyh0b2tlblBhdGgpKSB7XG4gICAgICB0aGlzLnRva2VuID0gZnNlLnJlYWRGaWxlU3luYyh0b2tlblBhdGgpLnRvU3RyaW5nKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudG9rZW4gPSBhd2FpdCB0aGlzLmdldFRva2VuKCk7XG4gICAgICBmcy53cml0ZUZpbGVTeW5jKHRva2VuUGF0aCwgdGhpcy50b2tlbik7XG4gICAgfVxuICAgIGxvZy52ZXJib3NlKFwidG9rZW5cIiwgdGhpcy50b2tlbik7XG4gIH1cbiAgZ2V0VG9rZW4oKSB7XG4gICAgcmV0dXJuIG1ha2VQYXNzd29yZCh7XG4gICAgICBtZXNzYWdlOiBcIuivt+i+k+WFpXRva2Vu5L+h5oGvOlwiLFxuICAgIH0pO1xuICB9XG5cbiAgc2F2ZVBsYXRmb3JtKHBsYXRmb3JtKSB7XG4gICAgdGhpcy5wbGF0Zm9ybSA9IHBsYXRmb3JtO1xuICAgIGZzLndyaXRlRmlsZVN5bmMoY3JlYXRlUGxhdGZvcm1QYXRoKCksIHBsYXRmb3JtKTtcbiAgfVxuXG4gIHNhdmVPd24ob3duKSB7XG4gICAgdGhpcy5vd24gPSBvd247XG4gICAgZnMud3JpdGVGaWxlU3luYyhjcmVhdGVPd25QYXRoKCksIG93bik7XG4gIH1cblxuICBzYXZlTG9naW4obG9naW4pIHtcbiAgICB0aGlzLmxvZ2luID0gbG9naW47XG4gICAgZnMud3JpdGVGaWxlU3luYyhjcmVhdGVMb2dpblBhdGgoKSwgbG9naW4pO1xuICB9XG5cbiAgZ2V0UGxhdGZvcm0oKSB7XG4gICAgcmV0dXJuIHRoaXMucGxhdGZvcm07XG4gIH1cblxuICBnZXRPd24oKSB7XG4gICAgcmV0dXJuIHRoaXMub3duO1xuICB9XG5cbiAgZ2V0TG9naW4oKSB7XG4gICAgcmV0dXJuIHRoaXMubG9naW47XG4gIH1cblxuICBjbG9uZVJlcG8oZnVsbE5hbWUsIHRhZykge1xuICAgIGlmICh0YWcpIHtcbiAgICAgIHJldHVybiBleGVjYShcImdpdFwiLCBbXCJjbG9uZVwiLCB0aGlzLmdldFJlcG9VcmwoZnVsbE5hbWUpLCBcIi1iXCIsIHRhZ10pO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZXhlY2EoXCJnaXRcIiwgW1wiY2xvbmVcIiwgdGhpcy5nZXRSZXBvVXJsKGZ1bGxOYW1lKV0pO1xuICAgIH1cbiAgfVxuICBnZXRSZXBvVXJsKGZ1bGxOYW1lOiBhbnkpOiBzdHJpbmcge1xuICAgIHRocm93IG5ldyBFcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xuICB9XG5cbiAgaW5zdGFsbERlcGVuZGVuY2llcyhjd2QsIGZ1bGxOYW1lKSB7XG4gICAgY29uc3QgcHJvamVjdFBhdGggPSBnZXRQcm9qZWN0UGF0aChjd2QsIGZ1bGxOYW1lKTtcbiAgICBpZiAocGF0aEV4aXN0c1N5bmMocHJvamVjdFBhdGgpKSB7XG4gICAgICByZXR1cm4gZXhlY2EoXCJucG1cIiwgW1wiaW5zdGFsbFwiXSwgeyBjd2Q6IHByb2plY3RQYXRoIH0pO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGFzeW5jIHJ1blJlcG8oY3dkLCBmdWxsTmFtZSkge1xuICAgIGNvbnN0IHByb2plY3RQYXRoID0gZ2V0UHJvamVjdFBhdGgoY3dkLCBmdWxsTmFtZSk7XG4gICAgY29uc3QgcGtnID0gZ2V0UGFja2FnZUpzb24oY3dkLCBmdWxsTmFtZSk7XG4gICAgaWYgKHBrZykge1xuICAgICAgY29uc3QgeyBzY3JpcHRzLCBiaW4sIG5hbWUgfSA9IHBrZztcbiAgICAgIGlmIChiaW4pIHtcbiAgICAgICAgYXdhaXQgZXhlY2EoXCJucG1cIiwgW1wiaW5zdGFsbFwiLCBcIi1nXCIsIG5hbWVdLCB7XG4gICAgICAgICAgY3dkOiBwcm9qZWN0UGF0aCxcbiAgICAgICAgICBzdGRvdXQ6IFwiaW5oZXJpdFwiLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGlmIChzY3JpcHRzICYmIHNjcmlwdHMuZGV2KSB7XG4gICAgICAgIHJldHVybiBleGVjYShcIm5wbVwiLCBbXCJydW5cIiwgXCJkZXZcIl0sIHtcbiAgICAgICAgICBjd2Q6IHByb2plY3RQYXRoLFxuICAgICAgICAgIHN0ZG91dDogXCJpbmhlcml0XCIsXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIGlmIChzY3JpcHRzICYmIHNjcmlwdHMuc3RhcnQpIHtcbiAgICAgICAgcmV0dXJuIGV4ZWNhKFwibnBtXCIsIFtcInN0YXJ0XCJdLCB7IGN3ZDogcHJvamVjdFBhdGgsIHN0ZG91dDogXCJpbmhlcml0XCIgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsb2cud2FybihcIuacquaJvuWIsOWQr+WKqOWRveS7pO+8gVwiKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBnZXRVc2VyKCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcImdldFVzZXIgbXVzdCBiZSBpbXBsZW1lbnRlZCFcIik7XG4gIH1cblxuICBnZXRPcmcoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiZ2V0T3JnIG11c3QgYmUgaW1wbGVtZW50ZWQhXCIpO1xuICB9XG5cbiAgLy8gY3JlYXRlUmVwbygpIHtcbiAgLy8gICB0aHJvdyBuZXcgRXJyb3IoXCJjcmVhdGVSZXBvIG11c3QgYmUgaW1wbGVtZW50ZWQhXCIpO1xuICAvLyB9XG4gIC8vIGNyZWF0ZUN1c3RvbVJlcG8oKSB7XG4gIC8vICAgdGhyb3cgbmV3IEVycm9yKFwiY3JlYXRlQ3VzdG9tUmVwbyBtdXN0IGJlIGltcGxlbWVudGVkIVwiKTtcbiAgLy8gfVxufVxuXG5mdW5jdGlvbiBnZXRQYWNrYWdlSnNvbihjd2QsIGZ1bGxOYW1lKSB7XG4gIGNvbnN0IHByb2plY3RQYXRoID0gZ2V0UHJvamVjdFBhdGgoY3dkLCBmdWxsTmFtZSk7XG4gIGNvbnN0IHBrZ1BhdGggPSBwYXRoLnJlc29sdmUocHJvamVjdFBhdGgsIFwicGFja2FnZS5qc29uXCIpO1xuICBpZiAocGF0aEV4aXN0c1N5bmMocGtnUGF0aCkpIHtcbiAgICByZXR1cm4gZnNlLnJlYWRKU09OU3luYyhwa2dQYXRoKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRQcm9qZWN0UGF0aChjd2QsIGZ1bGxOYW1lKSB7XG4gIGNvbnN0IHByb2plY3ROYW1lID0gZnVsbE5hbWUuc3BsaXQoXCIvXCIpWzFdO1xuICByZXR1cm4gcGF0aC5yZXNvbHZlKGN3ZCwgcHJvamVjdE5hbWUpO1xufVxuXG5mdW5jdGlvbiBjbGVhckNhY2hlKCkge1xuICBjb25zdCBwbGFyZm9ybSA9IGNyZWF0ZVBsYXRmb3JtUGF0aCgpO1xuICBjb25zdCB0b2tlbiA9IGNyZWF0ZVRva2VuUGF0aCgpO1xuICBjb25zdCBvd24gPSBjcmVhdGVPd25QYXRoKCk7XG4gIGNvbnN0IGxvZ2luID0gY3JlYXRlTG9naW5QYXRoKCk7XG4gIGZzZS5yZW1vdmVTeW5jKHBsYXJmb3JtKTtcbiAgZnNlLnJlbW92ZVN5bmModG9rZW4pO1xuICBmc2UucmVtb3ZlU3luYyhvd24pO1xuICBmc2UucmVtb3ZlU3luYyhsb2dpbik7XG59XG5cbmV4cG9ydCB7IEdpdFNlcnZlciwgZ2V0R2l0UGxhdGZvcm0sIGNsZWFyQ2FjaGUsIGdldEdpdE93biwgZ2V0R2l0TG9naW4gfTtcbiIsImltcG9ydCBpbnF1aXJlciBmcm9tIFwiaW5xdWlyZXJcIjtcblxuZnVuY3Rpb24gbWFrZSh7XG4gIGNob2ljZXMsXG4gIGRlZmF1bHRWYWx1ZSxcbiAgbWVzc2FnZSA9IFwi6K+36YCJ5oupXCIsXG4gIHR5cGUgPSBcImxpc3RcIixcbiAgcmVxdWlyZSA9IHRydWUsXG4gIG1hc2sgPSBcIipcIixcbiAgdmFsaWRhdGUsXG4gIHBhZ2VTaXplLFxuICBsb29wLFxufSkge1xuICBjb25zdCBvcHRpb25zOmFueSA9IHtcbiAgICBuYW1lOiBcIm5hbWVcIixcbiAgICBkZWZhdWx0VmFsdWU6IGRlZmF1bHRWYWx1ZSxcbiAgICBtZXNzYWdlLFxuICAgIHR5cGUsXG4gICAgcmVxdWlyZSxcbiAgICBtYXNrLFxuICAgIHZhbGlkYXRlLFxuICAgIHBhZ2VTaXplLFxuICAgIGxvb3AsXG4gIH07XG4gIGlmICh0eXBlID09PSBcImxpc3RcIikge1xuICAgIG9wdGlvbnMuY2hvaWNlcyA9IGNob2ljZXM7XG4gIH1cbiAgcmV0dXJuIGlucXVpcmVyLnByb21wdChvcHRpb25zKS50aGVuKChhbnN3ZXIpID0+IGFuc3dlci5uYW1lKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VMaXN0KHBhcmFtcykge1xuICByZXR1cm4gbWFrZSh7IC4uLnBhcmFtcyB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VJbnB1dChwYXJhbXMpIHtcbiAgcmV0dXJuIG1ha2Uoe1xuICAgIHR5cGU6IFwiaW5wdXRcIixcbiAgICAuLi5wYXJhbXMsXG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWFrZVBhc3N3b3JkKHBhcmFtcykge1xuICByZXR1cm4gbWFrZSh7XG4gICAgdHlwZTogXCJwYXNzd29yZFwiLFxuICAgIC4uLnBhcmFtcyxcbiAgfSk7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc0RlYnVnKCkge1xuICByZXR1cm4gcHJvY2Vzcy5hcmd2LmluY2x1ZGVzKFwiLS1kZWJ1Z1wiKSB8fCBwcm9jZXNzLmFyZ3YuaW5jbHVkZXMoXCItZFwiKTtcbn1cbiIsImltcG9ydCAgbG9nICBmcm9tIFwibnBtbG9nXCI7XG5pbXBvcnQgaXNEZWJ1ZyBmcm9tIFwiLi9pc0RlYnVnXCI7XG5cbmlmIChpc0RlYnVnKCkpIHtcbiAgbG9nLmxldmVsID0gXCJ2ZXJib3NlXCI7XG59IGVsc2Uge1xuICBsb2cubGV2ZWwgPSBcImluZm9cIjtcbn1cbmxvZy5oZWFkaW5nID0gXCJ0c2hlZXBcIjtcbmxvZy5hZGRMZXZlbChcInN1Y2Nlc3NcIiwgMjAwMCwgeyBmZzogXCJncmVlblwiLCBib2xkOiB0cnVlIH0pO1xuZXhwb3J0IGRlZmF1bHQgbG9nO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXhlY2FcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZnMtZXh0cmFcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaW5xdWlyZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibnBtbG9nXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInBhdGgtZXhpc3RzXCIpOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgeyBHaXRTZXJ2ZXIgfSBmcm9tIFwiLi9HaXRTZXJ2ZXJcIjtcbmltcG9ydCBsb2cgZnJvbSBcIi4uL2xvZ1wiO1xuXG5jb25zdCBCQVNFX1VSTCA9IFwiaHR0cHM6Ly9naXRlZS5jb20vYXBpL3Y1XCI7XG5cbmNsYXNzIEdpdGh1YiBleHRlbmRzIEdpdFNlcnZlciB7XG4gIHNlcnZpY2U6IGFueTtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnNlcnZpY2UgPSBheGlvcy5jcmVhdGUoe1xuICAgICAgYmFzZVVSTDogQkFTRV9VUkwsXG4gICAgICB0aW1lb3V0OiA1MDAwLFxuICAgIH0pO1xuICAgIHRoaXMuc2VydmljZS5pbnRlcmNlcHRvcnMucmVzcG9uc2UudXNlKFxuICAgICAgKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xuICAgICAgfSxcbiAgICAgIChlcnJvcikgPT4ge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IpO1xuICAgICAgfVxuICAgICk7XG4gIH1cbiAgZ2V0KHVybCwgcGFyYW1zLCBoZWFkZXJzKSB7XG4gICAgcmV0dXJuIHRoaXMuc2VydmljZSh7XG4gICAgICB1cmwsXG4gICAgICBwYXJhbXM6IHtcbiAgICAgICAgLi4ucGFyYW1zLFxuICAgICAgICBhY2Nlc3NfdG9rZW46IHRoaXMudG9rZW4sXG4gICAgICB9LFxuICAgICAgbWV0aG9kOiBcImdldFwiLFxuICAgICAgaGVhZGVycyxcbiAgICB9KTtcbiAgfVxuICBwb3N0KHVybCwgZGF0YSwgaGVhZGVycykge1xuICAgIHJldHVybiB0aGlzLnNlcnZpY2Uoe1xuICAgICAgdXJsLFxuICAgICAgZGF0YSxcbiAgICAgIHBhcmFtczoge1xuICAgICAgICBhY2Nlc3NfdG9rZW46IHRoaXMudG9rZW4sXG4gICAgICB9LFxuICAgICAgbWV0aG9kOiBcInBvc3RcIixcbiAgICAgIGhlYWRlcnMsXG4gICAgfSk7XG4gIH1cblxuICBzZWFyY2hSZXBvc2l0b3JpZXMocGFyYW1zKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KFwiL3NlYXJjaC9yZXBvc2l0b3JpZXNcIiwgcGFyYW1zLG51bGwpO1xuICB9XG5cbiAgZ2V0VGFncyhmdWxsTmFtZSkge1xuICAgIHJldHVybiB0aGlzLmdldChgL3JlcG9zLyR7ZnVsbE5hbWV9L3RhZ3NgLG51bGwsbnVsbCk7XG4gIH1cblxuICBnZXRSZXBvVXJsKGZ1bGxOYW1lKSB7XG4gICAgcmV0dXJuIGBodHRwczovL2dpdGVlLmNvbS8ke2Z1bGxOYW1lfS5naXRgO1xuICB9XG5cbiAgZ2V0VXNlcigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXQoXCIvdXNlclwiLG51bGwsbnVsbCk7XG4gIH1cblxuICBnZXRPcmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KFwiL3VzZXIvb3Jnc1wiLG51bGwsbnVsbCk7XG4gIH1cblxuICBnZXRSZXBvKG93bmVyLCByZXBvKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KGAvcmVwb3MvJHtvd25lcn0vJHtyZXBvfWAsbnVsbCxudWxsKS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9KTtcbiAgfVxuXG4gIGFzeW5jIGNyZWF0ZVJlcG8obmFtZSkge1xuICAgIGNvbnN0IHJlcG8gPSBhd2FpdCB0aGlzLmdldFJlcG8odGhpcy5sb2dpbiwgbmFtZSk7XG4gICAgaWYgKCFyZXBvKSB7XG4gICAgICBsb2cuaW5mbyhcIuS7k+W6k+S4jeWtmOWcqO+8jOW8gOWni+WIm+W7ulwiKTtcbiAgICAgIGlmICh0aGlzLm93biA9PT0gXCJ1c2VyXCIpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucG9zdChcIi91c2VyL3JlcG9zXCIsIHsgbmFtZSB9LG51bGwpO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLm93biA9PT0gXCJvcmdcIikge1xuICAgICAgICBjb25zdCB1cmwgPSBcIm9yZ3MvXCIgKyB0aGlzLmxvZ2luICsgXCIvcmVwb3NcIjtcbiAgICAgICAgcmV0dXJuIHRoaXMucG9zdCh1cmwsIHsgbmFtZSB9LG51bGwpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBsb2cuaW5mbyhcIuS7k+W6k+WtmOWcqO+8jOebtOaOpei/lOWbnlwiKTtcbiAgICAgIHJldHVybiByZXBvO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBHaXRodWI7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=