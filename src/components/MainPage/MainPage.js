import React, { Component, Fragment } from 'react';
import Media from 'react-media';
import { connect } from 'react-redux';

import Slider from '../IformationOnChild_(sidebar)/InformationList';
import InformationByHabbit from '../InformationByHabbit/InformationByHabbit';
import InformationByTask from '../InformationByTask';
import './MainPage.css';
import Modal from '../Modal/Modal';
import AddFamilyForm from '../AddChildForm/Form';
import Header from '../Header';
import habit from '../../assets/images/habbits.png';
import task from '../../assets/images/tasks.png';
import AddFormHabit from '../AddFormHabit';
import AddFormTask from '../AddFormTask';
import tasksOperation from '../../redux/operations/tasksOperation';

class MainPosition extends Component {
  state = { modal: false, addFormHabit: false, addFromTask: false };

  componentDidMount(){
    this.props.getTasks()
  }

  toggleModal = () => {
    this.setState((state) => ({ modal: !state.modal }));
  };

  toggleAddFormHabitModal = () => {
    this.setState((state) => ({ addFormHabit: !state.addFormHabit }));
  };

  toggleAddFormTaskModal = () => {
    this.setState((state) => ({ addFromTask: !state.addFromTask }));
  };

  render() {
    const { modal } = this.state;
    const { addFormHabit } = this.state;
    const { addFromTask } = this.state;
    const {tasks} = this.props;


    return (
      <div className="container">
        <header className="header">
          <Header></Header>
        </header>
        {addFormHabit && (
          <Modal onClose={this.toggleAddFormHabitModal}>
            <AddFormHabit></AddFormHabit>
          </Modal>
        )}

        {modal && (
          <Modal onClose={this.toggleModal}>
            <AddFamilyForm></AddFamilyForm>
          </Modal>
        )}

        {addFromTask && (
          <Modal onClose={this.toggleAddFormTaskModal}>
            <AddFormTask></AddFormTask>
          </Modal>
        )}

        <Media
          queries={{
            small: '(max-width: 767px)',
            medium: '(min-width: 768px) and (max-width: 1250px)',
            large: '(min-width: 1250px)',
          }}
        >
          {(matches) => (
            <Fragment>
              {matches.small && (
                <div className="familynfo">
                  <Slider  onClick={this.toggleModal}></Slider>
                </div>
              )}
              {matches.medium && (
                <div className="familynfo">
                  <Slider onClick={this.toggleModal}></Slider>
                </div>
              )}
              {matches.large && (
                <div className="main">
                  <div className="familynfo">
                    <Slider onClick={this.toggleModal}></Slider>
                  </div>
                  <div className="habitsInfo">
                    <div className="habitsInfo_header">
                      <img className="habitsInfo_header-img" src={habit} />
                      <h2 className="habitsInfo_header-title">Звички</h2>
                    </div>
                    <div className="habitsInfo_list">
                      {/* <InformationByHabbit></InformationByHabbit> */}
                    </div>
                    <div className="habitsInfo_button">
                      <button
                        onClick={this.toggleAddFormHabitModal}
                        className="habitsInfo_button-button"
                      >
                        Додати звичку +
                      </button>
                    </div>
                  </div>
                  <div className="extendMain">
                    <div className="tasksinfo">
                      <div className="tasksinfo__header">
                        <img className="tasksinfo__header-img" src={task} />
                        <h2 className="tasksinfo__header-title">Задачі</h2>
                      </div>
                      <div className="tasksinfo__list">
                       {
                         tasks.map((task ) => 
          
                             <InformationByTask  key={task._id} task={task}/>)
                       }
                      </div>
                      <div className="tasksinfo__button">
                        <button
                          onClick={this.toggleAddFormTaskModal}
                          className="tasksinfo__button-button"
                        >
                          Додати задачу +
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </Fragment>
          )}
        </Media>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  tasks: state.tasks,
});


const mapDispatchToProps = {
  getTasks:tasksOperation.getAllTasks
}


export default connect(mapStateToProps, mapDispatchToProps)(MainPosition);
// export default MainPosition;
