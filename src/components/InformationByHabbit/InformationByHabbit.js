import React from 'react';
import style from './InformationByHabit.module.css';
import image_boy from './img/image_boy.svg';
import image_girl from './img/image_girl.svg';
import iconconfirm from './img/Vector_103_check_mark.svg';
import iconcross from './img/Vector_104_cross.svg';
import { connect } from 'react-redux';
// import ChangeOrDelHabbit from '../ChangeOrDelHabbit/ChangeOrDelHabbit';

class InformationByHabbit extends React.Component {
  state = { showModalChangeOrDelHabbit: false };
  handleshowModalChangeOrDelHabbit = (e) => {
    this.setState({
      showModalChangeOrDelHabbit: !this.state.showModalChangeOrDelHabbit,
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
        <button
          onClick={this.handleshowModalChangeOrDelHabbit}
          className={style.btnchange}
        >
          ...
        </button>
        {/* {this.state.showModalChangeOrDelHabbit && <ChangeOrDelHabbit />} */}
        <div
          className={
            this.props.habbitUserTest.genderChild === 'male'
              ? style.avatar_boy
              : style.avatar_girl
          }
        >
          <img
            className={style.imgavatar}
            src={
              this.props.habbitUserTest.genderChild === 'male'
                ? image_boy
                : image_girl
            }
            alt={'pic'}
          />
          <p className={style.name_hover}>
            {this.props.habbitUserTest.ownerHabbits}
          </p>
        </div>
        <div>
          <h3 className={style.title}>
            {this.props.habbitUserTest.nameHabbit}
          </h3>
          <ul className={style.conteiner}>
            {this.props.habbitUserTest.sprintHabbit.split('').map((el, idx) => {
              console.log(el);
              return (
                <li className={this.renderCheckSprintHabbit(el)} key={idx}>
                  {this.props.habbitUserTest.priceHabbit}
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
  habbitUserTest: {
    sprintHabbit: '+-++111111',
    idChild: '5fb4f73805dba90ca4fbf464',
    nameHabbit: 'Play football',
    priceHabbit: 2,
    ownerHabbits: 'Sanchez',
    genderChild: 'male',
  },
});

export default connect(mapStateToProps)(InformationByHabbit);
