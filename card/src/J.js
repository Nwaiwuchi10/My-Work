import React, { useState } from "react";
import validator from "validator";

const J = () => {
  const [emailError, setEmailError] = useState("");

  const validateEmail = (e) => {
    const email = e.target.value;

    if (validator.isEmail(email)) {
      setEmailError("Valid Email:)");
    } else {
      setEmailError("Enter valid Email!");
    }
  };
  return (
    <div>
      <input
        type="text"
        placeholder="email"
        onChange={(e) => validateEmail(e)}
      />
      <div style={{ color: "red" }}>{emailError}</div>
    </div>
  );
};

export default J;
