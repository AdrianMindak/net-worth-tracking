import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom'
import '../../var.css'
import './style.css'
import Home from '../home'
import Shops from '../shops'
import About from '../about'

export default class App extends Component {
  render() {
    return (
      <div className="app">

        <div className='app-header'></div>

        <div className='app-content'>
          <Switch>
            <Route exact path='/' component={ Home }/>
            <Route exact path='/shops' component={ Shops }/>
            <Route exact path='/about' component={ About }/>
          </Switch>
        </div>

        <div className='app-menue'>
          <div className='app-menue-links'>
            <Link to="/">Home</Link>
            <Link to="/shops">Shops</Link>
            <Link to="/about">About</Link>
          </div>
        </div>

      </div>
    );
  }
}
