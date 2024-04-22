import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css"

const API_URL = "https://fakestoreapi.com/auth/login";

const Login = ({ hangleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password}),
      });

      if (response.ok) {
        const data = await response.json();
        hangleLogin(data.token);
        localStorage.setItem("token", data.token);
        navigate("/");
      } else {
        setError("Invalid email or password. Please try again.");
      }
    } catch {
      setError("An error occurred during login. Please try again.");
      console.error("Login error:", error);
    }
  };

  return (
    <>
      <div className="form-container">
        <h2>Login</h2>
        <form className="login-form" onSubmit={handleSubmit}>
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
          </label>
          <br />
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            />
          </label>
          <br />
          {error && <p className="error-message">{error}</p>}
          <br />
          <button type="submit">Login</button>
          <br />
          <p>
            Don't Have an Account Yet? <a href="/register">Create Account</a>
          </p>
        </form>
      </div>
    </>
  );
};

export default Login;