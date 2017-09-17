import React, { Component } from 'react';
import '../../var.css'
import './style.css';
import { EspressoMaschine } from '../icons'

export default class Maintenance extends Component {
  render() {
    return (
      <div className="maintenance">
        <EspressoMaschine color='var(--light-grey)' />
        <span className='maintenance-title'>This page is under construction.</span>
      </div>
    );
  }
}
