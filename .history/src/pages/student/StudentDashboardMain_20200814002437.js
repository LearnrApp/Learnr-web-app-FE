import React from 'react'
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
      path: "/students/dashboard/achievements",
      main: () => <React.Fragment>
        <HelpSupport />
      </React.Fragment>
    },
    {
      path: "/students/dashboard/achievements",
      main: () => <React.Fragment>
        <Profile />
      </React.Fragment>
    },
  ];
  return (
    <React.Fragment>
      <NavBarUser />
      <div className="container-fluid px-0 dash-wrap">
        <div className="sidebar--wrap">
          <div className="sidebar--greet px-3 py-4">
            <span className="text-white">Hello, Tony Sandy</span>
          </div>
          <div className="pt-4">
            <div className="sidebar--item--active sidebar--item">
              <Link to="">
                <SidebarItems sidebaricon={require('../../images/readme.svg')} sidebartext={'Courses'} />
              </Link>
            </div>
            <div className="sidebar--item">
              <Link to="">
                <SidebarItems sidebaricon={require('../../images/loadbar-doc.svg')} sidebartext={'Quiz'} />
              </Link>
            </div>
            <div className="sidebar--item">
              <Link to="">
                <SidebarItems sidebaricon={require('../../images/trophy.svg')} sidebartext={'Achievements'} />
              </Link>
            </div>
            <div className="sidebar--item">
              <Link to="">
                <SidebarItems sidebaricon={require('../../images/help-circle.svg')} sidebartext={'Help'} />
              </Link>
            </div>
            <div className="sidebar--item">
              <Link to="">
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
    </React.Fragment>
  )
}

export default StudentDashboard