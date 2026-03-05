const itemNameInput = document.getElementById("item-name");
const numberInput = document.getElementById("item-price");
const addButton = document.getElementById("add-btn");
const totalButton = document.getElementById("total-btn");
const cartViewInput = document.getElementById("cart-view");
const resultOutput = document.getElementById("result");

addButton.addEventListener("click", adding);
totalButton.addEventListener("click", total);
let cartDirectory = {};
function adding() {
  let itemName = itemNameInput.value;
  let price = Number(numberInput.value);

  cartDirectory[itemName] = price;
  console.log(cartDirectory);

  cartViewInput.textContent = JSON.stringify(cartDirectory, null, 2);
}

function total() {
  let total = 0;

  for (let item in cartDirectory) {
    total = total + cartDirectory[item];
  }

  resultOutput.textContent = total;
}
