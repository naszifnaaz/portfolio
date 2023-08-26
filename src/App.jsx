import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Navbar } from "./components/common/Navbar";
import { TechStack } from "./components/techstack/TechStack";
import { Home } from "./components/home/Home";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <TechStack />
    </>
  );
}

export default App;
