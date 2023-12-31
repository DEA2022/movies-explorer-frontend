import { Link, useNavigate } from 'react-router-dom';
import Form from '../Form/Form';
import FormButton from '../FormButton/FormButton';
import FormHeading from '../FormHeading/FormHeading';
import Logo from '../Logo/Logo';
import './Login.css';
import useForm from '../../hooks/useForm';
import { useState } from 'react';
import useCheckToken from '../../hooks/useCheckToken';
import { paths } from '../../utils/constants';


function Login({ heading, textButton, onLogin }) {
  const { values, errors, handleChange, isValid } = useForm({ email: '', password: '' });
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  useCheckToken(paths.movies.pathname)

  function handleSubmit(evt) {
    evt.preventDefault();
    evt.stopPropagation();
    setIsLoading(true)
    onLogin(values.email, values.password)
      .catch((msg) => setMessage(msg))
      .finally(() => setIsLoading(false))
  }

  function handleChangeValue(e) {
    setMessage("")
    handleChange(e)
  }

  return (
    <div className='login'>
      <Logo />
      <FormHeading heading={heading} />
      <Form onSubmit={handleSubmit}>
        <label className='login__label'>E-mail</label>
        <input
          className={`login__field ${message || errors.email ? "login__field login__field_error" : ""}`}
          type='email'
          name='email'
          id='email'
          placeholder="email"
          required
          disabled={isLoading}
          value={values.email || ''}
          onChange={handleChangeValue}
        />
        <span className="login__field-error">{errors.email}</span>
        <label className='login__label'>Пароль</label>
        <input
          className={`login__field ${message || errors.password ? "login__field login__field_error" : ""}`}
          type='password'
          name='password'
          id='password'
          placeholder="пароль"
          disabled={isLoading}
          required
          minLength="2"
          value={values.password || ''}
          onChange={handleChangeValue}
        />
        <span className="login__field-error">{errors.password}</span>
        <span className="login__success">{message}</span>
        <FormButton textButton={textButton} isValid={isValid} disabled={isLoading} />
        <div className="login__container">
          <p className="login__link-text">Ещё не зарегистрированы?</p>
          <Link className="login__link" to="/signup">Регистрация</Link>
        </div>
      </Form>

    </div>
  )
}

export default Login;
