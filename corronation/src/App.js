import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Homepages from "./Components/Homepages";

import Login from "./Components/Login";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <switch>
          <Route path="/" component={Login} exact />
          <Route path="/Homepage" component={Homepages} exact />
        </switch>
        {/* <Homepages /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
