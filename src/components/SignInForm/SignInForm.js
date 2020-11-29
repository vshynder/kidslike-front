import React from "react";
import { Link } from 'react-router-dom';

const Login = (props) => {
  const {
    loginPage,
    mainLabel,
    signInText,
    email,
    password,
    btnContainer,
    socialBtn,
    google,
    facebook,
    formBtn,
    signUpText,
    signUpLink,
  } = props;

  return (
    <section className={loginPage}>
      <div className={mainLabel}>
        <h1 className={signInText}> Вхід </h1>
      </div>
      <div className={loginContainer}>
        <label>Ваш E-mail</label>
        <input
          type="text"
          placeholder="E-mail"
          autoFocus
          required
          value={email}

        />
        <label>Введіть пароль</label>
        <input
          type="password"
          placeholder="_ _ _ _ _ _ _ _ _ _ _"
          required
          value={password}

        />

        <div className={btnContainer}>
          <button
            className={formBtn}
            type="submit"
            disabled={isSubmitting}
          >
            Увійти
          </button>
          <p>
            <a className={socialBtn, google} href="#">
              Увійти за допомогою Google
            </a>
            <a className={socialBtn, facebook} href="#">
              Увійти за допомогою Facebook
            </a>
            <p className={signUpText}>
              Немає аккаунту?{" "}
              <Link className={signUpLink} to={"/signUpText"}>
                Зареєструватись
              </Link>
            </p>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Login;
