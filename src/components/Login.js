import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {FormGroup, Button} from 'react-bootstrap'
import { withRouter } from 'react-router-dom'

class Login extends Component {

  constructor() {
    super()
    this.state = {
      email: '',
      password: ''
    }
    this.validateUser = this.validateUser.bind(this)
  }

  validateUser(e) {
    e.preventDefault()
    let user = this.state.email
    let password = this.state.password
    if(user === 'reactfanboy' && password === '1234'){
      this.props.history.push(`/`)
    } else {
      console.log('you\'ve got issues mate')
    }
  }

  render () {
    return (
      <form className="form-signin" onSubmit={this.validateUser}>
        <FormGroup>
          <h2 className="form-signin-heading">Please sign in</h2>
        </FormGroup>

        <FormGroup>
          <input onChange={(e)=>{ this.setState({ email: e.target.value }) }} className="form-control" id="email" type="text" value={this.state.email} placeholder="Enter email" />
          <input onChange={(e)=>{ this.setState({ password: e.target.value }) }} className="form-control" id="password" type="password" value={this.state.password} placeholder="Password" />
        </FormGroup>

        <Button bsSize="large" bsStyle="primary" block type="submit">Sign in</Button>
      </form>
    )
  }
}

export default withRouter(Login)

Login.contextTypes = {
  router: PropTypes.object.isRequired
}