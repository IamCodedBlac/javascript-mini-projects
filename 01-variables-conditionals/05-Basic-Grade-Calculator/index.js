const numberInput = document.getElementById("number-input");
const Result = document.getElementById("result");

numberInput.addEventListener("input", grabResult);

function grabResult() {
  let numberInputValue = Number(numberInput.value);

  if (numberInputValue <= 59) {
    Result.textContent = "F";
  } else {
    if (numberInputValue >= 60 && numberInputValue <= 69) {
      Result.textContent = "D";
    } else {
      if (numberInputValue >= 70 && numberInputValue <= 79) {
        Result.textContent = "C";
      } else {
        if (numberInputValue >= 80 && numberInputValue <= 89) {
          Result.textContent = "B";
        } else {
          if (numberInputValue >= 90 && numberInputValue <= 100) {
            Result.textContent = "A";
          }
        }
      }
    }
  }
}
