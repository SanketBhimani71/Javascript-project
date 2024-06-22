import rendor from "./rendor.js";
import store from "./store.js";
import {addTodo,deleteTodo,toggleCompleted} from "./store.js";

window.addEventListener("todoschange",()=>{
    console.log("event fired");
   rendor();
});

const storeFromLocalStorage=JSON.parse(localStorage.getItem("store"));

if(storeFromLocalStorage?.todos.length>0)
    {
        store.todos=storeFromLocalStorage.todos;
    }
    else{
        localStorage.setItem("store",JSON.stringify(store))
        rendor();
    }

// store.todos=[];
// store.todos.push("Item5");
rendor();

console.log(store.name);
store.name="Sahil";
console.log(store.name);

//! form get

const form=document.querySelector("#form");
const todoTitleInput=document.querySelector(".todo-title-input");
const todos=document.querySelector(".todos");
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    const todotitle=todoTitleInput.value;
    const newTodo={id: crypto.randomUUID(), title: todotitle, completed:false};
    console.log(newTodo);
    addTodo(newTodo);
});

todos.addEventListener("click",(e)=>{
    if(e.target.classList.contains("delete-todo-button")){
        const id=e.target.closest(".todo").dataset.id;
        deleteTodo(id);
    }
})

todos.addEventListener("change",(e)=>{

    const target=e.target;
       if(target.classList.contains("todo-checkbox")){
            const id=e.target.closest(".todo").dataset.id;
            const completed = target.checked;
             toggleCompleted(id,completed);

       }
});









