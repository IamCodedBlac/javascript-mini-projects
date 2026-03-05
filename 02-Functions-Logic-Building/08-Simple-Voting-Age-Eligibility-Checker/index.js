const ageInput = document.getElementById("age");
const checkButton = document.getElementById("check-btn");
const resultOutput = document.getElementById("result");

checkButton.addEventListener("click", ageChecker);

function ageChecker() {
  let age = Number(ageInput.value);

  if (!ageInput.value) {
    resultOutput.textContent = "Please enter your age";
    return;
  }

  if (age < 0) {
    resultOutput.textContent = "Invalid age";
    return;
  }

  if (age >= 18) {
    resultOutput.textContent = "Eligible";
  } else {
    resultOutput.textContent = "Not eligible";
  }
}
