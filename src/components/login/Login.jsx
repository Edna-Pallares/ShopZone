import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

const Login = ({ setToken }) => {
  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

  try {
    const response = await fetch("https://fakestoreapi.com/auth/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      throw new Error("Login failed");
    }

    const { token } = await response.json();
    localStorage.setItem("token", token);
      setToken(token);
      navigate("/account");
    } catch (error) {
      console.error("Login failed:", error);
      setError('Login failed, please try again');
    }
  };

  return (
    <div className="login-container">
      <h1 className="login-container">Log In</h1>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleLogin} className="form-container">
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </label>
        <br />
        {error && <p className="error-message">{error}</p>}
        <button type="submit">
          Login
        </button>
       </form>
       <p>
       Don't have an account? <a href="/register">Create Account</a>
       </p>
    </div>
  );
};

export default Login;
