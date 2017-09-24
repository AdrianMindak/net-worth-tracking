import React, { Component } from 'react';
import { BrowserRouter, Link, Route, Switch, Redirect } from 'react-router-dom'
import '../../var.css'
import './style.css'

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

class Day extends Component {
  render () {
    return (
      <div>Day</div>
    )
  }
}

const Week = () => {
  return (
    <div>Week</div>
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
          <Link to='/tracker/day'>Day</Link>
          <Link to='/tracker/week'>Week</Link>
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
          </Switch>
        </div>
      </div>
    )
  }
}
