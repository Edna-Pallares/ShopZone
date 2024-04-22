import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Password.css";

const Password = ({ setUser, setToken }) => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim() !== "") {
      setSubmitted(true);
    } else {
      setSubmitted(false);
    }
  };

  const handleNavigateHome = () => {
    navigate("/");
  };

  return (
    <>
      {submitted ? (
        <>
          <p className="email-sent">Email sent!</p>
          <button onClick={handleNavigateHome}>Go to Home</button>
        </>
      ) : (
        <form className="form" onSubmit={handleSubmit}>
      <h3>
        Enter your email address and you'll get an email to reset your password.
      </h3>
          <label htmlFor="email" className="email">
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <button type="submit">Submit</button>
        </form>
      )}
    </>
  );
}

export default Password