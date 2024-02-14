let addTask = document.getElementById('add-task');
const inputTask = document.getElementById('input-task');
const taskContainer = document.getElementById('task-container');

addTask.addEventListener('click',function(){
    let task = document.createElement('div');
    task.classList.add('task');

    let li = document.createElement('li');
    li.innerText = `${inputTask.value}`;
    task.appendChild(li);

    let checkBtn = document.createElement('button');
    checkBtn.innerHTML = '<i class = "fa-solid fa-check"></i>';
    checkBtn.classList.add('checkTask');
    task.appendChild(checkBtn);

    let deleteBtn = document.createElement('button');
    deleteBtn.classList.add('deleteTask');
    deleteBtn.innerHTML = '<i class = "fa-solid fa-trash-can"></i>';
    task.appendChild(deleteBtn);

    if(inputTask.value === "")
    {
        alert('Please enter a task');
    }
    else{
        taskContainer.appendChild(task);
    }

    inputTask.value = "";

    checkBtn.addEventListener('click',function(){
        // Once line-through is done, it cannot be reverted
        // checkBtn.parentElement.style.textDecoration = "line-through";

        // can revert between line-through and plain text
        checkBtn.parentElement.classList.toggle("checkToggle");
    });

    deleteBtn.addEventListener('click',function(e){
        // target = trash-can button here
        let target = e.target;
        // target.parentElement = task div, task div.parentElement = task container. 
        // To remove the task div, we need to remove it from it's parent container which is the task container
        target.parentElement.parentElement.remove();
    });
});