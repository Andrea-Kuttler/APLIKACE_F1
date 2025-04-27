"use strict";
self["webpackHotUpdatewebpack"](0,{

/***/ 23:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27);
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(37);
/* harmony import */ var _components_Main__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(39);
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }


 // Importujeme CSS soubor

 // Importujeme komponentu Header
 // Importujeme komponentu Main

var App = function () {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    races = _useState2[0],
    setRaces = _useState2[1]; // Stav pro závody
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState4 = _slicedToArray(_useState3, 2),
    drivers = _useState4[0],
    setDrivers = _useState4[1]; // Stav pro jezdce
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
    _useState6 = _slicedToArray(_useState5, 2),
    isRacesVisible = _useState6[0],
    setIsRacesVisible = _useState6[1]; // Stav pro zobrazení závodů/jezdců

  // Funkce pro načtení závodů podle roku

  // Funkce pro načtení jezdců podle roku

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Header__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onLoadRaces: function (year) {
      var apiUrl = "https://ergast.com/api/f1/".concat(year, ".json");
      fetch(apiUrl).then(function (response) {
        if (!response.ok) {
          throw new Error('Chyba při získávání dat');
        }
        return response.json();
      }).then(function (data) {
        setRaces(data.MRData.RaceTable.Races); // Nastavíme data o závodech
        setIsRacesVisible(true); // Zobrazíme závody
      })["catch"](function (error) {
        console.error('Chyba:', error);
      });
    },
    onLoadDrivers: function (year) {
      var apiUrl = "https://ergast.com/api/f1/".concat(year, "/drivers.json");
      fetch(apiUrl).then(function (response) {
        if (!response.ok) {
          throw new Error('Chyba při získávání dat');
        }
        return response.json();
      }).then(function (data) {
        setDrivers(data.MRData.DriverTable.Drivers); // Nastavíme data o jezdcích
        setIsRacesVisible(false); // Zobrazíme jezdce
      })["catch"](function (error) {
        console.error('Chyba:', error);
      });
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Main__WEBPACK_IMPORTED_MODULE_4__["default"], {
    isRacesVisible: isRacesVisible,
    races: races,
    drivers: drivers
  }));
};
var container = document.getElementById("app");
var root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(container);
root.render(/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(App, null));

/***/ }),

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin

    if(true) {
      (function() {
        var localsJsonString = undefined;
        // 1745754561622
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
  

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "14b99b2b40e5221b0548"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUssRUFBRUEsS0FBTTtJQUNiSSxPQUFPLEVBQUVBO0VBQVEsQ0FDcEIsQ0FDSCxDQUFDO0FBRVgsQ0FBQztBQUVELElBQU0yQixTQUFTLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLEtBQUssQ0FBQztBQUNoRCxJQUFNQyxJQUFJLEdBQUd6Qyw0REFBVSxDQUFDc0MsU0FBUyxDQUFDO0FBQ2xDRyxJQUFJLENBQUNDLE1BQU0sY0FBQzVDLDBEQUFBLENBQUNLLEdBQUcsTUFBRSxDQUFDLENBQUM7Ozs7Ozs7O0FDckVwQjtBQUNVO0FBQ1YsT0FBTyxJQUFVO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixtQkFBTyxDQUFDLEVBQTBFLGVBQWU7QUFDekg7QUFDQTtBQUNBLFVBQVUsVUFBVTtBQUNwQixVQUFVLFVBQVU7QUFDcEIsVUFBVSxVQUFVO0FBQ3BCO0FBQ0EsVUFBVSxVQUFVO0FBQ3BCLFVBQVU7QUFDVixVQUFVLGlCQUFpQjtBQUMzQjtBQUNBLFFBQVEsVUFBVTtBQUNsQjtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBOzs7Ozs7OztVQ3ZCQSxxQ0FBcUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLy4vanMvYXBwLmpzIiwid2VicGFjazovL3dlYnBhY2svLi9jc3Mvc3R5bGUuY3NzP2VhNzgiLCJ3ZWJwYWNrOi8vd2VicGFjay93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY3JlYXRlUm9vdCB9IGZyb20gXCJyZWFjdC1kb20vY2xpZW50XCI7XG5pbXBvcnQgJy4uL2Nzcy9zdHlsZS5jc3MnOyAgLy8gSW1wb3J0dWplbWUgQ1NTIHNvdWJvclxuXG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuL2NvbXBvbmVudHMvSGVhZGVyXCI7ICAvLyBJbXBvcnR1amVtZSBrb21wb25lbnR1IEhlYWRlclxuaW1wb3J0IE1haW4gZnJvbSBcIi4vY29tcG9uZW50cy9NYWluXCI7ICAvLyBJbXBvcnR1amVtZSBrb21wb25lbnR1IE1haW5cblxuY29uc3QgQXBwID0gKCkgPT4ge1xuICAgIGNvbnN0IFtyYWNlcywgc2V0UmFjZXNdID0gdXNlU3RhdGUoW10pOyAgLy8gU3RhdiBwcm8gesOhdm9keVxuICAgIGNvbnN0IFtkcml2ZXJzLCBzZXREcml2ZXJzXSA9IHVzZVN0YXRlKFtdKTsgIC8vIFN0YXYgcHJvIGplemRjZVxuICAgIGNvbnN0IFtpc1JhY2VzVmlzaWJsZSwgc2V0SXNSYWNlc1Zpc2libGVdID0gdXNlU3RhdGUodHJ1ZSk7ICAvLyBTdGF2IHBybyB6b2JyYXplbsOtIHrDoXZvZMWvL2plemRjxa9cblxuICAgIC8vIEZ1bmtjZSBwcm8gbmHEjXRlbsOtIHrDoXZvZMWvIHBvZGxlIHJva3VcbiAgICBjb25zdCBmZXRjaFJhY2VzID0gKHllYXIpID0+IHtcbiAgICAgICAgY29uc3QgYXBpVXJsID0gYGh0dHBzOi8vZXJnYXN0LmNvbS9hcGkvZjEvJHt5ZWFyfS5qc29uYDtcblxuICAgICAgICBmZXRjaChhcGlVcmwpXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NoeWJhIHDFmWkgesOtc2vDoXbDoW7DrSBkYXQnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgICAgICBzZXRSYWNlcyhkYXRhLk1SRGF0YS5SYWNlVGFibGUuUmFjZXMpOyAgLy8gTmFzdGF2w61tZSBkYXRhIG8gesOhdm9kZWNoXG4gICAgICAgICAgICAgICAgc2V0SXNSYWNlc1Zpc2libGUodHJ1ZSk7ICAvLyBab2JyYXrDrW1lIHrDoXZvZHlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0NoeWJhOicsIGVycm9yKTtcbiAgICAgICAgICAgIH0pO1xuICAgIH07XG5cbiAgICAvLyBGdW5rY2UgcHJvIG5hxI10ZW7DrSBqZXpkY8WvIHBvZGxlIHJva3VcbiAgICBjb25zdCBmZXRjaERyaXZlcnMgPSAoeWVhcikgPT4ge1xuICAgICAgICBjb25zdCBhcGlVcmwgPSBgaHR0cHM6Ly9lcmdhc3QuY29tL2FwaS9mMS8ke3llYXJ9L2RyaXZlcnMuanNvbmA7XG5cbiAgICAgICAgZmV0Y2goYXBpVXJsKVxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDaHliYSBwxZlpIHrDrXNrw6F2w6Fuw60gZGF0Jyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgc2V0RHJpdmVycyhkYXRhLk1SRGF0YS5Ecml2ZXJUYWJsZS5Ecml2ZXJzKTsgIC8vIE5hc3RhdsOtbWUgZGF0YSBvIGplemRjw61jaFxuICAgICAgICAgICAgICAgIHNldElzUmFjZXNWaXNpYmxlKGZhbHNlKTsgIC8vIFpvYnJhesOtbWUgamV6ZGNlXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdDaHliYTonLCBlcnJvcik7XG4gICAgICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxIZWFkZXJcbiAgICAgICAgICAgICAgICBvbkxvYWRSYWNlcz17ZmV0Y2hSYWNlc31cbiAgICAgICAgICAgICAgICBvbkxvYWREcml2ZXJzPXtmZXRjaERyaXZlcnN9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPE1haW4gXG4gICAgICAgICAgICAgICAgaXNSYWNlc1Zpc2libGU9e2lzUmFjZXNWaXNpYmxlfVxuICAgICAgICAgICAgICAgIHJhY2VzPXtyYWNlc31cbiAgICAgICAgICAgICAgICBkcml2ZXJzPXtkcml2ZXJzfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgPC8+XG4gICAgKTtcbn07XG5cbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXBwXCIpO1xuY29uc3Qgcm9vdCA9IGNyZWF0ZVJvb3QoY29udGFpbmVyKTtcbnJvb3QucmVuZGVyKDxBcHAgLz4pO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307XG4gICAgaWYobW9kdWxlLmhvdCkge1xuICAgICAgKGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgbG9jYWxzSnNvblN0cmluZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgLy8gMTc0NTc1NDU2MTYyMlxuICAgICAgICB2YXIgY3NzUmVsb2FkID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2htci9ob3RNb2R1bGVSZXBsYWNlbWVudC5qc1wiKShtb2R1bGUuaWQsIHt9KTtcbiAgICAgICAgLy8gb25seSBpbnZhbGlkYXRlIHdoZW4gbG9jYWxzIGNoYW5nZVxuICAgICAgICBpZiAoXG4gICAgICAgICAgbW9kdWxlLmhvdC5kYXRhICYmXG4gICAgICAgICAgbW9kdWxlLmhvdC5kYXRhLnZhbHVlICYmXG4gICAgICAgICAgbW9kdWxlLmhvdC5kYXRhLnZhbHVlICE9PSBsb2NhbHNKc29uU3RyaW5nXG4gICAgICAgICkge1xuICAgICAgICAgIG1vZHVsZS5ob3QuaW52YWxpZGF0ZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgICAgIH1cbiAgICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICBkYXRhLnZhbHVlID0gbG9jYWxzSnNvblN0cmluZztcbiAgICAgICAgICBjc3NSZWxvYWQoKTtcbiAgICAgICAgfSk7XG4gICAgICB9KSgpO1xuICAgIH1cbiAgIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gZnVuY3Rpb24oKSB7IHJldHVybiBcIjE0Yjk5YjJiNDBlNTIyMWIwNTQ4XCI7IH0iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsImNyZWF0ZVJvb3QiLCJIZWFkZXIiLCJNYWluIiwiQXBwIiwiX3VzZVN0YXRlIiwiX3VzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5IiwicmFjZXMiLCJzZXRSYWNlcyIsIl91c2VTdGF0ZTMiLCJfdXNlU3RhdGU0IiwiZHJpdmVycyIsInNldERyaXZlcnMiLCJfdXNlU3RhdGU1IiwiX3VzZVN0YXRlNiIsImlzUmFjZXNWaXNpYmxlIiwic2V0SXNSYWNlc1Zpc2libGUiLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJvbkxvYWRSYWNlcyIsInllYXIiLCJhcGlVcmwiLCJjb25jYXQiLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsIm9rIiwiRXJyb3IiLCJqc29uIiwiZGF0YSIsIk1SRGF0YSIsIlJhY2VUYWJsZSIsIlJhY2VzIiwiZXJyb3IiLCJjb25zb2xlIiwib25Mb2FkRHJpdmVycyIsIkRyaXZlclRhYmxlIiwiRHJpdmVycyIsImNvbnRhaW5lciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJyb290IiwicmVuZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==