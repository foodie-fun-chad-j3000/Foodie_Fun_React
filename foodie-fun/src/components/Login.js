import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

import { login } from '../actions';

class Login extends Component {
  state = {
    credentials: {
      username: '',
      password: ''
    }
  }

  login = e => {
    e.preventDefault();
    if (!this.state.credentials.username || !this.state.credentials.password) {
      alert('Please enter a valid username and password.')
      return null;
    } else {
      this.props.login(this.state.credentials)
        .then(() => this.props.history.push('./protected'))
      this.setState({
        username: '',
        password: ''
      })
    }
  }

  signUpHandler = () => {
    this.props.history.push('/register')
  }

  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    })
  }

  render() {
    return (
      <div className='wrapper'>
        <div className='form-wrap'>
          <h2>Login Please</h2>
          <form className='input-form' onSubmit={this.login}>
            <input
              type='text'
              name='username'
              value={this.state.credentials.username}
              placeholder='Username'
              onChange={this.handleChange}
            />
            <input
              type='password'
              name='password'
              value={this.state.credentials.password}
              placeholder='Password'
              onChange={this.handleChange}
            />
            <button>Log in</button>
          </form>
          <div className='register'>
            <h3>First time here?</h3>
            <h4>Create your account</h4>
            <button onClick={this.signUpHandler}>Sign up</button>
          </div>

        </div>

      </div>
    )
  }
}

const mapStateToProps = ({ error }) => ({
  error
})

export default connect(mapStateToProps, { login })(withRouter(Login));
