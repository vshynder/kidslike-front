import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

// Styles
import styles from './SiginUpForm.module.css';

const {
  container,
  siginUpTitel,
  form,
  form__titel,
  form__input,
  form__inputError,
  error,
  form__error,
  btnContainer,
  btnContainer__formBtn,
  btnContainer__socialBtn,
  google,
  facebook,
  login,
  login__link,
} = styles;

function SiginUpForm() {
  return (
    <div className={container}>
      <h2 className={siginUpTitel}>Реєстрація</h2>
      <Formik
        initialValues={{ email: '', password: '' }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = "Це обов'язкове поле";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = 'E-mail введено некоректно';
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting, errors }) => (
          <Form className={form}>
            <p className={form__titel}>Ваш E-mail</p>
            <Field
              className={[
                form__input,
                errors.email ? form__inputError : '',
              ].join(' ')}
              type="email"
              name="email"
              placeholder="E-mail"
            />
            <div className={error}>
              <ErrorMessage
                className={form__error}
                name="email"
                component="div"
              />
            </div>
            <p className={form__titel}>Введіть пароль</p>
            <Field
              className={form__input}
              type="password"
              name="password"
              placeholder="-----------"
            />
            <div className={error}>
              <ErrorMessage
                className={form__error}
                name="password"
                component="div"
              />
            </div>
            <p className={form__titel}>Ваше ім’я</p>
            <Field
              className={form__input}
              type="name"
              name="name"
              placeholder="Ім’я"
            />
            <div className={btnContainer}>
              <button
                className={btnContainer__formBtn}
                type="submit"
                disabled={isSubmitting}
              >
                Зареєструватись
              </button>
              <a
                className={[btnContainer__socialBtn, google].join(' ')}
                href="#"
              >
                Увійти за допомогою Google
              </a>
              <a
                className={[btnContainer__socialBtn, facebook].join(' ')}
                href="#"
              >
                Увійти за допомогою Facebook
              </a>
            </div>
          </Form>
        )}
      </Formik>
      <p className={login}>
        Уже є аккаунт?{' '}
        <a className={login__link} href="#">
          Увійти
        </a>
      </p>
    </div>
  );
}

export default SiginUpForm;
