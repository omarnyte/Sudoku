import populateTile from './tile';
import generateBoard from './generateBoard';

// const unsolvedBoard = [
//     5, 3, 0, 0, 7, 0, 0, 0, 0,
//     6, 0, 0, 1, 9, 5, 0, 0, 0,
//     0, 9, 8, 0, 0, 0, 0, 6, 0,
//     8, 0, 0, 0, 6, 0, 0, 0, 3,
//     4, 0, 0, 8, 0, 3, 0, 0, 1,
//     7, 0, 0, 0, 2, 0, 0, 0, 6,
//     0, 6, 0, 0, 0, 0, 2, 8, 0,
//     0, 0, 0, 4, 1, 9, 0, 0, 5,
//     0, 0, 0, 0, 8, 0, 0, 7, 9
// ]

// const solvedBoard = [
//     5, 3, 4, 6, 7, 8, 9, 1, 2,
//     6, 7, 2, 1, 9, 5, 3, 4, 8,
//     1, 9, 8, 3, 4, 2, 5, 6, 7,
//     8, 5, 9, 7, 6, 1, 4, 2, 3,
//     4, 2, 6, 8, 5, 3, 7, 9, 1,
//     7, 1, 3, 9, 2, 4, 8, 5, 6,
//     9, 6, 1, 5, 3, 7, 2, 8, 4,
//     2, 8, 7, 4, 1, 9, 6, 3, 5,
//     3, 4, 5, 2, 8, 6, 1, 7, 9
// ]

export default class Board { 
    constructor() {
        // Logic for creating a board with random board generator
        const [unsolvedBoard, solvedBoard] = generateBoard();

        this.render(solvedBoard);
    }

    render(unsolvedBoard) {
        // clear previous board, if any
        const board = document.querySelector('.board');
        board.innerHTML = '';

        unsolvedBoard.forEach((num, idx) => {
            populateTile(num, idx);
        });
    }

    // button methods     
    checkProgress(e) {        
        const tiles = document.querySelectorAll('.tile');
        let solved = true; 
        tiles.forEach((tile, idx) => {
            // only check input (not span) tiles 
            if (tile.tagName === 'SPAN') {
                return ; 
            } else if (tile.value === '') {
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

    clearHints(e) {
        const hintedTiles = document.querySelectorAll('.correct, .incorrect');
        hintedTiles.forEach(tile => {
            tile.classList.remove('correct');
            tile.classList.remove('incorrect');
        }) 
    }

    solve(e) {
        const inputs = document.querySelectorAll('.tile.input');
        inputs.forEach((input) => {
            input.value = solvedBoard[input.dataset.index];
        }) 
    }

    reset(e) {
        this.render(unsolvedBoard);
    }
}


