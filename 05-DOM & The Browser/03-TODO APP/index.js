const plusButton = document.getElementById("plus-button");
const overlayWrapper = document.getElementById("overlay-wrapper-container");
const closeButton = document.getElementById("close-button");
const inputSpaceforTask = document.getElementById("text-space");
const successmessage = document.querySelector(".just-got-task-submitted p");
const inputError = document.getElementById("input-error");
const clickedSolo = document.getElementById("solo");
const clickedCollaborative = document.getElementById("collaborative");
const showCollaborator = document.getElementById("collaborative-section");
const cancelButton = document.getElementById("cancel");
const PriorityChecked = () => {
  return document.querySelector('input[name="priority"]:checked');
};
const notesArea = document.getElementById("for-discription");
const deadlineDateAndTime = document.getElementById("date-and-time");
const selectedActivity = () => {
  return document.querySelector('input[nam e="activity"]:checked');
};
const saveButton = document.getElementById("save");
const nameUsed = document.getElementById("collaboration");
const taskList = document.getElementById("task-list");
const taskListContainer = document.querySelector(".task-list-container");
const collabChips = document.getElementById("collab-chips");
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
if (tasks.length > 0) taskListContainer.classList.add("show");
const pendingCollaborators = [];

tasks.forEach(renderTask);
let pendingTitle = "";

plusButton.addEventListener("click", modalOpener);
function modalOpener() {
  const inputCaught = inputSpaceforTask.value.trim();
  if (!inputCaught) {
    inputError.textContent = "Input error: space cannot be left blank";
    inputError.style.display = "block";
    return;
  }

  overlayWrapper.classList.add("overlay-visible");
  overlayWrapper.classList.remove("overlay-hidden");

  successmessage.innerHTML = `<span class="success-green"> ✅ "${inputCaught}"</span> has been added`;
  pendingTitle = inputCaught;
  inputSpaceforTask.value = "";
}
inputSpaceforTask.addEventListener("input", () => {
  inputError.style.display = "none";
  inputError.textContent = "";
});

closeButton.addEventListener("click", ButtonCloser);
function ButtonCloser() {
  if (overlayWrapper.classList.contains("overlay-visible")) {
    overlayWrapper.classList.remove("overlay-visible");
    overlayWrapper.classList.add("overlay-hidden");
  }
}

function changeState() {
  if (clickedCollaborative.checked) {
    showCollaborator.classList.remove("collaborative-section-hidden");
  } else {
    showCollaborator.classList.add("collaborative-section-hidden");
  }
}

clickedSolo.addEventListener("change", changeState);
clickedCollaborative.addEventListener("change", changeState);

changeState();

saveButton.addEventListener("click", buttonSaver);

function buttonSaver() {
  const priorityCheckedValue = PriorityChecked().value;
  const selectedActivityValue = selectedActivity().value;
  let collaboratorsData = [];
  if (selectedActivityValue === "collaboration") {
    collaboratorsData = pendingCollaborators;
  }

  let task = {
    title: pendingTitle,
    deadline: deadlineDateAndTime.value,
    activity: selectedActivityValue,
    priority: priorityCheckedValue,
    note: notesArea.value.trim(),
    collaborators: collaboratorsData,
  };

  tasks.push(task);

  localStorage.setItem("tasks", JSON.stringify(tasks));
  renderTask(task);
  taskListContainer.classList.add("show");
  overlayWrapper.classList.remove("overlay-visible");
  overlayWrapper.classList.add("overlay-hidden");
}

function renderTask(task) {
  const row = document.createElement("div");
  row.classList.add("task-item");

  const titleE1 = document.createElement("span");
  titleE1.classList.add("task-title");
  titleE1.textContent = task.title;

  const badge = document.createElement("span");
  badge.classList.add("priority-badge", task.priority);
  badge.textContent = task.priority.toUpperCase();

  row.append(titleE1, badge);
  taskList.appendChild(row);
}

function renderCollaborators() {
  collabChips.innerHTML = "";

  pendingCollaborators.forEach((person, index) => {
    const chip = document.createElement("span");
    chip.className = "chip";
    chip.textContent = person;

    const x = document.createElement("button");
    x.type = "button";
    x.textContent = "×";
    x.addEventListener("click", () => {
      pendingCollaborators.splice(index, 1);
      renderCollaborators();
    });

    chip.appendChild(x);
    collabChips.appendChild(chip);
  });
}

nameUsed.addEventListener("keydown", (e) => {
  if (e.key !== "Enter") return;
  e.preventDefault();

  const person = nameUsed.value.trim();
  if (!person) return;

  // prevent duplicates (optional but nice)
  const exists = pendingCollaborators.some(
    (p) => p.toLowerCase() === person.toLowerCase(),
  );
  if (exists) {
    nameUsed.value = "";
    return;
  }

  pendingCollaborators.push(person);
  nameUsed.value = "";
  renderCollaborators();
});

nameUsed.addEventListener("keydown", (e) => {
  if (e.key !== "Enter") return;
  e.preventDefault();

  const name = nameUsed.value.trim();

  if (!name) return;
  pendingCollaborators.push(name);
  nameUsed.value = "";
});
cancelButton.addEventListener("click", () => {
  overlayWrapper.classList.remove("overlay-visible");
  overlayWrapper.classList.add("overlay-hidden");
});
