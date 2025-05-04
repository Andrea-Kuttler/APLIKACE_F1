"use strict";
self["webpackHotUpdatewebpack"](0,{

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin

    if(true) {
      (function() {
        var localsJsonString = undefined;
        // 1746349313903
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
    className: "form-select",
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
/******/ 	__webpack_require__.h = function() { return "bc990614ea91aaf3e5d1"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4wODMwNmI1MDdlZjEwMzg2MWJlMy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUNVO0FBQ1YsT0FBTyxJQUFVO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixtQkFBTyxDQUFDLEVBQTBFLGVBQWU7QUFDekg7QUFDQTtBQUNBLFVBQVUsVUFBVTtBQUNwQixVQUFVLFVBQVU7QUFDcEIsVUFBVSxVQUFVO0FBQ3BCO0FBQ0EsVUFBVSxVQUFVO0FBQ3BCLFVBQVU7QUFDVixVQUFVLGlCQUFpQjtBQUMzQjtBQUNBLFFBQVEsVUFBVTtBQUNsQjtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDdkJ3QztBQUV4QyxJQUFNRSxRQUFRLEdBQUcsU0FBQUEsQ0FBQUMsSUFBQSxFQUEwQztFQUFBLElBQXZDQyxZQUFZLEdBQUFELElBQUEsQ0FBWkMsWUFBWTtJQUFBQyxnQkFBQSxHQUFBRixJQUFBLENBQUVHLFdBQVc7SUFBWEEsV0FBVyxHQUFBRCxnQkFBQSxjQUFHLElBQUksR0FBQUEsZ0JBQUE7RUFDbEQsSUFBTUUsS0FBSyxHQUFHQyxLQUFLLENBQUNDLElBQUksQ0FBQztJQUFFQyxNQUFNLEVBQUUsSUFBSSxHQUFHLElBQUksR0FBRztFQUFFLENBQUMsRUFBRSxVQUFDQyxDQUFDLEVBQUVDLENBQUM7SUFBQSxPQUFLLElBQUksR0FBR0EsQ0FBQztFQUFBLEVBQUM7RUFDekUsSUFBQUMsU0FBQSxHQUF3Q1osK0NBQVEsQ0FBQ0ssV0FBVyxDQUFDO0lBQUFRLFVBQUEsR0FBQUMsY0FBQSxDQUFBRixTQUFBO0lBQXRERyxZQUFZLEdBQUFGLFVBQUE7SUFBRUcsZUFBZSxHQUFBSCxVQUFBO0VBVXBDLG9CQUNFZCwwREFBQTtJQUFLbUIsU0FBUyxFQUFDO0VBQWUsZ0JBQzVCbkIsMERBQUE7SUFDRW1CLFNBQVMsRUFBQyxhQUFhO0lBQ3ZCQyxLQUFLLEVBQUVKLFlBQWE7SUFDcEJLLFFBQVEsRUFiTyxTQUFBQSxDQUFDQyxDQUFDLEVBQUs7TUFDMUIsSUFBTUMsSUFBSSxHQUFHQyxRQUFRLENBQUNGLENBQUMsQ0FBQ0csTUFBTSxDQUFDTCxLQUFLLENBQUM7TUFDckNILGVBQWUsQ0FBQ00sSUFBSSxDQUFDO01BQ3JCLElBQUluQixZQUFZLEVBQUU7UUFDaEJBLFlBQVksQ0FBQ21CLElBQUksQ0FBQztNQUNwQjtJQUNGO0VBTzZCLEdBRXRCaEIsS0FBSyxDQUFDbUIsR0FBRyxDQUFDLFVBQUNILElBQUk7SUFBQSxvQkFDZHZCLDBEQUFBO01BQVEyQixHQUFHLEVBQUVKLElBQUs7TUFBQ0gsS0FBSyxFQUFFRztJQUFLLEdBQzVCQSxJQUNLLENBQUM7RUFBQSxDQUNWLENBQ0ssQ0FDTCxDQUFDO0FBRVYsQ0FBQztBQUVELCtEQUFlckIsUUFBUTs7Ozs7Ozs7VUMvQnZCLHFDQUFxQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnBhY2svLi9jc3Mvc3R5bGUuY3NzP2VhNzgiLCJ3ZWJwYWNrOi8vd2VicGFjay8uL2pzL2NvbXBvbmVudHMvRHJvcGRvd24uanMiLCJ3ZWJwYWNrOi8vd2VicGFjay93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307XG4gICAgaWYobW9kdWxlLmhvdCkge1xuICAgICAgKGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgbG9jYWxzSnNvblN0cmluZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgLy8gMTc0NjM0OTMxMzkwM1xuICAgICAgICB2YXIgY3NzUmVsb2FkID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2htci9ob3RNb2R1bGVSZXBsYWNlbWVudC5qc1wiKShtb2R1bGUuaWQsIHt9KTtcbiAgICAgICAgLy8gb25seSBpbnZhbGlkYXRlIHdoZW4gbG9jYWxzIGNoYW5nZVxuICAgICAgICBpZiAoXG4gICAgICAgICAgbW9kdWxlLmhvdC5kYXRhICYmXG4gICAgICAgICAgbW9kdWxlLmhvdC5kYXRhLnZhbHVlICYmXG4gICAgICAgICAgbW9kdWxlLmhvdC5kYXRhLnZhbHVlICE9PSBsb2NhbHNKc29uU3RyaW5nXG4gICAgICAgICkge1xuICAgICAgICAgIG1vZHVsZS5ob3QuaW52YWxpZGF0ZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgICAgIH1cbiAgICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICBkYXRhLnZhbHVlID0gbG9jYWxzSnNvblN0cmluZztcbiAgICAgICAgICBjc3NSZWxvYWQoKTtcbiAgICAgICAgfSk7XG4gICAgICB9KSgpO1xuICAgIH1cbiAgIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IERyb3Bkb3duID0gKHsgb25ZZWFyQ2hhbmdlLCBkZWZhdWx0WWVhciA9IDIwMjQgfSkgPT4ge1xuICBjb25zdCB5ZWFycyA9IEFycmF5LmZyb20oeyBsZW5ndGg6IDIwMjQgLSAxOTUwICsgMSB9LCAoXywgaSkgPT4gMTk1MCArIGkpO1xuICBjb25zdCBbc2VsZWN0ZWRZZWFyLCBzZXRTZWxlY3RlZFllYXJdID0gdXNlU3RhdGUoZGVmYXVsdFllYXIpO1xuXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlKSA9PiB7XG4gICAgY29uc3QgeWVhciA9IHBhcnNlSW50KGUudGFyZ2V0LnZhbHVlKTtcbiAgICBzZXRTZWxlY3RlZFllYXIoeWVhcik7XG4gICAgaWYgKG9uWWVhckNoYW5nZSkge1xuICAgICAgb25ZZWFyQ2hhbmdlKHllYXIpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwieWVhci1kcm9wZG93blwiPlxuICAgICAgPHNlbGVjdFxuICAgICAgICBjbGFzc05hbWU9XCJmb3JtLXNlbGVjdFwiXG4gICAgICAgIHZhbHVlPXtzZWxlY3RlZFllYXJ9XG4gICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICA+XG4gICAgICAgIHt5ZWFycy5tYXAoKHllYXIpID0+IChcbiAgICAgICAgICA8b3B0aW9uIGtleT17eWVhcn0gdmFsdWU9e3llYXJ9PlxuICAgICAgICAgICAge3llYXJ9XG4gICAgICAgICAgPC9vcHRpb24+XG4gICAgICAgICkpfVxuICAgICAgPC9zZWxlY3Q+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBEcm9wZG93bjtcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gXCJiYzk5MDYxNGVhOTFhYWYzZTVkMVwiOyB9Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJEcm9wZG93biIsIl9yZWYiLCJvblllYXJDaGFuZ2UiLCJfcmVmJGRlZmF1bHRZZWFyIiwiZGVmYXVsdFllYXIiLCJ5ZWFycyIsIkFycmF5IiwiZnJvbSIsImxlbmd0aCIsIl8iLCJpIiwiX3VzZVN0YXRlIiwiX3VzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5Iiwic2VsZWN0ZWRZZWFyIiwic2V0U2VsZWN0ZWRZZWFyIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsInZhbHVlIiwib25DaGFuZ2UiLCJlIiwieWVhciIsInBhcnNlSW50IiwidGFyZ2V0IiwibWFwIiwia2V5Il0sInNvdXJjZVJvb3QiOiIifQ==