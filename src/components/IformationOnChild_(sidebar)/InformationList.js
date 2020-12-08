import React, { Component } from 'react';
import InformationItem from './InformationItem';
import house from '../../assets/InformationOnChild-Images/image20.svg';
import style from './informationList.module.css';
import { connect } from 'react-redux';
import Modal from '../Modal/Modal';
import AddFamilyForm from '../AddChildForm/Form';
import childrenSelectors from '../../redux/selectors/ChildSelectors';
import tasksSelector from '../../redux/selectors/tasksSelector';

class InformationList extends Component {
  state = {
    modal: false,
  };

  toggleModal = () => {
    this.setState((state) => ({ modal: !state.modal }));
  };

  render() {
    const { modal } = this.state;
    const { childrens, onClick, tasks } = this.props;
    return (
      <>
        {modal && (
          <Modal onClose={this.toggleModal}>
            <AddFamilyForm onClose={this.toggleModal}></AddFamilyForm>
          </Modal>
        )}
        <div className={style.childrenSidebar_container}>
          <div className={style.childrenSidebar_header}>
            <img
              className={style.childrenSidebar_house}
              src={house}
              alt="home"
            />
            <h2 className={style.childrenSidebar_title}>Сім'я</h2>
          </div>
          <ul className={style.childrenSidebar_childrens}>
            {childrens.map((children) => (
              <li className={style.childrenSidebar_item} key={children._id}>
                <InformationItem
                  childId={children._id}
                  male={children.gender}
                  name={children.name}
                  balance={children.stars ? children.stars : 0}
                  // firstTasks={
                  //   tasks.length > 0
                  //     ? tasks.filter((item) => {
                  //       let arr = []
                  //       if(children.id === item.childId) {
                  //         arr.push(item)
                  //       }
                  //         if (arr[0].tittle) {
                  //           return arr[0].tittle;
                  //         }
                  //       })
                  //     : ''
                  // }
                  // firstTask={
                  //   children.tasks
                  //     ? children.tasks[0]
                  //     : // ? children.tasks[0].title.length > 22
                  //       //   ? `${children.tasks[0].title.slice(0, 22)}...`
                  //       //   : children.tasks[0].title
                  //       // : ''
                  //       ''
                  // }
                  // costFirstTask={
                  //   children.tasks
                  //     ? children.tasks[0]
                  //       ? `+ ${children.tasks[0].reward}`
                  //       : ''
                  //     : ''
                  // }
                  // secondTask={
                  //   children.tasks
                  //     ? children.tasks[1]
                  //       ? children.tasks[1].title.length > 22
                  //         ? `${children.tasks[1].title.slice(0, 22)}...`
                  //         : children.tasks[1].title
                  //       : ''
                  //     : ''
                  // }
                  // costSecondTask={
                  //   children.tasks
                  //     ? children.tasks[1]
                  //       ? `+ ${children.tasks[1].reward}`
                  //       : ''
                  //     : ''
                  // }
                />
              </li>
            ))}
          </ul>

          <button
            onClick={this.toggleModal}
            className={style.childrenSidebar_button}
          >
            Додати дитину +
          </button>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  childrens: childrenSelectors.getChildrens(state),
  tasks: tasksSelector.getTasks(state),
});

export default connect(mapStateToProps, null)(InformationList);
