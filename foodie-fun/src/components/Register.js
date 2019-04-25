import React, { Component } from 'react'
import { connect } from 'react-redux';

import { register } from '../actions';

class Register extends Component {
  state = {
    credentials: {
      username: '',
      password: ''
    }
  }

  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    })
  }

  register = e => {
    e.preventDefault();
    if (!this.state.credentials.username || !this.state.credentials.password) {
      alert('Please enter both a username and a password.')
      return null;
    } else {
      this.props.register(this.state.credentials)
        .then(() => this.props.history.push('./login'))
      this.setState({
        username: '',
        password: ''
      })
    }
  }

  render() {
    return (
      <div className='wrapper'>
        <div className='form-wrap'>
          <h2>Sign up here</h2>
          <form className='input-form' onSubmit={this.register}>
            <input
              type='text'
              name='username'
              value={this.state.credentials.username}
              placeholder='Enter a username'
              onChange={this.handleChange}
            />
            <input
              type='password'
              name='password'
              value={this.state.credentials.password}
              placeholder='Enter a password'
              onChange={this.handleChange}
            />
            <button className='signup-btn'>Click to sign up</button>
          </form>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    error: state.error,
    addingUser: state.addingUser
  }
}

export default connect(mapStateToProps, { register: register })(Register);




