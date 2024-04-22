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

  const handleSubmit = async (ev) => {
    ev.preventDefault();
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
              onChange={(ev) => {
                setEmail(ev.target.value);
              }}
            />
          </label>
          <br />
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={(ev) => {
                setPassword(ev.target.value);
              }}
            />
          </label>
          <br />
          {error && <p className="error-message">{error}</p>}
          <br />
          <button type="submit">Login</button>
          <br />
          <button onClick={() => navigate("/password")}>
            Reset Password
          </button>
          <button onClick={() => navigate("/register")}>
            Create Account
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;