import React from "react";
import NavBar from "./NavBar";
import ProjectList from "./ProjectList";
import { projects } from "../data/projects"; // Import project data

function App() {
  const navLinks = ["Home", "About", "Projects"]; // Example nav links

  return (
    <div>
      <NavBar links={navLinks} />
      <ProjectList projects={projects} />
      {/* Render other components as needed */}
    </div>
  );
}

export default App;
