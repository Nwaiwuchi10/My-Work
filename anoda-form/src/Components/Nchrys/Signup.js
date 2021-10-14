import React from "react";
import "./Signup.css";
import { FaAddressCard, FaLock, FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useFormik } from "formik";

const Signup = () => {
  const validate = (values) => {
    const errors = {};

    if (!values.firstname) {
      errors.firstname = "Required";
    } else if (values.firstname.length < 3) {
      errors.firstname = "Must be 3 characters or more";
    }
    if (!values.lastname) {
      errors.lastname = "Required";
    } else if (values.lastname.length < 3) {
      errors.lastname = "Must be 3 characters or more";
    }
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
    if (!values.confirmpassword) {
      errors.confirmpassword = "Required";
    } else if (values.confirmpassword !== values.password) {
      errors.confirmpassword =
        "Second password doesn't match with values.password";
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      date: "",
      email: "",
      password: "",
      confirmpassword: "",
    },
    validate,

    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className="header1">
      <div>
        <h1> Welcome </h1>
        <h2>Sign up if you dont have an account</h2>
        <br />
      </div>

      <div className="forms">
        <form onSubmit={formik.handleSubmit}>
          <div className="forms1">
            <label className="label" htmlFor="first name">
              {" "}
              First Name{" "}
            </label>
            <FaUserAlt className="icon" />
            <input
              onChange={formik.handleChange}
              value={formik.values.firstname}
              type="text"
              id="firstname"
              name="firstname"
            />
            {formik.errors.firstname ? (
              <div className="error">{formik.errors.firstname} </div>
            ) : null}
          </div>

          <div className="forms1">
            <label className="label1" htmlFor="last name">
              {" "}
              Last Name{" "}
            </label>
            <FaUserAlt className="icon" />
            <input
              onChange={formik.handleChange}
              value={formik.values.lastname}
              type="text"
              id="lastname"
              name="lastname"
            />
          </div>
          {formik.errors.lastname ? (
            <div className="error">{formik.errors.lastname} </div>
          ) : null}
          <br />

          <div className="forms2">
            <label className="label2" htmlFor="date">
              {" "}
              Date{" "}
            </label>
            <input
              onChange={formik.handleChange}
              value={formik.values.date}
              type="date"
              id="date"
              name="date"
            />
          </div>
          {formik.errors.date ? (
            <div className="error">{formik.errors.date} </div>
          ) : null}

          <div className="forms3">
            <label className="label3" htmlFor="email">
              {" "}
              Email{" "}
            </label>
            <FaAddressCard className="icon" />
            <input
              onChange={formik.handleChange}
              value={formik.values.email}
              type="text"
              id="email"
            />
          </div>
          {formik.errors.email ? (
            <div className="error">{formik.errors.email} </div>
          ) : null}

          <div className="forms4">
            <label className="label4" htmlFor="password">
              {" "}
              Password{" "}
            </label>
            <FaLock className="icon" />
            <input
              onChange={formik.handleChange}
              value={formik.values.password}
              type="password"
              id="password"
              name="password"
            />
          </div>
          {formik.errors.password ? (
            <div className="error">{formik.errors.password} </div>
          ) : null}

          <div className="forms5">
            <label className="label5" htmlFor="confirmpassword">
              {" "}
              Confirm Password{" "}
            </label>
            <FaLock className="icon" />
            <input
              onChange={formik.handleChange}
              value={formik.values.confirmpassword}
              type="password"
              id="confirmpassword"
              name="confirmpassword"
            />
          </div>
          {formik.errors.confirmpassword ? (
            <div className="error">{formik.errors.confirmpassword} </div>
          ) : null}

          <Link to="./Login">
            <p>Sign In here</p>
          </Link>

          <div className="forms6">
            <label> </label>
            <input type="Submit" value="Sign Up" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
