import React from 'react'
import NavBar from '../../components/navbar/NavBar'
import HelpSupport from '../../components/dashboard/student/Help/Help'
import StudentSidebar from '../../components/dashboard/student/navigation/StudentSidebar'
import StudentBottomBar from '../../components/dashboard/student/navigation/StudentBottomBar'
import '../../styles/UserDashboard.css'
import '../../styles/Style.css'
import getCurrentUser from '../../components/Utils/AuthUtils'


const StudentDashboardHelp = () => {
  getCurrentUser()
  if(!getCurrentUser()) {
    return window.open('/students/signin', '_self')
  }

  return (
    <React.Fragment>
      <NavBar />
      <div className="container-fluid px-0 dash-wrap">
        <StudentSidebar />
        <HelpSupport />
        <StudentBottomBar />
      </div>
    </React.Fragment>
  )
}

export default StudentDashboardHelp