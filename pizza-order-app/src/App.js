import React from 'react';
import './App.css';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import Box from '@material-ui/core/Box';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

//component imports
import Home from './components/home'
import User from './components/userInfo'
import Order from './components/pizzaOrder'
import Review from './components/orderReview'

function App() {
  //link definitions
  const Links = [
    {
      'name': 'Home',
      'to': '/'
    },
    {
      'name': 'User',
      'to': '/user'
    },
    {
      'name': 'Order',
      'to': '/order'
    },
    {
      'name': 'Review',
      'to': '/review'
    }
  ]

  return (
    <Box display="flex" justifyContent="center" m={1} p={1}>
      <Router>
        <div className="App">
          <AppBar>
            <Tabs aria-label="simple tabs example" centered>
              {Links.map((link) => {
                return (
                  <Tab key={link.name} label={link.name} component={Link} to={link.to}></Tab>
                )
              })}
            </Tabs>
          </AppBar>

          {/* using react-router to switch between views */}
          <Switch>
            <Route path="/user">
              <User></User>
            </Route>
            <Route path="/order">
              <Order></Order>
            </Route>
            <Route path="/review">
              <Review></Review>
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </Box>
  );
}

export default App;
