import React from 'react';

import { NavLink, useLocation } from 'react-router-dom';

import family from '../../assets/images/navigation/family.png';
import present from '../../assets/images/navigation/present.png';
import task from '../../assets/images/navigation/tasks.png';

import styles from './styles.module.scss';

export default function Navigation() {
  const location = useLocation();
  return (
    <div className={styles.header__navigation}>
      <NavLink
        className={
          location.pathname === '/main'
            ? styles.header__navigation_button__active
            : styles.header__navigation_button
        }
        to="/main"
      >
        <img className={styles.header__navigation_button_img} src={family} />
        <span className={styles.header__navigation_button_text}>Сім'я</span>
      </NavLink>
      <NavLink
        className={
          location.pathname === '/childTasks'
            ? styles.header__navigation_button__active
            : styles.header__navigation_button
        }
        to="/childTasks"
      >
        <img className={styles.header__navigation_button_img} src={task} />
        <span className={styles.header__navigation_button_text}>
          Звички і задачі
        </span>
      </NavLink>
      <NavLink
        className={
          location.pathname === '/presents'
            ? styles.header__navigation_button__active
            : styles.header__navigation_button
        }
        to="/presents"
      >
        <img className={styles.header__navigation_button_img} src={present} />
        <span className={styles.header__navigation_button_text}>Подарунки</span>
      </NavLink>
    </div>
  );
}
