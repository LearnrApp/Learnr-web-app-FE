import React, { useState } from 'react'
// import {Link} from 'react-router-dom'
import SidebarItems from '../Users/SidebarItems'
import Courses from '../../components/dashboard/student/Courses'
import '../../styles/UserDashboard.css';

const DashboardBottom = () => {
  const [dashboardMenu, updateMenu] = useState(<Courses />)


  return (
    <React.Fragment>
      <div className="bg-white fixed-bottom bottom-navigate">
        <div className="d-flex justify-content-between mx-2 mx-md-3 align-items-center">
          <div onClick={() => dashboardMenu} className="sidebar--item small">
            <SidebarItems sidebaricon={require('../../images/readme.svg')} sidebartext={'Courses'} />
          </div>
          <div onClick={() => {
            updateMenu()
          }} className="sidebar--item small">
            <SidebarItems sidebaricon={require('../../images/loadbar-doc.svg')} sidebartext={'Quiz'} />
          </div>
          <div onClick={() => {
            updateMenu()
          }} className="sidebar--item small">
            <SidebarItems sidebaricon={require('../../images/trophy.svg')} sidebartext={'Achievements'} />
          </div>
          <div onClick={() => {
            updateMenu()
          }} className="sidebar--item small">
            <SidebarItems sidebaricon={require('../../images/help-circle.svg')} sidebartext={'Help'} />
          </div>
          <div onClick={() => {
            updateMenu()
          }} className="sidebar--item small">
            <SidebarItems sidebaricon={require('../../images/mdi_account_circle.svg')} sidebartext={'Profile'} />
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default DashboardBottom