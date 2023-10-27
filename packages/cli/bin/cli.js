#!/usr/bin/env node
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

/***/ "./src/cli/lib/index.ts":
/*!******************************!*\
  !*** ./src/cli/lib/index.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ "import-local":
/*!*******************************!*\
  !*** external "import-local" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("import-local");

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
/*!****************************!*\
  !*** ./src/cli/bin/cli.ts ***!
  \****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var import_local__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! import-local */ "import-local");
/* harmony import */ var import_local__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(import_local__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tsheep_com_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tsheep.com/utils */ "@tsheep.com/utils");
/* harmony import */ var _tsheep_com_utils__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tsheep_com_utils__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/index */ "./src/cli/lib/index.ts");
/* harmony import */ var dirname_filename_esm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! dirname-filename-esm */ "dirname-filename-esm");
/* harmony import */ var dirname_filename_esm__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(dirname_filename_esm__WEBPACK_IMPORTED_MODULE_3__);
//#!/usr/bin/env node




const __filename = (0,dirname_filename_esm__WEBPACK_IMPORTED_MODULE_3__.filename)(({}));
if (import_local__WEBPACK_IMPORTED_MODULE_0___default()(__filename)) {
    _tsheep_com_utils__WEBPACK_IMPORTED_MODULE_1__.log.info("cli", "使用本第 cli-tsheep 版本");
}
else {
    (0,_lib_index__WEBPACK_IMPORTED_MODULE_2__["default"])(process.argv.slice(2));
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0NBQzlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcm9vdC8uL3NyYy9jbGkvbGliL2NyZWF0ZUNMSS50cyIsIndlYnBhY2s6Ly9yb290Ly4vc3JjL2NsaS9saWIvZXhjZXB0aW9uLnRzIiwid2VicGFjazovL3Jvb3QvLi9zcmMvY2xpL2xpYi9pbmRleC50cyIsIndlYnBhY2s6Ly9yb290L2V4dGVybmFsIGNvbW1vbmpzIFwiQHRzaGVlcC5jb20vY29tbWl0XCIiLCJ3ZWJwYWNrOi8vcm9vdC9leHRlcm5hbCBjb21tb25qcyBcIkB0c2hlZXAuY29tL2N1c3RvbVwiIiwid2VicGFjazovL3Jvb3QvZXh0ZXJuYWwgY29tbW9uanMgXCJAdHNoZWVwLmNvbS9pbml0XCIiLCJ3ZWJwYWNrOi8vcm9vdC9leHRlcm5hbCBjb21tb25qcyBcIkB0c2hlZXAuY29tL2luc3RhbGxcIiIsIndlYnBhY2s6Ly9yb290L2V4dGVybmFsIGNvbW1vbmpzIFwiQHRzaGVlcC5jb20vbGludFwiIiwid2VicGFjazovL3Jvb3QvZXh0ZXJuYWwgY29tbW9uanMgXCJAdHNoZWVwLmNvbS91dGlsc1wiIiwid2VicGFjazovL3Jvb3QvZXh0ZXJuYWwgY29tbW9uanMgXCJjaGFsa1wiIiwid2VicGFjazovL3Jvb3QvZXh0ZXJuYWwgY29tbW9uanMgXCJjb21tYW5kZXJcIiIsIndlYnBhY2s6Ly9yb290L2V4dGVybmFsIGNvbW1vbmpzIFwiZGlybmFtZS1maWxlbmFtZS1lc21cIiIsIndlYnBhY2s6Ly9yb290L2V4dGVybmFsIGNvbW1vbmpzIFwiZnMtZXh0cmFcIiIsIndlYnBhY2s6Ly9yb290L2V4dGVybmFsIGNvbW1vbmpzIFwiaW1wb3J0LWxvY2FsXCIiLCJ3ZWJwYWNrOi8vcm9vdC9leHRlcm5hbCBjb21tb25qcyBcInBhdGgtYnJvd3NlcmlmeVwiIiwid2VicGFjazovL3Jvb3QvZXh0ZXJuYWwgY29tbW9uanMgXCJzZW12ZXJcIiIsIndlYnBhY2s6Ly9yb290L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jvb3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcm9vdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcm9vdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jvb3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yb290Ly4vc3JjL2NsaS9iaW4vY2xpLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBwYXRoIGZyb20gXCJwYXRoLWJyb3dzZXJpZnlcIjtcbmltcG9ydCB7IHByb2dyYW0gfSBmcm9tIFwiY29tbWFuZGVyXCI7XG5pbXBvcnQgZnNlIGZyb20gXCJmcy1leHRyYVwiO1xuaW1wb3J0IFNlbXZlciBmcm9tIFwic2VtdmVyXCI7XG5pbXBvcnQgY2hhbGsgZnJvbSBcImNoYWxrXCI7XG5pbXBvcnQgeyBsb2cgfSBmcm9tIFwiQHRzaGVlcC5jb20vdXRpbHNcIjtcbmltcG9ydCB7IGRpcm5hbWUgfSBmcm9tIFwiZGlybmFtZS1maWxlbmFtZS1lc21cIjtcblxuY29uc3QgX19maWxlbmFtZSA9IGRpcm5hbWUoaW1wb3J0Lm1ldGEpO1xuY29uc3QgcGtnUGF0aCA9IHBhdGgucmVzb2x2ZShfX2ZpbGVuYW1lLCBcIi4uL3BhY2thZ2UuanNvblwiKTtcbmNvbnN0IHBrZyA9IGZzZS5yZWFkSlNPTlN5bmMocGtnUGF0aCk7XG5jb25zdCBMT1dFU1RfTk9ERV9WRVJTSU9OID0gXCIxNC4wLjBcIjtcbmZ1bmN0aW9uIGNoZWNrTm9kZVZlcnNpb24oKSB7XG4gIGxvZy5zdWNjZXNzKFwibm9kZSB2ZXJzaW9uXCIsIHByb2Nlc3MudmVyc2lvbik7XG4gIGlmICghU2VtdmVyLmd0ZShwcm9jZXNzLnZlcnNpb24sIExPV0VTVF9OT0RFX1ZFUlNJT04pKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgY2hhbGsucmVkKGB0c2hlZXAtY2xp6ZyA6KaB5a6J6KOFJHtMT1dFU1RfTk9ERV9WRVJTSU9OfeS7peS4iueahOeJiOacrOeahE5vZGUuanNgKVxuICAgICk7XG4gIH1cbn1cbmZ1bmN0aW9uIHByZUFjdGlvbigpIHtcbiAgLy8g5qOA5p+lTm9kZeeJiOacrFxuICBjaGVja05vZGVWZXJzaW9uKCk7XG59XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVDTEkoKSB7XG4gIGxvZy5zdWNjZXNzKFwidmVyc2lvblwiLCBwa2cudmVyc2lvbik7XG4gIHByb2dyYW1cbiAgICAubmFtZShPYmplY3Qua2V5cyhwa2cuYmluKVswXSlcbiAgICAudXNhZ2UoXCI8Y29tbWFuZD4gW29wdGlvbnNdXCIpXG4gICAgLnZlcnNpb24ocGtnLnZlcnNpb24pXG4gICAgLm9wdGlvbihcIi1kLCAtLWRlYnVnXCIsIFwi5piv5ZCm5byA5ZCv6LCD6K+V5qih5byPXCIsIGZhbHNlKVxuICAgIC5ob29rKFwicHJlQWN0aW9uXCIsIHByZUFjdGlvbik7XG4gIHByb2dyYW0ub24oXCJvcHRpb246ZGVidWdcIiwgZnVuY3Rpb24gKCkge1xuICAgIGlmIChwcm9ncmFtLm9wdHMoKS5kZWJ1Zykge1xuICAgICAgbG9nLnZlcmJvc2UoXCJkZWJ1Z1wiLCBcImxhdW5jaCBkZWJ1ZyBtb2RlIVwiKTtcbiAgICB9XG4gIH0pO1xuICBwcm9ncmFtLm9uKFwiY29tbWFuZDoqXCIsIGZ1bmN0aW9uIChvYmopIHtcbiAgICBsb2cuZXJyb3IoXCLmnKrnn6XnmoTlkb3ku6TvvJpcIiArIG9ialswXSk7XG4gIH0pO1xuICByZXR1cm4gcHJvZ3JhbTtcbn1cbiIsImltcG9ydCB7IGxvZywgaXNEZWJ1ZyB9IGZyb20gXCJAdHNoZWVwLmNvbS91dGlsc1wiO1xuXG5mdW5jdGlvbiBwcmludEVycm9yTG9nKGUsIHR5cGUpIHtcbiAgaWYgKGlzRGVidWcoKSkge1xuICAgIGxvZy5lcnJvcih0eXBlLCBlKTtcbiAgfSBlbHNlIHtcbiAgICBsb2cuZXJyb3IodHlwZSwgZS5tZXNzYWdlKTtcbiAgfVxufVxucHJvY2Vzcy5vbihcInVuY2F1Z2h0RXhjZXB0aW9uXCIsIChlKSA9PiBwcmludEVycm9yTG9nKGUsIFwiZXJyb3JcIikpO1xucHJvY2Vzcy5vbihcInVuaGFuZGxlZFJlamVjdGlvblwiLCAoZSkgPT4gcHJpbnRFcnJvckxvZyhlLCBcInByb21pc2VcIikpO1xuIiwiaW1wb3J0IGNyZWF0ZUluaXRDb21tYW5kIGZyb20gXCJAdHNoZWVwLmNvbS9pbml0XCI7XG5pbXBvcnQgY3JlYXRlSW5zdGFsbENvbW1hbmQgZnJvbSBcIkB0c2hlZXAuY29tL2luc3RhbGxcIjtcbmltcG9ydCBjcmVhdGVDTEkgZnJvbSBcIi4vY3JlYXRlQ0xJXCI7XG5pbXBvcnQgY3JlYXRlTGludENvbW1hbmQgZnJvbSBcIkB0c2hlZXAuY29tL2xpbnRcIjtcbmltcG9ydCBjcmVhdGVDb21taXRDb21tYW5kIGZyb20gXCJAdHNoZWVwLmNvbS9jb21taXRcIjtcbmltcG9ydCBjcmVhdGVDdXN0b21Db21tYW5kIGZyb20gXCJAdHNoZWVwLmNvbS9jdXN0b21cIjtcbmltcG9ydCBcIi4vZXhjZXB0aW9uLnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChhcmd2KSB7XG4gIGNvbnN0IHByb2dyYW0gPSBjcmVhdGVDTEkoKTtcbiAgY3JlYXRlSW5pdENvbW1hbmQocHJvZ3JhbSk7XG4gIGNyZWF0ZUluc3RhbGxDb21tYW5kKHByb2dyYW0pO1xuICBjcmVhdGVMaW50Q29tbWFuZChwcm9ncmFtKTtcbiAgY3JlYXRlQ29tbWl0Q29tbWFuZChwcm9ncmFtKTtcbiAgY3JlYXRlQ3VzdG9tQ29tbWFuZChwcm9ncmFtKVxuICBwcm9ncmFtLnBhcnNlKHByb2Nlc3MuYXJndik7XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAdHNoZWVwLmNvbS9jb21taXRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHRzaGVlcC5jb20vY3VzdG9tXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkB0c2hlZXAuY29tL2luaXRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHRzaGVlcC5jb20vaW5zdGFsbFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAdHNoZWVwLmNvbS9saW50XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkB0c2hlZXAuY29tL3V0aWxzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNoYWxrXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvbW1hbmRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJkaXJuYW1lLWZpbGVuYW1lLWVzbVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmcy1leHRyYVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJpbXBvcnQtbG9jYWxcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGF0aC1icm93c2VyaWZ5XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInNlbXZlclwiKTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiIyEvdXNyL2Jpbi9lbnYgbm9kZVxuXG5pbXBvcnQgaW1wb3J0TG9jYWwgZnJvbSBcImltcG9ydC1sb2NhbFwiO1xuaW1wb3J0IHsgbG9nIH0gZnJvbSBcIkB0c2hlZXAuY29tL3V0aWxzXCI7XG5pbXBvcnQgZW50cnkgZnJvbSBcIi4uL2xpYi9pbmRleFwiO1xuaW1wb3J0IHsgZmlsZW5hbWUgfSBmcm9tIFwiZGlybmFtZS1maWxlbmFtZS1lc21cIjtcbmNvbnN0IF9fZmlsZW5hbWUgPSBmaWxlbmFtZShpbXBvcnQubWV0YSk7XG5pZiAoaW1wb3J0TG9jYWwoX19maWxlbmFtZSkpIHtcbiAgbG9nLmluZm8oXCJjbGlcIiwgXCLkvb/nlKjmnKznrKwgY2xpLXRzaGVlcCDniYjmnKxcIik7XG59IGVsc2Uge1xuICBlbnRyeShwcm9jZXNzLmFyZ3Yuc2xpY2UoMikpO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9