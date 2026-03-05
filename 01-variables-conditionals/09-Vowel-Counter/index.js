const textInput = document.getElementById("text-input");
const vowelCount = document.getElementById("vowel-count");

textInput.addEventListener("input", vowelCounter);

function vowelCounter() {
  let textInputValue = textInput.value.toLowerCase();
  let count = 0;

  for (let i = 0; i < textInputValue.length; i++) {
    if (
      textInputValue[i] === "a" ||
      textInputValue[i] === "e" ||
      textInputValue[i] === "i" ||
      textInputValue[i] === "o" ||
      textInputValue[i] === "u"
    ) {
      count++;
    }
  }

  vowelCount.textContent = count;
}
