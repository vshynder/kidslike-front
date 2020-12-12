import React, { useState } from 'react';
// import styles from './DropDown.module.scss';
import Modal from '../Modal/Modal';
import ChangeTaskForm from '../ChangeTaskForm/ChangeTaskForm';
import styles from '../InformationByTask/InformationByTask.module.css';

export default function ChildTaskDropDown({ mouseLeave, taskCurrent }) {
  const [isRenderModal, setIsRenderModal] = useState(false);
  console.log(999999, taskCurrent);
  return (
    <div>
      <div
        // ref={this.submenu}
        className={styles.modalmini}
        style={{ zIndex: 12, top: '10px', right: '6px' }}
        onMouseLeave={mouseLeave}
      >
        <button
          className={styles.btn__modal}
          // onClick={() => {
          //   mouseLeave();
          //   setIsRenderModal(true);
          // }}
        >
          Редагувати
        </button>
        <button onClick={() => {}} className={styles.btn__modal}>
          Видалити
        </button>
      </div>
      {isRenderModal && (
        <Modal onClose={() => setIsRenderModal(false)}>
          <ChangeTaskForm
            child={taskCurrent}
            onClose={() => setIsRenderModal(false)}
          />
        </Modal>
      )}
    </div>
  );
}
