import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css";

const Register = ({ setToken }) => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [street, setStreet] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [error, setError] = useState(null);

  const handleRegister = async (e) => {
    e.preventDefault();
    
    try {
      const userData = {
        email,
        password,
        name: { firstname: firstName, lastname: lastName },
      }

      const response = await fetch("https://fakestoreapi.com/users", {
        method: "POST",
        body: JSON.stringify(userData),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to register");
      }

      const { token } = await response.json();
        localStorage.setItem("token", token);
        setToken(token);
        navigate("/account");
    }catch (error) {
      console.error("Registration failed:", error);
      setError("Registration failed, please try again.");
    }
  };

  return (
        <div className="register-container">
          <h1>Create Account</h1>
          {error && <p className="error-message">{error}</p>}
          <form className="form" onSubmit={handleRegister}>
            <label htmlFor="firstName">First Name:</label>
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            <label htmlFor="lastName">Last Name:</label>
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            <label htmlFor="email">Email:</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            <label htmlFor="password">Password:</label>
              <input
                type="password"
                value={password}
                onChange={(ev) => setPassword(ev.target.value)}
              />
            <button type="submit">
              Create Account
            </button>
          </form>
          <p>Have an Account?<a href="/login">Login</a></p> 
        </div>
  );
};

export default Register;
