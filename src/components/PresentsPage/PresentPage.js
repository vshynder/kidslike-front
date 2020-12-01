import React, { Component, Fragment } from 'react';
import Media from 'react-media';
import Header from '../Header';

import Slider from '../IformationOnChild_(sidebar)/InformationList';
import PresentsIcon from '../../assets/images/presentsIcon.png';

import './PresentPage.css';

export default class MainPosition extends Component {
  state = { modal: false, addFormPresent: false };

  render() {
    return (
      <div className="presentcontainer">
        <header className="presentheader">
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
                      <button className="presents_button-button">
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
                      <button className="presents_button-button">
                        Додати подарунок +
                      </button>
                    </div>
                  </div>
                </div>
              )}
              {matches.large && (
                <div className="presentmain">
                  <div className="presentfamilynfo">
                    <Slider></Slider>
                  </div>
                  <div className="presents">
                    <div className="presents_header">
                      <img className="presents_header-img" src={PresentsIcon} />
                      <h2 className="presents_header-title">Подарунки</h2>
                    </div>
                    <div className="presents_list">
                      {/* <InformationByHabbit></InformationByHabbit> */}
                    </div>
                    <div className="presents_button">
                      <button className="presents_button-button">
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
