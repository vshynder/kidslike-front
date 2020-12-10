// import React, { useState, useEffect, Fragment } from 'react';
import habit from '../../assets/images/habbits.png';
import task from '../../assets/images/tasks.png';
import Media from 'react-media';
import React, { Component, Fragment } from 'react';

import { connect } from 'react-redux';

import InformationByTask from '../InformationByTask';
import InformationByHabbit from '../ContainerForAllHabbits/ContainerForAllHabbits';
import Modal from '../Modal/Modal';

// import tasksOperation from '../../redux/operations/tasksOperation';
// import habitsOperation from '../../redux/operations/habbitOperation';
// import getChildrensOperation from '../../redux/operations/getAllChildrens';
import taskStyles from './index.module.css';
//

class TasksPage extends Component {
  render() {
    const { tasks } = this.props;
    return (
      <>
        <div className={taskStyles.container}>
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
                  <div className={taskStyles.familynfo}>
                    <div className={taskStyles.familynfo}>
                      <div className={taskStyles.habitsInfo}>
                        <div className={taskStyles.habitsInfo_header}>
                          <img
                            className={taskStyles.habitsInfo_header_img}
                            src={habit}
                          />
                          <h2 className={taskStyles.habitsInfo_header_title}>
                            Звички
                          </h2>
                        </div>
                        <div className={taskStyles.habitsInfo_list}>
                          <InformationByHabbit />
                        </div>
                        <div className={taskStyles.habitsInfo_button}>
                          <button
                            // onClick={this.toggleAddFormHabitModal}
                            className={taskStyles.habitsInfo_button_button}
                          >
                            Додати звичку +
                          </button>
                        </div>
                        <div className={taskStyles.extendMain}>
                          <div className={taskStyles.tasksinfo}>
                            <div className={taskStyles.tasksinfo__header}>
                              <img
                                className={taskStyles.tasksinfo__header_img}
                                src={task}
                              />
                              <h2
                                className={taskStyles.tasksinfo__header_title}
                              >
                                Задачі
                              </h2>
                            </div>
                            <div className={taskStyles.tasksinfo__list}>
                              {tasks &&
                                tasks.map(
                                  (task) =>
                                    task.isCompleted === 'active' && (
                                      <InformationByTask
                                        key={task._id}
                                        task={task}
                                      />
                                    ),
                                )}
                            </div>
                            <div className={taskStyles.tasksinfo__button}>
                              <button
                                // onClick={this.toggleAddFormTaskModal}
                                className={taskStyles.tasksinfo__button_button}
                              >
                                Додати задачу +
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                {matches.medium && (
                  <div className={taskStyles.familynfo}>
                    <div className={taskStyles.habitsInfo}>
                      <div className={taskStyles.habitsInfo_header}>
                        <img
                          className={taskStyles.habitsInfo_header_img}
                          src={habit}
                        />
                        <h2 className={taskStyles.habitsInfo_header_title}>
                          Звички
                        </h2>
                      </div>
                      <div className={taskStyles.habitsInfo_list}>
                        <InformationByHabbit />
                      </div>
                      <div className={taskStyles.habitsInfo_button}>
                        <button
                          // onClick={this.toggleAddFormHabitModal}
                          className={taskStyles.habitsInfo_button_button}
                        >
                          Додати звичку +
                        </button>
                      </div>
                      <div className={taskStyles.extendMain}>
                        <div className={taskStyles.tasksinfo}>
                          <div className={taskStyles.tasksinfo__header}>
                            <img
                              className={taskStyles.tasksinfo__header_img}
                              src={task}
                            />
                            <h2 className={taskStyles.tasksinfo__header_title}>
                              Задачі
                            </h2>
                          </div>
                          <div className={taskStyles.tasksinfo__list}>
                            {tasks &&
                              tasks.map(
                                (task) =>
                                  task.isCompleted === 'active' && (
                                    <InformationByTask
                                      key={task._id}
                                      task={task}
                                    />
                                  ),
                              )}
                          </div>
                          <div className={taskStyles.tasksinfo__button}>
                            <button
                              // onClick={this.toggleAddFormTaskModal}
                              className={taskStyles.tasksinfo__button_button}
                            >
                              Додати задачу +
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                {matches.large && <>{this.props.history.push('/main')}</>}
              </Fragment>
            )}
          </Media>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  tasks: state.tasks,
  habbits: state.habbits,
});

// const mapDispatchToProps = (dispatch) => ({
//   getTasks: () => dispatch(tasksOperation.getAllTasks()),
//   getHabbits: () => dispatch(habitsOperation.getAllHabbitsByUser()),
//   getChildren: () => dispatch(getChildrensOperation.getChildrens()),
// });

export default connect(mapStateToProps)(TasksPage);
