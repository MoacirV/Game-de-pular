const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);
};

const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
        // Para a animação do cano
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        // Para a animação do Mario
        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        // // Substitui a imagem do Mario por uma de game over
        mario.src = './assets/game-over.png';
        mario.style.width = '100px';
        mario.style.marginLeft = '50px';

        clearInterval(loop); // Para o loop
    }
}, 10);

document.addEventListener('keydown', jump);
