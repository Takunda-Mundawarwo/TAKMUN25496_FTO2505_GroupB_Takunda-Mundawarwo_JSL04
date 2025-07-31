const tasks = [
  {
    id: 1,
    title: "Launch Epic Career",
    description: "Create a killer Resume",
    status: "todo",
  },
  {
    id: 2,
    title: "Master JavaScript",
    description: "Get comfortable with the fundamentals",
    status: "doing",
  },
  {
    id: 3,
    title: "Contribute to Open Source Projects",
    description:
      "Gain practical experience and collaborate with others in the software development community",
    status: "done",
  },
];

while (tasks.length < 6) {
  addTask();
  if (tasks.length == 6) {
    alert(
      "There are enough tasks on your board, please check them in the console."
    );
  }
}

console.log("All tasks: ", tasks);
logDoneTasks();

//Funciton prompts user for task details, creates task object and adds it to tasks array
function addTask() {
  //Creates unique, incremental ID based on the last task in the array
  const id = tasks[tasks.length - 1].id + 1;

  const title = prompt(`Enter task ${id} title:`);
  const description = prompt(`Enter task ${id} description:`);

  let taskStatus;
  let validStatus = false;

  //validates status input, repeatedly prompts the user until a valid status is entered.
  do {
    taskStatus = prompt(`Enter task ${id} status:`).toLowerCase();
    if (taskStatus != "todo" && taskStatus != "doing" && taskStatus != "done") {
      alert("Invalid status. Please enter 'todo', 'doing', or 'done'");
    } else {
      validStatus = true;
    }
  } while (validStatus == false);

  const task = {
    id: id,
    title: title,
    description: description,
    status: taskStatus,
  };
  tasks.push(task);
}

function logDoneTasks() {
  //Creates an array of done tasks by filtering the array "tasks"
  const doneTasks = tasks.filter((task) => task.status == "done");

  // Logs array of done tasks if there are completed tasks, otherwise logs motivational message
  if (doneTasks.length > 0) {
    console.log("Completed tasks: ", doneTasks);
  } else {
    console.log("No tasks completed, let's get to work!");
  }
}
