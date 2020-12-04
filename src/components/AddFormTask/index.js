import React, { useState, useDispatch } from 'react';
import styles from './addFormTask.module.scss';

import star from '../../assets/images/changeHabbitStar.png';
import select from '../../assets/images/changeHabbitSelect.png';

import taskOpeartions from '../../redux/operations/tasksOperation';
import { connect } from 'react-redux';

const AddFormTask = ({ children, addTask, onClose }) => {
  const [childId, setChildId] = useState('');
  const [title, setTitle] = useState('');
  const [reward, setReward] = useState('');
  const [time, setTime] = useState('');

  const handleCloseClick = () => {
    console.log('Close mark clicked');
  };

  const handleCancel = () => {
    console.log('cancel');
  };

  const handleSave = () => {
    console.log('save');
    console.log('child id: ', childId);
    addTask(childId, title, reward, time);
    onClose()
  };

  return (
    <div className={styles.changehabbit__form}>
      <svg
        onClick={onClose}
        className={styles.changehabbit__close}
        width="12"
        height="12"
        viewBox="0 0 12 12"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M1 1L11 11" strokeWidth="2" strokeLinecap="round" />
        <path d="M1 11L11 0.999999" strokeWidth="2" strokeLinecap="round" />
      </svg>

      <h1 className={styles.changehabbit__title}>Додавання задачі</h1>
      <div className={styles.changehabbit__input}>
        <label htmlFor="name">Назва</label>
        <input
          className={styles.changehabbit__inputLong}
          id="name"
          type="text"
          placeholder="Введіть назву"
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div className={styles.changehabbit__input}>
        <label htmlFor="task">Призначення задачі</label>
        <select
          value={childId}
          className={styles.changehabbit__inputLong}
          id="task"
          onChange={(e) => setChildId(e.target.value)}
        >
          <option>Оберіть дитину</option>
          {children &&
            children.map((child) => (
              <option key={child._id} value={child._id}>
                {child.name}
              </option>
            ))}
        </select>
        <img
          className={styles.changehabbit__inputSelect}
          src={select}
          alt="select"
        />
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
          onChange={(e) => setReward(e.target.value)}
        />
        <img className={styles.changehabbit__inputStar} src={star} alt="star" />
        <label className={styles.label__day} htmlFor="day">
          Дні на виконання (необов'язково)
        </label>
        <input
          className={`${styles.changehabbit__inputLong} ${styles.changehabbit__inputShort}`}
          id="day"
          type="number"
          min="0"
          max="99"
          placeholder="00"
          onChange={(e) => setTime(e.target.value)}
        />
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

const mapStateToProps = (state) => ({
  children: state.childrens,
});

const mapDispatchToProps = (dispatch) => ({
  addTask: (id, title, reward, time) =>
    dispatch(taskOpeartions.addTask(id, title, reward, time)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddFormTask);
