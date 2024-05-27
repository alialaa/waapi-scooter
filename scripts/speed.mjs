import { streetAnimation } from "./street.mjs";

const MAX_PLAYBACK_RATE = 24;
const speedText = document.querySelector("#speedometer .speed");

function handleSpeed() {
  const speed = Math.round(streetAnimation.playbackRate * 8);
  speedText.textContent = speed;
}

function accelerate() {
  if (
    streetAnimation.playbackRate >= MAX_PLAYBACK_RATE ||
    streetAnimation.playState !== "running"
  )
    return;
  document.getAnimations().forEach((animation) => {
    if (animation.animationName !== "vibration") {
      animation.playbackRate += 0.1;
      handleSpeed();
    }
  });
}

function handleKeyDown(e) {
  if (e.key === "ArrowRight") {
    accelerate();
  }
  if (e.key === "ArrowLeft") {
  }
}
function handleKeyUp(e) {
  if (e.key === "ArrowRight") {
  }
}

window.addEventListener("keydown", handleKeyDown);
window.addEventListener("keyup", handleKeyUp);
