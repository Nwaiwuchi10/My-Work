import React,{ useState } from "react";
import *as FaIcons  from "react-icons/fa";
import *as AiIcons from 'react-icons/ai';
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import { IconContext } from 'react-icons'

const Menu = () => {

   const [sidebar, setSidebar] = useState (false)

   const showSidebar = () => setSidebar (!sidebar)

    return (
    
             <section style={{backgroundImage:"url(./images/jamb.jpeg) "}} 
            className='puyol-section'>
                <br></br>
                <img className='logo'
                src='images/djpix.jpeg' />
            <h1>One Beat <em>One Voice</em></h1>
         

         
         <>
         <IconContext.Provider  value={{color: 'green'}}>
         <div className='navbar-1'>
         <Link to="#" className='menu-bars'>
             <FaIcons.FaBars onClick={showSidebar} />
         </Link>
         </div>
         <nav className ={sidebar ? 'nav-menu active' : 'nav-menu' } >
             <ul className ='nav-menu-items' onClick={showSidebar}  >
                 <li className ='nav-menu-items'>
                     <Link to="#" className='menu-bars'>
                         <AiIcons.AiOutlineClose />
                     </Link>
                 </li>
                 {SidebarData.map((item, index) =>{
                     return (
                         <li key ={index} className={item.cName}>
                             <Link to ={item.path}>
                                 {item.path}
                                 <span> {item.title} </span>
                             </Link>
                         </li>
                     )
                 }  ) }
             </ul>
         </nav>
         </IconContext.Provider>
         </>
         </section>
    )
}

export default Menu
