import React, { Component } from 'react'
import '../../var.css'
import './style.css'
import nikolassee from '../../images/schlachtensee.jpg'
import grunewald from '../../images/grunewald.jpg'
import { Phone, Mail, Map, SocialMedia, CroissantAndCoffee, Emoji } from '../icons'

const shopsData = [
  {
    established: '2002',
    title: 'Café VonLuck Nikolassee',
    district: 'Nikolassee',
    description: '',
    phone: '+49 30 80403812',
    email: 'info@von-luck.de',
    adress: 'Von-Luck-Straße 27, 14129 Berlin Nikolasee',
    googleLink: `https://www.google.de/maps/dir/current+location/cafe+von+luck+berlin/@52.4307748,13.1715807,13z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x47a8590b4320b0f5:0xd5b35bdf7aa528b6!2m2!1d13.2066!2d52.43078`,
    image: {
      image: nikolassee,
      alt: 'Schlachtensee in Berlin Nikolassee'
    },
    social: {
      facebook:'https://www.facebook.com/CafevonLuck/',
      google: '',
      yelp: '',
      tripadvisor: ''
    }
  },
  {
    established: '2010',
    title: 'Café VonLuck Grunewald',
    district: 'Grunewald',
    description: '',
    phone: '+49 30 60946790',
    email: 'info@von-luck.de',
    adress: 'Auerbach Straße 10, 14193 Berlin Grunewald',
    googleLink: `https://www.google.com/maps/dir/current+location/Caf%C3%A9+VonLuck,+Auerbachstra%C3%9Fe,+Berlin,+Germany/@52.5816575,13.1793634,11z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x47a8574c44670e57:0x18cf837468a54854!2m2!1d13.2620688!2d52.4875438`,
    image: {
      image: grunewald,
      alt: 'Grunewald in Berlin'
    },
    social: {
      facebook:'https://www.facebook.com/CafevonLuck.Grunewald/',
      google: '',
      yelp: '',
      tripadvisor: ''
    }
  }
]

export default class Shops extends Component {
  render() {
    return (
      <div className="shops">
        {
          shopsData.map( (shop,index) => {
            return(
              <div key={ index } className='shops-shop'>
                <div className='shops-shop-image'>
                  <a href={shop.googleLink} >
                    <Map width='50px' color='var(--red)'/>
                  </a>
                  <img src={ shop.image.image } alt={ shop.image.alt}/>
                </div>
                <div className='shops-shop-image-established'>
                  <Emoji emoji="star" width="10px" color="white"/>
                  <Emoji emoji="star" width="10px" color="white"/>
                  <Emoji emoji="star" width="10px" color="white"/>
                  <h4>{ `since ${shop.established}` }</h4>
                  <Emoji emoji="star" width="10px" color="white"/>
                  <Emoji emoji="star" width="10px" color="white"/>
                  <Emoji emoji="star" width="10px" color="white"/>
                </div>
                <div className='shops-shop-info'>

                  <h1 className='shops-shop-title'>
                    <span className='shops-shop-title-big'>Café VonLuck </span>
                    <span>{ shop.district }</span>
                  </h1>
                  <p className='shops-shop-description'>{ shop.description }</p>

                  <div className='shops-shop-contact-info'>
                    {
                      ['phone', 'mail', 'adress'].map( (contactInfo,index) => {
                        let iconWidth='30px'
                        let iconColor='var(--dark-grey)'
                        let icon,link,target
                        let value = shop[contactInfo]
                        switch (contactInfo) {
                          case 'phone':
                            icon = <Phone width={ iconWidth } color={ iconColor } />
                            link = `tel:${shop.phone}`
                            break;
                          case 'mail':
                            icon = <Mail width={ iconWidth } color={ iconColor } />
                            link = `mailto:${shop.email}?Subject=I%20have%20a%20question`
                            target = true
                            value = shop.email
                            break;
                          case 'adress':
                            iconWidth = '40px'
                            icon = <Map width={ iconWidth } color={ iconColor } />
                            link = shop.googleLink

                            break;
                        }
                        return (
                          <div key={ index }>
                            <div className='shops-shop-contact-info-icon'>
                              { icon }
                            </div>
                            <a href={ link } className='shops-shop-contact-info-value' target={ target ? '_top' : null }>
                              { value }
                            </a>
                          </div>
                        )
                      })
                    }

                  </div>
                  <div className='shops-shop-extra'>
                    <a href={ shop.social.facebook } className='shops-shop-extra-social'>
                      <SocialMedia width='45px' color='white'/>
                    </a>
                    {
                      /*
                        <a className='shops-shop-extra-menue-icon'>
                          <CroissantAndCoffee width='40px' color='white'/>
                        </a>
                        <a className='shops-shop-extra-menue'>
                          our menue
                        </a>
                      */
                    }
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    );
  }
}
