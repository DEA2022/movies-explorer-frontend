import "./SearchForm.css";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm() {
  return (
    <section className="search" aria-label="Поиск фильмов">
      <form className="search__form">
        <div className="search__form-container">
          <input
            className="search__form-input"
            type="text"
            placeholder="Фильм"
            name="search"
            required
          />
          <button className="search__form-submit" type="submit" />
        </div>
        <FilterCheckbox />
      </form>
    </section>
  );
}

export default SearchForm;