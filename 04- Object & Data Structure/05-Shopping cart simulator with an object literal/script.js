const itemNameInput = document.getElementById("item-name");
const itempriceInput = document.getElementById("item-price");
const addButton = document.getElementById("add-btn");
const removeNameInput = document.getElementById("remove-name");
const removeButton = document.getElementById("remove-btn");
const totalButton = document.getElementById("total-btn");
const resultOutput = document.getElementById("result");
const cartViewOutput = document.getElementById("cart-view");
addButton.addEventListener("click", adder);
removeButton.addEventListener("click", remover);
totalButton.addEventListener("click", total);
let objectDetails = {};

function adder() {
  let name = itemNameInput.value;
  let price = Number(itempriceInput.value);

  objectDetails[name] = price;

  cartViewOutput.textContent = JSON.stringify(objectDetails, null, 2);
}

function remover() {
  let removeName = removeNameInput.value;
  delete objectDetails[removeName];

  cartViewOutput.textContent = JSON.stringify(objectDetails, null, 2);
}

function total() {
  let totalResult = 0;
  for (let foods in objectDetails) {
    totalResult = totalResult + objectDetails[foods];
  }

  resultOutput.textContent = totalResult;
}
