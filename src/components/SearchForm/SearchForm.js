import React from "react";
import { FilterCheckbox } from "../FilterCheckbox/FilterCheckbox.js";
import './SearchForm.css';
import button from "../../images/search-button.svg"

export function SearchForm ({ onSearch, checkboxStatus, onFilter, page, isLoading }) {
    const [searchError, setSearchError] = React.useState(false);
    const [search, setSearch] = React.useState('');

    React.useEffect(() =>{
        if (page === '/movies' && localStorage.getItem('searchMovies')) {
            const searchResult = localStorage.getItem('searchMovies');
            setSearch(searchResult);
          } 
    }, []);  
    function handleChange(e) {
        setSearch(e.target.value);
    } 
    function handleSubmit (e) {
        e.preventDefault();
        if (!search) {
          setSearchError(true)
        } else {
          setSearchError(false);
          onSearch(search);          
        }
      }        

    return(
        <>
            <form className="search-form" onSubmit={handleSubmit}>
                <div className="search-form__container">
                    <input 
                        className={`search-form__input ${isLoading ? "search-form__input_inactive" : ""}`} placeholder="Фильм" type="text" name="search" value={search || ''}  onChange={handleChange} />
                    <button className="search-form__button" type="submit" aria-label="поиск"><img src={button} alt="кнопка поиска" /></button>
                </div>
                <FilterCheckbox onChange={onFilter} checked={checkboxStatus}/> 
                {searchError && <span className="search-form__error">Нужно ввести ключевое слово.</span>}               
            </form>
        </>
    )
}