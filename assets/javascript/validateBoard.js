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
    const randSubgrid = this.determineSubgrid(randColIndex, randRowIndex);

    board.forEach((tile, tileIdx) => {
        const tileColIndex = tileIdx % 9;
        const tileRowIndex = Math.floor(tileIdx / 9);
        const tileSubgrid = this.determineSubgrid(tileColIndex, tileRowIndex);

        if (randSubgrid === tileSubgrid && rand === tile && idx !== tileIdx) {
            console.log('hello')
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

function validateRandomNumber() {

}

export default validateRandomNumber;