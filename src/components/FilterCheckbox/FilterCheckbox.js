import React from "react";
import './FilterCheckbox.css';

export function FilterCheckbox ({onChange, checked}) {
    return(
        <>
            <div className="filter">
                    <input className="filter__input" type="checkbox" id="checkbox" name="search" onChange={onChange} checked={checked} />
                    <span className="filter__text">Короткометражки</span>
            </div>
            
        </>
    )
}