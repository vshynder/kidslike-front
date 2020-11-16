import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { NavLink } from 'react-router-dom';

// Styles
import styles from './SiginUpForm.module.css'

const {container,
  siginUpTitel,
  form,
  form__titel,
  form__input,
  form__error,
  btnContainer,
  btnContainer__formBtn,
  btnContainer__socialBtn,
  google,
  facebook,
  login,
  login__link
} = styles

function SiginUpForm() {
  return (
    <div className={container}>
      <h2 className={siginUpTitel}>Реєстрація</h2>
      <Formik
       initialValues={{ email: '', password: '' }}
       validate={values => {
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
       {({ isSubmitting }) => (
         <Form className={form}>
           <p className={form__titel}>Ваш E-mail</p>
           <Field className={form__input} type="email" name="email" placeholder="E-mail" />
           <ErrorMessage className={form__error} name="email" component="div" />
           <p className={form__titel}>Введіть пароль</p>
           <Field className={form__input} type="password" name="password" placeholder="-----------" />
           <ErrorMessage className={form__error} name="password" component="div" />
           <p className={form__titel}>Ваше ім’я</p>
           <Field className={form__input} type="name" name="name" placeholder="Ім’я" />
           <div className={btnContainer}>
           <button className={btnContainer__formBtn} type="submit" disabled={isSubmitting}>
           Зареєструватись
           </button>
           <a className={[btnContainer__socialBtn, google].join(' ')} href="#">Увійти за допомогою Google</a>
           <a className={[btnContainer__socialBtn, facebook].join(' ')} href="#">Увійти за допомогою Facebook</a>
           </div>
         </Form>
       )}
     </Formik>
     <p className={login}>
            Уже є аккаунт? <a className={login__link} href="#">Увійти</a>
            {/* <NavLink to="#">Увійти</NavLink> */}
          </p>
      {/* <section className={}>
        <h2 className={}>Реєстрація</h2>
        <div className={}>
          <form className={}>
            <p className={}>Ваш E-mail</p>
            <input className={}></input>
            <p className={}>Введіть пароль</p>
            <input className={}></input>
            <p className={}>Ваше ім’я</p>
            <input className={}></input>
          </form>
          <div className={}>
            <button className={}>Зареєструватись</button>
            <button className={}>Увійти за допомогою Google</button>
            <button className={}>Увійти за допомогою Facebook</button>
          </div>
          <p>
            Уже є аккаунт?
            <a href="#">Увійти</a>
            <NavLink to="#">Увійти</NavLink>
          </p>
        </div>
      </section> */}
    </div>
  );
}

export default SiginUpForm;
