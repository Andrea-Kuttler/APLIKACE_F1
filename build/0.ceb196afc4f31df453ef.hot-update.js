"use strict";
self["webpackHotUpdatewebpack"](0,{

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin

    if(true) {
      (function() {
        var localsJsonString = undefined;
        // 1745753906510
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
/******/ 	__webpack_require__.h = function() { return "8dd3a797d461d32a7605"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5jZWIxOTZhZmM0ZjMxZGY0NTNlZi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUNVO0FBQ1YsT0FBTyxJQUFVO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixtQkFBTyxDQUFDLEVBQTBFLGVBQWU7QUFDekg7QUFDQTtBQUNBLFVBQVUsVUFBVTtBQUNwQixVQUFVLFVBQVU7QUFDcEIsVUFBVSxVQUFVO0FBQ3BCO0FBQ0EsVUFBVSxVQUFVO0FBQ3BCLFVBQVU7QUFDVixVQUFVLGlCQUFpQjtBQUMzQjtBQUNBLFFBQVEsVUFBVTtBQUNsQjtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDdkJ3QztBQUV4QyxJQUFNRSxRQUFRLEdBQUcsU0FBQUEsQ0FBQSxFQUFNO0VBQ3JCLElBQU1DLEtBQUssR0FBR0MsS0FBSyxDQUFDQyxJQUFJLENBQUM7SUFBRUMsTUFBTSxFQUFFLElBQUksR0FBRyxJQUFJLEdBQUc7RUFBRSxDQUFDLEVBQUUsVUFBQ0MsQ0FBQyxFQUFFQyxDQUFDO0lBQUEsT0FBSyxJQUFJLEdBQUdBLENBQUM7RUFBQSxFQUFDO0VBQ3pFLElBQUFDLFNBQUEsR0FBd0NSLCtDQUFRLENBQUMsSUFBSSxDQUFDO0lBQUFTLFVBQUEsR0FBQUMsY0FBQSxDQUFBRixTQUFBO0lBQS9DRyxZQUFZLEdBQUFGLFVBQUE7SUFBRUcsZUFBZSxHQUFBSCxVQUFBO0VBTXBDLG9CQUNFViwwREFBQTtJQUFLZSxTQUFTLEVBQUM7RUFBZSxnQkFDNUJmLDBEQUFBO0lBQ0VnQixLQUFLLEVBQUVKLFlBQWE7SUFDcEJLLFFBQVEsRUFSTyxTQUFBQSxDQUFDQyxDQUFDLEVBQUs7TUFDMUJMLGVBQWUsQ0FBQ00sUUFBUSxDQUFDRCxDQUFDLENBQUNFLE1BQU0sQ0FBQ0osS0FBSyxDQUFDLENBQUM7SUFDM0M7RUFNNkIsR0FFdEJiLEtBQUssQ0FBQ2tCLEdBQUcsQ0FBQyxVQUFDQyxJQUFJO0lBQUEsb0JBQ2R0QiwwREFBQTtNQUFRdUIsR0FBRyxFQUFFRCxJQUFLO01BQUNOLEtBQUssRUFBRU07SUFBSyxHQUM1QkEsSUFDSyxDQUFDO0VBQUEsQ0FDVixDQUNLLENBQ0wsQ0FBQztBQUVWLENBQUM7QUFFRCwrREFBZXBCLFFBQVE7Ozs7Ozs7O1VDMUJ2QixxQ0FBcUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLy4vY3NzL3N0eWxlLmNzcz9lYTc4Iiwid2VicGFjazovL3dlYnBhY2svLi9qcy9jb21wb25lbnRzL0Ryb3Bkb3duLmpzIiwid2VicGFjazovL3dlYnBhY2svd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9O1xuICAgIGlmKG1vZHVsZS5ob3QpIHtcbiAgICAgIChmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGxvY2Fsc0pzb25TdHJpbmcgPSB1bmRlZmluZWQ7XG4gICAgICAgIC8vIDE3NDU3NTM5MDY1MTBcbiAgICAgICAgdmFyIGNzc1JlbG9hZCA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9obXIvaG90TW9kdWxlUmVwbGFjZW1lbnQuanNcIikobW9kdWxlLmlkLCB7fSk7XG4gICAgICAgIC8vIG9ubHkgaW52YWxpZGF0ZSB3aGVuIGxvY2FscyBjaGFuZ2VcbiAgICAgICAgaWYgKFxuICAgICAgICAgIG1vZHVsZS5ob3QuZGF0YSAmJlxuICAgICAgICAgIG1vZHVsZS5ob3QuZGF0YS52YWx1ZSAmJlxuICAgICAgICAgIG1vZHVsZS5ob3QuZGF0YS52YWx1ZSAhPT0gbG9jYWxzSnNvblN0cmluZ1xuICAgICAgICApIHtcbiAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgICAgICB9XG4gICAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgZGF0YS52YWx1ZSA9IGxvY2Fsc0pzb25TdHJpbmc7XG4gICAgICAgICAgY3NzUmVsb2FkKCk7XG4gICAgICAgIH0pO1xuICAgICAgfSkoKTtcbiAgICB9XG4gICIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBEcm9wZG93biA9ICgpID0+IHtcbiAgY29uc3QgeWVhcnMgPSBBcnJheS5mcm9tKHsgbGVuZ3RoOiAyMDI1IC0gMTk1MCArIDEgfSwgKF8sIGkpID0+IDE5NTAgKyBpKTtcbiAgY29uc3QgW3NlbGVjdGVkWWVhciwgc2V0U2VsZWN0ZWRZZWFyXSA9IHVzZVN0YXRlKDIwMjUpO1xuXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlKSA9PiB7XG4gICAgc2V0U2VsZWN0ZWRZZWFyKHBhcnNlSW50KGUudGFyZ2V0LnZhbHVlKSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInllYXItZHJvcGRvd25cIj5cbiAgICAgIDxzZWxlY3RcbiAgICAgICAgdmFsdWU9e3NlbGVjdGVkWWVhcn1cbiAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgID5cbiAgICAgICAge3llYXJzLm1hcCgoeWVhcikgPT4gKFxuICAgICAgICAgIDxvcHRpb24ga2V5PXt5ZWFyfSB2YWx1ZT17eWVhcn0+XG4gICAgICAgICAgICB7eWVhcn1cbiAgICAgICAgICA8L29wdGlvbj5cbiAgICAgICAgKSl9XG4gICAgICA8L3NlbGVjdD5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IERyb3Bkb3duOyIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gXCI4ZGQzYTc5N2Q0NjFkMzJhNzYwNVwiOyB9Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJEcm9wZG93biIsInllYXJzIiwiQXJyYXkiLCJmcm9tIiwibGVuZ3RoIiwiXyIsImkiLCJfdXNlU3RhdGUiLCJfdXNlU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkiLCJzZWxlY3RlZFllYXIiLCJzZXRTZWxlY3RlZFllYXIiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJwYXJzZUludCIsInRhcmdldCIsIm1hcCIsInllYXIiLCJrZXkiXSwic291cmNlUm9vdCI6IiJ9