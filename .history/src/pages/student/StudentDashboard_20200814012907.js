import React, { useRef } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import SidebarItems from '../../components/Users/SidebarItems'
import NavBarUser from '../../components/navbar/NavBarUser'
import Courses from '../../components/dashboard/student/Courses/Courses'
import QuizRecords from '../../components/dashboard/student/Quiz/QuizRecords'
import Achievements from '../../components/dashboard/student/Achievements/Achievements'
import HelpSupport from '../../components/dashboard/student/Help/Help'
import Profile from '../../components/dashboard/student/Profile/Profile'
import '../../styles/UserDashboard.css'
import '../../styles/Style.css'


const StudentDashboard = () => {
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
    if(achievementsLink.current) {
      achievementsLink.current.classList.add('sidebar--item--active')
      quizLink.current.classList.remove('sidebar--item--active')
      coursesLink.current.classList.remove('sidebar--item--active')
      helpLink.current.classList.remove('sidebar--item--active')
      profileLink.current.classList.remove('sidebar--item--active')
    }
  }
  const updateBackgroundHelp = () => {
    if(helpLink.current) {
      helpLink.current.classList.add('sidebar--item--active')
      quizLink.current.classList.remove('sidebar--item--active')
      coursesLink.current.classList.remove('sidebar--item--active')
      achievementsLink.current.classList.remove('sidebar--item--active')
      profileLink.current.classList.remove('sidebar--item--active')
    }
  }
  const updateBackgroundProfile = () => {
    if(profileLink.current) {
      profileLink.current.classList.add('sidebar--item--active')
      quizLink.current.classList.remove('sidebar--item--active')
      coursesLink.current.classList.remove('sidebar--item--active')
      achievementsLink.current.classList.remove('sidebar--item--active')
      helpLink.current.classList.remove('sidebar--item--active')
    }
  }

  const dashboardRoutes = [
    {
      path: "/students/dashboard/courses",
      main: () => <React.Fragment>
        <Courses />
      </React.Fragment>
    },
    {
      path: "/students/dashboard/quiz",
      main: () => <React.Fragment>
        <QuizRecords />
      </React.Fragment>
    },
    {
      path: "/students/dashboard/achievements",
      main: () => <React.Fragment>
        <Achievements />
      </React.Fragment>
    },
    {
      path: "/students/dashboard/help",
      main: () => <React.Fragment>
        <HelpSupport />
      </React.Fragment>
    },
    {
      path: "/students/dashboard/profile",
      main: () => <React.Fragment>
        <Profile />
      </React.Fragment>
    },
  ];
  return (
    <React.Fragment>
      <NavBarUser />
      <Router>
        <div className="container-fluid px-0 dash-wrap">
          <div className="sidebar--wrap">
            <div className="sidebar--greet px-3 py-4">
              <span className="text-white">Hello, Tony Sandy</span>
            </div>
            <div className="pt-4">
              <div ref={coursesLink} onClick={() => updateBackgroundCourses()} className="sidebar--item--active sidebar--item">
                <Link to="/students/dashboard/courses">
                  <SidebarItems sidebaricon={require('../../images/readme.svg')} sidebartext={'Courses'} />
                </Link>
              </div>
              <div ref={quizLink} onClick={() => updateBackgroundQuiz()} className="sidebar--item">
                <Link to="/students/dashboard/quiz">
                  <SidebarItems sidebaricon={require('../../images/loadbar-doc.svg')} sidebartext={'Quiz'} />
                </Link>
              </div>
              <div ref={achievementsLink} onClick={() => updateBackgroundAchievements()} className="sidebar--item">
                <Link to="/students/dashboard/achievements">
                  <SidebarItems sidebaricon={require('../../images/trophy.svg')} sidebartext={'Achievements'} />
                </Link>
              </div>
              <div ref={helpLink} onClick={() => updateBackgroundHelp()} className="sidebar--item">
                <Link to="/students/dashboard/help">
                  <SidebarItems sidebaricon={require('../../images/help-circle.svg')} sidebartext={'Help'} />
                </Link>
              </div>
              <div ref={profileLink} onClick={() => updateBackgroundProfile()} className="sidebar--item">
                <Link to="/students/dashboard/profile">
                  <SidebarItems sidebaricon={require('../../images/mdi_account_circle.svg')} sidebartext={'Profile'} />
                </Link>
              </div>
              <div onClick={() => {
                
              }} className="sidebar--item">
                <SidebarItems sidebaricon={require('../../images/log-in.svg')} sidebartext={'Log Out'} />
              </div>
            </div>
          </div>
        </div>
        <div>
          <Switch>
            {dashboardRoutes.map((sidebarContent, index) => (
              <Route
                key={index}
                path={sidebarContent.path}
                exact={sidebarContent.exact}
                children={<sidebarContent.main />}
              />
            ))}
          </Switch>
        </div>
        <div className="bg-white fixed-bottom bottom-navigate">
          <div className="d-flex justify-content-between mx-2 mx-md-3 align-items-center">
            <div className="sidebar--item small">
              <Link to="/students/dashboard/courses">
                <SidebarItems sidebaricon={require('../../images/readme.svg')} sidebartext={'Courses'} />
              </Link>
            </div>
            <div className="sidebar--item small">
              <Link to="/students/dashboard/quiz">
                <SidebarItems sidebaricon={require('../../images/loadbar-doc.svg')} sidebartext={'Quiz'} />
              </Link>
            </div>
            <div className="sidebar--item small">
              <Link to="/students/dashboard/achievements">
                <SidebarItems sidebaricon={require('../../images/trophy.svg')} sidebartext={'Achievements'} />
              </Link>
            </div>
            <div className="sidebar--item small">
              <Link to="/students/dashboard/help">
                <SidebarItems sidebaricon={require('../../images/help-circle.svg')} sidebartext={'Help'} />
              </Link>
            </div>
            <div className="sidebar--item small">
              <Link to="/students/dashboard/profile">
                <SidebarItems sidebaricon={require('../../images/mdi_account_circle.svg')} sidebartext={'Profile'} />
              </Link>
            </div>
          </div>
        </div>
      </Router>
    </React.Fragment>
  )
}

export default StudentDashboard