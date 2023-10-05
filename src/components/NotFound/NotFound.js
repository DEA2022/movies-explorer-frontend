import './NotFound.css';
import { useNavigate } from 'react-router-dom';

function NotFound() {

  const navigate = useNavigate();

  function handleClick() {
    navigate(-1);
  }

  return (
    <div className='not-found'>
      <h2 className='not-found__title'>404</h2>
      <p className='not-found__subtitle'>Страница не найдена</p>
      <button className='not-found__back' onClick={handleClick}>Назад</button>
    </div>
  )
}

export default NotFound;