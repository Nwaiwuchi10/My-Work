import axios from "axios";
import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();

const Login = ({ onAdd }) => {
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    let data = { email, password };
    console.log(data);
    axios
      .post("https://Kidsio.herokuapp.com/users/login", data)
      .then((res) => {
        console.log(res.data);

        if (res.data.hasError === false) {
          toast("Login sucessful");
          history.push("./Container");
          localStorage.setItem("token", res.data.token);
        } else {
          toast("Login failed");
        }
      })

      .catch((error) => {
        console.log(error, "error while registering");
        toast("login failed");
      });

    if (!email) {
      alert("please add a task");
    }

    onAdd({ email, password });
    setEmail("");
    setPassword("");
  };

  return (
    <div className="barber">
      <div className="border">
        <div className="mouth">
          <h1>ACCOUNT LOGIN</h1>
          <span>
            <img src="./pix/henry4.jpeg" alt="" />
          </span>
          <form onSubmit={onSubmit}>
            <div className="div-input">
              <label>
                <input
                  type="text"
                  placeholder="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </label>
            </div>
            <div className="div-input2">
              <label>
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </label>
            </div>

            <div className="div-botton">
              <button onClick={onsubmit} type="submit">
                <p>SIGN IN</p>
              </button>
            </div>

            <div className="div-span">
              <span>Forgot </span>
              <span className="span2">User name / password?</span>
              <Link to="Signup">
                {" "}
                <h4>SIGN UP</h4>{" "}
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

// CSS in JS

//

export default Login;
