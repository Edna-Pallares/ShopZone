import { useState } from "react";
import React from "react";
import Navigations from "./components/Navigation";
import NavRoutes from "./components/NavRoutes";

function App() {
  const [token, setToken] = useState(null);

  return (
    <>
      <div id="container">
        <Navigations token={token} setToken={setToken} />
        <NavRoutes token={token} setToken={setToken} />
      </div>
    </>
  );
}

export default App;
