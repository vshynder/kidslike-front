import React, { Component } from 'react';
import profilePhoto from './profile-example.png';
import styles from './InformationByTask.module.css';
import stylingStar from './../../assets/images/Star11.svg';
import iconconfirm from './../../assets/images/confirm.svg';
import iconcross from './../../assets/images/cross.svg';
import Modal from '../Modal/Modal';
import ChangeTaskForm from '../ChangeTaskForm/ChangeTaskForm';
import tasksOperation from '../../redux/operations/tasksOperation';
import { connect } from 'react-redux';

<<<<<<< HEAD
export default class InformationByTask extends Component {
  constructor(props) {
    super(props);
    this.submenu = React.createRef();
  }
=======
class InformationByTask extends Component {
>>>>>>> dev
  state = {
    isRenderModal: false,
  };
  focusSubmenu = (e) => {
    this.submenu.current.focus();
  };
  handleOpenModal = (e) => {
    this.setState({ isRenderModal: true });
  };
  handleCloseModal = (e) => {
    this.setState({ isRenderModal: false });
  };
  render() {
    const { isRenderModal } = this.state;
<<<<<<< HEAD
    const { task } = this.props;
=======
    console.log(this.props);
    const { title, reward, daysToDo } = this.props.task;
>>>>>>> dev
    return (
      <>
        <div className={styles.container}>
          <span className={styles.firstSmallContainer}>
            <span className={styles.childPhotoContainer}>
              <img
                src={profilePhoto}
                alt="profile-image"
                className={styles.userPhoto}
              />
            </span>
            <span className={styles.taskNameAndCostContainer}>
              <p className={styles.taskName}>{title}</p>
              <span className={styles.costContainer}>
                <img
                  src={stylingStar}
                  alt="styling-star"
                  className={styles.taskCostStar}
                />
                <p className={styles.taskCostText}>{reward}</p>
              </span>
            </span>
          </span>
          <span className={styles.secondSmallContainer}>
            <span className={styles.timeContainer}>
              <p className={styles.greyTitle}>Час на виконання:</p>
<<<<<<< HEAD
              <p className={styles.taskDayText}>{task.daysToDo} день</p>
=======
              <p className={styles.taskDayText}>{daysToDo} день</p>
>>>>>>> dev
            </span>
            <span>
              <p className={styles.greyTitle}>Підтвердження</p>
              <span className={styles.confirmationContainer}>
                <button
                  className={styles.confirmationButton}
                  onClick={this.props.onConfirmTask}
                >
                  <img src={iconconfirm} alt={'pic'}></img>
                </button>
                <button
                  className={styles.confirmationButton}
                  onClick={this.props.onNotConfirmTask}
                >
                  <img src={iconcross} alt={'pic'}></img>
                </button>
              </span>
            </span>
          </span>
          <button className={styles.additionButton} onClick={this.focusSubmenu}>
            ...
          </button>
          <div ref={this.submenu} className={styles.submenu}>
            <button
              className={styles.submenuItem}
              onClick={this.handleOpenModal}
            >
              Редагувати
            </button>
            <button className={styles.submenuItem}>Видалити</button>
          </div>
        </div>
        {isRenderModal && (
          <Modal onClose={this.handleCloseModal}>
            <ChangeTaskForm onClose={this.handleCloseModal} />
          </Modal>
        )}
      </>
    );
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  onConfirmTask: () => dispatch(tasksOperation.сonfirmTask(ownProps.task._id)),
  onNotConfirmTask: () =>
    dispatch(tasksOperation.notConfirmTask(ownProps.task._id)),
});

export default connect(null, mapDispatchToProps)(InformationByTask);
