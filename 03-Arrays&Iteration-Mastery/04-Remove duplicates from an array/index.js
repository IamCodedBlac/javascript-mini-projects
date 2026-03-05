const numbersInput = document.getElementById("numbers");
const removeButton = document.getElementById("remove-btn");
const resultOutput = document.getElementById("result");

removeButton.addEventListener("click", remover);

function remover() {
  let array = numbersInput.value;
  array = array.split(",");
  let unique = [];

  for (let i = 0; i < array.length; i++) {
    let current = Number(array[i]);
    if (!unique.includes(current)) {
      unique.push(current);
    }
  }

  resultOutput.textContent = unique;
}
