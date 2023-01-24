/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/UI.js":
/*!*******************!*\
  !*** ./src/UI.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst UI = (() => {\r\n    function renderData(data) {\r\n        const cityName = document.getElementById(\"city-name\");\r\n        const temp = document.getElementById(\"temp\");\r\n        const feelsLike = document.getElementById(\"feels-like\");\r\n        const humidity = document.getElementById(\"humidity\");\r\n        const wind = document.getElementById(\"wind\");\r\n\r\n        cityName.textContent = data.name;\r\n        temp.textContent = data.main.temp;\r\n        feelsLike.textContent = data.main.feels_like;\r\n        humidity.textContent = data.main.humidity;\r\n        wind.textContent = data.wind.speed;\r\n    }\r\n\r\n    return {renderData}\r\n})();\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UI);\n\n//# sourceURL=webpack://weather-app/./src/UI.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _weatherAPI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weatherAPI */ \"./src/weatherAPI.js\");\n/* harmony import */ var _UI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UI */ \"./src/UI.js\");\n\r\n\r\n\r\nconst searchForm = document.getElementById(\"search-form\");\r\nconst searchInput = document.getElementById(\"search-input\");\r\n\r\nsearchForm.onsubmit = async function(ev) {\r\n    ev.preventDefault();\r\n    const weatherData = await (0,_weatherAPI__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(searchInput.value);\r\n    _UI__WEBPACK_IMPORTED_MODULE_1__[\"default\"].renderData(weatherData);\r\n}\r\n\r\nwindow.onload = async () => {\r\n    const weatherData = await (0,_weatherAPI__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"ankara\")\r\n    _UI__WEBPACK_IMPORTED_MODULE_1__[\"default\"].renderData(weatherData);\r\n}\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

/***/ }),

/***/ "./src/weatherAPI.js":
/*!***************************!*\
  !*** ./src/weatherAPI.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nasync function getData(_city) {\r\n    const APIkey = '8692200f25c10fb3f10fb6086ffbf049';\r\n    const city = _city;\r\n    const unit = \"metric\";\r\n    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&appid=${APIkey}`;\r\n\r\n    try{\r\n        const response = await fetch(url, { mode: \"cors\" });\r\n        if (!response.ok) throw new Error(`City of ${city} not found!`);\r\n        const data = await response.json();\r\n        return data;\r\n    }\r\n    catch(error){\r\n        alert(error);\r\n        return null;\r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getData);\n\n//# sourceURL=webpack://weather-app/./src/weatherAPI.js?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;