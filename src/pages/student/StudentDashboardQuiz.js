import React, { useEffect } from 'react'
import NavBar from '../../components/navbar/NavBar'
import Quiz from '../../components/dashboard/student/Quiz/QuizRecords'
import StudentSidebar from '../../components/dashboard/student/navigation/StudentSidebar'
import StudentBottomBar from '../../components/dashboard/student/navigation/StudentBottomBar'
import getCurrentUser from '../../components/Utils/AuthUtils'
import '../../styles/UserDashboard.css'
import '../../styles/Style.css'


const StudentDashboardQuiz = () => {
  useEffect(() => {
    const coursesBackground = document.getElementById('courses-back')
    const quizBackground = document.getElementById('quiz-back')
    const achieveBackground = document.getElementById('achieve-back')
    const helpBackground = document.getElementById('help-back')
    const profileBackground = document.getElementById('profile-back')

    coursesBackground.classList.remove('sidebar--item--active')
    quizBackground.classList.add('sidebar--item--active')
    achieveBackground.classList.remove('sidebar--item--active')
    helpBackground.classList.remove('sidebar--item--active')
    profileBackground.classList.remove('sidebar--item--active')
  }, [])

  getCurrentUser()
  if(!getCurrentUser()) {
    return window.open('/students/signin', '_self')
  }

  return (
    <React.Fragment>
      <NavBar />
      <div className="container-fluid px-0 dash-wrap">
        <StudentSidebar />
        <Quiz />
        <StudentBottomBar />
      </div>
    </React.Fragment>
  )
}

export default StudentDashboardQuiz