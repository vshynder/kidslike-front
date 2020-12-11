import React from 'react';
import styles from './DropDown.module.scss';
import taskOperations from '../../redux/operations/tasksOperation';
import { connect } from 'react-redux';

function ChildTaskDropDown({ mouseLeave, taskId, onTaskDelete }) {
  return (
    <div onMouseLeave={mouseLeave} className={styles.dropdown}>
      <div className={styles.dropdown__button}>Редагувати</div>
      <div onClick={() => onTaskDelete(taskId)} className={styles.dropdown__button}>Видалити</div>
    </div>
  );
}


const mapDispatchToProps = (dispatch) => ({
  onTaskDelete: (taskId) => dispatch(taskOperations.deleteTask(taskId)),
});

export default connect(null, mapDispatchToProps)(ChildTaskDropDown)