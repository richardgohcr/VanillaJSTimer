const durationInput = document.querySelector('#duration');
const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');
const circle = document.querySelector('circle');

const diameter = circle.getAttribute('r') * 2 * Math.PI;
circle.setAttribute('stroke-dasharray', diameter);

let duration;
const timer = new Timer(durationInput, startButton, pauseButton, {
  onStart(totalDuration) {
    duration = totalDuration;
  },
  onTick(timeRemaining) {
    circle.setAttribute('stroke-dashoffset',
    diameter * timeRemaining / duration - diameter);
  },
  onComplete() {
    console.log('Timer complete');
  },
});
