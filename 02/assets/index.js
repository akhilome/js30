// Select all neccesary elements

const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setTime() {
  const now = new Date(); // Get current datetime

  const seconds = now.getSeconds();
  const secondsDegrees = ((seconds / 60) * 360) + 90; // Convert to degrees and offset by 90
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  const minutes = now.getMinutes();
  const minDegrees = ((minutes / 60) * 360) + 90;
  minuteHand.style.transform = `rotate(${minDegrees}deg)`;

  const hours = now.getHours();
  const hourDegrees = ((hours / 12) * 360) + 90;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

setInterval(setTime, 1000);