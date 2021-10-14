import React from 'react'
import { Link } from 'react-router-dom'

const Footer = (props) => {
    return (

            <section class="last-section">
        <div class="last-div">
            <br></br>
            <h1>CONTACT SUPPORT TEAM </h1>
            <img alt="image" src={props.vexName} />
            <br></br>
            <h2>08136757488</h2>
            <footer>copyright &copy;2021, Nchrys blog<p></p>
            <Link to='/About'>About</Link>
            </footer>
            </div>
        </section>
    
    )
}

export default Footer
