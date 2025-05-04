"use strict";
self["webpackHotUpdatewebpack"](0,{

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin

    if(true) {
      (function() {
        var localsJsonString = undefined;
        // 1746349239833
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
/******/ 	__webpack_require__.h = function() { return "26a3e4a6353cdc6fbbba"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5iYTczNzQwMmQwNzFkNjAxNjNiMC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUNVO0FBQ1YsT0FBTyxJQUFVO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixtQkFBTyxDQUFDLEVBQTBFLGVBQWU7QUFDekg7QUFDQTtBQUNBLFVBQVUsVUFBVTtBQUNwQixVQUFVLFVBQVU7QUFDcEIsVUFBVSxVQUFVO0FBQ3BCO0FBQ0EsVUFBVSxVQUFVO0FBQ3BCLFVBQVU7QUFDVixVQUFVLGlCQUFpQjtBQUMzQjtBQUNBLFFBQVEsVUFBVTtBQUNsQjtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDdkJ3QztBQUV4QyxJQUFNRSxRQUFRLEdBQUcsU0FBQUEsQ0FBQUMsSUFBQSxFQUEwQztFQUFBLElBQXZDQyxZQUFZLEdBQUFELElBQUEsQ0FBWkMsWUFBWTtJQUFBQyxnQkFBQSxHQUFBRixJQUFBLENBQUVHLFdBQVc7SUFBWEEsV0FBVyxHQUFBRCxnQkFBQSxjQUFHLElBQUksR0FBQUEsZ0JBQUE7RUFDbEQsSUFBTUUsS0FBSyxHQUFHQyxLQUFLLENBQUNDLElBQUksQ0FBQztJQUFFQyxNQUFNLEVBQUUsSUFBSSxHQUFHLElBQUksR0FBRztFQUFFLENBQUMsRUFBRSxVQUFDQyxDQUFDLEVBQUVDLENBQUM7SUFBQSxPQUFLLElBQUksR0FBR0EsQ0FBQztFQUFBLEVBQUM7RUFDekUsSUFBQUMsU0FBQSxHQUF3Q1osK0NBQVEsQ0FBQ0ssV0FBVyxDQUFDO0lBQUFRLFVBQUEsR0FBQUMsY0FBQSxDQUFBRixTQUFBO0lBQXRERyxZQUFZLEdBQUFGLFVBQUE7SUFBRUcsZUFBZSxHQUFBSCxVQUFBO0VBVXBDLG9CQUNFZCwwREFBQTtJQUFLbUIsU0FBUyxFQUFDO0VBQWUsZ0JBQzVCbkIsMERBQUE7SUFDRW9CLEtBQUssRUFBRUosWUFBYTtJQUNwQkssUUFBUSxFQVpPLFNBQUFBLENBQUNDLENBQUMsRUFBSztNQUMxQixJQUFNQyxJQUFJLEdBQUdDLFFBQVEsQ0FBQ0YsQ0FBQyxDQUFDRyxNQUFNLENBQUNMLEtBQUssQ0FBQztNQUNyQ0gsZUFBZSxDQUFDTSxJQUFJLENBQUM7TUFDckIsSUFBSW5CLFlBQVksRUFBRTtRQUNoQkEsWUFBWSxDQUFDbUIsSUFBSSxDQUFDO01BQ3BCO0lBQ0Y7RUFNNkIsR0FFdEJoQixLQUFLLENBQUNtQixHQUFHLENBQUMsVUFBQ0gsSUFBSTtJQUFBLG9CQUNkdkIsMERBQUE7TUFBUTJCLEdBQUcsRUFBRUosSUFBSztNQUFDSCxLQUFLLEVBQUVHO0lBQUssR0FDNUJBLElBQ0ssQ0FBQztFQUFBLENBQ1YsQ0FDSyxDQUNMLENBQUM7QUFFVixDQUFDO0FBRUQsK0RBQWVyQixRQUFROzs7Ozs7OztVQzlCdkIscUNBQXFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFjay8uL2Nzcy9zdHlsZS5jc3M/ZWE3OCIsIndlYnBhY2s6Ly93ZWJwYWNrLy4vanMvY29tcG9uZW50cy9Ecm9wZG93bi5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTtcbiAgICBpZihtb2R1bGUuaG90KSB7XG4gICAgICAoZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBsb2NhbHNKc29uU3RyaW5nID0gdW5kZWZpbmVkO1xuICAgICAgICAvLyAxNzQ2MzQ5MjM5ODMzXG4gICAgICAgIHZhciBjc3NSZWxvYWQgPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvaG1yL2hvdE1vZHVsZVJlcGxhY2VtZW50LmpzXCIpKG1vZHVsZS5pZCwge30pO1xuICAgICAgICAvLyBvbmx5IGludmFsaWRhdGUgd2hlbiBsb2NhbHMgY2hhbmdlXG4gICAgICAgIGlmIChcbiAgICAgICAgICBtb2R1bGUuaG90LmRhdGEgJiZcbiAgICAgICAgICBtb2R1bGUuaG90LmRhdGEudmFsdWUgJiZcbiAgICAgICAgICBtb2R1bGUuaG90LmRhdGEudmFsdWUgIT09IGxvY2Fsc0pzb25TdHJpbmdcbiAgICAgICAgKSB7XG4gICAgICAgICAgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICAgICAgfVxuICAgICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgIGRhdGEudmFsdWUgPSBsb2NhbHNKc29uU3RyaW5nO1xuICAgICAgICAgIGNzc1JlbG9hZCgpO1xuICAgICAgICB9KTtcbiAgICAgIH0pKCk7XG4gICAgfVxuICAiLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgRHJvcGRvd24gPSAoeyBvblllYXJDaGFuZ2UsIGRlZmF1bHRZZWFyID0gMjAyNCB9KSA9PiB7XG4gIGNvbnN0IHllYXJzID0gQXJyYXkuZnJvbSh7IGxlbmd0aDogMjAyNCAtIDE5NTAgKyAxIH0sIChfLCBpKSA9PiAxOTUwICsgaSk7XG4gIGNvbnN0IFtzZWxlY3RlZFllYXIsIHNldFNlbGVjdGVkWWVhcl0gPSB1c2VTdGF0ZShkZWZhdWx0WWVhcik7XG5cbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGUpID0+IHtcbiAgICBjb25zdCB5ZWFyID0gcGFyc2VJbnQoZS50YXJnZXQudmFsdWUpO1xuICAgIHNldFNlbGVjdGVkWWVhcih5ZWFyKTtcbiAgICBpZiAob25ZZWFyQ2hhbmdlKSB7XG4gICAgICBvblllYXJDaGFuZ2UoeWVhcik7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ5ZWFyLWRyb3Bkb3duXCI+XG4gICAgICA8c2VsZWN0XG4gICAgICAgIHZhbHVlPXtzZWxlY3RlZFllYXJ9XG4gICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICA+XG4gICAgICAgIHt5ZWFycy5tYXAoKHllYXIpID0+IChcbiAgICAgICAgICA8b3B0aW9uIGtleT17eWVhcn0gdmFsdWU9e3llYXJ9PlxuICAgICAgICAgICAge3llYXJ9XG4gICAgICAgICAgPC9vcHRpb24+XG4gICAgICAgICkpfVxuICAgICAgPC9zZWxlY3Q+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBEcm9wZG93bjtcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gXCIyNmEzZTRhNjM1M2NkYzZmYmJiYVwiOyB9Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJEcm9wZG93biIsIl9yZWYiLCJvblllYXJDaGFuZ2UiLCJfcmVmJGRlZmF1bHRZZWFyIiwiZGVmYXVsdFllYXIiLCJ5ZWFycyIsIkFycmF5IiwiZnJvbSIsImxlbmd0aCIsIl8iLCJpIiwiX3VzZVN0YXRlIiwiX3VzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5Iiwic2VsZWN0ZWRZZWFyIiwic2V0U2VsZWN0ZWRZZWFyIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsInZhbHVlIiwib25DaGFuZ2UiLCJlIiwieWVhciIsInBhcnNlSW50IiwidGFyZ2V0IiwibWFwIiwia2V5Il0sInNvdXJjZVJvb3QiOiIifQ==