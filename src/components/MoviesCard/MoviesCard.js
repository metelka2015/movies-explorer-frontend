import React from "react";
import { useLocation } from "react-router-dom";
import './MoviesCard.css';
import picture from "../../images/movie-pic.jpg";


export function MoviesCard ({movieName}) { 
    const location = useLocation();
    movieName = "Название фильма";
    
  return (
    <li className="movie-card">
        <div className="movie-card__container">
            <img className="movie-card__image" src={picture} alt={movieName} />
            <div className="movie-card__info">
              <h2 className="movie-card__title">33 слова о дизайне</h2>
              <button type="button" aria-label="сохранить видео" className={location.pathname === "/movies" ? "movie-card__button" : "movie-card__button_save"}></button>
            </div>  
            <p className="movie-card__time" >1ч42м</p> 
        </div>
    </li>
  );
}
