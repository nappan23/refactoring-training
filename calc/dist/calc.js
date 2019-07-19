/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/calc.js":
/*!*********************!*\
  !*** ./src/calc.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var btn0 = document.getElementById('js-calc-0');\nvar btn1 = document.getElementById('js-calc-1');\nvar btn2 = document.getElementById('js-calc-2');\nvar btn3 = document.getElementById('js-calc-3');\nvar btn4 = document.getElementById('js-calc-4');\nvar btn5 = document.getElementById('js-calc-5');\nvar btn6 = document.getElementById('js-calc-6');\nvar btn7 = document.getElementById('js-calc-7');\nvar btn8 = document.getElementById('js-calc-8');\nvar btn9 = document.getElementById('js-calc-9');\nvar result = document.getElementById('js-calc-result');\nvar clear = document.getElementById('js-calc-clear');\nvar divided = document.getElementById('js-calc-divided');\nvar multiplied = document.getElementById('js-calc-multiplied');\nvar minus = document.getElementById('js-calc-minus');\nvar equal = document.getElementById('js-calc-equal');\nvar plus = document.getElementById('js-calc-plus');\nvar value = 0;\nvar waiting = false;\nvar isCalc = false;\nvar type = '';\nvar tempValue = 0;\n\nfunction setResult(val) {\n  if (!waiting) {\n    value = parseFloat(value + val);\n  } else {\n    value = parseFloat(val);\n  }\n\n  result.innerHTML = String(parseFloat(value, 10));\n  waiting = false;\n}\n\nfunction setType(_type, value) {\n  type = _type;\n  waiting = true;\n\n  if (isCalc) {\n    tempValue = calc();\n  } else {\n    tempValue = value;\n  }\n\n  console.log(_type, value);\n  isCalc = true;\n}\n\nfunction calc() {\n  var resultValue = 0;\n\n  switch (type) {\n    case 'plus':\n      resultValue = tempValue + value;\n      break;\n\n    case 'minus':\n      resultValue = tempValue - value;\n      break;\n\n    case 'multi':\n      resultValue = tempValue * value;\n      break;\n\n    case 'div':\n      resultValue = tempValue / value;\n      break;\n\n    default:\n      resultValue = tempValue;\n      break;\n  }\n\n  result.innerHTML = String(resultValue);\n  return resultValue;\n}\n\nclear.addEventListener('click', function (e) {\n  e.preventDefault();\n  console.log('clear');\n  value = 0;\n  type = '';\n  waiting = false;\n  setResult(value);\n});\nbtn0.addEventListener('click', function (e) {\n  e.preventDefault();\n  console.log(0);\n  setResult('0');\n});\nbtn1.addEventListener('click', function (e) {\n  e.preventDefault();\n  console.log(1);\n  setResult('1');\n});\nbtn2.addEventListener('click', function (e) {\n  e.preventDefault();\n  console.log(2);\n  setResult('2');\n});\nbtn3.addEventListener('click', function (e) {\n  e.preventDefault();\n  console.log(3);\n  setResult('3');\n});\nbtn4.addEventListener('click', function (e) {\n  e.preventDefault();\n  console.log(4);\n  setResult('4');\n});\nbtn5.addEventListener('click', function (e) {\n  e.preventDefault();\n  console.log(5);\n  setResult('5');\n});\nbtn6.addEventListener('click', function (e) {\n  e.preventDefault();\n  console.log(6);\n  setResult('6');\n});\nbtn7.addEventListener('click', function (e) {\n  e.preventDefault();\n  console.log(7);\n  setResult('7');\n});\nbtn8.addEventListener('click', function (e) {\n  e.preventDefault();\n  console.log(8);\n  setResult('8');\n});\nbtn9.addEventListener('click', function (e) {\n  e.preventDefault();\n  console.log(9);\n  setResult('9');\n});\ndivided.addEventListener('click', function (e) {\n  e.preventDefault();\n  console.log('divided');\n  setType('div', value);\n});\nmultiplied.addEventListener('click', function (e) {\n  e.preventDefault();\n  console.log('multiplied');\n  setType('multi', value);\n});\nminus.addEventListener('click', function (e) {\n  e.preventDefault();\n  console.log('minus');\n  setType('minus', value);\n});\nplus.addEventListener('click', function (e) {\n  e.preventDefault();\n  console.log('plus');\n  setType('plus', value);\n});\nequal.addEventListener('click', function (e) {\n  e.preventDefault();\n  console.log('equal');\n  calc();\n  isCalc = false;\n  waiting = true;\n});\n\n//# sourceURL=webpack:///./src/calc.js?");

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/style.scss?");

/***/ }),

/***/ 0:
/*!*****************************************!*\
  !*** multi ./src/calc ./src/style.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./src/calc */\"./src/calc.js\");\nmodule.exports = __webpack_require__(/*! ./src/style.scss */\"./src/style.scss\");\n\n\n//# sourceURL=webpack:///multi_./src/calc_./src/style.scss?");

/***/ })

/******/ });