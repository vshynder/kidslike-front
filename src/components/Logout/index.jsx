import React from 'react';
import styles from './Logout.module.css';

function Logout({ onClose }) {
  return (
    <>
      <div className={styles.logoutContainer}>
        <p className={styles.logoutText}>Ви дійсно хочете вийти?</p>
        <div className={styles.logoutButtonContainer}>
          <button className={styles.logoutButton}>Так</button>
          <button className={styles.logoutButton} onClick={onClose}>
            Ні
          </button>
        </div>
      </div>
    </>
  );
}

export default Logout;
