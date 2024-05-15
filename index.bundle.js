/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root{
  --drop-down-height: 30px;
  --drop-down-primary-color: #1b1b1b;
  --drop-down-secondary-color: #ffe600;
  --carousel-width: 400px;
  --carousel-height: 200px;
  --carousel-main-color: #1b1b1b;
  --carousel-secondary-color: #ffe600;
  --carousel-button-size: 30px;
}

.drop-down{
  height: var(--drop-down-height);
  display: flex;
  flex-direction: column;
  position: relative;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}

.drop-down ul.active{
  visibility: visible;
  transform: scaleY(1)
}

.drop-down ul{
  box-sizing: border-box;
  visibility: hidden;
  position: absolute;
  z-index: 99;
  top: var(--drop-down-height);
  width: inherit;
  padding: 0;
  margin: 0;
  background-color: var(--drop-down-primary-color);
  transform: scaleY(0);
  transform-origin: top;
  transition: .1s transform;
}

.drop-down ul li{
  list-style-type: none;
  margin: 0;
  padding: 0;
  color: var(--drop-down-secondary-color);
  transition: .3s background-color;
  text-align: center;
}

.drop-down ul li:hover,
.drop-down ul li:active{
  background-color: var(--drop-down-secondary-color);
  color: var(--drop-down-primary-color);
  cursor: pointer;
}

.drop-down button{
  box-sizing: border-box;
  height: var(--drop-down-height);
  background-color: var(--drop-down-primary-color);
  border: none;
  color: var(--drop-down-secondary-color);
  font-family: 'Courier New', Courier, monospace;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 2px;
  border-bottom: 1px solid var(--drop-down-secondary-color);
  transition: .2s ease-in-out;
  padding: 5px 0;
}

.drop-down button:hover,
.drop-down button:active{
  background-color: var(--drop-down-secondary-color);
  color: var(--drop-down-primary-color);
  cursor: pointer;
}

.drop-down-small{
  width: 200px;
}

.drop-down-medium{
  width: 400px;
}

.drop-down-big{
  width: 800px;
}

.carousel{
  border: 1px solid var(--carousel-secondary-color);
  width: var(--carousel-width);
  height: var(--carousel-height);
  position: relative;
}

.carousel .carousel-frame{
  position: relative;
  width: var(--carousel-width);
  height: var(--carousel-height);
  overflow: hidden;
}

.carousel .slide-container{
  display: flex;
  flex-wrap: nowrap;
  position: absolute;
  transition: left .3s ease-out;
}

.carousel img.slide{
  width: var(--carousel-width);
  height: var(--carousel-height);
}

.carousel button{
  position: absolute;
  top: calc(50% - (var(--carousel-button-size) / 2));
  background-color: var(--carousel-main-color);
  border: none;
  width: var(--carousel-button-size);
  height: var(--carousel-button-size);
  color: var(--carousel-secondary-color);
  font-family: 'Courier New', Courier, monospace;
  font-weight: 900;
  transition: .2s ease-in-out;
}

.carousel button:hover,
.carousel button:active{
  background-color: var(--carousel-secondary-color);
  color: var(--carousel-main-color);
  cursor: pointer;
}

.carousel button.next{
  right: calc(var(--carousel-button-size) / -2);
  border-left: 2px solid var(--carousel-secondary-color);
}

.carousel button.prev{
  left: calc(var(--carousel-button-size) / -2);
  border-right: 2px solid var(--carousel-secondary-color);
}`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;EACE,wBAAwB;EACxB,kCAAkC;EAClC,oCAAoC;EACpC,uBAAuB;EACvB,wBAAwB;EACxB,8BAA8B;EAC9B,mCAAmC;EACnC,4BAA4B;AAC9B;;AAEA;EACE,+BAA+B;EAC/B,aAAa;EACb,sBAAsB;EACtB,kBAAkB;EAClB,6EAA6E;AAC/E;;AAEA;EACE,mBAAmB;EACnB;AACF;;AAEA;EACE,sBAAsB;EACtB,kBAAkB;EAClB,kBAAkB;EAClB,WAAW;EACX,4BAA4B;EAC5B,cAAc;EACd,UAAU;EACV,SAAS;EACT,gDAAgD;EAChD,oBAAoB;EACpB,qBAAqB;EACrB,yBAAyB;AAC3B;;AAEA;EACE,qBAAqB;EACrB,SAAS;EACT,UAAU;EACV,uCAAuC;EACvC,gCAAgC;EAChC,kBAAkB;AACpB;;AAEA;;EAEE,kDAAkD;EAClD,qCAAqC;EACrC,eAAe;AACjB;;AAEA;EACE,sBAAsB;EACtB,+BAA+B;EAC/B,gDAAgD;EAChD,YAAY;EACZ,uCAAuC;EACvC,8CAA8C;EAC9C,gBAAgB;EAChB,yBAAyB;EACzB,mBAAmB;EACnB,yDAAyD;EACzD,2BAA2B;EAC3B,cAAc;AAChB;;AAEA;;EAEE,kDAAkD;EAClD,qCAAqC;EACrC,eAAe;AACjB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,iDAAiD;EACjD,4BAA4B;EAC5B,8BAA8B;EAC9B,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,4BAA4B;EAC5B,8BAA8B;EAC9B,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,iBAAiB;EACjB,kBAAkB;EAClB,6BAA6B;AAC/B;;AAEA;EACE,4BAA4B;EAC5B,8BAA8B;AAChC;;AAEA;EACE,kBAAkB;EAClB,kDAAkD;EAClD,4CAA4C;EAC5C,YAAY;EACZ,kCAAkC;EAClC,mCAAmC;EACnC,sCAAsC;EACtC,8CAA8C;EAC9C,gBAAgB;EAChB,2BAA2B;AAC7B;;AAEA;;EAEE,iDAAiD;EACjD,iCAAiC;EACjC,eAAe;AACjB;;AAEA;EACE,6CAA6C;EAC7C,sDAAsD;AACxD;;AAEA;EACE,4CAA4C;EAC5C,uDAAuD;AACzD","sourcesContent":[":root{\n  --drop-down-height: 30px;\n  --drop-down-primary-color: #1b1b1b;\n  --drop-down-secondary-color: #ffe600;\n  --carousel-width: 400px;\n  --carousel-height: 200px;\n  --carousel-main-color: #1b1b1b;\n  --carousel-secondary-color: #ffe600;\n  --carousel-button-size: 30px;\n}\n\n.drop-down{\n  height: var(--drop-down-height);\n  display: flex;\n  flex-direction: column;\n  position: relative;\n  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\n}\n\n.drop-down ul.active{\n  visibility: visible;\n  transform: scaleY(1)\n}\n\n.drop-down ul{\n  box-sizing: border-box;\n  visibility: hidden;\n  position: absolute;\n  z-index: 99;\n  top: var(--drop-down-height);\n  width: inherit;\n  padding: 0;\n  margin: 0;\n  background-color: var(--drop-down-primary-color);\n  transform: scaleY(0);\n  transform-origin: top;\n  transition: .1s transform;\n}\n\n.drop-down ul li{\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n  color: var(--drop-down-secondary-color);\n  transition: .3s background-color;\n  text-align: center;\n}\n\n.drop-down ul li:hover,\n.drop-down ul li:active{\n  background-color: var(--drop-down-secondary-color);\n  color: var(--drop-down-primary-color);\n  cursor: pointer;\n}\n\n.drop-down button{\n  box-sizing: border-box;\n  height: var(--drop-down-height);\n  background-color: var(--drop-down-primary-color);\n  border: none;\n  color: var(--drop-down-secondary-color);\n  font-family: 'Courier New', Courier, monospace;\n  font-weight: 900;\n  text-transform: uppercase;\n  letter-spacing: 2px;\n  border-bottom: 1px solid var(--drop-down-secondary-color);\n  transition: .2s ease-in-out;\n  padding: 5px 0;\n}\n\n.drop-down button:hover,\n.drop-down button:active{\n  background-color: var(--drop-down-secondary-color);\n  color: var(--drop-down-primary-color);\n  cursor: pointer;\n}\n\n.drop-down-small{\n  width: 200px;\n}\n\n.drop-down-medium{\n  width: 400px;\n}\n\n.drop-down-big{\n  width: 800px;\n}\n\n.carousel{\n  border: 1px solid var(--carousel-secondary-color);\n  width: var(--carousel-width);\n  height: var(--carousel-height);\n  position: relative;\n}\n\n.carousel .carousel-frame{\n  position: relative;\n  width: var(--carousel-width);\n  height: var(--carousel-height);\n  overflow: hidden;\n}\n\n.carousel .slide-container{\n  display: flex;\n  flex-wrap: nowrap;\n  position: absolute;\n  transition: left .3s ease-out;\n}\n\n.carousel img.slide{\n  width: var(--carousel-width);\n  height: var(--carousel-height);\n}\n\n.carousel button{\n  position: absolute;\n  top: calc(50% - (var(--carousel-button-size) / 2));\n  background-color: var(--carousel-main-color);\n  border: none;\n  width: var(--carousel-button-size);\n  height: var(--carousel-button-size);\n  color: var(--carousel-secondary-color);\n  font-family: 'Courier New', Courier, monospace;\n  font-weight: 900;\n  transition: .2s ease-in-out;\n}\n\n.carousel button:hover,\n.carousel button:active{\n  background-color: var(--carousel-secondary-color);\n  color: var(--carousel-main-color);\n  cursor: pointer;\n}\n\n.carousel button.next{\n  right: calc(var(--carousel-button-size) / -2);\n  border-left: 2px solid var(--carousel-secondary-color);\n}\n\n.carousel button.prev{\n  left: calc(var(--carousel-button-size) / -2);\n  border-right: 2px solid var(--carousel-secondary-color);\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");


// Drop Down Menu section

const dropDownBtns = (
  document.querySelectorAll(".drop-down button")
);

const dropHandler = function dropDownHandler(event){
  event.currentTarget
    .parentElement
    .querySelector("ul")
    .classList
    .toggle("active");
};

dropDownBtns.forEach(btn => {
  btn.addEventListener("click",dropHandler);
});

// Carousel section

const carouselNextBtns = (
  document.querySelectorAll(".carousel button.next")
);

const carouselPrevBtns = (
  document.querySelectorAll(".carousel button.prev")
);

// global variables for carousel

const carouselSizeInPX = 400;
const numberOfSlides = (
  document.querySelectorAll(".carousel img.slide").length
);
let currentSlide = 0;

const nextSlide = function nextSlideHandler(event){
  // go back to the first slide if on last slide 
  if (currentSlide === (numberOfSlides - 1)) {
    currentSlide = 0;
  } else {
    currentSlide += 1;
  }

  document.querySelector(".carousel .slide-container")
    .style
    .left = `-${(carouselSizeInPX * currentSlide)}px`;
};

const prevSlide = function prevSlideHandler(event){
  // go to the last slide if currently on the first slide
  if (currentSlide === 0) {
    currentSlide = (numberOfSlides - 1);
  } else {
    currentSlide -= 1;
  }

  document.querySelector(".carousel .slide-container")
    .style
    .left = `-${(carouselSizeInPX * currentSlide)}px`;
};

carouselPrevBtns.forEach(btn => {
  btn.addEventListener("click",prevSlide);
});

carouselNextBtns.forEach(btn => {
  btn.addEventListener("click",nextSlide);
});

setInterval(nextSlide,5000);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7QUNBc0I7O0FBRXRCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZ0JBQWdCLGtDQUFrQztBQUNsRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxnQkFBZ0Isa0NBQWtDO0FBQ2xEOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQSxDQUFDOztBQUVELDRCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVtcGxhdGUtMS8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL3RlbXBsYXRlLTEvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RlbXBsYXRlLTEvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS0xLy4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly90ZW1wbGF0ZS0xLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RlbXBsYXRlLTEvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RlbXBsYXRlLTEvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtMS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS0xLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtMS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RlbXBsYXRlLTEvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtMS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90ZW1wbGF0ZS0xL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS0xL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtMS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RlbXBsYXRlLTEvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RlbXBsYXRlLTEvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYDpyb290e1xuICAtLWRyb3AtZG93bi1oZWlnaHQ6IDMwcHg7XG4gIC0tZHJvcC1kb3duLXByaW1hcnktY29sb3I6ICMxYjFiMWI7XG4gIC0tZHJvcC1kb3duLXNlY29uZGFyeS1jb2xvcjogI2ZmZTYwMDtcbiAgLS1jYXJvdXNlbC13aWR0aDogNDAwcHg7XG4gIC0tY2Fyb3VzZWwtaGVpZ2h0OiAyMDBweDtcbiAgLS1jYXJvdXNlbC1tYWluLWNvbG9yOiAjMWIxYjFiO1xuICAtLWNhcm91c2VsLXNlY29uZGFyeS1jb2xvcjogI2ZmZTYwMDtcbiAgLS1jYXJvdXNlbC1idXR0b24tc2l6ZTogMzBweDtcbn1cblxuLmRyb3AtZG93bntcbiAgaGVpZ2h0OiB2YXIoLS1kcm9wLWRvd24taGVpZ2h0KTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmb250LWZhbWlseTogJ0dpbGwgU2FucycsICdHaWxsIFNhbnMgTVQnLCBDYWxpYnJpLCAnVHJlYnVjaGV0IE1TJywgc2Fucy1zZXJpZjtcbn1cblxuLmRyb3AtZG93biB1bC5hY3RpdmV7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG4gIHRyYW5zZm9ybTogc2NhbGVZKDEpXG59XG5cbi5kcm9wLWRvd24gdWx7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiA5OTtcbiAgdG9wOiB2YXIoLS1kcm9wLWRvd24taGVpZ2h0KTtcbiAgd2lkdGg6IGluaGVyaXQ7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZHJvcC1kb3duLXByaW1hcnktY29sb3IpO1xuICB0cmFuc2Zvcm06IHNjYWxlWSgwKTtcbiAgdHJhbnNmb3JtLW9yaWdpbjogdG9wO1xuICB0cmFuc2l0aW9uOiAuMXMgdHJhbnNmb3JtO1xufVxuXG4uZHJvcC1kb3duIHVsIGxpe1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgY29sb3I6IHZhcigtLWRyb3AtZG93bi1zZWNvbmRhcnktY29sb3IpO1xuICB0cmFuc2l0aW9uOiAuM3MgYmFja2dyb3VuZC1jb2xvcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uZHJvcC1kb3duIHVsIGxpOmhvdmVyLFxuLmRyb3AtZG93biB1bCBsaTphY3RpdmV7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRyb3AtZG93bi1zZWNvbmRhcnktY29sb3IpO1xuICBjb2xvcjogdmFyKC0tZHJvcC1kb3duLXByaW1hcnktY29sb3IpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5kcm9wLWRvd24gYnV0dG9ue1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBoZWlnaHQ6IHZhcigtLWRyb3AtZG93bi1oZWlnaHQpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kcm9wLWRvd24tcHJpbWFyeS1jb2xvcik7XG4gIGJvcmRlcjogbm9uZTtcbiAgY29sb3I6IHZhcigtLWRyb3AtZG93bi1zZWNvbmRhcnktY29sb3IpO1xuICBmb250LWZhbWlseTogJ0NvdXJpZXIgTmV3JywgQ291cmllciwgbW9ub3NwYWNlO1xuICBmb250LXdlaWdodDogOTAwO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tZHJvcC1kb3duLXNlY29uZGFyeS1jb2xvcik7XG4gIHRyYW5zaXRpb246IC4ycyBlYXNlLWluLW91dDtcbiAgcGFkZGluZzogNXB4IDA7XG59XG5cbi5kcm9wLWRvd24gYnV0dG9uOmhvdmVyLFxuLmRyb3AtZG93biBidXR0b246YWN0aXZle1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kcm9wLWRvd24tc2Vjb25kYXJ5LWNvbG9yKTtcbiAgY29sb3I6IHZhcigtLWRyb3AtZG93bi1wcmltYXJ5LWNvbG9yKTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uZHJvcC1kb3duLXNtYWxse1xuICB3aWR0aDogMjAwcHg7XG59XG5cbi5kcm9wLWRvd24tbWVkaXVte1xuICB3aWR0aDogNDAwcHg7XG59XG5cbi5kcm9wLWRvd24tYmlne1xuICB3aWR0aDogODAwcHg7XG59XG5cbi5jYXJvdXNlbHtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY2Fyb3VzZWwtc2Vjb25kYXJ5LWNvbG9yKTtcbiAgd2lkdGg6IHZhcigtLWNhcm91c2VsLXdpZHRoKTtcbiAgaGVpZ2h0OiB2YXIoLS1jYXJvdXNlbC1oZWlnaHQpO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5jYXJvdXNlbCAuY2Fyb3VzZWwtZnJhbWV7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IHZhcigtLWNhcm91c2VsLXdpZHRoKTtcbiAgaGVpZ2h0OiB2YXIoLS1jYXJvdXNlbC1oZWlnaHQpO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uY2Fyb3VzZWwgLnNsaWRlLWNvbnRhaW5lcntcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiBub3dyYXA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdHJhbnNpdGlvbjogbGVmdCAuM3MgZWFzZS1vdXQ7XG59XG5cbi5jYXJvdXNlbCBpbWcuc2xpZGV7XG4gIHdpZHRoOiB2YXIoLS1jYXJvdXNlbC13aWR0aCk7XG4gIGhlaWdodDogdmFyKC0tY2Fyb3VzZWwtaGVpZ2h0KTtcbn1cblxuLmNhcm91c2VsIGJ1dHRvbntcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IGNhbGMoNTAlIC0gKHZhcigtLWNhcm91c2VsLWJ1dHRvbi1zaXplKSAvIDIpKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2Fyb3VzZWwtbWFpbi1jb2xvcik7XG4gIGJvcmRlcjogbm9uZTtcbiAgd2lkdGg6IHZhcigtLWNhcm91c2VsLWJ1dHRvbi1zaXplKTtcbiAgaGVpZ2h0OiB2YXIoLS1jYXJvdXNlbC1idXR0b24tc2l6ZSk7XG4gIGNvbG9yOiB2YXIoLS1jYXJvdXNlbC1zZWNvbmRhcnktY29sb3IpO1xuICBmb250LWZhbWlseTogJ0NvdXJpZXIgTmV3JywgQ291cmllciwgbW9ub3NwYWNlO1xuICBmb250LXdlaWdodDogOTAwO1xuICB0cmFuc2l0aW9uOiAuMnMgZWFzZS1pbi1vdXQ7XG59XG5cbi5jYXJvdXNlbCBidXR0b246aG92ZXIsXG4uY2Fyb3VzZWwgYnV0dG9uOmFjdGl2ZXtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2Fyb3VzZWwtc2Vjb25kYXJ5LWNvbG9yKTtcbiAgY29sb3I6IHZhcigtLWNhcm91c2VsLW1haW4tY29sb3IpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5jYXJvdXNlbCBidXR0b24ubmV4dHtcbiAgcmlnaHQ6IGNhbGModmFyKC0tY2Fyb3VzZWwtYnV0dG9uLXNpemUpIC8gLTIpO1xuICBib3JkZXItbGVmdDogMnB4IHNvbGlkIHZhcigtLWNhcm91c2VsLXNlY29uZGFyeS1jb2xvcik7XG59XG5cbi5jYXJvdXNlbCBidXR0b24ucHJldntcbiAgbGVmdDogY2FsYyh2YXIoLS1jYXJvdXNlbC1idXR0b24tc2l6ZSkgLyAtMik7XG4gIGJvcmRlci1yaWdodDogMnB4IHNvbGlkIHZhcigtLWNhcm91c2VsLXNlY29uZGFyeS1jb2xvcik7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHdCQUF3QjtFQUN4QixrQ0FBa0M7RUFDbEMsb0NBQW9DO0VBQ3BDLHVCQUF1QjtFQUN2Qix3QkFBd0I7RUFDeEIsOEJBQThCO0VBQzlCLG1DQUFtQztFQUNuQyw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSwrQkFBK0I7RUFDL0IsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsNkVBQTZFO0FBQy9FOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CO0FBQ0Y7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsNEJBQTRCO0VBQzVCLGNBQWM7RUFDZCxVQUFVO0VBQ1YsU0FBUztFQUNULGdEQUFnRDtFQUNoRCxvQkFBb0I7RUFDcEIscUJBQXFCO0VBQ3JCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixTQUFTO0VBQ1QsVUFBVTtFQUNWLHVDQUF1QztFQUN2QyxnQ0FBZ0M7RUFDaEMsa0JBQWtCO0FBQ3BCOztBQUVBOztFQUVFLGtEQUFrRDtFQUNsRCxxQ0FBcUM7RUFDckMsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QiwrQkFBK0I7RUFDL0IsZ0RBQWdEO0VBQ2hELFlBQVk7RUFDWix1Q0FBdUM7RUFDdkMsOENBQThDO0VBQzlDLGdCQUFnQjtFQUNoQix5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLHlEQUF5RDtFQUN6RCwyQkFBMkI7RUFDM0IsY0FBYztBQUNoQjs7QUFFQTs7RUFFRSxrREFBa0Q7RUFDbEQscUNBQXFDO0VBQ3JDLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxpREFBaUQ7RUFDakQsNEJBQTRCO0VBQzVCLDhCQUE4QjtFQUM5QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsNEJBQTRCO0VBQzVCLDhCQUE4QjtFQUM5QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSw0QkFBNEI7RUFDNUIsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGtEQUFrRDtFQUNsRCw0Q0FBNEM7RUFDNUMsWUFBWTtFQUNaLGtDQUFrQztFQUNsQyxtQ0FBbUM7RUFDbkMsc0NBQXNDO0VBQ3RDLDhDQUE4QztFQUM5QyxnQkFBZ0I7RUFDaEIsMkJBQTJCO0FBQzdCOztBQUVBOztFQUVFLGlEQUFpRDtFQUNqRCxpQ0FBaUM7RUFDakMsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLDZDQUE2QztFQUM3QyxzREFBc0Q7QUFDeEQ7O0FBRUE7RUFDRSw0Q0FBNEM7RUFDNUMsdURBQXVEO0FBQ3pEXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290e1xcbiAgLS1kcm9wLWRvd24taGVpZ2h0OiAzMHB4O1xcbiAgLS1kcm9wLWRvd24tcHJpbWFyeS1jb2xvcjogIzFiMWIxYjtcXG4gIC0tZHJvcC1kb3duLXNlY29uZGFyeS1jb2xvcjogI2ZmZTYwMDtcXG4gIC0tY2Fyb3VzZWwtd2lkdGg6IDQwMHB4O1xcbiAgLS1jYXJvdXNlbC1oZWlnaHQ6IDIwMHB4O1xcbiAgLS1jYXJvdXNlbC1tYWluLWNvbG9yOiAjMWIxYjFiO1xcbiAgLS1jYXJvdXNlbC1zZWNvbmRhcnktY29sb3I6ICNmZmU2MDA7XFxuICAtLWNhcm91c2VsLWJ1dHRvbi1zaXplOiAzMHB4O1xcbn1cXG5cXG4uZHJvcC1kb3due1xcbiAgaGVpZ2h0OiB2YXIoLS1kcm9wLWRvd24taGVpZ2h0KTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZm9udC1mYW1pbHk6ICdHaWxsIFNhbnMnLCAnR2lsbCBTYW5zIE1UJywgQ2FsaWJyaSwgJ1RyZWJ1Y2hldCBNUycsIHNhbnMtc2VyaWY7XFxufVxcblxcbi5kcm9wLWRvd24gdWwuYWN0aXZle1xcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG4gIHRyYW5zZm9ybTogc2NhbGVZKDEpXFxufVxcblxcbi5kcm9wLWRvd24gdWx7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgei1pbmRleDogOTk7XFxuICB0b3A6IHZhcigtLWRyb3AtZG93bi1oZWlnaHQpO1xcbiAgd2lkdGg6IGluaGVyaXQ7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZHJvcC1kb3duLXByaW1hcnktY29sb3IpO1xcbiAgdHJhbnNmb3JtOiBzY2FsZVkoMCk7XFxuICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3A7XFxuICB0cmFuc2l0aW9uOiAuMXMgdHJhbnNmb3JtO1xcbn1cXG5cXG4uZHJvcC1kb3duIHVsIGxpe1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGNvbG9yOiB2YXIoLS1kcm9wLWRvd24tc2Vjb25kYXJ5LWNvbG9yKTtcXG4gIHRyYW5zaXRpb246IC4zcyBiYWNrZ3JvdW5kLWNvbG9yO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uZHJvcC1kb3duIHVsIGxpOmhvdmVyLFxcbi5kcm9wLWRvd24gdWwgbGk6YWN0aXZle1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZHJvcC1kb3duLXNlY29uZGFyeS1jb2xvcik7XFxuICBjb2xvcjogdmFyKC0tZHJvcC1kb3duLXByaW1hcnktY29sb3IpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uZHJvcC1kb3duIGJ1dHRvbntcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBoZWlnaHQ6IHZhcigtLWRyb3AtZG93bi1oZWlnaHQpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZHJvcC1kb3duLXByaW1hcnktY29sb3IpO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY29sb3I6IHZhcigtLWRyb3AtZG93bi1zZWNvbmRhcnktY29sb3IpO1xcbiAgZm9udC1mYW1pbHk6ICdDb3VyaWVyIE5ldycsIENvdXJpZXIsIG1vbm9zcGFjZTtcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1kcm9wLWRvd24tc2Vjb25kYXJ5LWNvbG9yKTtcXG4gIHRyYW5zaXRpb246IC4ycyBlYXNlLWluLW91dDtcXG4gIHBhZGRpbmc6IDVweCAwO1xcbn1cXG5cXG4uZHJvcC1kb3duIGJ1dHRvbjpob3ZlcixcXG4uZHJvcC1kb3duIGJ1dHRvbjphY3RpdmV7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kcm9wLWRvd24tc2Vjb25kYXJ5LWNvbG9yKTtcXG4gIGNvbG9yOiB2YXIoLS1kcm9wLWRvd24tcHJpbWFyeS1jb2xvcik7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5kcm9wLWRvd24tc21hbGx7XFxuICB3aWR0aDogMjAwcHg7XFxufVxcblxcbi5kcm9wLWRvd24tbWVkaXVte1xcbiAgd2lkdGg6IDQwMHB4O1xcbn1cXG5cXG4uZHJvcC1kb3duLWJpZ3tcXG4gIHdpZHRoOiA4MDBweDtcXG59XFxuXFxuLmNhcm91c2Vse1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY2Fyb3VzZWwtc2Vjb25kYXJ5LWNvbG9yKTtcXG4gIHdpZHRoOiB2YXIoLS1jYXJvdXNlbC13aWR0aCk7XFxuICBoZWlnaHQ6IHZhcigtLWNhcm91c2VsLWhlaWdodCk7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5jYXJvdXNlbCAuY2Fyb3VzZWwtZnJhbWV7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aWR0aDogdmFyKC0tY2Fyb3VzZWwtd2lkdGgpO1xcbiAgaGVpZ2h0OiB2YXIoLS1jYXJvdXNlbC1oZWlnaHQpO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLmNhcm91c2VsIC5zbGlkZS1jb250YWluZXJ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiBub3dyYXA7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0cmFuc2l0aW9uOiBsZWZ0IC4zcyBlYXNlLW91dDtcXG59XFxuXFxuLmNhcm91c2VsIGltZy5zbGlkZXtcXG4gIHdpZHRoOiB2YXIoLS1jYXJvdXNlbC13aWR0aCk7XFxuICBoZWlnaHQ6IHZhcigtLWNhcm91c2VsLWhlaWdodCk7XFxufVxcblxcbi5jYXJvdXNlbCBidXR0b257XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IGNhbGMoNTAlIC0gKHZhcigtLWNhcm91c2VsLWJ1dHRvbi1zaXplKSAvIDIpKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNhcm91c2VsLW1haW4tY29sb3IpO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgd2lkdGg6IHZhcigtLWNhcm91c2VsLWJ1dHRvbi1zaXplKTtcXG4gIGhlaWdodDogdmFyKC0tY2Fyb3VzZWwtYnV0dG9uLXNpemUpO1xcbiAgY29sb3I6IHZhcigtLWNhcm91c2VsLXNlY29uZGFyeS1jb2xvcik7XFxuICBmb250LWZhbWlseTogJ0NvdXJpZXIgTmV3JywgQ291cmllciwgbW9ub3NwYWNlO1xcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gIHRyYW5zaXRpb246IC4ycyBlYXNlLWluLW91dDtcXG59XFxuXFxuLmNhcm91c2VsIGJ1dHRvbjpob3ZlcixcXG4uY2Fyb3VzZWwgYnV0dG9uOmFjdGl2ZXtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNhcm91c2VsLXNlY29uZGFyeS1jb2xvcik7XFxuICBjb2xvcjogdmFyKC0tY2Fyb3VzZWwtbWFpbi1jb2xvcik7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5jYXJvdXNlbCBidXR0b24ubmV4dHtcXG4gIHJpZ2h0OiBjYWxjKHZhcigtLWNhcm91c2VsLWJ1dHRvbi1zaXplKSAvIC0yKTtcXG4gIGJvcmRlci1sZWZ0OiAycHggc29saWQgdmFyKC0tY2Fyb3VzZWwtc2Vjb25kYXJ5LWNvbG9yKTtcXG59XFxuXFxuLmNhcm91c2VsIGJ1dHRvbi5wcmV2e1xcbiAgbGVmdDogY2FsYyh2YXIoLS1jYXJvdXNlbC1idXR0b24tc2l6ZSkgLyAtMik7XFxuICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCB2YXIoLS1jYXJvdXNlbC1zZWNvbmRhcnktY29sb3IpO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9zdHlsZXMuY3NzXCI7XG5cbi8vIERyb3AgRG93biBNZW51IHNlY3Rpb25cblxuY29uc3QgZHJvcERvd25CdG5zID0gKFxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmRyb3AtZG93biBidXR0b25cIilcbik7XG5cbmNvbnN0IGRyb3BIYW5kbGVyID0gZnVuY3Rpb24gZHJvcERvd25IYW5kbGVyKGV2ZW50KXtcbiAgZXZlbnQuY3VycmVudFRhcmdldFxuICAgIC5wYXJlbnRFbGVtZW50XG4gICAgLnF1ZXJ5U2VsZWN0b3IoXCJ1bFwiKVxuICAgIC5jbGFzc0xpc3RcbiAgICAudG9nZ2xlKFwiYWN0aXZlXCIpO1xufTtcblxuZHJvcERvd25CdG5zLmZvckVhY2goYnRuID0+IHtcbiAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLGRyb3BIYW5kbGVyKTtcbn0pO1xuXG4vLyBDYXJvdXNlbCBzZWN0aW9uXG5cbmNvbnN0IGNhcm91c2VsTmV4dEJ0bnMgPSAoXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY2Fyb3VzZWwgYnV0dG9uLm5leHRcIilcbik7XG5cbmNvbnN0IGNhcm91c2VsUHJldkJ0bnMgPSAoXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY2Fyb3VzZWwgYnV0dG9uLnByZXZcIilcbik7XG5cbi8vIGdsb2JhbCB2YXJpYWJsZXMgZm9yIGNhcm91c2VsXG5cbmNvbnN0IGNhcm91c2VsU2l6ZUluUFggPSA0MDA7XG5jb25zdCBudW1iZXJPZlNsaWRlcyA9IChcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jYXJvdXNlbCBpbWcuc2xpZGVcIikubGVuZ3RoXG4pO1xubGV0IGN1cnJlbnRTbGlkZSA9IDA7XG5cbmNvbnN0IG5leHRTbGlkZSA9IGZ1bmN0aW9uIG5leHRTbGlkZUhhbmRsZXIoZXZlbnQpe1xuICAvLyBnbyBiYWNrIHRvIHRoZSBmaXJzdCBzbGlkZSBpZiBvbiBsYXN0IHNsaWRlIFxuICBpZiAoY3VycmVudFNsaWRlID09PSAobnVtYmVyT2ZTbGlkZXMgLSAxKSkge1xuICAgIGN1cnJlbnRTbGlkZSA9IDA7XG4gIH0gZWxzZSB7XG4gICAgY3VycmVudFNsaWRlICs9IDE7XG4gIH1cblxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhcm91c2VsIC5zbGlkZS1jb250YWluZXJcIilcbiAgICAuc3R5bGVcbiAgICAubGVmdCA9IGAtJHsoY2Fyb3VzZWxTaXplSW5QWCAqIGN1cnJlbnRTbGlkZSl9cHhgO1xufTtcblxuY29uc3QgcHJldlNsaWRlID0gZnVuY3Rpb24gcHJldlNsaWRlSGFuZGxlcihldmVudCl7XG4gIC8vIGdvIHRvIHRoZSBsYXN0IHNsaWRlIGlmIGN1cnJlbnRseSBvbiB0aGUgZmlyc3Qgc2xpZGVcbiAgaWYgKGN1cnJlbnRTbGlkZSA9PT0gMCkge1xuICAgIGN1cnJlbnRTbGlkZSA9IChudW1iZXJPZlNsaWRlcyAtIDEpO1xuICB9IGVsc2Uge1xuICAgIGN1cnJlbnRTbGlkZSAtPSAxO1xuICB9XG5cbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYXJvdXNlbCAuc2xpZGUtY29udGFpbmVyXCIpXG4gICAgLnN0eWxlXG4gICAgLmxlZnQgPSBgLSR7KGNhcm91c2VsU2l6ZUluUFggKiBjdXJyZW50U2xpZGUpfXB4YDtcbn07XG5cbmNhcm91c2VsUHJldkJ0bnMuZm9yRWFjaChidG4gPT4ge1xuICBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIscHJldlNsaWRlKTtcbn0pO1xuXG5jYXJvdXNlbE5leHRCdG5zLmZvckVhY2goYnRuID0+IHtcbiAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLG5leHRTbGlkZSk7XG59KTtcblxuc2V0SW50ZXJ2YWwobmV4dFNsaWRlLDUwMDApOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==