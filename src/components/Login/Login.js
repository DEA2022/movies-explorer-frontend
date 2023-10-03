import { Link } from 'react-router-dom';
import Form from '../Form/Form';
import FormButton from '../FormButton/FormButton';
import FormHeading from '../FormHeading/FormHeading';
import Logo from '../Logo/Logo';
import './Login.css';


function Login({ heading, textButton, additionalClass }) {
  return (
    <div className='login'>
      <Logo />
      <FormHeading heading={heading} />
      <Form>
        <label className='login__label' id='email'>E-mail</label>
        <input
          className='login__field'
          type='email'
          name='email'
          id='email'
          placeholder="email"
          required
        />
        <span className="login__field-error">Что-то пошло не так...</span>
        <label className='login__label' id='password'>Пароль</label>
        <input
          className='login__field'
          type='password'
          name='password'
          id='password'
          placeholder="пароль"
          required
          minlength="2"
        />
        <span className="login__field-error">Что-то пошло не так...</span>
        <FormButton textButton={textButton} additionalClass={additionalClass} />
        <div className="login__container">
          <p className="login__link-text">Ещё не зарегистрированы?</p>
          <Link className="login__link" to="/signup">Регистрация</Link>
        </div>
      </Form>

    </div>
  )
}

export default Login;