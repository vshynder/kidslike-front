import React from 'react';
import SignInForm from '../SignInForm/SignInForm';
import styles from './SignInPage.module.css';

const {
  container,
  signIn,
  logo,
  signInForm,
  pageTitel,
  loginDesctop,
  DesktopPage,
  desktopTitel,
  authMain,
  authPresents,
  authSasha,
} = styles;

function SignInPage() {
  return (
    <div className={container}>
      <section className={signIn}>
        <div className={logo}>{/* <h1>Logo</h1> */}</div>
        <div className={signInForm}>
          <h2 className={pageTitel}>Мотивуйте дитину вдосконалювати себе!</h2>

          <SignInForm />
        </div>
      </section>

      <section className={loginDesctop}>
        <div className={DesktopPage}>
          <h2 className={desktopTitel}>
            Мотивуйте дитину вдосконалювати себе!
          </h2>
          <div className={authMain}></div>
          <div className={authPresents}></div>
          <div className={authSasha}></div>
        </div>
      </section>
    </div>
  );
}

export default SignInPage;
