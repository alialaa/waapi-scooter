import { streetAnimation } from "./street.mjs";

const scooter = document.querySelector(".scooter");
const shadow = document.querySelector(".shadow");

function wheelie() {
  if (
    streetAnimation.playState !== "running" ||
    streetAnimation.playbackRate < 4 ||
    scooter.getAnimations().find((animation) => animation.id === "wheelie")
  )
    return;
  scooter.animate(
    [
      {
        transform: "translateX(0) rotate(0) translateY(0)",
      },
      {
        transform: "translateX(15%) rotate(-20deg) translateY(11%)",
        offset: 0.07,
      },
      {
        transform: "translateX(15%) rotate(-20deg) translateY(11%)",
        offset: 0.98,
        easing: "cubic-bezier(.53,-0.02,.75,1.4)",
      },
      {
        transform: "translateX(0) rotate(0) translateY(0)",
      },
    ],
    {
      id: "wheelie",
      duration: 4000,
      iterations: 1,
      easing: "ease-in-out",
    }
  );
  shadow.animate(
    [
      {
        transform: "scale(1) rotate(0) ",
      },
      {
        transform: "translateX(15%) scale(1.2) rotate(-2deg) ",
        offset: 0.07,
      },
      {
        transform: "translateX(15%) scale(1.2) rotate(-2deg) ",
        offset: 0.98,
        easing: "cubic-bezier(.53,-0.01,.75,1.4)",
      },
      {
        transform: "scale(1) rotate(0)",
      },
    ],
    {
      id: "wheelie",
      duration: 4000,
      iterations: 1,
      easing: "ease-in-out",
      composite: "add",
    }
  );
}

window.addEventListener("keydown", (e) => {
  if (e.key === "w" || e.key === "W") {
    wheelie();
  }
});
