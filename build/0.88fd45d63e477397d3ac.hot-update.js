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
/* harmony import */ var _components_Dropdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(40);
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }


 // Importujeme CSS soubor

 // Importujeme komponentu Header
 // Importujeme komponentu Main
 // Importujeme komponentu Dropdown

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

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Dropdown__WEBPACK_IMPORTED_MODULE_5__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Header__WEBPACK_IMPORTED_MODULE_3__["default"], {
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
        // 1745753862656
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
  

/***/ }),

/***/ 40:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }

var Dropdown = function () {
  var years = Array.from({
    length: 2025 - 1950 + 1
  }, function (_, i) {
    return 1950 + i;
  });
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(2025),
    _useState2 = _slicedToArray(_useState, 2),
    selectedYear = _useState2[0],
    setSelectedYear = _useState2[1];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "relative inline-block w-64"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("select", {
    value: selectedYear,
    onChange: function (e) {
      setSelectedYear(parseInt(e.target.value));
    },
    className: "w-full p-2 bg-white border rounded-2xl shadow"
  }, years.map(function (year) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
      key: year,
      value: year
    }, year);
  })));
};
/* harmony default export */ __webpack_exports__["default"] = (Dropdown);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "ceb196afc4f31df453ef"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNELENBQUMsQ0FBQ0UsTUFBTSxDQUFDSixLQUFLLENBQUMsQ0FBQztJQUMzQyxDQU02QjtJQUN2QkQsU0FBUyxFQUFDO0VBQStDLEdBRXhEUixLQUFLLENBQUNjLEdBQUcsQ0FBQyxVQUFDQyxJQUFJO0lBQUEsb0JBQ2QxRCwwREFBQTtNQUFRMkQsR0FBRyxFQUFFRCxJQUFLO01BQUNOLEtBQUssRUFBRU07SUFBSyxHQUM1QkEsSUFDSyxDQUFDO0VBQUEsQ0FDVixDQUNLLENBQ0wsQ0FBQztBQUVWLENBQUM7QUFFRCwrREFBZXJELFFBQVE7Ozs7Ozs7O1VDM0J2QixxQ0FBcUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLy4vanMvYXBwLmpzIiwid2VicGFjazovL3dlYnBhY2svLi9jc3Mvc3R5bGUuY3NzP2VhNzgiLCJ3ZWJwYWNrOi8vd2VicGFjay8uL2pzL2NvbXBvbmVudHMvRHJvcGRvd24uanMiLCJ3ZWJwYWNrOi8vd2VicGFjay93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY3JlYXRlUm9vdCB9IGZyb20gXCJyZWFjdC1kb20vY2xpZW50XCI7XG5pbXBvcnQgJy4uL2Nzcy9zdHlsZS5jc3MnOyAgLy8gSW1wb3J0dWplbWUgQ1NTIHNvdWJvclxuXG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuL2NvbXBvbmVudHMvSGVhZGVyXCI7ICAvLyBJbXBvcnR1amVtZSBrb21wb25lbnR1IEhlYWRlclxuaW1wb3J0IE1haW4gZnJvbSBcIi4vY29tcG9uZW50cy9NYWluXCI7ICAvLyBJbXBvcnR1amVtZSBrb21wb25lbnR1IE1haW5cbmltcG9ydCBEcm9wZG93biBmcm9tICcuL2NvbXBvbmVudHMvRHJvcGRvd24nOyAvLyBJbXBvcnR1amVtZSBrb21wb25lbnR1IERyb3Bkb3duXG5cbmNvbnN0IEFwcCA9ICgpID0+IHtcbiAgICBjb25zdCBbcmFjZXMsIHNldFJhY2VzXSA9IHVzZVN0YXRlKFtdKTsgIC8vIFN0YXYgcHJvIHrDoXZvZHlcbiAgICBjb25zdCBbZHJpdmVycywgc2V0RHJpdmVyc10gPSB1c2VTdGF0ZShbXSk7ICAvLyBTdGF2IHBybyBqZXpkY2VcbiAgICBjb25zdCBbaXNSYWNlc1Zpc2libGUsIHNldElzUmFjZXNWaXNpYmxlXSA9IHVzZVN0YXRlKHRydWUpOyAgLy8gU3RhdiBwcm8gem9icmF6ZW7DrSB6w6F2b2TFry9qZXpkY8WvXG5cbiAgICAvLyBGdW5rY2UgcHJvIG5hxI10ZW7DrSB6w6F2b2TFr1xuICAgIGNvbnN0IGZldGNoUmFjZXMgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGFwaVVybCA9ICdodHRwczovL2VyZ2FzdC5jb20vYXBpL2YxLzIwMjQuanNvbic7XG5cbiAgICAgICAgZmV0Y2goYXBpVXJsKVxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDaHliYSBwxZlpIHrDrXNrw6F2w6Fuw60gZGF0Jyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgc2V0UmFjZXMoZGF0YS5NUkRhdGEuUmFjZVRhYmxlLlJhY2VzKTsgIC8vIE5hc3RhdsOtbWUgZGF0YSBvIHrDoXZvZGVjaFxuICAgICAgICAgICAgICAgIHNldElzUmFjZXNWaXNpYmxlKHRydWUpOyAgLy8gWm9icmF6w61tZSB6w6F2b2R5XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdDaHliYTonLCBlcnJvcik7XG4gICAgICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgLy8gRnVua2NlIHBybyBuYcSNdGVuw60gamV6ZGPFr1xuICAgIGNvbnN0IGZldGNoRHJpdmVycyA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgYXBpVXJsID0gJ2h0dHBzOi8vZXJnYXN0LmNvbS9hcGkvZjEvMjAyNC9kcml2ZXJzLmpzb24nO1xuXG4gICAgICAgIGZldGNoKGFwaVVybClcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQ2h5YmEgcMWZaSB6w61za8OhdsOhbsOtIGRhdCcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgIHNldERyaXZlcnMoZGF0YS5NUkRhdGEuRHJpdmVyVGFibGUuRHJpdmVycyk7ICAvLyBOYXN0YXbDrW1lIGRhdGEgbyBqZXpkY8OtY2hcbiAgICAgICAgICAgICAgICBzZXRJc1JhY2VzVmlzaWJsZShmYWxzZSk7ICAvLyBab2JyYXrDrW1lIGplemRjZVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignQ2h5YmE6JywgZXJyb3IpO1xuICAgICAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8RHJvcGRvd24gLz5cbiAgICAgICAgICAgIDxIZWFkZXJcbiAgICAgICAgICAgICAgICBvbkxvYWRSYWNlcz17ZmV0Y2hSYWNlc31cbiAgICAgICAgICAgICAgICBvbkxvYWREcml2ZXJzPXtmZXRjaERyaXZlcnN9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICA8TWFpbiBcbiAgICAgICAgICAgICAgICBpc1JhY2VzVmlzaWJsZT17aXNSYWNlc1Zpc2libGV9XG4gICAgICAgICAgICAgICAgcmFjZXM9e3JhY2VzfVxuICAgICAgICAgICAgICAgIGRyaXZlcnM9e2RyaXZlcnN9XG4gICAgICAgICAgICAvPlxuICAgICAgICA8Lz5cbiAgICApO1xufTtcblxuY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhcHBcIik7XG5jb25zdCByb290ID0gY3JlYXRlUm9vdChjb250YWluZXIpO1xucm9vdC5yZW5kZXIoPEFwcCAvPik7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTtcbiAgICBpZihtb2R1bGUuaG90KSB7XG4gICAgICAoZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBsb2NhbHNKc29uU3RyaW5nID0gdW5kZWZpbmVkO1xuICAgICAgICAvLyAxNzQ1NzUzODYyNjU2XG4gICAgICAgIHZhciBjc3NSZWxvYWQgPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvaG1yL2hvdE1vZHVsZVJlcGxhY2VtZW50LmpzXCIpKG1vZHVsZS5pZCwge30pO1xuICAgICAgICAvLyBvbmx5IGludmFsaWRhdGUgd2hlbiBsb2NhbHMgY2hhbmdlXG4gICAgICAgIGlmIChcbiAgICAgICAgICBtb2R1bGUuaG90LmRhdGEgJiZcbiAgICAgICAgICBtb2R1bGUuaG90LmRhdGEudmFsdWUgJiZcbiAgICAgICAgICBtb2R1bGUuaG90LmRhdGEudmFsdWUgIT09IGxvY2Fsc0pzb25TdHJpbmdcbiAgICAgICAgKSB7XG4gICAgICAgICAgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICAgICAgfVxuICAgICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgIGRhdGEudmFsdWUgPSBsb2NhbHNKc29uU3RyaW5nO1xuICAgICAgICAgIGNzc1JlbG9hZCgpO1xuICAgICAgICB9KTtcbiAgICAgIH0pKCk7XG4gICAgfVxuICAiLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgRHJvcGRvd24gPSAoKSA9PiB7XG4gIGNvbnN0IHllYXJzID0gQXJyYXkuZnJvbSh7IGxlbmd0aDogMjAyNSAtIDE5NTAgKyAxIH0sIChfLCBpKSA9PiAxOTUwICsgaSk7XG4gIGNvbnN0IFtzZWxlY3RlZFllYXIsIHNldFNlbGVjdGVkWWVhcl0gPSB1c2VTdGF0ZSgyMDI1KTtcblxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZSkgPT4ge1xuICAgIHNldFNlbGVjdGVkWWVhcihwYXJzZUludChlLnRhcmdldC52YWx1ZSkpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBpbmxpbmUtYmxvY2sgdy02NFwiPlxuICAgICAgPHNlbGVjdFxuICAgICAgICB2YWx1ZT17c2VsZWN0ZWRZZWFyfVxuICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgcC0yIGJnLXdoaXRlIGJvcmRlciByb3VuZGVkLTJ4bCBzaGFkb3dcIlxuICAgICAgPlxuICAgICAgICB7eWVhcnMubWFwKCh5ZWFyKSA9PiAoXG4gICAgICAgICAgPG9wdGlvbiBrZXk9e3llYXJ9IHZhbHVlPXt5ZWFyfT5cbiAgICAgICAgICAgIHt5ZWFyfVxuICAgICAgICAgIDwvb3B0aW9uPlxuICAgICAgICApKX1cbiAgICAgIDwvc2VsZWN0PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRHJvcGRvd247IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gZnVuY3Rpb24oKSB7IHJldHVybiBcImNlYjE5NmFmYzRmMzFkZjQ1M2VmXCI7IH0iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsImNyZWF0ZVJvb3QiLCJIZWFkZXIiLCJNYWluIiwiRHJvcGRvd24iLCJBcHAiLCJfdXNlU3RhdGUiLCJfdXNlU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkiLCJyYWNlcyIsInNldFJhY2VzIiwiX3VzZVN0YXRlMyIsIl91c2VTdGF0ZTQiLCJkcml2ZXJzIiwic2V0RHJpdmVycyIsIl91c2VTdGF0ZTUiLCJfdXNlU3RhdGU2IiwiaXNSYWNlc1Zpc2libGUiLCJzZXRJc1JhY2VzVmlzaWJsZSIsImNyZWF0ZUVsZW1lbnQiLCJGcmFnbWVudCIsIm9uTG9hZFJhY2VzIiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJvayIsIkVycm9yIiwianNvbiIsImRhdGEiLCJNUkRhdGEiLCJSYWNlVGFibGUiLCJSYWNlcyIsImVycm9yIiwiY29uc29sZSIsIm9uTG9hZERyaXZlcnMiLCJEcml2ZXJUYWJsZSIsIkRyaXZlcnMiLCJjb250YWluZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwicm9vdCIsInJlbmRlciIsInllYXJzIiwiQXJyYXkiLCJmcm9tIiwibGVuZ3RoIiwiXyIsImkiLCJzZWxlY3RlZFllYXIiLCJzZXRTZWxlY3RlZFllYXIiLCJjbGFzc05hbWUiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZSIsInBhcnNlSW50IiwidGFyZ2V0IiwibWFwIiwieWVhciIsImtleSJdLCJzb3VyY2VSb290IjoiIn0=