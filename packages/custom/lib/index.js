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
  !*** ./src/custom/lib/index.ts ***!
  \*********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var path_browserify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path-browserify */ "path-browserify");
/* harmony import */ var path_browserify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path_browserify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var browserify_fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! browserify-fs */ "browserify-fs");
/* harmony import */ var browserify_fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(browserify_fs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tsheep_com_command__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tsheep.com/command */ "@tsheep.com/command");
/* harmony import */ var _tsheep_com_command__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_tsheep_com_command__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _tsheep_com_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tsheep.com/utils */ "@tsheep.com/utils");
/* harmony import */ var _tsheep_com_utils__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_tsheep_com_utils__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var simple_git__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! simple-git */ "simple-git");
/* harmony import */ var simple_git__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(simple_git__WEBPACK_IMPORTED_MODULE_4__);
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};





class CustomCommand extends (_tsheep_com_command__WEBPACK_IMPORTED_MODULE_2___default()) {
    get command() {
        return;
    }
    get description() {
        return;
    }
    get options() {
        return [];
    }
    action([name, opts]) {
        return __awaiter(this, void 0, void 0, function* () {
            this.gitAPI = yield (0,_tsheep_com_utils__WEBPACK_IMPORTED_MODULE_3__.initGitServer)();
            const user = yield this.gitAPI.getUser();
            this.name = user.login;
            this.createCustomRes();
            this.initLocal();
        });
    }
    preAction() {
    }
    postAction() {
    }
    createCustomRes() {
        return __awaiter(this, void 0, void 0, function* () {
            yield (0,_tsheep_com_utils__WEBPACK_IMPORTED_MODULE_3__.initGitType)(this.gitAPI);
            yield this.gitAPI.createCustomRepo(this.name);
        });
    }
    initLocal() {
        return __awaiter(this, void 0, void 0, function* () {
            const remoteUrl = yield this.gitAPI.getRepoUrl(`${this.gitAPI.login}/${this.name}`);
            this.git = simple_git__WEBPACK_IMPORTED_MODULE_4___default()(process.cwd());
            const gitDir = path_browserify__WEBPACK_IMPORTED_MODULE_0___default().resolve(process.cwd(), ".git");
            if (!browserify_fs__WEBPACK_IMPORTED_MODULE_1___default().existsSync(gitDir)) {
                yield this.git.init();
                _tsheep_com_utils__WEBPACK_IMPORTED_MODULE_3__.log.success("完成git初始化");
            }
            const remotes = yield this.git.getRemotes();
            if (!remotes.find((remote) => remote.name === "origin")) {
                this.git.addRemote("origin", remoteUrl);
                _tsheep_com_utils__WEBPACK_IMPORTED_MODULE_3__.log.success("添加git remote", remoteUrl);
            }
            const dir = process.cwd();
            const gitREADME = path_browserify__WEBPACK_IMPORTED_MODULE_0___default().resolve(dir, "README.md");
            if (!browserify_fs__WEBPACK_IMPORTED_MODULE_1___default().existsSync(gitREADME)) {
                _tsheep_com_utils__WEBPACK_IMPORTED_MODULE_3__.log.info("README.md 文件开始创建");
                browserify_fs__WEBPACK_IMPORTED_MODULE_1___default().writeFileSync(gitREADME, "test");
                _tsheep_com_utils__WEBPACK_IMPORTED_MODULE_3__.log.success("README.md 文件创建成功");
            }
            yield this.git.add("README.md");
            yield this.git.commit("test");
            yield this.git.branch(["-m", "master", "main"]);
            setTimeout(() => {
                this.git.push(remoteUrl, "main");
            }, 1000);
        });
    }
}
function Custom(instance) {
    return new CustomCommand(instance);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Custom);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUFBRSxDQUFDO1lBQzFCLE1BQU0sU0FBUyxHQUFHLDhEQUFZLENBQUMsR0FBRyxFQUFFLFdBQVcsQ0FBQyxDQUFDO1lBQ2pELElBQUksQ0FBQywrREFBYSxDQUFDLFNBQVMsQ0FBQyxFQUFFO2dCQUM3QixrREFBRyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO2dCQUM3QixrRUFBZ0IsQ0FBQyxTQUFTLEVBQUUsTUFBTSxDQUFDLENBQUM7Z0JBQ3BDLGtEQUFHLENBQUMsT0FBTyxDQUFDLGtCQUFrQixDQUFDLENBQUM7YUFDakM7WUFDRCxNQUFNLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQ2hDLE1BQU0sSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDOUIsTUFBTSxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUNoRCxVQUFVLENBQUMsR0FBRyxFQUFFO2dCQUNkLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxNQUFNLENBQUMsQ0FBQztZQUNuQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDWCxDQUFDO0tBQUE7Q0FDRjtBQUNELFNBQVMsTUFBTSxDQUFDLFFBQVE7SUFDdEIsT0FBTyxJQUFJLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUNyQyxDQUFDO0FBQ0QsaUVBQWUsTUFBTSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcm9vdC9leHRlcm5hbCBjb21tb25qcyBcIkB0c2hlZXAuY29tL2NvbW1hbmRcIiIsIndlYnBhY2s6Ly9yb290L2V4dGVybmFsIGNvbW1vbmpzIFwiQHRzaGVlcC5jb20vdXRpbHNcIiIsIndlYnBhY2s6Ly9yb290L2V4dGVybmFsIGNvbW1vbmpzIFwiYnJvd3NlcmlmeS1mc1wiIiwid2VicGFjazovL3Jvb3QvZXh0ZXJuYWwgY29tbW9uanMgXCJwYXRoLWJyb3dzZXJpZnlcIiIsIndlYnBhY2s6Ly9yb290L2V4dGVybmFsIGNvbW1vbmpzIFwic2ltcGxlLWdpdFwiIiwid2VicGFjazovL3Jvb3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcm9vdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yb290L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yb290L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcm9vdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jvb3QvLi9zcmMvY3VzdG9tL2xpYi9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAdHNoZWVwLmNvbS9jb21tYW5kXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkB0c2hlZXAuY29tL3V0aWxzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJyb3dzZXJpZnktZnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGF0aC1icm93c2VyaWZ5XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInNpbXBsZS1naXRcIik7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIlxuaW1wb3J0IHBhdGggZnJvbSBcInBhdGgtYnJvd3NlcmlmeVwiO1xuaW1wb3J0IGZzIGZyb20gXCJicm93c2VyaWZ5LWZzXCI7XG5pbXBvcnQgQ29tbWFuZCBmcm9tIFwiQHRzaGVlcC5jb20vY29tbWFuZFwiO1xuaW1wb3J0IHsgbG9nLCBpbml0R2l0U2VydmVyLCBpbml0R2l0VHlwZSB9IGZyb20gXCJAdHNoZWVwLmNvbS91dGlsc1wiO1xuaW1wb3J0IFNpbXBsZUdpdCBmcm9tIFwic2ltcGxlLWdpdFwiO1xuXG4vKipcbiAqIGV4YW1wbGVz77yaXG4gKiB0LXRzaGVlcCBpbml0XG4gKiB0LXRzaGVlcCBpbml0IGFhYSAtLXR5cGUgcHJvamVjdCAtdHAgdGVtcGxhdGUtcmVhY3QxOCAtLWZvcmNlXG4gKi9cbmNsYXNzIEN1c3RvbUNvbW1hbmQgZXh0ZW5kcyBDb21tYW5kIHtcbiAgZ2l0QVBJOiBhbnk7XG4gIG5hbWU6IGFueTtcbiAgZ2l0OiBhbnk7XG4gIGdldCBjb21tYW5kKCkge1xuICAgIHJldHVybiA7XG4gIH1cbiAgZ2V0IGRlc2NyaXB0aW9uKCkge1xuICAgIHJldHVybiA7XG4gIH1cbiAgZ2V0IG9wdGlvbnMoKSB7XG4gICAgcmV0dXJuIFtdXG4gIH1cbiAgYXN5bmMgYWN0aW9uKFtuYW1lLCBvcHRzXSkge1xuICAgIHRoaXMuZ2l0QVBJID0gYXdhaXQgaW5pdEdpdFNlcnZlcigpO1xuICAgIGNvbnN0IHVzZXIgPSBhd2FpdCB0aGlzLmdpdEFQSS5nZXRVc2VyKCk7XG4gICAgdGhpcy5uYW1lID0gdXNlci5sb2dpbjtcbiAgICB0aGlzLmNyZWF0ZUN1c3RvbVJlcygpO1xuICAgIHRoaXMuaW5pdExvY2FsKCk7XG4gIH1cbiAgcHJlQWN0aW9uKCkge1xuICAgIC8vIGNvbnNvbGUubG9nKFwicHJlXCIpO1xuICB9XG4gIHBvc3RBY3Rpb24oKSB7XG4gICAgLy8gY29uc29sZS5sb2coXCJwb3N0XCIpO1xuICB9XG4gIC8vIOWIm+W7uuiHquWumuS5iWdpdOW5s+WPsOmmlumhteS7k+W6k1xuICBhc3luYyBjcmVhdGVDdXN0b21SZXMoKSB7XG4gICAgLy8g5b6X5YiwZ2l055So5oi35L+h5oGvXG4gICAgYXdhaXQgaW5pdEdpdFR5cGUodGhpcy5naXRBUEkpO1xuICAgIC8vIOWIm+W7uui/nOeoi+S7k+W6k1xuICAgIGF3YWl0IHRoaXMuZ2l0QVBJLmNyZWF0ZUN1c3RvbVJlcG8odGhpcy5uYW1lKTtcbiAgfVxuICBhc3luYyBpbml0TG9jYWwoKSB7XG4gICAgLy8g55Sf5oiQZ2l0IHJlbW90ZSDlnLDlnYBcbiAgICBjb25zdCByZW1vdGVVcmwgPSBhd2FpdCB0aGlzLmdpdEFQSS5nZXRSZXBvVXJsKFxuICAgICAgYCR7dGhpcy5naXRBUEkubG9naW59LyR7dGhpcy5uYW1lfWBcbiAgICApO1xuICAgIC8vIOWIneWni+WMlmdpdOWvueixoVxuICAgIHRoaXMuZ2l0ID0gU2ltcGxlR2l0KHByb2Nlc3MuY3dkKCkpO1xuICAgIGNvbnN0IGdpdERpciA9IHBhdGgucmVzb2x2ZShwcm9jZXNzLmN3ZCgpLCBcIi5naXRcIik7XG4gICAgaWYgKCFmcy5leGlzdHNTeW5jKGdpdERpcikpIHtcbiAgICAgIGF3YWl0IHRoaXMuZ2l0LmluaXQoKTtcbiAgICAgIGxvZy5zdWNjZXNzKFwi5a6M5oiQZ2l05Yid5aeL5YyWXCIpO1xuICAgIH1cbiAgICAvLyDojrflj5bmiYDmnInlvpdyZW1vdGVzXG4gICAgY29uc3QgcmVtb3RlcyA9IGF3YWl0IHRoaXMuZ2l0LmdldFJlbW90ZXMoKTtcbiAgICBpZiAoIXJlbW90ZXMuZmluZCgocmVtb3RlKSA9PiByZW1vdGUubmFtZSA9PT0gXCJvcmlnaW5cIikpIHtcbiAgICAgIHRoaXMuZ2l0LmFkZFJlbW90ZShcIm9yaWdpblwiLCByZW1vdGVVcmwpO1xuICAgICAgbG9nLnN1Y2Nlc3MoXCLmt7vliqBnaXQgcmVtb3RlXCIsIHJlbW90ZVVybCk7XG4gICAgfVxuICAgIC8vIOWIm+W7ulJFQURNRS5tZOaWh+S7tlxuICAgIGNvbnN0IGRpciA9IHByb2Nlc3MuY3dkKCk7XG4gICAgY29uc3QgZ2l0UkVBRE1FID0gcGF0aC5yZXNvbHZlKGRpciwgXCJSRUFETUUubWRcIik7XG4gICAgaWYgKCFmcy5leGlzdHNTeW5jKGdpdFJFQURNRSkpIHtcbiAgICAgIGxvZy5pbmZvKFwiUkVBRE1FLm1kIOaWh+S7tuW8gOWni+WIm+W7ulwiKTtcbiAgICAgIGZzLndyaXRlRmlsZVN5bmMoZ2l0UkVBRE1FLCBcInRlc3RcIik7XG4gICAgICBsb2cuc3VjY2VzcyhcIlJFQURNRS5tZCDmlofku7bliJvlu7rmiJDlip9cIik7XG4gICAgfVxuICAgIGF3YWl0IHRoaXMuZ2l0LmFkZChcIlJFQURNRS5tZFwiKTtcbiAgICBhd2FpdCB0aGlzLmdpdC5jb21taXQoXCJ0ZXN0XCIpO1xuICAgIGF3YWl0IHRoaXMuZ2l0LmJyYW5jaChbXCItbVwiLCBcIm1hc3RlclwiLCBcIm1haW5cIl0pO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5naXQucHVzaChyZW1vdGVVcmwsIFwibWFpblwiKTtcbiAgICB9LCAxMDAwKTtcbiAgfVxufVxuZnVuY3Rpb24gQ3VzdG9tKGluc3RhbmNlKSB7XG4gIHJldHVybiBuZXcgQ3VzdG9tQ29tbWFuZChpbnN0YW5jZSk7XG59XG5leHBvcnQgZGVmYXVsdCBDdXN0b207XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=