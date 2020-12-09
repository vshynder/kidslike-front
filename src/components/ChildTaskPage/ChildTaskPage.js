import React, { Component, Fragment } from 'react';
import TaskContainer from '../TasksContainer/TasksContainer';
import Media from 'react-media';
import Header from '../Header';

import Slider from '../IformationOnChild_(sidebar)/InformationList';

import './ChildTaskPage.css';

export default class MainPosition extends Component {
  state = {};

  render() {
    return (
      <div className="taskcontainer">
        <header className="taskheader">
          <Header />
        </header>

        <Media
          queries={{
            small: '(max-width: 767px)',
            medium: '(min-width: 768px) and (max-width: 1249px)',
            large: '(min-width: 1250px)',
          }}
        >
          {(matches) => (
            <Fragment>
              {matches.small && (
                <div className="tasksinfo">
                  <div className="tasksinfo">
                    <TaskContainer
                      match={this.props.match}
                      location={this.props.location}
                    />
                  </div>
                </div>
              )}
              {matches.medium && (
                <div className="tasksinfo">
                  <div className="tasksinfo">
                    <TaskContainer
                      match={this.props.match}
                      location={this.props.location}
                    />
                  </div>
                </div>
              )}
              {matches.large && (
                <div className="taskmain">
                  <div className="familynfo">
                    <Slider></Slider>
                  </div>
                  <div className="tasksinfo">
                    <TaskContainer
                      match={this.props.match}
                      location={this.props.location}
                    />
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
