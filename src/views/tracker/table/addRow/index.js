import React, { Component } from 'react'
import { graphql, gql } from 'react-apollo'
import '../../../../var.css'
import './style.css'
import moment from 'moment'
import numeral from 'numeral'
import { MathIcons, CircledArrow, ValidationIcons } from '../../../../components/icons'

const initialState = {
  active: false,
  newBooking: {
    date: moment().format('LL'),
    title: '',
    accountDisplay:'',
    account: '',
    fromAccount: '',
    toAccount: '',
    value: '',
    type: '',
    worthCategory: ''
  },
  datePicker: {
    pickedDate: moment().format('LL'),
    currentDate: moment().format('LL')
  },
  accountInput: false,
}

class AddRow extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentWillMount() {
    this._cleanState()
  }

  componentDidMount() {
    this._setDaysForDatePicker()
  }

  _cleanState() {
    const cleanState = Object.assign({}, initialState)
    this.setState(cleanState)
  }

  _validateDate() {
    const { newBooking } = this.state
    newBooking.date = moment(newBooking.date)
    this.setState({ newBooking })
  }

  _inputHandler(key, value) {
    const { newBooking } = this.state
      newBooking[key] = value
    this.setState({ newBooking })
  }

  _setAccounts() {
    const { newBooking } = this.state
    const myAccount = this.props.AllAccountsQuery.allAccounts.find((account) => {
      return account.name === 'Mein Account'
    })
    if (newBooking.type === 'income') {
      newBooking.fromAccount = newBooking.account
      newBooking.toAccount = myAccount.id
    } else {
      newBooking.fromAccount = myAccount.id
      newBooking.toAccount = newBooking.account
    }
    this.setState({ newBooking })
  }

  _pickADate(date) {
    const { newBooking, datePicker } = this.state
    console.log(moment(date).format('ll'));
    newBooking.date = moment(date).format('ll')
    datePicker.pickedDate = moment(date).format('ll')
    this.setState({ newBooking, datePicker })
  }

  _changeYear(action){
    const { datePicker } = this.state
    if (action === 'add') {
      datePicker.currentDate = moment(datePicker.currentDate).add(1, 'years').format('LL')
    } else {
      datePicker.currentDate = moment(datePicker.currentDate).subtract(1, 'years').format('LL')
    }

  this.setState({ datePicker })
  this._setDaysForDatePicker()
  }

  _changeMonth(action){
    const { datePicker } = this.state
    if (action === 'add') {
      datePicker.currentDate = moment(datePicker.currentDate).add(1, 'months').format('LL')
    } else {
      datePicker.currentDate = moment(datePicker.currentDate).subtract(1, 'months').format('LL')
    }

  this.setState({ datePicker })
  this._setDaysForDatePicker()
  }

  _setDaysForDatePicker() {
    const { datePicker } = this.state
    const firstDayToRender = moment(datePicker.currentDate).startOf('month').startOf('week')
    const lastDayToRender = moment(datePicker.currentDate).endOf('month').endOf('week')
    const daysToRender = []
    const weeksToRender = (lastDayToRender.diff(firstDayToRender, 'days') + 1)  / 7

    for (var i = 0; i < weeksToRender; i++) {
      let weekToPush = []
      for (var j = 0; j < 7; j++) {
        weekToPush.push(moment(firstDayToRender).add((i * 7)+j, 'days'))
      }
      daysToRender.push(weekToPush)
    }

    datePicker.daysToRender = daysToRender

    this.setState({ datePicker })
  }

  _createBooking = async () => {
    const { date, title, value, type, worthCategory, fromAccount, toAccount } = this.state.newBooking
    await this.props.createBookingMutation({
      variables: {
        date, title, value, type, worthCategory, fromAccount, toAccount
      }
    })
    this._cleanState()
  }

  render() {
    if (this.props.AllAccountsQuery && this.props.AllAccountsQuery.error) {
      console.log(this.props.AllAccountsQuery.error)
    }
    if (!this.state.active) {
      return (
        <button className='add-row-add-button-not-active' onClick={ () => { this.setState({ active: true}) }}>
          <MathIcons icon='plus' scale='30px' color='white' />
        </button>
      )
    } else {
      return (
        <div className='add-row'>
          <div className='add-row-inputs'>
            <button className='close-add-row' onClick={() => {this.setState({active: false})}}>
              <ValidationIcons validation={false} scale='20px' color='var(--grey)' />
            </button>
            <div className='add-row-input' key='date'>
              <div className='add-row-input-picked-date'>{this.state.datePicker.pickedDate}</div>
              <div className='add-row-input-date-picker-year'>
                <button onClick={() => {this._changeYear('sub')}}><CircledArrow direction='left' filled={true} scale='20px' color='var(--blue)' /></button>
                <div>
                  {moment(this.state.datePicker.currentDate).format('YYYY')}
                </div>
                <button onClick={() => {this._changeYear('add')}}><CircledArrow direction='right' filled={true} scale='20px' color='var(--blue)' /></button>
              </div>
              <div className='add-row-input-date-picker-month'>
                <button onClick={() => {this._changeMonth('sub')}}><CircledArrow direction='left' filled={true} scale='20px' color='var(--blue)' /></button>
                <div>
                  {moment(this.state.datePicker.currentDate).format('MMM')}
                </div>
                <button onClick={() => {this._changeMonth('add')}}><CircledArrow direction='right' filled={true} scale='20px' color='var(--blue)' /></button>
              </div>
              <div className='add-row-input-date-picker' style={{gridTemplateRows: `repeat(${this.state.datePicker.daysToRender.length + 1}, 1fr)`}}>
                <div className='add-row-input-date-picker-week-headline'>
                  {
                    ['S','M','T','W','T','F','S'].map((day,index) => {
                      return(
                        <div key={index}>{day}</div>
                      )
                    })
                  }
                </div>
              {
                this.state.datePicker.daysToRender.map((week,index) => {
                  return (
                    <div key={index} className='add-row-input-date-picker-week'>
                      {
                        week.map((day,index) => {
                          const firstDayToRender = moment(this.state.datePicker.currentDate).startOf('month')
                          const lastDayToRender = moment(this.state.datePicker.currentDate).endOf('month')
                          if (moment(day).isBefore(firstDayToRender) || moment(day).isAfter(lastDayToRender)) {
                            return (
                              <button
                                key={index}
                                className={
                                  `
                                    add-row-input-date-picker-day is-out-of-range
                                    ${ moment(this.state.datePicker.pickedDate).format('ll') === moment(day).format('ll') ? 'is-active' : ''}
                                  `
                                }
                                value={moment(day,'DD-MM-YYYY').format('ll')}
                                onClick={e => { this._pickADate(e.target.value)}}
                                >
                                  {moment(day,'DD-MM-YYYY').format('DD')}
                              </button>
                            )
                          } else {
                            return (
                              <button
                                key={index}
                                className={
                                  `
                                    add-row-input-date-picker-day
                                    ${ moment(this.state.datePicker.pickedDate).format('ll') === moment(day).format('ll') ? 'is-active' : ''}
                                  `
                                }
                                value={moment(day,'DD-MM-YYYY').format('ll')}
                                onClick={e => { this._pickADate(e.target.value)}}
                                >
                                  {moment(day,'DD-MM-YYYY').format('DD')}
                              </button>
                            )
                          }
                        })
                      }
                    </div>
                  )
                })
              }
            </div>
            </div>
            <div className='add-row-input' key='title'>
              <input
                placeholder='very important expense'
                value={ this.state.newBooking.title}
                onChange={ (e) => { this._inputHandler('title', e.target.value) }}
              />
            </div>
            <div className='add-row-input' key='account'>
              <input
                placeholder='super account'
                value={ this.state.newBooking.account}
                onChange={ (e) => { this._inputHandler('account', e.target.value) }}
                onFocus={ () => { this.setState({ accountInput: true})}}
                onBlur={ () => { this.setState({ accountInput: false})}}
              />
              <div
                className={
                  `
                    add-row-input-accout-drop-down-menue
                    ${ this.state.accountInput ? 'is-active' : ''}
                  `
                }
                >
                {
                  this.props.AllAccountsQuery.allAccounts.map((account,index) => {
                    return (
                      <button key={index} onClick={ () => { this._inputHandler('account',account.id); this._inputHandler('accountDisplay', account.name)}}>
                        {account.name}
                      </button>
                    )
                  })
                }
              </div>
            </div>
            <div className='add-row-input' key='value'>
              <input
                placeholder={ numeral(250).format('$ (0,0.0)')}
                value={this.state.newBooking.value}
                onChange={ (e) => { this._inputHandler('value', e.target.value) }}
              />
            </div>
            <div className='add-row-input-option-buttons' key='type'>
              {
                ['income', 'expense'].map((element,index) => {
                  return (
                    <button
                      key={index}
                      className={ this.state.newBooking.type === element ? 'add-row-input-option-button is-active' : 'add-row-input-option-button'}
                      onClick={ async (e) => { this._inputHandler('type', element); this._setAccounts() }}
                      >
                      {element}
                    </button>
                  )
                })
              }
            </div>
          </div>
          <button
            className='add-row-add-button-is-active'
            onClick={()=>{this._createBooking()}}
            >
              <MathIcons icon='plus' scale='30px' color='white'/>
          </button>
        </div>
      )
    }
  }
}

const ALL_ACCOUNTS_QUERY = gql`
  query AllAccountsQuery {
    allAccounts {
      id
      name
    }
  }
`

const CREATE_BOOKING_MUTATION = gql`
  mutation CreateBookingMutation($date: String!, $title: String!) {
    createBooking(
      description: $description,
      url: $url,
    ) {
      id
      createdAt
      url
      description
    }
  }
`

export default graphql(ALL_ACCOUNTS_QUERY, { name: 'AllAccountsQuery' })(AddRow)
