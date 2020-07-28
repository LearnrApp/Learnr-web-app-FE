import React, { useState, useRef } from 'react'
import Helmet from 'react-helmet'
import SidebarItems from '../../components/Users/SidebarItems'
import NavBarUser from '../../components/navbar/NavBarUser'
import Courses from '../../components/dashboard/student/Courses'
import DashboardBottom from '../../components/dashboard/DashboardBottom'
import '../../styles/UserDashboard.css'
import '../../styles/Style.css'

const StudentDashboard = () => {
  const documentTitle = 'Learnr | Student Dashboard'
  const [dashboardMenu, updateMenu] = useState(<Courses />)
  const coursesLink = useRef()
  const quizLink = useRef()
  const achievementsLink = useRef()
  const helpLink = useRef()
  const profileLink = useRef()

  const updateBackgroundCourses = () => {
    if(coursesLink.current) {
      coursesLink.current.classList.add('sidebar--item--active')
      quizLink.current.classList.remove('sidebar--item--active')
      achievementsLink.current.classList.remove('sidebar--item--active')
      helpLink.current.classList.remove('sidebar--item--active')
      profileLink.current.classList.remove('sidebar--item--active')
    }
  }
  const updateBackgroundQuiz = () => {
    if(quizLink.current) {
      quizLink.current.classList.add('sidebar--item--active')
      coursesLink.current.classList.remove('sidebar--item--active')
      achievementsLink.current.classList.remove('sidebar--item--active')
      helpLink.current.classList.remove('sidebar--item--active')
      profileLink.current.classList.remove('sidebar--item--active')
    }
  }
  const updateBackgroundAchievements = () => {
    if(quizLink.current) {
      achievementsLink.current.classList.add('sidebar--item--active')
      quizLink.current.classList.remove('sidebar--item--active')
      coursesLink.current.classList.remove('sidebar--item--active')
      helpLink.current.classList.remove('sidebar--item--active')
      profileLink.current.classList.remove('sidebar--item--active')
    }
  }
  const updateBackgroundHelp = () => {
    if(quizLink.current) {
      helpLink.current.classList.add('sidebar--item--active')
      quizLink.current.classList.remove('sidebar--item--active')
      coursesLink.current.classList.remove('sidebar--item--active')
      achievementsLink.current.classList.remove('sidebar--item--active')
      profileLink.current.classList.remove('sidebar--item--active')
    }
  }
  const updateBackgroundProfile = () => {
    if(quizLink.current) {
      profileLink.current.classList.add('sidebar--item--active')
      quizLink.current.classList.remove('sidebar--item--active')
      coursesLink.current.classList.remove('sidebar--item--active')
      achievementsLink.current.classList.remove('sidebar--item--active')
      helpLink.current.classList.remove('sidebar--item--active')
    }
  }

  return (
    <React.Fragment>
      <Helmet>
        <title>{documentTitle}</title>
        <meta
          name="description"
          content="The dashboard panel for students to access all functions available to them on the application."
        />

      </Helmet>
      <NavBarUser />
      <div className="container-fluid px-0 dash-wrap">
        <div className="sidebar--wrap">
          <div className="sidebar--greet px-3 py-4">
            <span className="text-white">Hello, Tony Sandy</span>
          </div>
          <div className="pt-4">
            <div
              ref={coursesLink}
              onClick={() => {
              updateMenu(<Courses />)
              updateBackgroundCourses()
            }}
            className="sidebar--item--active sidebar--item">
              <SidebarItems sidebaricon={require('../../images/readme.svg')} sidebartext={'Courses'} />
            </div>
            <div
              ref={quizLink}
              onClick={() => {
              updateMenu()
              updateBackgroundQuiz()
            }} className="sidebar--item">
              <SidebarItems sidebaricon={require('../../images/loadbar-doc.svg')} sidebartext={'Quiz'} />
            </div>
            <div
              ref={achievementsLink}
              onClick={() => {
              updateMenu()
              updateBackgroundAchievements()
            }} className="sidebar--item">
              <SidebarItems sidebaricon={require('../../images/trophy.svg')} sidebartext={'Achievements'} />
            </div>
            <div
              ref={helpLink}
              onClick={() => {
              updateMenu()
              updateBackgroundHelp()
            }} className="sidebar--item">
              <SidebarItems sidebaricon={require('../../images/help-circle.svg')} sidebartext={'Help'} />
            </div>
            <div
              ref={profileLink}
              onClick={() => {
              updateMenu()
              updateBackgroundProfile()
            }} className="sidebar--item">
              <SidebarItems sidebaricon={require('../../images/mdi_account_circle.svg')} sidebartext={'Profile'} />
            </div>
            <div onClick={() => {
              updateMenu()
            }} className="sidebar--item">
              <SidebarItems sidebaricon={require('../../images/log-in.svg')} sidebartext={'Log Out'} />
            </div>
          </div>
        </div>
        <React.Fragment>{dashboardMenu}</React.Fragment>
      </div>
      <DashboardBottom />
    </React.Fragment>
  )
}

export default StudentDashboard