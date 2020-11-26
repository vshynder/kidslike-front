import React from 'react';
import styles from './DropDown.module.scss';

export default function ChildTaskDropDown({ mouseLeave }) {
  return (
    <div onMouseLeave={mouseLeave} className={styles.dropdown}>
      <div className={styles.dropdown__button}>Редагувати</div>
      <div className={styles.dropdown__button}>Видалити</div>
    </div>
  );
}
