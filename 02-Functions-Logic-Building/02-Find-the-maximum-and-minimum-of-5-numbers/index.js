const numbers = document.querySelectorAll(".num");
const maxValue = document.getElementById("max-value");
const minValue = document.getElementById("min-value");

numbers.forEach(function (input) {
  input.addEventListener("input", calculate);
});

function calculate() {
  let values = [];

  numbers.forEach(function (input) {
    values.push(Number(input.value));
  });

  let max = Math.max(...values);
  let min = Math.min(...values);

  maxValue.textContent = max;
  minValue.textContent = min;
}
