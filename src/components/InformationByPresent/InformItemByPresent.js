import React, { Component } from 'react';
import styles from './informItemByPresent.module.css';
import defaultImage from '../../assets/informationByPresent/Group 299.png';
import genderImage from '../../assets/informationByPresent/Group 292.png';
import subMenu_disable from '../../assets/informationByPresent/Group 280.svg';
import subMenu_active from '../../assets/informationByPresent/Group 281.svg';

export default class InformItemByPresent extends Component {
  state = {
    display: 'none',
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

  render() {
    const { display } = this.state;
    return (
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
                <button className={styles.presentItem_subMenu__button}>
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
            src={defaultImage}
          ></img>
          <img
            className={styles.presentItem_genderImage}
            src={genderImage}
          ></img>
        </li>
        <li className={styles.presentItem_titleAndButton}>
          <div className={styles.presentItem_title}>
            <p className={styles.presentItem_name}>Піца</p>
            <div className={styles.presentItem_block__cost}>
              <p className={styles.presentItem_cost}>15</p>
            </div>
          </div>
          <div className={styles.presentItem_block__button}>
            <button className={styles.presentItem_button}>Придбати</button>
          </div>
        </li>
      </ul>
    );
  }
}
