import React from 'react'
import '../../../../styles/UserDashboard.css'

const StudentSidebarItems = (props) => {
  return (
    <React.Fragment>
      <div className="bottom-nav">
        <img className="bottom-icon" src={props.sidebaricon} alt="" />
        <span className="bottom-text">{props.sidebartext}</span>
      </div>
    </React.Fragment>
  )
}

export default StudentSidebarItems