"use strict";
self["webpackHotUpdatewebpack"](0,{

/***/ 23:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27);
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }

 // Importujeme CSS soubor

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

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "aplikace"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "F1 Z\xE1vody 2024"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "buttons"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: function () {
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
    }
  }, "Na\u010D\xEDst z\xE1vody"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: function () {
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
  }, "Na\u010D\xEDst jezdce")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
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
  })))));
};
var container = document.getElementById("app");
var root = createRoot(container);
root.render(/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(App, null));

/***/ }),

/***/ 27:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin

    if(true) {
      (function() {
        var localsJsonString = undefined;
        // 1743917857376
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
/******/ 	__webpack_require__.h = function() { return "433669d0d72c60c0310c"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVU7QUFDcEIsVUFBVSxVQUFVO0FBQ3BCLFVBQVUsVUFBVTtBQUNwQjtBQUNBLFVBQVUsVUFBVTtBQUNwQixVQUFVO0FBQ1YsVUFBVSxpQkFBaUI7QUFDM0I7QUFDQSxRQUFRLFVBQVU7QUFDbEI7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQTs7Ozs7Ozs7VUN2QkEscUNBQXFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFjay8uL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLy4vY3NzL3N0eWxlLmNzcz9lYTc4Iiwid2VicGFjazovL3dlYnBhY2svd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCAnLi4vY3NzL3N0eWxlLmNzcyc7ICAvLyBJbXBvcnR1amVtZSBDU1Mgc291Ym9yXG5cbmNvbnN0IEFwcCA9ICgpID0+IHtcbiAgY29uc3QgW3JhY2VzLCBzZXRSYWNlc10gPSB1c2VTdGF0ZShbXSk7ICAvLyBTdGF2IHBybyB6w6F2b2R5XG4gIGNvbnN0IFtkcml2ZXJzLCBzZXREcml2ZXJzXSA9IHVzZVN0YXRlKFtdKTsgIC8vIFN0YXYgcHJvIGplemRjZVxuICBjb25zdCBbaXNSYWNlc1Zpc2libGUsIHNldElzUmFjZXNWaXNpYmxlXSA9IHVzZVN0YXRlKHRydWUpOyAgLy8gU3RhdiBwcm8gem9icmF6ZW7DrSB6w6F2b2TFry9qZXpkY8WvXG5cbiAgLy8gRnVua2NlIHBybyBuYcSNdGVuw60gesOhdm9kxa9cbiAgY29uc3QgZmV0Y2hSYWNlcyA9ICgpID0+IHtcbiAgICBjb25zdCBhcGlVcmwgPSAnaHR0cHM6Ly9lcmdhc3QuY29tL2FwaS9mMS8yMDI0Lmpzb24nO1xuXG4gICAgZmV0Y2goYXBpVXJsKVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDaHliYSBwxZlpIHrDrXNrw6F2w6Fuw60gZGF0Jyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgICAgIH0pXG4gICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgc2V0UmFjZXMoZGF0YS5NUkRhdGEuUmFjZVRhYmxlLlJhY2VzKTsgIC8vIE5hc3RhdsOtbWUgZGF0YSBvIHrDoXZvZGVjaFxuICAgICAgICBzZXRJc1JhY2VzVmlzaWJsZSh0cnVlKTsgIC8vIFpvYnJhesOtbWUgesOhdm9keVxuICAgICAgfSlcbiAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0NoeWJhOicsIGVycm9yKTtcbiAgICAgIH0pO1xuICB9O1xuXG4gIC8vIEZ1bmtjZSBwcm8gbmHEjXRlbsOtIGplemRjxa9cbiAgY29uc3QgZmV0Y2hEcml2ZXJzID0gKCkgPT4ge1xuICAgIGNvbnN0IGFwaVVybCA9ICdodHRwczovL2VyZ2FzdC5jb20vYXBpL2YxLzIwMjQvZHJpdmVycy5qc29uJztcblxuICAgIGZldGNoKGFwaVVybClcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQ2h5YmEgcMWZaSB6w61za8OhdsOhbsOtIGRhdCcpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gICAgICB9KVxuICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgIHNldERyaXZlcnMoZGF0YS5NUkRhdGEuRHJpdmVyVGFibGUuRHJpdmVycyk7ICAvLyBOYXN0YXbDrW1lIGRhdGEgbyBqZXpkY8OtY2hcbiAgICAgICAgc2V0SXNSYWNlc1Zpc2libGUoZmFsc2UpOyAgLy8gWm9icmF6w61tZSBqZXpkY2VcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdDaHliYTonLCBlcnJvcik7XG4gICAgICB9KTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImFwbGlrYWNlXCI+XG4gICAgICAgIDxoMT5GMSBaw6F2b2R5IDIwMjQ8L2gxPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbnNcIj5cbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2ZldGNoUmFjZXN9Pk5hxI3DrXN0IHrDoXZvZHk8L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2ZldGNoRHJpdmVyc30+TmHEjcOtc3QgamV6ZGNlPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlem5hbVwiPlxuICAgICAgICAgIHtpc1JhY2VzVmlzaWJsZSA/IChcbiAgICAgICAgICAgIDx1bCBpZD1cInJhY2VMaXN0XCI+XG4gICAgICAgICAgICAgIHtyYWNlcy5tYXAocmFjZSA9PiAoXG4gICAgICAgICAgICAgICAgPGxpIGtleT17cmFjZS5yb3VuZH0+XG4gICAgICAgICAgICAgICAgICB7YCR7cmFjZS5yb3VuZH06ICR7cmFjZS5yYWNlTmFtZX0gKCR7cmFjZS5kYXRlfSkgLSAke3JhY2UuQ2lyY3VpdC5jaXJjdWl0TmFtZX1gfVxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPHVsIGlkPVwiZHJpdmVyTGlzdFwiPlxuICAgICAgICAgICAgICB7ZHJpdmVycy5tYXAoZHJpdmVyID0+IChcbiAgICAgICAgICAgICAgICA8bGkga2V5PXtkcml2ZXIuZHJpdmVySWR9PlxuICAgICAgICAgICAgICAgICAge2Ake2RyaXZlci5naXZlbk5hbWV9ICR7ZHJpdmVyLmZhbWlseU5hbWV9ICgke2RyaXZlci5uYXRpb25hbGl0eX0pIC0gJHtkcml2ZXIucGVybWFuZW50TnVtYmVyID8/ICdiZXogxI3DrXNsYSd9YH1cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXBwXCIpO1xuY29uc3Qgcm9vdCA9IGNyZWF0ZVJvb3QoY29udGFpbmVyKTtcbnJvb3QucmVuZGVyKDxBcHAvPik7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTtcbiAgICBpZihtb2R1bGUuaG90KSB7XG4gICAgICAoZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBsb2NhbHNKc29uU3RyaW5nID0gdW5kZWZpbmVkO1xuICAgICAgICAvLyAxNzQzOTE3ODU3Mzc2XG4gICAgICAgIHZhciBjc3NSZWxvYWQgPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvaG1yL2hvdE1vZHVsZVJlcGxhY2VtZW50LmpzXCIpKG1vZHVsZS5pZCwge30pO1xuICAgICAgICAvLyBvbmx5IGludmFsaWRhdGUgd2hlbiBsb2NhbHMgY2hhbmdlXG4gICAgICAgIGlmIChcbiAgICAgICAgICBtb2R1bGUuaG90LmRhdGEgJiZcbiAgICAgICAgICBtb2R1bGUuaG90LmRhdGEudmFsdWUgJiZcbiAgICAgICAgICBtb2R1bGUuaG90LmRhdGEudmFsdWUgIT09IGxvY2Fsc0pzb25TdHJpbmdcbiAgICAgICAgKSB7XG4gICAgICAgICAgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICAgICAgfVxuICAgICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgIGRhdGEudmFsdWUgPSBsb2NhbHNKc29uU3RyaW5nO1xuICAgICAgICAgIGNzc1JlbG9hZCgpO1xuICAgICAgICB9KTtcbiAgICAgIH0pKCk7XG4gICAgfVxuICAiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSBmdW5jdGlvbigpIHsgcmV0dXJuIFwiNDMzNjY5ZDBkNzJjNjBjMDMxMGNcIjsgfSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiQXBwIiwiX3VzZVN0YXRlIiwiX3VzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5IiwicmFjZXMiLCJzZXRSYWNlcyIsIl91c2VTdGF0ZTMiLCJfdXNlU3RhdGU0IiwiZHJpdmVycyIsInNldERyaXZlcnMiLCJfdXNlU3RhdGU1IiwiX3VzZVN0YXRlNiIsImlzUmFjZXNWaXNpYmxlIiwic2V0SXNSYWNlc1Zpc2libGUiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwib25DbGljayIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwib2siLCJFcnJvciIsImpzb24iLCJkYXRhIiwiTVJEYXRhIiwiUmFjZVRhYmxlIiwiUmFjZXMiLCJlcnJvciIsImNvbnNvbGUiLCJEcml2ZXJUYWJsZSIsIkRyaXZlcnMiLCJpZCIsIm1hcCIsInJhY2UiLCJrZXkiLCJyb3VuZCIsImNvbmNhdCIsInJhY2VOYW1lIiwiZGF0ZSIsIkNpcmN1aXQiLCJjaXJjdWl0TmFtZSIsImRyaXZlciIsImRyaXZlcklkIiwiZ2l2ZW5OYW1lIiwiZmFtaWx5TmFtZSIsIm5hdGlvbmFsaXR5IiwicGVybWFuZW50TnVtYmVyIiwiY29udGFpbmVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInJvb3QiLCJjcmVhdGVSb290IiwicmVuZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==