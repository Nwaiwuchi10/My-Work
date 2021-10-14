import React, { useEffect, useState } from 'react'
import "./Footer.css"
import axios from 'axios'



const Footer = () => {
    const [task, setTask] = useState ([])



    useEffect (() =>{
        axios.get ('https://jsonplaceholder.typicode.com/posts')
        .then(res => {
            console.log(res)
            setTask(res.data)
        }
            ) 
            .catch (err => {
                console.log (err)
            }

            )
    }
    )
      

   



    return (

      

        <div className='footer'>
          
                   
            <ul className='container'>
                <marquee className='maq' alt='' >
            {task.map((tasks) => (<div className='gi' key={tasks.id} >  {tasks.id} </div>))}
            </marquee>
            </ul>
          



                    <div className='last'>
          
           <h5>NORDIC ROSE </h5>
            <div className='row'>
                <p className='p1'>By nurturing a close relationship with design and neighbouring subjects,</p>
                  <p className='p2'>  Nordic Rose strives to distill the essence of their combined beauty into  </p>
                  <p className='p3'> clarity of the tommorrow.  </p>
                  
                </div>
                <div className='href'>
                    <div className='a'>Twitter</div>
                    <div className='a'>Linkedin</div>
                    <div className='a'>RSS</div>
                </div>
                <div className='copy'>
            <p> &copy; 2021-2021 Nordic Rose Co.</p>
            <p>All rights reserved.</p>

                </div>
                </div>




            
        </div>
    )
}

export default Footer

