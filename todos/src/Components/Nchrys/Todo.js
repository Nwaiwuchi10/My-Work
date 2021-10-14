import React from 'react'
import  {  } from 'react-icons/fa'
import "./Todo.css"
import { } from 'react-bootstrap'
import Todos from './Todos'


const Todo = ({task, tasks,  onDelete}) => {
  
    
    return (
        <div className='Header'>
          <div className='pis'>
            
          
          <div className='uy'> {tasks.map((task) => (<Todos  className='jaw' key={task.id} onDelete={onDelete} task= {task} />   
      ))} </div>

              


{/* <div className='uy'> {task.map((task) => (<Todos  className='jaw' key={task.id} >  {task.text}
      <FaTrash onClick={()=>handleDelete(task.id)}
        style={{color:'white', backgroundColor:'rgb(201, 5, 152)',position:'absolute', left:'65%'}}/></Todos>))} </div> */}

    
    </div>
            
        </div>
    )
}

export default Todo
