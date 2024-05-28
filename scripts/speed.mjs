import {
  brakePlayer,
  enginePitchShift,
  enginePlayer,
  idleEnginePlayer,
} from "./audio.mjs";
import { streetAnimation } from "./street.mjs";

const MAX_PLAYBACK_RATE = 24;
const speedText = document.querySelector("#speedometer .speed");

function handleSpeed(accelerating) {
  const speed = Math.round(streetAnimation.playbackRate * 8);
  speedText.textContent = speed;

  if (streetAnimation.playbackRate >= 0 && streetAnimation.playbackRate < 2) {
    enginePlayer.volume.value = streetAnimation.playbackRate * 10 - 20;
    idleEnginePlayer.volume.value = streetAnimation.playbackRate * -10;
  } else {
    enginePlayer.volume.value = 0;
    idleEnginePlayer.volume.value = -20;
  }
  if (accelerating) {
    enginePitchShift.pitch =
      enginePitchShift.pitch >= 15 ? 15 : enginePitchShift.pitch + 0.03;
    if ([15, 35, 65, 95].includes(speed)) {
      enginePitchShift.pitch = -5;
    }
  } else {
    enginePitchShift.pitch =
      enginePitchShift.pitch <= -5 ? -5 : enginePitchShift.pitch - 0.03;
  }
}

function updatePlaybackRate(rate, accelerating) {
  document.getAnimations().forEach((animation) => {
    if (animation.animationName !== "vibration") {
      if (rate === 0) {
        animation.playbackRate = rate;
      } else {
        animation.playbackRate += rate;
      }
      handleSpeed(accelerating);
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
  updatePlaybackRate(0.1, true);
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
let brakeCounter = 0;
function handleKeyDown(e) {
  if (e.key === "ArrowRight") {
    accelerate();
  }
  if (e.key === "ArrowLeft") {
    brakeCounter++;
    decelerate(0.5);
    if (
      streetAnimation.playState === "running" &&
      streetAnimation.playbackRate > 5 &&
      brakeCounter > 5
    ) {
      brakePlayer.start();
    }
  }
}
function handleKeyUp(e) {
  brakeCounter = 0;
  if (e.key === "ArrowRight") {
    decelerateInterval = setInterval(() => decelerate(0.3), 500);
  }
}

window.addEventListener("keydown", handleKeyDown);
window.addEventListener("keyup", handleKeyUp);
