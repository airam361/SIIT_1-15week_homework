let heightInput = document.getElementById("height");
let weightInput = document.getElementById("weight");

let text = document.querySelector(".right h3");
let bmiResult = document.getElementById("bmi-result");
let bmiText = document.getElementById("bmi-text");
let progressBar = document.querySelector("progress");
let btnCalculate = document.querySelector(".middle button");

function onClickHandler() {
  let height = Number(heightInput.value);
  let weight = Number(weightInput.value);
  let bmi = (weight / Math.pow(height, 2)).toFixed(1);
  progressBar.value = bmi;
  progressBar.style.visibility = "visible";

  if (bmi < 18.5) {
    text.style.color = "#4C7BB8";
    bmiResult.style.color = "#4C7BB8";
    bmiText.style.color = "#4C7BB8";
    bmiResult.innerHTML = bmi;
    bmiText.innerHTML = "underweight";
  } else if (bmi >= 18.5 && bmi < 25) {
    text.style.color = "#6BAB53";
    bmiResult.style.color = "#6BAB53";
    bmiText.style.color = "#6BAB53";
    bmiResult.innerHTML = bmi;
    bmiText.innerHTML = "normal";
  } else if (bmi >= 25 && bmi < 30) {
    text.style.color = "#F99F02";
    bmiResult.style.color = "#F99F02";
    bmiText.style.color = "#F99F02";
    bmiResult.innerHTML = bmi;
    bmiText.innerHTML = "overweight";
  } else {
    text.style.color = "#860910";
    bmiResult.style.color = "#860910";
    bmiText.style.color = "#860910";
    bmiResult.innerHTML = bmi;
    bmiText.innerHTML = "obese";
  }
}
function onInputChangeHandler() {
  text.style.color = "transparent";
  bmiResult.style.color = "transparent";
  bmiText.style.color = "transparent";
  bmiResult.innerHTML = "";
  bmiText.innerHTML = "";
  progressBar.style.visibility = "hidden";
}

btnCalculate.addEventListener("click", onClickHandler);
heightInput.addEventListener("input", onInputChangeHandler);
weightInput.addEventListener("input", onInputChangeHandler);
