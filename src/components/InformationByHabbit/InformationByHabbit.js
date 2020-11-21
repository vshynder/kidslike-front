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
            this.props.arrHabbitsByUserTest[0].genderChild === 'male'
              ? style.avatar_boy
              : style.avatar_girl
          }
        >
          <img
            className={style.imgavatar}
            src={
              this.props.arrHabbitsByUserTest[0].genderChild === 'male'
                ? image_boy
                : image_girl
            }
            alt={'pic'}
          />
        </div>
        <div>
          <h3 className={style.title}>
            {this.props.arrHabbitsByUserTest[0].nameHabbit}
          </h3>
          <ul className={style.conteiner}>
            {this.props.arrHabbitsByUserTest[0].sprintHabbit
              .split('')
              .map((el, idx) => {
                console.log(el);
                return (
                  <li
                    className={
                      el === '+'
                        ? style.containerlicheck
                        : style.containerlinocheck
                    }
                    key={idx}
                  >
                    {this.props.arrHabbitsByUserTest[0].priceHabbit}
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
  arrHabbitsByUserTest: [
    {
      sprintHabbit: '++-+111111',
      idChild: '5fb4f73805dba90ca4fbf464',
      nameHabbit: 'football4',
      priceHabbit: 2,
      ownerHabbits: '5fb4f73805dba90ca4fbf464',
      genderChild: 'male',
    },
    {
      sprintHabbit: '++11111111',
      idChild: '5fb4f73805dba90ca4fbf464',
      nameHabbit: 'football4',
      priceHabbit: 3,
      ownerHabbits: '5fb4f73805dba90ca4fbf464',
      genderChild: 'female',
    },
  ],
});

export default connect(mapStateToProps)(InformationByHabbit);
