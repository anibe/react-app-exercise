import React from 'react'
import { HashRouter as Router } from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import { Route, Switch } from 'react-router-dom'
import Login from './Login'

import App from './App'
import theme from '../config/Theme'

const muiTheme = getMuiTheme(theme)

const Root = () => (
  <Router>
    <MuiThemeProvider muiTheme={muiTheme}>
      <Switch>
        <Route path="/login" component={Login} />
        <Route component={App} />
      </Switch>      
    </MuiThemeProvider>
  </Router>
)

export default Root
