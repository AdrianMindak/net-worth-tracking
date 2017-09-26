import React, { Component } from 'react'
import '../../../var.css'
import './style.css'
import numeral from 'numeral'
import moment from 'moment'
import { ValidationIcons } from '../../../components/icons'
import LoadingTable from './loadingTable'
import AddRow from './addRow'

// Examlpe:
// options = {
//   loading: true || false,
//   title:'Income & Expense',
//   header:['date', 'title', 'account', 'value', 'type'],
//   format:[
//     {
//       orientation: 'center',
//       date: 'll'
//     },
//     {orientation: 'center'},
//     {orientation: 'center'},
//     {
//       orientation: 'end',
//       number: '$ (0,0.0)'
//     },
//     {orientation: 'center'}
//   ],
//   data:[
//     [1,2,3,4,6],
//     [2,'d',5,2,'k'],
//     [1,2,3,4,6],
//     [2,'d',5,2,'k'],
//     [1,2,3,4,6],
//     [2,'d',5,2,'k'],
//     [1,2,3,4,6],
//     [2,'d',5,2,'k'],
//
//   ]
// }

export default class Table extends Component {
  render() {
    const props = this.props.options
    if (props.loading) {
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
          <AddRow />
        </div>
      )
    }
  }
}
