import React from 'react'
import numeral from 'numeral'
import { Box } from '../icons'

const Product = (props) => {
  const image = () => {
    if (props.image === 'no image') {
      return (
        <div className='menue-product-image-placeholder'>
          <Box width='50px' color='var(--dark-grey)' />
        </div>
      )
    } else {
      return (
        <img
          src={ props.image }
          alt={ props.title }
        />
      )
    }
  }

  return (
    <div className='menue-product'>
      { image() }
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

export default Product
