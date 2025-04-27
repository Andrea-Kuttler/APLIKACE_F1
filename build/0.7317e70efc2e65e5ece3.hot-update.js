"use strict";
self["webpackHotUpdatewebpack"](0,{

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin

    if(true) {
      (function() {
        var localsJsonString = undefined;
        // 1745754297719
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
  var onYearChange = _ref.onYearChange;
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
/******/ 	__webpack_require__.h = function() { return "35474f99590573e67428"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC43MzE3ZTcwZWZjMmU2NWU1ZWNlMy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUNVO0FBQ1YsT0FBTyxJQUFVO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixtQkFBTyxDQUFDLEVBQTBFLGVBQWU7QUFDekg7QUFDQTtBQUNBLFVBQVUsVUFBVTtBQUNwQixVQUFVLFVBQVU7QUFDcEIsVUFBVSxVQUFVO0FBQ3BCO0FBQ0EsVUFBVSxVQUFVO0FBQ3BCLFVBQVU7QUFDVixVQUFVLGlCQUFpQjtBQUMzQjtBQUNBLFFBQVEsVUFBVTtBQUNsQjtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDdkJ3QztBQUV4QyxJQUFNRSxRQUFRLEdBQUcsU0FBQUEsQ0FBQUMsSUFBQSxFQUFzQjtFQUFBLElBQW5CQyxZQUFZLEdBQUFELElBQUEsQ0FBWkMsWUFBWTtFQUM5QixJQUFNQyxLQUFLLEdBQUdDLEtBQUssQ0FBQ0MsSUFBSSxDQUFDO0lBQUVDLE1BQU0sRUFBRSxJQUFJLEdBQUcsSUFBSSxHQUFHO0VBQUUsQ0FBQyxFQUFFLFVBQUNDLENBQUMsRUFBRUMsQ0FBQztJQUFBLE9BQUssSUFBSSxHQUFHQSxDQUFDO0VBQUEsRUFBQztFQUN6RSxJQUFBQyxTQUFBLEdBQXdDViwrQ0FBUSxDQUFDLElBQUksQ0FBQztJQUFBVyxVQUFBLEdBQUFDLGNBQUEsQ0FBQUYsU0FBQTtJQUEvQ0csWUFBWSxHQUFBRixVQUFBO0lBQUVHLGVBQWUsR0FBQUgsVUFBQTtFQVVwQyxvQkFDRVosMERBQUE7SUFBS2lCLFNBQVMsRUFBQztFQUE0QixnQkFDekNqQiwwREFBQTtJQUNFa0IsS0FBSyxFQUFFSixZQUFhO0lBQ3BCSyxRQUFRLEVBWk8sU0FBQUEsQ0FBQ0MsQ0FBQyxFQUFLO01BQzFCLElBQU1DLElBQUksR0FBR0MsUUFBUSxDQUFDRixDQUFDLENBQUNHLE1BQU0sQ0FBQ0wsS0FBSyxDQUFDO01BQ3JDSCxlQUFlLENBQUNNLElBQUksQ0FBQztNQUNyQixJQUFJakIsWUFBWSxFQUFFO1FBQ2hCQSxZQUFZLENBQUNpQixJQUFJLENBQUM7TUFDcEI7SUFDRixDQU02QjtJQUN2QkosU0FBUyxFQUFDO0VBQStDLEdBRXhEWixLQUFLLENBQUNtQixHQUFHLENBQUMsVUFBQ0gsSUFBSTtJQUFBLG9CQUNkckIsMERBQUE7TUFBUXlCLEdBQUcsRUFBRUosSUFBSztNQUFDSCxLQUFLLEVBQUVHO0lBQUssR0FDNUJBLElBQ0ssQ0FBQztFQUFBLENBQ1YsQ0FDSyxDQUNMLENBQUM7QUFFVixDQUFDO0FBRUQsK0RBQWVuQixRQUFROzs7Ozs7OztVQy9CdkIscUNBQXFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFjay8uL2Nzcy9zdHlsZS5jc3M/ZWE3OCIsIndlYnBhY2s6Ly93ZWJwYWNrLy4vanMvY29tcG9uZW50cy9Ecm9wZG93bi5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTtcbiAgICBpZihtb2R1bGUuaG90KSB7XG4gICAgICAoZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBsb2NhbHNKc29uU3RyaW5nID0gdW5kZWZpbmVkO1xuICAgICAgICAvLyAxNzQ1NzU0Mjk3NzE5XG4gICAgICAgIHZhciBjc3NSZWxvYWQgPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvaG1yL2hvdE1vZHVsZVJlcGxhY2VtZW50LmpzXCIpKG1vZHVsZS5pZCwge30pO1xuICAgICAgICAvLyBvbmx5IGludmFsaWRhdGUgd2hlbiBsb2NhbHMgY2hhbmdlXG4gICAgICAgIGlmIChcbiAgICAgICAgICBtb2R1bGUuaG90LmRhdGEgJiZcbiAgICAgICAgICBtb2R1bGUuaG90LmRhdGEudmFsdWUgJiZcbiAgICAgICAgICBtb2R1bGUuaG90LmRhdGEudmFsdWUgIT09IGxvY2Fsc0pzb25TdHJpbmdcbiAgICAgICAgKSB7XG4gICAgICAgICAgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICAgICAgfVxuICAgICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgIGRhdGEudmFsdWUgPSBsb2NhbHNKc29uU3RyaW5nO1xuICAgICAgICAgIGNzc1JlbG9hZCgpO1xuICAgICAgICB9KTtcbiAgICAgIH0pKCk7XG4gICAgfVxuICAiLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgRHJvcGRvd24gPSAoeyBvblllYXJDaGFuZ2UgfSkgPT4ge1xuICBjb25zdCB5ZWFycyA9IEFycmF5LmZyb20oeyBsZW5ndGg6IDIwMjUgLSAxOTUwICsgMSB9LCAoXywgaSkgPT4gMTk1MCArIGkpO1xuICBjb25zdCBbc2VsZWN0ZWRZZWFyLCBzZXRTZWxlY3RlZFllYXJdID0gdXNlU3RhdGUoMjAyNSk7XG5cbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGUpID0+IHtcbiAgICBjb25zdCB5ZWFyID0gcGFyc2VJbnQoZS50YXJnZXQudmFsdWUpO1xuICAgIHNldFNlbGVjdGVkWWVhcih5ZWFyKTtcbiAgICBpZiAob25ZZWFyQ2hhbmdlKSB7XG4gICAgICBvblllYXJDaGFuZ2UoeWVhcik7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBpbmxpbmUtYmxvY2sgdy02NFwiPlxuICAgICAgPHNlbGVjdFxuICAgICAgICB2YWx1ZT17c2VsZWN0ZWRZZWFyfVxuICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgcC0yIGJnLXdoaXRlIGJvcmRlciByb3VuZGVkLTJ4bCBzaGFkb3dcIlxuICAgICAgPlxuICAgICAgICB7eWVhcnMubWFwKCh5ZWFyKSA9PiAoXG4gICAgICAgICAgPG9wdGlvbiBrZXk9e3llYXJ9IHZhbHVlPXt5ZWFyfT5cbiAgICAgICAgICAgIHt5ZWFyfVxuICAgICAgICAgIDwvb3B0aW9uPlxuICAgICAgICApKX1cbiAgICAgIDwvc2VsZWN0PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRHJvcGRvd247IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gZnVuY3Rpb24oKSB7IHJldHVybiBcIjM1NDc0Zjk5NTkwNTczZTY3NDI4XCI7IH0iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkRyb3Bkb3duIiwiX3JlZiIsIm9uWWVhckNoYW5nZSIsInllYXJzIiwiQXJyYXkiLCJmcm9tIiwibGVuZ3RoIiwiXyIsImkiLCJfdXNlU3RhdGUiLCJfdXNlU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkiLCJzZWxlY3RlZFllYXIiLCJzZXRTZWxlY3RlZFllYXIiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ5ZWFyIiwicGFyc2VJbnQiLCJ0YXJnZXQiLCJtYXAiLCJrZXkiXSwic291cmNlUm9vdCI6IiJ9