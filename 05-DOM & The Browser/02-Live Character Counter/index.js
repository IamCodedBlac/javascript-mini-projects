const textInput = document.getElementById("text-input");
const resultOutput = document.getElementById("result");

textInput.addEventListener("input", liveCounter);

function liveCounter() {
  let text = textInput.value;
  let counter = text.length;

  resultOutput.textContent = counter;
}
