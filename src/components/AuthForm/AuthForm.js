import { Link } from 'react-router-dom';
import './AuthForm.css';
import { Logo } from '../Logo/Logo.js';

export function AuthForm({
    title,
    textButton,
    children,
    link,
    linkTo,
    linkTitle    
  }) {
    return (
        <div className="authform">
            <Logo />
            <h2 className="authform__title">{title}</h2>
            <form className="authform__form">
                <fieldset className="authform__fieldset">

                    {children}

                    <label className="authform__label">
                        <span className="authform__input-text">E-mail</span>
                        <input className="authform__input" type="email" name="email" required></input> 
                        <span className="authform__error-message"></span>
                    </label>
                    <label className="authform__label">
                        <span className="authform__input-text">Пароль</span>
                        <input className="authform__input" type="password" name="password" required></input> 
                        <span className="authform__error-message"></span>
                    </label>     
                </fieldset>
                <button className="authform__button" type="submit">{textButton}</button>
                <div className="authform__link-container">
                    <span className="authform__link-text">{linkTitle}</span>
                    <Link className="authform__link" to={linkTo}>{link}</Link>
                </div>
            </form>
        </div>
    );
  }
  