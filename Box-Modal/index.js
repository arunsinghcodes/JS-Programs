console.log("Hello World!");

// 1st Approach

const changeHandler = () => {
  document.querySelector(".btn").innerText = "Loading...";
};

// 2nd Approach

const btnTwo = document.querySelector(".btnTwo");

const changeHandlerSecond = (btnTwo) => {
  btnTwo.innerText = "Loading...";
};

// 3rd Approach

const btnThree = document.querySelector(".btnThree");

btnThree.addEventListener("click", () => {
  btnThree.innerText = "Loading...";
});
