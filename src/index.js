import React from 'react';
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import './var.css'
import './index.css';
import App from './views/app'
import registerServiceWorker from './registerServiceWorker';
import { ApolloProvider, createNetworkInterface, ApolloClient } from 'react-apollo'
const networkInterface = createNetworkInterface({
  uri: 'https://api.graph.cool/simple/v1/cj7yhbb8u1m4w0147cpjgail7',
})

const client = new ApolloClient({
  networkInterface
})

ReactDOM.render(
  <ApolloProvider client={ client }>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ApolloProvider>
  , document.getElementById('root'));

registerServiceWorker();
