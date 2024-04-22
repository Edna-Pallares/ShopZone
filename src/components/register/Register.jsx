import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css";
const API_URL = "https://fakestoreapi.com/users";

const Register = ({ user, setUser, token, setToken }) => {
  const navigate = useNavigate();

  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [message, setMessage] = useState(null);

  const submit = (ev) => {
    ev.preventDefault();
    register({ firstname, lastname, email, password });
  };

  const register = async (credentials) => {
    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify(credentials),
      });

      const result = await response.json();
      if (response.ok) {
        window.localStorage.setItem("token", result.token);
        setMessage(
          "Registered successfully. Please log in to your account"
        );
        setToken(result.token);
        setUser(email);
      } else {
        setError("Registration failed:");
      }
    } catch (error) {
      setError("Something went wrong. Please try again.");
      console.error("Error during registration:", error);
    }
  };

  function validateForm() {
    if (password.length < 8) {
      alert(
        "Password must be at least 8 characters"
      );
      return;
    }
  }

  return (
    <>
      {token ? (
        <h1>Logged in as {user}</h1>
      ) : (
        <div className="register-form">
          <h1>Create Account</h1>
          {error && <p className="error">{error}</p>}
          {setMessage && <p>{setMessage}</p>}
          <form className="form" onSubmit={submit}>
          <label htmlFor={"firstname"} className="firstname">
              First Name{" "}
              <input
                type="text"
                value={firstname}
                onChange={(ev) => setFirstName(ev.target.value)}
              />
            </label>
            <label htmlFor={"lastname"} className="lastname">
              Last Name{" "}
              <input
                type="text"
                value={lastname}
                onChange={(ev) => setLastName(ev.target.value)}
              />
            </label>
            <label htmlFor={"email"} className="email">
              Email address:{" "}
              <input
                type={"email"}
                value={email}
                onChange={(ev) => setEmail(ev.target.value)}
              />
            </label>
            <label htmlFor={"password"} className="password">
              Password:{" "}
              <input
                type={"password"}
                value={password}
                onChange={(ev) => setPassword(ev.target.value)}
              />
            </label>
            <button
              disabled={!email || !password}
              type="submit"
              onClick={() => {
                validateForm();
              }}
            >
              Create Account
            </button>
          </form>
        </div>
      )}
    </>
  );
}

export default Register