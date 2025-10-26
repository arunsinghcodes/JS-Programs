let randomBtn = document.querySelector(".randomBtn");
let colorInput = document.querySelector("#colorInput");
let applyBtn = document.querySelector(".applyBtn");
let currentColorValue = document.querySelector(".currentColorValue");
let container = document.querySelector(".container");

const randomColorList = [
  "red",
  "green",
  "yellow",
  "blue",
  "cyan",
  "#FF5733",
  "#33FF57",
  "#3357FF",
  "#FF33A8",
  "#33FFF2",
  "#FF8C00",
  "#8A2BE2",
  "#20B2AA",
  "#FF6347",
  "#7FFF00",
  "#DC143C",
  "#00CED1",
  "#FFD700",
  "#ADFF2F",
  "#FF1493",
  "#00BFFF",
  "#4B0082",
  "#FF4500",
  "#2E8B57",
  "#1E90FF",
  "#DA70D6",
  "#40E0D0",
  "#FF69B4",
  "#B22222",
  "#9ACD32",
];

const changeColor = (color) => {
  container.style.backgroundColor = color;
  currentColorValue.innerText = color;
};

const generateRandomColor = () =>{
const randomColor = randomColorList[Math.floor(Math.random() * randomColorList.length)];
return randomColor;
}

const HandleRandomBtnClick = () => {
  let color = generateRandomColor();
   changeColor(color);
};

const HandleApplyBtnClick = () => {
  const color = colorInput.value;
  changeColor(color);
};

randomBtn.addEventListener("click", HandleRandomBtnClick);
applyBtn.addEventListener("click", HandleApplyBtnClick);

changeColor("red");
