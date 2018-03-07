import Board from './board';

function enableButtons(board) {
    const checkButton = document.querySelector('.check');
    checkButton.addEventListener('click', board.checkProgress);
    
    const submitButton = document.querySelector('.submit');
    submitButton.addEventListener('click', board.checkSubmission.bind(board));
    
    const giveUpButton = document.querySelector('.give-up');
    giveUpButton.addEventListener('click', board.solve);

    const resetButton = document.querySelector('.reset');
    resetButton.addEventListener('click', board.reset);
}    

export default enableButtons; 