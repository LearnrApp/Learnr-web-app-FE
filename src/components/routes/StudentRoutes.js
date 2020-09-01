import React from 'react'
import { Switch, Route } from 'react-router-dom'
import StudentDashboard from '../../pages/student/StudentDashboard'

const STUDENT_DASHBOARD_COURSES_URL = '/students/dashboard/courses'

export const studentsUrl = {
  STUDENT_DASHBOARD_COURSES_URL,
}

export const StudentRoutes = () => {
  return (
    <Switch>
      <Route exact path={ STUDENT_DASHBOARD_COURSES_URL } component={ StudentDashboard } />
    </Switch>
  )
}