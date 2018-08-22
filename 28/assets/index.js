const speed = document.querySelector('.speed');
const bar = speed.querySelector('.speed-bar');
const video = document.querySelector('.flex');

function handleMove(e) {
  const y = e.pageY - this.offsetTop;
  const percent = y / this.offsetHeight;
  const min = 0.4;
  const max = 5;
  const height = `${Math.round(percent * 100)}%`;
  const playbackRate = percent * (max - min) + min;
  
  bar.textContent = `${playbackRate.toFixed(1)}x`;
  bar.style.height = height;
  video.playbackRate = playbackRate;
}

speed.addEventListener('mousemove', handleMove);