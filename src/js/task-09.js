function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyChangeColor = document.querySelector("body");
const spanChangeColor = document.querySelector(".color");
const btnChangeColor = document.querySelector(".change-color");

btnChangeColor.addEventListener("click", handlerColor);

function handlerColor(evt) {
  const randomColor = getRandomHexColor(evt.currentTarget);
  console.log(randomColor);
  bodyChangeColor.style.backgroundColor = randomColor;
  spanChangeColor.textContent = randomColor;
}
