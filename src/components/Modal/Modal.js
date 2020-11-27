import React, { Component } from 'react';
import './Modal.css';

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
    window.addEventListener('mousedown', this.handleGreyZone);
  }

  handleKeyDown = (e) => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleGreyZone = (e) => {
    console.log(e);
    if (e.target !== this.props.onClick) {
      this.props.onClose();
    }
  };

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
    window.removeEventListener('mousedown', this.handleGreyZone);
  }
  render() {
    return (
      <div className="Overlay">
        <div className="Modal">{this.props.children}</div>
      </div>
    );
  }
}
