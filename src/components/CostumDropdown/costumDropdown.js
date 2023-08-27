import React, { useState } from "react";
import "../CostumDropdown/costumDropdown.css";

function CustomDropdown({ options, selected, onSelect }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <div className="custom-dropdown">
      <div className="selected-option" onClick={handleToggle}>
        {selected || "Category"}
        <span className="arrow-icon">▼</span>
      </div>
      <div
        className="options"
        style={{
          maxHeight: isOpen ? "20rem" : "0",
        }}
      >
        {options.map((option, index) => (
          <div
            key={index}
            className="option"
            onClick={() => handleOptionClick(option)}
          >
            {option}
          </div>
        ))}
      </div>
    </div>
  );
}

export default CustomDropdown;
