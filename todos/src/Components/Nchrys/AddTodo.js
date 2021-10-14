import { useState } from "react"
import  "./AddTodos.css"



const AddTodo = ({onAdd}) => {
    const [text, setText] =useState('')
    const [reminder, setReminder] =useState(false)

const onSubmit = (e) => {
    e.preventDefault()

    if (!text) {
        alert('please add a task')
        return 
    }
    
    onAdd ({text,  reminder })

    setText('')
    setReminder(false)

}




    return (
        <form className='add-form' 
        onSubmit={onSubmit}>
            <div className='form'>
            
                <input type='text' placeholder='AddTodo' value={text} onChange={(e)=>setText(e.target.value)} />
           </div>
          
        
                
                <input type='checkbox' className='in'
                checked={reminder}
                 value={reminder}
                onChange = {(e) => setReminder (e.currentTarget.checked)} />
           
           <input type ='Submit' value='Add' className='btn' id='j' />
            
        </form>
    )
}

export default AddTodo
