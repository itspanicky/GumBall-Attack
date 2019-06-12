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
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/board.js":
/*!*********************!*\
  !*** ./js/board.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\nclass Board {\n    constructor(ctx) {\n        this.ctx = ctx;\n    }\n\n    background() {\n        // const ctx = this.ctx;\n\n        // ctx.fillStyle = \"black\";\n        // ctx.fillRect(0, 0, 450, 450);\n    }\n\n    render() {\n        \n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Board);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy9ib2FyZC5qcz9mMWU5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFZSxvRUFBSyIsImZpbGUiOiIuL2pzL2JvYXJkLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5jbGFzcyBCb2FyZCB7XG4gICAgY29uc3RydWN0b3IoY3R4KSB7XG4gICAgICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgIH1cblxuICAgIGJhY2tncm91bmQoKSB7XG4gICAgICAgIC8vIGNvbnN0IGN0eCA9IHRoaXMuY3R4O1xuXG4gICAgICAgIC8vIGN0eC5maWxsU3R5bGUgPSBcImJsYWNrXCI7XG4gICAgICAgIC8vIGN0eC5maWxsUmVjdCgwLCAwLCA0NTAsIDQ1MCk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJvYXJkOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./js/board.js\n");

/***/ }),

/***/ "./js/gumball.js":
/*!***********************!*\
  !*** ./js/gumball.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Gumball {\n    constructor(ctx, canvas) {\n        this.ctx = ctx;\n        this.canvas = canvas;\n        \n        this.ballRadius = 80;\n\n        this.position = {\n            x: 100,\n            y: 100\n        };\n\n        this.speed = {\n            dx: 5,\n            dy: 5 \n        };\n\n        this.draw = this.draw.bind(this);\n        this.update = this.update.bind(this);\n    }\n\n    draw() {\n        const ctx = this.ctx;\n        const ballRadius = this.ballRadius;\n        const x = this.position.x;\n        const y = this.position.y;\n        \n        ctx.beginPath();\n        ctx.arc(x, y, ballRadius, 0, Math.PI * 2, false);\n        ctx.fillStyle = \"teal\";\n        ctx.fill();\n        ctx.closePath();\n        \n    }\n    \n    update() {\n        const canvas = this.canvas;\n\n        if (this.position.x + this.speed.dx > canvas.width - this.ballRadius || this.position.x + this.speed.dx < this.ballRadius) {\n            this.speed.dx = -this.speed.dx;\n        };\n\n        if (this.position.y + this.speed.dy > canvas.height - this.ballRadius || this.position.y + this.speed.dy < this.ballRadius) {\n            this.speed.dy = -this.speed.dy;\n        };\n\n        this.position.x += this.speed.dx;\n        this.position.y += this.speed.dy;\n\n        this.draw();\n    }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Gumball);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy9ndW1iYWxsLmpzPzAxOGEiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRWUsc0VBQU8iLCJmaWxlIjoiLi9qcy9ndW1iYWxsLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgR3VtYmFsbCB7XG4gICAgY29uc3RydWN0b3IoY3R4LCBjYW52YXMpIHtcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XG4gICAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5iYWxsUmFkaXVzID0gODA7XG5cbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHtcbiAgICAgICAgICAgIHg6IDEwMCxcbiAgICAgICAgICAgIHk6IDEwMFxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuc3BlZWQgPSB7XG4gICAgICAgICAgICBkeDogNSxcbiAgICAgICAgICAgIGR5OiA1IFxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuZHJhdyA9IHRoaXMuZHJhdy5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnVwZGF0ZSA9IHRoaXMudXBkYXRlLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgZHJhdygpIHtcbiAgICAgICAgY29uc3QgY3R4ID0gdGhpcy5jdHg7XG4gICAgICAgIGNvbnN0IGJhbGxSYWRpdXMgPSB0aGlzLmJhbGxSYWRpdXM7XG4gICAgICAgIGNvbnN0IHggPSB0aGlzLnBvc2l0aW9uLng7XG4gICAgICAgIGNvbnN0IHkgPSB0aGlzLnBvc2l0aW9uLnk7XG4gICAgICAgIFxuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIGN0eC5hcmMoeCwgeSwgYmFsbFJhZGl1cywgMCwgTWF0aC5QSSAqIDIsIGZhbHNlKTtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwidGVhbFwiO1xuICAgICAgICBjdHguZmlsbCgpO1xuICAgICAgICBjdHguY2xvc2VQYXRoKCk7XG4gICAgICAgIFxuICAgIH1cbiAgICBcbiAgICB1cGRhdGUoKSB7XG4gICAgICAgIGNvbnN0IGNhbnZhcyA9IHRoaXMuY2FudmFzO1xuXG4gICAgICAgIGlmICh0aGlzLnBvc2l0aW9uLnggKyB0aGlzLnNwZWVkLmR4ID4gY2FudmFzLndpZHRoIC0gdGhpcy5iYWxsUmFkaXVzIHx8IHRoaXMucG9zaXRpb24ueCArIHRoaXMuc3BlZWQuZHggPCB0aGlzLmJhbGxSYWRpdXMpIHtcbiAgICAgICAgICAgIHRoaXMuc3BlZWQuZHggPSAtdGhpcy5zcGVlZC5keDtcbiAgICAgICAgfTtcblxuICAgICAgICBpZiAodGhpcy5wb3NpdGlvbi55ICsgdGhpcy5zcGVlZC5keSA+IGNhbnZhcy5oZWlnaHQgLSB0aGlzLmJhbGxSYWRpdXMgfHwgdGhpcy5wb3NpdGlvbi55ICsgdGhpcy5zcGVlZC5keSA8IHRoaXMuYmFsbFJhZGl1cykge1xuICAgICAgICAgICAgdGhpcy5zcGVlZC5keSA9IC10aGlzLnNwZWVkLmR5O1xuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMucG9zaXRpb24ueCArPSB0aGlzLnNwZWVkLmR4O1xuICAgICAgICB0aGlzLnBvc2l0aW9uLnkgKz0gdGhpcy5zcGVlZC5keTtcblxuICAgICAgICB0aGlzLmRyYXcoKTtcbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgR3VtYmFsbDsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./js/gumball.js\n");

/***/ }),

/***/ "./js/gumball_attack.js":
/*!******************************!*\
  !*** ./js/gumball_attack.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _board__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./board */ \"./js/board.js\");\n/* harmony import */ var _gumball__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gumball */ \"./js/gumball.js\");\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./player */ \"./js/player.js\");\n\n\n\n\n\nclass GumBallAttack {\n    constructor(ctx, canvas) {\n        this.ctx = ctx;\n        this.canvas = canvas;\n        this.gameWidth = canvas.width;\n        this.gameHeight = canvas.height;\n\n        this.gumball = new _gumball__WEBPACK_IMPORTED_MODULE_1__[\"default\"](ctx, canvas);\n        this.player = new _player__WEBPACK_IMPORTED_MODULE_2__[\"default\"](ctx, canvas);\n        setInterval(this.render.bind(this), 10);\n    }\n\n    \n\n    render() {\n        let gumball = this.gumball;\n        let player = this.player;\n\n        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);\n        player.draw();\n        player.move();\n        player.shoot();\n\n        gumball.draw();\n        gumball.update();\n\n    }\n\n    // play() {\n    //     const ctx = this.ctx;\n    //     setInterval(() => {\n    //         const gumball = new Gumball(ctx);\n    //     }, 10)\n    // }\n\n    // loop(timestamp) {\n    //     let dt = timestamp - this.lastTime;\n    //     this.lastTime = timestamp;\n\n    //     this.ctx.clearRect(0, 0, 650, 480);\n    //     this.player.update(dt);\n    //     this.player.draw(this.ctx);\n\n    //     requestAnimationFrame(this.loop);\n    // }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (GumBallAttack);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy9ndW1iYWxsX2F0dGFjay5qcz9iYmEyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTRCO0FBQ0k7QUFDRjs7O0FBRzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwyQkFBMkIsZ0RBQU87QUFDbEMsMEJBQTBCLCtDQUFNO0FBQ2hDO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRWUsNEVBQWEiLCJmaWxlIjoiLi9qcy9ndW1iYWxsX2F0dGFjay5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCb2FyZCBmcm9tICcuL2JvYXJkJztcbmltcG9ydCBHdW1iYWxsIGZyb20gJy4vZ3VtYmFsbCc7XG5pbXBvcnQgUGxheWVyIGZyb20gJy4vcGxheWVyJztcblxuXG5jbGFzcyBHdW1CYWxsQXR0YWNrIHtcbiAgICBjb25zdHJ1Y3RvcihjdHgsIGNhbnZhcykge1xuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gICAgICAgIHRoaXMuZ2FtZVdpZHRoID0gY2FudmFzLndpZHRoO1xuICAgICAgICB0aGlzLmdhbWVIZWlnaHQgPSBjYW52YXMuaGVpZ2h0O1xuXG4gICAgICAgIHRoaXMuZ3VtYmFsbCA9IG5ldyBHdW1iYWxsKGN0eCwgY2FudmFzKTtcbiAgICAgICAgdGhpcy5wbGF5ZXIgPSBuZXcgUGxheWVyKGN0eCwgY2FudmFzKTtcbiAgICAgICAgc2V0SW50ZXJ2YWwodGhpcy5yZW5kZXIuYmluZCh0aGlzKSwgMTApO1xuICAgIH1cblxuICAgIFxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQgZ3VtYmFsbCA9IHRoaXMuZ3VtYmFsbDtcbiAgICAgICAgbGV0IHBsYXllciA9IHRoaXMucGxheWVyO1xuXG4gICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgcGxheWVyLmRyYXcoKTtcbiAgICAgICAgcGxheWVyLm1vdmUoKTtcbiAgICAgICAgcGxheWVyLnNob290KCk7XG5cbiAgICAgICAgZ3VtYmFsbC5kcmF3KCk7XG4gICAgICAgIGd1bWJhbGwudXBkYXRlKCk7XG5cbiAgICB9XG5cbiAgICAvLyBwbGF5KCkge1xuICAgIC8vICAgICBjb25zdCBjdHggPSB0aGlzLmN0eDtcbiAgICAvLyAgICAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgIC8vICAgICAgICAgY29uc3QgZ3VtYmFsbCA9IG5ldyBHdW1iYWxsKGN0eCk7XG4gICAgLy8gICAgIH0sIDEwKVxuICAgIC8vIH1cblxuICAgIC8vIGxvb3AodGltZXN0YW1wKSB7XG4gICAgLy8gICAgIGxldCBkdCA9IHRpbWVzdGFtcCAtIHRoaXMubGFzdFRpbWU7XG4gICAgLy8gICAgIHRoaXMubGFzdFRpbWUgPSB0aW1lc3RhbXA7XG5cbiAgICAvLyAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIDY1MCwgNDgwKTtcbiAgICAvLyAgICAgdGhpcy5wbGF5ZXIudXBkYXRlKGR0KTtcbiAgICAvLyAgICAgdGhpcy5wbGF5ZXIuZHJhdyh0aGlzLmN0eCk7XG5cbiAgICAvLyAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMubG9vcCk7XG4gICAgLy8gfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IEd1bUJhbGxBdHRhY2s7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./js/gumball_attack.js\n");

/***/ }),

/***/ "./js/index.js":
/*!*********************!*\
  !*** ./js/index.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _gumball_attack__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gumball_attack */ \"./js/gumball_attack.js\");\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n    var canvas = document.getElementById(\"gumball-attack\");\n    var ctx = canvas.getContext(\"2d\");\n\n    // const GAME_WIDTH = 650;\n    // const GAME_HEIGHT = 480;\n\n    canvas.width = 650;\n    canvas.height = 480;\n\n    const game = new _gumball_attack__WEBPACK_IMPORTED_MODULE_0__[\"default\"](ctx, canvas);\n    // ctx.clearRect(0, 0, 650, 480);\n    game.render();\n\n\n\n\n\n    // to start a game\n    // const startGame = document.getElementById(\"start-game\")\n\n    // startGame.addEventListener(\"click\", () => {\n    //     playGame();\n    // })\n\n    // const playGame = () => {\n    //     game = new GumBallAttack(ctx, GAME_WIDTH, GAME_HEIGHT);\n    //     game.play;\n    // }\n});\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy9pbmRleC5qcz9lZTFjIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBNkM7O0FBRTdDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEscUJBQXFCLHVEQUFhO0FBQ2xDO0FBQ0E7Ozs7OztBQU1BO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFFBQVE7O0FBRVI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwiZmlsZSI6Ii4vanMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgR3VtQmFsbEF0dGFjayBmcm9tICcuL2d1bWJhbGxfYXR0YWNrJztcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICAgIHZhciBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImd1bWJhbGwtYXR0YWNrXCIpO1xuICAgIHZhciBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuXG4gICAgLy8gY29uc3QgR0FNRV9XSURUSCA9IDY1MDtcbiAgICAvLyBjb25zdCBHQU1FX0hFSUdIVCA9IDQ4MDtcblxuICAgIGNhbnZhcy53aWR0aCA9IDY1MDtcbiAgICBjYW52YXMuaGVpZ2h0ID0gNDgwO1xuXG4gICAgY29uc3QgZ2FtZSA9IG5ldyBHdW1CYWxsQXR0YWNrKGN0eCwgY2FudmFzKTtcbiAgICAvLyBjdHguY2xlYXJSZWN0KDAsIDAsIDY1MCwgNDgwKTtcbiAgICBnYW1lLnJlbmRlcigpO1xuXG5cblxuXG5cbiAgICAvLyB0byBzdGFydCBhIGdhbWVcbiAgICAvLyBjb25zdCBzdGFydEdhbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN0YXJ0LWdhbWVcIilcblxuICAgIC8vIHN0YXJ0R2FtZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIC8vICAgICBwbGF5R2FtZSgpO1xuICAgIC8vIH0pXG5cbiAgICAvLyBjb25zdCBwbGF5R2FtZSA9ICgpID0+IHtcbiAgICAvLyAgICAgZ2FtZSA9IG5ldyBHdW1CYWxsQXR0YWNrKGN0eCwgR0FNRV9XSURUSCwgR0FNRV9IRUlHSFQpO1xuICAgIC8vICAgICBnYW1lLnBsYXk7XG4gICAgLy8gfVxufSk7XG5cblxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./js/index.js\n");

/***/ }),

/***/ "./js/player.js":
/*!**********************!*\
  !*** ./js/player.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Player {\n    constructor(ctx, canvas) {\n        this.ctx = ctx;\n        this.canvas = canvas;\n\n        this.charWidth = 30;\n        this.charHeight = 35;\n        this.position = {\n            x: this.canvas.width / 2 - this.charWidth / 2,\n            y: this.canvas.height - this.charHeight\n        }\n\n        this.projectiles = [];\n        this.totalProjectiles = 1;\n        this.proPositionX = this.position.x + 10;\n        this.proPositionY = this.position.y;\n        this.proWidth = 5;\n        this.proHeight = 70;\n        this.proSpeed = 10;\n\n    \n        this.leftPressed = false;\n        this.rightPressed = false;\n        this.spacePressed = false;\n\n        this.keyDownHandler = this.keyDownHandler.bind(this);\n        this.keyUpHandler = this.keyUpHandler.bind(this);\n\n        document.addEventListener(\"keydown\", this.keyDownHandler, false);\n        document.addEventListener(\"keyup\", this.keyUpHandler, false);\n\n        this.draw = this.draw.bind(this);\n        this.drawProjectile = this.drawProjectile.bind(this);\n    }\n\n    keyDownHandler(e) {        // for key press\n        if (e.key == \"Right\" || e.key == \"ArrowRight\") {\n            this.rightPressed = true;\n        }\n        else if (e.key == \"Left\" || e.key == \"ArrowLeft\") {\n            this.leftPressed = true;\n        }\n        else if (e.keyCode == \"32\" && this.projectiles.length < this.totalProjectiles) {\n            this.spacePressed = true;\n            this.proPositionX = this.position.x + 10;\n            this.projectiles.push([1]);\n        }\n    }   \n\n    keyUpHandler(e) {          // for key release\n        if (e.key == \"Right\" || e.key == \"ArrowRight\") {\n            this.rightPressed = false;\n        }\n        else if (e.key == \"Left\" || e.key == \"ArrowLeft\") {\n            this.leftPressed = false;\n        }\n        else if (e.keyCode == \"32\") {\n            this.spacePressed = false;\n        }\n    }\n\n    draw() {\n        const ctx = this.ctx;\n        ctx.beginPath();\n        ctx.rect(this.position.x, this.position.y, this.charWidth, this.charHeight);\n        ctx.fillStyle = \"teal\";\n        ctx.fill();\n        ctx.closePath();\n    }\n\n    move() {\n        const canvas = this.canvas;\n\n        if (this.rightPressed && this.position.x < canvas.width - this.charWidth) {\n            this.position.x += 7;\n            \n        }\n        else if (this.leftPressed && this.position.x > 0) {\n            this.position.x -= 7;\n            \n        }\n        this.draw();\n    }\n\n    drawProjectile() {\n        const ctx = this.ctx;\n\n        if (this.projectiles.length) {\n            ctx.beginPath();\n            ctx.rect(this.proPositionX, this.proPositionY, this.proWidth, this.proHeight);\n            ctx.fillStyle = \"black\";\n            ctx.fill();\n            ctx.closePath();\n\n        }\n    }\n\n    shoot() {\n        if (this.projectiles.length) {\n            if (this.proPositionY + this.proSpeed < 0) {\n                this.projectiles = [];\n                this.proPositionY = this.position.y;\n                debugger\n            } else {\n                this.proPositionY -= this.proSpeed;\n                this.drawProjectile();\n            }\n        }\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Player);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy9wbGF5ZXIuanM/N2UxYiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLOztBQUVBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZSxxRUFBTSIsImZpbGUiOiIuL2pzL3BsYXllci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFBsYXllciB7XG4gICAgY29uc3RydWN0b3IoY3R4LCBjYW52YXMpIHtcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XG4gICAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuXG4gICAgICAgIHRoaXMuY2hhcldpZHRoID0gMzA7XG4gICAgICAgIHRoaXMuY2hhckhlaWdodCA9IDM1O1xuICAgICAgICB0aGlzLnBvc2l0aW9uID0ge1xuICAgICAgICAgICAgeDogdGhpcy5jYW52YXMud2lkdGggLyAyIC0gdGhpcy5jaGFyV2lkdGggLyAyLFxuICAgICAgICAgICAgeTogdGhpcy5jYW52YXMuaGVpZ2h0IC0gdGhpcy5jaGFySGVpZ2h0XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnByb2plY3RpbGVzID0gW107XG4gICAgICAgIHRoaXMudG90YWxQcm9qZWN0aWxlcyA9IDE7XG4gICAgICAgIHRoaXMucHJvUG9zaXRpb25YID0gdGhpcy5wb3NpdGlvbi54ICsgMTA7XG4gICAgICAgIHRoaXMucHJvUG9zaXRpb25ZID0gdGhpcy5wb3NpdGlvbi55O1xuICAgICAgICB0aGlzLnByb1dpZHRoID0gNTtcbiAgICAgICAgdGhpcy5wcm9IZWlnaHQgPSA3MDtcbiAgICAgICAgdGhpcy5wcm9TcGVlZCA9IDEwO1xuXG4gICAgXG4gICAgICAgIHRoaXMubGVmdFByZXNzZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5yaWdodFByZXNzZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5zcGFjZVByZXNzZWQgPSBmYWxzZTtcblxuICAgICAgICB0aGlzLmtleURvd25IYW5kbGVyID0gdGhpcy5rZXlEb3duSGFuZGxlci5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmtleVVwSGFuZGxlciA9IHRoaXMua2V5VXBIYW5kbGVyLmJpbmQodGhpcyk7XG5cbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgdGhpcy5rZXlEb3duSGFuZGxlciwgZmFsc2UpO1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgdGhpcy5rZXlVcEhhbmRsZXIsIGZhbHNlKTtcblxuICAgICAgICB0aGlzLmRyYXcgPSB0aGlzLmRyYXcuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5kcmF3UHJvamVjdGlsZSA9IHRoaXMuZHJhd1Byb2plY3RpbGUuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBrZXlEb3duSGFuZGxlcihlKSB7ICAgICAgICAvLyBmb3Iga2V5IHByZXNzXG4gICAgICAgIGlmIChlLmtleSA9PSBcIlJpZ2h0XCIgfHwgZS5rZXkgPT0gXCJBcnJvd1JpZ2h0XCIpIHtcbiAgICAgICAgICAgIHRoaXMucmlnaHRQcmVzc2VkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChlLmtleSA9PSBcIkxlZnRcIiB8fCBlLmtleSA9PSBcIkFycm93TGVmdFwiKSB7XG4gICAgICAgICAgICB0aGlzLmxlZnRQcmVzc2VkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChlLmtleUNvZGUgPT0gXCIzMlwiICYmIHRoaXMucHJvamVjdGlsZXMubGVuZ3RoIDwgdGhpcy50b3RhbFByb2plY3RpbGVzKSB7XG4gICAgICAgICAgICB0aGlzLnNwYWNlUHJlc3NlZCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnByb1Bvc2l0aW9uWCA9IHRoaXMucG9zaXRpb24ueCArIDEwO1xuICAgICAgICAgICAgdGhpcy5wcm9qZWN0aWxlcy5wdXNoKFsxXSk7XG4gICAgICAgIH1cbiAgICB9ICAgXG5cbiAgICBrZXlVcEhhbmRsZXIoZSkgeyAgICAgICAgICAvLyBmb3Iga2V5IHJlbGVhc2VcbiAgICAgICAgaWYgKGUua2V5ID09IFwiUmlnaHRcIiB8fCBlLmtleSA9PSBcIkFycm93UmlnaHRcIikge1xuICAgICAgICAgICAgdGhpcy5yaWdodFByZXNzZWQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChlLmtleSA9PSBcIkxlZnRcIiB8fCBlLmtleSA9PSBcIkFycm93TGVmdFwiKSB7XG4gICAgICAgICAgICB0aGlzLmxlZnRQcmVzc2VkID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZS5rZXlDb2RlID09IFwiMzJcIikge1xuICAgICAgICAgICAgdGhpcy5zcGFjZVByZXNzZWQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRyYXcoKSB7XG4gICAgICAgIGNvbnN0IGN0eCA9IHRoaXMuY3R4O1xuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIGN0eC5yZWN0KHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55LCB0aGlzLmNoYXJXaWR0aCwgdGhpcy5jaGFySGVpZ2h0KTtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwidGVhbFwiO1xuICAgICAgICBjdHguZmlsbCgpO1xuICAgICAgICBjdHguY2xvc2VQYXRoKCk7XG4gICAgfVxuXG4gICAgbW92ZSgpIHtcbiAgICAgICAgY29uc3QgY2FudmFzID0gdGhpcy5jYW52YXM7XG5cbiAgICAgICAgaWYgKHRoaXMucmlnaHRQcmVzc2VkICYmIHRoaXMucG9zaXRpb24ueCA8IGNhbnZhcy53aWR0aCAtIHRoaXMuY2hhcldpZHRoKSB7XG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnggKz0gNztcbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMubGVmdFByZXNzZWQgJiYgdGhpcy5wb3NpdGlvbi54ID4gMCkge1xuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi54IC09IDc7XG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmRyYXcoKTtcbiAgICB9XG5cbiAgICBkcmF3UHJvamVjdGlsZSgpIHtcbiAgICAgICAgY29uc3QgY3R4ID0gdGhpcy5jdHg7XG5cbiAgICAgICAgaWYgKHRoaXMucHJvamVjdGlsZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICBjdHgucmVjdCh0aGlzLnByb1Bvc2l0aW9uWCwgdGhpcy5wcm9Qb3NpdGlvblksIHRoaXMucHJvV2lkdGgsIHRoaXMucHJvSGVpZ2h0KTtcbiAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBcImJsYWNrXCI7XG4gICAgICAgICAgICBjdHguZmlsbCgpO1xuICAgICAgICAgICAgY3R4LmNsb3NlUGF0aCgpO1xuXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzaG9vdCgpIHtcbiAgICAgICAgaWYgKHRoaXMucHJvamVjdGlsZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcm9Qb3NpdGlvblkgKyB0aGlzLnByb1NwZWVkIDwgMCkge1xuICAgICAgICAgICAgICAgIHRoaXMucHJvamVjdGlsZXMgPSBbXTtcbiAgICAgICAgICAgICAgICB0aGlzLnByb1Bvc2l0aW9uWSA9IHRoaXMucG9zaXRpb24ueTtcbiAgICAgICAgICAgICAgICBkZWJ1Z2dlclxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnByb1Bvc2l0aW9uWSAtPSB0aGlzLnByb1NwZWVkO1xuICAgICAgICAgICAgICAgIHRoaXMuZHJhd1Byb2plY3RpbGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUGxheWVyOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./js/player.js\n");

/***/ })

/******/ });