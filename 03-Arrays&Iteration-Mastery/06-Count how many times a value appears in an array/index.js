const numbersInput = document.getElementById("numbers");
const targetInput = document.getElementById("target");
const countButton = document.getElementById("count-btn");
const resultOutput = document.getElementById("result");

countButton.addEventListener("click", sorter);
function sorter() {
  let array = numbersInput.value;
  let target = Number(targetInput.value);

  array = array.split(",");
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    array[i] = Number(array[i]);

    if (array[i] === target) {
      count++;
    }
  }

  resultOutput.textContent = count;
}
