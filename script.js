document.getElementById('addTaskBtn').addEventListener('click', addTask);
document.getElementById('taskInput').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        addTask();
    }
});

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Boş bırakmayınız!');
        return;
    }

    const taskList = document.getElementById('taskList');

    // Create a container for the task row
    const taskRow = document.createElement('div');
    taskRow.className = 'task-row';
    taskRow.style.display = 'flex';
    taskRow.style.gap = '5px'; // 5px space between containers
    taskRow.style.marginBottom = '10px'; // Spacing between rows

    // First container: Task text (500px wide)
    const taskContainer = document.createElement('div');
    taskContainer.className = 'task-container';
    taskContainer.style.width = '500px';
    taskContainer.textContent = taskText;
    taskRow.appendChild(taskContainer);

    // Second container: Delete button (100px wide)
    const deleteContainer = document.createElement('div');
    deleteContainer.className = 'delete-container';
    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';
    deleteBtn.textContent = 'Sil';
    deleteBtn.addEventListener('click', function () {
        taskList.removeChild(taskRow);
    });
    deleteContainer.appendChild(deleteBtn);
    taskRow.appendChild(deleteContainer);

    // Third container: Arrow buttons (100px wide)
    const arrowContainer = document.createElement('div');
    arrowContainer.className = 'arrow-container';
    const arrowButtons = document.createElement('div');
    arrowButtons.className = 'arrow-buttons';

    const upArrow = document.createElement('button');
    upArrow.textContent = '↑';
    upArrow.addEventListener('click', moveUp);

    const downArrow = document.createElement('button');
    downArrow.textContent = '↓';
    downArrow.addEventListener('click', moveDown);

    arrowButtons.appendChild(upArrow);
    arrowButtons.appendChild(downArrow);
    arrowContainer.appendChild(arrowButtons);
    taskRow.appendChild(arrowContainer);

    // Add the task row to the task list
    taskList.appendChild(taskRow);

    // Clear input
    taskInput.value = '';
}

function moveUp() {
    const taskRow = this.closest('.task-row');
    const prevTaskRow = taskRow.previousElementSibling;

    if (prevTaskRow) {
        taskRow.parentNode.insertBefore(taskRow, prevTaskRow);
    }
}

function moveDown() {
    const taskRow = this.closest('.task-row');
    const nextTaskRow = taskRow.nextElementSibling;

    if (nextTaskRow) {
        taskRow.parentNode.insertBefore(nextTaskRow, taskRow);
    }
}

// "Sağ tık ile menü açma" özelliği devre dışı
document.addEventListener('contextmenu', (event) => {
    event.preventDefault();
});