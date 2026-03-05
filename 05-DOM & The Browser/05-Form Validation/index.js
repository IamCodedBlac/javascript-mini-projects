const signupForm = document.getElementById("signup-form");
const nameInput = document.getElementById("name");
const nameError = document.getElementById("name-error");
const emailInput = document.getElementById("email");
const emailError = document.getElementById("email-error");
const passwordInput = document.getElementById("password");
const passwordError = document.getElementById("password-error");
const confirmInput = document.getElementById("confirm");
const confirmError = document.getElementById("confirm-error");
const submitButton = document.getElementById("submit-btn");
const successText = document.getElementById("success");

signupForm.addEventListener("submit", validateForm);
function validateForm(event) {
  event.preventDefault();
  nameError.textContent = "";
  emailError.textContent = "";
  passwordError.textContent = "";
  confirmError.textContent = "";
  successText.textContent = "";

  let isValid = true;

  let name = nameInput.value;
  let email = emailInput.value;
  let password = passwordInput.value;
  let confirmPassword = confirmInput.value;

  let trimmedName = name.trim();
  let trimmedEmail = email.trim();

  if (!trimmedName) {
    nameError.textContent = "Name is required";
    isValid = false;
  }
  if (!trimmedEmail) {
    emailError.textContent = "Email is required";
    isValid = false;
  } else if (!email.includes("@") || !email.includes(".")) {
    emailError.textContent = "Enter a valid email";
    isValid = false;
  }

  if (password.length < 8) {
    passwordError.textContent = "Password is invalid";
    isValid = false;
  }

  if (!confirmPassword) {
    confirmError.textContent = "Confirm password is required";
    isValid = false;
  } else if (password !== confirmPassword) {
    confirmError.textContent = "Passwords do not match";
    isValid = false;
  }

  if (isValid) {
    successText.textContent = "Form submitted successfully!";
  }
}
