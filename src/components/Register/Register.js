import React from 'react';
import { Link } from 'react-router-dom';
import Form from '../Form/Form';
import FormButton from '../FormButton/FormButton';
import FormHeading from '../FormHeading/FormHeading';
import Logo from '../Logo/Logo';
import './Register.css';
import useForm from "../../hooks/useForm";


function Register({ heading, textButton, onRegister }) {
  const { values, handleChange, isValid, errors } = useForm({ name: '', email: '', password: '' });
  const [message, setMessage] = React.useState("");

  function handleSubmit(evt) {
    evt.preventDefault();
    evt.stopPropagation();
    onRegister(values.name, values.email, values.password)
      .catch((msg) => setMessage(msg))
  }

  function handleChangeValue(e) {
    setMessage("")
    handleChange(e)
  }


  return (
    <div className='register'>
      <Logo />
      <FormHeading heading={heading} />
      <Form onSubmit={handleSubmit}>
        <label className='register__label'>Имя</label>
        <input
          className={`register__field ${message || errors.password ? "register__field register__field_error" : ""}`}
          type='text'
          name='name'
          id='name'
          placeholder="имя"
          required
          minLength="2"
          maxLength="30"
          value={values.name || ''}
          onChange={handleChangeValue}
        />
        <span className="register__field-error">{errors.name}</span>

        <label className='register__label'>E-mail</label>
        <input
          className={`register__field ${message || errors.password ? "register__field register__field_error" : ""}`}
          type='email'
          name='email'
          id='email'
          placeholder="email"
          required
          value={values.email || ''}
          onChange={handleChangeValue}
        />
        <span className="register__field-error">{errors.email}</span>
        <label className='register__label'>Пароль</label>
        <input
          className={`register__field ${message || errors.password ? "register__field register__field_error" : ""}`}
          type='password'
          name='password'
          id='password'
          placeholder="пароль"
          required
          minLength="2"
          value={values.password || ''}
          onChange={handleChangeValue}
        />
        <span className="register__field-error">{errors.password}</span>
        <span className="register__success">{message}</span>
        <FormButton textButton={textButton} isValid={isValid} />
        <div className="register__container">
          <p className="register__link-text">Уже зарегистрированы?</p>
          <Link className="register__link" to="/signin">Войти</Link>
        </div>
      </Form>

    </div>
  )
}

export default Register;