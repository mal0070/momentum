const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

//const toDos = []; //app이 시작할 때, 빈 array로 항상 시작함. newTodo만 저장중
let toDos = [];

function saveToDos(){
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos)); //array를 하나의 text로 저장하므로, 하나하나 text로 저장하기 위해 하나하나 string으로 바꾸어야함
}

function deleteToDo(event){
    const li = event.target.parentElement;
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id)); //클릭한 id를 delete한 array로 update
    li.remove(); //html 화면상에서 remove
    saveToDos(); //localStorage에 새로운 array로 save
}

function paintToDo(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id; //obj의 id
    const span = document.createElement("span");
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click",deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    span.innerText = newTodo.text; //obj의 text
    toDoList.appendChild(li);
}


function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text: newTodo,
        id:Date.now()
    };
    toDos.push(newTodoObj);//array에 obj저장
    paintToDo(newTodoObj); //html에서 id사용하기 위해 obj형태로 전달
    saveToDos(); 
}

toDoForm.addEventListener("submit",handleToDoSubmit);


const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos; //restored (입력된 todo를 계속 localStorage에 보존)
    parsedToDos.forEach(paintToDo);
}

