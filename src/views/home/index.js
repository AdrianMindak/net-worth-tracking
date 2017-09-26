import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import '../../var.css'
import './style.css';
import { NetWorthAtom } from '../../components/icons'

export default class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }
  render() {
    return (
      <div className="home">
        <div className='home-wellcome'>
          <div id='pagetitle'>
            <NetWorthAtom scale='100px' color='var(--prim-theme-color)'/>
          </div>
          <h1 className='pagetitle-invisible'>Café VonLuck</h1>
          <p>
            Welcome to Net Worth Tracker. <br/>
            With this app zou should be able to track your income and expenses in
            a way to help you to grow a furtion.
          </p>
          <NavLink
            to='/tracker'
            className='home-getting-started'
            activeClassName='is-active'
            >Getting started.</NavLink>
        </div>
      </div>
    );
  }
}
