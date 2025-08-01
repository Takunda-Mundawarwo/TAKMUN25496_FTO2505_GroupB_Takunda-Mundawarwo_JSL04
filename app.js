import { tasks } from "./data.js";

const toDoList = document.getElementById("todo-list");
const doingList = document.getElementById("doing-list");
const doneList = document.getElementById("done-list");

//render all tasks on app load
tasks.forEach(renderTask);

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
  renderedTask.classList.add("task");

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
