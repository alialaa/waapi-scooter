import "./scripts/street.mjs";
import "./scripts/scooter.mjs";
import "./scripts/background.mjs";
import "./scripts/foreground.mjs";
import "./scripts/speed.mjs";
import "./scripts/wheelie.mjs";
import "./scripts/rev.mjs";
import { pauseAllAudio, playAllAudio } from "./scripts/audio.mjs";

let isPaused = true;

function init() {
  document.getAnimations().forEach((animation) => {
    animation.pause();
    if (animation.animationName !== "vibration") {
      animation.playbackRate = 0;
    }
  });
}

init();

function pause() {
  document.getAnimations().forEach((animation) => {
    animation.pause();
  });
  pauseAllAudio();
}
function play() {
  document.getAnimations().forEach((animation) => {
    animation.play();
  });
  playAllAudio();
}

window.addEventListener("keydown", (e) => {
  if (e.key === " ") {
    if (isPaused) {
      play();
      isPaused = false;
    } else {
      pause();
      isPaused = true;
    }
  }
});

window.addEventListener("blur", () => {
  pause();
});
window.addEventListener("focus", () => {
  if (isPaused) return;
  play();
});
