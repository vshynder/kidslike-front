import React from 'react';
import style from './InformationByHabit.module.css';
import image_boy from './img/image_boy.svg';
import image_girl from './img/image_girl.svg';
import iconconfirm from './img/Vector_103_check_mark.svg';
import iconcross from './img/Vector_104_cross.svg';
import { connect } from 'react-redux';
import ChangeOrDelHabbit from '../ChangeOrDelHabbit/ChangeOrDelHabbit';
import habbitOperation from '../../redux/operations/habbitOperation';

import ChangeHabbitForm from '../ChangeHabbitForm';
import Modal from '../Modal/Modal';

class InformationByHabbit extends React.Component {
  state = { showDropDownMenu: false, showModal: false, complitedHabbit: false };

  btnchange = React.createRef();
  componentDidMount() {
    if (!this.props.habbit.sprintHabbit.includes('1')) {
      this.setState({ complitedHabbit: true });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      !this.props.habbit.sprintHabbit.includes('1') &&
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
      idHabbit: this.props.habbit._id,
    });
  };

  clickUnConfirmedDay = (e) => {
    this.props.onCheckHabbit({
      confirmed: false,
      idHabbit: this.props.habbit._id,
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
      <>
        {this.state.showModal && (
          <Modal onClose={this.handlesShowModal}>
            <ChangeHabbitForm
              onClose={this.handlesShowModal}
              currentHabbit={this.props.habbit}
            />
          </Modal>
        )}
        <div className={style.canvas}>
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
              idHabbit={this.props.habbit._id}
            />
          )}

          <div
            className={
              this.props.habbit.genderChild === 'male'
                ? style.avatar_boy
                : style.avatar_girl
            }
          >
            <img
              className={style.imgavatar}
              src={
                this.props.habbit.genderChild === 'male'
                  ? image_boy
                  : image_girl
              }
              alt={'pic'}
            />
            <p className={style.name_hover}>{this.props.habbit.ownerHabbits}</p>
          </div>
          <div>
            <h3 className={style.title}>{this.props.habbit.nameHabbit}</h3>
            {!this.state.complitedHabbit ? (
              <ul className={style.conteiner}>
                {this.props.habbit.sprintHabbit
                  .slice()
                  .split('')
                  .map((el, idx) => {
                    return (
                      <li
                        className={this.renderCheckSprintHabbit(el)}
                        key={idx}
                      >
                        {this.props.habbit.priceHabbit}
                      </li>
                    );
                  })}
              </ul>
            ) : (
              <p className={style.complhabbit}>Complited!</p>
            )}
            <p className={style.bonusx}>x1.5</p>
          </div>
          {!this.state.complitedHabbit && (
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
          )}
        </div>
      </>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const habbit = state.habbits.find((el) => el._id === ownProps.id);
  return { habbit };
};

const mapDispatchToProps = {
  onCheckHabbit: habbitOperation.checkHabbit,
  //updateHabbit: habbitOperation.updateHabbit, // !!! ДЛЯ передачи в ChangeHabbitForm, или подписаться  на updateHabbit в ней
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(InformationByHabbit);
