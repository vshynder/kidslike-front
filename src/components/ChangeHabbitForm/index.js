import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './changeHabbitForm.module.scss';

import habbitOperation from '../../redux/operations/habbitOperation';
import selector from '../../redux/selectors/ChildSelectors';

import star from '../../assets/images/changeHabbitStar.png';
import select from '../../assets/images/changeHabbitSelect.png';

class ChangeHabbitForm extends Component {
  state = {
    nameHabbit: 'sdsd',
    priceHabbit: '',
    idChild: '',
    // idNewChildOwnerHabbit: '',
    // idHabbit: '',
    // children: [],
    // checkAllInput: true,
  };
  componentDidMount() {
    this.setState({
      nameHabbit: this.props.currentHabbit.nameHabbit,
      priceHabbit: this.props.currentHabbit.priceHabbit,
      idChild: this.props.currentHabbit.idChild,
    });
  }

  // handleCloseClick = () => {};

  handleDeleteHabbit = (e) => {
    this.props.deleteHabbit(this.props.currentHabbit._id);
  };

  // handleCancel = () => {};

  handleSave = (e) => {
    let obj = { ...this.state };
    let objForSend = {};

    for (let key in obj) {
      if (obj[key] && this.props.currentHabbit[key] !== obj[key]) {
        if (key === 'idChild') {
          objForSend.idNewChildOwnerHabbit = obj[key];
          continue;
        }
        objForSend[key] = obj[key];
      }
    }
    objForSend.idHabbit = this.props.currentHabbit._id;

    this.props.updateHabbit(objForSend);
    this.props.onClose();
  };

  changeInput = (e) => {
    const { name, type, value } = e.target;

    this.setState({
      [name]: type === 'number' ? Number(value) : value,
    });
  };

  render() {
    return (
      <div className={styles.changehabbit__form}>
        <svg
          onClick={this.props.onClose}
          className={styles.changehabbit__close}
          width="12"
          height="12"
          viewBox="0 0 12 12"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M1 1L11 11" strokeWidth="2" strokeLinecap="round" />
          <path d="M1 11L11 0.999999" strokeWidth="2" strokeLinecap="round" />
        </svg>

        <h1 className={styles.changehabbit__title}>Редагування звички</h1>
        <div className={styles.changehabbit__input}>
          <label className={`${styles.changehabbit__label}`} htmlFor="name">
            Назва
          </label>
          <input
            className={styles.changehabbit__inputLong}
            onChange={this.changeInput}
            name="nameHabbit"
            value={this.state.nameHabbit}
            id="name"
            type="text"
            placeholder="Введіть нову назву"
          />
        </div>

        <div className={styles.changehabbit__input}>
          <label className={`${styles.changehabbit__label}`} htmlFor="sel">
            Призначення звички
          </label>
          <select
            className={styles.changehabbit__inputLong}
            onChange={this.changeInput}
            value={this.state.idChild}
            name="idChild"
            id="sel"
          >
            {this.props.children.map((child) => (
              <option key={child._id} value={child._id}>
                {' '}
                {child.name}{' '}
              </option>
            ))}
          </select>
          <img className={styles.changehabbit__inputSelect} src={select} />
        </div>

        <div
          className={`${styles.changehabbit__input} ${styles.changehabbit__inputMod}`}
        >
          <label className={`${styles.changehabbit__label}`} htmlFor="grade">
            Бал
          </label>
          <input
            className={`${styles.changehabbit__inputLong} ${styles.changehabbit__inputShort}`}
            name="priceHabbit"
            onChange={this.changeInput}
            value={this.state.priceHabbit}
            id="grade"
            type="number"
            min="0"
            max="99"
            placeholder="——"
          />
          <img className={styles.changehabbit__inputStar} src={star} />
        </div>

        <div
          onClick={this.handleDeleteHabbit}
          className={styles.changehabbit__delete}
        >
          <div className={styles.changehabbit__deleteBucket}>
            <svg
              className={styles.deleteBucket}
              width="10"
              height="11"
              viewBox="0 0 10 11"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.53791 0.242188H0.471992C0.223579 0.242188 0.0280224 0.454102 0.0480419 0.701782L0.805976 10.0739C0.848213 10.597 1.28461 11 1.80891 11H8.20087C8.72517 11 9.16157 10.597 9.2038 10.0737L9.96174 0.701782C9.98188 0.454102 9.78632 0.242188 9.53791 0.242188ZM2.66718 10.0004C2.65705 10.001 2.64692 10.0013 2.63691 10.0013C2.38373 10.0013 2.17121 9.8042 2.15546 9.5481L1.68049 1.85413C1.66413 1.58789 1.86665 1.35876 2.13276 1.34241C2.39802 1.32629 2.62812 1.52832 2.64448 1.79468L3.11933 9.48865C3.13581 9.75488 2.9333 9.98389 2.66718 10.0004ZM5.49323 9.51843C5.49323 9.78503 5.27705 10.0012 5.01032 10.0012C4.7436 10.0012 4.52741 9.78503 4.52741 9.51843V1.82434C4.52741 1.55762 4.7436 1.34143 5.01032 1.34143C5.27692 1.34143 5.49323 1.55762 5.49323 1.82434V9.51843ZM8.32941 1.85278L7.87592 9.54675C7.86091 9.80334 7.64802 10.0012 7.39435 10.0012C7.38483 10.0012 7.37519 10.001 7.36555 10.0005C7.09931 9.98474 6.89619 9.75623 6.91193 9.48999L7.3653 1.7959C7.38093 1.52966 7.60871 1.32654 7.87568 1.34229C8.14191 1.35791 8.34504 1.58655 8.32941 1.85278Z" />
            </svg>
            <svg
              className={styles.deleteBucket}
              width="14"
              height="3"
              viewBox="0 0 14 3"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M13.2077 1.75195L12.8906 0.80127C12.807 0.550659 12.5724 0.381592 12.3081 0.381592H1.70152C1.43736 0.381592 1.20262 0.550659 1.11912 0.80127L0.801986 1.75195C0.740828 1.9353 0.820418 2.12232 0.968978 2.21558C1.02952 2.25354 1.10118 2.27637 1.17992 2.27637H12.8298C12.9086 2.27637 12.9803 2.25354 13.0408 2.21545C13.1893 2.12219 13.2689 1.93518 13.2077 1.75195Z" />
            </svg>
            <svg
              className={styles.deleteBucket}
              width="6"
              height="2"
              viewBox="0 0 6 2"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1.66797 0.96582H4.34204V1.41577H5.30774V0.902832C5.30786 0.405029 4.90308 0 4.40552 0H1.60449C1.10693 0 0.702148 0.405029 0.702148 0.902832V1.41577H1.66797V0.96582Z" />
            </svg>
          </div>
          <span className={styles.changehabbit__deleteText}>
            Видалити звичку
          </span>
        </div>

        <div className={styles.changehabbit__btns}>
          <button
            onClick={this.props.onClose}
            className={styles.changehabbit__button}
          >
            Відміна
          </button>
          <button
            onClick={this.handleSave}
            className={`${styles.changehabbit__button} ${styles.changehabbit__buttonOrange}`}
          >
            Зберегти
          </button>
        </div>
      </div>
    );
  }
}

const mapStatetoProps = (state) => ({
  children: selector.getChildrens(state),
});
const mapDispatchToProps = {
  updateHabbit: habbitOperation.updateHabbit,
  deleteHabbit: habbitOperation.delHabbit,
};

export default connect(mapStatetoProps, mapDispatchToProps)(ChangeHabbitForm);
