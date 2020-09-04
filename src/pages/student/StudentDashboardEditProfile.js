import React from 'react'
import NavBar from '../../components/navbar/NavBar'
import EditProfile from '../../components/dashboard/student/Profile/EditProfile'
import StudentSidebar from '../../components/dashboard/student/navigation/StudentSidebar'
import StudentBottomBar from '../../components/dashboard/student/navigation/StudentBottomBar'
import '../../styles/UserDashboard.css'
import '../../styles/Style.css'
import getCurrentUser from '../../components/Utils/AuthUtils'


const StudentDashboardProfile = () => {
  
  getCurrentUser()
  if(!getCurrentUser()) {
    return window.open('/students/signin', '_self')
  }

  return (
    <React.Fragment>
      <NavBar />
      <div className="container-fluid px-0 dash-wrap">
        {/* <StudentSidebar /> */}
        <EditProfile />
        {/* <StudentBottomBar /> */}
      </div>
    </React.Fragment>
  )
}

export default StudentDashboardProfile