import React from 'react';
import ChildTask from '../ChildTask';
import maleImage from '../../assets/InformationOnChild-Images/image15.svg';
import femaleImage from '../../assets/InformationOnChild-Images/image14.svg';
import getAllTasksSelector from '../../redux/selectors/allTasksCurrentChildSelector';
import { connect } from 'react-redux';
import style from './tasksContainer.module.css';

const TasksContainer = ({ match, allTasks }) => {
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
        {allTasks !== null && allTasks.length > 0 ? (
          allTasks.map((task) => (
            <ChildTask
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
});

export default connect(mapStateToProps, null)(TasksContainer);
