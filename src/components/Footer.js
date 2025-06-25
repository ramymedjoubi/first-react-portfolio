// src/components/Footer.js
import React from "react";

const Footer = () => (
  <footer style={{ textAlign: "center", padding: "20px", background: "#222", color: "#fff" }}>
    &copy; {new Date().getFullYear()} Medjoubi Mohamed Ramy
  </footer>
);

export default Footer;
