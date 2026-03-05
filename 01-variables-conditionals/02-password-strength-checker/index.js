const textInput = document.getElementById("input-text");
const strengthChecker = document.getElementById("strength-checker");
const characterRule = document.getElementById("char-rule");
const upperCaseRule = document.getElementById("uppercase-rule");
const lowerCaseRule = document.getElementById("lowercase-rule");
const numberRule = document.getElementById("number-rule");
const specialCharacterRule = document.getElementById("special-char-rule");
const progressBar = document.getElementById("strenght-bar");

textInput.addEventListener("input", passwordChecker);

function passwordChecker() {
  let inputValue = textInput.value;
  let score = 0;
  if (inputValue.length >= 8) {
    characterRule.classList.add("pass");
    score++;
  } else {
    characterRule.classList.remove("pass");
  }

  if (/[A-Z]/.test(inputValue)) {
    upperCaseRule.classList.add("pass");
    score++;
  } else {
    upperCaseRule.classList.remove("pass");
  }

  if (/[a-z]/.test(inputValue)) {
    lowerCaseRule.classList.add("pass");
    score++;
  } else {
    lowerCaseRule.classList.remove("pass");
  }

  if (/[!@#$%^&*()_/+-={}[]|\:;"'<>,.?]/.test(inputValue)) {
    specialCharacterRule.classList.add("pass");
    score++;
  } else {
    specialCharacterRule.classList.remove("pass");
  }

  if (/[0-9]/.test(inputValue)) {
    numberRule.classList.add("pass");
    score++;
  } else {
    numberRule.classList.remove("pass");
  }

  progressBar.value = (score / 5) * 100;
}
