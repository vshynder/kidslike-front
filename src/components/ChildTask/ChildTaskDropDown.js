import React, { useState } from 'react';
// import styles from './DropDown.module.scss';
import Modal from '../Modal/Modal';
import ChangeTaskForm from '../ChangeTaskForm/ChangeTaskForm';
import styles from '../InformationByTask/InformationByTask.module.css';
import taskOperations from '../../redux/operations/tasksOperation';
import { connect } from 'react-redux';

function ChildTaskDropDown({ mouseLeave, taskCurrent, onTaskDelete, taskId }) {
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
        <div onClick={() => onTaskDelete(taskId)} className={styles.btn__modal}>
          Видалити
        </div>
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

const mapDispatchToProps = (dispatch) => ({
  onTaskDelete: (taskId) => dispatch(taskOperations.deleteTask(taskId)),
});

export default connect(null, mapDispatchToProps)(ChildTaskDropDown);
