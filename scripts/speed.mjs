import { streetAnimation } from "./street.mjs";

const MAX_PLAYBACK_RATE = 24;
const speedText = document.querySelector("#speedometer .speed");

function handleSpeed() {
  const speed = Math.round(streetAnimation.playbackRate * 8);
  speedText.textContent = speed;
}

function updatePlaybackRate(rate) {
  document.getAnimations().forEach((animation) => {
    if (animation.animationName !== "vibration") {
      if (rate === 0) {
        animation.playbackRate = rate;
      } else {
        animation.playbackRate += rate;
      }
      handleSpeed();
    }
  });
}

let decelerateInterval;

function accelerate() {
  clearInterval(decelerateInterval);
  if (
    streetAnimation.playbackRate >= MAX_PLAYBACK_RATE ||
    streetAnimation.playState !== "running"
  )
    return;
  updatePlaybackRate(0.1);
}

function decelerate(rate) {
  if (
    streetAnimation.updatePlaybackRate === 0 ||
    streetAnimation.playState !== "running"
  )
    return;
  updatePlaybackRate(-rate);

  if (streetAnimation.playbackRate <= 0.2) {
    clearInterval(decelerateInterval);
    updatePlaybackRate(0);
  }
}

function handleKeyDown(e) {
  if (e.key === "ArrowRight") {
    accelerate();
  }
  if (e.key === "ArrowLeft") {
    decelerate(0.5);
  }
}
function handleKeyUp(e) {
  if (e.key === "ArrowRight") {
    decelerateInterval = setInterval(() => decelerate(0.3), 500);
  }
}

window.addEventListener("keydown", handleKeyDown);
window.addEventListener("keyup", handleKeyUp);
