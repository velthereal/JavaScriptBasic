let randomNumber = document.querySelector('.number');

document.querySelector('button').addEventListener('click', () => {
    randomNumber.textContent = Math.round(Math.random()* 101);
});