import { streetAnimation } from "./street.mjs";

const frontHouses = document.querySelector(".houses-wrapper .houses");
const frontHousesWrapper = document.querySelector(".houses-wrapper");
const backHouses = document.querySelector(".back-houses-wrapper .houses");
const backHousesWrapper = document.querySelector(".back-houses-wrapper");

function randomizeHouses(element) {
  element.querySelectorAll(".house").forEach((img) => {
    img.src = `assets/house-${Math.floor(Math.random() * 9) + 1}.png`;
  });
}

const frontHousesClone = frontHouses.cloneNode(true);
randomizeHouses(frontHousesClone);
frontHousesWrapper.append(frontHousesClone);

const backHousesClone = backHouses.cloneNode(true);
randomizeHouses(backHousesClone);
backHousesWrapper.append(backHousesClone);

function animateHouses(houses, duration, shift) {
  const housesAnimation = houses.animate(
    [
      {
        transform: `translateX(${shift ? 200 : 0}vw)`,
      },
      {
        transform: "translateX(-200vw)",
      },
    ],
    {
      duration: shift ? duration * 2 : duration,
      easing: "linear",
    }
  );
  housesAnimation.finished.then((e) => {
    randomizeHouses(e.effect.target);
    animateHouses(e.effect.target, duration, true);
  });
}

const frontHousesDuration =
  streetAnimation.effect.getComputedTiming().duration * 2;
const backHousesDuration =
  streetAnimation.effect.getComputedTiming().duration * 3;

animateHouses(frontHouses, frontHousesDuration);
animateHouses(frontHousesClone, frontHousesDuration, true);

animateHouses(backHouses, backHousesDuration);
animateHouses(backHousesClone, backHousesDuration, true);
