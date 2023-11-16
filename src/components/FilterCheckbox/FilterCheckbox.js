import React from "react";
import './FilterCheckbox.css';

export function FilterCheckbox () {
    return(
        <>
            <div className="filter">
                    <input className="filter__input" type="checkbox" id="filter" required name="search" />
                    <span className="filter__text">Короткометражки</span>
            </div>
            
        </>
    )
}