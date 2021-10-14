import { Link } from "react-router-dom"

const Header = () => {
    return (
    
        <section>
            <hr></hr>
         
         <div className='book-text'>   
                <h1>BOOK A DISC JOCKEY (DJ)</h1>
                <p>BOOK A DJ FOR AN IMO BASED EVENT</p>
                 <p>A ROOM FOR CLIENT'S TO BOOK A DJ FOR AN IMO REGIONAL EVENT</p>
                <p><strong>IN QUOTE, The event must take place in imo state vacinity</strong></p>
                </div>
                <div className='jaga' 
                style={{backgroundImage:"url(./images/nad.jpg) "}}>
               <Link className='book-href'  to='/Events'>BOOK HERE</Link>
                </div>
                </section>

    )
}

// CSS in JS

export default Header
