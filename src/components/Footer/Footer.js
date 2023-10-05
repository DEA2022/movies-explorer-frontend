import './Footer.css';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { paths } from '../../utils/constants';

function Footer() {
  const location = useLocation();

  if (Object.values(paths).some((path) => path.pathname === location.pathname && path.showFooter === true)) {
    return (
      <footer className='footer page__footer'>
        <p className='footer__text'>Учебный проект Яндекс.Практикум х BeatFilm.</p>
        <div className='footer__info'>
          <p className='footer__copyright'>&copy; 2023</p>
          <ul className='footer__nav'>
            <li>
              <Link
                to={'https://practicum.yandex.ru'}
                className='footer__item'
                target='_blank'
                rel='nofollow noreferrer'>
                Яндекс.Практикум
              </Link>
            </li>
            <li>
              <Link
                to={'https://github.com/DEA2022/'}
                className='footer__item'
                target='_blank'
                rel='nofollow noreferrer'>Github
              </Link>
            </li>
          </ul>
        </div>
      </footer>
    );
  }
}

export default Footer;