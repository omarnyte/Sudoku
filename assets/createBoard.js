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