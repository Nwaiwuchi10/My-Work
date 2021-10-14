import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import ProductDetail from "./Components/ProductDetail";
import ProductListing from "./Components/ProductListing";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" components={ProductListing} exact />
          <Route path="/product/:productId" components={ProductDetail} exact />
          <Route>404 not Found!</Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
