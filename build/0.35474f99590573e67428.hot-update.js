"use strict";
self["webpackHotUpdatewebpack"](0,{

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin

    if(true) {
      (function() {
        var localsJsonString = undefined;
        // 1745754366507
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

var Dropdown = function (_ref) {
  var onYearChange = _ref.onYearChange,
    _ref$defaultYear = _ref.defaultYear,
    defaultYear = _ref$defaultYear === void 0 ? 2025 : _ref$defaultYear;
  var years = Array.from({
    length: 2025 - 1950 + 1
  }, function (_, i) {
    return 1950 + i;
  });
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(defaultYear),
    _useState2 = _slicedToArray(_useState, 2),
    selectedYear = _useState2[0],
    setSelectedYear = _useState2[1];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "relative inline-block w-64"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("select", {
    value: selectedYear,
    onChange: function (e) {
      var year = parseInt(e.target.value);
      setSelectedYear(year);
      if (onYearChange) {
        onYearChange(year);
      }
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
/******/ 	__webpack_require__.h = function() { return "172034a7e2507946dde2"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4zNTQ3NGY5OTU5MDU3M2U2NzQyOC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUNVO0FBQ1YsT0FBTyxJQUFVO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixtQkFBTyxDQUFDLEVBQTBFLGVBQWU7QUFDekg7QUFDQTtBQUNBLFVBQVUsVUFBVTtBQUNwQixVQUFVLFVBQVU7QUFDcEIsVUFBVSxVQUFVO0FBQ3BCO0FBQ0EsVUFBVSxVQUFVO0FBQ3BCLFVBQVU7QUFDVixVQUFVLGlCQUFpQjtBQUMzQjtBQUNBLFFBQVEsVUFBVTtBQUNsQjtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDdkJ3QztBQUV4QyxJQUFNRSxRQUFRLEdBQUcsU0FBQUEsQ0FBQUMsSUFBQSxFQUEwQztFQUFBLElBQXZDQyxZQUFZLEdBQUFELElBQUEsQ0FBWkMsWUFBWTtJQUFBQyxnQkFBQSxHQUFBRixJQUFBLENBQUVHLFdBQVc7SUFBWEEsV0FBVyxHQUFBRCxnQkFBQSxjQUFHLElBQUksR0FBQUEsZ0JBQUE7RUFDbEQsSUFBTUUsS0FBSyxHQUFHQyxLQUFLLENBQUNDLElBQUksQ0FBQztJQUFFQyxNQUFNLEVBQUUsSUFBSSxHQUFHLElBQUksR0FBRztFQUFFLENBQUMsRUFBRSxVQUFDQyxDQUFDLEVBQUVDLENBQUM7SUFBQSxPQUFLLElBQUksR0FBR0EsQ0FBQztFQUFBLEVBQUM7RUFDekUsSUFBQUMsU0FBQSxHQUF3Q1osK0NBQVEsQ0FBQ0ssV0FBVyxDQUFDO0lBQUFRLFVBQUEsR0FBQUMsY0FBQSxDQUFBRixTQUFBO0lBQXRERyxZQUFZLEdBQUFGLFVBQUE7SUFBRUcsZUFBZSxHQUFBSCxVQUFBO0VBVXBDLG9CQUNFZCwwREFBQTtJQUFLbUIsU0FBUyxFQUFDO0VBQTRCLGdCQUN6Q25CLDBEQUFBO0lBQ0VvQixLQUFLLEVBQUVKLFlBQWE7SUFDcEJLLFFBQVEsRUFaTyxTQUFBQSxDQUFDQyxDQUFDLEVBQUs7TUFDMUIsSUFBTUMsSUFBSSxHQUFHQyxRQUFRLENBQUNGLENBQUMsQ0FBQ0csTUFBTSxDQUFDTCxLQUFLLENBQUM7TUFDckNILGVBQWUsQ0FBQ00sSUFBSSxDQUFDO01BQ3JCLElBQUluQixZQUFZLEVBQUU7UUFDaEJBLFlBQVksQ0FBQ21CLElBQUksQ0FBQztNQUNwQjtJQUNGLENBTTZCO0lBQ3ZCSixTQUFTLEVBQUM7RUFBK0MsR0FFeERaLEtBQUssQ0FBQ21CLEdBQUcsQ0FBQyxVQUFDSCxJQUFJO0lBQUEsb0JBQ2R2QiwwREFBQTtNQUFRMkIsR0FBRyxFQUFFSixJQUFLO01BQUNILEtBQUssRUFBRUc7SUFBSyxHQUM1QkEsSUFDSyxDQUFDO0VBQUEsQ0FDVixDQUNLLENBQ0wsQ0FBQztBQUVWLENBQUM7QUFFRCwrREFBZXJCLFFBQVE7Ozs7Ozs7O1VDL0J2QixxQ0FBcUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLy4vY3NzL3N0eWxlLmNzcz9lYTc4Iiwid2VicGFjazovL3dlYnBhY2svLi9qcy9jb21wb25lbnRzL0Ryb3Bkb3duLmpzIiwid2VicGFjazovL3dlYnBhY2svd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9O1xuICAgIGlmKG1vZHVsZS5ob3QpIHtcbiAgICAgIChmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGxvY2Fsc0pzb25TdHJpbmcgPSB1bmRlZmluZWQ7XG4gICAgICAgIC8vIDE3NDU3NTQzNjY1MDdcbiAgICAgICAgdmFyIGNzc1JlbG9hZCA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9obXIvaG90TW9kdWxlUmVwbGFjZW1lbnQuanNcIikobW9kdWxlLmlkLCB7fSk7XG4gICAgICAgIC8vIG9ubHkgaW52YWxpZGF0ZSB3aGVuIGxvY2FscyBjaGFuZ2VcbiAgICAgICAgaWYgKFxuICAgICAgICAgIG1vZHVsZS5ob3QuZGF0YSAmJlxuICAgICAgICAgIG1vZHVsZS5ob3QuZGF0YS52YWx1ZSAmJlxuICAgICAgICAgIG1vZHVsZS5ob3QuZGF0YS52YWx1ZSAhPT0gbG9jYWxzSnNvblN0cmluZ1xuICAgICAgICApIHtcbiAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgICAgICB9XG4gICAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgZGF0YS52YWx1ZSA9IGxvY2Fsc0pzb25TdHJpbmc7XG4gICAgICAgICAgY3NzUmVsb2FkKCk7XG4gICAgICAgIH0pO1xuICAgICAgfSkoKTtcbiAgICB9XG4gICIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBEcm9wZG93biA9ICh7IG9uWWVhckNoYW5nZSwgZGVmYXVsdFllYXIgPSAyMDI1IH0pID0+IHtcbiAgY29uc3QgeWVhcnMgPSBBcnJheS5mcm9tKHsgbGVuZ3RoOiAyMDI1IC0gMTk1MCArIDEgfSwgKF8sIGkpID0+IDE5NTAgKyBpKTtcbiAgY29uc3QgW3NlbGVjdGVkWWVhciwgc2V0U2VsZWN0ZWRZZWFyXSA9IHVzZVN0YXRlKGRlZmF1bHRZZWFyKTtcblxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZSkgPT4ge1xuICAgIGNvbnN0IHllYXIgPSBwYXJzZUludChlLnRhcmdldC52YWx1ZSk7XG4gICAgc2V0U2VsZWN0ZWRZZWFyKHllYXIpO1xuICAgIGlmIChvblllYXJDaGFuZ2UpIHtcbiAgICAgIG9uWWVhckNoYW5nZSh5ZWFyKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIGlubGluZS1ibG9jayB3LTY0XCI+XG4gICAgICA8c2VsZWN0XG4gICAgICAgIHZhbHVlPXtzZWxlY3RlZFllYXJ9XG4gICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBwLTIgYmctd2hpdGUgYm9yZGVyIHJvdW5kZWQtMnhsIHNoYWRvd1wiXG4gICAgICA+XG4gICAgICAgIHt5ZWFycy5tYXAoKHllYXIpID0+IChcbiAgICAgICAgICA8b3B0aW9uIGtleT17eWVhcn0gdmFsdWU9e3llYXJ9PlxuICAgICAgICAgICAge3llYXJ9XG4gICAgICAgICAgPC9vcHRpb24+XG4gICAgICAgICkpfVxuICAgICAgPC9zZWxlY3Q+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBEcm9wZG93bjtcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gXCIxNzIwMzRhN2UyNTA3OTQ2ZGRlMlwiOyB9Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJEcm9wZG93biIsIl9yZWYiLCJvblllYXJDaGFuZ2UiLCJfcmVmJGRlZmF1bHRZZWFyIiwiZGVmYXVsdFllYXIiLCJ5ZWFycyIsIkFycmF5IiwiZnJvbSIsImxlbmd0aCIsIl8iLCJpIiwiX3VzZVN0YXRlIiwiX3VzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5Iiwic2VsZWN0ZWRZZWFyIiwic2V0U2VsZWN0ZWRZZWFyIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsInZhbHVlIiwib25DaGFuZ2UiLCJlIiwieWVhciIsInBhcnNlSW50IiwidGFyZ2V0IiwibWFwIiwia2V5Il0sInNvdXJjZVJvb3QiOiIifQ==