/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	'use strict';

	console.log("hello world");

	var traverseDom = function traverseDom(node, funcToRun) {
	  if (node.nodeType === 3 && node.nodeValue.trim() !== '') funcToRun(node);else node.childNodes.forEach(function (e) {
	    return traverseDom(e, funcToRun);
	  });
	};

	var rootNode = document.getElementsByTagName('body')[0];

	var rektFunction = function rektFunction(elem) {
	  var parent = elem.parentNode,
	      newChild = document.createElement('text');
	  newChild.textContent = 'rekt ';
	  parent.replaceChild(newChild, elem);
	};

	traverseDom(rootNode, rektFunction);

	/* 
	Steps 
	1) Replace all instances thing 
	2) Add the typing mechanism
	  2.1) Add listeners 
	    2.1.1) If they submit an emote then re render
	  2.2) If they type notifying thing display little box



	*/

/***/ }
/******/ ]);