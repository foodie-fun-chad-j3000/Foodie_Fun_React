import React, { Component } from 'react';
import { connect } from 'react-redux';

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
    this.props.login(this.state.credentials)
      .then(() => this.props.history.push('./my-places'))
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
        <div className='login'>
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
        </div>

      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    error: state.error
  }
}

export default connect(mapStateToProps, { login })(Login);