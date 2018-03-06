import populateTile from './tile';


function setupBoard (board) {
    board.forEach((num, idx) => {
        populateTile(num);
    })
}


export default setupBoard;