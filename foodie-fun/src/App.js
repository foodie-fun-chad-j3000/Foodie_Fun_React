import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import Header from './components/Header';
import PrivateRoute from './components/PrivateRoute';
import MyMeals from './components/MyMeals';
import Register from './components/Register';
import Login from './components/Login';
import AddMeal from './components/AddMeal';
import Fuse from 'fuse.js';
import './App.css';

class App extends Component {
  state = {
    filteredMeals: []
  }

  searchHandler = e => {
    let options = {
      threshold: 0.8,
      location: 0,
      distance: 10,
      keys: [
        'restaurant_name',
        'restaurant_type',
        'item_name',
        'item_comment',
        'date_visited'
      ]
    }
    let fuse = new Fuse(this.props.meals, options);
    this.setState({ filteredMeals: fuse.search(e.target.value) })
  }

  render() {
    return (
      <div className="App">
        <div>
          <Header searchMeals={this.searchHandler} />
        </div>

        <PrivateRoute path='/protected' component={MyMeals} />

        <Route path='/register' component={Register} />
        <Route path='/login' component={Login} />
        <Route path='/add-meal' component={AddMeal} />
      </div>
    );
  }
}

const mapStateToProps = ({ meals }) => ({
  meals
})

export default connect(mapStateToProps, {})(App);
