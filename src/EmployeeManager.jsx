import React from 'react'
import PageEmployeesList from './PageEmployeesList'

const modes = {
  list: 'list',
  create: 'create',
}

class EmployeeManager extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: modes.list
    }

  }

  changeMode = (m) => {
    this.setState({
      mode: m
    })
  }


  render() {
    console.log(this.state.mode)
    return this.state.mode == modes.list ? (
      <div>
        <PageEmployeesList />
        <br />
        <button onClick={() => { this.changeMode(modes.create); }} >Add employee</button>
      </div>
    ) :
      (
        <div>
          <PageEmployee
          />
        </div>
      );
  }
}

export default EmployeeManager