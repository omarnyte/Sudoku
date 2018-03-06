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
    const boardDiv = document.querySelector('.board');
    const tileDiv = document.createElement('div')
    tileDiv.className = 'tile-div';
    tileDiv.dataset.index = idx;
    
    let tile;
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

export default populateTile;