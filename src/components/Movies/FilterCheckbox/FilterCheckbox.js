import "./FilterCheckbox.css";

function FilterCheckbox() {
  return (
    <div className="filter__checkbox-container">
      <label className="filter__checkbox-label">
        <input
          className="filter__checkbox"
          type="checkbox"
          name="filterCheckbox"
          id="filterCheckbox"
        />
        <span className="filter__checkbox-button" />
        <span className="filter__checkbox-description">Короткометражки</span>
      </label>
    </div>
  );
}

export default FilterCheckbox;