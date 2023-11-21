import React from "react";
import { SearchForm } from "../SearchForm/SearchForm.js";
import { MoviesCardList } from "../MoviesCardList/MoviesCardList.js";
import './SavedMovies.css';
import { DURATION } from "../../utils/constants.js";

export function SavedMovies ({ savedMovies, handleDeleteMovie, isLoading }) {
    const [checkboxMovies, setCheckboxMovies] = React.useState([]);
    const [checkboxStatus, setCheckboxStatus] = React.useState(false);
    const [notFoundMovie, setNotFoundMovie] = React.useState(false);
    const [searchOfSavedMovies, setSearchOfSavedMovies] = React.useState('');
    
    React.useEffect(() => {
        const movies = searchAllMovies(savedMovies, searchOfSavedMovies);
        setCheckboxMovies(checkboxStatus ? filterShortMovies(movies) : (movies));
    }, [savedMovies, searchOfSavedMovies, checkboxStatus]);

    React.useEffect(() => {
        if (checkboxMovies.length === 0) {
          setNotFoundMovie(true)
        } else {
          setNotFoundMovie(false)
        }
      }, [checkboxMovies])
    
    function searchAllMovies(movies, request) { 
        const allMovies = movies.filter((movie) => {
          const query = request.toLowerCase().trim();
          const movieRu = String(movie.nameRU).toLowerCase().trim();
          const movieEn = String(movie.nameEN).toLowerCase().trim();
          
          return movieRu.indexOf(query) !== -1 || movieEn.indexOf(query) !== -1;
        });
        return allMovies;
      }

    function filterShortMovies (movies) {
        return movies.filter((mov) => mov.duration < DURATION);
      }
    
    function handleCheckboxStatus() {
        setCheckboxStatus(!checkboxStatus)
    }
    
    function handleSearch(request) {
        setSearchOfSavedMovies(request);
    }


    return(
        <>
            <section className="saved-movies" aria-label="сохранённые фильмы">
                    <SearchForm onSearch={handleSearch} onFilter={handleCheckboxStatus} checkboxStatus={checkboxStatus} isLoading={isLoading}/>
                    <MoviesCardList page="saved-movies"
                    savedMovies={savedMovies} 
                    handleDelete={handleDeleteMovie} 
                    movieCards={checkboxMovies} 
                    notFoundMovie={notFoundMovie}/>                   
            </section>
        </>
    )
}