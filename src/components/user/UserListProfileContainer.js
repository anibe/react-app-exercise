import React, { Component } from 'react'
import UserProfile from './UserProfile'

class UserListProfileContainer extends Component {
  constructor() {
    super()
    this.state = { user: null }  
  }

  componentDidMount() {
    this.fetchUser(this.props.match.params.username)
  }

  fetchUser(username) {
    fetch(`/data/users/${username}.json`, {
        method: 'get'
    }).then((response) => {
        return response.json()
    }).then((data) => {
        this.setState({user : data})
    }).catch((err)=> {
        console.log(err)
    })
  }

  render() {
    return (
      <UserProfile 
        user={this.state.user}
        username={this.props.match.params.username}
      />
    )
  }
}

export default UserListProfileContainer
