/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
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
/*!**********************************!*\
  !*** ./src/command/lib/index.ts ***!
  \**********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Command {
    constructor(instance) {
        var _a;
        if (!instance) {
            throw new Error("command instance must not be null!");
        }
        this.program = instance;
        const cmd = this.program.command(this.command);
        cmd.description(this.description);
        cmd.hook("preAction", () => {
            this.preAction();
        });
        cmd.hook("postAction", () => {
            this.postAction();
        });
        if (((_a = this.options) === null || _a === void 0 ? void 0 : _a.length) > 0) {
            this.options.forEach((option) => {
                cmd.option(...option);
            });
        }
        cmd.action((...params) => {
            this.action(params);
        });
    }
    action(params) {
        throw new Error("Method not implemented.");
    }
    get command() {
        throw new Error("command must be implements");
    }
    get description() {
        throw new Error("description must be implements");
    }
    get options() {
        return [];
    }
    preAction() {
    }
    postAction() {
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Command);

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbWFuZC9saWIvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOQSxNQUFNLE9BQU87SUFFVCxZQUFZLFFBQVE7O1FBQ2xCLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDYixNQUFNLElBQUksS0FBSyxDQUFDLG9DQUFvQyxDQUFDLENBQUM7U0FDdkQ7UUFDRCxJQUFJLENBQUMsT0FBTyxHQUFHLFFBQVEsQ0FBQztRQUN4QixNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDL0MsR0FBRyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDbEMsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsR0FBRyxFQUFFO1lBQ3pCLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNuQixDQUFDLENBQUMsQ0FBQztRQUNILEdBQUcsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLEdBQUcsRUFBRTtZQUMxQixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDcEIsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLFdBQUksQ0FBQyxPQUFPLDBDQUFFLE1BQU0sSUFBRyxDQUFDLEVBQUU7WUFDNUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLEVBQUUsRUFBRTtnQkFDOUIsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDO1lBQ3hCLENBQUMsQ0FBQyxDQUFDO1NBQ0o7UUFDRCxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxNQUFNLEVBQUUsRUFBRTtZQUN2QixJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3RCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNILE1BQU0sQ0FBQyxNQUFhO1FBQ2xCLE1BQU0sSUFBSSxLQUFLLENBQUMseUJBQXlCLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBQ0MsSUFBSSxPQUFPO1FBQ1QsTUFBTSxJQUFJLEtBQUssQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFDRCxJQUFJLFdBQVc7UUFDYixNQUFNLElBQUksS0FBSyxDQUFDLGdDQUFnQyxDQUFDLENBQUM7SUFDcEQsQ0FBQztJQUNELElBQUksT0FBTztRQUNULE9BQU8sRUFBRSxDQUFDO0lBQ1osQ0FBQztJQUlELFNBQVM7SUFFVCxDQUFDO0lBQ0QsVUFBVTtJQUVWLENBQUM7Q0FDRjtBQUNELGlFQUFnQixPQUFPLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yb290L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jvb3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jvb3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yb290L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcm9vdC8uL3NyYy9jb21tYW5kL2xpYi9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImNsYXNzIENvbW1hbmQge1xuICAgIHByb2dyYW06IGFueTtcbiAgICBjb25zdHJ1Y3RvcihpbnN0YW5jZSkge1xuICAgICAgaWYgKCFpbnN0YW5jZSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJjb21tYW5kIGluc3RhbmNlIG11c3Qgbm90IGJlIG51bGwhXCIpO1xuICAgICAgfVxuICAgICAgdGhpcy5wcm9ncmFtID0gaW5zdGFuY2U7XG4gICAgICBjb25zdCBjbWQgPSB0aGlzLnByb2dyYW0uY29tbWFuZCh0aGlzLmNvbW1hbmQpO1xuICAgICAgY21kLmRlc2NyaXB0aW9uKHRoaXMuZGVzY3JpcHRpb24pO1xuICAgICAgY21kLmhvb2soXCJwcmVBY3Rpb25cIiwgKCkgPT4ge1xuICAgICAgICB0aGlzLnByZUFjdGlvbigpO1xuICAgICAgfSk7XG4gICAgICBjbWQuaG9vayhcInBvc3RBY3Rpb25cIiwgKCkgPT4ge1xuICAgICAgICB0aGlzLnBvc3RBY3Rpb24oKTtcbiAgICAgIH0pO1xuICAgICAgaWYgKHRoaXMub3B0aW9ucz8ubGVuZ3RoID4gMCkge1xuICAgICAgICB0aGlzLm9wdGlvbnMuZm9yRWFjaCgob3B0aW9uKSA9PiB7XG4gICAgICAgICAgY21kLm9wdGlvbiguLi5vcHRpb24pO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGNtZC5hY3Rpb24oKC4uLnBhcmFtcykgPT4ge1xuICAgICAgICB0aGlzLmFjdGlvbihwYXJhbXMpO1xuICAgICAgfSk7XG4gICAgfVxuICBhY3Rpb24ocGFyYW1zOiBhbnlbXSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xuICB9XG4gICAgZ2V0IGNvbW1hbmQoKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJjb21tYW5kIG11c3QgYmUgaW1wbGVtZW50c1wiKTtcbiAgICB9XG4gICAgZ2V0IGRlc2NyaXB0aW9uKCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiZGVzY3JpcHRpb24gbXVzdCBiZSBpbXBsZW1lbnRzXCIpO1xuICAgIH1cbiAgICBnZXQgb3B0aW9ucygpIHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gICAgLy8gZ2V0IGFjdGlvbigpIHtcbiAgICAvLyAgIHRocm93IG5ldyBFcnJvcihcImFjdGlvbiBtdXN0IGJlIGltcGxlbWVudHNcIik7XG4gICAgLy8gfVxuICAgIHByZUFjdGlvbigpIHtcbiAgICAgIC8vIGVtcHR5XG4gICAgfVxuICAgIHBvc3RBY3Rpb24oKSB7XG4gICAgICAvLyBlbXB0eVxuICAgIH1cbiAgfVxuICBleHBvcnQgZGVmYXVsdCAgQ29tbWFuZDtcbiAgIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9