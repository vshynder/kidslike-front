import React from 'react';
import style from './notify.module.css';

const Notify = ({ children }) => {
  return (
    <div className={style.notify__container}>
      <p className={style.notify__text}>{children}</p>
    </div>
  );
};

export default Notify;
