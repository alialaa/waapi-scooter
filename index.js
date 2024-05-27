import "./scripts/street.mjs";
import "./scripts/scooter.mjs";
import "./scripts/background.mjs";

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

window.addEventListener("blur", () => {
  pause();
});
window.addEventListener("focus", () => {
  play();
});
