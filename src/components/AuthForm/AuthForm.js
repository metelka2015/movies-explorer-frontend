import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import './AuthForm.css';
import { Logo } from '../Logo/Logo.js';
import { useFormAndValidation } from '../../hooks/useFormAndValidation.js';
import { REG_EMAIL } from '../../utils/constants.js';

export function AuthForm({
    title,
    textButton,
    link,
    linkTo,
    linkTitle,
    onSubmit, 
    loggedIn, 
    isLoading, 
    authError  
  }) {
    const location = useLocation();
    const navigate = useNavigate();

    const { values, handleChange, errors, isValid, resetForm } = useFormAndValidation();

    function handleSubmit(e) {
        e.preventDefault();
        if (isValid) {
            onSubmit(values);
        }
    }

    useEffect(() => {
        if (loggedIn) resetForm();
    }, [resetForm, loggedIn]);
    
    useEffect(() => {
        if (loggedIn) {
            navigate("/movies", {replace: true});
        }
    }, [navigate, loggedIn]);    


    return (
        <div className="authform">
            <Logo />
            <h1 className="authform__title">{title}</h1>
            <form className="authform__form" onSubmit={handleSubmit}>
                <fieldset className="authform__fieldset">

                    {location.pathname === "/signup" && (
                        <>
                            <label className="authform__label">
                                <span className="authform__input-text">Имя</span>
                                <input 
                                className={`authform__input ${ isLoading ? "authform__input_inactive" : ""}`} 
                                placeholder="Имя" 
                                minLength="2" 
                                maxLength="30" 
                                type="text" 
                                name="name" 
                                required
                                value={values.name || ""}
                                onChange={handleChange}
                                pattern="^[a-zA-Zа-яА-Я -]+$"></input> 
                                <span className={`authform__error-message ${errors.name && "authform__error-message_active"}`}>{errors.name || ""}</span>
                            </label>  
                        </>                          
                    )}

                    <label className="authform__label">
                        <span className="authform__input-text">E-mail</span>
                        <input 
                        className={`authform__input ${ isLoading ? "authform__input_inactive" : ""}`} 
                        placeholder="E-mail" 
                        type="email" 
                        name="email" 
                        required
                        value={values.email || ""}
                        onChange={handleChange}
                        pattern={REG_EMAIL}
                        ></input> 
                        <span className={`authform__error-message ${errors.email && "authform__error-message_active"}`}>{errors.email || ""}</span>
                    </label>
                    <label className="authform__label">
                        <span className="authform__input-text">Пароль</span>
                        <input className={`authform__input ${ isLoading ? "authform__input_inactive" : ""}`}
                         placeholder="Пароль" 
                         minLength="6" 
                         maxLength="30" 
                         type="password" 
                         name="password" 
                         required
                         value={values.password || ""}
                        onChange={handleChange}>
                        </input> 
                        <span className={`authform__error-message ${errors.password && "authform__error-message_active"}`}>{errors.password || ""}</span>
                    </label>     
                </fieldset>
                
                <span className="authform__err-message">{authError}</span>
               
                <button 
                className={isValid && !isLoading ? "authform__button" : "authform__button authform__button_disabled"} 
                disabled={!isValid}
                type="submit"
                >{textButton}</button>
                <div className="authform__link-container">
                    <span className="authform__link-text">{linkTitle}</span>
                    <Link className="authform__link" to={linkTo}>{link}</Link>
                </div>
            </form>
        </div>
    );
  }
  