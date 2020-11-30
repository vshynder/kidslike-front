import React, { Component } from 'react';
import profilePhoto from './profile-example.png';
import styles from './InformationByTask.module.css';
import stylingStar from './../../assets/images/Star11.svg';
import iconconfirm from './../../assets/images/confirm.svg';
import iconcross from './../../assets/images/cross.svg';
import Modal from '../Modal/Modal';
import ChangeTaskForm from '../ChangeTaskForm/ChangeTaskForm';

export default class InformationByTask extends Component {
  state = {
    isRenderModal: false,
  };
  handleOpenModal = (e) => {
    this.setState({ isRenderModal: true });
  };
  handleCloseModal = (e) => {
    this.setState({ isRenderModal: false });
  };
  render() {
    const { isRenderModal } = this.state;
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
              <p className={styles.taskName}>Помити посуд</p>
              <span className={styles.costContainer}>
                <img
                  src={stylingStar}
                  alt="styling-star"
                  className={styles.taskCostStar}
                />
                <p className={styles.taskCostText}>5</p>
              </span>
            </span>
          </span>
          <span className={styles.secondSmallContainer}>
            <span className={styles.timeContainer}>
              <p className={styles.greyTitle}>Час на виконання:</p>
              <p className={styles.taskDayText}>1 день</p>
            </span>
            <span>
              <p className={styles.greyTitle}>Підтвердження</p>
              <span className={styles.confirmationContainer}>
                <button className={styles.confirmationButton}>
                  <img src={iconconfirm} alt={'pic'}></img>
                </button>
                <button className={styles.confirmationButton}>
                  <img src={iconcross} alt={'pic'}></img>
                </button>
              </span>
            </span>
          </span>
          <button
            className={styles.additionButton}
            onClick={this.handleOpenModal}
          >
            ...
          </button>
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
