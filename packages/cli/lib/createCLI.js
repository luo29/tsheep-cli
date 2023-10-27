/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "@tsheep.com/utils":
/*!************************************!*\
  !*** external "@tsheep.com/utils" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("@tsheep.com/utils");

/***/ }),

/***/ "chalk":
/*!************************!*\
  !*** external "chalk" ***!
  \************************/
/***/ ((module) => {

module.exports = require("chalk");

/***/ }),

/***/ "commander":
/*!****************************!*\
  !*** external "commander" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("commander");

/***/ }),

/***/ "dirname-filename-esm":
/*!***************************************!*\
  !*** external "dirname-filename-esm" ***!
  \***************************************/
/***/ ((module) => {

module.exports = require("dirname-filename-esm");

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

/***/ "semver":
/*!*************************!*\
  !*** external "semver" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("semver");

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
/*!**********************************!*\
  !*** ./src/cli/lib/createCLI.ts ***!
  \**********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createCLI)
/* harmony export */ });
/* harmony import */ var path_browserify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path-browserify */ "path-browserify");
/* harmony import */ var path_browserify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path_browserify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var commander__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! commander */ "commander");
/* harmony import */ var commander__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(commander__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var fs_extra__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! fs-extra */ "fs-extra");
/* harmony import */ var fs_extra__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(fs_extra__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var semver__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! semver */ "semver");
/* harmony import */ var semver__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(semver__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var chalk__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! chalk */ "chalk");
/* harmony import */ var chalk__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(chalk__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _tsheep_com_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @tsheep.com/utils */ "@tsheep.com/utils");
/* harmony import */ var _tsheep_com_utils__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_tsheep_com_utils__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var dirname_filename_esm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! dirname-filename-esm */ "dirname-filename-esm");
/* harmony import */ var dirname_filename_esm__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(dirname_filename_esm__WEBPACK_IMPORTED_MODULE_6__);







const __filename = (0,dirname_filename_esm__WEBPACK_IMPORTED_MODULE_6__.dirname)(({}));
const pkgPath = path_browserify__WEBPACK_IMPORTED_MODULE_0___default().resolve(__filename, "../package.json");
const pkg = fs_extra__WEBPACK_IMPORTED_MODULE_2___default().readJSONSync(pkgPath);
const LOWEST_NODE_VERSION = "14.0.0";
function checkNodeVersion() {
    _tsheep_com_utils__WEBPACK_IMPORTED_MODULE_5__.log.success("node version", process.version);
    if (!semver__WEBPACK_IMPORTED_MODULE_3___default().gte(process.version, LOWEST_NODE_VERSION)) {
        throw new Error(chalk__WEBPACK_IMPORTED_MODULE_4___default().red(`tsheep-cli需要安装${LOWEST_NODE_VERSION}以上的版本的Node.js`));
    }
}
function preAction() {
    checkNodeVersion();
}
function createCLI() {
    _tsheep_com_utils__WEBPACK_IMPORTED_MODULE_5__.log.success("version", pkg.version);
    commander__WEBPACK_IMPORTED_MODULE_1__.program
        .name(Object.keys(pkg.bin)[0])
        .usage("<command> [options]")
        .version(pkg.version)
        .option("-d, --debug", "是否开启调试模式", false)
        .hook("preAction", preAction);
    commander__WEBPACK_IMPORTED_MODULE_1__.program.on("option:debug", function () {
        if (commander__WEBPACK_IMPORTED_MODULE_1__.program.opts().debug) {
            _tsheep_com_utils__WEBPACK_IMPORTED_MODULE_5__.log.verbose("debug", "launch debug mode!");
        }
    });
    commander__WEBPACK_IMPORTED_MODULE_1__.program.on("command:*", function (obj) {
        _tsheep_com_utils__WEBPACK_IMPORTED_MODULE_5__.log.error("未知的命令：" + obj[0]);
    });
    return commander__WEBPACK_IMPORTED_MODULE_1__.program;
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpL2xpYi9jcmVhdGVDTEkuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05tQztBQUNDO0FBQ1Q7QUFDQztBQUNGO0FBQ2M7QUFDTztBQUUvQyxNQUFNLFVBQVUsR0FBRyw2REFBTyxDQUFDLElBQVcsQ0FBQyxDQUFDO0FBQ3hDLE1BQU0sT0FBTyxHQUFHLDhEQUFZLENBQUMsVUFBVSxFQUFFLGlCQUFpQixDQUFDLENBQUM7QUFDNUQsTUFBTSxHQUFHLEdBQUcsNERBQWdCLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDdEMsTUFBTSxtQkFBbUIsR0FBRyxRQUFRLENBQUM7QUFDckMsU0FBUyxnQkFBZ0I7SUFDdkIsa0RBQUcsQ0FBQyxPQUFPLENBQUMsY0FBYyxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUM3QyxJQUFJLENBQUMsaURBQVUsQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLG1CQUFtQixDQUFDLEVBQUU7UUFDckQsTUFBTSxJQUFJLEtBQUssQ0FDYixnREFBUyxDQUFDLGlCQUFpQixtQkFBbUIsZUFBZSxDQUFDLENBQy9ELENBQUM7S0FDSDtBQUNILENBQUM7QUFDRCxTQUFTLFNBQVM7SUFFaEIsZ0JBQWdCLEVBQUUsQ0FBQztBQUNyQixDQUFDO0FBQ2MsU0FBUyxTQUFTO0lBQy9CLGtEQUFHLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDcEMsOENBQU87U0FDSixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDN0IsS0FBSyxDQUFDLHFCQUFxQixDQUFDO1NBQzVCLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDO1NBQ3BCLE1BQU0sQ0FBQyxhQUFhLEVBQUUsVUFBVSxFQUFFLEtBQUssQ0FBQztTQUN4QyxJQUFJLENBQUMsV0FBVyxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQ2hDLDhDQUFPLENBQUMsRUFBRSxDQUFDLGNBQWMsRUFBRTtRQUN6QixJQUFJLDhDQUFPLENBQUMsSUFBSSxFQUFFLENBQUMsS0FBSyxFQUFFO1lBQ3hCLGtEQUFHLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxvQkFBb0IsQ0FBQyxDQUFDO1NBQzVDO0lBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDSCw4Q0FBTyxDQUFDLEVBQUUsQ0FBQyxXQUFXLEVBQUUsVUFBVSxHQUFHO1FBQ25DLGtEQUFHLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMvQixDQUFDLENBQUMsQ0FBQztJQUNILE9BQU8sOENBQU8sQ0FBQztBQUNqQixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcm9vdC9leHRlcm5hbCBjb21tb25qcyBcIkB0c2hlZXAuY29tL3V0aWxzXCIiLCJ3ZWJwYWNrOi8vcm9vdC9leHRlcm5hbCBjb21tb25qcyBcImNoYWxrXCIiLCJ3ZWJwYWNrOi8vcm9vdC9leHRlcm5hbCBjb21tb25qcyBcImNvbW1hbmRlclwiIiwid2VicGFjazovL3Jvb3QvZXh0ZXJuYWwgY29tbW9uanMgXCJkaXJuYW1lLWZpbGVuYW1lLWVzbVwiIiwid2VicGFjazovL3Jvb3QvZXh0ZXJuYWwgY29tbW9uanMgXCJmcy1leHRyYVwiIiwid2VicGFjazovL3Jvb3QvZXh0ZXJuYWwgY29tbW9uanMgXCJwYXRoLWJyb3dzZXJpZnlcIiIsIndlYnBhY2s6Ly9yb290L2V4dGVybmFsIGNvbW1vbmpzIFwic2VtdmVyXCIiLCJ3ZWJwYWNrOi8vcm9vdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yb290L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jvb3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jvb3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yb290L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcm9vdC8uL3NyYy9jbGkvbGliL2NyZWF0ZUNMSS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAdHNoZWVwLmNvbS91dGlsc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjaGFsa1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb21tYW5kZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZGlybmFtZS1maWxlbmFtZS1lc21cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZnMtZXh0cmFcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGF0aC1icm93c2VyaWZ5XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInNlbXZlclwiKTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHBhdGggZnJvbSBcInBhdGgtYnJvd3NlcmlmeVwiO1xuaW1wb3J0IHsgcHJvZ3JhbSB9IGZyb20gXCJjb21tYW5kZXJcIjtcbmltcG9ydCBmc2UgZnJvbSBcImZzLWV4dHJhXCI7XG5pbXBvcnQgU2VtdmVyIGZyb20gXCJzZW12ZXJcIjtcbmltcG9ydCBjaGFsayBmcm9tIFwiY2hhbGtcIjtcbmltcG9ydCB7IGxvZyB9IGZyb20gXCJAdHNoZWVwLmNvbS91dGlsc1wiO1xuaW1wb3J0IHsgZGlybmFtZSB9IGZyb20gXCJkaXJuYW1lLWZpbGVuYW1lLWVzbVwiO1xuXG5jb25zdCBfX2ZpbGVuYW1lID0gZGlybmFtZShpbXBvcnQubWV0YSk7XG5jb25zdCBwa2dQYXRoID0gcGF0aC5yZXNvbHZlKF9fZmlsZW5hbWUsIFwiLi4vcGFja2FnZS5qc29uXCIpO1xuY29uc3QgcGtnID0gZnNlLnJlYWRKU09OU3luYyhwa2dQYXRoKTtcbmNvbnN0IExPV0VTVF9OT0RFX1ZFUlNJT04gPSBcIjE0LjAuMFwiO1xuZnVuY3Rpb24gY2hlY2tOb2RlVmVyc2lvbigpIHtcbiAgbG9nLnN1Y2Nlc3MoXCJub2RlIHZlcnNpb25cIiwgcHJvY2Vzcy52ZXJzaW9uKTtcbiAgaWYgKCFTZW12ZXIuZ3RlKHByb2Nlc3MudmVyc2lvbiwgTE9XRVNUX05PREVfVkVSU0lPTikpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICBjaGFsay5yZWQoYHRzaGVlcC1jbGnpnIDopoHlronoo4Uke0xPV0VTVF9OT0RFX1ZFUlNJT0595Lul5LiK55qE54mI5pys55qETm9kZS5qc2ApXG4gICAgKTtcbiAgfVxufVxuZnVuY3Rpb24gcHJlQWN0aW9uKCkge1xuICAvLyDmo4Dmn6VOb2Rl54mI5pysXG4gIGNoZWNrTm9kZVZlcnNpb24oKTtcbn1cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUNMSSgpIHtcbiAgbG9nLnN1Y2Nlc3MoXCJ2ZXJzaW9uXCIsIHBrZy52ZXJzaW9uKTtcbiAgcHJvZ3JhbVxuICAgIC5uYW1lKE9iamVjdC5rZXlzKHBrZy5iaW4pWzBdKVxuICAgIC51c2FnZShcIjxjb21tYW5kPiBbb3B0aW9uc11cIilcbiAgICAudmVyc2lvbihwa2cudmVyc2lvbilcbiAgICAub3B0aW9uKFwiLWQsIC0tZGVidWdcIiwgXCLmmK/lkKblvIDlkK/osIPor5XmqKHlvI9cIiwgZmFsc2UpXG4gICAgLmhvb2soXCJwcmVBY3Rpb25cIiwgcHJlQWN0aW9uKTtcbiAgcHJvZ3JhbS5vbihcIm9wdGlvbjpkZWJ1Z1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHByb2dyYW0ub3B0cygpLmRlYnVnKSB7XG4gICAgICBsb2cudmVyYm9zZShcImRlYnVnXCIsIFwibGF1bmNoIGRlYnVnIG1vZGUhXCIpO1xuICAgIH1cbiAgfSk7XG4gIHByb2dyYW0ub24oXCJjb21tYW5kOipcIiwgZnVuY3Rpb24gKG9iaikge1xuICAgIGxvZy5lcnJvcihcIuacquefpeeahOWRveS7pO+8mlwiICsgb2JqWzBdKTtcbiAgfSk7XG4gIHJldHVybiBwcm9ncmFtO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9