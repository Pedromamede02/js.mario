const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const clouds = document.querySelector(".clouds");
const songtag = document.querySelector('.song');

const jump = ()=>{
   
    mario.classList.add('jump');
    setTimeout(()=>{
        mario.classList.remove('jump');
    },500)
}
document.addEventListener('keydown', jump);

const Loop = setInterval(()=>{
   
    
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px','');
    const cloudsPosition = +window.getComputedStyle(clouds).right.replace('px','');
    console.log(cloudsPosition);
    if(pipePosition <= 120 && pipePosition >0 && marioPosition < 80 ){
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;
        mario.src = '/Images/game-over.png';
        mario.style.width = "70px";
        mario.style.animation = 'none'
        mario.style.bottom = `${marioPosition}px`;
        mario.style.marginLeft = "50px";
        clouds.style.animation = 'none';
        clouds.style.right = `${cloudsPosition}px`;
        clearInterval(Loop);
    }
},10);

