import React, { Component } from 'react';
import { graphql, gql } from 'react-apollo'
import '../../../var.css'
import './style.css'
import numeral from 'numeral'
import moment from 'moment'
import Overview from '../Overview'
import Table from '../table'

class Day extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render () {
    if (this.props.AllBookingsQuery && this.props.AllBookingsQuery.loading) {
      return (
        <Table options={{
          loading: this.props.AllBookingsQuery.loading,
          header:['date', 'title', 'account', 'value', 'type']
        }} />
      )
    } else if (this.props.AllBookingsQuery && this.props.AllBookingsQuery.error) {
      console.log(this.props.AllBookingsQuery.error);
      return <div>Error</div>
    } else {

      const bookingsToRender = this.props.AllBookingsQuery.allBookings
      const incomeAndExpenses = bookingsToRender.map( booking => {
        var row = []
        row.push(moment(booking.date).format('ll'))
        row.push(booking.title)
        if (booking.type === 'Income') {
          row.push(booking.fromAccount.name)
        } else {
          row.push(booking.toAccount.name)
        }
        row.push(numeral(booking.value).format('$ (0,0.0)'))
        if (booking.type === 'Income') {
          row.push('in')
        } else {
          row.push('out')
        }
        return row
      })

      const assetsAndLiabilities = []
      bookingsToRender.forEach( booking => {
        if (booking.worthCategory) {
          var row = []
          row.push(moment(booking.date).format('ll'))
          row.push(booking.title)
          if (booking.type === 'Income') {
            row.push(booking.fromAccount.name)
          } else {
            row.push(booking.toAccount.name)
          }
          row.push(numeral(booking.value).format('$ (0,0.0)'))
          if (booking.worthCategory === 'Asset') {
            row.push('as')
          } else {
            row.push('lia')
          }
          assetsAndLiabilities.push(row)
        }
      })

      return (
        <div className='tracker-day'>
          <h1 className='tracker-day-headline'>Day</h1>
          <Overview
            options={{
              data: [
                {
                  title: 'cashflow',
                  value: 450
                },
                {
                  title: 'income',
                  value: 500
                },
                {
                  title: 'expense',
                  value: 300
                },
                {
                  title: 'assets',
                  value: 1200
                },
                {
                  title: 'liabilities',
                  value: 130000
                }
              ]
            }}
          />
          <Table options={{
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
            data: incomeAndExpenses,
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
            data: assetsAndLiabilities,
          }} />
        </div>
      )
    }
  }
}

const ALL_BOOKINGS_QUERY = gql`
  query AllBookingsQuery {
    allBookings {
      id
      date
      title
      fromAccount {
        name
      }
      toAccount {
        name
      }
      value
      type
      worthCategory
    }
  }
`

export default graphql(ALL_BOOKINGS_QUERY, { name: 'AllBookingsQuery' })(Day)
