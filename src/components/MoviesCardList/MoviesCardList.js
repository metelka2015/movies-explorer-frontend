import React from "react";
import { MoviesCard } from "../MoviesCard/MoviesCard.js";
import { Preloader } from "../Preloader/Preloader.js";
import './MoviesCardList.css';

export function MoviesCardList ({ isLoading, movieError, notFoundMovie, handleLike, handleDelete, savedMovies, movieCards, uploadedCards, page }) {
    
    function findSavedMovie(savedMovies, card) {  
        const saved = savedMovies.some((i) => i.movieId === card.id);
        return saved;
      }

    return(
        <>
            <section className="movies-cardlist">
                {isLoading && <Preloader />}
                {notFoundMovie && !isLoading && <span className="movies-cardlist__error">Ничего не найдено.</span>}
                
                {!notFoundMovie && !isLoading && !movieError && (
                    <ul className="movies-cardlist__container">
                    {page === "/movies" ?
                        movieCards.slice(0, uploadedCards).map((card) => (
                            <MoviesCard
                            page={page}
                            key={card.id}
                            card={card}
                            savedMovies={savedMovies}
                            foundSavedMovie={findSavedMovie(savedMovies, card)}
                            handleCardLike={handleLike}
                            handleCardDelete={handleDelete}   
                            />
                        )) :
                        movieCards.map((card) => (
                            <MoviesCard
                            page={page}
                            key={card._id}
                            card={card}
                            savedMovies={savedMovies}
                            foundSavedMovie={findSavedMovie(savedMovies, card)}
                            handleCardLike={handleLike}
                            handleCardDelete={handleDelete}  
                            />
                        ))
                        }
                    </ul>
                )}                
                    
            </section>
        </>
    )
}