"use strict";
self["webpackHotUpdatewebpack"](0,{

/***/ 23:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27);
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }

 // Importujeme CSS soubor

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

  // Funkce pro načtení závodů

  // Funkce pro načtení jezdců

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "aplikace"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "F1 Z\xE1vody 2024"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "buttons"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: function () {
      fetch('https://ergast.com/api/f1/2024.json').then(function (response) {
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
    }
  }, "Na\u010D\xEDst z\xE1vody"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: function () {
      fetch('https://ergast.com/api/f1/2024/drivers.json').then(function (response) {
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
  }, "Na\u010D\xEDst jezdce")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
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
  })))));
};
/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ 27:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin

    if(true) {
      (function() {
        var localsJsonString = undefined;
        // 1743917549727
        var cssReload = __webpack_require__(28)(module.id, {});
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

/***/ 28:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {



/* eslint-env browser */
/*
  eslint-disable
  no-console,
  func-names
*/

/** @typedef {any} TODO */

var normalizeUrl = __webpack_require__(29);
var srcByModuleId = Object.create(null);
var noDocument = typeof document === "undefined";
var forEach = Array.prototype.forEach;

/**
 * @param {function} fn
 * @param {number} time
 * @returns {(function(): void)|*}
 */
function debounce(fn, time) {
  var timeout = 0;
  return function () {
    // @ts-ignore
    var self = this;
    // eslint-disable-next-line prefer-rest-params
    var args = arguments;
    var functionCall = function functionCall() {
      return fn.apply(self, args);
    };
    clearTimeout(timeout);

    // @ts-ignore
    timeout = setTimeout(functionCall, time);
  };
}
function noop() {}

/**
 * @param {TODO} moduleId
 * @returns {TODO}
 */
function getCurrentScriptUrl(moduleId) {
  var src = srcByModuleId[moduleId];
  if (!src) {
    if (document.currentScript) {
      src = ( /** @type {HTMLScriptElement} */document.currentScript).src;
    } else {
      var scripts = document.getElementsByTagName("script");
      var lastScriptTag = scripts[scripts.length - 1];
      if (lastScriptTag) {
        src = lastScriptTag.src;
      }
    }
    srcByModuleId[moduleId] = src;
  }

  /**
   * @param {string} fileMap
   * @returns {null | string[]}
   */
  return function (fileMap) {
    if (!src) {
      return null;
    }
    var splitResult = src.split(/([^\\/]+)\.js$/);
    var filename = splitResult && splitResult[1];
    if (!filename) {
      return [src.replace(".js", ".css")];
    }
    if (!fileMap) {
      return [src.replace(".js", ".css")];
    }
    return fileMap.split(",").map(function (mapRule) {
      var reg = new RegExp("".concat(filename, "\\.js$"), "g");
      return normalizeUrl(src.replace(reg, "".concat(mapRule.replace(/{fileName}/g, filename), ".css")));
    });
  };
}

/**
 * @param {TODO} el
 * @param {string} [url]
 */
function updateCss(el, url) {
  if (!url) {
    if (!el.href) {
      return;
    }

    // eslint-disable-next-line
    url = el.href.split("?")[0];
  }
  if (!isUrlRequest( /** @type {string} */url)) {
    return;
  }
  if (el.isLoaded === false) {
    // We seem to be about to replace a css link that hasn't loaded yet.
    // We're probably changing the same file more than once.
    return;
  }
  if (!url || !(url.indexOf(".css") > -1)) {
    return;
  }

  // eslint-disable-next-line no-param-reassign
  el.visited = true;
  var newEl = el.cloneNode();
  newEl.isLoaded = false;
  newEl.addEventListener("load", function () {
    if (newEl.isLoaded) {
      return;
    }
    newEl.isLoaded = true;
    el.parentNode.removeChild(el);
  });
  newEl.addEventListener("error", function () {
    if (newEl.isLoaded) {
      return;
    }
    newEl.isLoaded = true;
    el.parentNode.removeChild(el);
  });
  newEl.href = "".concat(url, "?").concat(Date.now());
  if (el.nextSibling) {
    el.parentNode.insertBefore(newEl, el.nextSibling);
  } else {
    el.parentNode.appendChild(newEl);
  }
}

/**
 * @param {string} href
 * @param {TODO} src
 * @returns {TODO}
 */
function getReloadUrl(href, src) {
  var ret;

  // eslint-disable-next-line no-param-reassign
  href = normalizeUrl(href);
  src.some(
  /**
   * @param {string} url
   */
  // eslint-disable-next-line array-callback-return
  function (url) {
    if (href.indexOf(src) > -1) {
      ret = url;
    }
  });
  return ret;
}

/**
 * @param {string} [src]
 * @returns {boolean}
 */
function reloadStyle(src) {
  if (!src) {
    return false;
  }
  var elements = document.querySelectorAll("link");
  var loaded = false;
  forEach.call(elements, function (el) {
    if (!el.href) {
      return;
    }
    var url = getReloadUrl(el.href, src);
    if (!isUrlRequest(url)) {
      return;
    }
    if (el.visited === true) {
      return;
    }
    if (url) {
      updateCss(el, url);
      loaded = true;
    }
  });
  return loaded;
}
function reloadAll() {
  var elements = document.querySelectorAll("link");
  forEach.call(elements, function (el) {
    if (el.visited === true) {
      return;
    }
    updateCss(el);
  });
}

/**
 * @param {string} url
 * @returns {boolean}
 */
function isUrlRequest(url) {
  // An URL is not an request if

  // It is not http or https
  if (!/^[a-zA-Z][a-zA-Z\d+\-.]*:/.test(url)) {
    return false;
  }
  return true;
}

/**
 * @param {TODO} moduleId
 * @param {TODO} options
 * @returns {TODO}
 */
module.exports = function (moduleId, options) {
  if (noDocument) {
    console.log("no window.document found, will not HMR CSS");
    return noop;
  }
  var getScriptSrc = getCurrentScriptUrl(moduleId);
  function update() {
    var src = getScriptSrc(options.filename);
    var reloaded = reloadStyle(src);
    if (options.locals) {
      console.log("[HMR] Detected local css modules. Reload all css");
      reloadAll();
      return;
    }
    if (reloaded) {
      console.log("[HMR] css reload %s", src.join(" "));
    } else {
      console.log("[HMR] Reload all css");
      reloadAll();
    }
  }
  return debounce(update, 50);
};

/***/ }),

/***/ 29:
/***/ (function(module) {



/* eslint-disable */

/**
 * @param {string[]} pathComponents
 * @returns {string}
 */
function normalizeUrl(pathComponents) {
  return pathComponents.reduce(function (accumulator, item) {
    switch (item) {
      case "..":
        accumulator.pop();
        break;
      case ".":
        break;
      default:
        accumulator.push(item);
    }
    return accumulator;
  }, /** @type {string[]} */[]).join("/");
}

/**
 * @param {string} urlString
 * @returns {string}
 */
module.exports = function (urlString) {
  urlString = urlString.trim();
  if (/^data:/i.test(urlString)) {
    return urlString;
  }
  var protocol = urlString.indexOf("//") !== -1 ? urlString.split("//")[0] + "//" : "";
  var components = urlString.replace(new RegExp(protocol, "i"), "").split("/");
  var host = components[0].toLowerCase().replace(/\.$/, "");
  components[0] = "";
  var path = normalizeUrl(components);
  return protocol + host + path;
};

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "30d812da2109c5446438"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQSxXQUFXLFFBQVE7QUFDbkIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixhQUFhO0FBQ2I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFdBQVcsTUFBTTtBQUNqQixXQUFXLE1BQU07QUFDakIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDMU9hOztBQUViOztBQUVBO0FBQ0EsV0FBVyxVQUFVO0FBQ3JCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUcsYUFBYSxVQUFVO0FBQzFCOztBQUVBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7VUN0Q0EscUNBQXFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFjay8uL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLy4vY3NzL3N0eWxlLmNzcz9lYTc4Iiwid2VicGFjazovL3dlYnBhY2svLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9obXIvaG90TW9kdWxlUmVwbGFjZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay8uL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2htci9ub3JtYWxpemUtdXJsLmpzIiwid2VicGFjazovL3dlYnBhY2svd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCAnLi4vY3NzL3N0eWxlLmNzcyc7ICAvLyBJbXBvcnR1amVtZSBDU1Mgc291Ym9yXG5cbmNvbnN0IEFwcCA9ICgpID0+IHtcbiAgY29uc3QgW3JhY2VzLCBzZXRSYWNlc10gPSB1c2VTdGF0ZShbXSk7ICAvLyBTdGF2IHBybyB6w6F2b2R5XG4gIGNvbnN0IFtkcml2ZXJzLCBzZXREcml2ZXJzXSA9IHVzZVN0YXRlKFtdKTsgIC8vIFN0YXYgcHJvIGplemRjZVxuICBjb25zdCBbaXNSYWNlc1Zpc2libGUsIHNldElzUmFjZXNWaXNpYmxlXSA9IHVzZVN0YXRlKHRydWUpOyAgLy8gU3RhdiBwcm8gem9icmF6ZW7DrSB6w6F2b2TFry9qZXpkY8WvXG5cbiAgLy8gRnVua2NlIHBybyBuYcSNdGVuw60gesOhdm9kxa9cbiAgY29uc3QgZmV0Y2hSYWNlcyA9ICgpID0+IHtcbiAgICBjb25zdCBhcGlVcmwgPSAnaHR0cHM6Ly9lcmdhc3QuY29tL2FwaS9mMS8yMDI0Lmpzb24nO1xuXG4gICAgZmV0Y2goYXBpVXJsKVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDaHliYSBwxZlpIHrDrXNrw6F2w6Fuw60gZGF0Jyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgICAgIH0pXG4gICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgc2V0UmFjZXMoZGF0YS5NUkRhdGEuUmFjZVRhYmxlLlJhY2VzKTsgIC8vIE5hc3RhdsOtbWUgZGF0YSBvIHrDoXZvZGVjaFxuICAgICAgICBzZXRJc1JhY2VzVmlzaWJsZSh0cnVlKTsgIC8vIFpvYnJhesOtbWUgesOhdm9keVxuICAgICAgfSlcbiAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0NoeWJhOicsIGVycm9yKTtcbiAgICAgIH0pO1xuICB9O1xuXG4gIC8vIEZ1bmtjZSBwcm8gbmHEjXRlbsOtIGplemRjxa9cbiAgY29uc3QgZmV0Y2hEcml2ZXJzID0gKCkgPT4ge1xuICAgIGNvbnN0IGFwaVVybCA9ICdodHRwczovL2VyZ2FzdC5jb20vYXBpL2YxLzIwMjQvZHJpdmVycy5qc29uJztcblxuICAgIGZldGNoKGFwaVVybClcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQ2h5YmEgcMWZaSB6w61za8OhdsOhbsOtIGRhdCcpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gICAgICB9KVxuICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgIHNldERyaXZlcnMoZGF0YS5NUkRhdGEuRHJpdmVyVGFibGUuRHJpdmVycyk7ICAvLyBOYXN0YXbDrW1lIGRhdGEgbyBqZXpkY8OtY2hcbiAgICAgICAgc2V0SXNSYWNlc1Zpc2libGUoZmFsc2UpOyAgLy8gWm9icmF6w61tZSBqZXpkY2VcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdDaHliYTonLCBlcnJvcik7XG4gICAgICB9KTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImFwbGlrYWNlXCI+XG4gICAgICAgIDxoMT5GMSBaw6F2b2R5IDIwMjQ8L2gxPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbnNcIj5cbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2ZldGNoUmFjZXN9Pk5hxI3DrXN0IHrDoXZvZHk8L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2ZldGNoRHJpdmVyc30+TmHEjcOtc3QgamV6ZGNlPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlem5hbVwiPlxuICAgICAgICAgIHtpc1JhY2VzVmlzaWJsZSA/IChcbiAgICAgICAgICAgIDx1bCBpZD1cInJhY2VMaXN0XCI+XG4gICAgICAgICAgICAgIHtyYWNlcy5tYXAocmFjZSA9PiAoXG4gICAgICAgICAgICAgICAgPGxpIGtleT17cmFjZS5yb3VuZH0+XG4gICAgICAgICAgICAgICAgICB7YCR7cmFjZS5yb3VuZH06ICR7cmFjZS5yYWNlTmFtZX0gKCR7cmFjZS5kYXRlfSkgLSAke3JhY2UuQ2lyY3VpdC5jaXJjdWl0TmFtZX1gfVxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPHVsIGlkPVwiZHJpdmVyTGlzdFwiPlxuICAgICAgICAgICAgICB7ZHJpdmVycy5tYXAoZHJpdmVyID0+IChcbiAgICAgICAgICAgICAgICA8bGkga2V5PXtkcml2ZXIuZHJpdmVySWR9PlxuICAgICAgICAgICAgICAgICAge2Ake2RyaXZlci5naXZlbk5hbWV9ICR7ZHJpdmVyLmZhbWlseU5hbWV9ICgke2RyaXZlci5uYXRpb25hbGl0eX0pIC0gJHtkcml2ZXIucGVybWFuZW50TnVtYmVyID8/ICdiZXogxI3DrXNsYSd9YH1cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9O1xuICAgIGlmKG1vZHVsZS5ob3QpIHtcbiAgICAgIChmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGxvY2Fsc0pzb25TdHJpbmcgPSB1bmRlZmluZWQ7XG4gICAgICAgIC8vIDE3NDM5MTc1NDk3MjdcbiAgICAgICAgdmFyIGNzc1JlbG9hZCA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9obXIvaG90TW9kdWxlUmVwbGFjZW1lbnQuanNcIikobW9kdWxlLmlkLCB7fSk7XG4gICAgICAgIC8vIG9ubHkgaW52YWxpZGF0ZSB3aGVuIGxvY2FscyBjaGFuZ2VcbiAgICAgICAgaWYgKFxuICAgICAgICAgIG1vZHVsZS5ob3QuZGF0YSAmJlxuICAgICAgICAgIG1vZHVsZS5ob3QuZGF0YS52YWx1ZSAmJlxuICAgICAgICAgIG1vZHVsZS5ob3QuZGF0YS52YWx1ZSAhPT0gbG9jYWxzSnNvblN0cmluZ1xuICAgICAgICApIHtcbiAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgICAgICB9XG4gICAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgZGF0YS52YWx1ZSA9IGxvY2Fsc0pzb25TdHJpbmc7XG4gICAgICAgICAgY3NzUmVsb2FkKCk7XG4gICAgICAgIH0pO1xuICAgICAgfSkoKTtcbiAgICB9XG4gICIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBlc2xpbnQtZW52IGJyb3dzZXIgKi9cbi8qXG4gIGVzbGludC1kaXNhYmxlXG4gIG5vLWNvbnNvbGUsXG4gIGZ1bmMtbmFtZXNcbiovXG5cbi8qKiBAdHlwZWRlZiB7YW55fSBUT0RPICovXG5cbnZhciBub3JtYWxpemVVcmwgPSByZXF1aXJlKFwiLi9ub3JtYWxpemUtdXJsXCIpO1xudmFyIHNyY0J5TW9kdWxlSWQgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xudmFyIG5vRG9jdW1lbnQgPSB0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCI7XG52YXIgZm9yRWFjaCA9IEFycmF5LnByb3RvdHlwZS5mb3JFYWNoO1xuXG4vKipcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGZuXG4gKiBAcGFyYW0ge251bWJlcn0gdGltZVxuICogQHJldHVybnMgeyhmdW5jdGlvbigpOiB2b2lkKXwqfVxuICovXG5mdW5jdGlvbiBkZWJvdW5jZShmbiwgdGltZSkge1xuICB2YXIgdGltZW91dCA9IDA7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLXJlc3QtcGFyYW1zXG4gICAgdmFyIGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgdmFyIGZ1bmN0aW9uQ2FsbCA9IGZ1bmN0aW9uIGZ1bmN0aW9uQ2FsbCgpIHtcbiAgICAgIHJldHVybiBmbi5hcHBseShzZWxmLCBhcmdzKTtcbiAgICB9O1xuICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcblxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICB0aW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbkNhbGwsIHRpbWUpO1xuICB9O1xufVxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbi8qKlxuICogQHBhcmFtIHtUT0RPfSBtb2R1bGVJZFxuICogQHJldHVybnMge1RPRE99XG4gKi9cbmZ1bmN0aW9uIGdldEN1cnJlbnRTY3JpcHRVcmwobW9kdWxlSWQpIHtcbiAgdmFyIHNyYyA9IHNyY0J5TW9kdWxlSWRbbW9kdWxlSWRdO1xuICBpZiAoIXNyYykge1xuICAgIGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KSB7XG4gICAgICBzcmMgPSAoIC8qKiBAdHlwZSB7SFRNTFNjcmlwdEVsZW1lbnR9ICovZG9jdW1lbnQuY3VycmVudFNjcmlwdCkuc3JjO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuICAgICAgdmFyIGxhc3RTY3JpcHRUYWcgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV07XG4gICAgICBpZiAobGFzdFNjcmlwdFRhZykge1xuICAgICAgICBzcmMgPSBsYXN0U2NyaXB0VGFnLnNyYztcbiAgICAgIH1cbiAgICB9XG4gICAgc3JjQnlNb2R1bGVJZFttb2R1bGVJZF0gPSBzcmM7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmd9IGZpbGVNYXBcbiAgICogQHJldHVybnMge251bGwgfCBzdHJpbmdbXX1cbiAgICovXG4gIHJldHVybiBmdW5jdGlvbiAoZmlsZU1hcCkge1xuICAgIGlmICghc3JjKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgdmFyIHNwbGl0UmVzdWx0ID0gc3JjLnNwbGl0KC8oW15cXFxcL10rKVxcLmpzJC8pO1xuICAgIHZhciBmaWxlbmFtZSA9IHNwbGl0UmVzdWx0ICYmIHNwbGl0UmVzdWx0WzFdO1xuICAgIGlmICghZmlsZW5hbWUpIHtcbiAgICAgIHJldHVybiBbc3JjLnJlcGxhY2UoXCIuanNcIiwgXCIuY3NzXCIpXTtcbiAgICB9XG4gICAgaWYgKCFmaWxlTWFwKSB7XG4gICAgICByZXR1cm4gW3NyYy5yZXBsYWNlKFwiLmpzXCIsIFwiLmNzc1wiKV07XG4gICAgfVxuICAgIHJldHVybiBmaWxlTWFwLnNwbGl0KFwiLFwiKS5tYXAoZnVuY3Rpb24gKG1hcFJ1bGUpIHtcbiAgICAgIHZhciByZWcgPSBuZXcgUmVnRXhwKFwiXCIuY29uY2F0KGZpbGVuYW1lLCBcIlxcXFwuanMkXCIpLCBcImdcIik7XG4gICAgICByZXR1cm4gbm9ybWFsaXplVXJsKHNyYy5yZXBsYWNlKHJlZywgXCJcIi5jb25jYXQobWFwUnVsZS5yZXBsYWNlKC97ZmlsZU5hbWV9L2csIGZpbGVuYW1lKSwgXCIuY3NzXCIpKSk7XG4gICAgfSk7XG4gIH07XG59XG5cbi8qKlxuICogQHBhcmFtIHtUT0RPfSBlbFxuICogQHBhcmFtIHtzdHJpbmd9IFt1cmxdXG4gKi9cbmZ1bmN0aW9uIHVwZGF0ZUNzcyhlbCwgdXJsKSB7XG4gIGlmICghdXJsKSB7XG4gICAgaWYgKCFlbC5ocmVmKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gICAgdXJsID0gZWwuaHJlZi5zcGxpdChcIj9cIilbMF07XG4gIH1cbiAgaWYgKCFpc1VybFJlcXVlc3QoIC8qKiBAdHlwZSB7c3RyaW5nfSAqL3VybCkpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgaWYgKGVsLmlzTG9hZGVkID09PSBmYWxzZSkge1xuICAgIC8vIFdlIHNlZW0gdG8gYmUgYWJvdXQgdG8gcmVwbGFjZSBhIGNzcyBsaW5rIHRoYXQgaGFzbid0IGxvYWRlZCB5ZXQuXG4gICAgLy8gV2UncmUgcHJvYmFibHkgY2hhbmdpbmcgdGhlIHNhbWUgZmlsZSBtb3JlIHRoYW4gb25jZS5cbiAgICByZXR1cm47XG4gIH1cbiAgaWYgKCF1cmwgfHwgISh1cmwuaW5kZXhPZihcIi5jc3NcIikgPiAtMSkpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgZWwudmlzaXRlZCA9IHRydWU7XG4gIHZhciBuZXdFbCA9IGVsLmNsb25lTm9kZSgpO1xuICBuZXdFbC5pc0xvYWRlZCA9IGZhbHNlO1xuICBuZXdFbC5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKG5ld0VsLmlzTG9hZGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIG5ld0VsLmlzTG9hZGVkID0gdHJ1ZTtcbiAgICBlbC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGVsKTtcbiAgfSk7XG4gIG5ld0VsLmFkZEV2ZW50TGlzdGVuZXIoXCJlcnJvclwiLCBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKG5ld0VsLmlzTG9hZGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIG5ld0VsLmlzTG9hZGVkID0gdHJ1ZTtcbiAgICBlbC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGVsKTtcbiAgfSk7XG4gIG5ld0VsLmhyZWYgPSBcIlwiLmNvbmNhdCh1cmwsIFwiP1wiKS5jb25jYXQoRGF0ZS5ub3coKSk7XG4gIGlmIChlbC5uZXh0U2libGluZykge1xuICAgIGVsLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKG5ld0VsLCBlbC5uZXh0U2libGluZyk7XG4gIH0gZWxzZSB7XG4gICAgZWwucGFyZW50Tm9kZS5hcHBlbmRDaGlsZChuZXdFbCk7XG4gIH1cbn1cblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gaHJlZlxuICogQHBhcmFtIHtUT0RPfSBzcmNcbiAqIEByZXR1cm5zIHtUT0RPfVxuICovXG5mdW5jdGlvbiBnZXRSZWxvYWRVcmwoaHJlZiwgc3JjKSB7XG4gIHZhciByZXQ7XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gIGhyZWYgPSBub3JtYWxpemVVcmwoaHJlZik7XG4gIHNyYy5zb21lKFxuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICAgKi9cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxuICBmdW5jdGlvbiAodXJsKSB7XG4gICAgaWYgKGhyZWYuaW5kZXhPZihzcmMpID4gLTEpIHtcbiAgICAgIHJldCA9IHVybDtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gcmV0O1xufVxuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSBbc3JjXVxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmZ1bmN0aW9uIHJlbG9hZFN0eWxlKHNyYykge1xuICBpZiAoIXNyYykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgZWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwibGlua1wiKTtcbiAgdmFyIGxvYWRlZCA9IGZhbHNlO1xuICBmb3JFYWNoLmNhbGwoZWxlbWVudHMsIGZ1bmN0aW9uIChlbCkge1xuICAgIGlmICghZWwuaHJlZikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdXJsID0gZ2V0UmVsb2FkVXJsKGVsLmhyZWYsIHNyYyk7XG4gICAgaWYgKCFpc1VybFJlcXVlc3QodXJsKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoZWwudmlzaXRlZCA9PT0gdHJ1ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodXJsKSB7XG4gICAgICB1cGRhdGVDc3MoZWwsIHVybCk7XG4gICAgICBsb2FkZWQgPSB0cnVlO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBsb2FkZWQ7XG59XG5mdW5jdGlvbiByZWxvYWRBbGwoKSB7XG4gIHZhciBlbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJsaW5rXCIpO1xuICBmb3JFYWNoLmNhbGwoZWxlbWVudHMsIGZ1bmN0aW9uIChlbCkge1xuICAgIGlmIChlbC52aXNpdGVkID09PSB0cnVlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHVwZGF0ZUNzcyhlbCk7XG4gIH0pO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5mdW5jdGlvbiBpc1VybFJlcXVlc3QodXJsKSB7XG4gIC8vIEFuIFVSTCBpcyBub3QgYW4gcmVxdWVzdCBpZlxuXG4gIC8vIEl0IGlzIG5vdCBodHRwIG9yIGh0dHBzXG4gIGlmICghL15bYS16QS1aXVthLXpBLVpcXGQrXFwtLl0qOi8udGVzdCh1cmwpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJldHVybiB0cnVlO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7VE9ET30gbW9kdWxlSWRcbiAqIEBwYXJhbSB7VE9ET30gb3B0aW9uc1xuICogQHJldHVybnMge1RPRE99XG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG1vZHVsZUlkLCBvcHRpb25zKSB7XG4gIGlmIChub0RvY3VtZW50KSB7XG4gICAgY29uc29sZS5sb2coXCJubyB3aW5kb3cuZG9jdW1lbnQgZm91bmQsIHdpbGwgbm90IEhNUiBDU1NcIik7XG4gICAgcmV0dXJuIG5vb3A7XG4gIH1cbiAgdmFyIGdldFNjcmlwdFNyYyA9IGdldEN1cnJlbnRTY3JpcHRVcmwobW9kdWxlSWQpO1xuICBmdW5jdGlvbiB1cGRhdGUoKSB7XG4gICAgdmFyIHNyYyA9IGdldFNjcmlwdFNyYyhvcHRpb25zLmZpbGVuYW1lKTtcbiAgICB2YXIgcmVsb2FkZWQgPSByZWxvYWRTdHlsZShzcmMpO1xuICAgIGlmIChvcHRpb25zLmxvY2Fscykge1xuICAgICAgY29uc29sZS5sb2coXCJbSE1SXSBEZXRlY3RlZCBsb2NhbCBjc3MgbW9kdWxlcy4gUmVsb2FkIGFsbCBjc3NcIik7XG4gICAgICByZWxvYWRBbGwoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHJlbG9hZGVkKSB7XG4gICAgICBjb25zb2xlLmxvZyhcIltITVJdIGNzcyByZWxvYWQgJXNcIiwgc3JjLmpvaW4oXCIgXCIpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5sb2coXCJbSE1SXSBSZWxvYWQgYWxsIGNzc1wiKTtcbiAgICAgIHJlbG9hZEFsbCgpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZGVib3VuY2UodXBkYXRlLCA1MCk7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBlc2xpbnQtZGlzYWJsZSAqL1xuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nW119IHBhdGhDb21wb25lbnRzXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiBub3JtYWxpemVVcmwocGF0aENvbXBvbmVudHMpIHtcbiAgcmV0dXJuIHBhdGhDb21wb25lbnRzLnJlZHVjZShmdW5jdGlvbiAoYWNjdW11bGF0b3IsIGl0ZW0pIHtcbiAgICBzd2l0Y2ggKGl0ZW0pIHtcbiAgICAgIGNhc2UgXCIuLlwiOlxuICAgICAgICBhY2N1bXVsYXRvci5wb3AoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwiLlwiOlxuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGFjY3VtdWxhdG9yLnB1c2goaXRlbSk7XG4gICAgfVxuICAgIHJldHVybiBhY2N1bXVsYXRvcjtcbiAgfSwgLyoqIEB0eXBlIHtzdHJpbmdbXX0gKi9bXSkuam9pbihcIi9cIik7XG59XG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IHVybFN0cmluZ1xuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsU3RyaW5nKSB7XG4gIHVybFN0cmluZyA9IHVybFN0cmluZy50cmltKCk7XG4gIGlmICgvXmRhdGE6L2kudGVzdCh1cmxTdHJpbmcpKSB7XG4gICAgcmV0dXJuIHVybFN0cmluZztcbiAgfVxuICB2YXIgcHJvdG9jb2wgPSB1cmxTdHJpbmcuaW5kZXhPZihcIi8vXCIpICE9PSAtMSA/IHVybFN0cmluZy5zcGxpdChcIi8vXCIpWzBdICsgXCIvL1wiIDogXCJcIjtcbiAgdmFyIGNvbXBvbmVudHMgPSB1cmxTdHJpbmcucmVwbGFjZShuZXcgUmVnRXhwKHByb3RvY29sLCBcImlcIiksIFwiXCIpLnNwbGl0KFwiL1wiKTtcbiAgdmFyIGhvc3QgPSBjb21wb25lbnRzWzBdLnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvXFwuJC8sIFwiXCIpO1xuICBjb21wb25lbnRzWzBdID0gXCJcIjtcbiAgdmFyIHBhdGggPSBub3JtYWxpemVVcmwoY29tcG9uZW50cyk7XG4gIHJldHVybiBwcm90b2NvbCArIGhvc3QgKyBwYXRoO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSBmdW5jdGlvbigpIHsgcmV0dXJuIFwiMzBkODEyZGEyMTA5YzU0NDY0MzhcIjsgfSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiQXBwIiwiX3VzZVN0YXRlIiwiX3VzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5IiwicmFjZXMiLCJzZXRSYWNlcyIsIl91c2VTdGF0ZTMiLCJfdXNlU3RhdGU0IiwiZHJpdmVycyIsInNldERyaXZlcnMiLCJfdXNlU3RhdGU1IiwiX3VzZVN0YXRlNiIsImlzUmFjZXNWaXNpYmxlIiwic2V0SXNSYWNlc1Zpc2libGUiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwib25DbGljayIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwib2siLCJFcnJvciIsImpzb24iLCJkYXRhIiwiTVJEYXRhIiwiUmFjZVRhYmxlIiwiUmFjZXMiLCJlcnJvciIsImNvbnNvbGUiLCJEcml2ZXJUYWJsZSIsIkRyaXZlcnMiLCJpZCIsIm1hcCIsInJhY2UiLCJrZXkiLCJyb3VuZCIsImNvbmNhdCIsInJhY2VOYW1lIiwiZGF0ZSIsIkNpcmN1aXQiLCJjaXJjdWl0TmFtZSIsImRyaXZlciIsImRyaXZlcklkIiwiZ2l2ZW5OYW1lIiwiZmFtaWx5TmFtZSIsIm5hdGlvbmFsaXR5IiwicGVybWFuZW50TnVtYmVyIl0sInNvdXJjZVJvb3QiOiIifQ==