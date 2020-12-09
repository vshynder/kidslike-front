import React from 'react';
import ChildTask from '../ChildTask';
import maleImage from '../../assets/InformationOnChild-Images/image15.svg';
import femaleImage from '../../assets/InformationOnChild-Images/image14.svg';
import getAllTasksSelector from '../../redux/selectors/allTasksCurrentChildSelector';
import { connect } from 'react-redux';
import style from './tasksContainer.module.css';

const TasksContainer = ({ match, allTasks, tasks, location }) => {
  const currentChildTasks = () => {
    return [...tasks].filter(
      (task) =>
        task.childId === location.state.childId &&
        task.isCompleted !== 'active',
    );
  };

  return (
    <div className={style.tasksContainer_container}>
      <div className={style.tasksContainer_header}>
        <img
          className={style.tasksContainer_genderImage}
          src={match.params.gender === 'male' ? maleImage : femaleImage}
        ></img>
        <p className={style.tasksContainer_name}>{match.params.name}</p>
      </div>
      <div className={style.tasksContainer_allTasks}>
        {currentChildTasks().length > 0 ? (
          currentChildTasks().map((task) => (
            <ChildTask
              key={task._id}
              id={task._id}
              gender={match.params.gender}
              daysToDo={task.daysToDo}
              reward={task.reward}
              title={task.title}
            />
          ))
        ) : (
          <p className={style.tasksContainer_alternative}>
            Немає виконаних задач
          </p>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  allTasks: getAllTasksSelector.getAllTasksCurrentChildren(state),
  tasks: state.tasks,
});

export default connect(mapStateToProps, null)(TasksContainer);
