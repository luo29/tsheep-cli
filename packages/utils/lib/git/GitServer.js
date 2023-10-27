/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

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
/*!****************************************!*\
  !*** ./src/utils/lib/git/GitServer.ts ***!
  \****************************************/
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


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMzQixPQUFPLDREQUFnQixDQUFDLE9BQU8sQ0FBQyxDQUFDO0tBQ2xDO0FBQ0gsQ0FBQztBQUVELFNBQVMsY0FBYyxDQUFDLEdBQUcsRUFBRSxRQUFRO0lBQ25DLE1BQU0sV0FBVyxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDM0MsT0FBTyx3REFBWSxDQUFDLEdBQUcsRUFBRSxXQUFXLENBQUMsQ0FBQztBQUN4QyxDQUFDO0FBRUQsU0FBUyxVQUFVO0lBQ2pCLE1BQU0sUUFBUSxHQUFHLGtCQUFrQixFQUFFLENBQUM7SUFDdEMsTUFBTSxLQUFLLEdBQUcsZUFBZSxFQUFFLENBQUM7SUFDaEMsTUFBTSxHQUFHLEdBQUcsYUFBYSxFQUFFLENBQUM7SUFDNUIsTUFBTSxLQUFLLEdBQUcsZUFBZSxFQUFFLENBQUM7SUFDaEMsMERBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUN6QiwwREFBYyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3RCLDBEQUFjLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDcEIsMERBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUN4QixDQUFDO0FBRXdFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcm9vdC8uL3NyYy91dGlscy9saWIvaW5xdWlyZXIudHMiLCJ3ZWJwYWNrOi8vcm9vdC8uL3NyYy91dGlscy9saWIvaXNEZWJ1Zy50cyIsIndlYnBhY2s6Ly9yb290Ly4vc3JjL3V0aWxzL2xpYi9sb2cudHMiLCJ3ZWJwYWNrOi8vcm9vdC9leHRlcm5hbCBjb21tb25qcyBcImV4ZWNhXCIiLCJ3ZWJwYWNrOi8vcm9vdC9leHRlcm5hbCBjb21tb25qcyBcImZzLWV4dHJhXCIiLCJ3ZWJwYWNrOi8vcm9vdC9leHRlcm5hbCBjb21tb25qcyBcImlucXVpcmVyXCIiLCJ3ZWJwYWNrOi8vcm9vdC9leHRlcm5hbCBjb21tb25qcyBcIm5wbWxvZ1wiIiwid2VicGFjazovL3Jvb3QvZXh0ZXJuYWwgY29tbW9uanMgXCJwYXRoLWV4aXN0c1wiIiwid2VicGFjazovL3Jvb3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcm9vdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yb290L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yb290L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcm9vdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jvb3QvLi9zcmMvdXRpbHMvbGliL2dpdC9HaXRTZXJ2ZXIudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGlucXVpcmVyIGZyb20gXCJpbnF1aXJlclwiO1xuXG5mdW5jdGlvbiBtYWtlKHtcbiAgY2hvaWNlcyxcbiAgZGVmYXVsdFZhbHVlLFxuICBtZXNzYWdlID0gXCLor7fpgInmi6lcIixcbiAgdHlwZSA9IFwibGlzdFwiLFxuICByZXF1aXJlID0gdHJ1ZSxcbiAgbWFzayA9IFwiKlwiLFxuICB2YWxpZGF0ZSxcbiAgcGFnZVNpemUsXG4gIGxvb3AsXG59KSB7XG4gIGNvbnN0IG9wdGlvbnM6YW55ID0ge1xuICAgIG5hbWU6IFwibmFtZVwiLFxuICAgIGRlZmF1bHRWYWx1ZTogZGVmYXVsdFZhbHVlLFxuICAgIG1lc3NhZ2UsXG4gICAgdHlwZSxcbiAgICByZXF1aXJlLFxuICAgIG1hc2ssXG4gICAgdmFsaWRhdGUsXG4gICAgcGFnZVNpemUsXG4gICAgbG9vcCxcbiAgfTtcbiAgaWYgKHR5cGUgPT09IFwibGlzdFwiKSB7XG4gICAgb3B0aW9ucy5jaG9pY2VzID0gY2hvaWNlcztcbiAgfVxuICByZXR1cm4gaW5xdWlyZXIucHJvbXB0KG9wdGlvbnMpLnRoZW4oKGFuc3dlcikgPT4gYW5zd2VyLm5hbWUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWFrZUxpc3QocGFyYW1zKSB7XG4gIHJldHVybiBtYWtlKHsgLi4ucGFyYW1zIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWFrZUlucHV0KHBhcmFtcykge1xuICByZXR1cm4gbWFrZSh7XG4gICAgdHlwZTogXCJpbnB1dFwiLFxuICAgIC4uLnBhcmFtcyxcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtYWtlUGFzc3dvcmQocGFyYW1zKSB7XG4gIHJldHVybiBtYWtlKHtcbiAgICB0eXBlOiBcInBhc3N3b3JkXCIsXG4gICAgLi4ucGFyYW1zLFxuICB9KTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzRGVidWcoKSB7XG4gIHJldHVybiBwcm9jZXNzLmFyZ3YuaW5jbHVkZXMoXCItLWRlYnVnXCIpIHx8IHByb2Nlc3MuYXJndi5pbmNsdWRlcyhcIi1kXCIpO1xufVxuIiwiaW1wb3J0ICBsb2cgIGZyb20gXCJucG1sb2dcIjtcbmltcG9ydCBpc0RlYnVnIGZyb20gXCIuL2lzRGVidWdcIjtcblxuaWYgKGlzRGVidWcoKSkge1xuICBsb2cubGV2ZWwgPSBcInZlcmJvc2VcIjtcbn0gZWxzZSB7XG4gIGxvZy5sZXZlbCA9IFwiaW5mb1wiO1xufVxubG9nLmhlYWRpbmcgPSBcInRzaGVlcFwiO1xubG9nLmFkZExldmVsKFwic3VjY2Vzc1wiLCAyMDAwLCB7IGZnOiBcImdyZWVuXCIsIGJvbGQ6IHRydWUgfSk7XG5leHBvcnQgZGVmYXVsdCBsb2c7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJleGVjYVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmcy1leHRyYVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJpbnF1aXJlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJucG1sb2dcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGF0aC1leGlzdHNcIik7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBwYXRoIGZyb20gXCJub2RlOnBhdGhcIjtcbmltcG9ydCBmcyBmcm9tIFwibm9kZTpmc1wiO1xuaW1wb3J0IHsgaG9tZWRpciwgcGxhdGZvcm0gfSBmcm9tIFwibm9kZTpvc1wiO1xuaW1wb3J0IHsgcGF0aEV4aXN0c1N5bmMgfSBmcm9tIFwicGF0aC1leGlzdHNcIjtcbmltcG9ydCB7IGV4ZWNhIH0gZnJvbSBcImV4ZWNhXCI7XG5pbXBvcnQgZnNlIGZyb20gXCJmcy1leHRyYVwiO1xuaW1wb3J0IHsgbWFrZVBhc3N3b3JkIH0gZnJvbSBcIi4uL2lucXVpcmVyXCI7XG5pbXBvcnQgbG9nIGZyb20gXCIuLi9sb2dcIjtcblxuY29uc3QgVEVNUF9IT01FID0gXCIudHNoZWVwLWNsaVwiO1xuY29uc3QgVEVNUF9UT0tFTiA9IFwiLmdpdF90b2tlblwiO1xuY29uc3QgVEVNUF9QTEFURk9STSA9IFwiLmdpdF9wbGF0Zm9ybVwiO1xuY29uc3QgVEVNUF9PV04gPSBcIi5naXRfb3duXCI7XG5jb25zdCBURU1QX0xPR0lOID0gXCIuZ2l0X2xvZ2luXCI7XG5cbmZ1bmN0aW9uIGNyZWF0ZVRva2VuUGF0aCgpIHtcbiAgcmV0dXJuIHBhdGgucmVzb2x2ZShob21lZGlyKCksIFRFTVBfSE9NRSwgVEVNUF9UT0tFTik7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVBsYXRmb3JtUGF0aCgpIHtcbiAgcmV0dXJuIHBhdGgucmVzb2x2ZShob21lZGlyKCksIFRFTVBfSE9NRSwgVEVNUF9QTEFURk9STSk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU93blBhdGgoKSB7XG4gIHJldHVybiBwYXRoLnJlc29sdmUoaG9tZWRpcigpLCBURU1QX0hPTUUsIFRFTVBfT1dOKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTG9naW5QYXRoKCkge1xuICByZXR1cm4gcGF0aC5yZXNvbHZlKGhvbWVkaXIoKSwgVEVNUF9IT01FLCBURU1QX0xPR0lOKTtcbn1cblxuZnVuY3Rpb24gZ2V0R2l0UGxhdGZvcm0oKSB7XG4gIGlmIChwYXRoRXhpc3RzU3luYyhjcmVhdGVQbGF0Zm9ybVBhdGgoKSkpIHtcbiAgICByZXR1cm4gZnMucmVhZEZpbGVTeW5jKGNyZWF0ZVBsYXRmb3JtUGF0aCgpKS50b1N0cmluZygpO1xuICB9XG4gIHJldHVybiBudWxsO1xufVxuXG5mdW5jdGlvbiBnZXRHaXRPd24oKSB7XG4gIGlmIChwYXRoRXhpc3RzU3luYyhjcmVhdGVPd25QYXRoKCkpKSB7XG4gICAgcmV0dXJuIGZzLnJlYWRGaWxlU3luYyhjcmVhdGVPd25QYXRoKCkpLnRvU3RyaW5nKCk7XG4gIH1cbiAgcmV0dXJuIG51bGw7XG59XG5cbmZ1bmN0aW9uIGdldEdpdExvZ2luKCkge1xuICBpZiAocGF0aEV4aXN0c1N5bmMoY3JlYXRlTG9naW5QYXRoKCkpKSB7XG4gICAgcmV0dXJuIGZzLnJlYWRGaWxlU3luYyhjcmVhdGVMb2dpblBhdGgoKSkudG9TdHJpbmcoKTtcbiAgfVxuICByZXR1cm4gbnVsbDtcbn1cblxuY2xhc3MgR2l0U2VydmVyIHtcbiAgdG9rZW46IGFueTtcbiAgcGxhdGZvcm06IGFueTtcbiAgb3duOiBhbnk7XG4gIGxvZ2luOiBhbnk7XG4gIGNvbnN0cnVjdG9yKCkge31cblxuICBhc3luYyBpbml0KCkge1xuICAgIC8vIOWIpOaWrXRva2Vu5piv5ZCm5b2V5YWlXG4gICAgY29uc3QgdG9rZW5QYXRoID0gY3JlYXRlVG9rZW5QYXRoKCk7XG4gICAgY29uc29sZS5sb2codG9rZW5QYXRoKTtcbiAgICBpZiAocGF0aEV4aXN0c1N5bmModG9rZW5QYXRoKSkge1xuICAgICAgdGhpcy50b2tlbiA9IGZzZS5yZWFkRmlsZVN5bmModG9rZW5QYXRoKS50b1N0cmluZygpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnRva2VuID0gYXdhaXQgdGhpcy5nZXRUb2tlbigpO1xuICAgICAgZnMud3JpdGVGaWxlU3luYyh0b2tlblBhdGgsIHRoaXMudG9rZW4pO1xuICAgIH1cbiAgICBsb2cudmVyYm9zZShcInRva2VuXCIsIHRoaXMudG9rZW4pO1xuICB9XG4gIGdldFRva2VuKCkge1xuICAgIHJldHVybiBtYWtlUGFzc3dvcmQoe1xuICAgICAgbWVzc2FnZTogXCLor7fovpPlhaV0b2tlbuS/oeaBrzpcIixcbiAgICB9KTtcbiAgfVxuXG4gIHNhdmVQbGF0Zm9ybShwbGF0Zm9ybSkge1xuICAgIHRoaXMucGxhdGZvcm0gPSBwbGF0Zm9ybTtcbiAgICBmcy53cml0ZUZpbGVTeW5jKGNyZWF0ZVBsYXRmb3JtUGF0aCgpLCBwbGF0Zm9ybSk7XG4gIH1cblxuICBzYXZlT3duKG93bikge1xuICAgIHRoaXMub3duID0gb3duO1xuICAgIGZzLndyaXRlRmlsZVN5bmMoY3JlYXRlT3duUGF0aCgpLCBvd24pO1xuICB9XG5cbiAgc2F2ZUxvZ2luKGxvZ2luKSB7XG4gICAgdGhpcy5sb2dpbiA9IGxvZ2luO1xuICAgIGZzLndyaXRlRmlsZVN5bmMoY3JlYXRlTG9naW5QYXRoKCksIGxvZ2luKTtcbiAgfVxuXG4gIGdldFBsYXRmb3JtKCkge1xuICAgIHJldHVybiB0aGlzLnBsYXRmb3JtO1xuICB9XG5cbiAgZ2V0T3duKCkge1xuICAgIHJldHVybiB0aGlzLm93bjtcbiAgfVxuXG4gIGdldExvZ2luKCkge1xuICAgIHJldHVybiB0aGlzLmxvZ2luO1xuICB9XG5cbiAgY2xvbmVSZXBvKGZ1bGxOYW1lLCB0YWcpIHtcbiAgICBpZiAodGFnKSB7XG4gICAgICByZXR1cm4gZXhlY2EoXCJnaXRcIiwgW1wiY2xvbmVcIiwgdGhpcy5nZXRSZXBvVXJsKGZ1bGxOYW1lKSwgXCItYlwiLCB0YWddKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGV4ZWNhKFwiZ2l0XCIsIFtcImNsb25lXCIsIHRoaXMuZ2V0UmVwb1VybChmdWxsTmFtZSldKTtcbiAgICB9XG4gIH1cbiAgZ2V0UmVwb1VybChmdWxsTmFtZTogYW55KTogc3RyaW5nIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcbiAgfVxuXG4gIGluc3RhbGxEZXBlbmRlbmNpZXMoY3dkLCBmdWxsTmFtZSkge1xuICAgIGNvbnN0IHByb2plY3RQYXRoID0gZ2V0UHJvamVjdFBhdGgoY3dkLCBmdWxsTmFtZSk7XG4gICAgaWYgKHBhdGhFeGlzdHNTeW5jKHByb2plY3RQYXRoKSkge1xuICAgICAgcmV0dXJuIGV4ZWNhKFwibnBtXCIsIFtcImluc3RhbGxcIl0sIHsgY3dkOiBwcm9qZWN0UGF0aCB9KTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBhc3luYyBydW5SZXBvKGN3ZCwgZnVsbE5hbWUpIHtcbiAgICBjb25zdCBwcm9qZWN0UGF0aCA9IGdldFByb2plY3RQYXRoKGN3ZCwgZnVsbE5hbWUpO1xuICAgIGNvbnN0IHBrZyA9IGdldFBhY2thZ2VKc29uKGN3ZCwgZnVsbE5hbWUpO1xuICAgIGlmIChwa2cpIHtcbiAgICAgIGNvbnN0IHsgc2NyaXB0cywgYmluLCBuYW1lIH0gPSBwa2c7XG4gICAgICBpZiAoYmluKSB7XG4gICAgICAgIGF3YWl0IGV4ZWNhKFwibnBtXCIsIFtcImluc3RhbGxcIiwgXCItZ1wiLCBuYW1lXSwge1xuICAgICAgICAgIGN3ZDogcHJvamVjdFBhdGgsXG4gICAgICAgICAgc3Rkb3V0OiBcImluaGVyaXRcIixcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBpZiAoc2NyaXB0cyAmJiBzY3JpcHRzLmRldikge1xuICAgICAgICByZXR1cm4gZXhlY2EoXCJucG1cIiwgW1wicnVuXCIsIFwiZGV2XCJdLCB7XG4gICAgICAgICAgY3dkOiBwcm9qZWN0UGF0aCxcbiAgICAgICAgICBzdGRvdXQ6IFwiaW5oZXJpdFwiLFxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSBpZiAoc2NyaXB0cyAmJiBzY3JpcHRzLnN0YXJ0KSB7XG4gICAgICAgIHJldHVybiBleGVjYShcIm5wbVwiLCBbXCJzdGFydFwiXSwgeyBjd2Q6IHByb2plY3RQYXRoLCBzdGRvdXQ6IFwiaW5oZXJpdFwiIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbG9nLndhcm4oXCLmnKrmib7liLDlkK/liqjlkb3ku6TvvIFcIik7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZ2V0VXNlcigpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJnZXRVc2VyIG11c3QgYmUgaW1wbGVtZW50ZWQhXCIpO1xuICB9XG5cbiAgZ2V0T3JnKCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcImdldE9yZyBtdXN0IGJlIGltcGxlbWVudGVkIVwiKTtcbiAgfVxuXG4gIC8vIGNyZWF0ZVJlcG8oKSB7XG4gIC8vICAgdGhyb3cgbmV3IEVycm9yKFwiY3JlYXRlUmVwbyBtdXN0IGJlIGltcGxlbWVudGVkIVwiKTtcbiAgLy8gfVxuICAvLyBjcmVhdGVDdXN0b21SZXBvKCkge1xuICAvLyAgIHRocm93IG5ldyBFcnJvcihcImNyZWF0ZUN1c3RvbVJlcG8gbXVzdCBiZSBpbXBsZW1lbnRlZCFcIik7XG4gIC8vIH1cbn1cblxuZnVuY3Rpb24gZ2V0UGFja2FnZUpzb24oY3dkLCBmdWxsTmFtZSkge1xuICBjb25zdCBwcm9qZWN0UGF0aCA9IGdldFByb2plY3RQYXRoKGN3ZCwgZnVsbE5hbWUpO1xuICBjb25zdCBwa2dQYXRoID0gcGF0aC5yZXNvbHZlKHByb2plY3RQYXRoLCBcInBhY2thZ2UuanNvblwiKTtcbiAgaWYgKHBhdGhFeGlzdHNTeW5jKHBrZ1BhdGgpKSB7XG4gICAgcmV0dXJuIGZzZS5yZWFkSlNPTlN5bmMocGtnUGF0aCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0UHJvamVjdFBhdGgoY3dkLCBmdWxsTmFtZSkge1xuICBjb25zdCBwcm9qZWN0TmFtZSA9IGZ1bGxOYW1lLnNwbGl0KFwiL1wiKVsxXTtcbiAgcmV0dXJuIHBhdGgucmVzb2x2ZShjd2QsIHByb2plY3ROYW1lKTtcbn1cblxuZnVuY3Rpb24gY2xlYXJDYWNoZSgpIHtcbiAgY29uc3QgcGxhcmZvcm0gPSBjcmVhdGVQbGF0Zm9ybVBhdGgoKTtcbiAgY29uc3QgdG9rZW4gPSBjcmVhdGVUb2tlblBhdGgoKTtcbiAgY29uc3Qgb3duID0gY3JlYXRlT3duUGF0aCgpO1xuICBjb25zdCBsb2dpbiA9IGNyZWF0ZUxvZ2luUGF0aCgpO1xuICBmc2UucmVtb3ZlU3luYyhwbGFyZm9ybSk7XG4gIGZzZS5yZW1vdmVTeW5jKHRva2VuKTtcbiAgZnNlLnJlbW92ZVN5bmMob3duKTtcbiAgZnNlLnJlbW92ZVN5bmMobG9naW4pO1xufVxuXG5leHBvcnQgeyBHaXRTZXJ2ZXIsIGdldEdpdFBsYXRmb3JtLCBjbGVhckNhY2hlLCBnZXRHaXRPd24sIGdldEdpdExvZ2luIH07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=