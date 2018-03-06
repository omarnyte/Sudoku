import populateTile from './tile';

exports.checkBoard = () => {
    console.log('checking the board');
}

// function setupBoard (board) {
//     board.forEach((num, idx) => {
//         populateTile(num, idx);
//     })
// }

function createBoards(diff = 'easy') {
    const diffMap = {
        'easy': 45,
        'medium': 35,
        'hard': 25
    }
    
    let solvedBoard = []; 
    
    for (let i = 0; i < 81; i++) {
        solvedBoard.push(0);
    }

    let j = diffMap[diff];  
    solvedBoard.forEach((num, idx) => {
        // Math.ceil(Math.random() * 10)
        // check against row 
        const rowIndex = Math.floor(idx / 9);
        const rowStart = rowIndex * 9;
        const rowEnd = rowStart + 9;
        for (let i = rowStart; i < rowEnd; i++) {
            let placed = false; 
        }
        

        // check against column 
    })

} 

function setupBoard () {
    createBoards();
    // const [unsolvedBoard, solvedBoard] = createBoards();
}
export default setupBoard;

