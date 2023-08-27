import React from "react";
import "./works.css";
import WorldRecipes from "../../assets/WorldRecipes.jpg";
import SportsCoach from "../../assets/SportsCoach.jpg";
import WeKnow from "../../assets/WeKnow.jpg";

const Works = () => {
  return (
    <section id="works">
      <h2 className="worksTitle">Portfolio</h2>
      <span className="worksDesc">
        My goal is always to use technology as a means to drive positive change.
        I believe in leveraging innovation to improve how we live, work, and
        connect with one another, always with an eye towards a better and more
        compassionate society.
      </span>
      <div className="worksImgs">
        <a
          className="linkGit"
          href="https://github.com/aroizmand/RecipeBook/blob/main/README.md"
          target="_blank"
        >
          <img src={WorldRecipes} alt="World Recipes" className="worksImg" />
        </a>
        <a
          className="linkGit"
          href="https://github.com/aroizmand/SportsCoach/blob/main/README.md"
          target="_blank"
        >
          <img src={SportsCoach} alt="Sports Coach" className="worksImg" />
        </a>
        <a
          className="linkGit"
          href="https://github.com/aroizmand/WeKnow-AppPrototype"
          target="_blank"
        >
          <img src={WeKnow} alt="WeKnow" className="worksImg" />
        </a>
      </div>
    </section>
  );
};

export default Works;
