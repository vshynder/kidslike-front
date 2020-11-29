import React from 'react';

import Logo from './Logo';
import Navigation from './Navigation';
import UserInfo from '../UserInfo';

import styles from './styles.module.scss';

function Header() {
  console.log(styles);
  return (
    <div className={styles.header__container}>
      <Logo />
      <Navigation />
      <UserInfo />
    </div>
  );
}

export default Header;
