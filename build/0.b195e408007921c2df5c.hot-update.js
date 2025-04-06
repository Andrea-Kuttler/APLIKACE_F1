"use strict";
self["webpackHotUpdatewebpack"](0,{

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin

    if(true) {
      (function() {
        var localsJsonString = undefined;
        // 1743920380414
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

/***/ 38:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function Main(_ref) {
  var isRacesVisible = _ref.isRacesVisible,
    races = _ref.races,
    drivers = _ref.drivers;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
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
  })));
}
/* harmony default export */ __webpack_exports__["default"] = (Main);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "47a2831572b80bf6a346"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5iMTk1ZTQwODAwNzkyMWMyZGY1Yy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUNVO0FBQ1YsT0FBTyxJQUFVO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixtQkFBTyxDQUFDLEVBQTBFLGVBQWU7QUFDekg7QUFDQTtBQUNBLFVBQVUsVUFBVTtBQUNwQixVQUFVLFVBQVU7QUFDcEIsVUFBVSxVQUFVO0FBQ3BCO0FBQ0EsVUFBVSxVQUFVO0FBQ3BCLFVBQVU7QUFDVixVQUFVLGlCQUFpQjtBQUMzQjtBQUNBLFFBQVEsVUFBVTtBQUNsQjtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBOzs7Ozs7Ozs7O0FDdkIwQjtBQUUxQixTQUFTQyxJQUFJQSxDQUFBQyxJQUFBLEVBQXFDO0VBQUEsSUFBbENDLGNBQWMsR0FBQUQsSUFBQSxDQUFkQyxjQUFjO0lBQUVDLEtBQUssR0FBQUYsSUFBQSxDQUFMRSxLQUFLO0lBQUVDLE9BQU8sR0FBQUgsSUFBQSxDQUFQRyxPQUFPO0VBQzVDLG9CQUNFTCwwREFBQTtJQUFLTyxTQUFTLEVBQUM7RUFBUSxHQUNwQkosY0FBYyxnQkFDYkgsMERBQUE7SUFBSVEsRUFBRSxFQUFDO0VBQVUsR0FDZEosS0FBSyxDQUFDSyxHQUFHLENBQUMsVUFBQUMsSUFBSTtJQUFBLG9CQUNiViwwREFBQTtNQUFJVyxHQUFHLEVBQUVELElBQUksQ0FBQ0U7SUFBTSxNQUFBQyxNQUFBLENBQ2RILElBQUksQ0FBQ0UsS0FBSyxRQUFBQyxNQUFBLENBQUtILElBQUksQ0FBQ0ksUUFBUSxRQUFBRCxNQUFBLENBQUtILElBQUksQ0FBQ0ssSUFBSSxVQUFBRixNQUFBLENBQU9ILElBQUksQ0FBQ00sT0FBTyxDQUFDQyxXQUFXLENBQzNFLENBQUM7RUFBQSxDQUNOLENBQ0MsQ0FBQyxnQkFFTGpCLDBEQUFBO0lBQUlRLEVBQUUsRUFBQztFQUFZLEdBQ2hCSCxPQUFPLENBQUNJLEdBQUcsQ0FBQyxVQUFBUyxNQUFNO0lBQUEsb0JBQ2pCbEIsMERBQUE7TUFBSVcsR0FBRyxFQUFFTyxNQUFNLENBQUNDO0lBQVMsTUFBQU4sTUFBQSxDQUNuQkssTUFBTSxDQUFDRSxTQUFTLE9BQUFQLE1BQUEsQ0FBSUssTUFBTSxDQUFDRyxVQUFVLFFBQUFSLE1BQUEsQ0FBS0ssTUFBTSxDQUFDSSxXQUFXLFVBQUFULE1BQUEsQ0FBT0ssTUFBTSxDQUFDSyxlQUFlLElBQUksV0FBVyxDQUMxRyxDQUFDO0VBQUEsQ0FDTixDQUNDLENBRUgsQ0FBQztBQUVWO0FBRUEsK0RBQWV0QixJQUFJOzs7Ozs7OztVQzFCbkIscUNBQXFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFjay8uL2Nzcy9zdHlsZS5jc3M/ZWE3OCIsIndlYnBhY2s6Ly93ZWJwYWNrLy4vanMvY29tcG9uZW50cy9NYWluLmpzIiwid2VicGFjazovL3dlYnBhY2svd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9O1xuICAgIGlmKG1vZHVsZS5ob3QpIHtcbiAgICAgIChmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGxvY2Fsc0pzb25TdHJpbmcgPSB1bmRlZmluZWQ7XG4gICAgICAgIC8vIDE3NDM5MjAzODA0MTRcbiAgICAgICAgdmFyIGNzc1JlbG9hZCA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9obXIvaG90TW9kdWxlUmVwbGFjZW1lbnQuanNcIikobW9kdWxlLmlkLCB7fSk7XG4gICAgICAgIC8vIG9ubHkgaW52YWxpZGF0ZSB3aGVuIGxvY2FscyBjaGFuZ2VcbiAgICAgICAgaWYgKFxuICAgICAgICAgIG1vZHVsZS5ob3QuZGF0YSAmJlxuICAgICAgICAgIG1vZHVsZS5ob3QuZGF0YS52YWx1ZSAmJlxuICAgICAgICAgIG1vZHVsZS5ob3QuZGF0YS52YWx1ZSAhPT0gbG9jYWxzSnNvblN0cmluZ1xuICAgICAgICApIHtcbiAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgICAgICB9XG4gICAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgZGF0YS52YWx1ZSA9IGxvY2Fsc0pzb25TdHJpbmc7XG4gICAgICAgICAgY3NzUmVsb2FkKCk7XG4gICAgICAgIH0pO1xuICAgICAgfSkoKTtcbiAgICB9XG4gICIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmZ1bmN0aW9uIE1haW4oeyBpc1JhY2VzVmlzaWJsZSwgcmFjZXMsIGRyaXZlcnMgfSkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwic2V6bmFtXCI+XG4gICAgICB7aXNSYWNlc1Zpc2libGUgPyAoXG4gICAgICAgIDx1bCBpZD1cInJhY2VMaXN0XCI+XG4gICAgICAgICAge3JhY2VzLm1hcChyYWNlID0+IChcbiAgICAgICAgICAgIDxsaSBrZXk9e3JhY2Uucm91bmR9PlxuICAgICAgICAgICAgICB7YCR7cmFjZS5yb3VuZH06ICR7cmFjZS5yYWNlTmFtZX0gKCR7cmFjZS5kYXRlfSkgLSAke3JhY2UuQ2lyY3VpdC5jaXJjdWl0TmFtZX1gfVxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC91bD5cbiAgICAgICkgOiAoXG4gICAgICAgIDx1bCBpZD1cImRyaXZlckxpc3RcIj5cbiAgICAgICAgICB7ZHJpdmVycy5tYXAoZHJpdmVyID0+IChcbiAgICAgICAgICAgIDxsaSBrZXk9e2RyaXZlci5kcml2ZXJJZH0+XG4gICAgICAgICAgICAgIHtgJHtkcml2ZXIuZ2l2ZW5OYW1lfSAke2RyaXZlci5mYW1pbHlOYW1lfSAoJHtkcml2ZXIubmF0aW9uYWxpdHl9KSAtICR7ZHJpdmVyLnBlcm1hbmVudE51bWJlciA/PyAnYmV6IMSNw61zbGEnfWB9XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L3VsPlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTWFpbjtcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gXCI0N2EyODMxNTcyYjgwYmY2YTM0NlwiOyB9Il0sIm5hbWVzIjpbIlJlYWN0IiwiTWFpbiIsIl9yZWYiLCJpc1JhY2VzVmlzaWJsZSIsInJhY2VzIiwiZHJpdmVycyIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJpZCIsIm1hcCIsInJhY2UiLCJrZXkiLCJyb3VuZCIsImNvbmNhdCIsInJhY2VOYW1lIiwiZGF0ZSIsIkNpcmN1aXQiLCJjaXJjdWl0TmFtZSIsImRyaXZlciIsImRyaXZlcklkIiwiZ2l2ZW5OYW1lIiwiZmFtaWx5TmFtZSIsIm5hdGlvbmFsaXR5IiwicGVybWFuZW50TnVtYmVyIl0sInNvdXJjZVJvb3QiOiIifQ==