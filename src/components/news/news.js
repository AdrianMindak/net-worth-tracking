import React, { Component } from 'react'
import '../../var.css'
import './style.css'

export default class SingelNewsBox extends Component {
  render() {
    return (
      <div className="newsBox">
        <h1>{ this.props.title }</h1>
        <p>{ this.props.text }</p>
      </div>
    );
  }
}
