"use strict";
self["webpackHotUpdatewebpack"](0,{

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin

    if(true) {
      (function() {
        var localsJsonString = undefined;
        // 1745754384004
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
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
// components/Header.js



function Header(_ref) {
  var onLoadRaces = _ref.onLoadRaces,
    onLoadDrivers = _ref.onLoadDrivers;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(2025),
    _useState2 = _slicedToArray(_useState, 2),
    selectedYear = _useState2[0],
    setSelectedYear = _useState2[1];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "aplikace"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "F1 Z\xE1vody ", selectedYear), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Dropdown__WEBPACK_IMPORTED_MODULE_2__["default"], {
    onYearChange: function (year) {
      setSelectedYear(year);
    },
    defaultYear: selectedYear
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Buttons__WEBPACK_IMPORTED_MODULE_1__["default"], {
    onLoadRaces: onLoadRaces,
    onLoadDrivers: onLoadDrivers,
    selectedYear: selectedYear
  })));
}
/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "71c52f2566ede86662cd"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4xNzIwMzRhN2UyNTA3OTQ2ZGRlMi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUNVO0FBQ1YsT0FBTyxJQUFVO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixtQkFBTyxDQUFDLEVBQTBFLGVBQWU7QUFDekg7QUFDQTtBQUNBLFVBQVUsVUFBVTtBQUNwQixVQUFVLFVBQVU7QUFDcEIsVUFBVSxVQUFVO0FBQ3BCO0FBQ0EsVUFBVSxVQUFVO0FBQ3BCLFVBQVU7QUFDVixVQUFVLGlCQUFpQjtBQUMzQjtBQUNBLFFBQVEsVUFBVTtBQUNsQjtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2QkE7QUFDd0M7QUFDUjtBQUNFO0FBRWxDLFNBQVNJLE1BQU1BLENBQUFDLElBQUEsRUFBaUM7RUFBQSxJQUE5QkMsV0FBVyxHQUFBRCxJQUFBLENBQVhDLFdBQVc7SUFBRUMsYUFBYSxHQUFBRixJQUFBLENBQWJFLGFBQWE7RUFDMUMsSUFBQUMsU0FBQSxHQUF3Q1AsK0NBQVEsQ0FBQyxJQUFJLENBQUM7SUFBQVEsVUFBQSxHQUFBQyxjQUFBLENBQUFGLFNBQUE7SUFBL0NHLFlBQVksR0FBQUYsVUFBQTtJQUFFRyxlQUFlLEdBQUFILFVBQUE7RUFNcEMsb0JBQ0VULDBEQUFBO0lBQUtjLFNBQVMsRUFBQztFQUFXLGdCQUN4QmQsMERBQUE7SUFBS2MsU0FBUyxFQUFDO0VBQVUsZ0JBQ3ZCZCwwREFBQSxhQUFJLGVBQVUsRUFBQ1csWUFBaUIsQ0FBQyxlQUNqQ1gsMERBQUEsQ0FBQ0csaURBQVE7SUFBQ1ksWUFBWSxFQVJILFNBQUFBLENBQUNDLElBQUksRUFBSztNQUNqQ0osZUFBZSxDQUFDSSxJQUFJLENBQUM7SUFDdkIsQ0FNK0M7SUFBQ0MsV0FBVyxFQUFFTjtFQUFhLENBQUUsQ0FBQyxlQUN2RVgsMERBQUEsQ0FBQ0UsZ0RBQU87SUFBQ0ksV0FBVyxFQUFFQSxXQUFZO0lBQUNDLGFBQWEsRUFBRUEsYUFBYztJQUFDSSxZQUFZLEVBQUVBO0VBQWEsQ0FBRSxDQUMzRixDQUNGLENBQUM7QUFFVjtBQUVBLCtEQUFlUCxNQUFNOzs7Ozs7OztVQ3ZCckIscUNBQXFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFjay8uL2Nzcy9zdHlsZS5jc3M/ZWE3OCIsIndlYnBhY2s6Ly93ZWJwYWNrLy4vanMvY29tcG9uZW50cy9IZWFkZXIuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307XG4gICAgaWYobW9kdWxlLmhvdCkge1xuICAgICAgKGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgbG9jYWxzSnNvblN0cmluZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgLy8gMTc0NTc1NDM4NDAwNFxuICAgICAgICB2YXIgY3NzUmVsb2FkID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2htci9ob3RNb2R1bGVSZXBsYWNlbWVudC5qc1wiKShtb2R1bGUuaWQsIHt9KTtcbiAgICAgICAgLy8gb25seSBpbnZhbGlkYXRlIHdoZW4gbG9jYWxzIGNoYW5nZVxuICAgICAgICBpZiAoXG4gICAgICAgICAgbW9kdWxlLmhvdC5kYXRhICYmXG4gICAgICAgICAgbW9kdWxlLmhvdC5kYXRhLnZhbHVlICYmXG4gICAgICAgICAgbW9kdWxlLmhvdC5kYXRhLnZhbHVlICE9PSBsb2NhbHNKc29uU3RyaW5nXG4gICAgICAgICkge1xuICAgICAgICAgIG1vZHVsZS5ob3QuaW52YWxpZGF0ZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgICAgIH1cbiAgICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICBkYXRhLnZhbHVlID0gbG9jYWxzSnNvblN0cmluZztcbiAgICAgICAgICBjc3NSZWxvYWQoKTtcbiAgICAgICAgfSk7XG4gICAgICB9KSgpO1xuICAgIH1cbiAgIiwiLy8gY29tcG9uZW50cy9IZWFkZXIuanNcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBCdXR0b25zIGZyb20gJy4vQnV0dG9ucyc7XG5pbXBvcnQgRHJvcGRvd24gZnJvbSAnLi9Ecm9wZG93bic7XG5cbmZ1bmN0aW9uIEhlYWRlcih7IG9uTG9hZFJhY2VzLCBvbkxvYWREcml2ZXJzIH0pIHtcbiAgY29uc3QgW3NlbGVjdGVkWWVhciwgc2V0U2VsZWN0ZWRZZWFyXSA9IHVzZVN0YXRlKDIwMjUpO1xuXG4gIGNvbnN0IGhhbmRsZVllYXJDaGFuZ2UgPSAoeWVhcikgPT4ge1xuICAgIHNldFNlbGVjdGVkWWVhcih5ZWFyKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImFwbGlrYWNlXCI+XG4gICAgICAgIDxoMT5GMSBaw6F2b2R5IHtzZWxlY3RlZFllYXJ9PC9oMT5cbiAgICAgICAgPERyb3Bkb3duIG9uWWVhckNoYW5nZT17aGFuZGxlWWVhckNoYW5nZX0gZGVmYXVsdFllYXI9e3NlbGVjdGVkWWVhcn0gLz5cbiAgICAgICAgPEJ1dHRvbnMgb25Mb2FkUmFjZXM9e29uTG9hZFJhY2VzfSBvbkxvYWREcml2ZXJzPXtvbkxvYWREcml2ZXJzfSBzZWxlY3RlZFllYXI9e3NlbGVjdGVkWWVhcn0gLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSBmdW5jdGlvbigpIHsgcmV0dXJuIFwiNzFjNTJmMjU2NmVkZTg2NjYyY2RcIjsgfSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiQnV0dG9ucyIsIkRyb3Bkb3duIiwiSGVhZGVyIiwiX3JlZiIsIm9uTG9hZFJhY2VzIiwib25Mb2FkRHJpdmVycyIsIl91c2VTdGF0ZSIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsInNlbGVjdGVkWWVhciIsInNldFNlbGVjdGVkWWVhciIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJvblllYXJDaGFuZ2UiLCJ5ZWFyIiwiZGVmYXVsdFllYXIiXSwic291cmNlUm9vdCI6IiJ9