const numbersInput = document.getElementById("numbers");
const ascendingButton = document.getElementById("asc-btn");
const descendingButton = document.getElementById("desc-btn");
const resultOutput = document.getElementById("result");

ascendingButton.addEventListener("click", sortAscending);
descendingButton.addEventListener("click", sortDescending);

function sortAscending() {
  let array = numbersInput.value;
  array = array.split(",");

  for (let i = 0; i < array.length; i++) {
    array[i] = Number(array[i]);
  }

  array.sort(function (a, b) {
    return a - b;
  });

  resultOutput.textContent = array;
}

function sortDescending() {
  let array = numbersInput.value;
  array = array.split(",");

  for (let i = 0; i < array.length; i++) {
    array[i] = Number(array[i]);
  }

  array.sort(function (a, b) {
    return b - a;
  });

  resultOutput.textContent = array;
}
