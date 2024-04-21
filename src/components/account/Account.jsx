import React, { useState, useEffect } from "react";

const Account = ({ token }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/users/1", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch user data");
        }

        const userData = await response.json();
        setUser(userData);
      } catch (error) {
        setError("Error fetching user data");
      }
    };

    fetchUser();
  }, [token]);

  const handleDeleteAccount = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/users/1", {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error("Failed to delete user");
      }

      localStorage.removeItem("token");
      setUser(null);
    } catch (error) {
      setError("Error deleting account");
    }
  };

  if (!user) {
    return <p>Loading user data...</p>;
  }

  return (
    <div>
      <h1>Account Information</h1>
      <p>Email: {user.email}</p>
      <p>Username: {user.username}</p>
      {/* Display other user information as needed */}

      <button onClick={handleDeleteAccount}>Delete Account</button>
      {error && <p>{error}</p>}
    </div>
  );
};

export default Account;
