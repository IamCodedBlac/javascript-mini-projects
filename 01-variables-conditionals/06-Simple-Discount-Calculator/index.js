const priceInput = document.getElementById("price-input");
const discountedInput = document.getElementById("discount-input");
const finalPrice = document.getElementById("final-price");
const savedAmount = document.getElementById("saved-amount");

priceInput.addEventListener("input", calculateDiscount);
discountedInput.addEventListener("input", calculateDiscount);

function calculateDiscount() {
  let priceInputValue = Number(priceInput.value);
  let discountedInputValue = Number(discountedInput.value);

  let discountAmount = (priceInputValue * discountedInputValue) / 100;
  let finalPriceResult = priceInputValue - discountAmount;

  finalPrice.textContent = finalPriceResult.toFixed(2);
  savedAmount.textContent = discountAmount.toFixed(2);
}
