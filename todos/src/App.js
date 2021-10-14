import {  } from "react-icons/fa";
import AddTodo from "./Components/Nchrys/AddTodo";
import Todo from "./Components/Nchrys/Todo";
import React, {useState} from "react";





function App() {

  const  [tasks, setTasks] = useState ([
    {
      day: 1,
      text: 'Developers forum',
      date: '20th june 2021 at 2:30pm',
      reminder: 'true',
    },
    {
        day: 2,
        text: 'Church meeting',
        date: '10th january 2021 at 8:30pm',
        reminder: 'true',
    },
    {
        day: 3,
        text: 'Come to my house',
        date: '10th febuary 2021 at 1:00pm',
        reminder: 'false',
    }
])

   const handleDelete = (id) => {
        setTasks(tasks.filter((task) => task.id !==
     id))
   }
     
// function handleDelete (id) {
//     const removeItem = tasks.filter((todo)=>{
//        return todo.id !== id;
//      });
//       setTasks (removeItem);
//     }


  // AddTodo
const addForm = (task) =>{
  console.log("add task");
  const id = Math.floor(Math.random() * 
  1000) + 1
  const newTask = { id, ...task}
  setTasks([...tasks,newTask])
}

  return (
    <div >

      <AddTodo onAdd={addForm} />

        <Todo tasks={tasks} onDelete={handleDelete}/> 

     
    </div>
  );
}

export default App;
