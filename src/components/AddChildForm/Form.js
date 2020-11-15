import React, { Component } from 'react';
import style from './AddChildForm.module.css';

export default class AddChildForm extends Component {
  state = {
    male: false,
    female: false,
  };

  onClickFemale = () => {
    this.setState({
      female: true,
      male: false,
    });
  };

  onClickMale = () => {
    this.setState({
      male: true,
      female: false,
    });
  };

  render() {
    const { male, female } = this.state;
    return (
      <div className={style.addChildForm_container}>
        <button className={style.addChildForm_button__close} />
        <h2 className={style.addChildForm_title}>Додавання дитини</h2>
        <form>
          <label className={style.addChildForm_label__name}>
            <p className={style.addChildForm_title__name}>Iм`я дитини</p>
            <input
              className={style.addChildForm_input__name}
              type="text"
              placeholder="Iм`я"
            />
          </label>
          <h3 className={style.addChildForm_title__gender}>
            Оберiть стать дитини
          </h3>
          <div className={style.addChildForm_block__gender}>
            <label className={style.addChildForm_label__gender}>
              <div
                className={
                  female === true
                    ? style.addChildForm_gender__radioBlock_active
                    : style.addChildForm_gender__radioBlock
                }
              />
              <input
                className={style.addChildForm_input__gender}
                onClick={this.onClickFemale}
                name="gender"
                type="radio"
                defaultChecked={female}
              />
              <p className={style.addChildForm_gender}>Дiвчинка</p>
            </label>
            <label className={style.addChildForm_label__gender}>
              <div
                className={
                  male === true
                    ? style.addChildForm_gender__radioBlock_active
                    : style.addChildForm_gender__radioBlock
                }
              />
              <input
                className={style.addChildForm_input__gender}
                onClick={this.onClickMale}
                name="gender"
                type="radio"
                defaultChecked={male}
              />
              <p className={style.addChildForm_gender}>Хлопчик</p>
            </label>
          </div>
          <div className={style.addChildForm_block__buttons}>
            <button className={style.addChildForm_button__cancel}>
              Вiдмiна
            </button>
            <button className={style.addChildForm_button__save}>
              Зберегти
            </button>
          </div>
        </form>
      </div>
    );
  }
}
