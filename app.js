//Task List app

let formEle = document.querySelector('#task-form');
formEle.addEventListener('submit',function (){


    let inputEle = document.querySelector('#task-input');
    let taskList = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : [];
    let task = inputEle.value.trim();

    taskList.unshift(task);

    localStorage.setItem('tasks',JSON.stringify(taskList));


    displayTasks();


})



let displayTasks = function (){
    let taskListEle = document.querySelector('#tasks-list');
    let taskList = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : [];
    if(taskList.length!==0){
        let items = '';
        for(let task of taskList){
            items = items + `<li  style="background-color:black" class="list-group-item text-white my-1">
                        <span>${task}</span>
                        <button class=" float-right"><i class="fas fa-trash-alt "></i></button>
                    </li>`
        }
        taskListEle.innerHTML=items;
    }
    else{
        taskListEle.innerHTML='';
    }

}

let taskListEle = document.querySelector('#tasks-list');
taskListEle.addEventListener('click',function (event){
    let selectedEle = event.target;
    if(selectedEle.classList.contains('fa-trash-alt')){
        let taskList = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : [];
        let listEle = selectedEle.parentElement.parentElement;
        let taskItem = listEle.innerText;
        taskList = taskList.filter(function (task){
            return taskItem.trim()!==task.trim();
        });
        localStorage.setItem('tasks',JSON.stringify(taskList));
        displayTasks();

    }
})

displayTasks();