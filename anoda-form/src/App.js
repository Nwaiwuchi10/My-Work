import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Bottom from "./Components/Bottom";
import Login from "./Components/Nchrys/Login";
import Signup from "./Components/Nchrys/Signup";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Login />
        {/* <switch>
          <Route path="/" component={Bottom} exact />
          <Route path="/Signup" component={Signup} exact />
          <Route path="/Login" component={Login} exact />
        </switch> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
