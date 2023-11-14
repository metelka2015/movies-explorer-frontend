import './Register.css';
import { AuthForm } from '../AuthForm/AuthForm.js';

export function Register() {
    return (
        <section className="register">
            <div className='register__cover'>
                 <AuthForm
                title="Добро пожаловать!"
                textButton="Зарегистрироваться"
                link="Войти"
                linkTo="/signin"
                linkTitle="Уже зарегистрированы?"
                children={
                    <label className="authform__label">
                        <span className="authform__input-text">Имя</span>
                        <input className="authform__input" type="text" name="name" required></input> 
                        <span className="authform__error-message"></span>
                    </label>                 
                } />
            </div>
           
        </section>
    )
  }