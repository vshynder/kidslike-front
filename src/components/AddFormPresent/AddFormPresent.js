import React, { Component } from 'react';
import style from './pressentForm.module.scss';
import btnClose from '../../assets/images/close.png'



class addFormPresent extends Component {
    state={
        namePres:'',//ввести названия подарка
        ball:0,
        childrens:[ 'Masha', 'Sasha' ],//заглушка детей )
    };

    render(){

        const {childrens} = this.state 
        return (
            <div className={style.container_presents}>
                <button className={style.container_presents__close}>  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 1L11 11" stroke="#BDBDBD" stroke-width="2" stroke-linecap="round"/>
<path d="M1 11L11 0.999999" stroke="#BDBDBD" stroke-width="2" stroke-linecap="round"/>
</svg> </button>
               
            <form className={style.present_form}>
                <p className={style.present_form__title}>Додавання подарунку</p>

                <label className={style.present_form__label}> Назва
                    <input className={style.present_form__input}
                    placeholder="Введіть назву"/>
                </label>

                <label className={style.present_form__label}>Призначення подарунку
                
                        <select name="name" className={style.present_form__input} >

                            {
                             childrens.map(child =>  <option value={child}> {child} </option> )   
                            }
        
                       
                     </select>
                </label>

                <label className={style.present_form__label}>Бал
                <svg className={style.present_form__ball_star} width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.04894 0.92705C7.3483 0.00573921 8.6517 0.00573969 8.95106 0.92705L10.0206 4.21885C10.1545 4.63087 10.5385 4.90983 10.9717 4.90983H14.4329C15.4016 4.90983 15.8044 6.14945 15.0207 6.71885L12.2205 8.75329C11.87 9.00793 11.7234 9.4593 11.8572 9.87132L12.9268 13.1631C13.2261 14.0844 12.1717 14.8506 11.388 14.2812L8.58778 12.2467C8.2373 11.9921 7.7627 11.9921 7.41221 12.2467L4.61204 14.2812C3.82833 14.8506 2.77385 14.0844 3.0732 13.1631L4.14277 9.87132C4.27665 9.4593 4.12999 9.00793 3.7795 8.75329L0.979333 6.71885C0.195619 6.14945 0.598395 4.90983 1.56712 4.90983H5.02832C5.46154 4.90983 5.8455 4.63087 5.97937 4.21885L7.04894 0.92705Z" fill="#FF8626"/>
                </svg>

                    <input
                    className={style.present_form__ball}
                    id="grade"
                    type="number"
                    min="0"
                    max="99"
                    placeholder="00"/>
                </label>
                
                <label className={style.present_form__label}>Завантажити фото (необов’язково)
                  <div className={style.present_form__upload_box}>
                    <input type="file" className={style.present_form__upload_box_input} />
                    <p className={style.present_form__upload_box_text}> Оберіть файл </p>
                    <span className={style.present_form__upload_box_btn} > Обрати </span>
                    </div>
                </label>
                <div className={style.present_form__box_botton}>
                    <button className={style.present_form__box_botton__save}> Зберегти </button>
                    <button className={style.present_form__box_botton__canceling}> Видмина </button>

                </div>
            </form>
            </div>
        )
    }
}


export default addFormPresent;