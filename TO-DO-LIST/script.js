const taskForm = document.getElementById('task-form');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list'); 

taskForm.addEventListener('submit', function (event) {
    // to prevent the default form submission behavior (page reload)
    event.preventDefault();
    const taskText = taskInput.value.trim();
    if (taskText === '') {
        return;
    }
    const li = document.createElement('li');
    li.textContent = taskText;
     li.draggable = true; // now lists are draggable
    const removeButton = document.createElement('button');

    removeButton.textContent = 'Remove';
    removeButton.className = 'remove-btn';
    li.appendChild(removeButton);
    taskList.appendChild(li);

    // clear the input field
    taskInput.value = '';
});

// attach one click listener on taskList for remove buttons
taskList.addEventListener('click', function(event) {
    // to check if the clicked element has the remove-btn class
    if (event.target.classList.contains('remove-btn')) {
        const litoremove = event.target.parentElement;
        litoremove.remove();
    }
});
taskList.addEventListener('dragstart', function(event) {
    
    event.target.classList.add('dragging'); //  event.target. is the li and we will add some css to it
});
taskList.addEventListener('dragend', function(event) {
    // clean up by removing the 'dragging' class
    event.target.classList.remove('dragging');
});

taskList.addEventListener('dragover', function(event) {
    // prevent the browser's default behavior to allow a drop
    event.preventDefault();
});

// listen for the drop event
taskList.addEventListener('drop', function(event) {
    // get the element being dragged
    const draggedElement = document.querySelector('.dragging');

    // get the element we are dropping onto
    const targetElement = event.target;
    
    targetElement.before(draggedElement);
});