import React from 'react';
import styles from './addHabitForm.module.scss';

import star from '../../assets/images/changeHabbitStar.png';
import select from '../../assets/images/changeHabbitSelect.png';

const AddFormHabit = () => {
  const handleCloseClick = () => {
    console.log('Close mark clicked');
  };

  const handleCancel = () => {
    console.log('cancel');
  };

  const handleSave = () => {
    console.log('save');
  };

  return (
    <div className={styles.changehabbit__form}>
      <svg
        onClick={handleCloseClick}
        className={styles.changehabbit__close}
        width="12"
        height="12"
        viewBox="0 0 12 12"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M1 1L11 11" strokeWidth="2" strokeLinecap="round" />
        <path d="M1 11L11 0.999999" strokeWidth="2" strokeLinecap="round" />
      </svg>

      <h1 className={styles.changehabbit__title}>Додавання звички</h1>
      <div className={styles.changehabbit__input}>
        <label htmlFor="name">Назва</label>
        <input
          className={styles.changehabbit__inputLong}
          id="name"
          type="text"
          placeholder="Введіть назву"
        />
      </div>

      <div className={styles.changehabbit__input}>
        <label htmlFor="task">Призначення звички</label>
        <select className={styles.changehabbit__inputLong} id="task">
          <option>Оберіть дитину</option>
        </select>
        <img className={styles.changehabbit__inputSelect} src={select}  alt="select"/>
      </div>

      <div
        className={`${styles.changehabbit__input} ${styles.changehabbit__inputMod}`}
      >
        <label htmlFor="grade">Бал</label>
        <input
          className={`${styles.changehabbit__inputLong} ${styles.changehabbit__inputShort}`}
          id="grade"
          type="number"
          min="0"
          max="99"
          placeholder="00"
        />
        <img className={styles.changehabbit__inputStar} src={star} alt="star" />
      </div>
    
        
      <div className={styles.changehabbit__btns}>
        <button onClick={handleCancel} className={styles.changehabbit__button}>
          Відміна
        </button>
        <button
          onClick={handleSave}
          className={`${styles.changehabbit__button} ${styles.changehabbit__buttonOrange}`}
        >
          Зберегти
        </button>
      </div>
    </div>
  );
};

export default AddFormHabit;