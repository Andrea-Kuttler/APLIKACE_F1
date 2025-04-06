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
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Main__WEBPACK_IMPORTED_MODULE_4__["default"], null));
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
        // 1743920341365
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

/***/ 38:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function Main() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
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
}
/* harmony default export */ __webpack_exports__["default"] = (Main);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "b195e408007921c2df5c"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFJSyxNQUFNLENBQUNHLFVBQVUsUUFBQVIsTUFBQSxDQUFLSyxNQUFNLENBQUNJLFdBQVcsVUFBQVQsTUFBQSxDQUFPSyxNQUFNLENBQUNLLGVBQWUsSUFBSSxXQUFXLENBQzVHLENBQUM7RUFBQSxDQUNSLENBQ0QsQ0FFUCxDQUNYLENBQUM7QUFBQztBQUVSLCtEQUFldkQsSUFBSTs7Ozs7Ozs7VUMxQm5CLHFDQUFxQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnBhY2svLi9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay8uL2Nzcy9zdHlsZS5jc3M/ZWE3OCIsIndlYnBhY2s6Ly93ZWJwYWNrLy4vanMvY29tcG9uZW50cy9NYWluLmpzIiwid2VicGFjazovL3dlYnBhY2svd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNyZWF0ZVJvb3QgfSBmcm9tIFwicmVhY3QtZG9tL2NsaWVudFwiO1xuaW1wb3J0ICcuLi9jc3Mvc3R5bGUuY3NzJzsgIC8vIEltcG9ydHVqZW1lIENTUyBzb3Vib3JcblxuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi9jb21wb25lbnRzL0hlYWRlclwiOyAgLy8gSW1wb3J0dWplbWUga29tcG9uZW50dSBIZWFkZXJcbmltcG9ydCBNYWluIGZyb20gXCIuL2NvbXBvbmVudHMvTWFpblwiOyAgLy8gSW1wb3J0dWplbWUga29tcG9uZW50dSBNYWluXG5cbmNvbnN0IEFwcCA9ICgpID0+IHtcbiAgICBjb25zdCBbcmFjZXMsIHNldFJhY2VzXSA9IHVzZVN0YXRlKFtdKTsgIC8vIFN0YXYgcHJvIHrDoXZvZHlcbiAgICBjb25zdCBbZHJpdmVycywgc2V0RHJpdmVyc10gPSB1c2VTdGF0ZShbXSk7ICAvLyBTdGF2IHBybyBqZXpkY2VcbiAgICBjb25zdCBbaXNSYWNlc1Zpc2libGUsIHNldElzUmFjZXNWaXNpYmxlXSA9IHVzZVN0YXRlKHRydWUpOyAgLy8gU3RhdiBwcm8gem9icmF6ZW7DrSB6w6F2b2TFry9qZXpkY8WvXG5cbiAgICAvLyBGdW5rY2UgcHJvIG5hxI10ZW7DrSB6w6F2b2TFr1xuICAgIGNvbnN0IGZldGNoUmFjZXMgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGFwaVVybCA9ICdodHRwczovL2VyZ2FzdC5jb20vYXBpL2YxLzIwMjQuanNvbic7XG5cbiAgICAgICAgZmV0Y2goYXBpVXJsKVxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDaHliYSBwxZlpIHrDrXNrw6F2w6Fuw60gZGF0Jyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgc2V0UmFjZXMoZGF0YS5NUkRhdGEuUmFjZVRhYmxlLlJhY2VzKTsgIC8vIE5hc3RhdsOtbWUgZGF0YSBvIHrDoXZvZGVjaFxuICAgICAgICAgICAgICAgIHNldElzUmFjZXNWaXNpYmxlKHRydWUpOyAgLy8gWm9icmF6w61tZSB6w6F2b2R5XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdDaHliYTonLCBlcnJvcik7XG4gICAgICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgLy8gRnVua2NlIHBybyBuYcSNdGVuw60gamV6ZGPFr1xuICAgIGNvbnN0IGZldGNoRHJpdmVycyA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgYXBpVXJsID0gJ2h0dHBzOi8vZXJnYXN0LmNvbS9hcGkvZjEvMjAyNC9kcml2ZXJzLmpzb24nO1xuXG4gICAgICAgIGZldGNoKGFwaVVybClcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQ2h5YmEgcMWZaSB6w61za8OhdsOhbsOtIGRhdCcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgIHNldERyaXZlcnMoZGF0YS5NUkRhdGEuRHJpdmVyVGFibGUuRHJpdmVycyk7ICAvLyBOYXN0YXbDrW1lIGRhdGEgbyBqZXpkY8OtY2hcbiAgICAgICAgICAgICAgICBzZXRJc1JhY2VzVmlzaWJsZShmYWxzZSk7ICAvLyBab2JyYXrDrW1lIGplemRjZVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignQ2h5YmE6JywgZXJyb3IpO1xuICAgICAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8SGVhZGVyXG4gICAgICAgICAgICAgICAgb25Mb2FkUmFjZXM9e2ZldGNoUmFjZXN9XG4gICAgICAgICAgICAgICAgb25Mb2FkRHJpdmVycz17ZmV0Y2hEcml2ZXJzfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxNYWluIC8+XG4gICAgICAgIDwvPlxuICAgICk7XG59O1xuXG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFwcFwiKTtcbmNvbnN0IHJvb3QgPSBjcmVhdGVSb290KGNvbnRhaW5lcik7XG5yb290LnJlbmRlcig8QXBwIC8+KTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9O1xuICAgIGlmKG1vZHVsZS5ob3QpIHtcbiAgICAgIChmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGxvY2Fsc0pzb25TdHJpbmcgPSB1bmRlZmluZWQ7XG4gICAgICAgIC8vIDE3NDM5MjAzNDEzNjVcbiAgICAgICAgdmFyIGNzc1JlbG9hZCA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9obXIvaG90TW9kdWxlUmVwbGFjZW1lbnQuanNcIikobW9kdWxlLmlkLCB7fSk7XG4gICAgICAgIC8vIG9ubHkgaW52YWxpZGF0ZSB3aGVuIGxvY2FscyBjaGFuZ2VcbiAgICAgICAgaWYgKFxuICAgICAgICAgIG1vZHVsZS5ob3QuZGF0YSAmJlxuICAgICAgICAgIG1vZHVsZS5ob3QuZGF0YS52YWx1ZSAmJlxuICAgICAgICAgIG1vZHVsZS5ob3QuZGF0YS52YWx1ZSAhPT0gbG9jYWxzSnNvblN0cmluZ1xuICAgICAgICApIHtcbiAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgICAgICB9XG4gICAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgZGF0YS52YWx1ZSA9IGxvY2Fsc0pzb25TdHJpbmc7XG4gICAgICAgICAgY3NzUmVsb2FkKCk7XG4gICAgICAgIH0pO1xuICAgICAgfSkoKTtcbiAgICB9XG4gICIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuXG5mdW5jdGlvbiBNYWluKCkge1xucmV0dXJuIChcbiAgICA8PiAgICBcbjxkaXYgY2xhc3NOYW1lPVwic2V6bmFtXCI+XG4gICAgICAgICAgICAgICAge2lzUmFjZXNWaXNpYmxlID8gKFxuICAgICAgICAgICAgICAgICAgICA8dWwgaWQ9XCJyYWNlTGlzdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge3JhY2VzLm1hcChyYWNlID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtyYWNlLnJvdW5kfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2Ake3JhY2Uucm91bmR9OiAke3JhY2UucmFjZU5hbWV9ICgke3JhY2UuZGF0ZX0pIC0gJHtyYWNlLkNpcmN1aXQuY2lyY3VpdE5hbWV9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgPHVsIGlkPVwiZHJpdmVyTGlzdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge2RyaXZlcnMubWFwKGRyaXZlciA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17ZHJpdmVyLmRyaXZlcklkfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2Ake2RyaXZlci5naXZlbk5hbWV9ICR7ZHJpdmVyLmZhbWlseU5hbWV9ICgke2RyaXZlci5uYXRpb25hbGl0eX0pIC0gJHtkcml2ZXIucGVybWFuZW50TnVtYmVyID8/ICdiZXogxI3DrXNsYSd9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgIDwvPil9XG5cbmV4cG9ydCBkZWZhdWx0IE1haW47IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gZnVuY3Rpb24oKSB7IHJldHVybiBcImIxOTVlNDA4MDA3OTIxYzJkZjVjXCI7IH0iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsImNyZWF0ZVJvb3QiLCJIZWFkZXIiLCJNYWluIiwiQXBwIiwiX3VzZVN0YXRlIiwiX3VzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5IiwicmFjZXMiLCJzZXRSYWNlcyIsIl91c2VTdGF0ZTMiLCJfdXNlU3RhdGU0IiwiZHJpdmVycyIsInNldERyaXZlcnMiLCJfdXNlU3RhdGU1IiwiX3VzZVN0YXRlNiIsImlzUmFjZXNWaXNpYmxlIiwic2V0SXNSYWNlc1Zpc2libGUiLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJvbkxvYWRSYWNlcyIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwib2siLCJFcnJvciIsImpzb24iLCJkYXRhIiwiTVJEYXRhIiwiUmFjZVRhYmxlIiwiUmFjZXMiLCJlcnJvciIsImNvbnNvbGUiLCJvbkxvYWREcml2ZXJzIiwiRHJpdmVyVGFibGUiLCJEcml2ZXJzIiwiY29udGFpbmVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInJvb3QiLCJyZW5kZXIiLCJ1c2VFZmZlY3QiLCJjbGFzc05hbWUiLCJpZCIsIm1hcCIsInJhY2UiLCJrZXkiLCJyb3VuZCIsImNvbmNhdCIsInJhY2VOYW1lIiwiZGF0ZSIsIkNpcmN1aXQiLCJjaXJjdWl0TmFtZSIsImRyaXZlciIsImRyaXZlcklkIiwiZ2l2ZW5OYW1lIiwiZmFtaWx5TmFtZSIsIm5hdGlvbmFsaXR5IiwicGVybWFuZW50TnVtYmVyIl0sInNvdXJjZVJvb3QiOiIifQ==