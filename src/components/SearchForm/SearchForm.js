import React from "react";
//import { Header } from "../Header/Header.js";
import { FilterCheckbox } from "../FilterCheckbox/FilterCheckbox.js";
import './SearchForm.css';
import button from "../../images/search-button.svg"

export function SearchForm () {
    return(
        <>
            <form className="search-form">
                <div className="search-form__container">
                    <input className="search-form__input" placeholder="Фильм" type="text" required name="search" />
                    <button className="search-form__button" type="submit" aria-label="поиск"><img src={button} alt="кнопка поиска" /></button>
                </div>
                <FilterCheckbox />                
            </form>
        </>
    )
}