function playSound (e) {
  const audio = document.querySelector(`audio[data-key='${e.keyCode}']`); // Get the audio element
  const key = document.querySelector(`.key[data-key='${e.keyCode}']`); // Get the appropriate div.key element
  if (!audio) return; // if data-key is non-existent, stop running
  audio.currentTime = 0; // reset playback time
  audio.play();
  key.classList.add('playing');
}

function removeTransition(e) {
  if (e.propertyName !== 'transform') return; //stop running if transition name isn't 'transform'
  this.classList.remove('playing');
}


const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', playSound);