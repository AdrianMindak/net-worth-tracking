import React, { Component } from 'react';
import '../../var.css'
import './style.css';

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

export default class Tracker extends Component {
  constructor(props){
    super(props)
    this.state = {

    }
  }

  render() {
    return (
      <div>HelloWorld</div>
    )
  }
}
