function addListeners() {
    var elements = document.querySelectorAll('#list-item')
    elements.forEach(element => {
        element.onmouseenter = onListHover;
        element.onmouseleave = onListItemLeave;
    });

    var deleteButtons = document.querySelectorAll('.delete-item');
    deleteButtons.forEach(element => {
        element.onclick = onDeleteItem;
    });

    var deleteButtons = document.querySelectorAll('.list-item-text');
    deleteButtons.forEach(element => {
        element.onclick = selectItem;
    }); 
}

addListeners();

document.querySelector('#header-add').onclick = showForm;
document.querySelector('#header-hide').onclick = hideForm;

document.querySelector('#newTaskForm').onsubmit = addListItem;

function onListHover(e) {
    e.target.querySelector('.delete-item').style.width = '50px';
}

function onListItemLeave(e) {
    e.target.querySelector('.delete-item').style.width = '0px'; 
}

function onDeleteItem(e) {
    const parent = e.target.parentElement;
    e.target.style.width = '0px';
    e.target.style.height = '0px';
    parent.style.width = '0px';
    parent.style.height = '0px';
    setTimeout(() => {
        parent.parentNode.removeChild(parent);
    }, 1000)
}

function selectItem(e) {
    e.target.style.opacity = '.3'
}

function showForm() {
    document.querySelector('#newTaskForm').style.height = '40px';
    document.querySelector('#header-add').style.display = 'none';
    document.querySelector('#header-hide').style.display = 'block';
}

function hideForm() {
    const input = document.querySelector('#input');
    document.querySelector('#newTaskForm').style.height = '0px';
    document.querySelector('#header-add').style.display = 'block';
    document.querySelector('#header-hide').style.display = 'none';
    input.value = '';
}

function addListItem(e) {
    e.preventDefault();
    const input = document.querySelector('#input');
    const text = input.value;
    input.value = '';

    if (text) {
        const list = document.querySelector('.list');
        const textNode = document.createTextNode(text);
        const listItem = document.createElement('div');
        listItem.setAttribute('id', 'list-item');
        const deleteItem = document.createElement('div');
        deleteItem.setAttribute('class', 'delete-item');
        const listItemText = document.createElement('div');
        listItemText.appendChild(textNode);
        listItemText.setAttribute('class', 'list-item-text');
        listItem.appendChild(deleteItem);
        listItem.appendChild(listItemText);
        list.appendChild(listItem);
        setTimeout(() => {
            listItem.style.width = '450px';
            listItem.style.height = '40px';
        }, 0);
        addListeners();
    }
}