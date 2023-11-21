import './Register.css';
import { AuthForm } from '../AuthForm/AuthForm.js';

export function Register({ handleRegister, isLoading }) {
    return (
        <section className="register">
                 <AuthForm
                title="Добро пожаловать!"
                textButton="Зарегистрироваться"
                link="Войти"
                linkTo="/signin"
                linkTitle="Уже зарегистрированы?"
                onSubmit={handleRegister}
                isLoading={isLoading}
                />
        </section>
    )
  }