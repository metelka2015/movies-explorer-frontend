import React from "react";
import { useEffect, useState, useContext } from "react";
import './Profile.css';
import { Link } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/CurrentUserContext.js";
import { useFormAndValidation } from '../../hooks/useFormAndValidation.js';


export function Profile ({ isLoading, handleUpdateUser, handleSignOut, error, setErrorMessage }) {
    const { values, handleChange, isValid, resetForm, errors, } = useFormAndValidation();
    const [isRepeated, setIsRepeated] = useState(true);
    const [disabled, setDisabled] = useState(true);
   
   // Подписка на контекст
   const currentUser = useContext(CurrentUserContext);
   const [name, setName] = useState(currentUser.name);
   const [email, setEmail] = useState(currentUser.email);

   function handleSubmit(e) {
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();
    // Передаём значения управляемых компонентов во внешний обработчик
    if (!isRepeated) {
        handleUpdateUser({
            name: name,
            email: email,
        });
        resetForm();
    }
    setDisabled(true);
  } 

  useEffect(() => {
    if (values.name) {
        setName(values.name);
    }
    if (values.email) {
        setEmail(values.email);
    }
  }, [values.name, values.email]);
   
  useEffect(() => {
    if (!isLoading) {
        setName(currentUser.name);
        setEmail(currentUser.email);
    }
  }, [isLoading, currentUser]);

  useEffect(() => {
    if (currentUser) {
        resetForm();
    }
  }, [currentUser, resetForm]);

  useEffect(() => {
    let name = true;
    let email = true; 
    if (values.name) {
        name = values.name === currentUser.name;        
    }
    if (values.email) {
        email = values.email === currentUser.email;
    }
    setIsRepeated(name && email);
  }, [values.name, values.email, currentUser.name, currentUser.email]); 

  function handleChangeButton() {
    setDisabled(!disabled);
    setErrorMessage({type: 'default', message: ''});
  }


  const submitButtonClass = `profile__submit-button ${disabled ? "profile__submit-button_disabled" : ""} ${!isValid || isRepeated || isLoading ? "profile__submit-button_inactive" : ""}`;


   
    return(
        <>
            <section className="profile" aria-label="страница изменения профиля">
                    <h1 className="profile__title">Привет,&nbsp;{currentUser.name}!</h1>
                    <form className="profile__form" onSubmit={handleSubmit}>
                        <fieldset className="profile__fieldset">
                            <label className="profile__label">
                                <span className="profile__input-text">Имя</span>
                                <input 
                                    className={`profile__input ${isLoading ? "profile__input_inactive" : ""}`}
                                    placeholder="Имя" 
                                    minLength="2" 
                                    maxLength="30" 
                                    type="text" 
                                    name="name"
                                    value={`${values.name ? values.name : name}`}
                                    required
                                    onChange={handleChange}
                                    pattern="^[a-zA-Zа-яА-Я -]+$" 
                                />
                                <span className={`profile__err-message ${errors.name && "profile__err-message_active"}`}>{errors.name || ""}</span>                                
                            </label>
                            <label className="profile__label">
                                <span className="profile__input-text">E-mail</span>
                                <input 
                                    className={`profile__input ${isLoading ? "profile__input_inactive" : ""}`}
                                    placeholder="E-mail" 
                                    type="email"  
                                    name="email"
                                    required 
                                    value={`${values.email ? values.email : email}`}  
                                    onChange={handleChange}   
                                    pattern="^.*@.+$" 
                                />
                                <span className={`profile__err-message ${errors.email && "profile__err-message_active"}`}>{errors.email || ""}</span> 
                            </label>
                        </fieldset>                       
                        <>
                            {{
                                success:
                                <span className='profile__error-message profile__error-message_success'>
                                    {!isValid && error.message}
                                </span>,
                                error:
                                <span className='profile__error-message profile__error-message_error'>
                                    {!isValid && error.message}
                                </span>,
                                default:
                                <span className='profile__error-message profile__error-message_default'/>
                            }[error.type]}
                            
                            {disabled && (
                            <>
                                    <button className="profile__button" type="button" onClick={handleChangeButton}>Редактировать</button>
                                    <div className="profile__exit-button-link">
                                        <Link className="profile__exit-button" onClick={handleSignOut} to="/">Выйти из аккаунта</Link> 
                                    </div> 
                            </>
                            
                            )}
                            { !disabled && (
                                <>
                                    <button type="submit" className={submitButtonClass} disabled={!isValid || isRepeated ||isLoading ? true : false}>Сохранить</button>
                                </>
                            )}  
                        </>                     
                    </form>                                                
            </section>
        </>
    )
}


