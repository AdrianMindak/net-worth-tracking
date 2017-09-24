import React, { Component } from 'react';
import { NavLink, Switch, Route } from 'react-router-dom'
import '../../var.css'
import './style.css'
import Home from '../home'
import Maintenance from '../maintenance'
import { NetWorthAtom } from '../icons'
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
          <NavLink exact={ true } to="/" activeClassName='is-active'><NetWorthAtom scale='30px' color='var(--prim-theme-color)'/></NavLink>
          <NavLink to="/login" activeClassName='is-active'>Login</NavLink>
        </div>
      </div>
    )
    return (
      <div className="app">

        { menueLinks }

        <div className='app-content'>
          <Switch>
            <Route exact path='/' component={ Home }/>
            <Route exact path='/login' component={ Maintenance }/>
          </Switch>
        </div>
      </div>
    );
  }
}
