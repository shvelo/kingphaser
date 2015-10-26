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

	'use strict';

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _statesMenuJsx = __webpack_require__(1);

	var _statesMenuJsx2 = _interopRequireDefault(_statesMenuJsx);

	var _statesPlayJsx = __webpack_require__(2);

	var _statesPlayJsx2 = _interopRequireDefault(_statesPlayJsx);

	var Game = (function (_Phaser$Game) {
	  _inherits(Game, _Phaser$Game);

	  function Game() {
	    _classCallCheck(this, Game);

	    _get(Object.getPrototypeOf(Game.prototype), 'constructor', this).call(this, 864, 480, Phaser.AUTO, 'game');
	    this.state.add('menu', _statesMenuJsx2['default']);
	    this.state.add('play', _statesPlayJsx2['default']);
	    this.state.start('play');
	  }

	  return Game;
	})(Phaser.Game);

	new Game();

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var MenuState = (function (_Phaser$State) {
	  _inherits(MenuState, _Phaser$State);

	  function MenuState() {
	    _classCallCheck(this, MenuState);

	    _get(Object.getPrototypeOf(MenuState.prototype), "constructor", this).apply(this, arguments);
	  }

	  _createClass(MenuState, [{
	    key: "preload",
	    value: function preload() {
	      this.load.image("title", "assets/gfx/title.png");
	    }
	  }, {
	    key: "create",
	    value: function create() {
	      var title = this.add.sprite(0, 0, "title");
	      title.scale.setTo(3, 3);
	    }
	  }]);

	  return MenuState;
	})(Phaser.State);

	exports["default"] = MenuState;
	module.exports = exports["default"];

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _objectsPlayerJsx = __webpack_require__(3);

	var _objectsPlayerJsx2 = _interopRequireDefault(_objectsPlayerJsx);

	var PlayState = (function (_Phaser$State) {
	  _inherits(PlayState, _Phaser$State);

	  function PlayState() {
	    _classCallCheck(this, PlayState);

	    _get(Object.getPrototypeOf(PlayState.prototype), "constructor", this).apply(this, arguments);
	  }

	  _createClass(PlayState, [{
	    key: "preload",
	    value: function preload() {
	      this.load.spritesheet("player", "assets/gfx/king.png", 64, 64);
	      this.load.spritesheet("coin", "assets/gfx/coin.png", 10, 10);
	    }
	  }, {
	    key: "create",
	    value: function create() {
	      this.physics.startSystem(Phaser.Physics.ARCADE);

	      var player = new _objectsPlayerJsx2["default"](this.game, this.world.centerX, this.world.centerY);
	      this.add.existing(player);
	    }
	  }]);

	  return PlayState;
	})(Phaser.State);

	exports["default"] = PlayState;
	module.exports = exports["default"];

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _coinJsx = __webpack_require__(4);

	var _coinJsx2 = _interopRequireDefault(_coinJsx);

	var Player = (function (_Phaser$Sprite) {
	  _inherits(Player, _Phaser$Sprite);

	  function Player(game, x, y) {
	    var _this = this;

	    _classCallCheck(this, Player);

	    _get(Object.getPrototypeOf(Player.prototype), 'constructor', this).call(this, game, x, y, 'player');
	    this.anchor.setTo(.5, .5);
	    this.animations.add('walking', [0, 1, 2, 3, 4, 5, 6, 7], 10, true);
	    this.animations.add('still', [8, 8, 8, 9, 10], 2, true);

	    game.physics.enable(this, Phaser.Physics.ARCADE);

	    this.play('still');

	    var leftKey = this.game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
	    var rightKey = this.game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
	    var downKey = this.game.input.keyboard.addKey(Phaser.Keyboard.DOWN);

	    leftKey.onDown.add(function (event) {
	      _this.play('walking');
	      _this.scale.x = -1;
	      _this.body.velocity.x = -100;
	    });
	    rightKey.onDown.add(function (event) {
	      _this.play('walking');
	      _this.scale.x = 1;
	      _this.body.velocity.x = 100;
	    });
	    leftKey.onUp.add(function (event) {
	      _this.play('still');
	      _this.body.velocity.x = 0;
	    });
	    rightKey.onUp.add(function (event) {
	      _this.play('still');
	      _this.body.velocity.x = 0;
	    });
	    downKey.onDown.add(function (event) {
	      var coin = new _coinJsx2['default'](game, _this.x, _this.y);
	      game.add.existing(coin);
	    });
	  }

	  return Player;
	})(Phaser.Sprite);

	exports['default'] = Player;
	module.exports = exports['default'];

/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Coin = (function (_Phaser$Sprite) {
	  _inherits(Coin, _Phaser$Sprite);

	  function Coin(game, x, y) {
	    _classCallCheck(this, Coin);

	    _get(Object.getPrototypeOf(Coin.prototype), 'constructor', this).call(this, game, x, y, 'coin');
	    this.animations.add('still', null, 60, true);

	    game.physics.enable(this, Phaser.Physics.ARCADE);

	    this.play('still');

	    this.body.velocity.y = 100;
	  }

	  return Coin;
	})(Phaser.Sprite);

	exports['default'] = Coin;
	module.exports = exports['default'];

/***/ }
/******/ ]);