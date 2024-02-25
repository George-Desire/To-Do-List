const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

function addItem() {
    const todoText = todoInput.value.trim();
    if (todoText === '') return;
    
    const li = document.createElement('li');
    li.textContent = todoText;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('delete-btn');
    deleteButton.onclick = function() {
        li.remove();
    };

    const updateButton = document.createElement('button');
    updateButton.textContent = 'Update';
    updateButton.classList.add('update-btn');
    updateButton.onclick = function() {
        const newText = prompt('Enter new text:', li.textContent);
        if (newText !== null && newText.trim() !== '') {
            li.textContent = newText.trim();
        }
    };

    li.appendChild(deleteButton);
    li.appendChild(updateButton);
    todoList.appendChild(li);
    
    todoInput.value = '';
}
