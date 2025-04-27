"use strict";
self["webpackHotUpdatewebpack"](0,{

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin

    if(true) {
      (function() {
        var localsJsonString = undefined;
        // 1745754488424
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
    onLoadRaces: function () {
      if (onLoadRaces) {
        onLoadRaces(selectedYear);
      }
    },
    onLoadDrivers: function () {
      if (onLoadDrivers) {
        onLoadDrivers(selectedYear);
      }
    }
  })));
}
/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "12b4ec150dccec419ff9"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC43MWM1MmYyNTY2ZWRlODY2NjJjZC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUNVO0FBQ1YsT0FBTyxJQUFVO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixtQkFBTyxDQUFDLEVBQTBFLGVBQWU7QUFDekg7QUFDQTtBQUNBLFVBQVUsVUFBVTtBQUNwQixVQUFVLFVBQVU7QUFDcEIsVUFBVSxVQUFVO0FBQ3BCO0FBQ0EsVUFBVSxVQUFVO0FBQ3BCLFVBQVU7QUFDVixVQUFVLGlCQUFpQjtBQUMzQjtBQUNBLFFBQVEsVUFBVTtBQUNsQjtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2QkE7QUFDd0M7QUFDUjtBQUNFO0FBRWxDLFNBQVNJLE1BQU1BLENBQUFDLElBQUEsRUFBaUM7RUFBQSxJQUE5QkMsV0FBVyxHQUFBRCxJQUFBLENBQVhDLFdBQVc7SUFBRUMsYUFBYSxHQUFBRixJQUFBLENBQWJFLGFBQWE7RUFDMUMsSUFBQUMsU0FBQSxHQUF3Q1AsK0NBQVEsQ0FBQyxJQUFJLENBQUM7SUFBQVEsVUFBQSxHQUFBQyxjQUFBLENBQUFGLFNBQUE7SUFBL0NHLFlBQVksR0FBQUYsVUFBQTtJQUFFRyxlQUFlLEdBQUFILFVBQUE7RUFrQnBDLG9CQUNFVCwwREFBQTtJQUFLYyxTQUFTLEVBQUM7RUFBVyxnQkFDeEJkLDBEQUFBO0lBQUtjLFNBQVMsRUFBQztFQUFVLGdCQUN2QmQsMERBQUEsYUFBSSxlQUFVLEVBQUNXLFlBQWlCLENBQUMsZUFDakNYLDBEQUFBLENBQUNHLGlEQUFRO0lBQUNZLFlBQVksRUFwQkgsU0FBQUEsQ0FBQ0MsSUFBSSxFQUFLO01BQ2pDSixlQUFlLENBQUNJLElBQUksQ0FBQztJQUN2QixDQWtCK0M7SUFBQ0MsV0FBVyxFQUFFTjtFQUFhLENBQUUsQ0FBQyxlQUN2RVgsMERBQUEsQ0FBQ0UsZ0RBQU87SUFBQ0ksV0FBVyxFQWpCRixTQUFBQSxDQUFBLEVBQU07TUFDNUIsSUFBSUEsV0FBVyxFQUFFO1FBQ2ZBLFdBQVcsQ0FBQ0ssWUFBWSxDQUFDO01BQzNCO0lBQ0YsQ0FhNEM7SUFBQ0osYUFBYSxFQVhoQyxTQUFBQSxDQUFBLEVBQU07TUFDOUIsSUFBSUEsYUFBYSxFQUFFO1FBQ2pCQSxhQUFhLENBQUNJLFlBQVksQ0FBQztNQUM3QjtJQUNGO0VBTzhFLENBQUUsQ0FDdkUsQ0FDRixDQUFDO0FBRVY7QUFFQSwrREFBZVAsTUFBTTs7Ozs7Ozs7VUNuQ3JCLHFDQUFxQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnBhY2svLi9jc3Mvc3R5bGUuY3NzP2VhNzgiLCJ3ZWJwYWNrOi8vd2VicGFjay8uL2pzL2NvbXBvbmVudHMvSGVhZGVyLmpzIiwid2VicGFjazovL3dlYnBhY2svd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9O1xuICAgIGlmKG1vZHVsZS5ob3QpIHtcbiAgICAgIChmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGxvY2Fsc0pzb25TdHJpbmcgPSB1bmRlZmluZWQ7XG4gICAgICAgIC8vIDE3NDU3NTQ0ODg0MjRcbiAgICAgICAgdmFyIGNzc1JlbG9hZCA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9obXIvaG90TW9kdWxlUmVwbGFjZW1lbnQuanNcIikobW9kdWxlLmlkLCB7fSk7XG4gICAgICAgIC8vIG9ubHkgaW52YWxpZGF0ZSB3aGVuIGxvY2FscyBjaGFuZ2VcbiAgICAgICAgaWYgKFxuICAgICAgICAgIG1vZHVsZS5ob3QuZGF0YSAmJlxuICAgICAgICAgIG1vZHVsZS5ob3QuZGF0YS52YWx1ZSAmJlxuICAgICAgICAgIG1vZHVsZS5ob3QuZGF0YS52YWx1ZSAhPT0gbG9jYWxzSnNvblN0cmluZ1xuICAgICAgICApIHtcbiAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgICAgICB9XG4gICAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgZGF0YS52YWx1ZSA9IGxvY2Fsc0pzb25TdHJpbmc7XG4gICAgICAgICAgY3NzUmVsb2FkKCk7XG4gICAgICAgIH0pO1xuICAgICAgfSkoKTtcbiAgICB9XG4gICIsIi8vIGNvbXBvbmVudHMvSGVhZGVyLmpzXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQnV0dG9ucyBmcm9tICcuL0J1dHRvbnMnO1xuaW1wb3J0IERyb3Bkb3duIGZyb20gJy4vRHJvcGRvd24nO1xuXG5mdW5jdGlvbiBIZWFkZXIoeyBvbkxvYWRSYWNlcywgb25Mb2FkRHJpdmVycyB9KSB7XG4gIGNvbnN0IFtzZWxlY3RlZFllYXIsIHNldFNlbGVjdGVkWWVhcl0gPSB1c2VTdGF0ZSgyMDI1KTtcblxuICBjb25zdCBoYW5kbGVZZWFyQ2hhbmdlID0gKHllYXIpID0+IHtcbiAgICBzZXRTZWxlY3RlZFllYXIoeWVhcik7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlTG9hZFJhY2VzID0gKCkgPT4ge1xuICAgIGlmIChvbkxvYWRSYWNlcykge1xuICAgICAgb25Mb2FkUmFjZXMoc2VsZWN0ZWRZZWFyKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlTG9hZERyaXZlcnMgPSAoKSA9PiB7XG4gICAgaWYgKG9uTG9hZERyaXZlcnMpIHtcbiAgICAgIG9uTG9hZERyaXZlcnMoc2VsZWN0ZWRZZWFyKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcGxpa2FjZVwiPlxuICAgICAgICA8aDE+RjEgWsOhdm9keSB7c2VsZWN0ZWRZZWFyfTwvaDE+XG4gICAgICAgIDxEcm9wZG93biBvblllYXJDaGFuZ2U9e2hhbmRsZVllYXJDaGFuZ2V9IGRlZmF1bHRZZWFyPXtzZWxlY3RlZFllYXJ9IC8+XG4gICAgICAgIDxCdXR0b25zIG9uTG9hZFJhY2VzPXtoYW5kbGVMb2FkUmFjZXN9IG9uTG9hZERyaXZlcnM9e2hhbmRsZUxvYWREcml2ZXJzfSAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gXCIxMmI0ZWMxNTBkY2NlYzQxOWZmOVwiOyB9Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJCdXR0b25zIiwiRHJvcGRvd24iLCJIZWFkZXIiLCJfcmVmIiwib25Mb2FkUmFjZXMiLCJvbkxvYWREcml2ZXJzIiwiX3VzZVN0YXRlIiwiX3VzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5Iiwic2VsZWN0ZWRZZWFyIiwic2V0U2VsZWN0ZWRZZWFyIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsIm9uWWVhckNoYW5nZSIsInllYXIiLCJkZWZhdWx0WWVhciJdLCJzb3VyY2VSb290IjoiIn0=