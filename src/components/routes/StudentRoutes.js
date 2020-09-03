import React from 'react'
import { Switch, Route } from 'react-router-dom'
import StudentDashboardCourses from '../../pages/student/StudentDashboardCourses'
import StudentDashboardQuiz from '../../pages/student/StudentDashboardQuiz'

const STUDENT_DASHBOARD_COURSES_URL = '/students/dashboard/courses'
const STUDENT_DASHBOARD_QUIZ_URL = '/students/dashboard/quiz'

export const studentsUrl = {
  STUDENT_DASHBOARD_COURSES_URL,
  STUDENT_DASHBOARD_QUIZ_URL,
}

export const StudentRoutes = () => {
  return (
    <Switch>
      <Route exact path={ STUDENT_DASHBOARD_COURSES_URL } component={ StudentDashboardCourses } />
      <Route exact path={ STUDENT_DASHBOARD_QUIZ_URL } component={ StudentDashboardQuiz } />
    </Switch>
  )
}