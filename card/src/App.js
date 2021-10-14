import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Container from "./Components/Container";
import Login from "./Components/Login";
import Log from "./Components/Log";
import J from "./J";

function App() {
  const addForm = (task) => {
    console.log(task);
  };

  return (
    <BrowserRouter>
      <div>
        <switch>
          <Route path="/" component={() => <Login onAdd={addForm} />} exact />
          <Route path="/Container" component={Container} exact />
        </switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
