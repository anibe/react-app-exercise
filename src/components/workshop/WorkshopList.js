import React, {Component} from 'react'
import { ListItem } from 'material-ui/List'

class WorkshopList extends Component {

  render() {
    const {workshops} = this.props
    return (
      <div>
          { workshops.map(workshop => (
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
  }

}

export default WorkshopList
