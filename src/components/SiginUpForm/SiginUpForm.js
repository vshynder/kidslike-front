import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';


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

  const RegistrationSchema = yup.object().shape({
      email: yup
        .string()
        .email('E-mail введено некоректно')
        .required("Обов'язкове поле"),
      password: yup
        .string()
        .min(6, 'Пароль повинен містити 6 символів')
        .max(12, 'Максимальна кількість символів 12')
        .required("Обов'язкове поле"),
      name: yup.string(),
    })

  return (
    <div className={container}>
      <h2 className={siginUpTitel}>Реєстрація</h2>
      <Formik
       initialValues={{ email: '', password: '', name: '' }}
       validationSchema={RegistrationSchema}
       onSubmit={(RegistrationSchema, { resetForm }) => {
         setTimeout(() => {
           console.log(JSON.stringify(RegistrationSchema, null, 2));
           resetForm();
         }, 400);
       }}
     >
       {({ isSubmitting }) => (
         <Form className={form}>
           <p className={form__titel}>Ваш E-mail</p>
           <Field className={form__input} type="email" name="email" placeholder="E-mail" />
           <ErrorMessage className={form__error} name="email" component="div" />
           <p className={form__titel}>Введіть пароль</p>
           <Field className={form__input} type="password" name="password" placeholder="-----------"/>
           <ErrorMessage className={form__error} name="password" component="div" />
           <p className={form__titel}>Ваше ім’я</p>
           <Field className={form__input} type="name" name="name" placeholder="Ім’я" />
           <div className={btnContainer}>
           <button className={btnContainer__formBtn} type="submit" disabled={isSubmitting}>
           Зареєструватись
           </button>
           <a className={[btnContainer__socialBtn, google].join(' ')} href={"#"}>Увійти за допомогою Google</a>
           <a className={[btnContainer__socialBtn, facebook].join(' ')} href="#">Увійти за допомогою Facebook</a>
           </div>
         </Form>
       )}
     </Formik>
     <p className={login}>
            Уже є аккаунт? <a className={login__link} href="#">Увійти</a>
            {/* <NavLink to="#">Увійти</NavLink> */}
          </p>
    </div>
  );
}

export default SiginUpForm;
