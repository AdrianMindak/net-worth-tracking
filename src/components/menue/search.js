import React, { Component } from 'react'
import { SearchIcon } from '../icons'

export default class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      search: '',
      searchResult: [],
      searching: false,
      menue: this.props.products
    }
  }

  _searchForProduct = (value) => {
    if (value !== '') {
      var { menue, searchResult } = this.state
      let searchRegExp = new RegExp(value, 'ig')
      searchResult = menue.map( (product, index) => {
        if (searchRegExp.test(product.title)) {
          return product.title
        }
      })
      return this.setState({ searchResult })
    }
  }

  render () {
    return (
      <div className='menue-search'>
        <input
          className='menue-search-bar' value={ this.state.search }
          onFocus={ (e) => {
            this.setState({ searching: true })
          }}
          onBlur={ () => this.setState({ searching: false }) }
          onChange={
            (e)=>{
              this.setState({ search: e.target.value })
              return this._searchForProduct(e.target.value)
            }
          }
          placeholder='Search'
        />
        <button><SearchIcon width='20px' color='white' /></button>
        <div className='menue-search-suggestions' style={{ display: this.state.searching ? 'block' : 'none' }}>
          {
            this.state.searchResult.map( (product,index) => {
              if (product) {
                return (
                  <div key={ index } >{ product }</div>
                )
              }
            })
          }
        </div>
      </div>
    )
  }
}
