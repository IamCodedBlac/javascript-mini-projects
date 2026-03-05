const numberInput = document.getElementById("numbers");
const calculateButtons = document.getElementById("calculate-btn");
const resultOutput = document.getElementById("result");

calculateButtons.addEventListener("click", arraySummer);
function arraySummer() {
  let number = numberInput.value;
  let array = number.split(",");
  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    sum = sum + Number(array[i]);
    resultOutput.textContent = sum;
  }
}
