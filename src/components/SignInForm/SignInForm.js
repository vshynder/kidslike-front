import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import styles from './SignInForm.module.css';

import { connect } from 'react-redux';
import { operations } from '../../redux';

const Login = ({ loginUser, isUserLoggedIn }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleAuthorize = () => {
    loginUser({ email, password });
  };

  useEffect(() => {
    if (isUserLoggedIn) {
      history.push('/main');
    }
  }, [isUserLoggedIn]);

  return (
    <section className={styles.loginPage}>
      <div className={styles.mainLabel}>
        <h1 className={styles.signInText}> Вхід </h1>
      </div>
      <div className={styles.loginContainer}>
        <label>Ваш E-mail</label>
        <input
          type="text"
          placeholder="E-mail"
          autoFocus
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Введіть пароль</label>
        <input
          type="password"
          placeholder="_ _ _ _ _ _ _ _ _ _ _"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <div className={styles.btnContainer}>
          <button
            className={styles.formBtn}
            type="submit"
            onClick={handleAuthorize}
          >
            Увійти
          </button>
          <p>
            <a className={(styles.socialBtn, styles.google)} href="#">
              Увійти за допомогою Google
            </a>
            <a className={(styles.socialBtn, styles.facebook)} href="#">
              Увійти за допомогою Facebook
            </a>
            <p className={styles.signUpText}>
              Немає аккаунту?{' '}
              <Link className={styles.signUpLink} to={'/signUpText'}>
                Зареєструватись
              </Link>
            </p>
          </p>
        </div>
      </div>
    </section>
  );
};

const mapStateToProps = (state) => ({
  isUserLoggedIn: state.user.accessToken,
});

const mapDispatchToProps = (dispatch) => ({
  loginUser: (user) => dispatch(operations.authOperations.loginUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
