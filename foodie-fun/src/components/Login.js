import React, { Component } from 'react'

class Login extends Component {
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
        <form onSubmit={this.login}>
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
    )
  }
}

export default Login;