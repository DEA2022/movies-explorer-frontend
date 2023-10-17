import './Profile.css';
import { Link } from 'react-router-dom';
import React from 'react';
import FormHeading from '../FormHeading/FormHeading';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import useForm from "../../hooks/useForm";


function Profile({ heading, additionalClass, loggedOut, onUpdate }) {
  const [isVisibleSubmitButton, setIsVisibleSubmitButton] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [message, setMessage] = React.useState("");
  const currentUser = React.useContext(CurrentUserContext);
  const { values, errors, handleChange, resetValidation, isValid } = useForm({ name: currentUser.name, email: currentUser.email });

  React.useEffect(() => {
    if (isVisibleSubmitButton) {
      resetValidation();
    }
  }, [isVisibleSubmitButton])

  function handleDisabledButton() {
    setIsVisibleSubmitButton(false);
  }

  function handleEnabledButton(evt) {
    evt.preventDefault();
    setIsVisibleSubmitButton(true);
  }

  function handleSubmitEditProfile(evt) {
    evt.preventDefault();
    if (isValid) {
      handleDisabledButton();
      setIsLoading(true)
      onUpdate({
        name: values.name,
        email: values.email,
      })
        .then(() => { setMessage("Успешно!"); setTimeout(setMessage, 1000, "") })
        .catch((msg) => setMessage(msg))
        .finally(() => setIsLoading(false))
    }
  }

  function handleChangeValue(e) {
    setMessage("")
    handleChange(e)
  }

  return (
    <section className="profile">
      <FormHeading heading={heading} name={values.name} additionalClass={additionalClass} />
      <form className="profile__form" name="form-profile" onSubmit={handleSubmitEditProfile} noValidate>
        <div className="profile__container">
          <div className="profile__wrapper">
            <span className="profile__info">Имя</span>
            <input
              className="profile__input"
              name="name"
              placeholder="Имя"
              type="text"
              minLength='2'
              maxLength='30'
              required
              disabled={!isVisibleSubmitButton || isLoading}
              value={values.name || ''}
              onChange={handleChangeValue}
            />
          </div>
          <span className='profile__input-error'>{errors.name}</span>
        </div>

        <div className="profile__container profile__container_type_last">
          <div className="profile__wrapper">
            <span className="profile__info">E-mail</span>
            <input
              className="profile__input"
              name="email"
              type="email"
              placeholder="Почта"
              required
              disabled={!isVisibleSubmitButton || isLoading}
              value={values.email || ''}
              onChange={handleChangeValue}
            />
          </div>
          <span className='profile__input-error'>{errors.email}</span>
        </div>

        <span className={`${message ? "profile__success" : 'profile__success profile__success_hidden'}`}>
          {message}
        </span>
        {isVisibleSubmitButton ? (
          <button className={`${isValid ? 'profile__button-saved' : 'profile__button-saved profile__button-saved_disabled'}`} disabled={isLoading} type="submit">
            Сохранить
          </button>
        ) : (
          <div className='profile__manage-account'>
            <button type="submit" className="profile__button-edit" onClick={handleEnabledButton}>
              Редактировать
            </button>
            <Link to="/" className="profile__exit" onClick={loggedOut}>
              Выйти из аккаунта
            </Link>
          </div>
        )}
      </form>
    </section>
  );
}

export default Profile;