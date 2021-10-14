import { useState } from "react";
import "./App.css";
import Google from "./Components/Google";
import Login from "./Components/Login";
import Profile from "./Components/Profile";
import Ulist from "./Components/UI/Ulist";

import { LoginContext } from "./Context/LoginContext";

function App() {
  const [username, setUsername] = useState("");

  const [showProfile, setShowProfile] = useState(false);

  return (
    <div className="App">
      <header>
        <img className="App-logo" src="./pix.jpg" alt="" />
        <LoginContext.Provider
          value={{ username, setUsername, setShowProfile }}
        >
          {showProfile ? <Profile /> : <Login />}
        </LoginContext.Provider>
        <Ulist />
        <Google />
      </header>
    </div>
  );
}

export default App;
