import { Input, Typography } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import React, { useState } from "react";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Login.css";
import * as ReactBootstrap from "react-bootstrap";

toast.configure();
const Login = () => {
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = (e) => {
    setLoading(true);
    e.preventDefault();
    let data = { email, password };
    console.log(data);
    axios
      .post("https://Kidsio.herokuapp.com/users/login", data)
      .then((res) => {
        console.log(res.data);
        setLoading(false);

        if (res.data.hasError === false) {
          toast("Login sucessful");
          history.push("./Homepage");
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
  };

  return (
    <div className="main-div">
      <div
        style={{ backgroundImage: "url(./images/hht.jpeg)" }}
        className="header-div"
      ></div>
      <img src="./images/logo.png" alt="" className="img-col" />
      <div className="log-border">
        <Typography variant="h4" className=" var">
          CRL Login
        </Typography>
        <Typography className="var2"> Sign In With Ur CRL Account</Typography>
        <div>
          <form onSubmit={onSubmit}>
            <label className="label1">Email Adress</label>
            <Input
              className="input1"
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label className="label2">Password</label>
            <Input
              className="input2"
              type="password"
              placeholder="******"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <FaEye className="icons" />
            {loading ? (
              <ReactBootstrap.Spinner animation="border" className="spin" />
            ) : (
              ""
            )}

            <button
              style={{ color: "white", border: "none" }}
              onClick={onsubmit}
              className="button-div"
            >
              Login
            </button>
          </form>
        </div>
        <Link to="">
          {" "}
          <Typography
            style={{ color: "rgba(185, 107, 228, 0.822)", marginTop: "1.7%" }}
          >
            Sign up instead
          </Typography>
        </Link>
        <Typography style={{ color: "rgb(26, 24, 24)", marginTop: "3%" }}>
          Forget your password?{" "}
          <span style={{ color: "rgba(185, 107, 228, 0.822)" }}>Reset</span>{" "}
        </Typography>
      </div>
    </div>
  );
};

export default Login;
