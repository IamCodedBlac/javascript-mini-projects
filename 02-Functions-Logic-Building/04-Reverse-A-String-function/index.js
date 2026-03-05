const textInput = document.getElementById("text-input");
const reverseButton = document.getElementById("reverse-btn");
const resultOutput = document.getElementById("result");

reverseButton.addEventListener("click", reverser);
function reverser() {
  let textInputValue = textInput.value;
  let reverse = "";
  for (let i = textInputValue.length - 1; i >= 0; i--) {
    reverse = reverse + textInputValue[i];
  }
  resultOutput.textContent = reverse;

  console.log("clicked");
}
