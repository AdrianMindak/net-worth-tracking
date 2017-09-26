import React, { Component } from 'react'
import './style.css'

export default class DropDownMenue extends Component {
  constructor (props) {
    super(props)
    this.state = {

    }
  }

  render () {
    return (
      <div className='drop-down-menue-higher-class-component-wrapper'>
        {this.props.children}
        <div className='drop-down-menue'>
          hello world
        </div>
      </div>
    )
  }
}
