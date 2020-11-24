import React, { Component } from 'react';

import Slider from '../IformationOnChild_(sidebar)/InformationList.js';
import './MainPage.css';

export default class MainPosition extends Component {
  state = {};

  render() {
    return (
      <div className="container">
        <header className="header"></header>
        <div className="main">
          <div className="familynfo">
            <Slider></Slider>
          </div>
          <div className="habitsInfo">ofcoues</div>
          <div className="extendMain">
            <div className="tasksinfo">oops</div>
          </div>
        </div>
      </div>
    );
  }
}
