const numberA = document.getElementById("num-a");
const numberB = document.getElementById("num-b");
const operation_dropdown = document.getElementById("operation");
const result = document.getElementById("result");

function add(a, b) {
  let sum = a + b;
  return sum;
}

function subtract(a, b) {
  let minus = a - b;
  return minus;
}

function multiply(a, b) {
  let multiplication = a * b;
  return multiplication;
}

function division(a, b) {
  let divide = a / b;
  return divide;
}

numberA.addEventListener("input", calculate);
numberB.addEventListener("input", calculate);
operation_dropdown.addEventListener("change", calculate);
function calculate() {
  let resultValue;
  let numberAValues = Number(numberA.value);
  let numberBValues = Number(numberB.value);

  if (operation_dropdown.value === "add") {
    let resultValue = add(numberAValues, numberBValues);
    result.textContent = resultValue;
  } else if (operation_dropdown.value === "subtract") {
    let resultValue = subtract(numberAValues, numberBValues);
    result.textContent = resultValue;
  } else if (operation_dropdown.value === "multiply") {
    let resultValue = multiply(numberAValues, numberBValues);
    result.textContent = resultValue;
  } else if (operation_dropdown.value === "divide") {
    let resultValue = division(numberAValues, numberBValues);
    result.textContent = resultValue;
  }
}
