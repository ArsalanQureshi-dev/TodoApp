function addTodo() {
    var todoList = document.getElementById('todoList');
    var todoInput = document.getElementById('todoInput').value;

    var todoItem = document.createElement('li');
    todoItem.setAttribute('class', 'list-group-item d-flex justify-content-between align-items-center')

    var todoTextTag = document.createElement('span');
    var todoText = document.createTextNode(todoInput);
    todoTextTag.appendChild(todoText)

    var todoDone = document.createElement('button');
    todoDone.setAttribute('class', 'btn btn-primary')
    todoDone.setAttribute('onclick', 'todoDone(this)')

    var todoDoneText = document.createTextNode('Mark as Done');
    todoDone.appendChild(todoDoneText)

    todoItem.appendChild(todoTextTag);
    todoItem.appendChild(todoDone)

    todoList.appendChild(todoItem)
    document.getElementById('todoInput').value = ''
}

function todoDone(e) {
    e.previousSibling.setAttribute('class', 'text-decoration-line-through')
}