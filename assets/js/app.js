import "@babel/polyfill";
import { getRandomColor } from "./helpers/math";
import lodash from "lodash";

window.addEventListener("load", () => {
  const body = document.querySelector("body");



  function randomColor() {
    console.dir(lodash);
    const color = getRandomColor();
    body.style.backgroundColor = color;
  }

  randomColor();

  setInterval(randomColor, 8000);
});
