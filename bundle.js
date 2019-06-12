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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _board__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./board */ \"./js/board.js\");\n/* harmony import */ var _gumball__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gumball */ \"./js/gumball.js\");\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./player */ \"./js/player.js\");\n\n\n\n\n\nclass GumBallAttack {\n    constructor(ctx, canvas) {\n        this.ctx = ctx;\n        this.canvas = canvas;\n        this.gameWidth = canvas.width;\n        this.gameHeight = canvas.height;\n\n        this.gumball = new _gumball__WEBPACK_IMPORTED_MODULE_1__[\"default\"](ctx, canvas);\n        this.player = new _player__WEBPACK_IMPORTED_MODULE_2__[\"default\"](ctx, canvas);\n        setInterval(this.render.bind(this), 10);\n    }\n\n    \n\n    render() {\n        let gumball = this.gumball;\n        let player = this.player;\n\n        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);\n        player.draw();\n        player.move();\n        \n        gumball.draw();\n        gumball.update();\n\n    }\n\n    // play() {\n    //     const ctx = this.ctx;\n    //     setInterval(() => {\n    //         const gumball = new Gumball(ctx);\n    //     }, 10)\n    // }\n\n    // loop(timestamp) {\n    //     let dt = timestamp - this.lastTime;\n    //     this.lastTime = timestamp;\n\n    //     this.ctx.clearRect(0, 0, 650, 480);\n    //     this.player.update(dt);\n    //     this.player.draw(this.ctx);\n\n    //     requestAnimationFrame(this.loop);\n    // }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (GumBallAttack);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy9ndW1iYWxsX2F0dGFjay5qcz9iYmEyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTRCO0FBQ0k7QUFDRjs7O0FBRzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwyQkFBMkIsZ0RBQU87QUFDbEMsMEJBQTBCLCtDQUFNO0FBQ2hDO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVlLDRFQUFhIiwiZmlsZSI6Ii4vanMvZ3VtYmFsbF9hdHRhY2suanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQm9hcmQgZnJvbSAnLi9ib2FyZCc7XG5pbXBvcnQgR3VtYmFsbCBmcm9tICcuL2d1bWJhbGwnO1xuaW1wb3J0IFBsYXllciBmcm9tICcuL3BsYXllcic7XG5cblxuY2xhc3MgR3VtQmFsbEF0dGFjayB7XG4gICAgY29uc3RydWN0b3IoY3R4LCBjYW52YXMpIHtcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XG4gICAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuICAgICAgICB0aGlzLmdhbWVXaWR0aCA9IGNhbnZhcy53aWR0aDtcbiAgICAgICAgdGhpcy5nYW1lSGVpZ2h0ID0gY2FudmFzLmhlaWdodDtcblxuICAgICAgICB0aGlzLmd1bWJhbGwgPSBuZXcgR3VtYmFsbChjdHgsIGNhbnZhcyk7XG4gICAgICAgIHRoaXMucGxheWVyID0gbmV3IFBsYXllcihjdHgsIGNhbnZhcyk7XG4gICAgICAgIHNldEludGVydmFsKHRoaXMucmVuZGVyLmJpbmQodGhpcyksIDEwKTtcbiAgICB9XG5cbiAgICBcblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IGd1bWJhbGwgPSB0aGlzLmd1bWJhbGw7XG4gICAgICAgIGxldCBwbGF5ZXIgPSB0aGlzLnBsYXllcjtcblxuICAgICAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG4gICAgICAgIHBsYXllci5kcmF3KCk7XG4gICAgICAgIHBsYXllci5tb3ZlKCk7XG4gICAgICAgIFxuICAgICAgICBndW1iYWxsLmRyYXcoKTtcbiAgICAgICAgZ3VtYmFsbC51cGRhdGUoKTtcblxuICAgIH1cblxuICAgIC8vIHBsYXkoKSB7XG4gICAgLy8gICAgIGNvbnN0IGN0eCA9IHRoaXMuY3R4O1xuICAgIC8vICAgICBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgLy8gICAgICAgICBjb25zdCBndW1iYWxsID0gbmV3IEd1bWJhbGwoY3R4KTtcbiAgICAvLyAgICAgfSwgMTApXG4gICAgLy8gfVxuXG4gICAgLy8gbG9vcCh0aW1lc3RhbXApIHtcbiAgICAvLyAgICAgbGV0IGR0ID0gdGltZXN0YW1wIC0gdGhpcy5sYXN0VGltZTtcbiAgICAvLyAgICAgdGhpcy5sYXN0VGltZSA9IHRpbWVzdGFtcDtcblxuICAgIC8vICAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgNjUwLCA0ODApO1xuICAgIC8vICAgICB0aGlzLnBsYXllci51cGRhdGUoZHQpO1xuICAgIC8vICAgICB0aGlzLnBsYXllci5kcmF3KHRoaXMuY3R4KTtcblxuICAgIC8vICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5sb29wKTtcbiAgICAvLyB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgR3VtQmFsbEF0dGFjazsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./js/gumball_attack.js\n");

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
eval("__webpack_require__.r(__webpack_exports__);\nclass Player {\n    constructor(ctx, canvas) {\n        this.ctx = ctx;\n        this.canvas = canvas;\n        this.width = 35;\n        this.height = 35;\n\n        this.position = {\n            x: this.canvas.width / 2 - this.width / 2,\n            y: this.canvas.height - this.height\n        }\n\n        this.leftPressed = false;\n        this.rightPressed = false;\n\n        this.keyDownHandler = this.keyDownHandler.bind(this);\n        this.keyUpHandler = this.keyUpHandler.bind(this);\n\n        document.addEventListener(\"keydown\", this.keyDownHandler, false);            // listen for key press\n        document.addEventListener(\"keyup\", this.keyUpHandler, false); \n\n        this.draw = this.draw.bind(this);\n    }\n\n    keyDownHandler(e) {        // for key press\n        if (e.key == \"Right\" || e.key == \"ArrowRight\") {\n            this.rightPressed = true;\n        }\n        else if (e.key == \"Left\" || e.key == \"ArrowLeft\") {\n            this.leftPressed = true;\n        }\n    }   \n\n    keyUpHandler(e) {          // for key release\n        if (e.key == \"Right\" || e.key == \"ArrowRight\") {\n            this.rightPressed = false;\n        }\n        else if (e.key == \"Left\" || e.key == \"ArrowLeft\") {\n            this.leftPressed = false;\n        }\n    }\n\n    draw() {\n        const ctx = this.ctx;\n        const canvas = this.canvas;\n\n        ctx.beginPath();\n        ctx.rect(this.position.x, this.position.y, this.width, this.height);\n        ctx.fillStyle = \"teal\";\n        ctx.fill();\n        ctx.closePath();\n    }\n\n    move() {\n        debugger\n        const canvas = this.canvas;\n\n        if (this.rightPressed && this.position.x < canvas.width - this.width) {\n            this.position.x += 7;\n\n        }\n        else if (this.leftPressed && this.position.x > 0) {\n            this.position.x -= 7;\n\n        }\n        this.draw();\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Player);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy9wbGF5ZXIuanM/N2UxYiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEseUVBQXlFO0FBQ3pFLHFFOztBQUVBO0FBQ0E7O0FBRUEsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEs7O0FBRUEscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVlLHFFQUFNIiwiZmlsZSI6Ii4vanMvcGxheWVyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgUGxheWVyIHtcbiAgICBjb25zdHJ1Y3RvcihjdHgsIGNhbnZhcykge1xuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gICAgICAgIHRoaXMud2lkdGggPSAzNTtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSAzNTtcblxuICAgICAgICB0aGlzLnBvc2l0aW9uID0ge1xuICAgICAgICAgICAgeDogdGhpcy5jYW52YXMud2lkdGggLyAyIC0gdGhpcy53aWR0aCAvIDIsXG4gICAgICAgICAgICB5OiB0aGlzLmNhbnZhcy5oZWlnaHQgLSB0aGlzLmhlaWdodFxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5sZWZ0UHJlc3NlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLnJpZ2h0UHJlc3NlZCA9IGZhbHNlO1xuXG4gICAgICAgIHRoaXMua2V5RG93bkhhbmRsZXIgPSB0aGlzLmtleURvd25IYW5kbGVyLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMua2V5VXBIYW5kbGVyID0gdGhpcy5rZXlVcEhhbmRsZXIuYmluZCh0aGlzKTtcblxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCB0aGlzLmtleURvd25IYW5kbGVyLCBmYWxzZSk7ICAgICAgICAgICAgLy8gbGlzdGVuIGZvciBrZXkgcHJlc3NcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIHRoaXMua2V5VXBIYW5kbGVyLCBmYWxzZSk7IFxuXG4gICAgICAgIHRoaXMuZHJhdyA9IHRoaXMuZHJhdy5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIGtleURvd25IYW5kbGVyKGUpIHsgICAgICAgIC8vIGZvciBrZXkgcHJlc3NcbiAgICAgICAgaWYgKGUua2V5ID09IFwiUmlnaHRcIiB8fCBlLmtleSA9PSBcIkFycm93UmlnaHRcIikge1xuICAgICAgICAgICAgdGhpcy5yaWdodFByZXNzZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGUua2V5ID09IFwiTGVmdFwiIHx8IGUua2V5ID09IFwiQXJyb3dMZWZ0XCIpIHtcbiAgICAgICAgICAgIHRoaXMubGVmdFByZXNzZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfSAgIFxuXG4gICAga2V5VXBIYW5kbGVyKGUpIHsgICAgICAgICAgLy8gZm9yIGtleSByZWxlYXNlXG4gICAgICAgIGlmIChlLmtleSA9PSBcIlJpZ2h0XCIgfHwgZS5rZXkgPT0gXCJBcnJvd1JpZ2h0XCIpIHtcbiAgICAgICAgICAgIHRoaXMucmlnaHRQcmVzc2VkID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZS5rZXkgPT0gXCJMZWZ0XCIgfHwgZS5rZXkgPT0gXCJBcnJvd0xlZnRcIikge1xuICAgICAgICAgICAgdGhpcy5sZWZ0UHJlc3NlZCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZHJhdygpIHtcbiAgICAgICAgY29uc3QgY3R4ID0gdGhpcy5jdHg7XG4gICAgICAgIGNvbnN0IGNhbnZhcyA9IHRoaXMuY2FudmFzO1xuXG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgY3R4LnJlY3QodGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwidGVhbFwiO1xuICAgICAgICBjdHguZmlsbCgpO1xuICAgICAgICBjdHguY2xvc2VQYXRoKCk7XG4gICAgfVxuXG4gICAgbW92ZSgpIHtcbiAgICAgICAgZGVidWdnZXJcbiAgICAgICAgY29uc3QgY2FudmFzID0gdGhpcy5jYW52YXM7XG5cbiAgICAgICAgaWYgKHRoaXMucmlnaHRQcmVzc2VkICYmIHRoaXMucG9zaXRpb24ueCA8IGNhbnZhcy53aWR0aCAtIHRoaXMud2lkdGgpIHtcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueCArPSA3O1xuXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy5sZWZ0UHJlc3NlZCAmJiB0aGlzLnBvc2l0aW9uLnggPiAwKSB7XG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnggLT0gNztcblxuICAgICAgICB9XG4gICAgICAgIHRoaXMuZHJhdygpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUGxheWVyOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./js/player.js\n");

/***/ })

/******/ });