import React, { useState, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import CustomDropdown from "../CostumDropdown/costumDropdown";
import logo from "../../assets/logo.png";
import "./moreNavbar.css";

const MoreNavbar = ({ onSelectCategory }) => {
  // Attempt to initialize selectedCategory from sessionStorage or default to "All"
  const initialCategory = sessionStorage.getItem("selectedCategory") || "All";
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const categories = ["All", "Canada", "Chile", "Others"];

  useEffect(() => {
    // Store the selectedCategory to sessionStorage whenever it changes
    sessionStorage.setItem("selectedCategory", selectedCategory);
  }, [selectedCategory]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    onSelectCategory(category);
  };

  return (
    <nav className="navbar more-navbar">
      <div className="logo-container">
        <RouterLink to="/" className="logoLink">
          <button className="btnLogo">
            <img src={logo} alt="Logo" className="logo" />
          </button>
        </RouterLink>
      </div>

      <div className="desktopMenu">
        <RouterLink to="/" className="desktopMenuListItem">
          <h3 className="home">Home</h3>
        </RouterLink>
      </div>

      <div className="custom-dropdown-container">
        <CustomDropdown
          options={categories}
          selected={selectedCategory}
          onSelect={handleCategoryChange}
        />
      </div>
    </nav>
  );
};

export default MoreNavbar;
