import React, { Component } from 'react';
import { NavLink, Route, Switch, Redirect } from 'react-router-dom'
import { graphql, gql } from 'react-apollo'
import '../../var.css'
import './style.css'
import numeral from 'numeral'
import moment from 'moment'
import Table from './table'

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
    if (this.props.AllBookingsQuery && this.props.AllBookingsQuery.error) {
      console.log(this.props.AllBookingsQuery.error);
      return <div>Error</div>
    }

    const bookingsToRender = this.props.AllBookingsQuery.allBookings
    console.log(bookingsToRender);
    return (
      <div className='tracker-day'>
        <Table options={{
          loading: this.props.AllBookingsQuery.loading,
          title:'Income & Expense',
          header:['date', 'title', 'account', 'value', 'type'],
          format:[
            {
              orientation: 'center',
              date: 'll'
            },
            {orientation: 'center'},
            {orientation: 'center'},
            {
              orientation: 'end',
              number: '$ (0,0.0)'
            },
            {orientation: 'center'}
          ],
          data:[
            [1,2,3,4,6],
            [2,'d',5,2,'k'],
            [1,2,3,4,6],
            [2,'d',5,2,'k'],
            [1,2,3,4,6],
            [2,'d',5,2,'k'],
            [1,2,3,4,6],
            [2,'d',5,2,'k'],

          ]
        }} />
        <Table options={{
          title:'Assets & Liabilities',
          header:['date', 'title', 'account', 'value', 'type'],
          format:[
            {
              orientation: 'center',
              date: 'll'
            },
            {orientation: 'center'},
            {orientation: 'center'},
            {
              orientation: 'end',
              number: '$ (0,0.0)'
            },
            {orientation: 'center'}
          ],
          data:[
            [1,2,3,4,6],
            [2,'d',5,2,'k'],
          ]
        }} />
      </div>
    )
  }
}

const ALL_BOOKINGS_QUERY = gql`
  query AllBookingsQuery {
    allBookings {
      id
      date
      title
      fromAccount {
        id
      }
      toAccount {
        id
      }
      value
      type
      worthCategory
    }
  }
`

Day = graphql(ALL_BOOKINGS_QUERY, { name: 'AllBookingsQuery' })(Day)

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
