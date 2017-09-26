import React, { Component } from 'react';
import { graphql, gql } from 'react-apollo'
import '../../../var.css'
import './style.css'
import numeral from 'numeral'
import moment from 'moment'

export default class Overview extends Component {
  render () {
    return (
      <div className='overview'>
        {
          this.props.options.data.map( (element,index) => {
            return (
              <div key={index} className='overview-element'>
                <div>{element.title}</div>
                <div>{numeral(element.value).format('$ (0,0.0)')}</div>
              </div>
            )
          })
        }
      </div>
    )
  }
}
