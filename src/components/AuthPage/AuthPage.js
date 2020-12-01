import React from 'react';
import { Link } from 'react-router-dom';

// Styles
import styles from './AuthPage.module.css';
const {
  container,
  authMenu,
  main,
  authMenu__logo,
  authMenu__title,
  authMenu__sub,
  btn,
  btn__in,
  btn__out,
  authDesktop,
  authMain,
  authPresents,
  authSasha,
} = styles;

function AuthPage() {
  return (
    <div className={container}>
      <section className={authMenu}>
        <div>
          <div className={authMenu__logo}>{/* <h1>KidsLike</h1> */}</div>
          <div className={main}>
            <h2 className={authMenu__title}>
              Мотивуйте дитину вдосконалювати себе!
            </h2>
            <p className={authMenu__sub}>
              Вкажіть звички та задачі, які буде виконувати ваша дитина
              (наприклад читати 20 сторінок книжки в день), мотивуйте
              подарунками виконувати їх і очікуйте результату!
            </p>
            <div className={btn}>
              <Link className={btn__in} to={'/login'}>
                Вхід
              </Link>
              <Link className={btn__out} to={'/register'}>
                Зареєструватися
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className={authDesktop}>
        <div className={authMain}></div>
        <div className={authPresents}></div>
        <div className={authSasha}></div>
      </section>
    </div>
  );
}

export default AuthPage;
