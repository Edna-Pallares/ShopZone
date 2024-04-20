import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css";

const Register = ({ user, setUser, token, setToken }) => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [street, setStreet] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [successMessage, setSuccessMessage] = useState(null);
  const [error, setError] = useState(null);

  const submit = (ev) => {
    ev.preventDefault();
    register({
      email,
      password,
      name: { firstname: firstName, lastname: lastName },
      phone,
      address: {
        city,
        street,
        zipcode,
      },
    });
  };

  const register = async (credentials) => {
    try {
      const response = await fetch("https://fakestoreapi.com/users", {
        method: "POST",
        body: JSON.stringify(credentials),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const result = await response.json();
      if (response.ok) {
        window.localStorage.setItem("token", result.token);
        setSuccessMessage("Registration successful");
        setToken(result.token);
        setUser(email);
      } else {
        setError("Unable to register, please try again");
      }
    } catch (error) {
      console.log(error);
    }
  };

  function validateForm() {
    if (password.length < 5) {
      alert("Password must contain at least 5 characters.");
      return;
    }
    if (email === password) {
      alert("Password cannot be the same as email.");
      return;
    }
  }

  return (
    <>
      {token ? (
        <h1>Logged in as {user}</h1>
      ) : (
        <div className="login">
          <h1>Sign Up</h1>
          {error && <p>{error}</p>}
          {successMessage && <p>{successMessage}</p>}
          <form className="form" onSubmit={submit}>
            <label htmlFor="firstName" className="firstName">
              First Name:{" "}
              <input
                type="text"
                value={firstName}
                onChange={(ev) => setFirstName(ev.target.value)}
              />
            </label>
            <label htmlFor="lastName" className="lastName">
              Last Name:{" "}
              <input
                type="text"
                value={lastName}
                onChange={(ev) => setLastName(ev.target.value)}
              />
            </label>
            <label htmlFor="email" className="email">
              Email:{" "}
              <input
                type="email"
                value={email}
                onChange={(ev) => setEmail(ev.target.value)}
              />
            </label>
            <label htmlFor="phone" className="phone">
              Phone:{" "}
              <input
                type="tel"
                value={phone}
                onChange={(ev) => setPhone(ev.target.value)}
              />
            </label>
            <label htmlFor="city" className="city">
              City:{" "}
              <input
                type="text"
                value={city}
                onChange={(ev) => setCity(ev.target.value)}
              />
            </label>
            <label htmlFor="street" className="street">
              Street:{" "}
              <input
                type="text"
                value={street}
                onChange={(ev) => setStreet(ev.target.value)}
              />
            </label>
            <label htmlFor="zipcode" className="zipcode">
              Zipcode:{" "}
              <input
                type="text"
                value={zipcode}
                onChange={(ev) => setZipcode(ev.target.value)}
              />
            </label>
            <label htmlFor="password" className="password">
              Password:{" "}
              <input
                type="password"
                value={password}
                onChange={(ev) => setPassword(ev.target.value)}
              />
            </label>
            <button
              type="submit"
              onClick={() => {
                validateForm();
              }}
            >
              Sign Up
            </button>
          </form>
          <p>Have an Account?</p>
          <button onClick={() => navigate("/Login")}>Log in</button>
        </div>
      )}
    </>
  );
};

export default Register;
