import React, { Component } from 'react'
import '../../var.css'
import './style.css'
// import nikolassee from '../../images/shops/01.jpg'
import { Search, Basket } from '../icons'
import menueData from './menueData.js'
import numeral from 'numeral'
var Dropbox = require('dropbox');
var dbx = new Dropbox({ accessToken: 'YOUR_ACCESS_TOKEN_HERE' });

dbx.filesListFolder({path: ''})
  .then(function(response) {
    console.log(response);
  })
  .catch(function(error) {
    console.log(error);
  });

const Product = (props) => {
  return (
    <div className='menue-product'>
      <img src={ props.image } />
      <div style={{ padding: '10px' }}>
        <div className='menue-product-title'>{ props.title }</div>
        <p>{ props.description }</p>
      </div>
      <div className='menue-product-price-tag'>
        <div className='menue-product-price-tag-price'>
          { numeral(props.price).format("(0,0.00) $") }
        </div>
      </div>
    </div>
  )
}

export default class Menue extends Component {
  constructor(props) {
    super(props)
    this.state = {
      search: '',
      searchResult: [],
      searching: false,
      menue: menueData
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
      this.setState({ searchResult })
    }
  }


  render() {
    let products = this.state.menue.map( (product,index) => {
        if (this.state.search === '') {
          console.log('if');
          return(
            <Product
              key={ index }
              image={ product.image }
              title={ product.title }
              description={ product.description }
              price={ product.price }
            />
          )
        } else {
          console.log('else');
          let searchRegExp = new RegExp(this.state.search, 'ig')
          if (searchRegExp.test(product.title)) {
            return(
              <Product
                key={ index }

                image={ product.image }
                title={ product.title }
                description={ product.description }
                price={ product.price }
              />
            )
          }
        }
      })


    return (
      <div className="menue">
        <div><Basket width='30px' color='var(--dark-grey)'/></div>
        <search className='menue-search'>
          <input
            className='menue-search-bar' value={ this.state.search }
            onFocus={ (e) => {
              this.setState({ searching: true })
            }}
            onBlur={ () => { this.setState({ searching: false }) }}
            onChange={
              (e)=>{
                this.setState({ search: e.target.value })
                this._searchForProduct(e.target.value)
              }
            }
            placeholder='Search'
          />
          <button><Search width='20px' color='white' /></button>
          <div className='menue-search-suggestions' style={{ display: this.state.searching ? 'block' : 'none' }}>
            {
              this.state.searchResult.map( (product) => {
                if (product) {
                  return (
                    <div>{ product }</div>
                  )
                }
              })
            }
          </div>
        </search>
        <div className="menue-products">
          { products }
        </div>
      </div>
    );
  }
}
