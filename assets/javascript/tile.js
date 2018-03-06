function populateTile(num) {
    const boardDiv = document.querySelector('.board');
    const tileDiv = document.createElement('div')
    tileDiv.className = 'tile-div';
    
    let tile;
    if (num === 0) {
        tile = document.createElement('input');
    } else {
        tile = document.createElement('span');
        tile.textContent = num;
    }

    boardDiv.appendChild(tileDiv);
    tileDiv.appendChild(tile);    
}

export default populateTile;