"use strict";
self["webpackHotUpdatewebpack"](0,{

/***/ 23:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(31);
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(27);
/* harmony import */ var _components_js_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(30);
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }


 // Importujeme CSS soubor

 // Importujeme komponentu Header

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

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_js_Header__WEBPACK_IMPORTED_MODULE_3__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "seznam"
  }, isRacesVisible ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    id: "raceList"
  }, races.map(function (race) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
      key: race.round
    }, "".concat(race.round, ": ").concat(race.raceName, " (").concat(race.date, ") - ").concat(race.Circuit.circuitName));
  })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    id: "driverList"
  }, drivers.map(function (driver) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
      key: driver.driverId
    }, "".concat(driver.givenName, " ").concat(driver.familyName, " (").concat(driver.nationality, ") - ").concat(driver.permanentNumber ?? 'bez čísla'));
  }))));
};
var container = document.getElementById("app");
var root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(container);
root.render(/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(App, null));

/***/ }),

/***/ 27:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin

    if(true) {
      (function() {
        var localsJsonString = undefined;
        // 1743918403563
        var cssReload = __webpack_require__(28)(module.id, {});
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
/******/ 	__webpack_require__.h = function() { return "271f0ea93d3da6705c7f"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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cGFjazovL3dlYnBhY2svLi9jc3Mvc3R5bGUuY3NzP2VhNzgiLCJ3ZWJwYWNrOi8vd2VicGFjay93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY3JlYXRlUm9vdCB9IGZyb20gXCJyZWFjdC1kb20vY2xpZW50XCI7XG5pbXBvcnQgJy4uL2Nzcy9zdHlsZS5jc3MnOyAgLy8gSW1wb3J0dWplbWUgQ1NTIHNvdWJvclxuXG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuL2NvbXBvbmVudHMuanMvSGVhZGVyXCI7ICAvLyBJbXBvcnR1amVtZSBrb21wb25lbnR1IEhlYWRlclxuXG5jb25zdCBBcHAgPSAoKSA9PiB7XG4gIGNvbnN0IFtyYWNlcywgc2V0UmFjZXNdID0gdXNlU3RhdGUoW10pOyAgLy8gU3RhdiBwcm8gesOhdm9keVxuICBjb25zdCBbZHJpdmVycywgc2V0RHJpdmVyc10gPSB1c2VTdGF0ZShbXSk7ICAvLyBTdGF2IHBybyBqZXpkY2VcbiAgY29uc3QgW2lzUmFjZXNWaXNpYmxlLCBzZXRJc1JhY2VzVmlzaWJsZV0gPSB1c2VTdGF0ZSh0cnVlKTsgIC8vIFN0YXYgcHJvIHpvYnJhemVuw60gesOhdm9kxa8vamV6ZGPFr1xuXG4gIC8vIEZ1bmtjZSBwcm8gbmHEjXRlbsOtIHrDoXZvZMWvXG4gIGNvbnN0IGZldGNoUmFjZXMgPSAoKSA9PiB7XG4gICAgY29uc3QgYXBpVXJsID0gJ2h0dHBzOi8vZXJnYXN0LmNvbS9hcGkvZjEvMjAyNC5qc29uJztcblxuICAgIGZldGNoKGFwaVVybClcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQ2h5YmEgcMWZaSB6w61za8OhdsOhbsOtIGRhdCcpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gICAgICB9KVxuICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgIHNldFJhY2VzKGRhdGEuTVJEYXRhLlJhY2VUYWJsZS5SYWNlcyk7ICAvLyBOYXN0YXbDrW1lIGRhdGEgbyB6w6F2b2RlY2hcbiAgICAgICAgc2V0SXNSYWNlc1Zpc2libGUodHJ1ZSk7ICAvLyBab2JyYXrDrW1lIHrDoXZvZHlcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdDaHliYTonLCBlcnJvcik7XG4gICAgICB9KTtcbiAgfTtcblxuICAvLyBGdW5rY2UgcHJvIG5hxI10ZW7DrSBqZXpkY8WvXG4gIGNvbnN0IGZldGNoRHJpdmVycyA9ICgpID0+IHtcbiAgICBjb25zdCBhcGlVcmwgPSAnaHR0cHM6Ly9lcmdhc3QuY29tL2FwaS9mMS8yMDI0L2RyaXZlcnMuanNvbic7XG5cbiAgICBmZXRjaChhcGlVcmwpXG4gICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NoeWJhIHDFmWkgesOtc2vDoXbDoW7DrSBkYXQnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICAgICAgfSlcbiAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICBzZXREcml2ZXJzKGRhdGEuTVJEYXRhLkRyaXZlclRhYmxlLkRyaXZlcnMpOyAgLy8gTmFzdGF2w61tZSBkYXRhIG8gamV6ZGPDrWNoXG4gICAgICAgIHNldElzUmFjZXNWaXNpYmxlKGZhbHNlKTsgIC8vIFpvYnJhesOtbWUgamV6ZGNlXG4gICAgICB9KVxuICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgY29uc29sZS5lcnJvcignQ2h5YmE6JywgZXJyb3IpO1xuICAgICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWRlciAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXpuYW1cIj5cbiAgICAgICAge2lzUmFjZXNWaXNpYmxlID8gKFxuICAgICAgICAgIDx1bCBpZD1cInJhY2VMaXN0XCI+XG4gICAgICAgICAgICB7cmFjZXMubWFwKHJhY2UgPT4gKFxuICAgICAgICAgICAgICA8bGkga2V5PXtyYWNlLnJvdW5kfT5cbiAgICAgICAgICAgICAgICB7YCR7cmFjZS5yb3VuZH06ICR7cmFjZS5yYWNlTmFtZX0gKCR7cmFjZS5kYXRlfSkgLSAke3JhY2UuQ2lyY3VpdC5jaXJjdWl0TmFtZX1gfVxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8dWwgaWQ9XCJkcml2ZXJMaXN0XCI+XG4gICAgICAgICAgICB7ZHJpdmVycy5tYXAoZHJpdmVyID0+IChcbiAgICAgICAgICAgICAgPGxpIGtleT17ZHJpdmVyLmRyaXZlcklkfT5cbiAgICAgICAgICAgICAgICB7YCR7ZHJpdmVyLmdpdmVuTmFtZX0gJHtkcml2ZXIuZmFtaWx5TmFtZX0gKCR7ZHJpdmVyLm5hdGlvbmFsaXR5fSkgLSAke2RyaXZlci5wZXJtYW5lbnROdW1iZXIgPz8gJ2JleiDEjcOtc2xhJ31gfVxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufTtcblxuY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhcHBcIik7XG5jb25zdCByb290ID0gY3JlYXRlUm9vdChjb250YWluZXIpO1xucm9vdC5yZW5kZXIoPEFwcCAvPik7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTtcbiAgICBpZihtb2R1bGUuaG90KSB7XG4gICAgICAoZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBsb2NhbHNKc29uU3RyaW5nID0gdW5kZWZpbmVkO1xuICAgICAgICAvLyAxNzQzOTE4NDAzNTYzXG4gICAgICAgIHZhciBjc3NSZWxvYWQgPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvaG1yL2hvdE1vZHVsZVJlcGxhY2VtZW50LmpzXCIpKG1vZHVsZS5pZCwge30pO1xuICAgICAgICAvLyBvbmx5IGludmFsaWRhdGUgd2hlbiBsb2NhbHMgY2hhbmdlXG4gICAgICAgIGlmIChcbiAgICAgICAgICBtb2R1bGUuaG90LmRhdGEgJiZcbiAgICAgICAgICBtb2R1bGUuaG90LmRhdGEudmFsdWUgJiZcbiAgICAgICAgICBtb2R1bGUuaG90LmRhdGEudmFsdWUgIT09IGxvY2Fsc0pzb25TdHJpbmdcbiAgICAgICAgKSB7XG4gICAgICAgICAgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICAgICAgfVxuICAgICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgIGRhdGEudmFsdWUgPSBsb2NhbHNKc29uU3RyaW5nO1xuICAgICAgICAgIGNzc1JlbG9hZCgpO1xuICAgICAgICB9KTtcbiAgICAgIH0pKCk7XG4gICAgfVxuICAiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSBmdW5jdGlvbigpIHsgcmV0dXJuIFwiMjcxZjBlYTkzZDNkYTY3MDVjN2ZcIjsgfSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiY3JlYXRlUm9vdCIsIkhlYWRlciIsIkFwcCIsIl91c2VTdGF0ZSIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsInJhY2VzIiwic2V0UmFjZXMiLCJfdXNlU3RhdGUzIiwiX3VzZVN0YXRlNCIsImRyaXZlcnMiLCJzZXREcml2ZXJzIiwiX3VzZVN0YXRlNSIsIl91c2VTdGF0ZTYiLCJpc1JhY2VzVmlzaWJsZSIsInNldElzUmFjZXNWaXNpYmxlIiwiY3JlYXRlRWxlbWVudCIsIkZyYWdtZW50IiwiY2xhc3NOYW1lIiwiaWQiLCJtYXAiLCJyYWNlIiwia2V5Iiwicm91bmQiLCJjb25jYXQiLCJyYWNlTmFtZSIsImRhdGUiLCJDaXJjdWl0IiwiY2lyY3VpdE5hbWUiLCJkcml2ZXIiLCJkcml2ZXJJZCIsImdpdmVuTmFtZSIsImZhbWlseU5hbWUiLCJuYXRpb25hbGl0eSIsInBlcm1hbmVudE51bWJlciIsImNvbnRhaW5lciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJyb290IiwicmVuZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==