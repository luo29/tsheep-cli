/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/utils/lib/isDebug.ts":
/*!**********************************!*\
  !*** ./src/utils/lib/isDebug.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

module.exports = require("axios");

/***/ }),

/***/ "npmlog":
/*!*************************!*\
  !*** external "npmlog" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("npmlog");

/***/ }),

/***/ "url-join":
/*!***************************!*\
  !*** external "url-join" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("url-join");

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
  !*** ./src/utils/lib/npm.ts ***!
  \******************************/
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

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMvbGliL25wbS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFlLFNBQVMsT0FBTztJQUM3QixPQUFPLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxJQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ3pFLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0YwQjtBQUNLO0FBRWhDLElBQUksb0RBQU8sRUFBRSxFQUFFO0lBQ2IscURBQVMsR0FBRyxTQUFTLENBQUM7Q0FDdkI7S0FBTTtJQUNMLHFEQUFTLEdBQUcsTUFBTSxDQUFDO0NBQ3BCO0FBQ0QsdURBQVcsR0FBRyxRQUFRLENBQUM7QUFDdkIsc0RBQVksQ0FBQyxTQUFTLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztBQUMzRCxpRUFBZSwrQ0FBRyxFQUFDOzs7Ozs7Ozs7OztBQ1ZuQjs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7OztVQ0FBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTitCO0FBQ0w7QUFDRjtBQUN4QixTQUFTLFVBQVUsQ0FBQyxPQUFPO0lBQ3pCLE1BQU0sUUFBUSxHQUFHLDZCQUE2QixDQUFDO0lBQy9DLE1BQU0sR0FBRyxHQUFHLCtDQUFPLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ3ZDLE9BQU8sZ0RBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxRQUFRLEVBQUUsRUFBRTtRQUN0QyxJQUFJO1lBQ0YsT0FBTyxRQUFRLENBQUMsSUFBSSxDQUFDO1NBQ3RCO1FBQUMsT0FBTyxHQUFHLEVBQUU7WUFDWixPQUFPLE9BQU8sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDNUI7SUFDSCxDQUFDLENBQUMsQ0FBQztBQUNMLENBQUM7QUFDTSxTQUFTLGdCQUFnQixDQUFDLE9BQU87SUFDdEMsT0FBTyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUU7UUFDdkMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxNQUFNLEVBQUU7WUFDbkQsNENBQUcsQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDLENBQUM7WUFDM0IsT0FBTyxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksS0FBSyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUM7U0FDbkQ7UUFDRCxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxNQUFNLENBQUM7SUFDbEMsQ0FBQyxDQUFDLENBQUM7QUFFTCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcm9vdC8uL3NyYy91dGlscy9saWIvaXNEZWJ1Zy50cyIsIndlYnBhY2s6Ly9yb290Ly4vc3JjL3V0aWxzL2xpYi9sb2cudHMiLCJ3ZWJwYWNrOi8vcm9vdC9leHRlcm5hbCBjb21tb25qcyBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vcm9vdC9leHRlcm5hbCBjb21tb25qcyBcIm5wbWxvZ1wiIiwid2VicGFjazovL3Jvb3QvZXh0ZXJuYWwgY29tbW9uanMgXCJ1cmwtam9pblwiIiwid2VicGFjazovL3Jvb3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcm9vdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yb290L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yb290L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcm9vdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jvb3QvLi9zcmMvdXRpbHMvbGliL25wbS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc0RlYnVnKCkge1xuICByZXR1cm4gcHJvY2Vzcy5hcmd2LmluY2x1ZGVzKFwiLS1kZWJ1Z1wiKSB8fCBwcm9jZXNzLmFyZ3YuaW5jbHVkZXMoXCItZFwiKTtcbn1cbiIsImltcG9ydCAgbG9nICBmcm9tIFwibnBtbG9nXCI7XG5pbXBvcnQgaXNEZWJ1ZyBmcm9tIFwiLi9pc0RlYnVnXCI7XG5cbmlmIChpc0RlYnVnKCkpIHtcbiAgbG9nLmxldmVsID0gXCJ2ZXJib3NlXCI7XG59IGVsc2Uge1xuICBsb2cubGV2ZWwgPSBcImluZm9cIjtcbn1cbmxvZy5oZWFkaW5nID0gXCJ0c2hlZXBcIjtcbmxvZy5hZGRMZXZlbChcInN1Y2Nlc3NcIiwgMjAwMCwgeyBmZzogXCJncmVlblwiLCBib2xkOiB0cnVlIH0pO1xuZXhwb3J0IGRlZmF1bHQgbG9nO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibnBtbG9nXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInVybC1qb2luXCIpOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgdXJsSm9pbiBmcm9tIFwidXJsLWpvaW5cIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCBsb2cgZnJvbSBcIi4vbG9nXCI7XG5mdW5jdGlvbiBnZXROcG1JbmZvKG5wbU5hbWUpIHtcbiAgY29uc3QgcmVnaXN0cnkgPSBcImh0dHBzOi8vcmVnaXN0cnkubnBtanMub3JnL1wiO1xuICBjb25zdCB1cmwgPSB1cmxKb2luKHJlZ2lzdHJ5LCBucG1OYW1lKTtcbiAgcmV0dXJuIGF4aW9zLmdldCh1cmwpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycik7XG4gICAgfVxuICB9KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRMYXRlc3RWZXJzaW9uKG5wbU5hbWUpIHtcbiAgcmV0dXJuIGdldE5wbUluZm8obnBtTmFtZSkudGhlbigoZGF0YSkgPT4ge1xuICAgIGlmICghZGF0YVtcImRpc3QtdGFnc1wiXSB8fCAhZGF0YVtcImRpc3QtdGFnc1wiXS5sYXRlc3QpIHtcbiAgICAgIGxvZy5lcnJvcihcIuayoeaciSBsYXRlc3Qg54mI5pys5Y+3XCIpO1xuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIuayoeaciSBsYXRlc3Qg54mI5pys5Y+3XCIpKTtcbiAgICB9XG4gICAgcmV0dXJuIGRhdGFbXCJkaXN0LXRhZ3NcIl0ubGF0ZXN0O1xuICB9KTtcbiAgLy8gICByZXR1cm4gXCIxLjAuMFwiO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9