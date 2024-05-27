import "./scripts/street.mjs";
import "./scripts/scooter.mjs";
import "./scripts/background.mjs";
import "./scripts/foreground.mjs";
import "./scripts/speed.mjs";
import "./scripts/wheelie.mjs";

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
}
function play() {
  document.getAnimations().forEach((animation) => {
    animation.play();
  });
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
