import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Homepage from "./Pages/Homepages/Homepage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <switch>
          <Route path="/" component={Homepage} exact />
          {/* <Route path='/' component={} exact />
    <Route path='/' component={} exact /> */}
        </switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
