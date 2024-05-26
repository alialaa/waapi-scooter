const street = document.querySelector(".street");

const streetAnimation = street.animate(
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

console.log(streetAnimation);
console.log(document.getAnimations());
console.log(street.getAnimations());

// const streetKeyframes = new KeyframeEffect(
//   street,
//   [
//     {
//       transform: "translateX(0)",
//     },
//     {
//       transform: "translateX(-50%)",
//     },
//   ],
//   {
//     duration: 5000,
//     easing: "linear",
//     iterations: Infinity,
//   }
// );

// const streetAnimation = new Animation(streetKeyframes, document.timeline);

// streetAnimation.play();
// console.log(streetKeyframes, streetAnimation);
