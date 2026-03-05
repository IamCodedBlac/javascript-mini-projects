const keyInput = document.getElementById("key-input");
const checkButton = document.getElementById("check-btn");
const resultOutput = document.getElementById("result");

checkButton.addEventListener("click", checker);

function checker() {
  let KeyValue = keyInput.value;

  let detailOfSomething = {
    name: "Munir",
    age: 24,
    school: "UOL",
  };

  let readableOutput = detailOfSomething[KeyValue];

  if (KeyValue in detailOfSomething) {
    resultOutput.textContent = readableOutput;
  }
}
