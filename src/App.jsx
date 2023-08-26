import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Navbar } from "./components/common/Navbar";
import { TechStack } from "./components/techstack/TechStack";
import { Home } from "./components/home/Home";
import { Projects } from "./components/projects/Projects";
import { Footer } from "./components/common/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <TechStack />
      <Projects />
      <Footer />
    </>
  );
}

export default App;
