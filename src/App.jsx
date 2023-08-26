import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Navbar } from "./components/common/Navbar";
import { TechStack } from "./components/techstack/TechStack";

function App() {
  return (
    <>
      <Navbar />
      <TechStack />
    </>
  );
}

export default App;
