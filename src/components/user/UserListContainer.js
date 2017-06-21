import React, { Component } from 'react'
import PropTypes from 'prop-types'
import UserList from './UserList'

class UserListContainer extends Component {
  constructor() {
    super()
    //add some code here
    this.state = {
      users: []
    }    
  }

  componentDidMount() {
    fetch('/data/users.js', {
        method: 'get'
    }).then((response) => {
        return response.json()
    }).then((data) => {
        this.setState({ users: data })
    }).catch((err)=> {
        console.log(err)
    })
  }

  render() {
    return (
      //you need to render the UserList component and pass the users
      <UserList users={this.state.users} />
    )
  }
}

export default UserListContainer
