import "./SearchForm.css";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm({ errorMessage, value, onChange, onSearch, disabled, isShortMovie }) {
  function handleSubmit(evt) {
    evt.preventDefault();
    onSearch();
  }

  return (
    <section className="search" aria-label="Поиск фильмов">
      <form className="search__form" onSubmit={handleSubmit}>
        <div className="search__form-container">
          <input
            className="search__form-input"
            type="text"
            placeholder="Фильм"
            name="search"
            value={value}
            onChange={onChange}
          />
          <button className="search__form-submit" type="submit" />
        </div>
        <span className="search__form-error">{errorMessage}</span>
        <FilterCheckbox checked={isShortMovie} disabled={disabled} onClick={onSearch} />
      </form>
    </section>
  );
}

export default SearchForm;
