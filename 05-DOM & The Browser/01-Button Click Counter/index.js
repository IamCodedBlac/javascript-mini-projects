const clickButton = document.getElementById("click-btn");
const resultOutput = document.getElementById("result");

clickButton.addEventListener("click", clicker);
let click = 0;
function clicker() {
  click = click + 1;

  resultOutput.textContent = click;
}
