import React from "react";
import "../styles/Sidebar.css";

const Sidebar = ({ onToggleTheme, theme }) => {
  return (
    <nav className="sidebar" style={{ backgroundColor: "var(--sidebar-bg)" }}>
      <ul>
        <li><a href="#hero">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
        <li style={{ marginTop: "40px" }}>
          <button onClick={onToggleTheme} className="theme-btn">
            Switch to {theme === "light" ? "Dark" : "Light"} Mode
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;


