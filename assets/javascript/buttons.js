import Board from './board';

function enableButtons(board) {    
    const submitButton = document.querySelector('.check');
    submitButton.addEventListener('click', board.checkProgress.bind(board));

    const clearButton = document.querySelector('.clear');
    clearButton.addEventListener('click', board.clearHints);
    
    const giveUpButton = document.querySelector('.give-up');
    giveUpButton.addEventListener('click', board.solve);

    const resetButton = document.querySelector('.reset');
    resetButton.addEventListener('click', board.reset.bind(board));
}    

export default enableButtons; 