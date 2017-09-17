import React, { Component } from 'react';
import '../../var.css'
import './style.css'
import NewsBox from './news'

const newsData = [
  {
    title: 'hallo... i bin ein NEWSFeed',
    text: 'alkfjajhfvjkahrfvjkheravfjkqhwafr'
  },
  {
    title: 'i bin au ein NEWSFeed',
    text: 'afygaksvajksfnvasvlasflnvkalsfv'
  },
  {
    title: 'lalala i au',
    text: 'lfuhisfbehmaveqgwcewqoibdks'
  },
  {
    title: 'Das Fetteste Croisant Berlins',
    text: 'Schonmal so etwas gesehen ?'
  }
]

export default class News extends Component {
  render() {
    return (
      <div className="news">
        <div className="news-header">News</div>
        {
          newsData.map( (feed, index) => {
            return(
              <NewsBox key={ index } title={ feed.title } text={ feed.text } />
            )
          })
        }
      </div>
    );
  }
}
