import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import Header from './components/Header';
import PrivateRoute from './components/PrivateRoute';
import MyMeals from './components/MyMeals';
import Meal from './components/Meal';
import Register from './components/Register';
import Login from './components/Login';
import AddMeal from './components/AddMeal';
import UpdateMeal from './components/UpdateMeal';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <div>
          <Header />
        </div>

        <PrivateRoute path='/protected' component={MyMeals} />

        <Route path='/register' component={Register} />
        <Route path='/login' component={Login} />
        <Route path='/protected/:id' component={Meal} />
        <Route path='/add-meal' component={AddMeal} />
        <Route path='/update-meal' component={UpdateMeal} />
      </div>
    );
  }
}

const mapStateToProps = ({ meals }) => ({
  meals
})

export default connect(mapStateToProps, {})(App);
