import React, { Component } from 'react';

import Slider from '../IformationOnChild_(sidebar)/InformationList';
import './MainPage.css';

export default class MainPosition extends Component {
  state = {};

  componentDidMount() {
    console.log(this.props);
  }

  render() {
    return (
      <div className="container">
        <header className="header"></header>
        <div className="main">
          <div className="familynfo">
            <Slider></Slider>
          </div>
          <div className="habitsInfo">ofcoues</div>
          {window.innerWidth > 1200 && (
            <div className="extendMain">
              <div className="tasksinfo">oops</div>
            </div>
          )}
        </div>
      </div>
    );
  }
}
