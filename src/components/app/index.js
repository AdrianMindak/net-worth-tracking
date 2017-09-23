import React, { Component } from 'react';
import { NavLink, Switch, Route } from 'react-router-dom'
import '../../var.css'
import './style.css'
import Home from '../home'
import Shops from '../shops'
import Menue from '../menue'
import About from '../about'
// import Login from '../login'
import numeral from 'numeral'

numeral.register('locale', 'de', {
    delimiters: {
        thousands: '.',
        decimal: ','
    },
    abbreviations: {
        thousand: 'k',
        million: 'm',
        billion: 'b',
        trillion: 't'
    },
    currency: {
        symbol: '€'
    }
});

numeral.locale('de');

export default class App extends Component {
  render() {
    const menueLinks = (
      <div className='app-nav-menue'>
        <div className='app-nav-menue-links'>
          <NavLink exact={ true } to="/" activeClassName='is-active'>Home</NavLink>
          <NavLink to="/shops" activeClassName='is-active'>Shops</NavLink>
          <NavLink to="/menue" activeClassName='is-active'>Menue</NavLink>
          <NavLink to="/about" activeClassName='is-active'>About</NavLink>
          {/* <NavLink to="/login" activeClassName='is-active'>Login</NavLink> */}
        </div>
      </div>
    )
    return (
      <div className="app">

        { menueLinks }

        <div className='app-content'>
          <Switch>
            <Route exact path='/' component={ Home }/>
            <Route exact path='/shops' component={ Shops }/>
            <Route exact path='/menue' component={ Menue }/>
            <Route exact path='/about' component={ About }/>
            {/* <Route exact path='/login' component={ Login }/> */}
          </Switch>
        </div>
      </div>
    );
  }
}
