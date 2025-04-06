self["webpackHotUpdatewebpack"](0,{

/***/ 23:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27);
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34);
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_css_style_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(37);
/* harmony import */ var _components_Main__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(38);
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }


 // Importujeme CSS soubor

 // Importujeme komponentu Header
 // Importujeme komponentu Main

var App = function () {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    races = _useState2[0],
    setRaces = _useState2[1]; // Stav pro závody
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState4 = _slicedToArray(_useState3, 2),
    drivers = _useState4[0],
    setDrivers = _useState4[1]; // Stav pro jezdce
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
    _useState6 = _slicedToArray(_useState5, 2),
    isRacesVisible = _useState6[0],
    setIsRacesVisible = _useState6[1]; // Stav pro zobrazení závodů/jezdců

  // Funkce pro načtení závodů

  // Funkce pro načtení jezdců

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Header__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onLoadRaces: function () {
      fetch('https://ergast.com/api/f1/2024.json').then(function (response) {
        if (!response.ok) {
          throw new Error('Chyba při získávání dat');
        }
        return response.json();
      }).then(function (data) {
        setRaces(data.MRData.RaceTable.Races); // Nastavíme data o závodech
        setIsRacesVisible(true); // Zobrazíme závody
      })["catch"](function (error) {
        console.error('Chyba:', error);
      });
    },
    onLoadDrivers: function () {
      fetch('https://ergast.com/api/f1/2024/drivers.json').then(function (response) {
        if (!response.ok) {
          throw new Error('Chyba při získávání dat');
        }
        return response.json();
      }).then(function (data) {
        setDrivers(data.MRData.DriverTable.Drivers); // Nastavíme data o jezdcích
        setIsRacesVisible(false); // Zobrazíme jezdce
      })["catch"](function (error) {
        console.error('Chyba:', error);
      });
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Main__WEBPACK_IMPORTED_MODULE_4__["default"], {
    isRacesVisible: isRacesVisible,
    races: races,
    drivers: drivers
  }));
};
var container = document.getElementById("app");
var root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(container);
root.render(/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(App, null));

/***/ }),

/***/ 34:
/***/ (function() {

throw new Error("Module build failed (from ./node_modules/mini-css-extract-plugin/dist/loader.js):\nHookWebpackError: Module build failed (from ./node_modules/css-loader/dist/cjs.js):\n\nSyntaxError\n\n(28:1) /Users/andreakuttlerova/Documents/GitHub/APLIKACE_F1/css/style.css Unexpected }\n\n \u001b[90m 26 | \u001b[39m    width\u001b[33m:\u001b[39m 100%\u001b[33m;\u001b[39m\n \u001b[90m 27 | \u001b[39m  \u001b[33m}\u001b[39m\n\u001b[1m\u001b[31m>\u001b[39m\u001b[22m\u001b[90m 28 | \u001b[39m\u001b[33m}\u001b[39m\n \u001b[90m    | \u001b[39m\u001b[1m\u001b[31m^\u001b[39m\u001b[22m\n \u001b[90m 29 | \u001b[39m  \n \u001b[90m 30 | \u001b[39m  \u001b[33m.container\u001b[39m \u001b[33m{\u001b[39m\n\n    at tryRunOrWebpackError (/Users/andreakuttlerova/Documents/GitHub/APLIKACE_F1/node_modules/webpack/lib/HookWebpackError.js:86:9)\n    at __webpack_require_module__ (/Users/andreakuttlerova/Documents/GitHub/APLIKACE_F1/node_modules/webpack/lib/Compilation.js:5301:12)\n    at __webpack_require__ (/Users/andreakuttlerova/Documents/GitHub/APLIKACE_F1/node_modules/webpack/lib/Compilation.js:5258:18)\n    at /Users/andreakuttlerova/Documents/GitHub/APLIKACE_F1/node_modules/webpack/lib/Compilation.js:5330:20\n    at symbolIterator (/Users/andreakuttlerova/Documents/GitHub/APLIKACE_F1/node_modules/neo-async/async.js:3485:9)\n    at done (/Users/andreakuttlerova/Documents/GitHub/APLIKACE_F1/node_modules/neo-async/async.js:3527:9)\n    at Hook.eval [as callAsync] (eval at create (/Users/andreakuttlerova/Documents/GitHub/APLIKACE_F1/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:15:1)\n    at /Users/andreakuttlerova/Documents/GitHub/APLIKACE_F1/node_modules/webpack/lib/Compilation.js:5236:43\n    at symbolIterator (/Users/andreakuttlerova/Documents/GitHub/APLIKACE_F1/node_modules/neo-async/async.js:3482:9)\n    at timesSync (/Users/andreakuttlerova/Documents/GitHub/APLIKACE_F1/node_modules/neo-async/async.js:2297:7)\n-- inner error --\nError: Module build failed (from ./node_modules/css-loader/dist/cjs.js):\n\nSyntaxError\n\n(28:1) /Users/andreakuttlerova/Documents/GitHub/APLIKACE_F1/css/style.css Unexpected }\n\n \u001b[90m 26 | \u001b[39m    width\u001b[33m:\u001b[39m 100%\u001b[33m;\u001b[39m\n \u001b[90m 27 | \u001b[39m  \u001b[33m}\u001b[39m\n\u001b[1m\u001b[31m>\u001b[39m\u001b[22m\u001b[90m 28 | \u001b[39m\u001b[33m}\u001b[39m\n \u001b[90m    | \u001b[39m\u001b[1m\u001b[31m^\u001b[39m\u001b[22m\n \u001b[90m 29 | \u001b[39m  \n \u001b[90m 30 | \u001b[39m  \u001b[33m.container\u001b[39m \u001b[33m{\u001b[39m\n\n    at Object.<anonymous> (/Users/andreakuttlerova/Documents/GitHub/APLIKACE_F1/node_modules/css-loader/dist/cjs.js!/Users/andreakuttlerova/Documents/GitHub/APLIKACE_F1/css/style.css:1:7)\n    at /Users/andreakuttlerova/Documents/GitHub/APLIKACE_F1/node_modules/webpack/lib/javascript/JavascriptModulesPlugin.js:494:10\n    at Hook.eval [as call] (eval at create (/Users/andreakuttlerova/Documents/GitHub/APLIKACE_F1/node_modules/tapable/lib/HookCodeFactory.js:19:10), <anonymous>:7:1)\n    at /Users/andreakuttlerova/Documents/GitHub/APLIKACE_F1/node_modules/webpack/lib/Compilation.js:5303:39\n    at tryRunOrWebpackError (/Users/andreakuttlerova/Documents/GitHub/APLIKACE_F1/node_modules/webpack/lib/HookWebpackError.js:81:7)\n    at __webpack_require_module__ (/Users/andreakuttlerova/Documents/GitHub/APLIKACE_F1/node_modules/webpack/lib/Compilation.js:5301:12)\n    at __webpack_require__ (/Users/andreakuttlerova/Documents/GitHub/APLIKACE_F1/node_modules/webpack/lib/Compilation.js:5258:18)\n    at /Users/andreakuttlerova/Documents/GitHub/APLIKACE_F1/node_modules/webpack/lib/Compilation.js:5330:20\n    at symbolIterator (/Users/andreakuttlerova/Documents/GitHub/APLIKACE_F1/node_modules/neo-async/async.js:3485:9)\n    at done (/Users/andreakuttlerova/Documents/GitHub/APLIKACE_F1/node_modules/neo-async/async.js:3527:9)\n\nGenerated code for /Users/andreakuttlerova/Documents/GitHub/APLIKACE_F1/node_modules/css-loader/dist/cjs.js!/Users/andreakuttlerova/Documents/GitHub/APLIKACE_F1/css/style.css\n1 | throw new Error(\"Module build failed (from ./node_modules/css-loader/dist/cjs.js):\\n\\nSyntaxError\\n\\n(28:1) /Users/andreakuttlerova/Documents/GitHub/APLIKACE_F1/css/style.css Unexpected }\\n\\n \\u001b[90m 26 | \\u001b[39m    width\\u001b[33m:\\u001b[39m 100%\\u001b[33m;\\u001b[39m\\n \\u001b[90m 27 | \\u001b[39m  \\u001b[33m}\\u001b[39m\\n\\u001b[1m\\u001b[31m>\\u001b[39m\\u001b[22m\\u001b[90m 28 | \\u001b[39m\\u001b[33m}\\u001b[39m\\n \\u001b[90m    | \\u001b[39m\\u001b[1m\\u001b[31m^\\u001b[39m\\u001b[22m\\n \\u001b[90m 29 | \\u001b[39m  \\n \\u001b[90m 30 | \\u001b[39m  \\u001b[33m.container\\u001b[39m \\u001b[33m{\\u001b[39m\\n\");");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "b73ad44d6651830c4ebd"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SyxDQUFDO0FBQ2hELElBQU1DLElBQUksR0FBR3RDLDREQUFVLENBQUNtQyxTQUFTLENBQUM7QUFDbENHLElBQUksQ0FBQ0MsTUFBTSxjQUFDekMsMERBQUEsQ0FBQ0ssR0FBRyxNQUFFLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O1VDckVwQixxQ0FBcUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLy4vanMvYXBwLmpzIiwid2VicGFjazovL3dlYnBhY2svd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNyZWF0ZVJvb3QgfSBmcm9tIFwicmVhY3QtZG9tL2NsaWVudFwiO1xuaW1wb3J0ICcuLi9jc3Mvc3R5bGUuY3NzJzsgIC8vIEltcG9ydHVqZW1lIENTUyBzb3Vib3JcblxuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi9jb21wb25lbnRzL0hlYWRlclwiOyAgLy8gSW1wb3J0dWplbWUga29tcG9uZW50dSBIZWFkZXJcbmltcG9ydCBNYWluIGZyb20gXCIuL2NvbXBvbmVudHMvTWFpblwiOyAgLy8gSW1wb3J0dWplbWUga29tcG9uZW50dSBNYWluXG5cbmNvbnN0IEFwcCA9ICgpID0+IHtcbiAgICBjb25zdCBbcmFjZXMsIHNldFJhY2VzXSA9IHVzZVN0YXRlKFtdKTsgIC8vIFN0YXYgcHJvIHrDoXZvZHlcbiAgICBjb25zdCBbZHJpdmVycywgc2V0RHJpdmVyc10gPSB1c2VTdGF0ZShbXSk7ICAvLyBTdGF2IHBybyBqZXpkY2VcbiAgICBjb25zdCBbaXNSYWNlc1Zpc2libGUsIHNldElzUmFjZXNWaXNpYmxlXSA9IHVzZVN0YXRlKHRydWUpOyAgLy8gU3RhdiBwcm8gem9icmF6ZW7DrSB6w6F2b2TFry9qZXpkY8WvXG5cbiAgICAvLyBGdW5rY2UgcHJvIG5hxI10ZW7DrSB6w6F2b2TFr1xuICAgIGNvbnN0IGZldGNoUmFjZXMgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGFwaVVybCA9ICdodHRwczovL2VyZ2FzdC5jb20vYXBpL2YxLzIwMjQuanNvbic7XG5cbiAgICAgICAgZmV0Y2goYXBpVXJsKVxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDaHliYSBwxZlpIHrDrXNrw6F2w6Fuw60gZGF0Jyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgc2V0UmFjZXMoZGF0YS5NUkRhdGEuUmFjZVRhYmxlLlJhY2VzKTsgIC8vIE5hc3RhdsOtbWUgZGF0YSBvIHrDoXZvZGVjaFxuICAgICAgICAgICAgICAgIHNldElzUmFjZXNWaXNpYmxlKHRydWUpOyAgLy8gWm9icmF6w61tZSB6w6F2b2R5XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdDaHliYTonLCBlcnJvcik7XG4gICAgICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgLy8gRnVua2NlIHBybyBuYcSNdGVuw60gamV6ZGPFr1xuICAgIGNvbnN0IGZldGNoRHJpdmVycyA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgYXBpVXJsID0gJ2h0dHBzOi8vZXJnYXN0LmNvbS9hcGkvZjEvMjAyNC9kcml2ZXJzLmpzb24nO1xuXG4gICAgICAgIGZldGNoKGFwaVVybClcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQ2h5YmEgcMWZaSB6w61za8OhdsOhbsOtIGRhdCcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgIHNldERyaXZlcnMoZGF0YS5NUkRhdGEuRHJpdmVyVGFibGUuRHJpdmVycyk7ICAvLyBOYXN0YXbDrW1lIGRhdGEgbyBqZXpkY8OtY2hcbiAgICAgICAgICAgICAgICBzZXRJc1JhY2VzVmlzaWJsZShmYWxzZSk7ICAvLyBab2JyYXrDrW1lIGplemRjZVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignQ2h5YmE6JywgZXJyb3IpO1xuICAgICAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8SGVhZGVyXG4gICAgICAgICAgICAgICAgb25Mb2FkUmFjZXM9e2ZldGNoUmFjZXN9XG4gICAgICAgICAgICAgICAgb25Mb2FkRHJpdmVycz17ZmV0Y2hEcml2ZXJzfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgPE1haW4gXG4gICAgICAgICAgICAgICAgaXNSYWNlc1Zpc2libGU9e2lzUmFjZXNWaXNpYmxlfVxuICAgICAgICAgICAgICAgIHJhY2VzPXtyYWNlc31cbiAgICAgICAgICAgICAgICBkcml2ZXJzPXtkcml2ZXJzfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgPC8+XG4gICAgKTtcbn07XG5cbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXBwXCIpO1xuY29uc3Qgcm9vdCA9IGNyZWF0ZVJvb3QoY29udGFpbmVyKTtcbnJvb3QucmVuZGVyKDxBcHAgLz4pO1xuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gZnVuY3Rpb24oKSB7IHJldHVybiBcImI3M2FkNDRkNjY1MTgzMGM0ZWJkXCI7IH0iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsImNyZWF0ZVJvb3QiLCJIZWFkZXIiLCJNYWluIiwiQXBwIiwiX3VzZVN0YXRlIiwiX3VzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5IiwicmFjZXMiLCJzZXRSYWNlcyIsIl91c2VTdGF0ZTMiLCJfdXNlU3RhdGU0IiwiZHJpdmVycyIsInNldERyaXZlcnMiLCJfdXNlU3RhdGU1IiwiX3VzZVN0YXRlNiIsImlzUmFjZXNWaXNpYmxlIiwic2V0SXNSYWNlc1Zpc2libGUiLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJvbkxvYWRSYWNlcyIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwib2siLCJFcnJvciIsImpzb24iLCJkYXRhIiwiTVJEYXRhIiwiUmFjZVRhYmxlIiwiUmFjZXMiLCJlcnJvciIsImNvbnNvbGUiLCJvbkxvYWREcml2ZXJzIiwiRHJpdmVyVGFibGUiLCJEcml2ZXJzIiwiY29udGFpbmVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInJvb3QiLCJyZW5kZXIiXSwic291cmNlUm9vdCI6IiJ9