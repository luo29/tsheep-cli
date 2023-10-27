/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/cli/lib/createCLI.ts":
/*!**********************************!*\
  !*** ./src/cli/lib/createCLI.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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


/***/ }),

/***/ "./src/cli/lib/exception.ts":
/*!**********************************!*\
  !*** ./src/cli/lib/exception.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tsheep_com_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tsheep.com/utils */ "@tsheep.com/utils");
/* harmony import */ var _tsheep_com_utils__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tsheep_com_utils__WEBPACK_IMPORTED_MODULE_0__);

function printErrorLog(e, type) {
    if ((0,_tsheep_com_utils__WEBPACK_IMPORTED_MODULE_0__.isDebug)()) {
        _tsheep_com_utils__WEBPACK_IMPORTED_MODULE_0__.log.error(type, e);
    }
    else {
        _tsheep_com_utils__WEBPACK_IMPORTED_MODULE_0__.log.error(type, e.message);
    }
}
process.on("uncaughtException", (e) => printErrorLog(e, "error"));
process.on("unhandledRejection", (e) => printErrorLog(e, "promise"));


/***/ }),

/***/ "@tsheep.com/commit":
/*!*************************************!*\
  !*** external "@tsheep.com/commit" ***!
  \*************************************/
/***/ ((module) => {

module.exports = require("@tsheep.com/commit");

/***/ }),

/***/ "@tsheep.com/custom":
/*!*************************************!*\
  !*** external "@tsheep.com/custom" ***!
  \*************************************/
/***/ ((module) => {

module.exports = require("@tsheep.com/custom");

/***/ }),

/***/ "@tsheep.com/init":
/*!***********************************!*\
  !*** external "@tsheep.com/init" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("@tsheep.com/init");

/***/ }),

/***/ "@tsheep.com/install":
/*!**************************************!*\
  !*** external "@tsheep.com/install" ***!
  \**************************************/
/***/ ((module) => {

module.exports = require("@tsheep.com/install");

/***/ }),

/***/ "@tsheep.com/lint":
/*!***********************************!*\
  !*** external "@tsheep.com/lint" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("@tsheep.com/lint");

/***/ }),

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
/*!******************************!*\
  !*** ./src/cli/lib/index.ts ***!
  \******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _tsheep_com_init__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tsheep.com/init */ "@tsheep.com/init");
/* harmony import */ var _tsheep_com_init__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tsheep_com_init__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tsheep_com_install__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tsheep.com/install */ "@tsheep.com/install");
/* harmony import */ var _tsheep_com_install__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tsheep_com_install__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _createCLI__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createCLI */ "./src/cli/lib/createCLI.ts");
/* harmony import */ var _tsheep_com_lint__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tsheep.com/lint */ "@tsheep.com/lint");
/* harmony import */ var _tsheep_com_lint__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_tsheep_com_lint__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _tsheep_com_commit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @tsheep.com/commit */ "@tsheep.com/commit");
/* harmony import */ var _tsheep_com_commit__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_tsheep_com_commit__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _tsheep_com_custom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @tsheep.com/custom */ "@tsheep.com/custom");
/* harmony import */ var _tsheep_com_custom__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_tsheep_com_custom__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _exception_ts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./exception.ts */ "./src/cli/lib/exception.ts");







/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(argv) {
    const program = (0,_createCLI__WEBPACK_IMPORTED_MODULE_2__["default"])();
    _tsheep_com_init__WEBPACK_IMPORTED_MODULE_0___default()(program);
    _tsheep_com_install__WEBPACK_IMPORTED_MODULE_1___default()(program);
    _tsheep_com_lint__WEBPACK_IMPORTED_MODULE_3___default()(program);
    _tsheep_com_commit__WEBPACK_IMPORTED_MODULE_4___default()(program);
    _tsheep_com_custom__WEBPACK_IMPORTED_MODULE_5___default()(program);
    program.parse(process.argv);
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7OztVQ0FBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05pRDtBQUNNO0FBQ25CO0FBQ2E7QUFDSTtBQUNBO0FBQzdCO0FBRXhCLDZCQUFlLG9DQUFVLElBQUk7SUFDM0IsTUFBTSxPQUFPLEdBQUcsc0RBQVMsRUFBRSxDQUFDO0lBQzVCLHVEQUFpQixDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzNCLDBEQUFvQixDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzlCLHVEQUFpQixDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzNCLHlEQUFtQixDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzdCLHlEQUFtQixDQUFDLE9BQU8sQ0FBQztJQUM1QixPQUFPLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUM5QixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcm9vdC8uL3NyYy9jbGkvbGliL2NyZWF0ZUNMSS50cyIsIndlYnBhY2s6Ly9yb290Ly4vc3JjL2NsaS9saWIvZXhjZXB0aW9uLnRzIiwid2VicGFjazovL3Jvb3QvZXh0ZXJuYWwgY29tbW9uanMgXCJAdHNoZWVwLmNvbS9jb21taXRcIiIsIndlYnBhY2s6Ly9yb290L2V4dGVybmFsIGNvbW1vbmpzIFwiQHRzaGVlcC5jb20vY3VzdG9tXCIiLCJ3ZWJwYWNrOi8vcm9vdC9leHRlcm5hbCBjb21tb25qcyBcIkB0c2hlZXAuY29tL2luaXRcIiIsIndlYnBhY2s6Ly9yb290L2V4dGVybmFsIGNvbW1vbmpzIFwiQHRzaGVlcC5jb20vaW5zdGFsbFwiIiwid2VicGFjazovL3Jvb3QvZXh0ZXJuYWwgY29tbW9uanMgXCJAdHNoZWVwLmNvbS9saW50XCIiLCJ3ZWJwYWNrOi8vcm9vdC9leHRlcm5hbCBjb21tb25qcyBcIkB0c2hlZXAuY29tL3V0aWxzXCIiLCJ3ZWJwYWNrOi8vcm9vdC9leHRlcm5hbCBjb21tb25qcyBcImNoYWxrXCIiLCJ3ZWJwYWNrOi8vcm9vdC9leHRlcm5hbCBjb21tb25qcyBcImNvbW1hbmRlclwiIiwid2VicGFjazovL3Jvb3QvZXh0ZXJuYWwgY29tbW9uanMgXCJkaXJuYW1lLWZpbGVuYW1lLWVzbVwiIiwid2VicGFjazovL3Jvb3QvZXh0ZXJuYWwgY29tbW9uanMgXCJmcy1leHRyYVwiIiwid2VicGFjazovL3Jvb3QvZXh0ZXJuYWwgY29tbW9uanMgXCJwYXRoLWJyb3dzZXJpZnlcIiIsIndlYnBhY2s6Ly9yb290L2V4dGVybmFsIGNvbW1vbmpzIFwic2VtdmVyXCIiLCJ3ZWJwYWNrOi8vcm9vdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yb290L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jvb3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jvb3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yb290L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcm9vdC8uL3NyYy9jbGkvbGliL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBwYXRoIGZyb20gXCJwYXRoLWJyb3dzZXJpZnlcIjtcbmltcG9ydCB7IHByb2dyYW0gfSBmcm9tIFwiY29tbWFuZGVyXCI7XG5pbXBvcnQgZnNlIGZyb20gXCJmcy1leHRyYVwiO1xuaW1wb3J0IFNlbXZlciBmcm9tIFwic2VtdmVyXCI7XG5pbXBvcnQgY2hhbGsgZnJvbSBcImNoYWxrXCI7XG5pbXBvcnQgeyBsb2cgfSBmcm9tIFwiQHRzaGVlcC5jb20vdXRpbHNcIjtcbmltcG9ydCB7IGRpcm5hbWUgfSBmcm9tIFwiZGlybmFtZS1maWxlbmFtZS1lc21cIjtcblxuY29uc3QgX19maWxlbmFtZSA9IGRpcm5hbWUoaW1wb3J0Lm1ldGEpO1xuY29uc3QgcGtnUGF0aCA9IHBhdGgucmVzb2x2ZShfX2ZpbGVuYW1lLCBcIi4uL3BhY2thZ2UuanNvblwiKTtcbmNvbnN0IHBrZyA9IGZzZS5yZWFkSlNPTlN5bmMocGtnUGF0aCk7XG5jb25zdCBMT1dFU1RfTk9ERV9WRVJTSU9OID0gXCIxNC4wLjBcIjtcbmZ1bmN0aW9uIGNoZWNrTm9kZVZlcnNpb24oKSB7XG4gIGxvZy5zdWNjZXNzKFwibm9kZSB2ZXJzaW9uXCIsIHByb2Nlc3MudmVyc2lvbik7XG4gIGlmICghU2VtdmVyLmd0ZShwcm9jZXNzLnZlcnNpb24sIExPV0VTVF9OT0RFX1ZFUlNJT04pKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgY2hhbGsucmVkKGB0c2hlZXAtY2xp6ZyA6KaB5a6J6KOFJHtMT1dFU1RfTk9ERV9WRVJTSU9OfeS7peS4iueahOeJiOacrOeahE5vZGUuanNgKVxuICAgICk7XG4gIH1cbn1cbmZ1bmN0aW9uIHByZUFjdGlvbigpIHtcbiAgLy8g5qOA5p+lTm9kZeeJiOacrFxuICBjaGVja05vZGVWZXJzaW9uKCk7XG59XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVDTEkoKSB7XG4gIGxvZy5zdWNjZXNzKFwidmVyc2lvblwiLCBwa2cudmVyc2lvbik7XG4gIHByb2dyYW1cbiAgICAubmFtZShPYmplY3Qua2V5cyhwa2cuYmluKVswXSlcbiAgICAudXNhZ2UoXCI8Y29tbWFuZD4gW29wdGlvbnNdXCIpXG4gICAgLnZlcnNpb24ocGtnLnZlcnNpb24pXG4gICAgLm9wdGlvbihcIi1kLCAtLWRlYnVnXCIsIFwi5piv5ZCm5byA5ZCv6LCD6K+V5qih5byPXCIsIGZhbHNlKVxuICAgIC5ob29rKFwicHJlQWN0aW9uXCIsIHByZUFjdGlvbik7XG4gIHByb2dyYW0ub24oXCJvcHRpb246ZGVidWdcIiwgZnVuY3Rpb24gKCkge1xuICAgIGlmIChwcm9ncmFtLm9wdHMoKS5kZWJ1Zykge1xuICAgICAgbG9nLnZlcmJvc2UoXCJkZWJ1Z1wiLCBcImxhdW5jaCBkZWJ1ZyBtb2RlIVwiKTtcbiAgICB9XG4gIH0pO1xuICBwcm9ncmFtLm9uKFwiY29tbWFuZDoqXCIsIGZ1bmN0aW9uIChvYmopIHtcbiAgICBsb2cuZXJyb3IoXCLmnKrnn6XnmoTlkb3ku6TvvJpcIiArIG9ialswXSk7XG4gIH0pO1xuICByZXR1cm4gcHJvZ3JhbTtcbn1cbiIsImltcG9ydCB7IGxvZywgaXNEZWJ1ZyB9IGZyb20gXCJAdHNoZWVwLmNvbS91dGlsc1wiO1xuXG5mdW5jdGlvbiBwcmludEVycm9yTG9nKGUsIHR5cGUpIHtcbiAgaWYgKGlzRGVidWcoKSkge1xuICAgIGxvZy5lcnJvcih0eXBlLCBlKTtcbiAgfSBlbHNlIHtcbiAgICBsb2cuZXJyb3IodHlwZSwgZS5tZXNzYWdlKTtcbiAgfVxufVxucHJvY2Vzcy5vbihcInVuY2F1Z2h0RXhjZXB0aW9uXCIsIChlKSA9PiBwcmludEVycm9yTG9nKGUsIFwiZXJyb3JcIikpO1xucHJvY2Vzcy5vbihcInVuaGFuZGxlZFJlamVjdGlvblwiLCAoZSkgPT4gcHJpbnRFcnJvckxvZyhlLCBcInByb21pc2VcIikpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHRzaGVlcC5jb20vY29tbWl0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkB0c2hlZXAuY29tL2N1c3RvbVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAdHNoZWVwLmNvbS9pbml0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkB0c2hlZXAuY29tL2luc3RhbGxcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHRzaGVlcC5jb20vbGludFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAdHNoZWVwLmNvbS91dGlsc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjaGFsa1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb21tYW5kZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZGlybmFtZS1maWxlbmFtZS1lc21cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZnMtZXh0cmFcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGF0aC1icm93c2VyaWZ5XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInNlbXZlclwiKTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IGNyZWF0ZUluaXRDb21tYW5kIGZyb20gXCJAdHNoZWVwLmNvbS9pbml0XCI7XG5pbXBvcnQgY3JlYXRlSW5zdGFsbENvbW1hbmQgZnJvbSBcIkB0c2hlZXAuY29tL2luc3RhbGxcIjtcbmltcG9ydCBjcmVhdGVDTEkgZnJvbSBcIi4vY3JlYXRlQ0xJXCI7XG5pbXBvcnQgY3JlYXRlTGludENvbW1hbmQgZnJvbSBcIkB0c2hlZXAuY29tL2xpbnRcIjtcbmltcG9ydCBjcmVhdGVDb21taXRDb21tYW5kIGZyb20gXCJAdHNoZWVwLmNvbS9jb21taXRcIjtcbmltcG9ydCBjcmVhdGVDdXN0b21Db21tYW5kIGZyb20gXCJAdHNoZWVwLmNvbS9jdXN0b21cIjtcbmltcG9ydCBcIi4vZXhjZXB0aW9uLnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChhcmd2KSB7XG4gIGNvbnN0IHByb2dyYW0gPSBjcmVhdGVDTEkoKTtcbiAgY3JlYXRlSW5pdENvbW1hbmQocHJvZ3JhbSk7XG4gIGNyZWF0ZUluc3RhbGxDb21tYW5kKHByb2dyYW0pO1xuICBjcmVhdGVMaW50Q29tbWFuZChwcm9ncmFtKTtcbiAgY3JlYXRlQ29tbWl0Q29tbWFuZChwcm9ncmFtKTtcbiAgY3JlYXRlQ3VzdG9tQ29tbWFuZChwcm9ncmFtKVxuICBwcm9ncmFtLnBhcnNlKHByb2Nlc3MuYXJndik7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=