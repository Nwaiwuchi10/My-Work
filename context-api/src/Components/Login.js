import React, { useContext } from "react";
import { LoginContext } from "../Context/LoginContext";

const Login = () => {
  const { setUsername, setShowProfile } = useContext(LoginContext);

  return (
    <div className="barber">
      <div className="border">
        <div className="mouth">
          <h1>ACCOUNT LOGIN</h1>
          <form>
            <div className="div-input">
              <label>
                <input
                  type="text"
                  placeholder="username"
                  onChange={(e) => {
                    setUsername(e.target.value);
                  }}
                />
              </label>
            </div>
            <div className="div-input2">
              <label>
                <input type="password" placeholder="Password" />
              </label>
            </div>

            <div className="div-botton">
              <button
                onClick={() => {
                  setShowProfile(true);
                }}
                type="submit"
              >
                <p>LOGIN</p>
              </button>
            </div>
          </form>
        </div>
      </div>
      <br />
    </div>
  );
};

// CSS in JS

export default Login;
