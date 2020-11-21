import React from 'react';
import styles from './ChangeOrDelHabbit.module.css';
import ReactDOM from 'react-dom';
// import ChangeHabbitForm from '../ChangeHabbitForm/index';
// import Modal from '../';

class ChangeOrDelHabbit extends React.Component {
  // myRef = React.createRef();

  componentWillMount() {
    document.addEventListener('click', this.onClickOuterModal, false);
    console.log(this.myRef);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.onClickOuterModal, false);
  }

  onClickOuterModal = (event) => {
    const modal = document.getElementsByClassName(
      'ChangeOrDelHabbit_modalmini__3WR0B',
    )[0];
    const ttt = document.querySelector('.InformationByHabit_btnchange__3nOI-');

    console.log(111, modal);
    console.log(222, ttt);
    console.log(333, event.target);
    if (!modal.contains(event.target) && ttt !== event.target) {
      this.props.onHandlesShowDropDownMenu();
    }
  };

  showHideModal = () => {
    this.props.onHandlesShowModal();
    this.props.onHandlesShowDropDownMenu();
  };

  render() {
    // console.log(this.state);
    // console.log(this.props);
    return (
      <div className={styles.modalmini}>
        <button className={styles.btn__modal} onClick={this.showHideModal}>
          Редагувати
        </button>
        <button className={styles.btn__modal} onClick={this.showHideModal}>
          Видалити
        </button>
      </div>
    );
  }
}

export default ChangeOrDelHabbit;
