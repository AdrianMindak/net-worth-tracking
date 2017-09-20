import React, { Component } from 'react'
import '../../var.css'
import './style.css'
import Lightbox from 'react-images'
import nikolassee from '../../images/shops/01.jpg'
import grunewald from '../../images/shops/02.jpg'
import { Phone, Mail, Map, SocialMedia, Emoji } from '../icons'

// import { CroissantAndCoffee } from '../icons'


export default class Shops extends Component {
  constructor(props) {
    super(props)
    this.state = {
      shops: [
        {
          established: '2002',
          title: 'Café VonLuck Nikolassee',
          district: 'Nikolassee',
          description: '',
          phone: '+49 30 80403812',
          email: 'info@von-luck.de',
          adress: 'Von-Luck-Straße 27, 14129 Berlin Nikolasee',
          googleLink: `https://www.google.de/maps/dir/Current+location/Caf%C3%A9+VonLuck,+Von-Luck-Stra%C3%9Fe+27,+14129+Berlin,+Germany`,
          image: {
            image: nikolassee,
            alt: 'Schlachtensee in Berlin Nikolassee',
            style: {}
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
          googleLink: `https://www.google.com/maps/dir/Current+location/Caf%C3%A9+VonLuck,+Auerbachstra%C3%9Fe+10,+14193+Berlin,+Germany`,
          image: {
            image: grunewald,
            alt: 'Grunewald in Berlin',
            style: {}
          },
          social: {
            facebook:'https://www.facebook.com/CafevonLuck.Grunewald/',
            google: '',
            yelp: '',
            tripadvisor: ''
          }
        }
      ]
    }
  }

  componentDidMount() {
    this._defineImageAspect()
    window.addEventListener("resize", this._defineImageAspect());
  }

  _defineImageAspect = () => {
    const { shops } = this.state

    shops.forEach( shop => {
      const img = new Image();
      img.src = shop.image.image
      const imgContainer = document.getElementById(`img-${shop.district.toLowerCase()}`)
      const imgContainerAspect = imgContainer.clientWidth / imgContainer.clientHeight
      const imgAspect = img.width / img.height
      const result = imgAspect >= imgContainerAspect ? 'height' : 'width'

      shop.image.style[result] = '100%'
    })

    this.setState({ shops })
  }

  render() {
    return (
      <div className="shops">
        {
          this.state.shops.map( (shop,index) => {
            return(
              <div key={ index } className='shops-shop'>
                <div id={`img-${shop.district.toLowerCase()}`} className='shops-shop-image'>
                  <a href={shop.googleLink} >
                    <Map width='50px' color='var(--red)'/>
                  </a>
                  <img
                    className={`shops-shop-image-${shop.district.toLowerCase()}`}
                    src={ shop.image.image } alt={ shop.image.alt}
                    style={ shop.image.style }
                  />
                </div>
                <div className='shops-shop-established'>
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
                    <span className='shops-shop-title-big'>Café VonLuck</span><br/>
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
                          default: return console.log('iconError in Shops')
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
