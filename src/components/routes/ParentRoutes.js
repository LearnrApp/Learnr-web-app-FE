import React from 'react'
import { Switch, Route } from 'react-router-dom'
import ParentDashboard from '../../pages/parent/ParentDashboard'

const PARENT_DASHBOARD_COURSES_URL = '/parents/dashboard/kids'

export const studentsUrl = {
  PARENT_DASHBOARD_COURSES_URL,
}

export const ParentRoutes = () => {
  return (
    <Switch>
      <Route exact path={ PARENT_DASHBOARD_COURSES_URL } component={ ParentDashboard } />
    </Switch>
  )
}