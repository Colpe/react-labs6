import React from 'react'
import PageEmployeesList from './PageEmployeesList'
import PageEmployee from './PageEmployee'
import { 
  BrowserRouter as Router,
  Switch,
  Route,
  Link 
} from "react-router-dom"

const App = () => (
  <div>
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
  </div>
)

export default App