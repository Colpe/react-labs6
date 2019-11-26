import React from 'react'
import ListPeople from './ListPeople'
import {withRouter} from 'react-router-dom'


const PageEmployeesList = () => (
    <ListPeople />
)

export default withRouter(PageEmployeesList)