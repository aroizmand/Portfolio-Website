import React, { useState, useEffect } from "react";
import "./navbar.css";
import logo from "../../assets/logo.png";
import menu from "../../assets/menu.png";
import { Link } from "react-scroll";
import contactImg from "../../assets/contact.png";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const handleScroll = () => {
    if (window.scrollY > 80) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }

    // Close the mobile menu if it's open
    if (showMenu) {
      setShowMenu(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeMenu = (e) => {
    if (
      !e.target.closest(".navMenu") &&
      !e.target.closest(".mobMenu") &&
      showMenu
    ) {
      setShowMenu(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    document.addEventListener("click", closeMenu);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("click", closeMenu);
    };
  }, [showMenu]);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <Link
        to="intro"
        spy={true}
        smooth={true}
        duration={500}
        className="logoLink"
      >
        <button className="btnLogo">
          <img src={logo} alt="Logo" className="logo" />
        </button>
      </Link>

      <div className="desktopMenu">
        <Link
          activeClass="active"
          to="intro"
          spy={true}
          smooth={true}
          className="desktopMenuListItem"
          offset={-100}
          duration={500}
        >
          Home
        </Link>
        <Link
          className="desktopMenuListItem"
          activeClass="active"
          to="skills"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
        >
          About
        </Link>
        <Link
          className="desktopMenuListItem"
          activeClass="active"
          to="works"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
        >
          Portfolio
        </Link>
        <Link
          className="desktopMenuListItem"
          activeClass="active"
          to="photos"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
        >
          Photography
        </Link>
      </div>
      <button
        className="desktopMenuBtn"
        onClick={() => {
          document
            .getElementById("contact")
            .scrollIntoView({ behavior: "smooth" });
        }}
      >
        <img src={contactImg} alt="" className="desktopMenuImg" />
        Contact Me
      </button>

      <img
        src={menu}
        alt="Menu"
        className="mobMenu"
        onClick={() => setShowMenu(!showMenu)}
      />
      <div className="navMenu" style={{ display: showMenu ? "flex" : "none" }}>
        <Link
          activeClass="active"
          to="intro"
          spy={true}
          smooth={true}
          className="listItem"
          offset={-100}
          duration={500}
          onClick={() => setShowMenu(false)}
        >
          Home
        </Link>
        <Link
          className="listItem"
          activeClass="active"
          to="skills"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          onClick={() => setShowMenu(false)}
        >
          About
        </Link>
        <Link
          className="listItem"
          activeClass="active"
          to="works"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          onClick={() => setShowMenu(false)}
        >
          Portfolio
        </Link>
        <Link
          className="listItem"
          activeClass="active"
          to="photos"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          onClick={() => setShowMenu(false)}
        >
          Photography
        </Link>
        <Link
          className="listItem"
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={-60}
          duration={500}
          onClick={() => setShowMenu(false)}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
