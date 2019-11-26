import React from 'react'
import PageEmployeesList from './PageEmployeesList'
import PageEmployee from './PageEmployee'
import { 
  BrowserRouter as Router,
  Switch,
  Route,
  Link ,
  withRouter
} from "react-router-dom"

const App = () => (
        <Router>
          <Switch>
            <Route exact path="/">
              <PageEmployeesList />
            </Route>
            <Route path="/new">
              <PageEmployee />
            </Route>
          </Switch>
        </Router>
)

export default App