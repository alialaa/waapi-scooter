import { streetAnimation } from "./street.mjs";

document.querySelectorAll(".wheel").forEach((wheel) => {
  wheel.animate(
    [
      {
        transform: "rotate(0)",
      },
      {
        transform: "rotate(360deg)",
      },
    ],
    {
      iterations: Infinity,
      pseudoElement: "::before",
      easing: "linear",
      duration: streetAnimation.effect.getComputedTiming().duration / 4,
    }
  );
});
