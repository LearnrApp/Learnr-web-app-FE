import React from 'react'
import { Switch, Route } from 'react-router-dom'
import StudentDashboardCourses from '../../pages/student/StudentDashboardCourses'
import StudentDashboardQuiz from '../../pages/student/StudentDashboardQuiz'
import StudentDashboardAchieve from '../../pages/student/StudentDashboardAchieve'
import StudentDashboardHelp from '../../pages/student/StudentDashboardHelp'

const STUDENT_DASHBOARD_COURSES_URL = '/students/dashboard/courses'
const STUDENT_DASHBOARD_QUIZ_URL = '/students/dashboard/quiz'
const STUDENT_DASHBOARD_ACHIEVEMENTS_URL = '/students/dashboard/achievements'
const STUDENT_DASHBOARD_HELP_URL = '/students/dashboard/help'

export const studentsUrl = {
  STUDENT_DASHBOARD_COURSES_URL,
  STUDENT_DASHBOARD_QUIZ_URL,
  STUDENT_DASHBOARD_ACHIEVEMENTS_URL,
  STUDENT_DASHBOARD_HELP_URL,
}

export const StudentRoutes = () => {
  return (
    <Switch>
      <Route exact path={ STUDENT_DASHBOARD_COURSES_URL } component={ StudentDashboardCourses } />
      <Route exact path={ STUDENT_DASHBOARD_QUIZ_URL } component={ StudentDashboardQuiz } />
      <Route exact path={ STUDENT_DASHBOARD_ACHIEVEMENTS_URL } component={ StudentDashboardAchieve } />
      <Route exact path={ STUDENT_DASHBOARD_HELP_URL } component={ StudentDashboardHelp } />
    </Switch>
  )
}