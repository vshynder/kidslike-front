import React, { Component } from 'react';
import {connect} from 'react-redux'
import style from './pressentForm.module.scss';
import closeBtn  from "../../assets/images/close.svg";
import ballImg from "../../assets/images/changeHabbitStar.png";
import tringl from '../../assets/images/changeHabbitSelect.png'
import operation from '../../redux/operations/presentOperation'
import selector from '../../redux/selectors/ChildSelectors'


class AddFormPresent extends Component {
    state={
        title:'', 
        reward:0,  
        childId:'5fc60fbdae9d580017b97052', // заглушка 
        children:[],  
        formData:null,
    };

    componentDidMount(){
            this.setState({children:this.props.children})
    }

    handleChangeName = (e) => {
        this.setState({title:e.target.value})
    }    
    handleChangeBall = (e) => {
        this.setState({reward:e.target.value})
    }

    handleChoseChild = e => {
        this.setState({childId:e.target.value})
    };

    onSelectImageHandler = (files) => {
        const file = files[0];
        // const formData = new FormData();
        // formData.append('name','test')
        // formData.append("file",formData)
        console.log(file);
        this.setState({formData:file})
    }
    handleCloseWindow = (e) =>{
       // если закрыть окно должны передать пропы false
    };

    handleSubmit =  async  e => {
        e.preventDefault();

        const {title, reward, childId,formData} = this.state
    
    
        this.props.onAddPresent({title,reward,childId,formData})

        this.setState({title:'',reward:'',childId:'',formData:null})
    }

    render(){
        const {children,title ,childId} = this.state 
        return (
            <div className={style.container_presents}>
                <button className={style.container_presents__close}
                type='button'
                onClick={this.handleCloseWindow}
                > 
                     <img src={closeBtn}/>
                </button>
               
                <form className={style.present_form}  onSubmit={this.handleSubmit} >
                     <p className={style.present_form__title}>Додавання подарунку</p>

                    <label className={style.present_form__label}> Назва
                         <input 
                         className={style.present_form__input}
                         placeholder="Введіть назву"
                         value={title}
                         onChange={this.handleChangeName}
                         />
                    </label>

                    <label className={style.present_form__label}>Призначення подарунку
                           <img src={tringl} className={style.present_form__change_child}  />
                           <div className={style.present_form__change_child_block}  ></div>
                           <select  onChange={this.handleChoseChild} value={childId} className={style.present_form__input} >
                            {
                             children.map(child => <option key={child._id} value={child._id}> {child.name} </option> )   
                            }
                           </select>
                    </label>

                    <label className={style.present_form__label}>Бал
                        <img src={ballImg} className={style.present_form__ball_star} />
                      
                        <input
                        className={style.present_form__ball}
                        id="grade"
                        type="number"
                        min="0"
                        max="999"
                        placeholder="00"
                        onChange={this.handleChangeBall}
                        />
                     </label>
                
                     <label className={style.present_form__label}>Завантажити фото (необов’язково)

                        <div className={style.present_form__upload_box}>
                        <input type="file"   onChange={(e) => this.onSelectImageHandler(e.target.files)}className={style.present_form__upload_box_input} />
                        <p className={style.present_form__upload_box_text}> Оберіть файл </p>
                        <span className={style.present_form__upload_box_btn} > Обрати </span>
                        </div>
                    </label>

                    <div className={style.present_form__box_botton}>
                        <button className={style.present_form__box_botton__save}  
                            type="submit" > Зберегти </button>
                        <button 
                            className={style.present_form__box_botton__canceling}
                            type='button'
                            onClick={this.handleCloseWindow}
                        > Видмина </button>

                    </div>
                </form>
            </div>
        )
    };
}

const mapStatetoProps = (state)=> ({
    children:selector.getChildrens(state)
})


const mapDispatchToProps = {
    onAddPresent:operation.addPresent
}


export default connect(mapStatetoProps,mapDispatchToProps)(AddFormPresent)




