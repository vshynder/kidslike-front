import React, { Component } from 'react';
import Modal from '../../components/Modal/Modal';
import ChangeFormPresent from '../../components/ChangePresentForm/ChangePresentForm';
import styles from './informItemByPresent.module.css';
import defaultImage from '../../assets/informationByPresent/Group 299.png';
import maleImage from '../../assets/informationByPresent/Group 292.png';
import femaleImage from '../../assets/informationByPresent/Group 291.png';
import subMenu_disable from '../../assets/informationByPresent/Group 280.svg';
import subMenu_active from '../../assets/informationByPresent/Group 281.svg';
import { connect } from 'react-redux';
import ChildSelectors from '../../redux/selectors/ChildSelectors';

class InformItemByPresent extends Component {
  state = {
    display: 'none',
    modal: false,
    alertFalse: false,
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
    this.setState({
      modal: true,
    });
  };

  onClose = () => {
    this.setState({
      modal: false,
    });
  };

  handleBuyPreset = (idPresent, reward, childId) => {
    console.log('shell');
    const { children } = this.props;
    const child = children.find((child) => child._id === childId);

    if (child.stars < reward) {
      this.setState({ alertFalse: true });
      setTimeout(() => {
        this.setState({ alertFalse: false });
      }, 1000);
    } else {
      this.props.buyPresent(idPresent, reward, childId);
    }
  };

  render() {
    const {
      gender,
      image,
      title,
      reward,
      childId,
      idPresent,
      deletePresent,
<<<<<<< HEAD
    } = this.props;
    const { display, modal, alertFalse } = this.state;

=======
      buyPresent,
    } = this.props;
    const { display, modal } = this.state;
>>>>>>> 669893305d1f4c7f3243c09f50f2f9b26e024755
    return (
      <>
        {alertFalse}

        {modal && (
          <Modal
            children={
              <ChangeFormPresent
                onClose={this.onClose}
                childId={childId}
                title={title}
                reward={reward}
                idPresent={idPresent}
              />
            }
            onClose={this.onClose}
          />
        )}
        <ul className={styles.presentItem_container}>
          <li className={styles.presentItem_changePresent}>
            <div
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
                  <button
                    className={styles.presentItem_subMenu__button}
                    onClick={this.showModal}
                  >
                    Редагувати
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => deletePresent(idPresent)}
                    className={styles.presentItem_subMenu__button}
                  >
                    Видалити
                  </button>
                </li>
              </ul>
            </div>
          </li>
          <li className={styles.presentItem_images}>
            <img
              className={styles.presentItem_mainImage}
              src={image === '' ? defaultImage : image}
            ></img>
            <img
              className={styles.presentItem_genderImage}
              src={gender === 'male' ? maleImage : femaleImage}
            ></img>
          </li>
          <li className={styles.presentItem_titleAndButton}>
            <div className={styles.presentItem_title}>
              <p className={styles.presentItem_name}>{title}</p>
              <div className={styles.presentItem_block__cost}>
                <p className={styles.presentItem_cost}>{reward}</p>
              </div>
            </div>
            <div className={styles.presentItem_block__button}>
              <button
<<<<<<< HEAD
                onClick={() => this.handleBuyPreset(idPresent, reward, childId)}
=======
                onClick={() => {
                  return buyPresent(idPresent, reward, childId);
                }}
>>>>>>> 669893305d1f4c7f3243c09f50f2f9b26e024755
                className={styles.presentItem_button}
              >
                Придбати
              </button>
            </div>
          </li>
        </ul>
      </>
    );
  }
}
const mapSatateToProps = (state) => ({
  children: ChildSelectors.getChildrens(state),
});

export default connect(mapSatateToProps, null)(InformItemByPresent);
