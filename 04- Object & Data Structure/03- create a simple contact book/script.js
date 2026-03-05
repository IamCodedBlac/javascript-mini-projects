const addNameInput = document.getElementById("add-name");
const addPhoneInput = document.getElementById("add-phone");
const addButton = document.getElementById("add-btn");
const findNameInput = document.getElementById("find-name");
const findButton = document.getElementById("find-btn");
const resultOutput = document.getElementById("result");

addButton.addEventListener("click", adding);
findButton.addEventListener("click", finding);
let contactDirectory = {};
function adding() {
  let name = addNameInput.value;
  let phoneNumber = addPhoneInput.value;

  contactDirectory[name] = phoneNumber;
}
function finding() {
  let searchName = findNameInput.value;
  if (searchName in contactDirectory) {
    resultOutput.textContent = contactDirectory[searchName];
  } else {
    resultOutput.textContent = "Contact not found";
  }
}
