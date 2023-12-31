import Checkbox from '../Checkbox/Checkbox';
import './SearchForm.css';

function SearchForm() {
  return (
    <form className="search-form section">
      <input
        type="text"
        className="search-form__input"
        placeholder="Фильм"
        required
      />
      <Checkbox title="Короткометражки" className="search-form__checkbox" />
      <button type="submit" className="search-form__button">
        Поиск
      </button>
    </form>
  );
}

export default SearchForm;
