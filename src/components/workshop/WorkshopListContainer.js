import React, { Component } from 'react'
import PropTypes from 'prop-types'
import WorkshopList from './WorkshopList'

class WorkshopListContainer extends Component {
  constructor() {
    super()
    //add some code here
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
    console.log(this.state.workshops)
    return (
      <WorkshopList workshops={this.state.workshops} />
    )
  }
}

export default WorkshopListContainer
