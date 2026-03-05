const objectInput = document.getElementById("object-input");
const countButton = document.getElementById("count-btn");
const resultOutput = document.getElementById("result");

countButton.addEventListener("click", counter);

function counter() {
  let count = 0;
  let objectInputValue = objectInput.value;

  let formattedJSON = JSON.parse(objectInputValue);

  for (let items in formattedJSON) {
    count = count + formattedJSON[items];
  }

  resultOutput.textContent = count;
}
