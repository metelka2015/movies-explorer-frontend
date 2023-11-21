import React from "react";
import { useLocation } from "react-router-dom";
import './MoviesCard.css';

export function MoviesCard ({handleCardDelete, handleCardLike, foundSavedMovie, card, savedMovies, page}) { 
  const location = useLocation();

  function handleClick() {
    if (foundSavedMovie) {
      handleCardDelete(savedMovies.filter((movie) => movie.movieId === card.id)[0])
    } else {
      handleCardLike(card);
    }
  }

  function handleDelete()  {
    handleCardDelete(card);    
  }

  function movieDuration(duration) {  
    const hours = Math.floor(duration/60);
    const minutes = duration % 60;
    return `${hours}ч${minutes}м`;
  }

  const cardClass =`${foundSavedMovie ? "movie-card__button_save" : "movie-card__button"}`;

  const movieImage = location.pathname === '/saved-movies' ? card.image : 'https://api.nomoreparties.co/' + card.image.url;

    
  return (
    <li className="movie-card">
        <div className="movie-card__container">
          <a className="movie-card__image" target="blank" href={card.trailerLink}><img className="movie-card__image" src={movieImage} alt={card.nameRU} />
          </a>
            
            <div className="movie-card__info">
              <h2 className="movie-card__title">{card.nameRU}</h2>
              {page === "/movies" ?
              <button type="button" aria-label="сохранить видео" className={cardClass} onClick={handleClick}></button> :
              <button type="button" aria-label="удалить видео" className="movie-card__delete-button" onClick={handleDelete}></button>
            }
              
            </div>  
            <p className="movie-card__time">{movieDuration(card.duration)}</p> 
        </div>
    </li>
  );
}
