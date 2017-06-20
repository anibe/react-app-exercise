import React, {Component} from 'react'
import WorkshopList from './WorkshopList'
import PropTypes from 'prop-types'

class WorkshopListContainer extends Component {
  constructor() {
    super()
    this.state = {
      workshops: []
    }
  }

  componentDidMount() {
    fetch('/data/workshops.js', {
      method: 'get'
    }).then((response) => {
      return response.json()
    }).then((data) => {
      this.setState({ workshops: data })
    }).catch((err)=> {
      console.log(err)
    })
  }

  render() {
    return (
      <WorkshopList
        workshops={this.state.workshops}
      />
    )
  }
}

export default WorkshopListContainer

WorkshopListContainer.contextTypes = {
  router: PropTypes.object.isRequired
}
