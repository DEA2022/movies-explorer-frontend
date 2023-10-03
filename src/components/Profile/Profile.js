import './Profile.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import FormHeading from '../FormHeading/FormHeading';

function Profile({ successMessage, heading, additionalClass }) {
  const [isVisibleSubmitButton, setIsVisibleSubmitButton] = useState(false);
  const disabled = false;

  function handleDisabledButton() {
    setIsVisibleSubmitButton(false);
  }

  function handleEnabledButton() {
    setIsVisibleSubmitButton(true);
  }


  return (
    <section className="profile">
      <FormHeading heading={heading} additionalClass={additionalClass} />
      <form className="profile__form" name="form-profile">
        <div className="profile__container">
          <span className="profile__info">Имя</span>
          <input
            className="profile__input"
            name="name"
            value={`Виталий`}
            placeholder=""
            type="text"
            minlength="2"
            maxlength="30"
            required
          />
        </div>
        <div className="profile__container profile__container_type_last">
          <span className="profile__info">E-mail</span>
          <input
            className="profile__input"
            name="email"
            type="email"
            value={`pochta@yandex.ru`}
            placeholder=""
            required
          />
        </div>
      </form>
      {isVisibleSubmitButton ? (
        <>
          <span className={`profile__success ${!successMessage ? 'profile__success_hidden' : ''}`}>
            {/* отображается в зависимости от правильности введения данных */}
            {!successMessage}
          </span>
          <button className={`profile__button-saved ${!disabled ? '' : 'profile__button-saved_disabled'}`} type="submit" onClick={handleDisabledButton}>
            Сохранить
          </button>
        </>
      ) : (
        <div className='profile__manage-account'>
          <button type="submit" className="profile__button-edit" onClick={handleEnabledButton}>
            Редактировать
          </button>
          <Link to="/signin" className="profile__exit">
            Выйти из аккаунта
          </Link>
        </div>
      )}
    </section>
  );
}

export default Profile;