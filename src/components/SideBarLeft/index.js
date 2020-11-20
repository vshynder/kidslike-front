import React from 'react';
import styles from './SideBarLeft.module.css';

function SideBarLeft() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.heading}>
          <img
              src=""
              alt="heading-logo"
              className={styles.headingLogo}
            /> 
        </div>
        <div className={styles.childContainer}>
          <div className={styles.childForm}></div>
          <div className={styles.childForm}></div>
        </div>    
        
          <button className={styles.btnAddBaby}>Додати дитину +</button>
    
      </div>
    </>
  );
}
export default SideBarLeft;