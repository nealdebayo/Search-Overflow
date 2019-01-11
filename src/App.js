import React, { Component } from 'react';
import {connect} from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Search from './pages/Search/Search'
import Answers from './pages/Answers/Answers'
import Error from './pages/Error/Error'
import 'font-awesome/scss/font-awesome.scss'
import './App.scss'

class App extends Component {
  render() {
    if (this.props.error) {
      return <Error />
    }
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={Search} />
            <Route path="/answer/:question_id" component={Answers} />
          </Switch>
        </Router>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    error : state.Error.value
  }
}

export default connect(mapStateToProps)(App);
