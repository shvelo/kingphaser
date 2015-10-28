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
/***/ function(module, exports, __webpack_require__) {

	var game = new Phaser.Game(864, 480, Phaser.AUTO, 'game');
	game.state.add('menu', __webpack_require__(1));
	game.state.start('menu');


/***/ },
/* 1 */
/***/ function(module, exports) {

	var menu_state = function () {
	};

	menu_state.prototype = Object.create(Phaser.State.prototype);

	menu_state.prototype.preload = function () {
	  this.load.image("title", "assets/gfx/title.png");
	};

	menu_state.prototype.create = function() {
	  var title = this.add.sprite(0, 0, "title");
	  title.scale.setTo(3, 3);
	};

	module.exports = menu_state;

/***/ }
/******/ ]);