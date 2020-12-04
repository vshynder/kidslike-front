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

class InformationByTask extends Component {
  state = {
    isRenderModal: false,
    isRenderSubmenu: false,
    isRenderConfirmation: false,
  };

  handleOpenSubmenu = (e) => {
    this.setState({ isRenderSubmenu: true });
  };
  handleCloseSubmenu = (e) => {
    this.setState({ isRenderSubmenu: false });
  };
  handleOpenModal = (e) => {
    this.setState({ isRenderModal: true, isRenderSubmenu: false });
  };
  handleCloseModal = (e) => {
    this.setState({ isRenderModal: false });
  };
  confirmTask = (e) => {
    this.props.onConfirmTask();
    this.setState({ isRenderConfirmation: true });
  };
  render() {
    const { isRenderModal, isRenderSubmenu, isRenderConfirmation } = this.state;
    const { title, reward, daysToDo } = this.props.task;
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
              <p className={styles.taskDayText}>{daysToDo} день</p>
            </span>
            <span>
              <p className={styles.greyTitle}>Підтвердження</p>
              {isRenderConfirmation ? (
                <p className={styles.complitedButton}>Complited!</p>
              ) : (
                <span className={styles.confirmationContainer}>
                  <button
                    className={styles.confirmationButton}
                    onClick={this.confirmTask}
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
              )}
            </span>
          </span>
          <button
            className={styles.additionButton}
            onFocus={this.handleOpenSubmenu}
          >
            ...
          </button>
          {isRenderSubmenu && (
            <div
              ref={this.submenu}
              className={styles.submenu}
              onMouseLeave={this.handleCloseSubmenu}
            >
              <button
                className={styles.submenuItem}
                onClick={this.handleOpenModal}
              >
                Редагувати
              </button>
              <button
                onClick={this.props.onDelete}
                className={styles.submenuItem}
              >
                Видалити
              </button>
            </div>
          )}
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
  onDelete: () => dispatch(tasksOperation.deleteTask(ownProps.task._id)),
});

export default connect(null, mapDispatchToProps)(InformationByTask);
