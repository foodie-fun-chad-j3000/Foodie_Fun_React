import React, { Component } from 'react'
import { connect } from 'react-redux';

import register from '../actions';

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
    this.props.register(this.state)
    this.setState({
      username: '',
      password: ''
    })
  }

  render() {
    return (
      <div>

        <form onSubmit={this.register}>
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
          <button>Click to sign up</button>
        </form>

      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    error: state.error
  }
}

export default connect(mapStateToProps, { register: register })(Register);



