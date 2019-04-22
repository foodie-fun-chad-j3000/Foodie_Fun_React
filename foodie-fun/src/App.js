import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Header from './components/Header';
import PrivateRoute from './components/PrivateRoute';
import MyMeals from './components/MyMeals';
import Register from './components/Register';
import Login from './components/Login';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <Header />
        </div>
        <h1>Foodie Fun</h1>

        <PrivateRoute path='/protected' component={MyMeals} />
        <Route path='/register' component={Register} />
        <Route path='/login' component={Login} />
      </div>
    );
  }
}

export default App;
