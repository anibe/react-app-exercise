import React, {Component} from 'react'
import { ListItem } from 'material-ui/List'

const WorkshopList = props => (
  <div>
      { props.workshops.map(workshop => (
          <div>
            <h2><a href={workshop.url}>{workshop.title}</a></h2>
            <strong>{workshop.price}</strong>
            <div>

            </div>
          </div>
        ))
      }
  </div>
)

export default WorkshopList
