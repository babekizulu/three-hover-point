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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var _scss_App_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/App.scss */ \"./src/scss/App.scss\");\n//libraries\n //styling\n\n //dom elements\n\nvar infoDiv = document.querySelector('#info');\nvar sceneDiv = document.querySelector('#scene');\nvar pointRef = document.querySelector('#pointRef'); //instantiate a scene\n\nvar scene = new three__WEBPACK_IMPORTED_MODULE_1__.Scene();\nvar w = window.innerWidth;\nvar h = window.innerHeight;\nvar aspectRatio = w / h;\nvar fieldOfView = 75;\nvar nearClip = 0.1;\nvar farClip = 1000; //instantiate a camera\n\nvar camera = new three__WEBPACK_IMPORTED_MODULE_1__.PerspectiveCamera(fieldOfView, 2, nearClip, farClip); //instantiate a renderer\n\nvar renderer = new three__WEBPACK_IMPORTED_MODULE_1__.WebGLRenderer();\nvar canvas = renderer.domElement; //set three display size\n\nrenderer.setSize(w, h);\nsceneDiv.appendChild(canvas); //create a cube\n\nvar geometry = new three__WEBPACK_IMPORTED_MODULE_1__.BoxGeometry(1, 1, 1);\nvar material = new three__WEBPACK_IMPORTED_MODULE_1__.MeshBasicMaterial({\n  color: 0x00ff00\n});\nvar cube = new three__WEBPACK_IMPORTED_MODULE_1__.Mesh(geometry, material);\ncamera.position.z = 5; //create blue material for the line\n\nvar lineMaterial = new three__WEBPACK_IMPORTED_MODULE_1__.LineBasicMaterial({\n  color: 0x0000ff\n}); //create points for line\n\nvar points = [];\npoints.push(new three__WEBPACK_IMPORTED_MODULE_1__.Vector3(-1, 1, 0));\npoints.push(new three__WEBPACK_IMPORTED_MODULE_1__.Vector3(0, 1, 0));\npoints.push(new three__WEBPACK_IMPORTED_MODULE_1__.Vector3(1, 1, 0));\nvar pointsGeometry = new three__WEBPACK_IMPORTED_MODULE_1__.BufferGeometry().setFromPoints(points); //create a line by joining points\n\nvar line = new three__WEBPACK_IMPORTED_MODULE_1__.Line(pointsGeometry, lineMaterial);\nscene.add(cube, line); //show text on cube hover\n\nvar isRotating = true;\npointRef.addEventListener('mouseenter', function () {\n  isRotating = false;\n  infoDiv.innerText = 'Display Metadata';\n});\npointRef.addEventListener('mouseleave', function () {\n  isRotating = true;\n  infoDiv.innerText = '';\n}); //rendering loop\n\nvar animate = function animate() {\n  if (isRotating) {\n    requestAnimationFrame(animate);\n    cube.rotation.x += 0.01;\n    cube.rotation.y += 0.01;\n    renderer.render(scene, camera);\n  } else {\n    requestAnimationFrame(animate);\n    renderer.render(scene, camera);\n  }\n};\n\nanimate();\n\n//# sourceURL=webpack://cube_x/./src/index.js?");

/***/ }),

/***/ "./src/scss/App.scss":
/*!***************************!*\
  !*** ./src/scss/App.scss ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://cube_x/./src/scss/App.scss?");

/***/ }),

/***/ "./node_modules/three/build/three.module.js":
/*!**************************************************!*\
  !*** ./node_modules/three/build/three.module.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


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