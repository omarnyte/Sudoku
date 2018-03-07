import Board from './board.js';
import setupBoard from './board';
import buttons from './buttons';


const board = new Board();
buttons(board);

// function checkRow(tile, idx, tiles) {
//     const rowIdx = Math.floor(idx / 8);
//     const rowStart = rowIdx * 9;
//     const rowEnd = rowStart + 8;

//     for (let i = rowStart; i <= rowEnd; i++) {                
//         if (tile.value === tiles[i].textContent || tiles[i].value) {
//             console.log(tiles[i].value);
//             tile.parentNode.classList.add('wrong');
//         }
//     }
// }

// const submitButton = document.querySelector('.submit');
// // TODO move to separate file 
// submitButton.addEventListener('click', () => {
//     const tiles = document.querySelectorAll('.tiles');
//     tiles.forEach((tile, idx)=> {
//         // only check input (not given) tiles 
//         if (tile.tagName === 'SPAN') {
//             return ; 
//         } 

//         checkRow(tile, idx, tiles);
        
//     });


// });

// const submitButton = document.querySelector('.submit');
// checkButton.addEventListener('click', () => console.log('submit'))

// const giveUpButton = document.querySelector('.give-up');
// checkButton.addEventListener('click', () => console.log('give up'))
