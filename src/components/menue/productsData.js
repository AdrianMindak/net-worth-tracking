import Schrippen from '../../images/nikolassee/03.jpg'
import Croissant from '../../images/nikolassee/04.jpg'
import WWW from '../../images/nikolassee/05.jpg'
import Schockocroissnant from '../../images/nikolassee/08.jpg'

export default [
  {
    title: 'Lenôtre Croissant',
    provider: 'Jean de Pierre',
    description: 'Blaetterteig gerollt mit butter und einem hauch von liebe.',
    tags: [],
    ingriedience: [],
    price: 1.2,
    image: { image: Croissant, alt: ''},
    options: [
      {
        title: 'default',
        price: 1.2,
        image: null
      }
    ],
  },
  {
    title: 'Westerwälder Weck',
    provider: 'Edna',
    description: '',
    tags: [],
    ingriedience: [],
    price: .7,
    image: { image: WWW, alt: ''},
    options: [
      {
        title: 'default',
        price: .7,
        image: null
      }
    ],
  },
  {
    title: 'Schrippen',
    provider: 'Feddersen',
    description: '',
    tags: [],
    ingriedience: [],
    price: .3,
    image: { image: Schrippen, alt: ''},
    options: [
      {
        title: 'default',
        price: .7,
        image: null
      }
    ],
  },
  {
    title: 'Schockoladencroissant',
    provider: 'Edna',
    description: '',
    tags: [],
    ingriedience: [],
    price: 1.4,
    image: { image: Schockocroissnant, alt: ''},
    options: [
      {
        title: 'default',
        price: 1.4,
        image: null
      }
    ],
  }
]
