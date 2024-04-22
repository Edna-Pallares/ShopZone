import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css";
const API_URL = "https://fakestoreapi.com/users";

const Register = ({ setToken }) => {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [message, setMessage] = useState("");

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ firstName, lastName, email, password }),
      });

      console.log("Response:", response);

      if (response.ok) {
        const data = await response.json();
        console.log("Registration Successful:", data);
        localStorage.setItem("token", data.token);
        setMessage(data.message);
        setToken(data.token);
        navigate("/login");
      } else {
        const result = await response.json();
        setError(result.error || "Registration failed");
        console.error("Registration failed:", result);
      }
    } catch (error) {
      setError("Something went wrong. Please try again.");
      console.error("Error during registration:", error);
    }
  };

  return (
    <div className="register-form">
      <h2>Create Account</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input
            type="text"
            value={firstName}
            onChange={(ev) => setFirstName(ev.target.value)}
          />
        </label>
        <br />
        <label>
          Last Name:
          <input
            type="text"
            value={lastName}
            onChange={(ev) => setLastName(ev.target.value)}
          />
        </label>
        <br />
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
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <br />
        <button type="submit">Sign Up</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Register;
