import React from 'react';
import style from './InformationByHabit.module.css';
import image_boy from './img/image_boy.svg';
import image_girl from './img/image_girl.svg';
import iconconfirm from './img/Vector_103_check_mark.svg';
import iconcross from './img/Vector_104_cross.svg';
import { connect } from 'react-redux';

import ChangeOrDelHabbit from '../ChangeOrDelHabbit/ChangeOrDelHabbit';

class InformationByHabbit extends React.Component {
  state = { showDropDownMenu: false, showModal: false };
  btnchange = React.createRef();
  handlesShowDropDownMenu = (e) => {
    this.setState({
      showDropDownMenu: !this.state.showDropDownMenu,
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
    console.log('props: ', this.props);

    return (
      <div className={style.canvas}>
        {
          /* {this.state.showModal && (
          <Modal>
            <ChangeHabbitForm  forCloseModal={this.handlesShowModal}/>
          </Modal>
        )} */
          this.state.showModal && ( // ЗАГЛУШКА МОДАЛЬНОГО ОКНА
            <div style={{ position: 'absolute', backgroundColor: '#ddd' }}>
              MODAL WINDOW DUMMY
            </div>
          ) // ЗАГЛУШКА МОДАЛЬНОГО ОКНА
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
          />
        )}
        <div
          className={
            this.props.habbitUser.genderChild === 'male'
              ? style.avatar_boy
              : style.avatar_girl
          }
        >
          <img
            className={style.imgavatar}
            src={
              this.props.habbitUser.genderChild === 'male'
                ? image_boy
                : image_girl
            }
            alt={'pic'}
          />
          <p className={style.name_hover}>
            {this.props.habbitUser.ownerHabbits}
          </p>
        </div>
        <div>
          <h3 className={style.title}>{this.props.habbitUser.nameHabbit}</h3>
          <ul className={style.conteiner}>
            {this.props.habbitUser.sprintHabbit.split('').map((el, idx) => {
              return (
                <li className={this.renderCheckSprintHabbit(el)} key={idx}>
                  {this.props.habbitUser.priceHabbit}
                </li>
              );
            })}
          </ul>
          <p className={style.bonusx}>x1.5</p>
        </div>
        <div className={style.btn_wrap}>
          <h4 className={style.titleconfirm}>Підтвердження</h4>
          <div className={style.conf_cont}>
            <button className={style.btnconfirm}>
              <img src={iconconfirm} alt={'pic'}></img>
            </button>
            <button className={style.btnfailure}>
              <img src={iconcross} alt={'pic'}></img>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  habbitUser: {
    sprintHabbit: '+-++111111',
    idChild: '5fb4f73805dba90ca4fbf464',
    nameHabbit: 'Play football',
    priceHabbit: 2,
    ownerHabbits: 'Sanchez',
    genderChild: 'male',
  },
}); // Заглушка - компонет InformationByHabbit получит пропсом обьект habbitUser
// при рендере коллекции  всех привычек детей пользователя

export default connect(mapStateToProps)(InformationByHabbit);
