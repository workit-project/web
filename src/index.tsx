import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'mobx-react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './Home'

const stores = {}
const appDiv = document.getElementById('app')

ReactDOM.render(
  <Provider {...stores}>
    <Router>
      <Route path="/" component={Home} exact />
    </Router>
  </Provider>
, appDiv)
