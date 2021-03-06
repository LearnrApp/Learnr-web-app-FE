import React from 'react'
import { Link } from 'react-router-dom'
import StudentSidebarItems from './StudentSidebarItems'
import '../../../../styles/UserDashboard.css'
import '../../../../styles/Style.css'
import { studentsUrl } from '../../../routes/StudentRoutes'

const StudentBottomBar = () => {
  return (
    <div className="bg-white fixed-bottom bottom-navigate">
      <div className="d-flex justify-content-around mx-2 mx-md-3 align-items-center">
        <div className="sidebar--item small">
          <Link to={studentsUrl.STUDENT_DASHBOARD_COURSES_URL}>
            <StudentSidebarItems sidebaricon={require('../../../../images/readme.svg')} sidebartext={'Courses'} />
          </Link>
        </div>
        <div className="sidebar--item small">
          <Link to={studentsUrl.STUDENT_DASHBOARD_QUIZ_URL}>
            {/* <StudentSidebarItems sidebaricon={require('../../../../images/loadbar-doc.svg')} sidebartext={'Quiz'} /> */}
          </Link>
        </div>
        <div className="sidebar--item small">
          <Link to={studentsUrl.STUDENT_DASHBOARD_ACHIEVEMENTS_URL}>
            {/* <StudentSidebarItems sidebaricon={require('../../../../images/trophy.svg')} sidebartext={'Achievements'} /> */}
          </Link>
        </div>
        <div className="sidebar--item small">
          <Link to={studentsUrl.STUDENT_DASHBOARD_HELP_URL}>
            {/* <StudentSidebarItems sidebaricon={require('../../../../images/help-circle.svg')} sidebartext={'Help'} /> */}
          </Link>
        </div>
        <div className="sidebar--item small">
          <Link to={studentsUrl.STUDENT_DASHBOARD_PROFILE_URL}>
            <StudentSidebarItems sidebaricon={require('../../../../images/mdi_account_circle.svg')} sidebartext={'Profile'} />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default StudentBottomBar