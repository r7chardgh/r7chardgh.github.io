import React, { useState } from "react";

import "../styles/skill.scss";

const App = () => {
  const skills = [
    {
      level: 0,
      cat: [
        {
          title: "frontend web dev.",
          item: [
            {
              name: "HTML",
              rate: 80,
            },
            {
              name: "CSS",
              rate: 80,
            },
            {
              name: "JavaScript",
              rate: 80,
            },
          ],
        },
      ],
    },
    {
      level: 1,
      cat: [
        {
          title: "programming",
          item: [
            {
              name: "Node.js",
              rate: 0,
            },
          ],
        },
        {
          title: "design",
          item: [
            {
              name: "Figma",
              rate: 0,
            },
          ],
        },
        {
          title: "framework",
          item: [
            {
              name: "React",
              rate: 0,
            },
            {
              name: "React Native",
              rate: 0,
            },
            {
              name: "Next.js",
              rate: 0,
            },
          ],
        },
      ],
    },
  ];
  return (
    <div className="skill-card">
      <div className="title">skills</div>
      {skills.map((e) => {
        return (
          <div className="flex-row" key={e.level}>
            <div className="cat-container">
              {e.cat.map((e) => {
                return (
                  <div className="item-container" key={e.title}>
                    <div className="title--sub">{e.title}</div>
                    {e.item.map((e) => {
                      return (
                        <div className="item" key={e.name}>
                          <div className="item__name">{e.name}</div>
                          {e.rate > 0 ? (
                            <div className="item__rate">
                              <div className="volume"></div>
                            </div>
                          ) : null}
                        </div>
                      );
                    })}
                  </div>
                );
              })}
            </div>
            <div className="line"></div>
            <div className="level">
              {e.level === 0 ? "familiar" : "capable"}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default App;
