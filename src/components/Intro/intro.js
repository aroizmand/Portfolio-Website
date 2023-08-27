import React from "react";
import "./intro.css";
import bg from "../../assets/image.png";
import { Link } from "react-scroll";
import btnImg from "../../assets/hireme.png";
import AnimatedImage from "../AnimatedImage/animatedImage";

const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hi there,</span>
        <span className="introText">
          I'm <span className="introName">Alexander</span>
          <br />
          Developer & Photographer
        </span>
        <p className="introPara">
          with a passion for technological innovation and wildlife conservation.
        </p>
        <Link
          to="contact" // Target ID
          spy={true}
          smooth={true}
          offset={-60}
          duration={500}
        >
          <button className="btn">
            <img src={btnImg} alt="Hire Me" className="btnImg" />
            Hire Me
          </button>
        </Link>
      </div>
      <AnimatedImage src={bg} alt="Profile" className="bg" />
    </section>
  );
};

export default Intro;
