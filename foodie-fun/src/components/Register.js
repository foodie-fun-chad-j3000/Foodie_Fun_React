import React, { Component } from 'react'

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

  render() {
    return (
      <div>

        <form onSubmit={this.register}>
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
          <button>Click to sign up</button>
        </form>

      </div>
    )
  }
}

export default Register;



