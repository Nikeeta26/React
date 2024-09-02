import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';

export default function TodoList(){
    let [todos, setTodos] = useState([{task: "Sample task", id:uuidv4(),isDone:false}]);
    let [newtodo, setNewtodo] = useState("");

    let addNewTask = ()=>{
       console.log("we have to add new task")
       setTodos((prevTodos)=>{
        return [...prevTodos,{task:newtodo,id:uuidv4(),isDone:false}];
       });
       setNewtodo("");
    }
    
    let updateTask= (event)=>{
   setNewtodo(event.target.value);
    }

    let deleteTodo = (id)=>{
        console.log("task todo delete:",id);
         setTodos((previousTodos) => previousTodos.filter((todo)=> todo.id != id));
        // console.log(copy);
    }

    let upperCaseAll = () => {
       // console.log("uppercase");
       setTodos((previousTodos) => {
        return previousTodos.map((todo) => {
           return {
            ...todo,
            isDone:true,
           // task:todo.task.toUpperCase()
           };
          
        });
    }
);
   //  console.log(newArr);
    }

   let markAsDone = (id) => {
       // console.log("uppercase");
       setTodos((previousTodos) => {
        return previousTodos.map((todo) => {
            if(todo.id == id){
                 return {
            ...todo,
             isDone: true,
           };
            } 
        else{
            return todo;
        }
        });
    }
);
   //  console.log(newArr);
}

    return (
        <div>
            <input placeholder="add a task" value={newtodo}  onChange={updateTask}></input>
            <br></br>
            <br></br>
            <button onClick={addNewTask}>Add Task</button>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <hr></hr>
            <h4>Todo List</h4>
            <ul>
                {/* {todos.map((todo)=>{
                      return <li>{todo}</li>
                })} */}

                {todos.map((todo)=>(
                         <li key={todo.id}>
                            <span style={todo.isDone ? {textDecoration:"line-through"}:{}}>{todo.task}</span>
                            &nbsp;&nbsp;&nbsp;
                            <button onClick={()=>deleteTodo(todo.id)}>delete</button>
                            &nbsp;&nbsp; 
                             <button onClick={()=>markAsDone(todo.id)}>Done Task</button>
                              
                        </li>
                    ))}

            </ul>
            <button onClick={upperCaseAll}>upperCase All</button>
        </div>
    )
}