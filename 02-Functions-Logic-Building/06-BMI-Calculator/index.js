const weightInput = document.getElementById("weight");
const heightInput = document.getElementById("height");
const calculateButton = document.getElementById("calculate-btn");
const resultOutput = document.getElementById("result");

calculateButton.addEventListener("click", buttonCalculator);
function buttonCalculator() {
  let weight = Number(weightInput.value);
  let height = Number(heightInput.value);
  let height_in_meter = height / 100;

  if (!weight || !height) {
    resultOutput.textContent = "please input your values";
    return;
  }

  let result = weight / (height_in_meter * height_in_meter);
  result = result.toFixed(2);

  resultOutput.textContent = result;
}
