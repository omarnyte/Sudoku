import populateTile from './tile';

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
    constructor(numbers = unsolvedBoard) {
        this.render(numbers);
    }

    render (numbers) {
        numbers.forEach((num, idx) => {
            populateTile(num, idx);
        });
    }

    checkSubmission(e) {
        console.log('in check submission');
    }


}


// exports.checkBoard = () => {
    // console.log('checking the board');
// }

// function setupBoard (board) {
//     board.forEach((num, idx) => {
//         populateTile(num, idx);
//     })
// }

// function createBoards(diff = 'easy') {
//     const diffMap = {
//         'easy': 45,
//         'medium': 35,
//         'hard': 25
//     }
    
//     let solvedBoard = []; 
    
//     for (let i = 0; i < 81; i++) {
//         solvedBoard.push(0);
//     }

//     let j = diffMap[diff];  
//     solvedBoard.forEach((num, idx) => {
//         // Math.ceil(Math.random() * 10)
//         // check against row 
//         const rowIndex = Math.floor(idx / 9);
//         const rowStart = rowIndex * 9;
//         const rowEnd = rowStart + 9;
//         for (let i = rowStart; i < rowEnd; i++) {
//             let placed = false; 
//         }
        

//         // check against column 
//     })

// } 

// function setupBoard (numbers) {
//     numbers.forEach((num, idx) => {
//         populateTile(num, idx)
//     })
// }
// export default setupBoard;



