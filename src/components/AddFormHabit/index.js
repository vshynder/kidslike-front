import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './addHabitForm.module.scss';
import operation from '../../redux/operations/habbitOperation';
import selector from '../../redux/selectors/ChildSelectors';

import star from '../../assets/images/changeHabbitStar.png';
import select from '../../assets/images/changeHabbitSelect.png';

class AddFormHabit extends Component {
  state = {
    title: '',
    bal: '',
    childId: '',
    children: [],
    checkAllInput: true,
  };

  componentDidMount() {
    this.setState({ children: this.props.children });
  }

  handleChangeName = (e) => {
    this.setState({ title: e.target.value });
  };

  handleChangeBall = (e) => {
    this.setState({ bal: e.target.value });
  };

  handleChoseChild = (e) => {
    this.setState({ childId: e.target.value });
  };

  handleCloseClick = () => {
    this.props.onClose();
  };

  handleCancel = () => {
    this.props.onClose();
  };

  handleSave = () => {
    const { title, bal, childId } = this.state;
    if (!title || !bal || !childId) {
      this.setState({ checkAllInput: false });
      return;
    }

    this.props.onAddHabit({
      nameHabbit: title,
      priceHabbit: bal,
      idChild: childId,
    });

    this.setState({ title: '', bal: '', childId: '' });
    this.props.onClose();
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { title, bal, childId } = this.state;

    this.props.onAddHabit({ title, bal, childId });

    this.setState({ title: '', bal: '', childId: '' });
  };

  render() {
    const { children, title, childId } = this.state;
    return (
      <div className={styles.changehabbit__form}>
        <svg
          onClick={this.handleCloseClick}
          className={styles.changehabbit__close}
          width="12"
          height="12"
          viewBox="0 0 12 12"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M1 1L11 11" strokeWidth="2" strokeLinecap="round" />
          <path d="M1 11L11 0.999999" strokeWidth="2" strokeLinecap="round" />
        </svg>

        <h1 className={styles.changehabbit__title}>Додавання звички</h1>
        <div className={styles.changehabbit__input}>
          <label htmlFor="name">Назва</label>
          <input
            className={styles.changehabbit__inputLong}
            placeholder=" Введіть назву звички"
            value={title}
            onChange={this.handleChangeName}
          />
        </div>

        <div className={styles.changehabbit__input}>
          <label htmlFor="task">Призначення звички</label>
          <select
            onChange={this.handleChoseChild}
            value={childId}
            className={styles.changehabbit__inputLong}
          >
            <option value="" disabled>
              Оберіть дитину
            </option>
            {children.map((child) => (
              <option
                key={child._id ? child._id : child.id}
                value={child._id ? child._id : child.id}
              >
                {' '}
                {child.name}{' '}
              </option>
            ))}
          </select>
          <img
            className={styles.changehabbit__inputSelect}
            src={select}
            alt="select"
          />
        </div>

        <div
          className={`${styles.changehabbit__input} ${styles.changehabbit__inputMod}`}
        >
          <label htmlFor="grade">Бал</label>
          <input
            className={`${styles.changehabbit__inputLong} ${styles.changehabbit__inputShort}`}
            id="grade"
            type="number"
            min="0"
            max="99"
            placeholder="——"
            onChange={this.handleChangeBall}
          />
          <img
            className={styles.changehabbit__inputStar}
            src={star}
            alt="star"
          />
        </div>
        <p style={{ color: 'red', height: '12px', fontWeight: '700' }}>
          {!this.state.checkAllInput && 'Заповніть всі поля!'}
        </p>

        <div className={styles.changehabbit__btns}>
          <button
            onClick={this.handleCancel}
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
  onAddHabit: operation.addHabit,
};

export default connect(mapStatetoProps, mapDispatchToProps)(AddFormHabit);
