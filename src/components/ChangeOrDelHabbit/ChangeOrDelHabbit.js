import React from 'react';
import styles from './ChangeOrDelHabbit.module.css';

// import ChangeHabbitForm from '../ChangeHabbitForm/index';
// import Modal from '../';

class ChangeOrDelHabbit extends React.Component {
  refModalmini = React.createRef();

  componentDidMount() {
    document.addEventListener('click', this.onClickOuterModal, false);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.onClickOuterModal, false);
  }

  onClickOuterModal = (event) => {
    if (
      !this.refModalmini.current.contains(event.target) &&
      this.props.refBtnChange !== event.target
    ) {
      this.props.onHandlesShowDropDownMenu();
    }
  };

  showHideModal = () => {
    this.props.onHandlesShowModal();
    this.props.onHandlesShowDropDownMenu();
  };

  render() {
    return (
      <div ref={this.refModalmini} className={styles.modalmini}>
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
