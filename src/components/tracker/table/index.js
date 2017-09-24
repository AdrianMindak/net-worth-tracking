import React, { Component } from 'react'
import '../../../var.css'
import './style.css'
import numeral from 'numeral'
import moment from 'moment'
import { ValidationIcons } from '../../icons'
import LoadingTable from './loadingTable'

export default class Table extends Component {
  render() {
    const props = this.props.options
    if (props.loading) {
      console.log('table is loading');
      return(
        <LoadingTable columns={ props.header.length } rows={ 3 }/>
      )
    } else {
      const tableGridStyle = { gridTemplateColumns: `repeat(${props.header.length}, 1fr) 30px` }
      return(
        <div className='table'>
          <div className='table-title'>{ props.title}</div>
          <div className='table-header table-grid' style={ tableGridStyle }>
            {
              props.header.map( (element,index) => {
                return(
                  <div
                    key={ index }
                    className='table-header-cell-format'>
                    { element }
                  </div>
                )
              })
            }
          </div>
          <div className='table-body'>
            {
              props.data.map( (row,index) => {
                row.push('delete')
                return(
                  <div key={ index } className='table-row table-grid' style={ tableGridStyle }>
                    {
                      row.map( (element,index) => {
                        if (element === 'delete') {
                          return (
                            <button key={ index }><ValidationIcons validation={ false } scale='20px' color='var(--grey)'/></button>
                          )
                        } else {
                          return(
                            <div key={ index } className='table-body-cell-format' style={{ justifyContent: props.format[index].orientation === 'center' ? 'center' : `flex-${props.format[index].orientation}` }}>
                              {
                                (
                                  () => {
                                    if (!props.format) {
                                      return element
                                    } else {
                                      if (props.format[index].date && props.format[index].number) {
                                        console.log('Error only one format is valid for one cell-> number or date');
                                        return element
                                      } else if (props.format[index].date) {
                                        return moment(element).format(props.format[index].date)
                                      } else if (props.format[index].number) {
                                        return numeral(element).format(props.format[index].number)
                                      } else {
                                        return element
                                      }
                                    }
                                  }
                                )()
                              }
                            </div>
                          )
                        }
                      })
                    }
                  </div>
                )
              })
            }
          </div>
          {/* <div className='tracker-day-bookings-body'>
            {
              otherData.map( (value,index) => {
                return(
                  <div key={ index } className='tracker-day-bookings-body-booking tracker-day-table-grid'>
                    <div className='tracker-day-cell-format'>{ moment().format('ll')}</div>
                    <div className='tracker-day-cell-format '>N26</div>
                    <div className='tracker-day-cell-format-end '>{ numeral(value).format('$ (0.0,0)') }</div>
                    <div className='tracker-day-cell-format '>in</div>
                  </div>
                )
              })
            }
          </div> */}
        </div>
      )
    }
  }
}
