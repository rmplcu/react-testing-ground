//import logo from './logo.svg';
import './App.css'
import './Element.css'
import './Dropdown.css'
import './Card.css'
import './Nasa.css'
import React from 'react'
import Todos from './components/Todos'
import Shop from './components/Shop'
import Navbar from './components/Navbar'
import Card from './components/Card'
import Nasa from './components/Nasa'
import LovePercentage from './components/LovePercentage'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/nasa">
          <Nasa />
        </Route>
        <Route path="/todos">
          <Todos />
        </Route>
        <Route path="/cards">
          <Card />
        </Route>
        <Route path="/love">
          <LovePercentage />
        </Route>
        <Route path="/shop">
          <Shop />
        </Route>
        <Route path="/">
          <div className="homepage" style={{ marginTop: '0px' }}>
            <h3 className="h3">Hi</h3>
          </div>
        </Route>
      </Switch>
    </Router>
  )
}

export default App
