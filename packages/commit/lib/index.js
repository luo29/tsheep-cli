/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "@tsheep.com/command":
/*!**************************************!*\
  !*** external "@tsheep.com/command" ***!
  \**************************************/
/***/ ((module) => {

module.exports = require("@tsheep.com/command");

/***/ }),

/***/ "@tsheep.com/utils":
/*!************************************!*\
  !*** external "@tsheep.com/utils" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("@tsheep.com/utils");

/***/ }),

/***/ "browserify-fs":
/*!********************************!*\
  !*** external "browserify-fs" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("browserify-fs");

/***/ }),

/***/ "fs-extra":
/*!***************************!*\
  !*** external "fs-extra" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("fs-extra");

/***/ }),

/***/ "path-browserify":
/*!**********************************!*\
  !*** external "path-browserify" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("path-browserify");

/***/ }),

/***/ "simple-git":
/*!*****************************!*\
  !*** external "simple-git" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("simple-git");

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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************************!*\
  !*** ./src/commit/lib/index.ts ***!
  \*********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var browserify_fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! browserify-fs */ "browserify-fs");
/* harmony import */ var browserify_fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(browserify_fs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var path_browserify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path-browserify */ "path-browserify");
/* harmony import */ var path_browserify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path_browserify__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var fs_extra__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! fs-extra */ "fs-extra");
/* harmony import */ var fs_extra__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(fs_extra__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var simple_git__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! simple-git */ "simple-git");
/* harmony import */ var simple_git__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(simple_git__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _tsheep_com_command__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @tsheep.com/command */ "@tsheep.com/command");
/* harmony import */ var _tsheep_com_command__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_tsheep_com_command__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _tsheep_com_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @tsheep.com/utils */ "@tsheep.com/utils");
/* harmony import */ var _tsheep_com_utils__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_tsheep_com_utils__WEBPACK_IMPORTED_MODULE_5__);
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};






const CACHE_DIR = ".tsheep-cli";
const FILE_GIT_PLATFORM = ".git_platform";
class CommitCommand extends (_tsheep_com_command__WEBPACK_IMPORTED_MODULE_4___default()) {
    get command() {
        return;
    }
    get description() {
        return;
    }
    get options() {
        return [["-c, --clear", "清空缓存", false]];
    }
    action([{ clear }]) {
        return __awaiter(this, void 0, void 0, function* () {
            if (clear) {
                (0,_tsheep_com_utils__WEBPACK_IMPORTED_MODULE_5__.clearCache)();
            }
            yield this.createRemoteRepoe();
            yield this.initLocal();
        });
    }
    createRemoteRepoe() {
        return __awaiter(this, void 0, void 0, function* () {
            this.gitAPI = yield (0,_tsheep_com_utils__WEBPACK_IMPORTED_MODULE_5__.initGitServer)();
            yield (0,_tsheep_com_utils__WEBPACK_IMPORTED_MODULE_5__.initGitType)(this.gitAPI);
            const dir = process.cwd();
            const pkg = fs_extra__WEBPACK_IMPORTED_MODULE_2___default().readJSONSync(path_browserify__WEBPACK_IMPORTED_MODULE_1___default().resolve(dir, "package.json"));
            this.name = pkg.name;
            yield (0,_tsheep_com_utils__WEBPACK_IMPORTED_MODULE_5__.createRemoteRepo)(this.gitAPI, this.name);
            const gitIgnorePath = path_browserify__WEBPACK_IMPORTED_MODULE_1___default().resolve(dir, ".gitignore");
            if (!browserify_fs__WEBPACK_IMPORTED_MODULE_0___default().existsSync(gitIgnorePath)) {
                _tsheep_com_utils__WEBPACK_IMPORTED_MODULE_5__.log.info(".gitignore 文件开始创建");
                browserify_fs__WEBPACK_IMPORTED_MODULE_0___default().writeFileSync(gitIgnorePath, "node_modules");
                _tsheep_com_utils__WEBPACK_IMPORTED_MODULE_5__.log.success(".gitignore 创建成功！");
            }
        });
    }
    initLocal() {
        return __awaiter(this, void 0, void 0, function* () {
            const remoteUrl = yield this.gitAPI.getRepoUrl(`${this.gitAPI.login}/${this.name}`);
            this.git = simple_git__WEBPACK_IMPORTED_MODULE_3___default()(process.cwd());
            const gitDir = path_browserify__WEBPACK_IMPORTED_MODULE_1___default().resolve(process.cwd(), ".git");
            if (!browserify_fs__WEBPACK_IMPORTED_MODULE_0___default().existsSync(gitDir)) {
                yield this.git.init();
                _tsheep_com_utils__WEBPACK_IMPORTED_MODULE_5__.log.success("完成git初始化");
            }
            const remotes = yield this.git.getRemotes();
            if (!remotes.find((remote) => remote.name === "origin")) {
                this.git.addRemote("origin", remoteUrl);
                _tsheep_com_utils__WEBPACK_IMPORTED_MODULE_5__.log.success("添加git remote", remoteUrl);
            }
            const status = yield this.git.status();
            yield this.git.pull("origin", "master").catch((err) => {
                _tsheep_com_utils__WEBPACK_IMPORTED_MODULE_5__.log.verbose("git pull origin master", err.message);
                if (err.message.indexOf("couldn't find remote ref master") >= 0) {
                    _tsheep_com_utils__WEBPACK_IMPORTED_MODULE_5__.log.warn("获取远程[master]分支失败！");
                }
            });
        });
    }
}
function Commit(instance) {
    return new CommitCommand(instance);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Commit);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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cyI6WyJ3ZWJwYWNrOi8vcm9vdC9leHRlcm5hbCBjb21tb25qcyBcIkB0c2hlZXAuY29tL2NvbW1hbmRcIiIsIndlYnBhY2s6Ly9yb290L2V4dGVybmFsIGNvbW1vbmpzIFwiQHRzaGVlcC5jb20vdXRpbHNcIiIsIndlYnBhY2s6Ly9yb290L2V4dGVybmFsIGNvbW1vbmpzIFwiYnJvd3NlcmlmeS1mc1wiIiwid2VicGFjazovL3Jvb3QvZXh0ZXJuYWwgY29tbW9uanMgXCJmcy1leHRyYVwiIiwid2VicGFjazovL3Jvb3QvZXh0ZXJuYWwgY29tbW9uanMgXCJwYXRoLWJyb3dzZXJpZnlcIiIsIndlYnBhY2s6Ly9yb290L2V4dGVybmFsIGNvbW1vbmpzIFwic2ltcGxlLWdpdFwiIiwid2VicGFjazovL3Jvb3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcm9vdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yb290L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yb290L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcm9vdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jvb3QvLi9zcmMvY29tbWl0L2xpYi9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAdHNoZWVwLmNvbS9jb21tYW5kXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkB0c2hlZXAuY29tL3V0aWxzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJyb3dzZXJpZnktZnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZnMtZXh0cmFcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGF0aC1icm93c2VyaWZ5XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInNpbXBsZS1naXRcIik7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBmcyBmcm9tIFwiYnJvd3NlcmlmeS1mc1wiO1xuaW1wb3J0IHBhdGggZnJvbSBcInBhdGgtYnJvd3NlcmlmeVwiO1xuaW1wb3J0IGZzZSBmcm9tIFwiZnMtZXh0cmFcIjtcbmltcG9ydCBTaW1wbGVHaXQgZnJvbSBcInNpbXBsZS1naXRcIjtcbmltcG9ydCBDb21tYW5kIGZyb20gXCJAdHNoZWVwLmNvbS9jb21tYW5kXCI7XG5pbXBvcnQge1xuICBsb2csXG4gIGluaXRHaXRTZXJ2ZXIsXG4gIGluaXRHaXRUeXBlLFxuICBjbGVhckNhY2hlLFxuICBjcmVhdGVSZW1vdGVSZXBvLFxufSBmcm9tIFwiQHRzaGVlcC5jb20vdXRpbHNcIjtcblxuY29uc3QgQ0FDSEVfRElSID0gXCIudHNoZWVwLWNsaVwiO1xuY29uc3QgRklMRV9HSVRfUExBVEZPUk0gPSBcIi5naXRfcGxhdGZvcm1cIjtcblxuY2xhc3MgQ29tbWl0Q29tbWFuZCBleHRlbmRzIENvbW1hbmQge1xuICBnaXRBUEk6IGFueTtcbiAgbmFtZTogYW55O1xuICBnaXQ6IGFueTtcbiAgZ2V0IGNvbW1hbmQoKSB7XG4gICAgcmV0dXJuIDtcbiAgfVxuICBnZXQgZGVzY3JpcHRpb24oKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGdldCBvcHRpb25zKCkge1xuICAgIHJldHVybiBbW1wiLWMsIC0tY2xlYXJcIiwgXCLmuIXnqbrnvJPlrZhcIiwgZmFsc2VdXTtcbiAgfVxuICBhc3luYyBhY3Rpb24oW3sgY2xlYXIgfV0pIHtcbiAgICBpZiAoY2xlYXIpIHtcbiAgICAgIGNsZWFyQ2FjaGUoKTtcbiAgICB9XG4gICAgYXdhaXQgdGhpcy5jcmVhdGVSZW1vdGVSZXBvZSgpO1xuICAgIGF3YWl0IHRoaXMuaW5pdExvY2FsKCk7XG4gIH1cblxuICAvLyDpmLbmrrUx77ya5Yib5bu66L+c56iL5LuT5bqTXG4gIGFzeW5jIGNyZWF0ZVJlbW90ZVJlcG9lKCkge1xuICAgIC8vIDEu5a6e5L6L5YyWR2l05a+56LGhXG4gICAgdGhpcy5naXRBUEkgPSBhd2FpdCBpbml0R2l0U2VydmVyKCk7XG4gICAgLy8gMi7ku5PlupPnsbvlnovpgInmi6lcbiAgICBhd2FpdCBpbml0R2l0VHlwZSh0aGlzLmdpdEFQSSk7XG4gICAgLy8gMy7liJvlu7rov5znqIvku5PlupNcbiAgICBjb25zdCBkaXIgPSBwcm9jZXNzLmN3ZCgpO1xuICAgIGNvbnN0IHBrZyA9IGZzZS5yZWFkSlNPTlN5bmMocGF0aC5yZXNvbHZlKGRpciwgXCJwYWNrYWdlLmpzb25cIikpO1xuICAgIHRoaXMubmFtZSA9IHBrZy5uYW1lO1xuICAgIGF3YWl0IGNyZWF0ZVJlbW90ZVJlcG8odGhpcy5naXRBUEksIHRoaXMubmFtZSk7XG4gICAgLy8gNC7nlJ/miJAuZ2l0aWdub3JlXG4gICAgY29uc3QgZ2l0SWdub3JlUGF0aCA9IHBhdGgucmVzb2x2ZShkaXIsIFwiLmdpdGlnbm9yZVwiKTtcbiAgICBpZiAoIWZzLmV4aXN0c1N5bmMoZ2l0SWdub3JlUGF0aCkpIHtcbiAgICAgIGxvZy5pbmZvKFwiLmdpdGlnbm9yZSDmlofku7blvIDlp4vliJvlu7pcIik7XG4gICAgICBmcy53cml0ZUZpbGVTeW5jKGdpdElnbm9yZVBhdGgsIFwibm9kZV9tb2R1bGVzXCIpO1xuICAgICAgbG9nLnN1Y2Nlc3MoXCIuZ2l0aWdub3JlIOWIm+W7uuaIkOWKn++8gVwiKTtcbiAgICB9XG4gIH1cblxuICAvLyDpmLbmrrUy77yaZ2l05pys5Zyw5Yid5aeL5YyWXG4gIGFzeW5jIGluaXRMb2NhbCgpIHtcbiAgICAvLyDnlJ/miJBnaXQgcmVtb3RlIOWcsOWdgFxuICAgIGNvbnN0IHJlbW90ZVVybCA9IGF3YWl0IHRoaXMuZ2l0QVBJLmdldFJlcG9VcmwoXG4gICAgICBgJHt0aGlzLmdpdEFQSS5sb2dpbn0vJHt0aGlzLm5hbWV9YFxuICAgICk7XG4gICAgLy8g5Yid5aeL5YyWZ2l05a+56LGhXG4gICAgdGhpcy5naXQgPSBTaW1wbGVHaXQocHJvY2Vzcy5jd2QoKSk7XG4gICAgY29uc3QgZ2l0RGlyID0gcGF0aC5yZXNvbHZlKHByb2Nlc3MuY3dkKCksIFwiLmdpdFwiKTtcbiAgICBpZiAoIWZzLmV4aXN0c1N5bmMoZ2l0RGlyKSkge1xuICAgICAgYXdhaXQgdGhpcy5naXQuaW5pdCgpO1xuICAgICAgbG9nLnN1Y2Nlc3MoXCLlrozmiJBnaXTliJ3lp4vljJZcIik7XG4gICAgfVxuICAgIC8vIOiOt+WPluaJgOacieW+l3JlbW90ZXNcbiAgICBjb25zdCByZW1vdGVzID0gYXdhaXQgdGhpcy5naXQuZ2V0UmVtb3RlcygpO1xuICAgIGlmICghcmVtb3Rlcy5maW5kKChyZW1vdGUpID0+IHJlbW90ZS5uYW1lID09PSBcIm9yaWdpblwiKSkge1xuICAgICAgdGhpcy5naXQuYWRkUmVtb3RlKFwib3JpZ2luXCIsIHJlbW90ZVVybCk7XG4gICAgICBsb2cuc3VjY2VzcyhcIua3u+WKoGdpdCByZW1vdGVcIiwgcmVtb3RlVXJsKTtcbiAgICB9XG4gICAgY29uc3Qgc3RhdHVzID0gYXdhaXQgdGhpcy5naXQuc3RhdHVzKCk7XG4gICAgLy8g5ouJ5Y+W6L+c56iLbWFzdGVy5YiG5pSvXG4gICAgYXdhaXQgdGhpcy5naXQucHVsbChcIm9yaWdpblwiLCBcIm1hc3RlclwiKS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICBsb2cudmVyYm9zZShcImdpdCBwdWxsIG9yaWdpbiBtYXN0ZXJcIiwgZXJyLm1lc3NhZ2UpO1xuICAgICAgaWYgKGVyci5tZXNzYWdlLmluZGV4T2YoXCJjb3VsZG4ndCBmaW5kIHJlbW90ZSByZWYgbWFzdGVyXCIpID49IDApIHtcbiAgICAgICAgbG9nLndhcm4oXCLojrflj5bov5znqItbbWFzdGVyXeWIhuaUr+Wksei0pe+8gVwiKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBDb21taXQoaW5zdGFuY2UpIHtcbiAgcmV0dXJuIG5ldyBDb21taXRDb21tYW5kKGluc3RhbmNlKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29tbWl0O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9