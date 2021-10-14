import { Link } from 'react-router-dom'
import { FaTimes} from 'react-icons/fa'


const Nav = ( onToggle, onWrap ) => {

    const onClick = () => {
        console.log ('click')

    
    }
    

    return (
        
            <section style={{backgroundImage:"url(./images/jamb.jpeg) "}} 
            className='puyol-section'>
                <br></br>
                <img className='logo'
                src='images/djpix.jpeg' />
            <h1>One Beat <em>One Voice</em></h1>
            <div className='navbar'
            
            onClick={onClick}> <FaTimes  style={{color:'green', cursor:'pointer'}}  />
          <Link to='/'></Link>
                <div className="menu"></div>
                <div className="menu"></div>
                <div className="menu"></div>
            </div>

            
            
            <div class="links" id="links"
            onDoubleClick={() => onToggle(Link.id)} >
                    <ul className='nav-menu-items' >
                        <li className='navbar-toggle' ><Link to='/'>HOME</Link></li>
                        <li className='navbar-toggle' ><Link to='/'>CATEGORIES</Link></li>
                        <li className='navbar-toggle'><Link to='/'>About</Link></li>
                        <li className='navbar-toggle'><Link to='/'>Contact Us</Link></li>
                        
                    </ul>
                </div>
            
        
                </section>
        
    
    )
}

export default Nav
