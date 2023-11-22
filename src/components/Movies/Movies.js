import React from "react";
import './Movies.css';
import { SearchForm } from "../SearchForm/SearchForm.js";
import { MoviesCardList } from "../MoviesCardList/MoviesCardList.js";
import * as Size from "../../utils/constants.js";


export function Movies ({ savedMovies, handleDeleteMovie, onSaveMovie, onSearch, onFilter, errorRequest, checkboxMovies, isLoading, checkboxStatus }) {
  
  const [uploadedCards, setUploadedCards] = React.useState(0);
  const [notFoundMovie, setNotFoundMovie] = React.useState(false);

      React.useEffect(() => {
        if (localStorage.getItem('searchMovies')) {
          if (checkboxMovies.length === 0) {
            setNotFoundMovie(true);
          } else {
            setNotFoundMovie(false);
          }
        } else {
          setNotFoundMovie(false);
        }
      }, [checkboxMovies]);
      
      React.useEffect(() => {
        const changeSize = (e) => {
          setTimeout(() => {
            numberCards(e.target.innerWidth);
          }, 500);
        };
        window.addEventListener('resize', changeSize);
        return () => {
          window.addEventListener('resize', changeSize);
        }

      })

      function numberCards() {
        if (window.innerWidth >= 1280) {
          setUploadedCards(16)
        } else if (window.innerWidth >= 990) {
            setUploadedCards(12)
        } else if (window.innerWidth >= 630) {
            setUploadedCards(8)
        } else if (window.innerWidth < 630) {
            setUploadedCards(5)
        }
      }

      function handleMoreCards() {
        if (window.innerWidth > 1279) {
            setUploadedCards(uploadedCards + Size.CARDS_NUMBERS_DESKTOP)
        } else if (window.innerWidth > 990) {
            setUploadedCards(uploadedCards + Size.CARDS_NUMBERS_TABLET_lARGE)
        } else if (window.innerWidth > 630) {
            setUploadedCards(uploadedCards + Size.CARDS_NUMBERS_TABLET_SMALL)
        } else if (window.innerWidth < 630) {
            setUploadedCards(uploadedCards + Size.CARDS_NUMBERS_MOBILE)
        }
      }

      React.useEffect(() => {
        numberCards(window.screen.width);
      }, [])

    return(
        <>            
            <section className="movies" aria-label="фильмы">
                <SearchForm page="/movies" onSearch={onSearch} checkboxStatus={checkboxStatus} onFilter={onFilter} isLoading={isLoading} />
                <MoviesCardList 
                    page="/movies"
                    uploadedCards={uploadedCards}
                    savedMovies={savedMovies}
                    movieCards={checkboxMovies}
                    movieError={errorRequest}
                    handleDelete={handleDeleteMovie}
                    handleLike={onSaveMovie}
                    notFoundMovie={notFoundMovie}
                    isLoading={isLoading}
                />
                {checkboxMovies.length > uploadedCards ? (
                    <button type="button" className="movies__button" onClick={handleMoreCards}>Ещё</button>
                ) : ('')
                }
            </section>                                   
        </>
    )
}