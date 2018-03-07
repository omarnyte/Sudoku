import Board from './board';

function enableButtons(board) {    
    const submitButton = document.querySelector('.check');
    submitButton.addEventListener('click', board.checkProgress.bind(board));
    
    const giveUpButton = document.querySelector('.give-up');
    giveUpButton.addEventListener('click', board.solve);

    const resetButton = document.querySelector('.reset');
    resetButton.addEventListener('click', board.reset);
}    

export default enableButtons; 