const store={
    todos:[{
        id:"1",
        title:"New Task-1",
        completed:false,
    },
    {
        id:"2",
        title:"New Task-2",
        completed:true,
    },
    {
        id:"3",
        title:"New Task-3",
        completed:false,
    },

    ],
    name:"Sanket",
  
};

const storeHandler={
   get(target,property){
        
    
        console.log("oh you are trying to get ", property);
        return target[property];
   },

   set(target,property,value){
    console.log("inside set");
    target[property]=value;
    // localStorage(property,value);
    if(property==="todos"){
        window.dispatchEvent(new Event("todoschange"))
    }
      
      localStorage.setItem("store",JSON.stringify(store))
      return true;
   },


};



// traps
//! note:- proxy only work with objects
const storeProxy = new Proxy(store,storeHandler);


function addTodo(newTodo){
    storeProxy.todos=[...storeProxy.todos,newTodo];
}

function deleteTodo(id){
    storeProxy.todos=storeProxy.todos.filter(todo=>todo.id!==id);
}

function toggleCompleted(id,completed){
    storeProxy.todos=storeProxy.todos.map(todo=>{
        if(todo.id === id){
            return {...todo,completed:true};
        }
        else{
            return todo;
        }
    })
}

export {addTodo,deleteTodo,toggleCompleted};
export default storeProxy;

