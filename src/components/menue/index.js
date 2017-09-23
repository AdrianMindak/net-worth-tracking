import React, { Component } from 'react'
import '../../var.css'
import './style.css'
import { Basket } from '../icons'
import productsData from './productsData.js'
import ProductList from './productList.js'
import Search from './search.js'

export default class Menue extends Component {
  constructor(props) {
    super(props)
    this.state = {
      products: productsData
    }
  }

  render() {
    return (
      <div className="menue">
        <div><Basket width='30px' color='var(--dark-grey)'/></div>
        <Search />
        <ProductList />
      </div>
    )
  }
}
