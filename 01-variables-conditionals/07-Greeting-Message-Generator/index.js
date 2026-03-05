const nameInput = document.getElementById("name-input");
const greetingoutput = document.getElementById("greeting-output");

nameInput.addEventListener("input", greetName);

function greetName() {
  let nameInputValue = nameInput.value;
  let time = new Date().getHours();

  if (time < 12) {
    greetingoutput.textContent = `Good Morning ${nameInputValue}!`;
  } else if (time < 17) {
    greetingoutput.textContent = `Good Afternoon ${nameInputValue}!`;
  } else {
    greetingoutput.textContent = `Good Evening ${nameInputValue}!`;
  }
}
