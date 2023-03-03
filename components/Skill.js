import React, { useState } from "react";

import "../styles/skill.scss";

const App = () => {
  const skills = [
    {
      level: 0,
      cat: [
        {
          title: "frontend web dev.",
          item: ["HTML", "CSS", "JavaScript"],
        },
      ],
    },
    {
      level: 1,
      cat: [
        {
          title: "programming",
          item: ["Node.js"],
        },
        {
          title: "design",
          item: ["Figma"],
        },
        {
          title: "framework",
          item: ["React", "React Native", "Next.js"],
        },
      ],
    },
  ];
  return (
    <div className="skill-card">
      <div className="title">skills</div>
      {skills.map((e) => {
        return (
          <div className="flex-row">
            <div className="item-container">
            {e.cat.map((e) => {
              return (
                <div className="item-wrapper">
                  <div className="title--sub">{e.title}</div>
                  {e.item.map((e) => {
                    return <div className="item">{e}</div>;
                  })}
                </div>
              );
            })}
            </div>
            <div class="line"></div>
            <div className="vt">{e.level === 0 ? "familiar" : "capable"}</div>
          </div>
        );
      })}

      <div className=""></div>
    </div>
  );
};

export default App;
