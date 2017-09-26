import React from 'react'
import '../../../../var.css'
import './style.css'
import _ from 'lodash'

const LoadingTable = ({ columns, rows }) => {
  return (
    <div className='table-loading'>
      <div className='table-loading-title'></div>
      <div className='table-loading-header'>
        {
          _.times(columns, String).map( index => {
            return(
              <div key={ index } className='table-loading-header-element'></div>
            )
          })
        }
      </div>
      <div className='table-loading-data'>
        {
          _.times(rows, String).map( index => {
            return(
              <div key={ index } className='table-loading-data-row'>
                {
                  _.times(columns, String).map( index =>{
                    return(
                      <div key={ index } className='table-loading-data-cell'>

                      </div>
                    )
                  })
                }
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default LoadingTable
