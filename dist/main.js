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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/dom_node_collection.js":
/*!************************************!*\
  !*** ./src/dom_node_collection.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class DOMNodeCollection {\n    constructor(nodes) {\n        this.nodes = nodes;\n    }\n\n    html(html) {\n        //checking if html is a string to be able to pass in empty string\n        if (typeof html === \"string\") {\n            this.nodes.forEach( node => {\n                node.innerHTML = html;\n            })\n        } else {\n            return this.nodes[0].innerHTML;\n        };\n    }\n\n    empty() {\n        this.html(\"\");\n    }\n\n    append(child) {\n        if (child instanceof Object && !(child instanceof DOMNodeCollection)) {\n            child = $1(child)\n        };\n        \n        if (child instanceof DOMNodeCollection) {\n            this.nodes.forEach(node => {\n                node.innerHTML += child.outerHTML;\n            });\n        } else {\n            this.nodes.forEach(node => {\n                node.innerHTML += child;\n            });\n        };\n    };\n\n    attr(atter, value){\n        if (value){\n            this.nodes.forEach(node => {\n                node[atter] = value;\n            });\n        } else {\n            return this.nodes[0][atter]\n        };\n    }\n\n    addClass(clss) {\n        this.nodes.forEach(node => {\n            node.className = clss;\n        });\n    }\n\n    removeClass() {\n        this.nodes.forEach(node => {\n            node.className = '';\n        });\n    }\n\n    // possibly need to go one key deeper\n    children() {\n        let childNodes = []\n        this.nodes.forEach(node => {\n           childNodes = childNodes.concat(Array.from(node.children));\n        });\n\n        return new DOMNodeCollection(childNodes);\n    }\n\n    // parent() {\n    //     //change .parent to .parentNode\n    //     let parentNodes = [];\n    //     this.nodes.forEach(node => {\n    //         parentNodes = parentNodes.concat(Array.from(node.parentNode));\n    //     });\n\n    //     return new DOMNodeCollection(parentNodes);\n    // }\n    \n    parent() {\n        \n        // this.nodes.forEach(node => {\n        //     if (parentNodes.includes(node.parentNode))\n        //         parentNodes.push(node.parentNode);\n        // });\n\n        return new DOMNodeCollection(this.nodes[0].parentNode);\n    }\n\n\n    find(selector) {\n        //finds the element based on the selector\n        let eles = [];\n        this.nodes.forEach(node => {\n            const ele = Array.from(node.querySelectorAll(selector))\n            eles.concat(ele)\n        });\n\n        return new DOMNodeCollection(eles);\n    }\n}\n\nmodule.exports = DOMNodeCollection\n\n//# sourceURL=webpack:///./src/dom_node_collection.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const DOMNodeCollection = __webpack_require__(/*! ./dom_node_collection */ \"./src/dom_node_collection.js\");\n\nwindow.$1 = function(arg) {\n    if (arg instanceof HTMLElement ) {\n        return new DOMNodeCollection([arg]);\n    } else { \n    // undercase document not uppercase/ also this.document to link current doc\n    // ^ results to querySelectorAll not function\n        const nodeList = document.querySelectorAll(arg);\n        // console.log(\"log\");\n        const nodes = Array.from(nodeList);\n        return new DOMNodeCollection(nodes);\n    };\n};\n\n// module.exports = index.js \n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });