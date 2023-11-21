import './Login.css';
import { AuthForm } from '../AuthForm/AuthForm.js';

export function Login({ handleLogin, isLoading}) {
    return (
        <section className="login">
                <AuthForm
                title="Рады видеть!"
                textButton="Войти"
                link="Регистрация"
                linkTo="/signup"
                linkTitle="Ещё не зарегистрированы?"
                onSubmit={handleLogin}
                isLoading={isLoading}
                />  
        </section>
    )
  }