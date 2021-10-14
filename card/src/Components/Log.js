import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import validator from "validator";

toast.configure();

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");

  const validateEmail = (e) => {
    const email = e.target.value;

    if (validator.isEmail(email)) {
      setEmailError("Valid Email:)");
    } else {
      setEmailError("Enter valid Email!");
    }
  };

  const history = useHistory();
  useEffect(() => {
    if (localStorage.getItem("user-info")) {
      history.push("./J");
    }
  }, []);
  const onSubmit = (e) => {
    console.warn(email, password);
    e.preventDefault();
    let data = { email: "eve.holt@reqres.in", password: "cityslicka" };
    console.log(data);
    axios
      .post("https://reqres.in/api/login", data)
      .then((res) => {
        if (res.data.token) {
          toast("Login sucessful");
          history.push("./J");
          localStorage.setItem("token", res.data.token);
        } else {
          toast("Login failed");
        }
      })
      .catch((error) => {
        console.error(error, "error while registering");
        toast("login failed");
      });
  };
  return (
    <div className="barber">
      <div className="border">
        <div className="mouth">
          <h1>ACCOUNT LOGIN</h1>
          <span>
            <img src="./pix/henry4.jpeg" alt="" />
          </span>
          <form>
            <div className="div-input">
              <label>
                <input
                  type="text"
                  placeholder="email"
                  onChange={(e) => validateEmail(e)}
                />
                <div style={{ color: "red" }}>{emailError}</div>
              </label>
            </div>
            <div className="div-input2">
              <label>
                <input
                  type="password"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </label>
            </div>

            <div className="div-botton">
              <button onClick={onSubmit} type="submit">
                <p>SIGN IN</p>
              </button>
              {/* <div style={{ color: "green" }}>{message}</div> */}
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

export default Login;
