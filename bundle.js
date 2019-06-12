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
eval("__webpack_require__.r(__webpack_exports__);\n\nclass Gumball {\n    constructor(ctx, canvas) {\n        this.ctx = ctx;\n        this.gameWidth = canvas.gameWidth;\n        this.gameHeight = canvas.gameHeight;\n        \n        this.ballRadius = 80;\n\n        this.position = {\n            x: 100,\n            y: 100\n        };\n\n        this.speed = {\n            dx: 20,\n            dy: 20 \n        };\n\n        this.draw = this.draw.bind(this);\n    }\n\n    draw() {\n        const ctx = this.ctx;\n        const ballRadius = this.ballRadius;\n        const x = this.position.x;\n        const y = this.position.y;\n        debugger\n        ctx.clearRect(0, 0, this.gameWidth, this.gameHeight);\n        ctx.beginPath();\n        ctx.arc(x, y, ballRadius, 0, Math.PI * 2, false);\n        ctx.fillStyle = \"teal\";\n        ctx.fill();\n        ctx.closePath();\n        \n    }\n\n    update() {\n        // values become NaN\n        // let x = this.position.x;\n        // let y = this.position.y;\n        // let dx = this.speed.x;\n        // let dy = this.speed.y;\n\n        if (this.position.x + this.speed.dx > this.gameWidth - this.ballRadius || this.position.x + this.speed.dx < this.ballRadius) {\n            this.speed.dx = -this.speed.dx;\n        };\n\n        if (this.position.y + this.speed.dy > this.gameHeight - this.ballRadius || this.position.y + this.speed.dy < this.ballRadius) {\n            this.speed.dy = -this.speed.dy;\n        };\n\n        this.position.x += this.speed.dx;\n        this.position.y += this.speed.dy;\n        debugger\n        // requestAnimationFrame(this.draw)\n        // setInterval(this.draw, 10);\n    }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Gumball);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy9ndW1iYWxsLmpzPzAxOGEiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFZSxzRUFBTyIsImZpbGUiOiIuL2pzL2d1bWJhbGwuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmNsYXNzIEd1bWJhbGwge1xuICAgIGNvbnN0cnVjdG9yKGN0eCwgY2FudmFzKSB7XG4gICAgICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgICAgICB0aGlzLmdhbWVXaWR0aCA9IGNhbnZhcy5nYW1lV2lkdGg7XG4gICAgICAgIHRoaXMuZ2FtZUhlaWdodCA9IGNhbnZhcy5nYW1lSGVpZ2h0O1xuICAgICAgICBcbiAgICAgICAgdGhpcy5iYWxsUmFkaXVzID0gODA7XG5cbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHtcbiAgICAgICAgICAgIHg6IDEwMCxcbiAgICAgICAgICAgIHk6IDEwMFxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuc3BlZWQgPSB7XG4gICAgICAgICAgICBkeDogMjAsXG4gICAgICAgICAgICBkeTogMjAgXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5kcmF3ID0gdGhpcy5kcmF3LmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgZHJhdygpIHtcbiAgICAgICAgY29uc3QgY3R4ID0gdGhpcy5jdHg7XG4gICAgICAgIGNvbnN0IGJhbGxSYWRpdXMgPSB0aGlzLmJhbGxSYWRpdXM7XG4gICAgICAgIGNvbnN0IHggPSB0aGlzLnBvc2l0aW9uLng7XG4gICAgICAgIGNvbnN0IHkgPSB0aGlzLnBvc2l0aW9uLnk7XG4gICAgICAgIGRlYnVnZ2VyXG4gICAgICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy5nYW1lV2lkdGgsIHRoaXMuZ2FtZUhlaWdodCk7XG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgY3R4LmFyYyh4LCB5LCBiYWxsUmFkaXVzLCAwLCBNYXRoLlBJICogMiwgZmFsc2UpO1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJ0ZWFsXCI7XG4gICAgICAgIGN0eC5maWxsKCk7XG4gICAgICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgICAgICAgXG4gICAgfVxuXG4gICAgdXBkYXRlKCkge1xuICAgICAgICAvLyB2YWx1ZXMgYmVjb21lIE5hTlxuICAgICAgICAvLyBsZXQgeCA9IHRoaXMucG9zaXRpb24ueDtcbiAgICAgICAgLy8gbGV0IHkgPSB0aGlzLnBvc2l0aW9uLnk7XG4gICAgICAgIC8vIGxldCBkeCA9IHRoaXMuc3BlZWQueDtcbiAgICAgICAgLy8gbGV0IGR5ID0gdGhpcy5zcGVlZC55O1xuXG4gICAgICAgIGlmICh0aGlzLnBvc2l0aW9uLnggKyB0aGlzLnNwZWVkLmR4ID4gdGhpcy5nYW1lV2lkdGggLSB0aGlzLmJhbGxSYWRpdXMgfHwgdGhpcy5wb3NpdGlvbi54ICsgdGhpcy5zcGVlZC5keCA8IHRoaXMuYmFsbFJhZGl1cykge1xuICAgICAgICAgICAgdGhpcy5zcGVlZC5keCA9IC10aGlzLnNwZWVkLmR4O1xuICAgICAgICB9O1xuXG4gICAgICAgIGlmICh0aGlzLnBvc2l0aW9uLnkgKyB0aGlzLnNwZWVkLmR5ID4gdGhpcy5nYW1lSGVpZ2h0IC0gdGhpcy5iYWxsUmFkaXVzIHx8IHRoaXMucG9zaXRpb24ueSArIHRoaXMuc3BlZWQuZHkgPCB0aGlzLmJhbGxSYWRpdXMpIHtcbiAgICAgICAgICAgIHRoaXMuc3BlZWQuZHkgPSAtdGhpcy5zcGVlZC5keTtcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLnBvc2l0aW9uLnggKz0gdGhpcy5zcGVlZC5keDtcbiAgICAgICAgdGhpcy5wb3NpdGlvbi55ICs9IHRoaXMuc3BlZWQuZHk7XG4gICAgICAgIGRlYnVnZ2VyXG4gICAgICAgIC8vIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmRyYXcpXG4gICAgICAgIC8vIHNldEludGVydmFsKHRoaXMuZHJhdywgMTApO1xuICAgIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBHdW1iYWxsOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./js/gumball.js\n");

/***/ }),

/***/ "./js/gumball_attack.js":
/*!******************************!*\
  !*** ./js/gumball_attack.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _board__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./board */ \"./js/board.js\");\n/* harmony import */ var _gumball__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gumball */ \"./js/gumball.js\");\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./player */ \"./js/player.js\");\n\n\n\n\n\nclass GumBallAttack {\n    constructor(ctx, canvas) {\n        this.ctx = ctx;\n        this.canvas = canvas;\n        this.gameWidth = canvas.width;\n        this.gameHeight = canvas.height;\n\n        // this.lastTime = 0;\n        // this.loop = this.loop.bind(this);\n\n        this.gumball = new _gumball__WEBPACK_IMPORTED_MODULE_1__[\"default\"](ctx, canvas);\n        this.player = new _player__WEBPACK_IMPORTED_MODULE_2__[\"default\"](ctx, canvas);\n    }\n\n    render() {\n        let gumball = this.gumball;\n        let player = this.player;\n\n        debugger\n        player.draw();\n        debugger\n        gumball.draw();\n        // gumball.update();\n        // setInterval(gumball.update(), 10);\n\n    }\n\n    // play() {\n    //     const ctx = this.ctx;\n    //     setInterval(() => {\n    //         const gumball = new Gumball(ctx);\n    //     }, 10)\n    // }\n\n    // loop(timestamp) {\n    //     let dt = timestamp - this.lastTime;\n    //     this.lastTime = timestamp;\n\n    //     this.ctx.clearRect(0, 0, 650, 480);\n    //     this.player.update(dt);\n    //     this.player.draw(this.ctx);\n\n    //     requestAnimationFrame(this.loop);\n    // }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (GumBallAttack);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy9ndW1iYWxsX2F0dGFjay5qcz9iYmEyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTRCO0FBQ0k7QUFDRjs7O0FBRzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLDJCQUEyQixnREFBTztBQUNsQywwQkFBMEIsK0NBQU07QUFDaEM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRWUsNEVBQWEiLCJmaWxlIjoiLi9qcy9ndW1iYWxsX2F0dGFjay5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCb2FyZCBmcm9tICcuL2JvYXJkJztcbmltcG9ydCBHdW1iYWxsIGZyb20gJy4vZ3VtYmFsbCc7XG5pbXBvcnQgUGxheWVyIGZyb20gJy4vcGxheWVyJztcblxuXG5jbGFzcyBHdW1CYWxsQXR0YWNrIHtcbiAgICBjb25zdHJ1Y3RvcihjdHgsIGNhbnZhcykge1xuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gICAgICAgIHRoaXMuZ2FtZVdpZHRoID0gY2FudmFzLndpZHRoO1xuICAgICAgICB0aGlzLmdhbWVIZWlnaHQgPSBjYW52YXMuaGVpZ2h0O1xuXG4gICAgICAgIC8vIHRoaXMubGFzdFRpbWUgPSAwO1xuICAgICAgICAvLyB0aGlzLmxvb3AgPSB0aGlzLmxvb3AuYmluZCh0aGlzKTtcblxuICAgICAgICB0aGlzLmd1bWJhbGwgPSBuZXcgR3VtYmFsbChjdHgsIGNhbnZhcyk7XG4gICAgICAgIHRoaXMucGxheWVyID0gbmV3IFBsYXllcihjdHgsIGNhbnZhcyk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQgZ3VtYmFsbCA9IHRoaXMuZ3VtYmFsbDtcbiAgICAgICAgbGV0IHBsYXllciA9IHRoaXMucGxheWVyO1xuXG4gICAgICAgIGRlYnVnZ2VyXG4gICAgICAgIHBsYXllci5kcmF3KCk7XG4gICAgICAgIGRlYnVnZ2VyXG4gICAgICAgIGd1bWJhbGwuZHJhdygpO1xuICAgICAgICAvLyBndW1iYWxsLnVwZGF0ZSgpO1xuICAgICAgICAvLyBzZXRJbnRlcnZhbChndW1iYWxsLnVwZGF0ZSgpLCAxMCk7XG5cbiAgICB9XG5cbiAgICAvLyBwbGF5KCkge1xuICAgIC8vICAgICBjb25zdCBjdHggPSB0aGlzLmN0eDtcbiAgICAvLyAgICAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgIC8vICAgICAgICAgY29uc3QgZ3VtYmFsbCA9IG5ldyBHdW1iYWxsKGN0eCk7XG4gICAgLy8gICAgIH0sIDEwKVxuICAgIC8vIH1cblxuICAgIC8vIGxvb3AodGltZXN0YW1wKSB7XG4gICAgLy8gICAgIGxldCBkdCA9IHRpbWVzdGFtcCAtIHRoaXMubGFzdFRpbWU7XG4gICAgLy8gICAgIHRoaXMubGFzdFRpbWUgPSB0aW1lc3RhbXA7XG5cbiAgICAvLyAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIDY1MCwgNDgwKTtcbiAgICAvLyAgICAgdGhpcy5wbGF5ZXIudXBkYXRlKGR0KTtcbiAgICAvLyAgICAgdGhpcy5wbGF5ZXIuZHJhdyh0aGlzLmN0eCk7XG5cbiAgICAvLyAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMubG9vcCk7XG4gICAgLy8gfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IEd1bUJhbGxBdHRhY2s7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./js/gumball_attack.js\n");

/***/ }),

/***/ "./js/index.js":
/*!*********************!*\
  !*** ./js/index.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _gumball_attack__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gumball_attack */ \"./js/gumball_attack.js\");\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n    var canvas = document.getElementById(\"gumball-attack\");\n    var ctx = canvas.getContext(\"2d\");\n\n    // const GAME_WIDTH = 650;\n    // const GAME_HEIGHT = 480;\n\n    canvas.width = 650;\n    canvas.height = 480;\n\n    const game = new _gumball_attack__WEBPACK_IMPORTED_MODULE_0__[\"default\"](ctx, canvas);\n    game.render();\n    // ctx.clearRect(0, 0, 650, 480);\n    \n    // game.loop();\n    // setInterval(game.render(), 10);\n\n\n\n\n\n\n\n    // to start a game\n    // const startGame = document.getElementById(\"start-game\")\n\n    // startGame.addEventListener(\"click\", () => {\n    //     playGame();\n    // })\n\n    // const playGame = () => {\n    //     game = new GumBallAttack(ctx, GAME_WIDTH, GAME_HEIGHT);\n    //     game.play;\n    // }\n});\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy9pbmRleC5qcz9lZTFjIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBNkM7O0FBRTdDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEscUJBQXFCLHVEQUFhO0FBQ2xDO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7QUFRQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxRQUFROztBQUVSO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsImZpbGUiOiIuL2pzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEd1bUJhbGxBdHRhY2sgZnJvbSAnLi9ndW1iYWxsX2F0dGFjayc7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgICB2YXIgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJndW1iYWxsLWF0dGFja1wiKTtcbiAgICB2YXIgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcblxuICAgIC8vIGNvbnN0IEdBTUVfV0lEVEggPSA2NTA7XG4gICAgLy8gY29uc3QgR0FNRV9IRUlHSFQgPSA0ODA7XG5cbiAgICBjYW52YXMud2lkdGggPSA2NTA7XG4gICAgY2FudmFzLmhlaWdodCA9IDQ4MDtcblxuICAgIGNvbnN0IGdhbWUgPSBuZXcgR3VtQmFsbEF0dGFjayhjdHgsIGNhbnZhcyk7XG4gICAgZ2FtZS5yZW5kZXIoKTtcbiAgICAvLyBjdHguY2xlYXJSZWN0KDAsIDAsIDY1MCwgNDgwKTtcbiAgICBcbiAgICAvLyBnYW1lLmxvb3AoKTtcbiAgICAvLyBzZXRJbnRlcnZhbChnYW1lLnJlbmRlcigpLCAxMCk7XG5cblxuXG5cblxuXG5cbiAgICAvLyB0byBzdGFydCBhIGdhbWVcbiAgICAvLyBjb25zdCBzdGFydEdhbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN0YXJ0LWdhbWVcIilcblxuICAgIC8vIHN0YXJ0R2FtZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIC8vICAgICBwbGF5R2FtZSgpO1xuICAgIC8vIH0pXG5cbiAgICAvLyBjb25zdCBwbGF5R2FtZSA9ICgpID0+IHtcbiAgICAvLyAgICAgZ2FtZSA9IG5ldyBHdW1CYWxsQXR0YWNrKGN0eCwgR0FNRV9XSURUSCwgR0FNRV9IRUlHSFQpO1xuICAgIC8vICAgICBnYW1lLnBsYXk7XG4gICAgLy8gfVxufSk7XG5cblxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./js/index.js\n");

/***/ }),

/***/ "./js/player.js":
/*!**********************!*\
  !*** ./js/player.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\nclass Player {\n    constructor(ctx, canvas) {\n        this.ctx = ctx;\n        this.canvas = canvas;\n        this.width = 35;\n        this.height = 35;\n\n        this.position = {\n            x: this.canvas.width / 2 - this.width / 2,\n            y: this.canvas.height - this.height\n        }\n\n        // this.keys = [];\n        // document.addEventListener('keydown', (e) => { this.keys[e.keyCode] = true });\n        // document.addEventListener('keyup', (e) => { this.keys[e.keyCode] = false })\n\n    }\n\n    // moveLeft() {\n    //     this.position.x + 2;\n    // }\n\n    // moveRight() {\n    //     this.position.x - 2;\n    // }\n\n    draw() {\n        const ctx = this.ctx;\n        ctx.beginPath();\n        ctx.rect(this.position.x, this.position.y, this.width, this.height);\n        ctx.fillStyle = \"Green\";\n        ctx.fill();\n        ctx.closePath();\n    }\n\n    // update(dt) {\n    //     if (!dt) return;\n    //     this.position.x += 5 / dt;\n    // }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Player);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy9wbGF5ZXIuanM/N2UxYiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHdEQUF3RCw4QkFBOEI7QUFDdEYsc0RBQXNELCtCQUErQjs7QUFFckY7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWUscUVBQU0iLCJmaWxlIjoiLi9qcy9wbGF5ZXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmNsYXNzIFBsYXllciB7XG4gICAgY29uc3RydWN0b3IoY3R4LCBjYW52YXMpIHtcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XG4gICAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuICAgICAgICB0aGlzLndpZHRoID0gMzU7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gMzU7XG5cbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHtcbiAgICAgICAgICAgIHg6IHRoaXMuY2FudmFzLndpZHRoIC8gMiAtIHRoaXMud2lkdGggLyAyLFxuICAgICAgICAgICAgeTogdGhpcy5jYW52YXMuaGVpZ2h0IC0gdGhpcy5oZWlnaHRcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHRoaXMua2V5cyA9IFtdO1xuICAgICAgICAvLyBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGUpID0+IHsgdGhpcy5rZXlzW2Uua2V5Q29kZV0gPSB0cnVlIH0pO1xuICAgICAgICAvLyBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIChlKSA9PiB7IHRoaXMua2V5c1tlLmtleUNvZGVdID0gZmFsc2UgfSlcblxuICAgIH1cblxuICAgIC8vIG1vdmVMZWZ0KCkge1xuICAgIC8vICAgICB0aGlzLnBvc2l0aW9uLnggKyAyO1xuICAgIC8vIH1cblxuICAgIC8vIG1vdmVSaWdodCgpIHtcbiAgICAvLyAgICAgdGhpcy5wb3NpdGlvbi54IC0gMjtcbiAgICAvLyB9XG5cbiAgICBkcmF3KCkge1xuICAgICAgICBjb25zdCBjdHggPSB0aGlzLmN0eDtcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICBjdHgucmVjdCh0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJHcmVlblwiO1xuICAgICAgICBjdHguZmlsbCgpO1xuICAgICAgICBjdHguY2xvc2VQYXRoKCk7XG4gICAgfVxuXG4gICAgLy8gdXBkYXRlKGR0KSB7XG4gICAgLy8gICAgIGlmICghZHQpIHJldHVybjtcbiAgICAvLyAgICAgdGhpcy5wb3NpdGlvbi54ICs9IDUgLyBkdDtcbiAgICAvLyB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBsYXllcjsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./js/player.js\n");

/***/ })

/******/ });