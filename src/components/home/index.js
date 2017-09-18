import React, { Component } from 'react';
import '../../var.css'
import './style.css';

export default class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      foodData: [
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
    }
  }
  render() {
    return (
      <div className="home">
        <div className='home-wellcome'>
          <div id='pagetitle'>
            <span id='pagetitle-cafe'>Café</span>
            <span id='pagetitle-vonluck'>VonLuck</span>
          </div>
          <h1 className='pagetitle-invisible'>Café VonLuck</h1>
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
