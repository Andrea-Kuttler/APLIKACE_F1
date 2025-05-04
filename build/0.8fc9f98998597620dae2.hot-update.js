"use strict";
self["webpackHotUpdatewebpack"](0,{

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin

    if(true) {
      (function() {
        var localsJsonString = undefined;
        // 1746349232535
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

/***/ 39:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../css/style.css'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }


var Dropdown = function (_ref) {
  var onYearChange = _ref.onYearChange,
    _ref$defaultYear = _ref.defaultYear,
    defaultYear = _ref$defaultYear === void 0 ? 2024 : _ref$defaultYear;
  var years = Array.from({
    length: 2024 - 1950 + 1
  }, function (_, i) {
    return 1950 + i;
  });
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(defaultYear),
    _useState2 = _slicedToArray(_useState, 2),
    selectedYear = _useState2[0],
    setSelectedYear = _useState2[1];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "year-dropdown"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("select", {
    value: selectedYear,
    onChange: function (e) {
      var year = parseInt(e.target.value);
      setSelectedYear(year);
      if (onYearChange) {
        onYearChange(year);
      }
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
/******/ 	__webpack_require__.h = function() { return "ba737402d071d60163b0"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC44ZmM5Zjk4OTk4NTk3NjIwZGFlMi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUNVO0FBQ1YsT0FBTyxJQUFVO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixtQkFBTyxDQUFDLEVBQTBFLGVBQWU7QUFDekg7QUFDQTtBQUNBLFVBQVUsVUFBVTtBQUNwQixVQUFVLFVBQVU7QUFDcEIsVUFBVSxVQUFVO0FBQ3BCO0FBQ0EsVUFBVSxVQUFVO0FBQ3BCLFVBQVU7QUFDVixVQUFVLGlCQUFpQjtBQUMzQjtBQUNBLFFBQVEsVUFBVTtBQUNsQjtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZCd0M7QUFDZDtBQUUxQixJQUFNRSxRQUFRLEdBQUcsU0FBQUEsQ0FBQUMsSUFBQSxFQUEwQztFQUFBLElBQXZDQyxZQUFZLEdBQUFELElBQUEsQ0FBWkMsWUFBWTtJQUFBQyxnQkFBQSxHQUFBRixJQUFBLENBQUVHLFdBQVc7SUFBWEEsV0FBVyxHQUFBRCxnQkFBQSxjQUFHLElBQUksR0FBQUEsZ0JBQUE7RUFDbEQsSUFBTUUsS0FBSyxHQUFHQyxLQUFLLENBQUNDLElBQUksQ0FBQztJQUFFQyxNQUFNLEVBQUUsSUFBSSxHQUFHLElBQUksR0FBRztFQUFFLENBQUMsRUFBRSxVQUFDQyxDQUFDLEVBQUVDLENBQUM7SUFBQSxPQUFLLElBQUksR0FBR0EsQ0FBQztFQUFBLEVBQUM7RUFDekUsSUFBQUMsU0FBQSxHQUF3Q1osK0NBQVEsQ0FBQ0ssV0FBVyxDQUFDO0lBQUFRLFVBQUEsR0FBQUMsY0FBQSxDQUFBRixTQUFBO0lBQXRERyxZQUFZLEdBQUFGLFVBQUE7SUFBRUcsZUFBZSxHQUFBSCxVQUFBO0VBVXBDLG9CQUNFZCwwREFBQTtJQUFLbUIsU0FBUyxFQUFDO0VBQWUsZ0JBQzVCbkIsMERBQUE7SUFDRW9CLEtBQUssRUFBRUosWUFBYTtJQUNwQkssUUFBUSxFQVpPLFNBQUFBLENBQUNDLENBQUMsRUFBSztNQUMxQixJQUFNQyxJQUFJLEdBQUdDLFFBQVEsQ0FBQ0YsQ0FBQyxDQUFDRyxNQUFNLENBQUNMLEtBQUssQ0FBQztNQUNyQ0gsZUFBZSxDQUFDTSxJQUFJLENBQUM7TUFDckIsSUFBSW5CLFlBQVksRUFBRTtRQUNoQkEsWUFBWSxDQUFDbUIsSUFBSSxDQUFDO01BQ3BCO0lBQ0Y7RUFNNkIsR0FFdEJoQixLQUFLLENBQUNtQixHQUFHLENBQUMsVUFBQ0gsSUFBSTtJQUFBLG9CQUNkdkIsMERBQUE7TUFBUTJCLEdBQUcsRUFBRUosSUFBSztNQUFDSCxLQUFLLEVBQUVHO0lBQUssR0FDNUJBLElBQ0ssQ0FBQztFQUFBLENBQ1YsQ0FDSyxDQUNMLENBQUM7QUFFVixDQUFDO0FBRUQsK0RBQWVyQixRQUFROzs7Ozs7OztVQy9CdkIscUNBQXFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFjay8uL2Nzcy9zdHlsZS5jc3M/ZWE3OCIsIndlYnBhY2s6Ly93ZWJwYWNrLy4vanMvY29tcG9uZW50cy9Ecm9wZG93bi5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTtcbiAgICBpZihtb2R1bGUuaG90KSB7XG4gICAgICAoZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBsb2NhbHNKc29uU3RyaW5nID0gdW5kZWZpbmVkO1xuICAgICAgICAvLyAxNzQ2MzQ5MjMyNTM1XG4gICAgICAgIHZhciBjc3NSZWxvYWQgPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvaG1yL2hvdE1vZHVsZVJlcGxhY2VtZW50LmpzXCIpKG1vZHVsZS5pZCwge30pO1xuICAgICAgICAvLyBvbmx5IGludmFsaWRhdGUgd2hlbiBsb2NhbHMgY2hhbmdlXG4gICAgICAgIGlmIChcbiAgICAgICAgICBtb2R1bGUuaG90LmRhdGEgJiZcbiAgICAgICAgICBtb2R1bGUuaG90LmRhdGEudmFsdWUgJiZcbiAgICAgICAgICBtb2R1bGUuaG90LmRhdGEudmFsdWUgIT09IGxvY2Fsc0pzb25TdHJpbmdcbiAgICAgICAgKSB7XG4gICAgICAgICAgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICAgICAgfVxuICAgICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgIGRhdGEudmFsdWUgPSBsb2NhbHNKc29uU3RyaW5nO1xuICAgICAgICAgIGNzc1JlbG9hZCgpO1xuICAgICAgICB9KTtcbiAgICAgIH0pKCk7XG4gICAgfVxuICAiLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCAnLi4vY3NzL3N0eWxlLmNzcyc7XG5cbmNvbnN0IERyb3Bkb3duID0gKHsgb25ZZWFyQ2hhbmdlLCBkZWZhdWx0WWVhciA9IDIwMjQgfSkgPT4ge1xuICBjb25zdCB5ZWFycyA9IEFycmF5LmZyb20oeyBsZW5ndGg6IDIwMjQgLSAxOTUwICsgMSB9LCAoXywgaSkgPT4gMTk1MCArIGkpO1xuICBjb25zdCBbc2VsZWN0ZWRZZWFyLCBzZXRTZWxlY3RlZFllYXJdID0gdXNlU3RhdGUoZGVmYXVsdFllYXIpO1xuXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlKSA9PiB7XG4gICAgY29uc3QgeWVhciA9IHBhcnNlSW50KGUudGFyZ2V0LnZhbHVlKTtcbiAgICBzZXRTZWxlY3RlZFllYXIoeWVhcik7XG4gICAgaWYgKG9uWWVhckNoYW5nZSkge1xuICAgICAgb25ZZWFyQ2hhbmdlKHllYXIpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwieWVhci1kcm9wZG93blwiPlxuICAgICAgPHNlbGVjdFxuICAgICAgICB2YWx1ZT17c2VsZWN0ZWRZZWFyfVxuICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgPlxuICAgICAgICB7eWVhcnMubWFwKCh5ZWFyKSA9PiAoXG4gICAgICAgICAgPG9wdGlvbiBrZXk9e3llYXJ9IHZhbHVlPXt5ZWFyfT5cbiAgICAgICAgICAgIHt5ZWFyfVxuICAgICAgICAgIDwvb3B0aW9uPlxuICAgICAgICApKX1cbiAgICAgIDwvc2VsZWN0PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRHJvcGRvd247XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSBmdW5jdGlvbigpIHsgcmV0dXJuIFwiYmE3Mzc0MDJkMDcxZDYwMTYzYjBcIjsgfSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiRHJvcGRvd24iLCJfcmVmIiwib25ZZWFyQ2hhbmdlIiwiX3JlZiRkZWZhdWx0WWVhciIsImRlZmF1bHRZZWFyIiwieWVhcnMiLCJBcnJheSIsImZyb20iLCJsZW5ndGgiLCJfIiwiaSIsIl91c2VTdGF0ZSIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsInNlbGVjdGVkWWVhciIsInNldFNlbGVjdGVkWWVhciIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZSIsInllYXIiLCJwYXJzZUludCIsInRhcmdldCIsIm1hcCIsImtleSJdLCJzb3VyY2VSb290IjoiIn0=