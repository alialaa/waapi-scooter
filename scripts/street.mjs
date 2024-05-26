const street = document.querySelector(".street");

export const streetAnimation = street.animate(
  [
    {
      transform: "translateX(0)",
    },
    {
      transform: "translateX(-50%)",
    },
  ],
  {
    duration: 5000,
    easing: "linear",
    iterations: Infinity,
    timeline: document.timeline,
  }
);
