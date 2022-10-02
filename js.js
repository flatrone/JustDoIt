loadTasks();
let addTaskButton = document.querySelector('.header button');

addTaskButton.addEventListener('click', () => {
    let task = document
        .querySelector('.header input')
        .value;

    addTask(task);

    saveTasks();
})

function loadTasks() {
    if (localStorage.length === 0) {} else {
        let tasks = JSON.parse(localStorage.getItem('1'))

        for (let i of tasks) {
            addTask(i);
        }
    }
}

function saveTasks() {
    localStorage.clear();

    let allTasks = document.querySelectorAll('.main input');
    let tasks = [];
    for (let i of allTasks) {
        tasks.push(i.value);
    }

    allTasks = JSON.stringify(tasks);

    localStorage.setItem('1', allTasks);
}

function addTask(task) {
    let taskField = document.createElement('div');
    let input = document.createElement('input');
    let delTaskButton = document.createElement('button');

    taskField
        .classList
        .add('field__task')
    input.value = task;
    delTaskButton.innerHTML = '-';

    taskField.appendChild(input);
    taskField.appendChild(delTaskButton);

    let main = document.querySelector('.main');
    main.appendChild(taskField);

    delTaskButton.addEventListener('click', () => {
        taskField.remove();
        saveTasks();
    })
}