const numberInput = document.getElementById("number-input");
const resultOutput = document.getElementById("result");

numberInput.addEventListener("input", numberChecker);
function numberChecker() {
  let numberInputValue = Number(numberInput.value);
  if (numberInputValue % 2 === 0) {
    resultOutput.textContent = "Even";
  } else if (numberInputValue % 2 !== 0) {
    resultOutput.textContent = "Odd";
  }
}
