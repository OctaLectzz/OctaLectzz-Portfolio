// import "/src/assets/css/home/skill.css";
import React from "react";
import skill from "/src/data/skills.json";

export const Skills = () => {
  return (
    <section className="skillContainer" id="skill">
      <h2 className="section__title-2">
        <span>My Skills :</span>
      </h2>
      <div className="subtitle">
        <span>
          "Elevating Possibilities: A Snapshot of My Proficiencies and
          Expertise."
        </span>
      </div>

      {/* FRONTEND DEVELOPMENT */}
      <h2 className="title">FrontEnd Development :</h2>
      <div className="content">
        <div className="skills">
          {skill.Frontend.map((skill, id) => {
            return (
              <div key={id} className="skill">
                <div className="skillImageContainer">
                  <img
                    src={skill.imageSrc}
                    alt={skill.title}
                    className="image__skill"
                  />
                </div>
                <p className="title__skill">{skill.title}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* BACKEND DEVELOPMENT */}
      <h2 className="title">Backend Development :</h2>
      <div className="content">
        <div className="skills">
          {skill.Backend.map((skill, id) => {
            return (
              <div key={id} className="skill">
                <div className="skillImageContainer">
                  <img
                    src={skill.imageSrc}
                    alt={skill.title}
                    className="image__skill"
                  />
                </div>
                <p className="title__skill">{skill.title}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* OTHERS */}
      <h2 className="title">Others :</h2>
      <div className="content">
        <div className="skills">
          {skill.Others.map((skill, id) => {
            return (
              <div key={id} className="skill">
                <div className="skillImageContainer">
                  <img
                    src={skill.imageSrc}
                    alt={skill.title}
                    className="image__skill"
                  />
                </div>
                <p className="title__skill">{skill.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
