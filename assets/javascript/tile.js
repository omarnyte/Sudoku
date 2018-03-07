function validateInput(e) {        
    // only permit a single number as input 
    if (!["1", "2", "3", "4", "5", "6", "7", "8", "9"].includes(e.data)) {
        e.target.value = '';
    } else if (e.data.length === 1) {
        e.target.value = e.data;
    }

    // TODO: Validate against all other numbers in row & column 
    // validate against row 
    // validate against column 
}

function determineSubgrid(col, row) {
    const gridRow = Math.floor(row / 3);
    const gridCol = Math.floor(col / 3);
    const subGrid= gridRow * 3 + gridCol;
    return subGrid;
}

function populateTile(num, idx) {
    const boardDiv = document.querySelector('.board');
    const tileDiv = document.createElement('div')
    tileDiv.className = 'tile-div';
    
    let tile;
    if (num === 0) {
        tile = document.createElement('input');
        tile.className = 'tile input';
    } else {
        tile = document.createElement('span');
        tile.textContent = num;
        tile.className = 'tile span';
    }

    // add index, column, and row as data attributes 
    tile.dataset.index = idx;
    tile.dataset.column = idx % 9;
    tile.dataset.row = Math.floor(idx / 9);

    tile.dataset.subGrid = determineSubgrid(col, row);

    boardDiv.appendChild(tileDiv);
    tileDiv.appendChild(tile); 
    
    tile.addEventListener('input', validateInput);
}

export default populateTile;