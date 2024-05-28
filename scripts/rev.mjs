import {
  backfirePlayer,
  enginePitchShift,
  enginePlayer,
  idleEnginePlayer,
} from "./audio.mjs";
import { streetAnimation } from "./street.mjs";

let revInterval;
function resetEngine() {
  if (
    streetAnimation.playbackRate !== 0 ||
    streetAnimation.playState !== "running" ||
    enginePitchShift.pitch <= 0
  )
    return;
  enginePitchShift.pitch = parseFloat(enginePitchShift.pitch) - 3;
  enginePlayer.volume.value -= 5;
  idleEnginePlayer.volume.value += 5;
  if (enginePitchShift.pitch <= 0) {
    clearInterval(revInterval);
    enginePitchShift.pitch = 0;
    enginePlayer.volume.value = -20;
    idleEnginePlayer.volume.value = 0;
  }
}

function backfire() {
  if (document.getAnimations().find((a) => a.id === "smoke")) return;
  const smokeEl = document.querySelector(".scooter .smoke");
  const sparkEl = document.querySelector(".scooter .spark");
  backfirePlayer.start();
  sparkEl.animate(
    {
      opacity: [0, 1, 1, 0],
      offset: [0, 0.2, 0.8],
    },
    {
      duration: 300,
    }
  );
  smokeEl.animate(
    {
      opacity: [0, 0.5, 0],
      offset: [0, 0.05],
    },
    {
      id: "smoke",
      duration: 2000,
    }
  );
}

function revEngine() {
  clearInterval(revInterval);
  if (
    streetAnimation.playbackRate !== 0 ||
    streetAnimation.playState !== "running" ||
    enginePitchShift.pitch >= 12
  ) {
    if (Math.random() > 0.9) {
      backfire();
    }
    return;
  }
  enginePitchShift.pitch = parseFloat(enginePitchShift.pitch) + 1;
  enginePlayer.volume.value =
    enginePlayer.volume.value >= 3 ? 3 : (enginePlayer.volume.value += 5);
  idleEnginePlayer.volume.value =
    idleEnginePlayer.volume.value <= -20
      ? -20
      : (idleEnginePlayer.volume.value -= 5);
}

function handleKeyDown(e) {
  if (e.key === "r" || e.key === "R") {
    revEngine();
  }
}
function handleKeyUp(e) {
  if (e.key === "r" || e.key === "R") {
    revInterval = setInterval(() => resetEngine(), 100);
  }
}

window.addEventListener("keydown", handleKeyDown);
window.addEventListener("keyup", handleKeyUp);
