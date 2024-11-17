const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const clearCompletedBtn = document.getElementById("clearCompletedBtn");
const LI = "li";
const CHNG = "change";
const INPUT = "input";
var tasks = [];

addListeners();

function addListeners() {
	addTaskBtn.addEventListener("click", addTask);
	clearCompletedBtn.addEventListener("click", clearCompletedTasks);
}

function addTask() {
	debugger;
	const taskText = taskInput.value.trim();
	if (taskText !== "") {
		tasks.push({ text: taskText});
		taskInput.value = "";
		displayTasks();
	}
	//addListeners();
}

function displayTasks() {
	taskList.innerHTML = "";
	tasks.forEach((task, index) => {
		const li = document.createElement(LI);
		li.innerHTML = `<input type="checkbox" id="task-${index}" ${task.completed ? "checked" : ""}>
			<label for="task-${index}">${task.text}</label>`;
		li.querySelector(INPUT).addEventListener(CHNG, () => toggleTask(index));
		taskList.appendChild(li);
	});
}

function toggleTask(index) {
	tasks[index].completed = !tasks[index].completed;
	displayTasks();
}

function clearCompletedTasks() {
	tasks = tasks.filter(task => !task.completed);
	displayTasks();
	//addListeners();
}
