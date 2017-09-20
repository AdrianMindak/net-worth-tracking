import React, { Component } from 'react'
import '../../var.css'
import './style.css'
// import nikolassee from '../../images/shops/01.jpg'
import { Search } from '../icons'
import menueData from './menueData.js'
import numeral from 'numeral'


export default class Menue extends Component {
  constructor(props) {
    super(props)
    this.state = {
      search: '',
      searchResult: '',
      menue: menueData
    }
  }

  _searchForProduct = () => {
    this.setState({ searchResult: this.state.search })
  }

  render() {
    let products = this.state.menue.map( (product,index) => {
        if (this.state.searchResult === '') {
          console.log('if');
          return(
            <div key={ index } className='menue-product'>
              <img src={ product.image } />
              <div style={{ padding: '10px' }}>
                <div className='menue-product-title'>{ product.title }</div>
                <p>{ product.description }</p>
              </div>
              <div className='menue-product-price-tag'>
                <div>Price</div>
                <div className='menue-product-price-tag-price'>
                  { numeral(product.price).format("$ (0,0.00)") }
                </div>
              </div>
            </div>
          )
        } else {
          console.log('else');
          let searchRegExp = new RegExp(this.state.search, 'ig')
          if (searchRegExp.test(product.title)) {
            return(
              <div key={ index } className='menue-product'>
                <img src={ product.image } />
                <div style={{ padding: '10px' }}>
                  <div className='menue-product-title'>{ product.title }</div>
                  <p>{ product.description }</p>
                </div>
                <div className='menue-product-price-tag'>
                  <div>Price</div>
                  <div className='menue-product-price-tag-price'>
                    { numeral(product.price).format("$ (0,0.00)") }
                  </div>
                </div>
              </div>
            )
          }
        }
      })


    return (
      <div className="menue">
        <search className='menue-search'>
          <input className='menue-search-bar' value={ this.state.search } onChange={ (e)=>{ this.setState({ search: e.target.value }) }} placeholder='Search'/>
          <button onClick={ () => { this._searchForProduct() } } ><Search width='20px' color='white' /></button>
        </search>
        <div className="menue-products">
          { products }
        </div>
      </div>
    );
  }
}
