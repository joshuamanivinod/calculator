"use strict";
function value(num) {
  //   console.log(num);
  //   document.querySelector(".message").textContent += num;
  const result = document.getElementById("result");
  result.value += num;
}

document.querySelector(`.one`).addEventListener("click", function () {
  value(1);
});
document.querySelector(`.two`).addEventListener("click", function () {
  value(2);
});
document.querySelector(`.three`).addEventListener("click", function () {
  value(3);
});
document.querySelector(`.four`).addEventListener("click", function () {
  value(4);
});
document.querySelector(`.five`).addEventListener("click", function () {
  value(5);
});
document.querySelector(`.six`).addEventListener("click", function () {
  value(6);
});
document.querySelector(`.seven`).addEventListener("click", function () {
  value(7);
});
document.querySelector(`.eight`).addEventListener("click", function () {
  value(8);
});
document.querySelector(`.nine`).addEventListener("click", function () {
  value(9);
});
document.querySelector(`.zero`).addEventListener("click", function () {
  value(0);
});
document.querySelector(`.add`).addEventListener("click", function () {
  value("+");
});
document.querySelector(`.sub`).addEventListener("click", function () {
  value("-");
});
document.querySelector(`.div`).addEventListener("click", function () {
  value("/");
});
document.querySelector(`.mul`).addEventListener("click", function () {
  value("*");
});

function appendToDisplay(value) {
  document.getElementById("display").value += value;
}

document.querySelector(".equal").addEventListener("click", function () {
  const ans = eval(document.getElementById("result").value);
  console.log(ans);
  document.getElementById("result").value = ans;
  //   const input = Number(document.querySelector(".input").value);
  //   console.log(input);
});

document.querySelector(".clear").addEventListener("click", function () {
  document.getElementById("result").value = "";
});

document.querySelector(".backspace").addEventListener("click", function () {
  const result = document.getElementById("result").value;
  document.getElementById("result").value = result.slice(0, -1);
});

const inputElement = document.getElementById("result");

inputElement.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    const ans = eval(document.getElementById("result").value);
    console.log(ans);
    document.getElementById("result").value = ans;
  }
});
