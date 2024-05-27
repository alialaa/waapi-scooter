import { streetAnimation } from "./street.mjs";

const foreground = document.querySelector(".foreground");

function randomizeItem() {
  const img = foreground.querySelector("img");
  const items = [
    "sign-1",
    "tree-1",
    "tree-2",
    "sign-1",
    "tree-3",
    "tree-4",
    "tree-5",
    "tree-6",
    "sign-1",
  ];
  const item = items[Math.floor(Math.random() * items.length)];
  img.className = item.split("-")[0];
  img.src = `assets/${item}.png`;
}

function animateForeground() {
  const foregroundAnimation = foreground.animate(
    [
      {
        transform: "translateX(100%)",
      },
      {
        transform: "translateX(-100%)",
      },
    ],
    {
      easing: "linear",
      duration: streetAnimation.effect.getComputedTiming().duration * 1.4,
    }
  );
  foregroundAnimation.playbackRate = streetAnimation.playbackRate;
  foregroundAnimation.finished.then(() => {
    randomizeItem();
    animateForeground();
  });
}

animateForeground();
