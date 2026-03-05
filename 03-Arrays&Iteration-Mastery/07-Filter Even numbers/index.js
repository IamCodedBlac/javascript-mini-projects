const numbersInput = document.getElementById("numbers");
const filterButton = document.getElementById("filter-btn");
const resultOutput = document.getElementById("result");

filterButton.addEventListener("click", filter);

function filter() {
  let array = numbersInput.value;
  array = array.split(",");
  let even = [];
  for (let i = 0; i < array.length; i++) {
    array[i] = Number(array[i]);
    if (array[i] % 2 === 0) {
      even.push(array[i]);
    }

    resultOutput.textContent = even;
  }
}
