import Board from './board';
import checkBoard from './board';

function buttons(board) {
    const checkButton = document.querySelector('.check');
    checkButton.addEventListener('click', board.checkProgress);
    
    const submitButton = document.querySelector('.submit');
    submitButton.addEventListener('click', board.checkSubmission);
    
    const giveUpButton = document.querySelector('.give-up');
    giveUpButton.addEventListener('click', board.solve);

    const resetButton = document.querySelector('.reset');
    giveUpButton.addEventListener('click', board.reset);
}    

export default buttons; 


// const checkButton = document.querySelector('.check');
// checkButton.addEventListener('click', () => {
//     const tiles = document.querySelectorAll('tile');
//     tiles.forEach(tile => {
//     });
// });