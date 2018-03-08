function createSolvedBoard(diff = 'easy') {
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
            if (validateRow(rand, idx, board)) {
                board[idx] = rand;
                assigned = true;
            }
        }
    })

    return board;
}

function validateColumn(rand, idx, board) {
    const randColIndex = idx % 9;
    for (let i = randColIndex; i < 81; i += 9) {
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
    const randRowIndex = Math.floor(idx / 9);
    const randColIndex = idx % 9;
    const rowStart = randRowIndex * 9;
    const rowEnd = rowStart + 9;

    if (randColIndex === 0) return true;
    for (let i = idx - 1; i >= rowStart; i--) {
        if (rand === board[i]) return false;
    }
    return true;
}

function validateSubgrid(rand, idx, board) {
    const randColIndex = idx % 9;
    const randRowIndex = Math.floor(idx / 9);
    const randSubgrid = determineSubgrid(randColIndex, randRowIndex);

    board.forEach((tile, tileIdx) => {
        const tileColIndex = tileIdx % 9;
        const tileRowIndex = Math.floor(tileIdx / 9);
        const tileSubgrid = determineSubgrid(tileColIndex, tileRowIndex);

        if (randSubgrid === tileSubgrid && rand === tile && idx !== tileIdx) {
            return false;
        }
    });
    return true;
}

function determineSubgrid(col, row) {
    // formula to determine subgrid found at: https://medium.com/@0xsven/sudoku-validation-with-javascript-1297712093bf
    const gridRow = Math.floor(row / 3);
    const gridCol = Math.floor(col / 3);
    const subGrid = gridRow * 3 + gridCol;
    return subGrid;
}

function unsolveBoard(solvedBoard) {
    const unsolvedBoard = [];
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

function generateBoard() {
    const solvedBoard = createSolvedBoard();
    const unsolvedBoard = unsolveBoard(solvedBoard);
    return [unsolvedBoard, solvedBoard]
}

export default generateBoard;

