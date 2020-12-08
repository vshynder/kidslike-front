import React, { useState, useEffect } from 'react';

import { connect } from 'react-redux';

import Header from '../Header';
import InformationByTask from '../InformationByTask';
import InformationByHabbit from '../ContainerForAllHabbits/ContainerForAllHabbits';
import Modal from '../Modal/Modal';
import AddFormHabit from '../AddFormHabit';
import AddFormTask from '../AddFormTask';

import tasksOperation from '../../redux/operations/tasksOperation';
import habitsOperation from '../../redux/operations/habbitOperation';
import getChildrensOperation from '../../redux/operations/getAllChildrens';

import taskImage from '../../assets/images/tasks.png';
import styles from './index.module.scss';

function TasksPage({ tasks, habbits, getTasks, getHabbits, getChildren }) {
  useEffect(() => {
    getTasks();
    getHabbits();
    getChildren();
  }, []);

  const [isTasksModal, setIsTasksModal] = useState(false);
  const [isHabbitsModal, setIsHabbitsModal] = useState(false);

  return (
    <>
      <div className={`container ${styles.container}`}>
        <Header />

        <div className={styles.spacer}></div>

        {tasks.length
          ? tasks.map((task) => (
              <InformationByTask key={task._id} task={task} />
            ))
          : null}
        <div className={styles.habitsInfo_button}>
          <button
            onClick={() => setIsTasksModal(true)}
            className={styles.habitsInfo_button__button}
          >
            Додати задачу +
          </button>
        </div>
        <div className={styles.spacer}></div>

        {habbits.length
          ? habbits.map((habbit) => <InformationByHabbit key={habbit._id} />)
          : null}
        <div className={styles.habitsInfo_button}>
          <button
            onClick={() => setIsHabbitsModal(true)}
            className={styles.habitsInfo_button__button}
          >
            Додати звичку +
          </button>
        </div>
      </div>

      {isHabbitsModal && (
        <Modal onClose={() => setIsHabbitsModal(false)}>
          <AddFormHabit onClose={() => setIsHabbitsModal(false)}></AddFormHabit>
        </Modal>
      )}

      {isTasksModal && (
        <Modal onClose={() => setIsTasksModal(false)}>
          <AddFormTask onClose={() => setIsTasksModal(false)}></AddFormTask>
        </Modal>
      )}
    </>
  );
}

const mapStateToProps = (state) => ({
  tasks: state.tasks,
  habbits: state.habbits,
});

const mapDispatchToProps = (dispatch) => ({
  getTasks: () => dispatch(tasksOperation.getAllTasks()),
  getHabbits: () => dispatch(habitsOperation.getAllHabbitsByUser()),
  getChildren: () => dispatch(getChildrensOperation.getChildrens()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TasksPage);
