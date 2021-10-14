import React, { } from 'react'
import  {  FaTrash} from 'react-icons/fa'


const Todos = ({task, onDelete}) => {
    
    
    // const handleDelete = (id) => {
    //      setTasks(tasks.filter((task) => task.id !==
    //    id))

         

//      function handleDelete (id) {
//    const removeItem = tasks.filter((todo)=>{
//         return todo.id !== id;
//       });
//       setTasks (removeItem);
//     }



    return (
        <div className='jaw'>
            
            <p> {task.text} <FaTrash onClick={()=>  onDelete(task.id)}
        style={{color:'white', backgroundColor:'rgb(201, 5, 152)',position:'absolute', left:'65%'}}/></p>
            <p> {task.date} </p>
        
            
        </div>
    )
}

export default Todos
