import { Link } from "react-router-dom";
import React, { useState, payload } from "react";
import { FaLock, FaUserAlt } from "react-icons/fa";
import { useHistory } from "react-router-dom";
import { useFormik } from "formik";
import "./Login.css";

const Login = () => {
  const validate = (values) => {
    const errors = {};

    if (!values.email) {
      errors.email = "Required";
    } else if (values.email.length < 5) {
      errors.email = "Must be 5 characters or more";
    }
    if (!values.date) {
      errors.date = "Required";
    }
    if (!values.password) {
      errors.password = "Required";
    } else if (values.password.length < 6) {
      errors.password = "Must be 6 characters or more";
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate,

    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  const handleHistory = () => {
    // history.push("/Homepage");
  };

  const onSubmit = ({ history }) => {
    const payload = {
      email: "eve.holt@reqres.in",
      password: "cityslicka",
    };
  };
  fetch("https://reqres.in/api/login", useState, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "content-type": "application/json",
    },
    body: JSON.stringify(payload),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);

      if (data.successful) {
        // history.push("/Homepage");
      }
    });

  return (
    <div className="header">
      <div>
        <h1> Welcome </h1>
        <h2>Sign in to your account</h2>
        <br></br>
      </div>

      <div className="form">
        {/* <form onSubmit={onSubmit}> */}
        <form onSubmit={formik.handleSubmit}>
          <div className="form1">
            <label>
              <FaUserAlt className="icon" />
              <input
                type="text"
                placeholder="Email"
                id="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </label>
          </div>
          {formik.errors.email ? (
            <div className="error">{formik.errors.email} </div>
          ) : null}
          <br></br>
          <div className="form2">
            <label>
              <FaLock className="icon" />
              <input
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                id="password"
                value={password}
              />
            </label>
          </div>
          {formik.errors.password ? (
            <div className="error">{formik.errors.password} </div>
          ) : null}

          <Link to="./form2">
            <p>Sign Up here</p>
          </Link>
          <Link to="./Forgetpass">
            {" "}
            <p className="shift">Forgotten password?</p>{" "}
          </Link>

          <div className="form3">
            <label>
              <input onClick={onsubmit} type="Submit" value="Sign in" />
            </label>
          </div>
        </form>
      </div>
    </div>
  );
};

// CSS in JS

export default Login;
