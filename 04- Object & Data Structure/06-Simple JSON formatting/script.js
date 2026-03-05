const jsonInput = document.getElementById("json-input");
const formatButton = document.getElementById("format-btn");
const resultOutput = document.getElementById("result");

formatButton.addEventListener("click", formatter);

function formatter() {
  let jsonInputValue = jsonInput.value;

  let formattedValue = JSON.parse(jsonInputValue);

  let lastFormattedValue = JSON.stringify(formattedValue, null, 2);

  resultOutput.textContent = lastFormattedValue;
}
