import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Navbar } from "./components/common/Navbar";
import { Home } from "./routes/Home";

function App() {
  return (
    <>
      <Navbar />
      {/* <Home /> */}
    </>
  );
}

export default App;
