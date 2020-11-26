import React, { Component, Fragment } from 'react';
import Media from 'react-media';

import Slider from '../IformationOnChild_(sidebar)/InformationList';

import './PresentPage.css';

export default class MainPosition extends Component {
  state = {};

  render() {
    return (
      <div className="container">
        <header className="header"></header>

        <Media
          queries={{
            small: '(max-width: 767px)',
            medium: '(min-width: 768px) and (max-width: 1199px)',
            large: '(min-width: 1200px)',
          }}
        >
          {(matches) => (
            <Fragment>
              {matches.small && <div className="presents"></div>}
              {matches.medium && <div className="presents"></div>}
              {matches.large && (
                <div className="main">
                  <div className="familynfo">
                    <Slider></Slider>
                  </div>
                  <div className="presents"></div>
                </div>
              )}
            </Fragment>
          )}
        </Media>
      </div>
    );
  }
}
