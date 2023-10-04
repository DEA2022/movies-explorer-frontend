import { Link } from 'react-router-dom';
import Form from '../Form/Form';
import FormButton from '../FormButton/FormButton';
import FormHeading from '../FormHeading/FormHeading';
import Logo from '../Logo/Logo';
import './Register.css';


function Register({ heading, textButton }) {
  return (
    <div className='register'>
      <Logo />
      <FormHeading heading={heading} />
      <Form>
        <label className='register__label'>Имя</label>
        <input
          className='register__field'
          type='text'
          name='name'
          id='name'
          placeholder="имя"
          required
          minlength="2"
          maxlength="30"
        />
        <span className="register__field-error">Что-то пошло не так...</span>
        <label className='register__label'>E-mail</label>
        <input
          className='register__field'
          type='email'
          name='email'
          id='email'
          placeholder="email"
          required
        />
        <span className="register__field-error">Что-то пошло не так...</span>
        <label className='register__label'>Пароль</label>
        <input
          className='register__field'
          type='password'
          name='password'
          id='password'
          placeholder="пароль"
          required
          minlength="2"
        />
        <span className="register__field-error register__field-error-inactive" disable >Что-то пошло не так...</span>
        <FormButton textButton={textButton} />
        <div className="register__container">
          <p className="register__link-text">Уже зарегистрированы?</p>
          <Link className="register__link" to="/signin">Войти</Link>
        </div>
      </Form>

    </div>
  )
}

export default Register;