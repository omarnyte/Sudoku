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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _tile = __webpack_require__(/*! ./tile */ "./assets/javascript/tile.js");

var _tile2 = _interopRequireDefault(_tile);

var _generateBoard = __webpack_require__(/*! ./generateBoard */ "./assets/javascript/generateBoard.js");

var _generateBoard2 = _interopRequireDefault(_generateBoard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var unsolvedBoard = [5, 3, 0, 0, 7, 0, 0, 0, 0, 6, 0, 0, 1, 9, 5, 0, 0, 0, 0, 9, 8, 0, 0, 0, 0, 6, 0, 8, 0, 0, 0, 6, 0, 0, 0, 3, 4, 0, 0, 8, 0, 3, 0, 0, 1, 7, 0, 0, 0, 2, 0, 0, 0, 6, 0, 6, 0, 0, 0, 0, 2, 8, 0, 0, 0, 0, 4, 1, 9, 0, 0, 5, 0, 0, 0, 0, 8, 0, 0, 7, 9];

var solvedBoard = [5, 3, 4, 6, 7, 8, 9, 1, 2, 6, 7, 2, 1, 9, 5, 3, 4, 8, 1, 9, 8, 3, 4, 2, 5, 6, 7, 8, 5, 9, 7, 6, 1, 4, 2, 3, 4, 2, 6, 8, 5, 3, 7, 9, 1, 7, 1, 3, 9, 2, 4, 8, 5, 6, 9, 6, 1, 5, 3, 7, 2, 8, 4, 2, 8, 7, 4, 1, 9, 6, 3, 5, 3, 4, 5, 2, 8, 6, 1, 7, 9];

var Board = function () {
    function Board() {
        _classCallCheck(this, Board);

        // Logic for creating a board with random board generator
        // const [unsolvedBoard, solvedBoard] = generateBoard();

        this.setupBoard(unsolvedBoard);
    }

    _createClass(Board, [{
        key: 'setupBoard',
        value: function setupBoard(unsolvedBoard) {
            // clear previous board, if any
            var board = document.querySelector('.board');
            board.innerHTML = '';

            unsolvedBoard.forEach(function (num, idx) {
                (0, _tile2.default)(num, idx);
            });
        }

        // button methods     

    }, {
        key: 'checkProgress',
        value: function checkProgress(e) {
            var inputTiles = document.querySelectorAll('.tile.input');
            var solved = true;
            inputTiles.forEach(function (tile, idx) {
                if (tile.value === '') {
                    solved = false;
                } else if (solvedBoard[parseInt(tile.dataset.index)] !== parseInt(tile.value)) {
                    tile.parentNode.classList.add('incorrect');
                    solved = false;
                } else if (solvedBoard[parseInt(tile.dataset.index)] === parseInt(tile.value)) {
                    tile.parentNode.classList.add('correct');
                }
            });

            if (solved) {
                window.alert('Congratulations! You solved the puzzle!');
            }
        }
    }, {
        key: 'clearHints',
        value: function clearHints(e) {
            var hintedTiles = document.querySelectorAll('.correct, .incorrect');
            hintedTiles.forEach(function (tile) {
                tile.classList.remove('correct', 'incorrect');
            });
        }
    }, {
        key: 'solve',
        value: function solve(e) {
            var inputs = document.querySelectorAll('.tile.input');
            inputs.forEach(function (input) {
                input.value = solvedBoard[input.dataset.index];
            });
        }
    }, {
        key: 'reset',
        value: function reset(e) {
            this.setupBoard(unsolvedBoard);
        }
    }]);

    return Board;
}();

exports.default = Board;

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

function enableButtons(board) {
    var submitButton = document.querySelector('.check');
    submitButton.addEventListener('click', board.checkProgress.bind(board));

    var clearButton = document.querySelector('.clear');
    clearButton.addEventListener('click', board.clearHints);

    var giveUpButton = document.querySelector('.give-up');
    giveUpButton.addEventListener('click', board.solve);

    var resetButton = document.querySelector('.reset');
    resetButton.addEventListener('click', board.reset.bind(board));
}

exports.default = enableButtons;

/***/ }),

/***/ "./assets/javascript/generateBoard.js":
/*!********************************************!*\
  !*** ./assets/javascript/generateBoard.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
function createSolvedBoard() {
    var diff = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'easy';

    // number of tiles to be given in puzzle
    var diffMap = {
        'easy': 45,
        'medium': 35,
        'hard': 25
    };

    var board = new Array(81).fill(0);
    board.forEach(function (zero, idx) {
        var assigned = false;
        while (!assigned) {
            var rand = Math.ceil(Math.random() * 9);
            if (validateColumn(rand, idx, board) && validateRow(rand, idx, board) && validateSubgrid(rand, idx, board)) {
                board[idx] = rand;
                assigned = true;
            }
        }
    });

    return board;
}

function validateColumn(rand, idx, board) {
    var randColIndex = idx % 9;
    for (var i = randColIndex; i < 81; i += 9) {
        if (rand === board[i]) return false;
    }
    // for (let i = randColIndex * Math.floor(idx % 9); i > 0; i -= 9) {
    //     console.log(i);
    //     if (rand === board[i]) {
    //         return false;
    //     }
    // }

    return true;
}

function validateRow(rand, idx, board) {
    var randRowIndex = Math.floor(idx / 9);
    var randColIndex = idx % 9;
    var rowStart = randRowIndex * 9;
    var rowEnd = rowStart + 9;

    if (randColIndex === 0) return true;
    for (var i = idx - 1; i >= rowStart; i--) {
        if (rand === board[i]) return false;
    }
    return true;
}

function validateSubgrid(rand, idx, board) {
    var randColIndex = idx % 9;
    var randRowIndex = Math.floor(idx / 9);
    var randSubgrid = determineSubgrid(randColIndex, randRowIndex);

    var solved = true;
    board.forEach(function (tile, tileIdx) {
        var tileColIndex = tileIdx % 9;
        var tileRowIndex = Math.floor(tileIdx / 9);
        var tileSubgrid = determineSubgrid(tileColIndex, tileRowIndex);

        // if( randSubgrid === tileSubgrid) {
        //     console.log(randSubgrid)
        // }

        if (randSubgrid === tileSubgrid && rand === tile && idx !== tileIdx) {
            solved = false;
        }
    });
    // console.log(subgrids);
    return solved;
}

function determineSubgrid(col, row) {
    // formula to determine subgrid found at: https://medium.com/@0xsven/sudoku-validation-with-javascript-1297712093bf
    var gridRow = Math.floor(row / 3);
    var gridCol = Math.floor(col / 3);
    var subGrid = gridRow * 3 + gridCol;
    return subGrid;
}

function unsolveBoard(solvedBoard) {
    var unsolvedBoard = [];
    // let j = diffMap[diff];  
    // solvedBoard.forEach((num, idx) => {
    //     // Math.ceil(Math.random() * 10)
    //     // check against row 
    //     const rowIndex = Math.floor(idx / 9);
    //     const rowStart = rowIndex * 9;
    //     const rowEnd = rowStart + 9;
    //     for (let i = rowStart; i < rowEnd; i++) {
    //         let placed = false; 
    //     }

    // numbers.forEach((num, idx) => {
    //     populateTile(num, idx);
    // });

    return unsolvedBoard;
}

function checkRow(tile, tiles) {
    var tileRowNum = tile.dataset.row;
    var rowTiles = document.querySelectorAll('[data-row="' + tileRowNum + '"]');
    // console.log('tileRowNum', tileRowNum);
    // console.log('rowTiles', rowTiles);

    rowTiles.forEach(function (rowTile) {
        // console.log(rowTile.value || rowTile.textContent);
        // console.log('tile index', tile.dataset.index);
        // console.log('rowTile index', rowTile.dataset.index);
        var rowTileNum = rowTile.textContent ? rowTile.textContent : rowTile.value;

        // don't check a tile against itself   
        if (tile.dataset.index === rowTile.dataset.index) {
            return;
        } else if (rowTile.value === '') {
            // don't check against an empty input 
            return;
        } else {
            if (tile.value === rowTileNum) {
                tile.parentNode.classList.add('wrong');
            }
        }
    });
}

function generateBoard() {
    var solvedBoard = createSolvedBoard();
    var unsolvedBoard = unsolveBoard(solvedBoard);
    return [unsolvedBoard, solvedBoard];
}

exports.default = generateBoard;

/***/ }),

/***/ "./assets/javascript/sudoku.js":
/*!*************************************!*\
  !*** ./assets/javascript/sudoku.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _board = __webpack_require__(/*! ./board.js */ "./assets/javascript/board.js");

var _board2 = _interopRequireDefault(_board);

var _buttons = __webpack_require__(/*! ./buttons */ "./assets/javascript/buttons.js");

var _buttons2 = _interopRequireDefault(_buttons);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var board = new _board2.default();
(0, _buttons2.default)(board);

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
    // remove background color if tile is being changed 
    e.target.parentNode.classList.remove('correct', 'incorrect');

    // only permit a single number as input 
    if (!["1", "2", "3", "4", "5", "6", "7", "8", "9"].includes(e.data)) {
        e.target.value = '';
    } else if (e.data.length === 1) {
        e.target.value = e.data;
    }
}

function determineSubgrid(col, row) {
    // formula to determine subgrid found at: https://medium.com/@0xsven/sudoku-validation-with-javascript-1297712093bf
    var gridRow = Math.floor(row / 3);
    var gridCol = Math.floor(col / 3);
    var subGrid = gridRow * 3 + gridCol;
    return subGrid;
}

function populateTile(num, idx) {
    var boardDiv = document.querySelector('.board');
    var tileDiv = document.createElement('div');
    tileDiv.className = 'tile-div';

    var tile = void 0;
    if (num === 0) {
        tile = document.createElement('input');
        tile.className = 'tile input';
    } else {
        tile = document.createElement('span');
        tile.textContent = num;
        tile.className = 'tile span';
    }

    // add index, column, and row as data attributes 
    var col = idx % 9;
    var row = Math.floor(idx / 9);
    tile.dataset.index = idx;
    tile.dataset.column = col;
    tile.dataset.row = row;
    tile.dataset.subGrid = determineSubgrid(col, row);

    boardDiv.appendChild(tileDiv);
    tileDiv.appendChild(tile);

    tile.addEventListener('input', validateInput);
    // tile.addEventListener('change', () => console.log(e))
}

exports.default = populateTile;

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map