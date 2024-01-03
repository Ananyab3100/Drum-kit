function playSound(event){
   const audio = document.querySelector(`audio[data-key= "${event.keyCode}"]`);
   audio.currentTime =0;
   audio.play();
   const key = document.querySelector(`.key[data-key= "${event.keyCode}"]`);
   key.classList.add('playing');
}


window.addEventListener('keydown',playSound);



const keys = document.querySelectorAll('.key');
function removeTransition(event){
   // console.log(event.propertyName);
if (event.propertyName != 'transform')return;
//console.log(this);
this.classList.remove('playing');
}

keys.forEach(key => key.addEventListener('transitionend', removeTransition));
