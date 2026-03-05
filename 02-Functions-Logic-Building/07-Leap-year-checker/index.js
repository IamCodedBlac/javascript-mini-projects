const yearInput = document.getElementById("year");
const checkButton = document.getElementById("check-btn");
const resultOutput = document.getElementById("result");

checkButton.addEventListener("click", leapFinder);

function leapFinder() {
  let year = Number(yearInput.value);

  if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
    resultOutput.textContent = "Leap Year";
  } else {
    resultOutput.textContent = "Not a Leap year";
  }
}
