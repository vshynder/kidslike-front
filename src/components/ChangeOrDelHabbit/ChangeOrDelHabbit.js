import React from 'react';
import styles from './ChangeOrDelHabbit.module.css';
import { connect } from 'react-redux';
import habbitOperation from '../../redux/operations/habbitOperation';

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
    let { idHabbit } = this.props;

    return (
      <div ref={this.refModalmini} className={styles.modalmini}>
        <button className={styles.btn__modal} onClick={this.showHideModal}>
          Редагувати
        </button>
        <button
          className={styles.btn__modal}
          onClick={(e) => this.props.delHabbit(idHabbit)}
        >
          Видалити
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = {
  delHabbit: habbitOperation.delHabbit,
  updateHabbit: habbitOperation.updateHabbit,
};

export default connect(null, mapDispatchToProps)(ChangeOrDelHabbit);
