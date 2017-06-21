import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import {
  Card, CardActions, CardHeader, CardMedia, CardTitle
} from 'material-ui/Card'

import View from '../layout/View'

class UserProfile extends Component {

  render() {
    console.log(this.props)
    let user = this.props.user
    let {fullname, email} = user || {}
    let username = this.props.username

    if (user){
      fullname = `${this.props.user.name.title} ${this.props.user.name.first} ${this.props.user.name.last}`
      email = this.props.user.email
    }

    return (
      <View>
        <Card>
          <CardHeader
            title={fullname}
            subtitle={username}
            avatar={`/images/${username}_sm.jpg`}
          />
          <CardMedia
            overlay={<CardTitle title={email} />}
          >
            <img alt={username} src={`/images/${username}_lg.jpg`} />
          </CardMedia>
          <CardActions />
        </Card>
      </View>
    )
  }
}

UserProfile.propTypes = {
  match: PropTypes.object.isRequired
}

export default UserProfile
