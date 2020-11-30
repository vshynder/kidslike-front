import React, { Component } from 'react';
import profilePhoto from './profile-example.png';
import exitButton from './exit.svg';
import styles from './UserInfo.module.css';
import Modal from '../Modal/Modal';
import Logout from '../Logout';

export default class UserInfo extends Component {
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
        <div className={styles.userInfoContainer}>
          <span className={styles.userPhotoContainer}>
            <img
              src={profilePhoto}
              alt="profile-image"
              className={styles.userPhoto}
            />
          </span>

          <p className={styles.userName}>Marta Rogova</p>
          <button onClick={this.handleOpenModal}>
            <img src={exitButton} alt="exit-button" width="21px" />
          </button>
          {isRenderModal && (
            <Modal onClose={this.handleCloseModal}>
              <Logout onClose={this.handleCloseModal} />
            </Modal>
          )}
        </div>
      </>
    );
  }
}
