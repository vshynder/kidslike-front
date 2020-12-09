import React, { Component, Fragment } from 'react';
import Media from 'react-media';
import { connect } from 'react-redux';
import style from './Layout.module.css';

import Slider from '../IformationOnChild_(sidebar)/InformationList';
import Modal from '../Modal/Modal';
import AddFamilyForm from '../AddChildForm/Form';
import Header from '../Header';
import AddFormHabit from '../AddFormHabit';
import AddFormTask from '../AddFormTask';
import tasksOperation from '../../redux/operations/tasksOperation';
import getChildrensOperation from '../../redux/operations/getAllChildrens';

class Layout extends Component {
  state = { modal: false, addFormHabit: false, addFromTask: false };

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
    const { tasks } = this.props;
    // console.log(tasks);

    return (
      <div className="container">
        <header className={style.header}>
          <Header></Header>
        </header>
        {addFormHabit && (
          <Modal onClose={this.toggleAddFormHabitModal}>
            <AddFormHabit onClose={this.toggleAddFormHabitModal}></AddFormHabit>
          </Modal>
        )}

        {addFromTask && (
          <Modal onClose={this.toggleAddFormTaskModal}>
            <AddFormTask onClose={this.toggleAddFormTaskModal}></AddFormTask>
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
              {matches.small && <></>}
              {matches.medium && <></>}
              {matches.large && (
                <div className={style.main}>
                  <div className={style.familynfo}>
                    <Slider onClick={this.toggleModal}></Slider>
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
  getTasks: tasksOperation.getAllTasks,
  getChildrens: getChildrensOperation.getChildrens,
};

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
