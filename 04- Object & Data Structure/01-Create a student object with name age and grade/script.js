const inputName = document.getElementById("name");
const ageInput = document.getElementById("age");
const gradeInput = document.getElementById("grade");
const createButton = document.getElementById("create-btn");
const resultOutput = document.getElementById("result");

createButton.addEventListener("click", objectCreator);

function objectCreator() {
  let name = inputName.value;
  let age = Number(ageInput.value);
  let grade = gradeInput.value;

  let studentDetails = {
    name: name,
    age: age,
    grade: grade,
  };

  resultOutput.textContent = JSON.stringify(studentDetails, null, 2);
}
