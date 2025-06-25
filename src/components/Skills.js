// src/components/Skills.js
import React from "react";

const skills = [
  "PHP", "Laravel", "MySQL", "HTML", "CSS", "JavaScript", "React", "BI", "Talend", "Metabase"
];

const Skills = () => (
  <section id="skills">
    <div className="container">
      <h2>Skills</h2>
      <ul style={{ display: "flex", flexWrap: "wrap", gap: "10px", listStyle: "none", padding: 0 }}>
        {skills.map((skill, index) => (
          <li key={index} style={{ padding: "10px 20px", background: "#eee", borderRadius: "10px" }}>
            {skill}
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default Skills;
