const openButton = document.getElementById("open-btn");
const overlayer = document.getElementById("overlay");
const modalSection = document.getElementById("modal");
const closeButton = document.getElementById("close-btn");

openButton.addEventListener("click", opener);
closeButton.addEventListener("click", closer);
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closer();
  }
});
function opener() {
  modalSection.classList.remove("hidden");
  overlayer.classList.remove("hidden");
}

function closer() {
  modalSection.classList.add("hidden");
  overlayer.classList.add("hidden");
}
