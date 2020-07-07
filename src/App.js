import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import './stylesheets/App.css';
import './stylesheets/responsive.css'
import './stylesheets/fonts.css'
import { connect } from 'react-redux';
import { getToken } from './actions/sessions'
import { setCurrentUser } from './actions/users'

// import Header from './components/Layout/Header'
import Home from './components/Layout/Home'
import SignIn from './components/User/Signin'
import SignUp from './components/User/Signup'
import BottomNavigation from './components/Layout/BottomNavigation'
import Profile from './components/Layout/Profile'
// import LogOut from './components/User/LogOut'
// import MyStats from './components/Layout/MyStats'

class App extends Component {

  componentDidMount() {
    this.props.getToken()
    this.props.setCurrentUser()
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/SignUp">
              <SignUp />
            </Route>
            <Route exact path="/SignIn">
              <SignIn />
            </Route>
            <Route exact path="/LogOut">
              {/* <LogOut /> */}
            </Route>
            <Route exact path="/Profile">
              {/* <Profile /> */}
            </Route>
          </Switch>
          <BottomNavigation />
        </div>
      </Router>
    )
  }
}

export default connect(null, { getToken, setCurrentUser })(App);