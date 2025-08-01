import { tasks } from "./data.js";

const toDoList = document.getElementById("todo-list");
const doingList = document.getElementById("doing-list");
const doneList = document.getElementById("done-list");
const tasksSection = document.getElementById("tasks-section");

const modal = document.getElementById("modal");
const closeBtn = document.getElementById("close-btn");
const modalTitle = document.getElementById("modal-title");
const modalDescription = document.getElementById("modal-description");
const modalStatus = document.getElementById("modal-status");

//render all tasks on app load
tasks.forEach(renderTask);

// Event delegation to open modal
tasksSection.addEventListener("click", function (event) {
  if (event.target.id === "task") {
    //Find selected task & open modal with task details
    const selectedTask = tasks.find(
      (task) => task.id == event.target.dataset.id
    );
    openModal(selectedTask);
  }
});

// Close modal
closeBtn.addEventListener("click", () => {
  modal.classList.add("hidden");
});

//Close modal on ESC key
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    modal.classList.add("hidden");
  }
});

/**
 * @typedef {Object} Task
 * @property {number} id - The tasks ID.
 * @property {string} title - The task's title.
 * @property {string} description - The task's description.
 * @property {string} status - The tasks's status - "todo", "doing, or "done".
 */
/**
 * Renders a task in its appropriate column on the document.
 * @param {Task} task - The task Object
 */
function renderTask(task) {
  const renderedTask = document.createElement("div");
  renderedTask.setAttribute("id", "task");

  renderedTask.innerText = task.title;
  renderedTask.setAttribute("data-id", task.id);

  switch (task.status) {
    case "todo":
      toDoList.appendChild(renderedTask);
      break;

    case "doing":
      doingList.appendChild(renderedTask);
      break;

    case "done":
      doneList.appendChild(renderedTask);
      break;
  }
}

/**
 * Opens the modal either populated with information for
 * a selected task, or with no task infomation.
 *
 * @param {Task} task - The Task Object (optional)
 */
function openModal(task = { title: "", description: "", status: "todo" }) {
  //populate modal
  modalTitle.value = task.title;
  modalDescription.value = task.description;
  modalStatus.selectedIndex = ["todo", "doing", "done"].indexOf(task.status);

  //show modal
  modal.classList.remove("hidden");
}
