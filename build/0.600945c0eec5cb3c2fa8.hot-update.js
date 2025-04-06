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
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
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

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin

    if(true) {
      (function() {
        var localsJsonString = undefined;
        // 1743919679993
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
/******/ 	__webpack_require__.h = function() { return "558d52794d06a7c638a1"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q1QsT0FBTztBQUNQO0FBQ0E7Ozs7Ozs7O1VDdkJBLHFDQUFxQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnBhY2svLi9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay8uL2Nzcy9zdHlsZS5jc3M/ZWE3OCIsIndlYnBhY2s6Ly93ZWJwYWNrL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjcmVhdGVSb290IH0gZnJvbSBcInJlYWN0LWRvbS9jbGllbnRcIjtcbmltcG9ydCAnLi4vY3NzL3N0eWxlLmNzcyc7ICAvLyBJbXBvcnR1amVtZSBDU1Mgc291Ym9yXG5cbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4vY29tcG9uZW50cy9IZWFkZXJcIjsgIC8vIEltcG9ydHVqZW1lIGtvbXBvbmVudHUgSGVhZGVyXG5cbmNvbnN0IEFwcCA9ICgpID0+IHtcbiAgY29uc3QgW3JhY2VzLCBzZXRSYWNlc10gPSB1c2VTdGF0ZShbXSk7ICAvLyBTdGF2IHBybyB6w6F2b2R5XG4gIGNvbnN0IFtkcml2ZXJzLCBzZXREcml2ZXJzXSA9IHVzZVN0YXRlKFtdKTsgIC8vIFN0YXYgcHJvIGplemRjZVxuICBjb25zdCBbaXNSYWNlc1Zpc2libGUsIHNldElzUmFjZXNWaXNpYmxlXSA9IHVzZVN0YXRlKHRydWUpOyAgLy8gU3RhdiBwcm8gem9icmF6ZW7DrSB6w6F2b2TFry9qZXpkY8WvXG5cbiAgLy8gRnVua2NlIHBybyBuYcSNdGVuw60gesOhdm9kxa9cbiAgY29uc3QgZmV0Y2hSYWNlcyA9ICgpID0+IHtcbiAgICBjb25zdCBhcGlVcmwgPSAnaHR0cHM6Ly9lcmdhc3QuY29tL2FwaS9mMS8yMDI0Lmpzb24nO1xuXG4gICAgZmV0Y2goYXBpVXJsKVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDaHliYSBwxZlpIHrDrXNrw6F2w6Fuw60gZGF0Jyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgICAgIH0pXG4gICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgc2V0UmFjZXMoZGF0YS5NUkRhdGEuUmFjZVRhYmxlLlJhY2VzKTsgIC8vIE5hc3RhdsOtbWUgZGF0YSBvIHrDoXZvZGVjaFxuICAgICAgICBzZXRJc1JhY2VzVmlzaWJsZSh0cnVlKTsgIC8vIFpvYnJhesOtbWUgesOhdm9keVxuICAgICAgfSlcbiAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0NoeWJhOicsIGVycm9yKTtcbiAgICAgIH0pO1xuICB9O1xuXG4gIC8vIEZ1bmtjZSBwcm8gbmHEjXRlbsOtIGplemRjxa9cbiAgY29uc3QgZmV0Y2hEcml2ZXJzID0gKCkgPT4ge1xuICAgIGNvbnN0IGFwaVVybCA9ICdodHRwczovL2VyZ2FzdC5jb20vYXBpL2YxLzIwMjQvZHJpdmVycy5qc29uJztcblxuICAgIGZldGNoKGFwaVVybClcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQ2h5YmEgcMWZaSB6w61za8OhdsOhbsOtIGRhdCcpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gICAgICB9KVxuICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgIHNldERyaXZlcnMoZGF0YS5NUkRhdGEuRHJpdmVyVGFibGUuRHJpdmVycyk7ICAvLyBOYXN0YXbDrW1lIGRhdGEgbyBqZXpkY8OtY2hcbiAgICAgICAgc2V0SXNSYWNlc1Zpc2libGUoZmFsc2UpOyAgLy8gWm9icmF6w61tZSBqZXpkY2VcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdDaHliYTonLCBlcnJvcik7XG4gICAgICB9KTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZGVyIFxuICAgICAgICBvbkxvYWRSYWNlcz17ZmV0Y2hSYWNlc30gXG4gICAgICAgIG9uTG9hZERyaXZlcnM9e2ZldGNoRHJpdmVyc30gXG4gICAgICAvPlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlem5hbVwiPlxuICAgICAgICB7aXNSYWNlc1Zpc2libGUgPyAoXG4gICAgICAgICAgPHVsIGlkPVwicmFjZUxpc3RcIj5cbiAgICAgICAgICAgIHtyYWNlcy5tYXAocmFjZSA9PiAoXG4gICAgICAgICAgICAgIDxsaSBrZXk9e3JhY2Uucm91bmR9PlxuICAgICAgICAgICAgICAgIHtgJHtyYWNlLnJvdW5kfTogJHtyYWNlLnJhY2VOYW1lfSAoJHtyYWNlLmRhdGV9KSAtICR7cmFjZS5DaXJjdWl0LmNpcmN1aXROYW1lfWB9XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L3VsPlxuICAgICAgICApIDogKFxuICAgICAgICAgIDx1bCBpZD1cImRyaXZlckxpc3RcIj5cbiAgICAgICAgICAgIHtkcml2ZXJzLm1hcChkcml2ZXIgPT4gKFxuICAgICAgICAgICAgICA8bGkga2V5PXtkcml2ZXIuZHJpdmVySWR9PlxuICAgICAgICAgICAgICAgIHtgJHtkcml2ZXIuZ2l2ZW5OYW1lfSAke2RyaXZlci5mYW1pbHlOYW1lfSAoJHtkcml2ZXIubmF0aW9uYWxpdHl9KSAtICR7ZHJpdmVyLnBlcm1hbmVudE51bWJlciA/PyAnYmV6IMSNw61zbGEnfWB9XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L3VsPlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59O1xuXG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFwcFwiKTtcbmNvbnN0IHJvb3QgPSBjcmVhdGVSb290KGNvbnRhaW5lcik7XG5yb290LnJlbmRlcig8QXBwIC8+KTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9O1xuICAgIGlmKG1vZHVsZS5ob3QpIHtcbiAgICAgIChmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGxvY2Fsc0pzb25TdHJpbmcgPSB1bmRlZmluZWQ7XG4gICAgICAgIC8vIDE3NDM5MTk2Nzk5OTNcbiAgICAgICAgdmFyIGNzc1JlbG9hZCA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9obXIvaG90TW9kdWxlUmVwbGFjZW1lbnQuanNcIikobW9kdWxlLmlkLCB7fSk7XG4gICAgICAgIC8vIG9ubHkgaW52YWxpZGF0ZSB3aGVuIGxvY2FscyBjaGFuZ2VcbiAgICAgICAgaWYgKFxuICAgICAgICAgIG1vZHVsZS5ob3QuZGF0YSAmJlxuICAgICAgICAgIG1vZHVsZS5ob3QuZGF0YS52YWx1ZSAmJlxuICAgICAgICAgIG1vZHVsZS5ob3QuZGF0YS52YWx1ZSAhPT0gbG9jYWxzSnNvblN0cmluZ1xuICAgICAgICApIHtcbiAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgICAgICB9XG4gICAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgZGF0YS52YWx1ZSA9IGxvY2Fsc0pzb25TdHJpbmc7XG4gICAgICAgICAgY3NzUmVsb2FkKCk7XG4gICAgICAgIH0pO1xuICAgICAgfSkoKTtcbiAgICB9XG4gICIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gXCI1NThkNTI3OTRkMDZhN2M2MzhhMVwiOyB9Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJjcmVhdGVSb290IiwiSGVhZGVyIiwiQXBwIiwiX3VzZVN0YXRlIiwiX3VzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5IiwicmFjZXMiLCJzZXRSYWNlcyIsIl91c2VTdGF0ZTMiLCJfdXNlU3RhdGU0IiwiZHJpdmVycyIsInNldERyaXZlcnMiLCJfdXNlU3RhdGU1IiwiX3VzZVN0YXRlNiIsImlzUmFjZXNWaXNpYmxlIiwic2V0SXNSYWNlc1Zpc2libGUiLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJvbkxvYWRSYWNlcyIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwib2siLCJFcnJvciIsImpzb24iLCJkYXRhIiwiTVJEYXRhIiwiUmFjZVRhYmxlIiwiUmFjZXMiLCJlcnJvciIsImNvbnNvbGUiLCJvbkxvYWREcml2ZXJzIiwiRHJpdmVyVGFibGUiLCJEcml2ZXJzIiwiY2xhc3NOYW1lIiwiaWQiLCJtYXAiLCJyYWNlIiwia2V5Iiwicm91bmQiLCJjb25jYXQiLCJyYWNlTmFtZSIsImRhdGUiLCJDaXJjdWl0IiwiY2lyY3VpdE5hbWUiLCJkcml2ZXIiLCJkcml2ZXJJZCIsImdpdmVuTmFtZSIsImZhbWlseU5hbWUiLCJuYXRpb25hbGl0eSIsInBlcm1hbmVudE51bWJlciIsImNvbnRhaW5lciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJyb290IiwicmVuZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==