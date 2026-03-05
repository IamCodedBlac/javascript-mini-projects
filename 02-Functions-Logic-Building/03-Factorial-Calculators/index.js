const numberInput = document.getElementById("number-input");
const resultOutput = document.getElementById("result");

numberInput.addEventListener("input", calculate);
function calculate() {
  let numberInputValue = Number(numberInput.value);
  if (numberInputValue < 0) {
    resultOutput.textContent = "invalid";
    return;
  }

  if (numberInputValue === 0) {
    resultOutput.textContent = 1;
    return;
  }

  let result = 1;

  for (let i = 1; i <= numberInputValue; i++) {
    result = result * i;
  }

  resultOutput.textContent = result;
}
