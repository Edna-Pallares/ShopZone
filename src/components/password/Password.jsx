import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Password() {
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
      <h3>Enter your email and we will send you an email to reset your password.</h3>
      {submitted ? (
        <>
          <p>Email sent!</p>
          <button onClick={handleNavigateHome}>Go to Home</button>
        </>
      ) : (
        <form className="form" onSubmit={handleSubmit}>
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
