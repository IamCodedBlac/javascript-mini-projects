const userNameInput = document.getElementById("username-input");
const userNameOutput = document.getElementById("username-output");

userNameInput.addEventListener("input", userNameFormatter);
function userNameFormatter() {
  let userName = userNameInput.value;
  let trimmedUsername = userName.trim();
  let lowerCasedUSername = trimmedUsername.toLowerCase();
  let finalOutcome = lowerCasedUSername.replace(/\s+/g, "_");
  userNameOutput.textContent = finalOutcome;
}
