import './MoviesCardList.css'
import MoviesCard from "../MoviesCard/MoviesCard";
import ButtonElse from '../ButtonElse/ButtonElse';

function MoviesCardList({ movies, onSave, additionalClass }) {
  return (
    <section className='movies-cards' aria-label='Карточки фильмов'>
      <ul className={`movies-card-list ${additionalClass}`}>
        {
          movies.map((card) => {
            return <MoviesCard name={card.name} image={card.image} duration={card.duration} isSaved={card.saved} onSave={onSave} />
          })
        }
      </ul>
      <ButtonElse />
    </section >
  )
}

export default MoviesCardList;