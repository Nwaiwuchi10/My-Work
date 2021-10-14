import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Nav from './components/Nav';
import Menu from './components/page 2/Menu';
import Header from './components/header/Header';
import Puyol from './components/Puyol/Puyol';
import Puyol2 from './components/Puyol/Puyol2';
import Puyol3 from './components/Puyol/Puyol3';
import Pix from './components/Work pix/Pix';
import Footer from './components/Footer';
import About from './components/Puyol/About';
import Events from './components/page 2/Events';
import Home from './components/page 2/Home';
import categories from './components/page 2/categories';



function App() {

  
//Togglelinks
const toggleinks = (id) => {
  console.log (id)
}


// Delete Menu
const deleteMenu = (id) => {
  console.log ('delete', id)
}

  return (
    <Router>
      
    <div className="App">
      
       {/* <Nav  
       onToggle={toggleinks} />
       <Route path ='/Events' component={Events} /> */}
       <Menu />
<Switch>
  <Route path='/Home'  component={Home} />
  <Route path='/categories' component={categories} />

</Switch>

       <Header/>
       
       
       

       <Route
      path='/'
      exact
      render ={(props) =>(
       <>
       
       </>
      
        
      )} />

       <Puyol/>
      <Puyol2/>
      <Puyol3/>
      <Pix />
       
      
      
      
      
      <Route path ='/about' component={About} />

    <Footer className='"whi"'
      vexName='images/whatsapp.png' />
      
    
    
    </div>

    
      
    </Router>
     
      

  
    
  );
}

export default App;
