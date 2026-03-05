const numberInput = document.getElementById("number-input");
const conversionType = document.getElementById("conversion-type");
const tempResult = document.getElementById("result");

numberInput.addEventListener("input", convertTemp);
conversionType.addEventListener("change", convertTemp);

function convertTemp() {
  let numberInputValue = Number(numberInput.value);
  let conversiontypeValue = conversionType.value;
  let result;

  if (conversiontypeValue === "c-to-f") {
    result = (numberInputValue * 9) / 5 + 32;
  } else {
    result = ((numberInputValue - 32) * 5) / 9;
  }

  tempResult.textContent = result;
  result = result.toFixed(2);
}
