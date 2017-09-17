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
          <p>
            Welcome to Café VonLuck. <br/>
            We do our best to be a mentionable part
            of the Nikolassee and Grunewald community,
            to be a good place for work for our employees
            and offer great food to our beloved customers.
          </p>
          <a href='mailto:info@von-luck.de?Subject=Customer%20Feedback' target='_top'>
            <div className='home-customer-feedback'>
              Give us your feedback via e-mail.
            </div>
          </a>
        </div>
      </div>
    );
  }
}
