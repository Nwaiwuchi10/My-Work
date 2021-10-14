import React, {useState} from 'react'
import "./Calc.css";



const Calc = () => {
    const [result, setResult] = useState("")


    const handleClick = (e) => {
        setResult(result.concat(e.target.name))
    }
        
    const Clear = () => {
        setResult("")
    }
    const backspace = () => {
        setResult(result.slice(0, -1))
    }
   
    const calculate =() => {
        try{
            setResult(eval(result).toString())
        } catch(err) {
            setResult("Error")
        }
       
    }
    return (
        <div className='Header'>
          <div className='cont'>

              <div className='btn'>
                  <input type='text' value ={result} />

             <button className='clear' name='clear' onClick={Clear}>Clear</button>
             <button className='C' name='backspace'   onClick={backspace}>C</button>
             <button className='divide' name='/' onClick={handleClick}>/</button>
             </div>
             <button className='seven' name='7' onClick={handleClick}>7</button>
             <button className='eight'name='8' onClick={handleClick}>8</button>
             <button className='nine' name='9' onClick={handleClick}>9</button>
             <button className='X' name='*' onClick={handleClick}>*</button>
             <button className='four' name='4' onClick={handleClick}>4</button>
             <button className='five' name='5' onClick={handleClick}>5</button>
             <button className='six' name='6' onClick={handleClick}>6</button>
             <button className='minus' name='-' onClick={handleClick}>-</button>
             <button className='one' name='1' onClick={handleClick}>1</button>
             <button className='two' name='2' onClick={handleClick}>2</button>
                <button className='three'name='3' onClick={handleClick}>3</button>
                <button className='plus' name='+' onClick={handleClick}>+</button>
                <button className='zero' name='0' onClick={handleClick}>0</button>
                <button className='dot' name='.' onClick={handleClick}>.</button>
                <button className='equals'   onClick={calculate}>=</button>
               

              
          </div>

            
            
        </div>
    )
}

export default Calc
