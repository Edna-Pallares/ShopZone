import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css";

const Register = ({ setToken }) => {
  const navigate = useNavigate();

  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [message, setMessage] = useState(null);

  const handleSubmit = async (ev) => {
    ev.preventDefault();

    try {
      const response = await fetch("https://fakestoreapi.com/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ firstname, lastname, email, password }),
      });

      if (response.ok) {
        const result = await response.json();
        setMessage("Registered successfully. Please log in to your account");
        setToken(result.token);
        navigate("/login");
      } else {
        const errorData = await response.json();
        setError("Registration failed: ${errorData.message}`");
      }
    } catch (error) {
      setError("Something went wrong. Please try again.");
      console.error("Error during registration:", error);
    }
  };

  return (
    <div className="register-form">
      <h1>Create Account</h1>
      {error && <p className="error">{error}</p>}
      {message && <p>{message}</p>}
      <form className="form" onSubmit={handleSubmit}>
        <label className="firstname">
          First Name:
          <input
            type="text"
            value={firstname}
            onChange={(ev) => setFirstName(ev.target.value)}
            required
          />
        </label>
        <label className="lastname">
          Last Name:
          <input
            type="text"
            value={lastname}
            onChange={(ev) => setLastName(ev.target.value)}
            required
          />
        </label>
        <label className="email">
          Email address:
          <input
            type={"email"}
            value={email}
            onChange={(ev) => setEmail(ev.target.value)}
            required
          />
        </label>
        <label className="password">
          Password:
          <input
            type={"password"}
            value={password}
            onChange={(ev) => setPassword(ev.target.value)}
            required
          />
        </label>
        <button type="submit">Create Account</button>
      </form>
    </div>
  );
};

export default Register;
