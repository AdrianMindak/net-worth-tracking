import React, { Component } from 'react';
import '../../var.css'
import './style.css';
import * as Icons from '../../components/icons'

const MaintenanceIcon = Icons.Maintenance

export default class Maintenance extends Component {
  render() {
    return (
      <div className="maintenance">
        <MaintenanceIcon scale='60%' color='var(--light-grey)' />
        <span className='maintenance-title'>This page is under construction.</span>
      </div>
    );
  }
}
