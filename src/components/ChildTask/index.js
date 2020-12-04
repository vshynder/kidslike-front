import React, { useState } from 'react';
import styles from './ChildTask.module.scss';
import DropDown from './ChildTaskDropDown';

import girlImage from '../../assets/images/childtask_girl.png';
import boyImage from '../../assets/images/childtask_boy.png';

export default function ChildTask({ gender, daysToDo, reward, title }) {
  const [isApproved, setIsApproved] = useState(null);
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className={styles.childtask}>
      <div
        onClick={() => {
          setIsFocused(true);
        }}
        className={styles.childtask__dots}
      >
        <div className={styles.childtask__dots_dot}></div>
        <div className={styles.childtask__dots_dot}></div>
        <div className={styles.childtask__dots_dot}></div>
        {isFocused && (
          <DropDown
            mouseLeave={() => {
              setIsFocused(false);
            }}
            className={styles.dropdownActive}
          />
        )}
      </div>
      <div className={styles.childtask__name}>
        <img
          className={styles.childtask__name_img}
          src={gender === 'female' ? girlImage : boyImage}
        />
        <div className={styles.childtask__name_info}>
          <p className={styles.childtask__name_text}>{title}</p>
          <p className={styles.childtask__name_mark}>{reward}</p>
        </div>
      </div>
      <div className={styles.childtask__info}>
        <div className={styles.childtask__info_time}>
          <p className={styles.childtask__info_time_title}>Час на виконання:</p>
          <p className={styles.childtask__info_time_value}>{daysToDo} день</p>
        </div>
        <div className={styles.childtask__info_approve}>
          <p className={styles.childtask__info_approve_title}>Підтвердження</p>
          <div className={styles.childtask__info_approve_buttons}>
            <button
              onClick={() => {
                setIsApproved(true);
              }}
              className={styles.childtask__info_approve_buttons_btn}
            >
              <div
                className={styles.childtask__info_approve_buttons_btn_check}
              ></div>
            </button>
            <button
              onClick={() => {
                setIsApproved(true);
              }}
              className={styles.childtask__info_approve_buttons_btn}
            >
              <div
                className={styles.childtask__info_approve_buttons_btn_cross}
              ></div>
              <div
                className={styles.childtask__info_approve_buttons_btn_cross2}
              ></div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
