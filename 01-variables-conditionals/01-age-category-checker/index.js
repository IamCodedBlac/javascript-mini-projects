const labelWithAge = document.getElementById("ageLabel");
const inputWithAge = document.getElementById("ageInput");
const buttonForAge = document.getElementById("ageButton");
const result = document.getElementById("result_value");

buttonForAge.addEventListener("click", ageChecker);
function ageChecker() {
  let ageValue = Number(inputWithAge.value);
  if (ageValue <= 12) {
    result.textContent = "Child";
  } else if (ageValue <= 17) {
    result.textContent = "Teen";
  } else if (ageValue <= 59) result.textContent = "Adult";
  else {
    result.textContent = "Senior";
  }
}
