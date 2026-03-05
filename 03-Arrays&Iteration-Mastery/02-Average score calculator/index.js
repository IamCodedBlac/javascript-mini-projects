const scoresInput = document.getElementById("scores");
const calculateButton = document.getElementById("calculate-btn");
const resultOutput = document.getElementById("result");

calculateButton.addEventListener("click", averageFinder);

function averageFinder() {
  let scores = scoresInput.value;

  if (!scores) {
    resultOutput.textContent = "Please enter scores";
    return;
  }

  let array = scores.split(",");
  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    sum += Number(array[i]);
  }

  let average = sum / array.length;
  average = average.toFixed(2);

  resultOutput.textContent = average;
}
