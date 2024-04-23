import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = ({ setToken }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (ev) => {
    ev.preventDefault();

    try {
      const response = await fetch("https://fakestoreapi.com/auth/login", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        set(data.token);
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
      <div className="login-container">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
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
          {error && <p className="error-message">{error}</p>}
          <button type="submit">Login</button>
          <button onClick={() => navigate("/password")}>Reset Password</button>
          <button onClick={() => navigate("/register")}>Create Account</button>
        </form>
      </div>
  );
};

export default Login;
