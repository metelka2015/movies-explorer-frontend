import React from "react";
import { useLocation } from "react-router-dom";
import './MoviesCard.css';
import picture from "../../images/movie-pic.jpg";


export function MoviesCard () { 
    const location = useLocation();
  return (
    <li className="movie-card">
        <div className="movie-card__container">
            <img className="movie-card__image" src={picture} alt="заставка фильма" />
            <div className="movie-card__info">
              <h2 className="movie-card__title">33 слова о дизайне</h2>
              <button className={location.pathname === "/movies" ? "movie-card__button" : "movie-card__button_save"}></button>
            </div>  
            <p className="movie-card__time" >1ч42м</p> 
        </div>
    </li>
  );
}
