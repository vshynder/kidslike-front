import React from 'react';
import style from './InformationByHabit.module.css';
import image_boy from './img/image_boy.svg';
import image_girl from './img/image_girl.svg';
import iconconfirm from './img/Vector_103_check_mark.svg';
import iconcross from './img/Vector_104_cross.svg';
import { connect } from 'react-redux';
import ChangeOrDelHabbit from '../ChangeOrDelHabbit/ChangeOrDelHabbit';
import habbitOperation from '../../redux/operations/habbitOperation';

// import ChangeHabbitForm from '../ChangeHabbitForm/index'; // Иморт формы редактирования
// import Modal from '../'; // Модальное окно

class InformationByHabbit extends React.Component {
  state = { showDropDownMenu: false, showModal: false, complitedHabbit: false };

  btnchange = React.createRef();
  componentDidMount() {
    if (!this.props.allHabbits[0].sprintHabbit.includes('1')) {
      this.setState({ complitedHabbit: true });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      !this.props.allHabbits[0].sprintHabbit.includes('1') &&
      prevState.complitedHabbit === false
    ) {
      this.setState({ complitedHabbit: true });
    }
  }

  handlesShowDropDownMenu = (e) => {
    this.setState({
      showDropDownMenu: !this.state.showDropDownMenu,
    });
  };

  clickConfirmedDay = (e) => {
    this.props.onCheckHabbit({
      confirmed: true,
      idHabbit: this.props.allHabbits[0]._id,
    });
  };

  clickUnConfirmedDay = (e) => {
    this.props.onCheckHabbit({
      confirmed: false,
      idHabbit: this.props.allHabbits[0]._id,
    });
  };

  handlesShowModal = (e) => {
    this.setState({
      showModal: !this.state.showModal,
    });
  };

  renderCheckSprintHabbit = (el) => {
    if (el === '+') {
      return style.containerlicheck;
    }
    if (el === '1') {
      return style.containerlinocheck;
    }
    if (el === '-') {
      return style.containerlidischeck;
    }
  };
  render() {
    return (
      <div className={style.canvas}>
        {
          /* {this.state.showModal && (
          <Modal>
            <ChangeHabbitForm  forCloseModal={this.handlesShowModal}/>
          </Modal>
        )} */
          this.state.showModal && ( // ЗАГЛУШКА МОДАЛЬНОГО ОКНА ДЛЯ ChangeHabbitForm
            <div style={{ position: 'absolute', backgroundColor: '#ddd' }}>
              ЗАГЛУШКА МОДАЛЬНОГО ОКНА
            </div>
          ) // ЗАГЛУШКА МОДАЛЬНОГО ОКНА ДЛЯ ChangeHabbitForm
        }
        <button
          ref={this.btnchange}
          onClick={this.handlesShowDropDownMenu}
          className={style.btnchange}
        >
          ...
        </button>
        {this.state.showDropDownMenu && (
          <ChangeOrDelHabbit
            onHandlesShowDropDownMenu={this.handlesShowDropDownMenu}
            onHandlesShowModal={this.handlesShowModal}
            refBtnChange={this.btnchange.current}
            idHabbit={this.props.allHabbits[0]._id}
          />
        )}

        <div
          className={
            this.props.allHabbits[0].genderChild === 'male'
              ? style.avatar_boy
              : style.avatar_girl
          }
        >
          <img
            className={style.imgavatar}
            src={
              this.props.allHabbits[0].genderChild === 'male'
                ? image_boy
                : image_girl
            }
            alt={'pic'}
          />
          <p className={style.name_hover}>
            {this.props.allHabbits[0].ownerHabbits}
          </p>
        </div>
        <div>
          <h3 className={style.title}>{this.props.allHabbits[0].nameHabbit}</h3>
          {!this.state.complitedHabbit ? (
            <ul className={style.conteiner}>
              {this.props.allHabbits[0].sprintHabbit
                .slice()
                .split('')
                .map((el, idx) => {
                  return (
                    <li className={this.renderCheckSprintHabbit(el)} key={idx}>
                      {this.props.allHabbits[0].priceHabbit}
                    </li>
                  );
                })}
            </ul>
          ) : (
            <p className={style.complhabbit}>Complited!</p>
          )}
          <p className={style.bonusx}>x1.5</p>
        </div>
        <div className={style.btn_wrap}>
          <h4 className={style.titleconfirm}>Підтвердження</h4>
          <div className={style.conf_cont}>
            <button
              className={style.btnconfirm}
              onClick={this.clickConfirmedDay}
            >
              <img src={iconconfirm} alt={'pic'}></img>
            </button>
            <button
              className={style.btnfailure}
              onClick={this.clickUnConfirmedDay}
            >
              <img src={iconcross} alt={'pic'}></img>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  allHabbits: state.dummyReducerAllHabbits,
}); // Заглушка - компонет InformationByHabbit получит пропсом обьект allHabbits[0]
// при рендере коллекции  всех привычек детей пользователя

const mapDispatchToProps = {
  onCheckHabbit: habbitOperation.checkHabbit,
  updateHabbit: habbitOperation.updateHabbit, // ДЛЯ ФОРМЫ ИЗМЕНЕНИЯ Хеббита, которая будет подключена
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(InformationByHabbit);
