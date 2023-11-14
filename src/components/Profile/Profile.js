import React from "react";
import { Header } from "../Header/Header.js";
import './Profile.css';
import { Link } from "react-router-dom";

export function Profile () {
    const [isEdited, setIsEdited] = React.useState(false);
   /* const [isValid, setIsValid] = React.useEffect(false);*/
    
    function handleEditForm () {
        setIsEdited(!isEdited);        
    }

    let isValid = true;


    return(
        <>
            <Header />
                <section className="profile" aria-label="страница изменения профиля">
                    <div className="profile__cover">
                        <h2 className="profile__title">Привет, Виталий!</h2>
                        <form className="profile__form">
                            <fieldset className="profile__fieldset">
                                <label className="profile__label">
                                    <span className="profile__input-text">Имя</span>
                                    <input className="profile__input" type="text" required></input>                                
                                </label>
                                <label className="profile__label">
                                    <span className="profile__input-text">E-mail</span>
                                    <input className="profile__input" type="email" required></input>
                                </label>
                            </fieldset>                       

                            {!isEdited && (
                                <>
                                    <button className="profile__button" onClick={handleEditForm}>Редактировать</button>
                                    <div className="profile__exit-button-link">
                                        <Link className="profile__exit-button" to="/">Выйти из аккаунта</Link> 
                                    </div> 
                                </>
                                
                            )}
                            { isEdited && (
                                <>
                                    <span className={isValid ? '' : "profile__error-message"}></span>
                                    <button type="submit" className={isValid  ? "profile__submit-button" : "profile__submit-button profile__submit-button_disabled"} disabled={isValid ? '' : "disabled"}>Сохранить</button>
                                </>
                                
                            )}                        
                        </form> 
                    </div>
                                                  
                </section>
        </>
    )
}