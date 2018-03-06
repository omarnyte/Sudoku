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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./assets/javascript/sudoku.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/javascript/board.js":
/*!************************************!*\
  !*** ./assets/javascript/board.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _tile = __webpack_require__(/*! ./tile */ "./assets/javascript/tile.js");

var _tile2 = _interopRequireDefault(_tile);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.checkBoard = function () {
    console.log('checking the board');
};

// function setupBoard (board) {
//     board.forEach((num, idx) => {
//         populateTile(num, idx);
//     })
// }

function createBoards() {
    var diff = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'easy';

    var diffMap = {
        'easy': 45,
        'medium': 35,
        'hard': 25
    };

    var solvedBoard = [];

    for (var i = 0; i < 81; i++) {
        solvedBoard.push(0);
    }

    var j = diffMap[diff];
    solvedBoard.forEach(function (num, idx) {
        // Math.ceil(Math.random() * 10)
        // check against row 
        var rowIndex = Math.floor(idx / 9);
        var rowStart = rowIndex * 9;
        var rowEnd = rowStart + 9;
        for (var _i = rowStart; _i < rowEnd; _i++) {
            var placed = false;
        }

        // check against column 
    });
}

function setupBoard() {
    createBoards();
    // const [unsolvedBoard, solvedBoard] = createBoards();
}
exports.default = setupBoard;

/***/ }),

/***/ "./assets/javascript/buttons.js":
/*!**************************************!*\
  !*** ./assets/javascript/buttons.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _board = __webpack_require__(/*! ./board */ "./assets/javascript/board.js");

var _board2 = _interopRequireDefault(_board);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function buttons() {
    var checkButton = document.querySelector('.check');
    // checkButton.addEventListener('click', checkBoard);

    var submitButton = document.querySelector('.submit');
    // checkButton.addEventListener('click', () => console.log('submit'))

    var giveUpButton = document.querySelector('.give-up');
    // checkButton.addEventListener('click', () => console.log('give up'))
}

exports.default = buttons;

/***/ }),

/***/ "./assets/javascript/sudoku.js":
/*!*************************************!*\
  !*** ./assets/javascript/sudoku.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _board = __webpack_require__(/*! ./board */ "./assets/javascript/board.js");

var _board2 = _interopRequireDefault(_board);

var _buttons = __webpack_require__(/*! ./buttons */ "./assets/javascript/buttons.js");

var _buttons2 = _interopRequireDefault(_buttons);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var unsolvedBoard = [5, 3, 0, 0, 7, 0, 0, 0, 0, 6, 0, 0, 1, 9, 5, 0, 0, 0, 0, 9, 8, 0, 0, 0, 0, 6, 0, 8, 0, 0, 0, 6, 0, 0, 0, 3, 4, 0, 0, 8, 0, 3, 0, 0, 1, 7, 0, 0, 0, 2, 0, 0, 0, 6, 0, 6, 0, 0, 0, 0, 2, 8, 0, 0, 0, 0, 4, 1, 9, 0, 0, 5, 0, 0, 0, 0, 8, 0, 0, 7, 9];

var solvedBoard = [5, 3, 4, 6, 7, 8, 9, 1, 2, 6, 7, 2, 1, 9, 5, 3, 4,, 1, 9, 8, 3, 4, 2, 5, 6, 7, 8, 5, 9, 7, 6, 1, 4, 2, 3, 4, 2, 6, 8, 5, 3, 7, 9, 1, 7, 1, 3, 9, 2, 4, 8, 5, 6, 9, 6, 1, 5, 3, 7, 2, 8, 4, 2, 8, 7, 4, 1, 9, 6, 3, 5, 3, 4, 5, 2, 8, 6, 1, 7, 9];

(0, _board2.default)();
(0, _buttons2.default)();

/***/ }),

/***/ "./assets/javascript/tile.js":
/*!***********************************!*\
  !*** ./assets/javascript/tile.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
function validateInput(e) {
    console.log(e);

    // TODO 
    // only permit numbers as input 
    // if (!["1", "2", "3", "4", "5", "6", "7", "8", "9"].includes(e.key) && e.target.keyCode !== 8){
    //     console.log(e);

    // e.target.value = '';
    // }

    // validate against row 
    // validate against column 
}

function populateTile(num, idx) {
    var boardDiv = document.querySelector('.board');
    var tileDiv = document.createElement('div');
    tileDiv.className = 'tile-div';
    tileDiv.dataset.index = idx;

    var tile = void 0;
    if (num === 0) {
        tile = document.createElement('input');
        tile.className = 'tile input';
    } else {
        tile = document.createElement('span');
        tile.textContent = num;
        tile.className = 'tile span';
    }

    boardDiv.appendChild(tileDiv);
    tileDiv.appendChild(tile);

    tile.addEventListener('input', validateInput);
}

exports.default = populateTile;

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map