import React, { Component, Fragment } from 'react';
import Media from 'react-media';
import { connect } from 'react-redux';

import Slider from '../IformationOnChild_(sidebar)/InformationList';
import InformationByHabbit from '../InformationByHabbit/InformationByHabbit';
import InformationByTask from '../InformationByTask';
import './MainPage.css';
import Modal from '../Modal/Modal';
import Form from '../AddChildForm/Form';
import Header from '../Header';

class MainPosition extends Component {
  state = { modal: false };

  toggleModal = () => {
    this.setState((state) => ({ modal: !state.modal }));
  };

  render() {
    const { modal } = this.state;

    return (
      <div className="container">
        <header className="header">
          <Header></Header>
        </header>
        {modal && (
          <Modal onClose={this.toggleModal}>
            <Form onClick={Form}></Form>
          </Modal>
        )}

        <Media
          queries={{
            small: '(max-width: 767px)',
            medium: '(min-width: 768px) and (max-width: 1199px)',
            large: '(min-width: 1200px)',
          }}
        >
          {(matches) => (
            <Fragment>
              {matches.small && (
                <div className="familynfo">
                  <Slider onClick={this.toggleModal}></Slider>
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
                    <div className="habitsInfo_section">
                      <div className="habitsInfo_section-header">
                        <h2>Звички</h2>
                      </div>
                      <div className="habitsInfo_section-list">
                        <InformationByHabbit></InformationByHabbit>
                      </div>
                      <button className="habitsInfo_section-button"></button>
                    </div>
                  </div>
                  <div className="extendMain">
                    <div className="tasksinfo">
                      <InformationByTask></InformationByTask>
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

// export default connect(mapStateToProps, null)(MainPosition);
export default MainPosition;
