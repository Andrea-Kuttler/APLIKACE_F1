"use strict";
self["webpackHotUpdatewebpack"](0,{

/***/ 23:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27);
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(37);
/* harmony import */ var _components_Main__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(39);
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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin

    if(true) {
      (function() {
        var localsJsonString = undefined;
        // 1745753988244
        var cssReload = __webpack_require__(35)(module.id, {});
        // only invalidate when locals change
        if (
          module.hot.data &&
          module.hot.data.value &&
          module.hot.data.value !== localsJsonString
        ) {
          module.hot.invalidate();
        } else {
          module.hot.accept();
        }
        module.hot.dispose(function(data) {
          data.value = localsJsonString;
          cssReload();
        });
      })();
    }
  

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "a500d769c15696f28e4b"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUM7QUFDaEQsSUFBTUMsSUFBSSxHQUFHdEMsNERBQVUsQ0FBQ21DLFNBQVMsQ0FBQztBQUNsQ0csSUFBSSxDQUFDQyxNQUFNLGNBQUN6QywwREFBQSxDQUFDSyxHQUFHLE1BQUUsQ0FBQyxDQUFDOzs7Ozs7OztBQ3RFcEI7QUFDVTtBQUNWLE9BQU8sSUFBVTtBQUNqQjtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsbUJBQU8sQ0FBQyxFQUEwRSxlQUFlO0FBQ3pIO0FBQ0E7QUFDQSxVQUFVLFVBQVU7QUFDcEIsVUFBVSxVQUFVO0FBQ3BCLFVBQVUsVUFBVTtBQUNwQjtBQUNBLFVBQVUsVUFBVTtBQUNwQixVQUFVO0FBQ1YsVUFBVSxpQkFBaUI7QUFDM0I7QUFDQSxRQUFRLFVBQVU7QUFDbEI7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQTs7Ozs7Ozs7VUN2QkEscUNBQXFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFjay8uL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLy4vY3NzL3N0eWxlLmNzcz9lYTc4Iiwid2VicGFjazovL3dlYnBhY2svd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNyZWF0ZVJvb3QgfSBmcm9tIFwicmVhY3QtZG9tL2NsaWVudFwiO1xuaW1wb3J0ICcuLi9jc3Mvc3R5bGUuY3NzJzsgIC8vIEltcG9ydHVqZW1lIENTUyBzb3Vib3JcblxuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi9jb21wb25lbnRzL0hlYWRlclwiOyAgLy8gSW1wb3J0dWplbWUga29tcG9uZW50dSBIZWFkZXJcbmltcG9ydCBNYWluIGZyb20gXCIuL2NvbXBvbmVudHMvTWFpblwiOyAgLy8gSW1wb3J0dWplbWUga29tcG9uZW50dSBNYWluXG5cblxuY29uc3QgQXBwID0gKCkgPT4ge1xuICAgIGNvbnN0IFtyYWNlcywgc2V0UmFjZXNdID0gdXNlU3RhdGUoW10pOyAgLy8gU3RhdiBwcm8gesOhdm9keVxuICAgIGNvbnN0IFtkcml2ZXJzLCBzZXREcml2ZXJzXSA9IHVzZVN0YXRlKFtdKTsgIC8vIFN0YXYgcHJvIGplemRjZVxuICAgIGNvbnN0IFtpc1JhY2VzVmlzaWJsZSwgc2V0SXNSYWNlc1Zpc2libGVdID0gdXNlU3RhdGUodHJ1ZSk7ICAvLyBTdGF2IHBybyB6b2JyYXplbsOtIHrDoXZvZMWvL2plemRjxa9cblxuICAgIC8vIEZ1bmtjZSBwcm8gbmHEjXRlbsOtIHrDoXZvZMWvXG4gICAgY29uc3QgZmV0Y2hSYWNlcyA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgYXBpVXJsID0gJ2h0dHBzOi8vZXJnYXN0LmNvbS9hcGkvZjEvMjAyNC5qc29uJztcblxuICAgICAgICBmZXRjaChhcGlVcmwpXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NoeWJhIHDFmWkgesOtc2vDoXbDoW7DrSBkYXQnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgICAgICBzZXRSYWNlcyhkYXRhLk1SRGF0YS5SYWNlVGFibGUuUmFjZXMpOyAgLy8gTmFzdGF2w61tZSBkYXRhIG8gesOhdm9kZWNoXG4gICAgICAgICAgICAgICAgc2V0SXNSYWNlc1Zpc2libGUodHJ1ZSk7ICAvLyBab2JyYXrDrW1lIHrDoXZvZHlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0NoeWJhOicsIGVycm9yKTtcbiAgICAgICAgICAgIH0pO1xuICAgIH07XG5cbiAgICAvLyBGdW5rY2UgcHJvIG5hxI10ZW7DrSBqZXpkY8WvXG4gICAgY29uc3QgZmV0Y2hEcml2ZXJzID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBhcGlVcmwgPSAnaHR0cHM6Ly9lcmdhc3QuY29tL2FwaS9mMS8yMDI0L2RyaXZlcnMuanNvbic7XG5cbiAgICAgICAgZmV0Y2goYXBpVXJsKVxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDaHliYSBwxZlpIHrDrXNrw6F2w6Fuw60gZGF0Jyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgc2V0RHJpdmVycyhkYXRhLk1SRGF0YS5Ecml2ZXJUYWJsZS5Ecml2ZXJzKTsgIC8vIE5hc3RhdsOtbWUgZGF0YSBvIGplemRjw61jaFxuICAgICAgICAgICAgICAgIHNldElzUmFjZXNWaXNpYmxlKGZhbHNlKTsgIC8vIFpvYnJhesOtbWUgamV6ZGNlXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdDaHliYTonLCBlcnJvcik7XG4gICAgICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxIZWFkZXJcbiAgICAgICAgICAgICAgICBvbkxvYWRSYWNlcz17ZmV0Y2hSYWNlc31cbiAgICAgICAgICAgICAgICBvbkxvYWREcml2ZXJzPXtmZXRjaERyaXZlcnN9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICA8TWFpbiBcbiAgICAgICAgICAgICAgICBpc1JhY2VzVmlzaWJsZT17aXNSYWNlc1Zpc2libGV9XG4gICAgICAgICAgICAgICAgcmFjZXM9e3JhY2VzfVxuICAgICAgICAgICAgICAgIGRyaXZlcnM9e2RyaXZlcnN9XG4gICAgICAgICAgICAvPlxuICAgICAgICA8Lz5cbiAgICApO1xufTtcblxuY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhcHBcIik7XG5jb25zdCByb290ID0gY3JlYXRlUm9vdChjb250YWluZXIpO1xucm9vdC5yZW5kZXIoPEFwcCAvPik7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTtcbiAgICBpZihtb2R1bGUuaG90KSB7XG4gICAgICAoZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBsb2NhbHNKc29uU3RyaW5nID0gdW5kZWZpbmVkO1xuICAgICAgICAvLyAxNzQ1NzUzOTg4MjQ0XG4gICAgICAgIHZhciBjc3NSZWxvYWQgPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvaG1yL2hvdE1vZHVsZVJlcGxhY2VtZW50LmpzXCIpKG1vZHVsZS5pZCwge30pO1xuICAgICAgICAvLyBvbmx5IGludmFsaWRhdGUgd2hlbiBsb2NhbHMgY2hhbmdlXG4gICAgICAgIGlmIChcbiAgICAgICAgICBtb2R1bGUuaG90LmRhdGEgJiZcbiAgICAgICAgICBtb2R1bGUuaG90LmRhdGEudmFsdWUgJiZcbiAgICAgICAgICBtb2R1bGUuaG90LmRhdGEudmFsdWUgIT09IGxvY2Fsc0pzb25TdHJpbmdcbiAgICAgICAgKSB7XG4gICAgICAgICAgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICAgICAgfVxuICAgICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgIGRhdGEudmFsdWUgPSBsb2NhbHNKc29uU3RyaW5nO1xuICAgICAgICAgIGNzc1JlbG9hZCgpO1xuICAgICAgICB9KTtcbiAgICAgIH0pKCk7XG4gICAgfVxuICAiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSBmdW5jdGlvbigpIHsgcmV0dXJuIFwiYTUwMGQ3NjljMTU2OTZmMjhlNGJcIjsgfSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiY3JlYXRlUm9vdCIsIkhlYWRlciIsIk1haW4iLCJBcHAiLCJfdXNlU3RhdGUiLCJfdXNlU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkiLCJyYWNlcyIsInNldFJhY2VzIiwiX3VzZVN0YXRlMyIsIl91c2VTdGF0ZTQiLCJkcml2ZXJzIiwic2V0RHJpdmVycyIsIl91c2VTdGF0ZTUiLCJfdXNlU3RhdGU2IiwiaXNSYWNlc1Zpc2libGUiLCJzZXRJc1JhY2VzVmlzaWJsZSIsImNyZWF0ZUVsZW1lbnQiLCJGcmFnbWVudCIsIm9uTG9hZFJhY2VzIiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJvayIsIkVycm9yIiwianNvbiIsImRhdGEiLCJNUkRhdGEiLCJSYWNlVGFibGUiLCJSYWNlcyIsImVycm9yIiwiY29uc29sZSIsIm9uTG9hZERyaXZlcnMiLCJEcml2ZXJUYWJsZSIsIkRyaXZlcnMiLCJjb250YWluZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwicm9vdCIsInJlbmRlciJdLCJzb3VyY2VSb290IjoiIn0=