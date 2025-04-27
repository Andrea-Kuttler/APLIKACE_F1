"use strict";
self["webpackHotUpdatewebpack"](0,{

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin

    if(true) {
      (function() {
        var localsJsonString = undefined;
        // 1745754007760
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

/***/ 37:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Buttons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(38);
/* harmony import */ var _Dropdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(40);
// components/Header.js



function Header(_ref) {
  var onLoadRaces = _ref.onLoadRaces,
    onLoadDrivers = _ref.onLoadDrivers;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "aplikace"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "F1 Z\xE1vody 2024"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Dropdown__WEBPACK_IMPORTED_MODULE_2__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Buttons__WEBPACK_IMPORTED_MODULE_1__["default"], {
    onLoadRaces: onLoadRaces,
    onLoadDrivers: onLoadDrivers
  })));
}
/* harmony default export */ __webpack_exports__["default"] = (Header);

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
    className: "year-dropdown"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("select", {
    value: selectedYear,
    onChange: function (e) {
      setSelectedYear(parseInt(e.target.value));
    }
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
/******/ 	__webpack_require__.h = function() { return "dc0db6d37e6d6458a4a3"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5hNTAwZDc2OWMxNTY5NmYyOGU0Yi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUNVO0FBQ1YsT0FBTyxJQUFVO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixtQkFBTyxDQUFDLEVBQTBFLGVBQWU7QUFDekg7QUFDQTtBQUNBLFVBQVUsVUFBVTtBQUNwQixVQUFVLFVBQVU7QUFDcEIsVUFBVSxVQUFVO0FBQ3BCO0FBQ0EsVUFBVSxVQUFVO0FBQ3BCLFVBQVU7QUFDVixVQUFVLGlCQUFpQjtBQUMzQjtBQUNBLFFBQVEsVUFBVTtBQUNsQjtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBOzs7Ozs7Ozs7Ozs7QUN2QkE7QUFDMEI7QUFDTTtBQUNFO0FBRWxDLFNBQVNHLE1BQU1BLENBQUFDLElBQUEsRUFBaUM7RUFBQSxJQUE5QkMsV0FBVyxHQUFBRCxJQUFBLENBQVhDLFdBQVc7SUFBRUMsYUFBYSxHQUFBRixJQUFBLENBQWJFLGFBQWE7RUFDMUMsb0JBQ0VOLDBEQUFBO0lBQUtRLFNBQVMsRUFBQztFQUFXLGdCQUN4QlIsMERBQUE7SUFBS1EsU0FBUyxFQUFDO0VBQVUsZ0JBQ3ZCUiwwREFBQSxhQUFJLG1CQUFrQixDQUFDLGVBQ3ZCQSwwREFBQSxDQUFDRSxpREFBUSxNQUFFLENBQUMsZUFDWkYsMERBQUEsQ0FBQ0MsZ0RBQU87SUFBQ0ksV0FBVyxFQUFFQSxXQUFZO0lBQUNDLGFBQWEsRUFBRUE7RUFBYyxDQUFFLENBQy9ELENBQ0YsQ0FBQztBQUVWO0FBRUEsK0RBQWVILE1BQU07Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQm1CO0FBRXhDLElBQU1ELFFBQVEsR0FBRyxTQUFBQSxDQUFBLEVBQU07RUFDckIsSUFBTVEsS0FBSyxHQUFHQyxLQUFLLENBQUNDLElBQUksQ0FBQztJQUFFQyxNQUFNLEVBQUUsSUFBSSxHQUFHLElBQUksR0FBRztFQUFFLENBQUMsRUFBRSxVQUFDQyxDQUFDLEVBQUVDLENBQUM7SUFBQSxPQUFLLElBQUksR0FBR0EsQ0FBQztFQUFBLEVBQUM7RUFDekUsSUFBQUMsU0FBQSxHQUF3Q1AsK0NBQVEsQ0FBQyxJQUFJLENBQUM7SUFBQVEsVUFBQSxHQUFBQyxjQUFBLENBQUFGLFNBQUE7SUFBL0NHLFlBQVksR0FBQUYsVUFBQTtJQUFFRyxlQUFlLEdBQUFILFVBQUE7RUFNcEMsb0JBQ0VqQiwwREFBQTtJQUFLUSxTQUFTLEVBQUM7RUFBZSxnQkFDNUJSLDBEQUFBO0lBQ0VxQixLQUFLLEVBQUVGLFlBQWE7SUFDcEJHLFFBQVEsRUFSTyxTQUFBQSxDQUFDQyxDQUFDLEVBQUs7TUFDMUJILGVBQWUsQ0FBQ0ksUUFBUSxDQUFDRCxDQUFDLENBQUNFLE1BQU0sQ0FBQ0osS0FBSyxDQUFDLENBQUM7SUFDM0M7RUFNNkIsR0FFdEJYLEtBQUssQ0FBQ2dCLEdBQUcsQ0FBQyxVQUFDQyxJQUFJO0lBQUEsb0JBQ2QzQiwwREFBQTtNQUFRNEIsR0FBRyxFQUFFRCxJQUFLO01BQUNOLEtBQUssRUFBRU07SUFBSyxHQUM1QkEsSUFDSyxDQUFDO0VBQUEsQ0FDVixDQUNLLENBQ0wsQ0FBQztBQUVWLENBQUM7QUFFRCwrREFBZXpCLFFBQVE7Ozs7Ozs7O1VDMUJ2QixxQ0FBcUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLy4vY3NzL3N0eWxlLmNzcz9lYTc4Iiwid2VicGFjazovL3dlYnBhY2svLi9qcy9jb21wb25lbnRzL0hlYWRlci5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLy4vanMvY29tcG9uZW50cy9Ecm9wZG93bi5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTtcbiAgICBpZihtb2R1bGUuaG90KSB7XG4gICAgICAoZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBsb2NhbHNKc29uU3RyaW5nID0gdW5kZWZpbmVkO1xuICAgICAgICAvLyAxNzQ1NzU0MDA3NzYwXG4gICAgICAgIHZhciBjc3NSZWxvYWQgPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvaG1yL2hvdE1vZHVsZVJlcGxhY2VtZW50LmpzXCIpKG1vZHVsZS5pZCwge30pO1xuICAgICAgICAvLyBvbmx5IGludmFsaWRhdGUgd2hlbiBsb2NhbHMgY2hhbmdlXG4gICAgICAgIGlmIChcbiAgICAgICAgICBtb2R1bGUuaG90LmRhdGEgJiZcbiAgICAgICAgICBtb2R1bGUuaG90LmRhdGEudmFsdWUgJiZcbiAgICAgICAgICBtb2R1bGUuaG90LmRhdGEudmFsdWUgIT09IGxvY2Fsc0pzb25TdHJpbmdcbiAgICAgICAgKSB7XG4gICAgICAgICAgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICAgICAgfVxuICAgICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgIGRhdGEudmFsdWUgPSBsb2NhbHNKc29uU3RyaW5nO1xuICAgICAgICAgIGNzc1JlbG9hZCgpO1xuICAgICAgICB9KTtcbiAgICAgIH0pKCk7XG4gICAgfVxuICAiLCIvLyBjb21wb25lbnRzL0hlYWRlci5qc1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBCdXR0b25zIGZyb20gJy4vQnV0dG9ucyc7XG5pbXBvcnQgRHJvcGRvd24gZnJvbSAnLi9Ecm9wZG93bic7XG5cbmZ1bmN0aW9uIEhlYWRlcih7IG9uTG9hZFJhY2VzLCBvbkxvYWREcml2ZXJzIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcGxpa2FjZVwiPlxuICAgICAgICA8aDE+RjEgWsOhdm9keSAyMDI0PC9oMT5cbiAgICAgICAgPERyb3Bkb3duIC8+XG4gICAgICAgIDxCdXR0b25zIG9uTG9hZFJhY2VzPXtvbkxvYWRSYWNlc30gb25Mb2FkRHJpdmVycz17b25Mb2FkRHJpdmVyc30gLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgRHJvcGRvd24gPSAoKSA9PiB7XG4gIGNvbnN0IHllYXJzID0gQXJyYXkuZnJvbSh7IGxlbmd0aDogMjAyNSAtIDE5NTAgKyAxIH0sIChfLCBpKSA9PiAxOTUwICsgaSk7XG4gIGNvbnN0IFtzZWxlY3RlZFllYXIsIHNldFNlbGVjdGVkWWVhcl0gPSB1c2VTdGF0ZSgyMDI1KTtcblxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZSkgPT4ge1xuICAgIHNldFNlbGVjdGVkWWVhcihwYXJzZUludChlLnRhcmdldC52YWx1ZSkpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ5ZWFyLWRyb3Bkb3duXCI+XG4gICAgICA8c2VsZWN0XG4gICAgICAgIHZhbHVlPXtzZWxlY3RlZFllYXJ9XG4gICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICA+XG4gICAgICAgIHt5ZWFycy5tYXAoKHllYXIpID0+IChcbiAgICAgICAgICA8b3B0aW9uIGtleT17eWVhcn0gdmFsdWU9e3llYXJ9PlxuICAgICAgICAgICAge3llYXJ9XG4gICAgICAgICAgPC9vcHRpb24+XG4gICAgICAgICkpfVxuICAgICAgPC9zZWxlY3Q+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBEcm9wZG93bjsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSBmdW5jdGlvbigpIHsgcmV0dXJuIFwiZGMwZGI2ZDM3ZTZkNjQ1OGE0YTNcIjsgfSJdLCJuYW1lcyI6WyJSZWFjdCIsIkJ1dHRvbnMiLCJEcm9wZG93biIsIkhlYWRlciIsIl9yZWYiLCJvbkxvYWRSYWNlcyIsIm9uTG9hZERyaXZlcnMiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwidXNlU3RhdGUiLCJ5ZWFycyIsIkFycmF5IiwiZnJvbSIsImxlbmd0aCIsIl8iLCJpIiwiX3VzZVN0YXRlIiwiX3VzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5Iiwic2VsZWN0ZWRZZWFyIiwic2V0U2VsZWN0ZWRZZWFyIiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJwYXJzZUludCIsInRhcmdldCIsIm1hcCIsInllYXIiLCJrZXkiXSwic291cmNlUm9vdCI6IiJ9