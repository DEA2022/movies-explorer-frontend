import card1 from "../images/card1.png"
import card2 from "../images/card2.png"
import card3 from "../images/card3.png"
import card4 from "../images/card4.png"
import card5 from "../images/card5.png"
import card6 from "../images/card6.png"
import card7 from "../images/card7.png"
import card8 from "../images/card8.png"
import card9 from "../images/card9.png"
import card10 from "../images/card10.png"
import card11 from "../images/card11.png"
import card12 from "../images/card12.png"

export const initialCards = [
  {
    image: card1,
    name: '33 слова о дизайне',
    duration: '1ч 17м',
    saved: false
  },
  {
    image: card2,
    name: 'Киноальманах «100 лет дизайна»',
    duration: '1ч 17м',
    saved: false
  },
  {
    image: card3,
    name: 'В погоне за Бенкси',
    duration: '1ч 17м',
    saved: false
  },
  {
    image: card4,
    name: 'Баския: Взрыв реальности',
    duration: '1ч 17м',
    saved: false
  },
  {
    image: card5,
    name: 'Бег это свобода',
    duration: '1ч 17м',
    saved: false
  },
  {
    image: card6,
    name: 'Книготорговцы',
    duration: '1ч 17м',
    saved: false
  },
  {
    image: card7,
    name: 'Когда я думаю о Германии ночью',
    duration: '1ч 17м',
    saved: false
  },
  {
    image: card8,
    name: 'Gimme Danger: История Игги и The Stooges',
    duration: '1ч 17м',
    saved: false
  },
  {
    image: card9,
    name: 'Дженис: Маленькая девочка грустит',
    duration: '1ч 17м',
    saved: false
  },
  {
    image: card10,
    name: 'Соберись перед прыжком',
    duration: '1ч 17м',
    saved: false
  },
  {
    image: card11,
    name: 'Пи Джей Харви: A dog called money',
    duration: '1ч 17м',
    saved: false
  },
  {
    image: card12,
    name: 'По волнам: Искусство звука в кино',
    duration: '1ч 17м',
    saved: false
  }
];

export const paths = {
  root: {
    pathname: "/",
    showHeader: true,
    showFooter: true,
  },
  movies: {
    pathname: "/movies",
    showHeader: true,
    showFooter: true,
  },
  savedMovies: {
    pathname: "/saved-movies",
    showHeader: true,
    showFooter: true,
  },
  profile: {
    pathname: "/profile",
    showHeader: true,
    showFooter: false,
  },
  signin: {
    pathname: "/signin",
    showHeader: false,
    showFooter: false,
  },
  signup: {
    pathname: "/signup",
    showHeader: false,
    showFooter: false,
  }
};