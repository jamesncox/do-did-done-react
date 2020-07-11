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

import Home from './components/Layout/Home'
import SignIn from './components/User/Signin'
import SignUp from './components/User/Signup'
import Profile from './components/Layout/Profile'
import SelectedList from './components/List/SelectedList'

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
            <Route exact path="/Profile">
              <Profile />
            </Route>
            <Route exact path={`/${this.props.selectedList}`}>
              <SelectedList />
            </Route>
          </Switch>
        </div>
      </Router>
    )
  }
}

const mapStateToProps = state => ({
  selectedList: state.lists.selectedListId
})

export default connect(mapStateToProps, { getToken, setCurrentUser })(App);