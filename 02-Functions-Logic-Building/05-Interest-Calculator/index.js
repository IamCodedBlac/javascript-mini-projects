const principalInput = document.getElementById("principal");
const rateInput = document.getElementById("rate");
const timeInput = document.getElementById("time");
const calculateButton = document.getElementById("calculate-btn");
const resultOutput = document.getElementById("result");

calculateButton.addEventListener("click", interestCalculator);

function interestCalculator() {
  let principal = Number(principalInput.value);
  let rate = Number(rateInput.value);
  let time = Number(timeInput.value);

  if (!principal || !rate || !time) {
    result.textContent = "Please enter all values";
    return;
  }

  let interest = principal * (rate / 100) * time;
  let total = principal + interest;

  resultOutput.textContent = total.toFixed(2);
}
