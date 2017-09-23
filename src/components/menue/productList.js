import React, { Component } from 'react'
import { graphql, gql } from 'react-apollo'
import Product from './product'

class ProductList extends Component {

  render() {
    if (this.props.AllProductsQuery && this.props.AllProductsQuery.loading) {
      return <div>Loading</div>
    }


    if (this.props.AllProductsQuery && this.props.AllProductsQuery.error) {
      return <div>Error</div>
    }


    const productsToRender = this.props.AllProductsQuery.allProducts

    return (
      <div className="menue-products">
        {
          productsToRender.map( (product,index) => {
            return (
              <Product
                key={ index }
                image={ product.image || 'no image' }
                title={ product.title }
                description={ product.description }
                price={ product.price }
                servingOptions={ product.servingOptions }
                ingredients={ product.ingredients }
                labels={ product.labels }
                preparation={ product.preparation }
              />
            )
          })
        }
      </div>
    )
  }
}

const ALL_PRODUCTS_QUERY = gql`
  query AllProductsQuery {
    allProducts {
      title
    }
  }
`

export default graphql(ALL_PRODUCTS_QUERY, { name: 'AllProductsQuery' })(ProductList)
