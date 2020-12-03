import React, { Component, Fragment } from 'react';
import Media from 'react-media';
import Header from '../Header';
import { connect } from 'react-redux';

import Slider from '../IformationOnChild_(sidebar)/InformationList';
import PresentsIcon from '../../assets/images/presentsIcon.png';
import Modal from '../Modal/Modal';
import AddFamilyForm from '../AddChildForm/Form';
import AddFormPresent from '../AddFormPresent/AddFormPresent';
import InformListByPresent from '../InformationByPresent/InformListByPresent';

import './PresentPage.css';

export default class PresentPosition extends Component {
  state = { modal: false, addFormPresent: false };

  toggleModal = () => {
    this.setState((state) => ({ modal: !state.modal }));
  };

  toggleAddFormPresentModal = () => {
    this.setState((state) => ({ addFormPresent: !state.addFormPresent }));
  };

  render() {
    const { modal } = this.state;
    const { addFormPresent } = this.state;
    const { presents } = this.props;

    return (
      <div className="presentcontainer">
        <header className="presentheader">
          <Header />
        </header>
        {modal && (
          <Modal onClose={this.toggleModal}>
            <AddFamilyForm></AddFamilyForm>
          </Modal>
        )}
        {addFormPresent && (
          <Modal onClose={this.toggleAddFormPresentModal}>
            <AddFormPresent></AddFormPresent>
          </Modal>
        )}

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
                <div className="presents">
                  <div className="presents">
                    <div className="presents_header">
                      <img className="presents_header-img" src={PresentsIcon} />
                      <h2 className="presents_header-title">Подарунки</h2>
                    </div>
                    <div className="presents_list">
                      {/* <InformationByHabbit></InformationByHabbit> */}
                    </div>
                    <div className="presents_button">
                      <button
                        onClick={this.toggleAddFormPresentModal}
                        className="presents_button-button"
                      >
                        Додати подарунок +
                      </button>
                    </div>
                  </div>
                </div>
              )}
              {matches.medium && (
                <div className="presents">
                  <div className="presents">
                    <div className="presents_header">
                      <img className="presents_header-img" src={PresentsIcon} />
                      <h2 className="presents_header-title">Подарунки</h2>
                    </div>
                    <div className="presents_list">
                      {/* <InformationByHabbit></InformationByHabbit> */}
                    </div>
                    <div className="presents_button">
                      <button
                        onClick={this.toggleAddFormPresentModal}
                        className="presents_button-button"
                      >
                        Додати подарунок +
                      </button>
                    </div>
                  </div>
                </div>
              )}
              {matches.large && (
                <div className="presentmain">
                  <div className="presentfamilynfo">
                    <Slider onClick={this.toggleModal}></Slider>
                  </div>
                  <div className="presents">
                    <div className="presents_header">
                      <img className="presents_header-img" src={PresentsIcon} />
                      <h2 className="presents_header-title">Подарунки</h2>
                    </div>
                    <div className="presents_list">
                      <InformListByPresent></InformListByPresent>

                      {/* 
                      {presents &&
                        presents.map((present) => (
                          <InformListByPresent
                            key={present._id}
                            present={present}
                          />
                        ))} */}
                    </div>
                    <div className="presents_button">
                      <button
                        onClick={this.toggleAddFormPresentModal}
                        className="presents_button-button"
                      >
                        Додати подарунок +
                      </button>
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

// const mapStateToProps = (state) => ({
//   presents: state.presents,
// });

// const mapDispatchToProps = {
//   getPresents: ,
// };

// export default connect(mapStateToProps)(PresentPosition);
