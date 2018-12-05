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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/game.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/game.jsx":
/*!**********************!*\
  !*** ./src/game.jsx ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _states_boot_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./states/boot.jsx */ \"./src/states/boot.jsx\");\n/* harmony import */ var _states_menu_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./states/menu.jsx */ \"./src/states/menu.jsx\");\n/* harmony import */ var _states_play_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./states/play.jsx */ \"./src/states/play.jsx\");\n\n\n\n\nclass Game extends Phaser.Game {\n  constructor() {\n    super(480, 320, Phaser.AUTO, 'game');\n    window.game = this;\n    this.state.add('boot', _states_boot_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n    this.state.add('menu', _states_menu_jsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n    this.state.add('play', _states_play_jsx__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n    this.state.start('boot');\n  }\n\n}\n\nnew Game();\n\n//# sourceURL=webpack:///./src/game.jsx?");

/***/ }),

/***/ "./src/objects/coin.jsx":
/*!******************************!*\
  !*** ./src/objects/coin.jsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Coin extends Phaser.Sprite {\n  constructor(game, x, y) {\n    super(game, x, y, 'coin');\n    this.animations.add('still', null, 10, true);\n    game.physics.enable(this, Phaser.Physics.ARCADE);\n    this.body.bounce.y = 0.5;\n    this.body.mass = 5;\n    this.play('still');\n    setTimeout(event => {\n      this.canPickUp = true;\n    }, 1000);\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Coin);\n\n//# sourceURL=webpack:///./src/objects/coin.jsx?");

/***/ }),

/***/ "./src/objects/player.jsx":
/*!********************************!*\
  !*** ./src/objects/player.jsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _coin_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./coin.jsx */ \"./src/objects/coin.jsx\");\n\n\nclass Player extends Phaser.Sprite {\n  constructor(state, x, y) {\n    super(state.game, x, y, 'player');\n    this.state = state;\n    this.speed = 60;\n    this.anchor.setTo(.5, .5);\n    this.animations.add('walking', [0, 1, 2, 3, 4, 5, 6, 7], 15, true);\n    this.animations.add('still', [8, 8, 8, 8, 9, 10, 9, 10, 9, 10, 9], 2, true);\n    this.game.physics.enable(this);\n    this.body.collideWorldBounds = true;\n    this.body.mass = 100;\n    this.body.offset.y = -4;\n    this.coins = 10;\n    this.play('still');\n    var leftKey = this.game.input.keyboard.addKey(Phaser.Keyboard.LEFT);\n    var rightKey = this.game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);\n    var downKey = this.game.input.keyboard.addKey(Phaser.Keyboard.DOWN);\n    var upKey = this.game.input.keyboard.addKey(Phaser.Keyboard.UP);\n    this.gun = this.addChild(new Phaser.Sprite(this.game, -1, 8, \"gun\"));\n    this.game.physics.enable(this.gun);\n    this.gun.anchor.setTo(0.5, 0.5);\n    this.gun.body.allowGravity = 0;\n    leftKey.onDown.add(event => {\n      if (!this.body.blocked.left) this.play('walking');else this.play('still');\n      this.scale.x = -1;\n      this.body.velocity.x = -this.speed;\n    });\n    rightKey.onDown.add(event => {\n      if (!this.body.blocked.right) this.play('walking');else this.play('still');\n      this.scale.x = 1;\n      this.body.velocity.x = this.speed;\n    });\n    leftKey.onUp.add(event => {\n      this.play('still');\n      this.body.velocity.x = 0;\n    });\n    rightKey.onUp.add(event => {\n      this.play('still');\n      this.body.velocity.x = 0;\n    });\n    downKey.onDown.add(event => {\n      this.dropCoin();\n    });\n    upKey.onDown.add(event => {\n      this.jump();\n    });\n  }\n\n  update() {\n    this.gun.rotation = this.game.physics.arcade.angleToPointer(this.gun) - 0.9;\n  }\n\n  dropCoin() {\n    if (this.coins < 1) return;\n    var coin = new _coin_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.game, this.x, this.y);\n    this.state.coins.add(coin);\n    this.coins -= 1;\n  }\n\n  jump() {\n    if (this.body.blocked.down) this.body.velocity.y = -200;\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Player);\n\n//# sourceURL=webpack:///./src/objects/player.jsx?");

/***/ }),

/***/ "./src/states/boot.jsx":
/*!*****************************!*\
  !*** ./src/states/boot.jsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass BootState extends Phaser.State {\n  preload() {}\n\n  create() {\n    this.game.scale.scaleMode = Phaser.ScaleManager.EXACT_FIT;\n    this.stage.smoothed = false;\n    this.game.antialias = false;\n    this.game.renderer.renderSession.roundPixels = true;\n    this.state.start('play');\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (BootState);\n\n//# sourceURL=webpack:///./src/states/boot.jsx?");

/***/ }),

/***/ "./src/states/menu.jsx":
/*!*****************************!*\
  !*** ./src/states/menu.jsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass MenuState extends Phaser.State {\n  preload() {\n    this.load.image(\"title\", \"assets/gfx/title.png\");\n  }\n\n  create() {\n    var title = this.add.sprite(0, 0, \"title\");\n    title.scale.setTo(3, 3);\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MenuState);\n\n//# sourceURL=webpack:///./src/states/menu.jsx?");

/***/ }),

/***/ "./src/states/play.jsx":
/*!*****************************!*\
  !*** ./src/states/play.jsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _objects_player_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../objects/player.jsx */ \"./src/objects/player.jsx\");\n\n\nclass PlayState extends Phaser.State {\n  preload() {\n    this.load.spritesheet(\"player\", \"assets/gfx/king.png\", 64, 64);\n    this.load.spritesheet(\"coin\", \"assets/gfx/coin.png\", 10, 10);\n    this.load.image(\"gun\", \"assets/gfx/gun.png\");\n    this.load.image(\"tiles\", \"assets/gfx/tiles.png\");\n    this.load.tilemap(\"testmap\", \"assets/maps/test.json\", null, Phaser.Tilemap.TILED_JSON);\n  }\n\n  create() {\n    document.getElementById('preloader').remove();\n    this.physics.startSystem(Phaser.Physics.ARCADE);\n    this.physics.arcade.gravity.y = 1000;\n    this.map = this.add.tilemap(\"testmap\");\n    this.map.setCollisionByExclusion([]);\n    this.map.addTilesetImage(\"tiles\", \"tiles\");\n    this.groundLayer = this.map.createLayer(\"layer1\");\n    this.groundLayer.resizeWorld();\n    window.map = this.map;\n    this.stage.backgroundColor = \"#E0F7FA\";\n\n    var playerObj = _.find(this.map.objects.objects, {\n      name: \"player\"\n    });\n\n    this.player = new _objects_player_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this, playerObj.x, playerObj.y);\n    this.add.existing(this.player);\n    this.camera.follow(this.player, Phaser.Camera.FOLLOW_PLATFORMER);\n    this.coins = this.add.group();\n    this.physics.enable(this.coins, Phaser.Physics.ARCADE);\n  }\n\n  update() {\n    this.physics.arcade.collide(this.player, this.groundLayer);\n    this.physics.arcade.collide(this.coins, this.groundLayer);\n    this.physics.arcade.overlap(this.player, this.coins, function (player, coin) {\n      if (coin.canPickUp) {\n        coin.kill();\n        player.coins += 1;\n      }\n    });\n    this.game.debug.text(this.player.coins, this.world.width - 30, 20, \"black\", \"16px sans-serif\");\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (PlayState);\n\n//# sourceURL=webpack:///./src/states/play.jsx?");

/***/ })

/******/ });