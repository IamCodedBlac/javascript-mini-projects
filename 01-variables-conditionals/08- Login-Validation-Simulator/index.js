const userInput = document.getElementById("username-input");
const passwordInput = document.getElementById("password-input");
const loginButton = document.getElementById("login-btn");
const loginResult = document.getElementById("login-result");

loginButton.addEventListener("click", Validator);

function Validator() {
  let userInputValue = userInput.value;
  let passwordInputValue = passwordInput.value;

  if (userInputValue === "admin" && passwordInputValue === "1234") {
    loginResult.textContent = "Successful";
  } else {
    loginResult.textContent = "Invalid, try again!";
  }
}
