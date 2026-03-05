const firstArray = document.getElementById("array1");
const secondArray = document.getElementById("array2");
const mergeButton = document.getElementById("merge-btn");
const resultOutput = document.getElementById("result");

mergeButton.addEventListener("click", merger);

function merger() {
  let theFirstArray = firstArray.value;
  let theSecondArray = secondArray.value;
  let merged = [];
  theFirstArray = theFirstArray.split(",");
  theSecondArray = theSecondArray.split(",");

  for (let i = 0; i < theFirstArray.length; i++) {
    theFirstArray[i] = Number(theFirstArray[i]);
    merged.push(theFirstArray[i]);
  }

  for (let i = 0; i < theSecondArray.length; i++) {
    theSecondArray[i] = Number(theSecondArray[i]);
    merged.push(theSecondArray[i]);
  }

  resultOutput.textContent = merged;
}
