# Sudoku

This version of Sudoku is built entirely in HTML, CSS, and JavaScript without the use of any additional frameworks.

## Structure
### Board Class 

### Tiles
The data for each tile lives almost exclusively on the DOM node. 
```javascript
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
    const col = idx % 9;
    const row = Math.floor(idx / 9);
    tile.dataset.index = idx;
    tile.dataset.column = col;
    tile.dataset.row = row;
    tile.dataset.subGrid = determineSubgrid(col, row);

    boardDiv.appendChild(tileDiv);
    tileDiv.appendChild(tile); 

    tile.addEventListener('input', validateInput);
    // tile.addEventListener('change', () => console.log(e))
}
```



## Next Steps
* **Random Board Generator:** 