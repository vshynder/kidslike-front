import React from 'react';

import Logo from './Logo';
import Navigation from './Navigation';
import UserInfo from '../UserInfo';

import styles from './styles.module.scss';

import { connect } from 'react-redux';

function Header({ userToken }) {
  return (
    <div className={styles.header__container}>
      <Logo />
      {userToken && <Navigation />}
      {userToken && <UserInfo />}
    </div>
  );
}

const mapStateToProps = (state) => ({
  userToken: state.user.accessToken,
});

export default connect(mapStateToProps)(Header);
