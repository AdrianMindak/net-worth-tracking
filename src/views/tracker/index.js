import React, { Component } from 'react';
import { NavLink, Route, Switch, Redirect } from 'react-router-dom'
import '../../var.css'
import './style.css'
import numeral from 'numeral'
import moment from 'moment'
import Overview from './Overview'
import Day from './Day'

const data = {
  accounts:[
    {
      name:'',
      value: ['fix', 'flexible'],
      repeating: false,
      banks: ['BANKS'],
      IBAN:'',
      bookingDates:[],
      nextBookingDate:'',
    }
  ],
  Banks:[
    {
      name:'',
      BIC:'',
      accounts: ['ACCOUNTS'],
    }
  ],
  bookings:[
    {
      date:'',
      title:'',
      value: 0,
      income: false,
      expense: false,
      assest: false,
      liabilitie: false,
      from:'',
      to:'',
    }
  ]
}

const Week = () => {
  return (
    <div>Week</div>
  )
}

const Month = () => {
  return (
    <div>Month</div>
  )
}

const Year = () => {
  return (
    <div>Year</div>
  )
}

export default class Tracker extends Component {
  constructor(props){
    super(props)
    this.state = {

    }
  }

  render() {
    return (
      <div className='tracker'>
        <div className='tracker-nav-menue'>
          <NavLink to='/tracker/day' activeClassName='is-active'>Day</NavLink>
          <NavLink to='/tracker/week' activeClassName='is-active'>Week</NavLink>
          <NavLink to='/tracker/month' activeClassName='is-active'>Month</NavLink>
          <NavLink to='/tracker/year' activeClassName='is-active'>Year</NavLink>
        </div>
        <div className='tracker-content'>
          <Switch>
            <Route exact path='/tracker' render={ () => {
              return(
                <Redirect to='/tracker/day' />
              )
            }}/>
            <Route path='/tracker/day' component={ Day }/>
            <Route path='/tracker/week' component={ Week }/>
            <Route path='/tracker/month' component={ Month }/>
            <Route path='/tracker/year' component={ Year }/>
          </Switch>
        </div>
      </div>
    )
  }
}
