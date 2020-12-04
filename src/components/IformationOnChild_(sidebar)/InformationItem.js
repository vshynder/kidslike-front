import React from 'react';
import style from './InformationItem.module.css';
import maleImage from '../../assets/InformationOnChild-Images/image15.svg';
import femaleImage from '../../assets/InformationOnChild-Images/image14.svg';
import vector from '../../assets/InformationOnChild-Images/Vector100.svg';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import getAllTasks from '../../redux/operations/getAllComplitedTasksOperation';
import tasksSelector from '../../redux/selectors/tasksSelector';

const InformationItem = ({
  childId,
  male,
  name,
  balance,
  // firstTask,
  // costFirstTask,
  // secondTask,
  // costSecondTask,
  getTasksRequest,
  tasks
}) => {
  
  const tasksCurrentChild = tasks.filter(task => {
    if(task.childId === childId) {
      return task
    }
  })
  console.log(tasksCurrentChild)
  //Надо понять почему при перезагрузке страницы возвращается всего одна таска
  return (
    <ul className={style.informItem_container}>
      <li className={style.informItem_information}>
        <div className={style.informItem_block__name}>
          <img
            src={male !== 'male' ? femaleImage : maleImage}
            alt="gender"
            className={style.informItem_genderImage}
          />
          <p className={style.informItem_name}>{name}</p>
        </div>
        <div className={style.informItem_block__balance}>
          <p className={style.informItem_balance}>{balance}</p>
        </div>
      </li>
      <li className={style.informItem_tasks}>
        <ul className={style.informItem_list__tasks}>
          <li className={style.informItem_oneTask}>
            <p className={style.informItem_text}>{tasksCurrentChild.length > 0 && tasksCurrentChild[0] ? tasksCurrentChild[0].title : ""}</p>
            <p className={style.informItem_text}>{tasksCurrentChild.length > 0 && tasksCurrentChild[0] ? `+ ${tasksCurrentChild[0].reward}` : ""}</p>
          </li>
          <li className={style.informItem_oneTask}>
            <p className={style.informItem_text}>{tasksCurrentChild.length > 0 && tasksCurrentChild[1] ? tasksCurrentChild[1].title : ""}</p>
            <p className={style.informItem_text}>{tasksCurrentChild.length > 0 && tasksCurrentChild[1] ? `+ ${tasksCurrentChild[1].reward}` : ""}</p>
          </li>
        </ul>
      </li>
      <li
        onClick={() => getTasksRequest(childId)}
        className={style.informItem_block__link}
      >
        <Link
          to={`/childTasks/${name}/${male}`}
          className={style.informItem_link}
        >
          <p className={style.informItem_linkName}>До виконаних задач</p>
          <img src={vector} alt="vector" />
        </Link>
      </li>
    </ul>
  );
};

const mapStateToProps = (state) => ({
  tasks: tasksSelector.getTasks(state),
});

const mapDispatchToProps = {
  getTasksRequest: getAllTasks.getTasks,

};

export default connect(mapStateToProps, mapDispatchToProps)(InformationItem);
