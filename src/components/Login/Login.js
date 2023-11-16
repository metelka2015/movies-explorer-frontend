import './Login.css';
import { AuthForm } from '../AuthForm/AuthForm.js';

export function Login() {
    return (
        <section className="login">
                <AuthForm
                title="Рады видеть!"
                textButton="Войти"
                link="Регистрация"
                linkTo="/signup"
                linkTitle="Ещё не зарегистрированы?"
                />  
        </section>
    )
  }