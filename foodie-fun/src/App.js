import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Header from './components/Header';
import PrivateRoute from './components/PrivateRoute';
import MyMeals from './components/MyMeals';
import Register from './components/Register';
import Login from './components/Login';
import AddMeal from './components/AddMeal';
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
        <Route path='/add-meal' component={AddMeal} />
      </div>
    );
  }
}

export default App;
