import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { ListItem } from 'material-ui/List'
import ActionGrade from 'material-ui/svg-icons/action/grade'
import Avatar from 'material-ui/Avatar'
import { pinkA200 } from 'material-ui/styles/colors'
import withWidth from 'material-ui/utils/withWidth'
import { Route } from 'react-router-dom'

import View from '../layout/View'
import UserListProfileContainer from './UserListProfileContainer'

class UserList extends Component {

  showUserProfile(user) {
    this.props.history.push(`/users/${user.username}`)
  }

  render() {
    const { match, width, users } = this.props
    
    return (
      <View style={{ display: 'flex' }}>
        <View>
          { users.map(user => (
            <ListItem
              onClick={this.showUserProfile.bind(this, user)} key={user.username} style={{color: "black"}}
              primaryText={ `${user.name.first} ${user.name.last}`}
              leftIcon={<ActionGrade color={pinkA200} />}
              rightAvatar={<Avatar src={`images/${user.username}_sm.jpg`} />}
            />
          ))}
        </View>
        <Route path={`${match.url}/:username`} component={UserListProfileContainer} />
      </View>
    )
  }
}

export default withRouter(withWidth()(UserList))

UserList.contextTypes = {
  router: PropTypes.object.isRequired
}
