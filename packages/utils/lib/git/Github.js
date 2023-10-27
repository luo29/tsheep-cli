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
/*!*************************************!*\
  !*** ./src/utils/lib/git/Github.ts ***!
  \*************************************/
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

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YWNrOi8vcm9vdC8uL3NyYy91dGlscy9saWIvZ2l0L0dpdFNlcnZlci50cyIsIndlYnBhY2s6Ly9yb290Ly4vc3JjL3V0aWxzL2xpYi9pbnF1aXJlci50cyIsIndlYnBhY2s6Ly9yb290Ly4vc3JjL3V0aWxzL2xpYi9pc0RlYnVnLnRzIiwid2VicGFjazovL3Jvb3QvLi9zcmMvdXRpbHMvbGliL2xvZy50cyIsIndlYnBhY2s6Ly9yb290L2V4dGVybmFsIGNvbW1vbmpzIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly9yb290L2V4dGVybmFsIGNvbW1vbmpzIFwiZXhlY2FcIiIsIndlYnBhY2s6Ly9yb290L2V4dGVybmFsIGNvbW1vbmpzIFwiZnMtZXh0cmFcIiIsIndlYnBhY2s6Ly9yb290L2V4dGVybmFsIGNvbW1vbmpzIFwiaW5xdWlyZXJcIiIsIndlYnBhY2s6Ly9yb290L2V4dGVybmFsIGNvbW1vbmpzIFwibnBtbG9nXCIiLCJ3ZWJwYWNrOi8vcm9vdC9leHRlcm5hbCBjb21tb25qcyBcInBhdGgtZXhpc3RzXCIiLCJ3ZWJwYWNrOi8vcm9vdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yb290L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jvb3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jvb3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yb290L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcm9vdC8uL3NyYy91dGlscy9saWIvZ2l0L0dpdGh1Yi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcGF0aCBmcm9tIFwibm9kZTpwYXRoXCI7XG5pbXBvcnQgZnMgZnJvbSBcIm5vZGU6ZnNcIjtcbmltcG9ydCB7IGhvbWVkaXIsIHBsYXRmb3JtIH0gZnJvbSBcIm5vZGU6b3NcIjtcbmltcG9ydCB7IHBhdGhFeGlzdHNTeW5jIH0gZnJvbSBcInBhdGgtZXhpc3RzXCI7XG5pbXBvcnQgeyBleGVjYSB9IGZyb20gXCJleGVjYVwiO1xuaW1wb3J0IGZzZSBmcm9tIFwiZnMtZXh0cmFcIjtcbmltcG9ydCB7IG1ha2VQYXNzd29yZCB9IGZyb20gXCIuLi9pbnF1aXJlclwiO1xuaW1wb3J0IGxvZyBmcm9tIFwiLi4vbG9nXCI7XG5cbmNvbnN0IFRFTVBfSE9NRSA9IFwiLnRzaGVlcC1jbGlcIjtcbmNvbnN0IFRFTVBfVE9LRU4gPSBcIi5naXRfdG9rZW5cIjtcbmNvbnN0IFRFTVBfUExBVEZPUk0gPSBcIi5naXRfcGxhdGZvcm1cIjtcbmNvbnN0IFRFTVBfT1dOID0gXCIuZ2l0X293blwiO1xuY29uc3QgVEVNUF9MT0dJTiA9IFwiLmdpdF9sb2dpblwiO1xuXG5mdW5jdGlvbiBjcmVhdGVUb2tlblBhdGgoKSB7XG4gIHJldHVybiBwYXRoLnJlc29sdmUoaG9tZWRpcigpLCBURU1QX0hPTUUsIFRFTVBfVE9LRU4pO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVQbGF0Zm9ybVBhdGgoKSB7XG4gIHJldHVybiBwYXRoLnJlc29sdmUoaG9tZWRpcigpLCBURU1QX0hPTUUsIFRFTVBfUExBVEZPUk0pO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVPd25QYXRoKCkge1xuICByZXR1cm4gcGF0aC5yZXNvbHZlKGhvbWVkaXIoKSwgVEVNUF9IT01FLCBURU1QX09XTik7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUxvZ2luUGF0aCgpIHtcbiAgcmV0dXJuIHBhdGgucmVzb2x2ZShob21lZGlyKCksIFRFTVBfSE9NRSwgVEVNUF9MT0dJTik7XG59XG5cbmZ1bmN0aW9uIGdldEdpdFBsYXRmb3JtKCkge1xuICBpZiAocGF0aEV4aXN0c1N5bmMoY3JlYXRlUGxhdGZvcm1QYXRoKCkpKSB7XG4gICAgcmV0dXJuIGZzLnJlYWRGaWxlU3luYyhjcmVhdGVQbGF0Zm9ybVBhdGgoKSkudG9TdHJpbmcoKTtcbiAgfVxuICByZXR1cm4gbnVsbDtcbn1cblxuZnVuY3Rpb24gZ2V0R2l0T3duKCkge1xuICBpZiAocGF0aEV4aXN0c1N5bmMoY3JlYXRlT3duUGF0aCgpKSkge1xuICAgIHJldHVybiBmcy5yZWFkRmlsZVN5bmMoY3JlYXRlT3duUGF0aCgpKS50b1N0cmluZygpO1xuICB9XG4gIHJldHVybiBudWxsO1xufVxuXG5mdW5jdGlvbiBnZXRHaXRMb2dpbigpIHtcbiAgaWYgKHBhdGhFeGlzdHNTeW5jKGNyZWF0ZUxvZ2luUGF0aCgpKSkge1xuICAgIHJldHVybiBmcy5yZWFkRmlsZVN5bmMoY3JlYXRlTG9naW5QYXRoKCkpLnRvU3RyaW5nKCk7XG4gIH1cbiAgcmV0dXJuIG51bGw7XG59XG5cbmNsYXNzIEdpdFNlcnZlciB7XG4gIHRva2VuOiBhbnk7XG4gIHBsYXRmb3JtOiBhbnk7XG4gIG93bjogYW55O1xuICBsb2dpbjogYW55O1xuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgYXN5bmMgaW5pdCgpIHtcbiAgICAvLyDliKTmlq10b2tlbuaYr+WQpuW9leWFpVxuICAgIGNvbnN0IHRva2VuUGF0aCA9IGNyZWF0ZVRva2VuUGF0aCgpO1xuICAgIGNvbnNvbGUubG9nKHRva2VuUGF0aCk7XG4gICAgaWYgKHBhdGhFeGlzdHNTeW5jKHRva2VuUGF0aCkpIHtcbiAgICAgIHRoaXMudG9rZW4gPSBmc2UucmVhZEZpbGVTeW5jKHRva2VuUGF0aCkudG9TdHJpbmcoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy50b2tlbiA9IGF3YWl0IHRoaXMuZ2V0VG9rZW4oKTtcbiAgICAgIGZzLndyaXRlRmlsZVN5bmModG9rZW5QYXRoLCB0aGlzLnRva2VuKTtcbiAgICB9XG4gICAgbG9nLnZlcmJvc2UoXCJ0b2tlblwiLCB0aGlzLnRva2VuKTtcbiAgfVxuICBnZXRUb2tlbigpIHtcbiAgICByZXR1cm4gbWFrZVBhc3N3b3JkKHtcbiAgICAgIG1lc3NhZ2U6IFwi6K+36L6T5YWldG9rZW7kv6Hmga86XCIsXG4gICAgfSk7XG4gIH1cblxuICBzYXZlUGxhdGZvcm0ocGxhdGZvcm0pIHtcbiAgICB0aGlzLnBsYXRmb3JtID0gcGxhdGZvcm07XG4gICAgZnMud3JpdGVGaWxlU3luYyhjcmVhdGVQbGF0Zm9ybVBhdGgoKSwgcGxhdGZvcm0pO1xuICB9XG5cbiAgc2F2ZU93bihvd24pIHtcbiAgICB0aGlzLm93biA9IG93bjtcbiAgICBmcy53cml0ZUZpbGVTeW5jKGNyZWF0ZU93blBhdGgoKSwgb3duKTtcbiAgfVxuXG4gIHNhdmVMb2dpbihsb2dpbikge1xuICAgIHRoaXMubG9naW4gPSBsb2dpbjtcbiAgICBmcy53cml0ZUZpbGVTeW5jKGNyZWF0ZUxvZ2luUGF0aCgpLCBsb2dpbik7XG4gIH1cblxuICBnZXRQbGF0Zm9ybSgpIHtcbiAgICByZXR1cm4gdGhpcy5wbGF0Zm9ybTtcbiAgfVxuXG4gIGdldE93bigpIHtcbiAgICByZXR1cm4gdGhpcy5vd247XG4gIH1cblxuICBnZXRMb2dpbigpIHtcbiAgICByZXR1cm4gdGhpcy5sb2dpbjtcbiAgfVxuXG4gIGNsb25lUmVwbyhmdWxsTmFtZSwgdGFnKSB7XG4gICAgaWYgKHRhZykge1xuICAgICAgcmV0dXJuIGV4ZWNhKFwiZ2l0XCIsIFtcImNsb25lXCIsIHRoaXMuZ2V0UmVwb1VybChmdWxsTmFtZSksIFwiLWJcIiwgdGFnXSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBleGVjYShcImdpdFwiLCBbXCJjbG9uZVwiLCB0aGlzLmdldFJlcG9VcmwoZnVsbE5hbWUpXSk7XG4gICAgfVxuICB9XG4gIGdldFJlcG9VcmwoZnVsbE5hbWU6IGFueSk6IHN0cmluZyB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XG4gIH1cblxuICBpbnN0YWxsRGVwZW5kZW5jaWVzKGN3ZCwgZnVsbE5hbWUpIHtcbiAgICBjb25zdCBwcm9qZWN0UGF0aCA9IGdldFByb2plY3RQYXRoKGN3ZCwgZnVsbE5hbWUpO1xuICAgIGlmIChwYXRoRXhpc3RzU3luYyhwcm9qZWN0UGF0aCkpIHtcbiAgICAgIHJldHVybiBleGVjYShcIm5wbVwiLCBbXCJpbnN0YWxsXCJdLCB7IGN3ZDogcHJvamVjdFBhdGggfSk7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgYXN5bmMgcnVuUmVwbyhjd2QsIGZ1bGxOYW1lKSB7XG4gICAgY29uc3QgcHJvamVjdFBhdGggPSBnZXRQcm9qZWN0UGF0aChjd2QsIGZ1bGxOYW1lKTtcbiAgICBjb25zdCBwa2cgPSBnZXRQYWNrYWdlSnNvbihjd2QsIGZ1bGxOYW1lKTtcbiAgICBpZiAocGtnKSB7XG4gICAgICBjb25zdCB7IHNjcmlwdHMsIGJpbiwgbmFtZSB9ID0gcGtnO1xuICAgICAgaWYgKGJpbikge1xuICAgICAgICBhd2FpdCBleGVjYShcIm5wbVwiLCBbXCJpbnN0YWxsXCIsIFwiLWdcIiwgbmFtZV0sIHtcbiAgICAgICAgICBjd2Q6IHByb2plY3RQYXRoLFxuICAgICAgICAgIHN0ZG91dDogXCJpbmhlcml0XCIsXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgaWYgKHNjcmlwdHMgJiYgc2NyaXB0cy5kZXYpIHtcbiAgICAgICAgcmV0dXJuIGV4ZWNhKFwibnBtXCIsIFtcInJ1blwiLCBcImRldlwiXSwge1xuICAgICAgICAgIGN3ZDogcHJvamVjdFBhdGgsXG4gICAgICAgICAgc3Rkb3V0OiBcImluaGVyaXRcIixcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2UgaWYgKHNjcmlwdHMgJiYgc2NyaXB0cy5zdGFydCkge1xuICAgICAgICByZXR1cm4gZXhlY2EoXCJucG1cIiwgW1wic3RhcnRcIl0sIHsgY3dkOiBwcm9qZWN0UGF0aCwgc3Rkb3V0OiBcImluaGVyaXRcIiB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxvZy53YXJuKFwi5pyq5om+5Yiw5ZCv5Yqo5ZG95Luk77yBXCIpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGdldFVzZXIoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiZ2V0VXNlciBtdXN0IGJlIGltcGxlbWVudGVkIVwiKTtcbiAgfVxuXG4gIGdldE9yZygpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJnZXRPcmcgbXVzdCBiZSBpbXBsZW1lbnRlZCFcIik7XG4gIH1cblxuICAvLyBjcmVhdGVSZXBvKCkge1xuICAvLyAgIHRocm93IG5ldyBFcnJvcihcImNyZWF0ZVJlcG8gbXVzdCBiZSBpbXBsZW1lbnRlZCFcIik7XG4gIC8vIH1cbiAgLy8gY3JlYXRlQ3VzdG9tUmVwbygpIHtcbiAgLy8gICB0aHJvdyBuZXcgRXJyb3IoXCJjcmVhdGVDdXN0b21SZXBvIG11c3QgYmUgaW1wbGVtZW50ZWQhXCIpO1xuICAvLyB9XG59XG5cbmZ1bmN0aW9uIGdldFBhY2thZ2VKc29uKGN3ZCwgZnVsbE5hbWUpIHtcbiAgY29uc3QgcHJvamVjdFBhdGggPSBnZXRQcm9qZWN0UGF0aChjd2QsIGZ1bGxOYW1lKTtcbiAgY29uc3QgcGtnUGF0aCA9IHBhdGgucmVzb2x2ZShwcm9qZWN0UGF0aCwgXCJwYWNrYWdlLmpzb25cIik7XG4gIGlmIChwYXRoRXhpc3RzU3luYyhwa2dQYXRoKSkge1xuICAgIHJldHVybiBmc2UucmVhZEpTT05TeW5jKHBrZ1BhdGgpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldFByb2plY3RQYXRoKGN3ZCwgZnVsbE5hbWUpIHtcbiAgY29uc3QgcHJvamVjdE5hbWUgPSBmdWxsTmFtZS5zcGxpdChcIi9cIilbMV07XG4gIHJldHVybiBwYXRoLnJlc29sdmUoY3dkLCBwcm9qZWN0TmFtZSk7XG59XG5cbmZ1bmN0aW9uIGNsZWFyQ2FjaGUoKSB7XG4gIGNvbnN0IHBsYXJmb3JtID0gY3JlYXRlUGxhdGZvcm1QYXRoKCk7XG4gIGNvbnN0IHRva2VuID0gY3JlYXRlVG9rZW5QYXRoKCk7XG4gIGNvbnN0IG93biA9IGNyZWF0ZU93blBhdGgoKTtcbiAgY29uc3QgbG9naW4gPSBjcmVhdGVMb2dpblBhdGgoKTtcbiAgZnNlLnJlbW92ZVN5bmMocGxhcmZvcm0pO1xuICBmc2UucmVtb3ZlU3luYyh0b2tlbik7XG4gIGZzZS5yZW1vdmVTeW5jKG93bik7XG4gIGZzZS5yZW1vdmVTeW5jKGxvZ2luKTtcbn1cblxuZXhwb3J0IHsgR2l0U2VydmVyLCBnZXRHaXRQbGF0Zm9ybSwgY2xlYXJDYWNoZSwgZ2V0R2l0T3duLCBnZXRHaXRMb2dpbiB9O1xuIiwiaW1wb3J0IGlucXVpcmVyIGZyb20gXCJpbnF1aXJlclwiO1xuXG5mdW5jdGlvbiBtYWtlKHtcbiAgY2hvaWNlcyxcbiAgZGVmYXVsdFZhbHVlLFxuICBtZXNzYWdlID0gXCLor7fpgInmi6lcIixcbiAgdHlwZSA9IFwibGlzdFwiLFxuICByZXF1aXJlID0gdHJ1ZSxcbiAgbWFzayA9IFwiKlwiLFxuICB2YWxpZGF0ZSxcbiAgcGFnZVNpemUsXG4gIGxvb3AsXG59KSB7XG4gIGNvbnN0IG9wdGlvbnM6YW55ID0ge1xuICAgIG5hbWU6IFwibmFtZVwiLFxuICAgIGRlZmF1bHRWYWx1ZTogZGVmYXVsdFZhbHVlLFxuICAgIG1lc3NhZ2UsXG4gICAgdHlwZSxcbiAgICByZXF1aXJlLFxuICAgIG1hc2ssXG4gICAgdmFsaWRhdGUsXG4gICAgcGFnZVNpemUsXG4gICAgbG9vcCxcbiAgfTtcbiAgaWYgKHR5cGUgPT09IFwibGlzdFwiKSB7XG4gICAgb3B0aW9ucy5jaG9pY2VzID0gY2hvaWNlcztcbiAgfVxuICByZXR1cm4gaW5xdWlyZXIucHJvbXB0KG9wdGlvbnMpLnRoZW4oKGFuc3dlcikgPT4gYW5zd2VyLm5hbWUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWFrZUxpc3QocGFyYW1zKSB7XG4gIHJldHVybiBtYWtlKHsgLi4ucGFyYW1zIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWFrZUlucHV0KHBhcmFtcykge1xuICByZXR1cm4gbWFrZSh7XG4gICAgdHlwZTogXCJpbnB1dFwiLFxuICAgIC4uLnBhcmFtcyxcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtYWtlUGFzc3dvcmQocGFyYW1zKSB7XG4gIHJldHVybiBtYWtlKHtcbiAgICB0eXBlOiBcInBhc3N3b3JkXCIsXG4gICAgLi4ucGFyYW1zLFxuICB9KTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzRGVidWcoKSB7XG4gIHJldHVybiBwcm9jZXNzLmFyZ3YuaW5jbHVkZXMoXCItLWRlYnVnXCIpIHx8IHByb2Nlc3MuYXJndi5pbmNsdWRlcyhcIi1kXCIpO1xufVxuIiwiaW1wb3J0ICBsb2cgIGZyb20gXCJucG1sb2dcIjtcbmltcG9ydCBpc0RlYnVnIGZyb20gXCIuL2lzRGVidWdcIjtcblxuaWYgKGlzRGVidWcoKSkge1xuICBsb2cubGV2ZWwgPSBcInZlcmJvc2VcIjtcbn0gZWxzZSB7XG4gIGxvZy5sZXZlbCA9IFwiaW5mb1wiO1xufVxubG9nLmhlYWRpbmcgPSBcInRzaGVlcFwiO1xubG9nLmFkZExldmVsKFwic3VjY2Vzc1wiLCAyMDAwLCB7IGZnOiBcImdyZWVuXCIsIGJvbGQ6IHRydWUgfSk7XG5leHBvcnQgZGVmYXVsdCBsb2c7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJleGVjYVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmcy1leHRyYVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJpbnF1aXJlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJucG1sb2dcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGF0aC1leGlzdHNcIik7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB7IEdpdFNlcnZlciB9IGZyb20gXCIuL0dpdFNlcnZlclwiO1xuaW1wb3J0IGxvZyBmcm9tIFwiLi4vbG9nXCI7XG5cbmNvbnN0IEJBU0VfVVJMID0gXCJodHRwczovL2FwaS5naXRodWIuY29tXCI7XG5cbmNsYXNzIEdpdGh1YiBleHRlbmRzIEdpdFNlcnZlciB7XG4gIHNlcnZpY2U6IGFueTtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnNlcnZpY2UgPSBheGlvcy5jcmVhdGUoe1xuICAgICAgYmFzZVVSTDogQkFTRV9VUkwsXG4gICAgICB0aW1lb3V0OiA1MDAwLFxuICAgIH0pO1xuICAgIHRoaXMuc2VydmljZS5pbnRlcmNlcHRvcnMucmVxdWVzdC51c2UoXG4gICAgICAoY29uZmlnKSA9PiB7XG4gICAgICAgIGNvbmZpZy5oZWFkZXJzW1wiQXV0aG9yaXphdGlvblwiXSA9IGBCZWFyZXIgJHt0aGlzLnRva2VufWA7XG4gICAgICAgIGNvbmZpZy5oZWFkZXJzW1wiQWNjZXB0XCJdID0gXCIgYXBwbGljYXRpb24vdm5kLmdpdGh1Yitqc29uXCI7XG4gICAgICAgIGNvbmZpZy5oZWFkZXJzW1wiWC1HaXRIdWItQXBpLVZlcnNpb25cIl0gPSBcIjIwMjItMTEtMjhcIjtcbiAgICAgICAgcmV0dXJuIGNvbmZpZztcbiAgICAgIH0sXG4gICAgICAoZXJyb3IpID0+IHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yKTtcbiAgICAgIH1cbiAgICApO1xuICAgIHRoaXMuc2VydmljZS5pbnRlcmNlcHRvcnMucmVzcG9uc2UudXNlKFxuICAgICAgKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xuICAgICAgfSxcbiAgICAgIChlcnJvcikgPT4ge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IpO1xuICAgICAgfVxuICAgICk7XG4gIH1cbiAgZ2V0KHVybCwgcGFyYW1zLCBoZWFkZXJzKSB7XG4gICAgcmV0dXJuIHRoaXMuc2VydmljZSh7XG4gICAgICB1cmwsXG4gICAgICBwYXJhbXMsXG4gICAgICBtZXRob2Q6IFwiZ2V0XCIsXG4gICAgICBoZWFkZXJzLFxuICAgIH0pO1xuICB9XG4gIHBvc3QodXJsLCBkYXRhLCBoZWFkZXJzKSB7XG4gICAgcmV0dXJuIHRoaXMuc2VydmljZSh7XG4gICAgICB1cmwsXG4gICAgICBkYXRhLFxuICAgICAgcGFyYW1zOiB7XG4gICAgICAgIGFjY2Vzc190b2tlbjogdGhpcy50b2tlbixcbiAgICAgIH0sXG4gICAgICBtZXRob2Q6IFwicG9zdFwiLFxuICAgICAgaGVhZGVycyxcbiAgICB9KTtcbiAgfVxuXG4gIHNlYXJjaFJlcG9zaXRvcmllcyhwYXJhbXMpIHtcbiAgICByZXR1cm4gdGhpcy5nZXQoXCIvc2VhcmNoL3JlcG9zaXRvcmllc1wiLCBwYXJhbXMsbnVsbCk7XG4gIH1cblxuICBzZWFyY2hDb2RlKHBhcmFtcykge1xuICAgIHJldHVybiB0aGlzLmdldChcIi9zZWFyY2gvY29kZVwiLCBwYXJhbXMsbnVsbCk7XG4gIH1cblxuICBnZXRUYWdzKGZ1bGxOYW1lLCBwYXJhbXMpIHtcbiAgICByZXR1cm4gdGhpcy5nZXQoYC9yZXBvcy8ke2Z1bGxOYW1lfS90YWdzYCwgcGFyYW1zLG51bGwpO1xuICB9XG5cbiAgZ2V0UmVwb1VybChmdWxsTmFtZSkge1xuICAgIHJldHVybiBgaHR0cHM6Ly9naXRodWIuY29tLyR7ZnVsbE5hbWV9LmdpdGA7XG4gIH1cblxuICBnZXRVc2VyKCkge1xuICAgIHJldHVybiB0aGlzLmdldChcIi91c2VyXCIsbnVsbCxudWxsKTtcbiAgfVxuXG4gIGdldE9yZygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXQoXCIvdXNlci9vcmdzXCIsbnVsbCxudWxsKTtcbiAgfVxuXG4gIGdldFJlcG8ob3duZXIsIHJlcG8pIHtcbiAgICByZXR1cm4gdGhpcy5nZXQoYC9yZXBvcy8ke293bmVyfS8ke3JlcG99YCwge1xuICAgICAgYWNjZXB0OiBcImFwcGxpY2F0aW9uL3ZuZC5naXRodWIranNvblwiLFxuICAgIH0sbnVsbCkuY2F0Y2goKGVycikgPT4ge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfSk7XG4gIH1cblxuICBhc3luYyBjcmVhdGVSZXBvKG5hbWUpIHtcbiAgICBjb25zdCByZXBvID0gYXdhaXQgdGhpcy5nZXRSZXBvKHRoaXMubG9naW4sIG5hbWUpO1xuICAgIGlmICghcmVwbykge1xuICAgICAgbG9nLmluZm8oXCLku5PlupPkuI3lrZjlnKjvvIzlvIDlp4vliJvlu7pcIik7XG4gICAgICBpZiAodGhpcy5vd24gPT09IFwidXNlclwiKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnBvc3QoXG4gICAgICAgICAgXCIvdXNlci9yZXBvc1wiLFxuICAgICAgICAgIHsgbmFtZSB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGFjY2VwdDogXCJhcHBsaWNhdGlvbi92bmQuZ2l0aHViK2pzb25cIixcbiAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMub3duID09PSBcIm9yZ1wiKSB7XG4gICAgICAgIGNvbnN0IHVybCA9IFwib3Jncy9cIiArIHRoaXMubG9naW4gKyBcIi9yZXBvc1wiO1xuICAgICAgICByZXR1cm4gdGhpcy5wb3N0KFxuICAgICAgICAgIHVybCxcbiAgICAgICAgICB7IG5hbWUgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBhY2NlcHQ6IFwiYXBwbGljYXRpb24vdm5kLmdpdGh1Yitqc29uXCIsXG4gICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBsb2cuaW5mbyhcIuS7k+W6k+WtmOWcqO+8jOebtOaOpei/lOWbnlwiKTtcbiAgICAgIHJldHVybiByZXBvO1xuICAgIH1cbiAgfVxuICBhc3luYyBjcmVhdGVDdXN0b21SZXBvKG5hbWUpe1xuICAgIGNvbnNvbGUubG9nKG5hbWUsXCIyMTJcIik7XG4gICAgY29uc3QgcmVwbyA9IGF3YWl0IHRoaXMuZ2V0UmVwbyh0aGlzLmxvZ2luLCBuYW1lKTtcbiAgICBpZighcmVwbyl7XG4gICAgICBsb2cuaW5mbyhcIuS7k+W6k+S4jeWtmOWcqO+8jOW8gOWni+WIm+W7ulwiKTtcbiAgICAgIGNvbnNvbGUubG9nKHJlcG8pO1xuICAgICAgcmV0dXJuIHRoaXMucG9zdChcbiAgICAgICAgXCIvdXNlci9yZXBvc1wiLFxuICAgICAgICB7IG5hbWUgfSxcbiAgICAgICAge1xuICAgICAgICAgIGFjY2VwdDogXCJhcHBsaWNhdGlvbi92bmQuZ2l0aHViK2pzb25cIixcbiAgICAgICAgfVxuICAgICAgKTtcbiAgICB9ZWxzZSB7XG4gICAgICBsb2cuaW5mbyhcIuS7k+W6k+WtmOWcqO+8jOebtOaOpei/lOWbnlwiKTtcbiAgICAgIHJldHVybiByZXBvO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBHaXRodWI7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=