import React, { Component } from 'react';
import Modal from '../../components/Modal/Modal';
import ChangeFormPresent from '../../components/ChangePresentForm/ChangePresentForm';
import styles from './informItemByPresent.module.css';
import defaultImage from '../../assets/informationByPresent/Group 299.png';
import maleImage from '../../assets/informationByPresent/Group 292.png';
import femaleImage from '../../assets/informationByPresent/Group 291.png';
import subMenu_disable from '../../assets/informationByPresent/Group 280.svg';
import subMenu_active from '../../assets/informationByPresent/Group 281.svg';

export default class InformItemByPresent extends Component {
  state = {
    display: 'none',
    modal: false,
  };

  onChangeSubmenu = () => {
    if (this.state.display === 'none') {
      this.setState({
        display: 'flex',
      });
    } else {
      this.setState({
        display: 'none',
      });
    }
  };

  showModal = () => {
      this.setState ({
          modal: true
      })
  }

  onClose = () => {
      this.setState({
          modal: false
      })
  }

  render() {
    const { gender, mainImage, name, cost, presentId } = this.props;
    const { display, modal } = this.state;
    return (
    <>
        {modal && (<Modal children={<ChangeFormPresent />} onClose={this.onClose}/>)}
      <ul className={styles.presentItem_container}>
        <li className={styles.presentItem_changePresent}>
          <button
            className={styles.presentItem_button__submenu}
            onClick={this.onChangeSubmenu}
          >
            <img
              src={display === 'none' ? subMenu_disable : subMenu_active}
              className={styles.presentItem_image__subMenu}
            ></img>
            <ul
              className={styles.presentItem_subMenu}
              style={{ display: this.state.display }}
            >
              <li className={styles.presentItem_subMenu__angle}></li>
              <li>
                <button className={styles.presentItem_subMenu__button} onClick={this.showModal}>
                  Редагувати
                </button>
              </li>
              <li>
                <button className={styles.presentItem_subMenu__button}>
                  Видалити
                </button>
              </li>
            </ul>
          </button>
        </li>
        <li className={styles.presentItem_images}>
          <img
            className={styles.presentItem_mainImage}
            src={mainImage === '' ? defaultImage : mainImage}
          ></img>
          <img
            className={styles.presentItem_genderImage}
            src={gender === 'male' ? maleImage : femaleImage}
          ></img>
        </li>
        <li className={styles.presentItem_titleAndButton}>
          <div className={styles.presentItem_title}>
            <p className={styles.presentItem_name}>{name}</p>
            <div className={styles.presentItem_block__cost}>
              <p className={styles.presentItem_cost}>{cost}</p>
            </div>
          </div>
          <div className={styles.presentItem_block__button}>
            <button className={styles.presentItem_button}>Придбати</button>
          </div>
        </li>
      </ul>
      </>
    );
  }
}
