import React from 'react';
import profilePhoto from './profile-example.png';
import exitButton from './exit.svg';
import styles from './UserInfo.module.css';

function UserInfo() {
  return (
    <>
      <div className={styles.userInfoContainer}>
        <span className={styles.userPhotoContainer}>
          <img
            src={profilePhoto}
            alt="profile-image"
            className={styles.userPhoto}
          />
        </span>

        <p className={styles.userName}>Marta Rogova</p>
        <img src={exitButton} alt="exit-button" width="21px" />
      </div>
    </>
  );
}

export default UserInfo;
