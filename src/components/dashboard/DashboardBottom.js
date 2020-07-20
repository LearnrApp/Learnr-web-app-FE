import React from 'react'
// import {Link} from 'react-router-dom'
import SidebarItems from '../Users/SidebarItems'
import '../../styles/UserDashboard.css';

const DashboardBottom = () => {
  return (
    <React.Fragment>
      <div className="bg-white fixed-bottom">
        <div className="d-flex justify-content-between mx-3 align-items-center">
        <div className="sidebar--item">
            <SidebarItems sidebaricon={require('../../images/readme.svg')} sidebartext={'Courses'} />
          </div>
          <div className="sidebar--item">
            <SidebarItems sidebaricon={require('../../images/loadbar-doc.svg')} sidebartext={'Quiz'} />
          </div>
          <div className="sidebar--item">
            <SidebarItems sidebaricon={require('../../images/trophy.svg')} sidebartext={'Achievements'} />
          </div>
          <div className="sidebar--item">
            <SidebarItems sidebaricon={require('../../images/help-circle.svg')} sidebartext={'Help'} />
          </div>
          <div className="sidebar--item">
            <SidebarItems sidebaricon={require('../../images/mdi_account_circle.svg')} sidebartext={'Profile'} />
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default DashboardBottom