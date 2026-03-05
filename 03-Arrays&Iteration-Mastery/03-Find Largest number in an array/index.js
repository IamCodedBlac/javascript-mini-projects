const numbersInput = document.getElementById("numbers");
const findButton = document.getElementById("find-btn");
const resultOutput = document.getElementById("result");

findButton.addEventListener("click", numberFinder);

function numberFinder() {
  let array = numbersInput.value.split(",");

  let largest = Number(array[0]);

  if (!array) {
    resultOutput.textContent = "please enter numbers";
    return;
  }

  for (let i = 1; i < array.length; i++) {
    let current = Number(array[i]);
    if (current > largest) {
      largest = current;
    }
  }

  resultOutput.textContent = largest;
}
