import React, { Component } from 'react';
import '../../var.css'
import './style.css';
import { EspressoMaschine } from '../icons'

const foodData = [
  {
    image: '',
    title: 'Croissant',
    description: '',
    price: ''
  },
  {
    image: '',
    title: 'Schrippe',
    description: '',
    price: ''
  }
]

export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className='home-wellcome'>
          <h1 id='pagetitle'>
            <span id='pagetitle-cafe'>Café</span><br/>
            <span id='pagetitle-vonluck'>VonLuck</span>
          </h1>
          <p>Welcome to Café VonLuck. <br/> We do your best to be a mentionable part of the Nikolassee and Grunewald community. To be a good place for work and with good food for our employees and customers.</p>
          <a href='mailto:info@von-luck.de?Subject=Customer%20Feedback' className='home-customer-feedback' target='_top'>Give us your feedback per email.</a>
        </div>

        {
          /*
          <div className='home-news-feed'>
            <h2>What do our costumers love the most?</h2>
            <div className="home-news-feed-product-list">
              {
                foodData.map( (product,index) => {
                  return(
                    <div className='home-news-feed-product-list-product'>
                      <h3>{ product.title }</h3>
                      <p>{ product.description }</p>
                    </div>
                  )
                })
              }
            </div>
          </div>
          */
        }
      </div>
    );
  }
}
