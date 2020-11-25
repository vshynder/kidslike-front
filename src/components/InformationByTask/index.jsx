import React from 'react';
import profilePhoto from './profile-example.png';
import styles from './InformationByTask.module.css';
import stylingStar from './../../assets/images/Star11.svg';
import iconconfirm from './../../assets/images/confirm.svg';
import iconcross from './../../assets/images/cross.svg';

function InformationByTask() {
  return (
    <>
      <div className={styles.container}>
        <span className={styles.firstSmallContainer}>
          <span className={styles.childPhotoContainer}>
            <img
              src={profilePhoto}
              alt="profile-image"
              className={styles.userPhoto}
            />
          </span>
          <span className={styles.taskNameAndCostContainer}>
            <p className={styles.taskName}>Помити посуд</p>
            <span className={styles.costContainer}>
              <img
                src={stylingStar}
                alt="styling-star"
                className={styles.taskCostStar}
              />
              <p className={styles.taskCostText}>5</p>
            </span>
          </span>
        </span>
        <span className={styles.secondSmallContainer}>
          <span className={styles.timeContainer}>
            <p className={styles.greyTitle}>Час на виконання:</p>
            <p className={styles.taskDayText}>1 день</p>
          </span>
          <span>
            <p className={styles.greyTitle}>Підтвердження</p>
            <span className={styles.confirmationContainer}>
              <button className={styles.confirmationButton}>
                <img src={iconconfirm} alt={'pic'}></img>
              </button>
              <button className={styles.confirmationButton}>
                <img src={iconcross} alt={'pic'}></img>
              </button>
            </span>
          </span>
        </span>

        <button className={styles.additionButton}>...</button>
        <ul className={styles.submenu}>
          <li className={styles.submenuItem}>Редагувати</li>
          <li className={styles.submenuItem}>Видалити</li>
        </ul>
      </div>
    </>
  );
}

export default InformationByTask;
