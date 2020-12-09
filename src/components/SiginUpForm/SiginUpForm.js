import React from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import authOperations from '../../redux/operations/authOperations';

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
  const dispatch = useDispatch();
  return (
    <div className={container}>
      <h2 className={siginUpTitel}>Реєстрація</h2>
      <Formik
        initialValues={{
          password: '',
          email: '',
          username: '',
        }}
        validationSchema={Yup.object({
          email: Yup.string()
            .email('E-mail введено некоректно')
            .required("Обов'язкове поле"),
          password: Yup.string()
            .min(6, 'Пароль повинен містити не менше 6-ти символів')
            .max(20, 'Максимальна кількість символів 20')
            .required("Обов'язкове поле"),
          username: Yup.string().required("Обов'язкове поле"),
        })}
        onSubmit={(values, { resetForm }) => {
          setTimeout(() => {
            console.log(JSON.stringify(values, null, 2));
            dispatch(authOperations.registrationUser(values));
            resetForm();
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
                <ErrorMessage className={form__error} name="email" component={"div"} />
            </div>
            <p className={form__titel}>Введіть пароль</p>
            <Field
              className={[
                form__input,
                errors.password ? form__inputError : '',
              ].join(' ')}
              type="password"
              name="password"
              placeholder="-----------"
            />
            <div className={error}>
                <ErrorMessage className={form__error} name="password" component={"div"} />
            </div>
            <p className={form__titel}>Ваше ім’я</p>
            <Field
              className={[
                form__input,
                errors.name ? form__inputError : '',
              ].join(' ')}
              type="username"
              name="username"
              placeholder="Ім’я"
            />
            <div className={error}>
              <ErrorMessage className={form__error} name="username" component={"div"} />
            </div>
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
                href="https://kidslike-back-end.herokuapp.com/api/auth/google"
              >
                Увійти за допомогою Google
              </a>
              <a
                className={[btnContainer__socialBtn, facebook].join(' ')}
                href="https://kidslike-back-end.herokuapp.com/api/auth/facebook"
              >
                Увійти за допомогою Facebook
              </a>
            </div>
          </Form>
        )}
      </Formik>
      <p className={login}>
        Уже є аккаунт?{' '}
        <Link className={login__link} to={'/login'}>
          Увійти
        </Link>
      </p>
    </div>
  );
}

export default SiginUpForm;