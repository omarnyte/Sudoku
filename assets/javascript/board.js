import populateTile from './tile';
import validateRandomNumber from './validateBoard';

const unsolvedBoard = [
    5, 3, 0, 0, 7, 0, 0, 0, 0,
    6, 0, 0, 1, 9, 5, 0, 0, 0,
    0, 9, 8, 0, 0, 0, 0, 6, 0,
    8, 0, 0, 0, 6, 0, 0, 0, 3,
    4, 0, 0, 8, 0, 3, 0, 0, 1,
    7, 0, 0, 0, 2, 0, 0, 0, 6,
    0, 6, 0, 0, 0, 0, 2, 8, 0,
    0, 0, 0, 4, 1, 9, 0, 0, 5,
    0, 0, 0, 0, 8, 0, 0, 7, 9
]

const solvedBoard = [
    5, 3, 4, 6, 7, 8, 9, 1, 2,
    6, 7, 2, 1, 9, 5, 3, 4, 8,
    1, 9, 8, 3, 4, 2, 5, 6, 7,
    8, 5, 9, 7, 6, 1, 4, 2, 3,
    4, 2, 6, 8, 5, 3, 7, 9, 1,
    7, 1, 3, 9, 2, 4, 8, 5, 6,
    9, 6, 1, 5, 3, 7, 2, 8, 4,
    2, 8, 7, 4, 1, 9, 6, 3, 5,
    3, 4, 5, 2, 8, 6, 1, 7, 9
]

export default class Board { 
    constructor() {
        // const unsolvedBoard = unsolvedBoard()        
        this.render(unsolvedBoard);
        this.solvedBoard = solvedBoard;
    }

    render(unsolvedBoard) {
        // clear previous board, if any
        const board = document.querySelector('.board');
        board.innerHTML = '';

        unsolvedBoard.forEach((num, idx) => {
            populateTile(num, idx);
        });
    }

    createSolvedBoard(diff = 'easy') {
        // number of tiles to be given in puzzle
        const diffMap = {
            'easy': 45,
            'medium': 35,
            'hard': 25
        }

        let board = new Array(81).fill(0); 
        board.forEach((zero, idx) => {
            let assigned = false;
            while (!assigned) {
                const rand = Math.ceil(Math.random() * 9);
                if (this.validateSubgrid(rand, idx, board)) {
                    board[idx] = rand;
                    assigned = true;
                }
            }
        })

        return board;        
    }
    
    unsolveBoard(solvedBoard) {
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
    
    
    
            // check against column 
        // })

    }

    checkRow(tile, tiles) {
        const tileRowNum = tile.dataset.row;
        const rowTiles = document.querySelectorAll(`[data-row="${tileRowNum}"]`);
        // console.log('tileRowNum', tileRowNum);
        // console.log('rowTiles', rowTiles);
        
        rowTiles.forEach(rowTile => {
            // console.log(rowTile.value || rowTile.textContent);
            // console.log('tile index', tile.dataset.index);
            // console.log('rowTile index', rowTile.dataset.index);
            const rowTileNum = rowTile.textContent ? rowTile.textContent : rowTile.value;

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
                tile.parentNode.classList.add('wrong');
                solved = false;
            }
        });

        if (solved) {
            window.alert('Congratulations! You solved the puzzle!');
        }
    }

    solve(e) {
        const inputs = document.querySelectorAll('.tile.input');
        console.log(inputs);
        inputs.forEach((input, idx) => {
            input.value = solvedBoard[idx];
        }) 
    }

    reset(e) {
        this.render(unsolvedBoard);
    }
}


