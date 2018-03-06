function buttons() {
    const checkButton = document.querySelector('.check');
    checkButton.addEventListener('click', () => console.log('check'))
    
    const submitButton = document.querySelector('.submit');
    checkButton.addEventListener('click', () => console.log('submit'))
    
    const giveUpButton = document.querySelector('.give-up');
    checkButton.addEventListener('click', () => console.log('give up'))
}    

export default buttons; 