import React from 'react';
import style from './InformationByHabit.module.css';
import image_boy from './img/image_boy.svg';
import image_girl from './img/image_girl.svg';

import { connect } from 'react-redux';

// import ChangeOrDelHabbit from '../ChangeOrDelHabbit/ChangeOrDelHabbit';

// const cross = require('./img/Vector_104_cross.svg');

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
        <div className={style.avatar_boy}>
          <img className={style.imgavatar} src={image_boy} alt={'pic'} />
        </div>
        <div>
          <h3 className={style.title}>Title</h3>
          <ul className={style.conteiner}>
            {this.props.arrHabbitsByUserTest[0].sprintHabbit
              .split('')
              .map((el, idx) => {
                return (
                  <li key={idx}>
                    {this.props.arrHabbitsByUserTest[0].priceHabbit}
                  </li>
                );
              })}
          </ul>
          <p className={style.bonusx}>x1.5</p>
        </div>
        <div>
          <h4 className={style.titleconfirm}>Підтвердження</h4>
          <div>
            <button className={style.btnconfirm}></button>
            <button className={style.btnfailure}></button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  arrHabbitsByUserTest: [
    {
      sprintHabbit: '1111111111',
      idChild: '5fb4f73805dba90ca4fbf464',
      nameHabbit: 'football4',
      priceHabbit: 2,
      ownerHabbits: '5fb4f73805dba90ca4fbf464',
      genderChild: 'female',
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
