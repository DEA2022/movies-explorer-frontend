import React from "react";
import "./FilterCheckbox.css";

function FilterCheckbox({ checked, onClick, disabled }) {
  return (
    <div className="filter">
      <label className="filter__checkbox-label">
        <input
          value={checked}
          defaultChecked={checked}
          onChange={(e) => onClick(e.target.checked)}
          className="filter__checkbox"
          type="checkbox"
          name="filterCheckbox"
          id="filterCheckbox"
          disabled={disabled}
        />
        <span className="filter__checkbox-button" />
        <span className="filter__checkbox-description">Короткометражки</span>
      </label>
    </div>
  );
}

export default FilterCheckbox;
