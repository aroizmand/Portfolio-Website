import React from "react";
import "./skills.css";
import Software from "../../assets/code.png";
import Data from "../../assets/data.png";
import Photo from "../../assets/photo.png";
const Skills = () => {
  return (
    <section id="skills">
      <span className="skillTitle">What I do</span>
      <span className="skillDesc">
        I am an enthusiastic full stack developer, data analyst, and wildlife
        photographer with experience in creating user-friendly websites and
        applications, and comprehensive and detailed analysis programs and
        reports. I am proficient in Java, Python CSS, R, SQL, HTML, JavaScript,
        PHP and ReactJs.
      </span>
      <div className="skillBars">
        <div className="skillBar">
          <img src={Software} alt="Coding" className="skillBarImg" />
          <div className="skillBarText software">
            <h2>Software Development</h2>
            <p>
              Pursuing a Computer Science major at The University of British
              Columbia
            </p>
          </div>
        </div>
        <div className="skillBar">
          <img src={Data} alt="Data Analysis" className="skillBarImg data" />
          <div className="skillBarText">
            <h2>Data Analysis</h2>
            <p>
              Completed an internship as a Data Analyst and pursuing a Data
              Science minor
            </p>
          </div>
        </div>
        <div className="skillBar">
          <img src={Photo} alt="Photography" className="skillBarImg photo" />
          <div className="skillBarText">
            <h2>Wildlife Photography</h2>
            <p>
              Years of experience as a wildlife photographer in several
              countries
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
