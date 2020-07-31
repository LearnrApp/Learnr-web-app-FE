import React from 'react'
import '../../../../styles/UserDashboard.css'


const ProfileItemV2 = (props) => {

  return (
    <React.Fragment>
      <div className="profile-items row border-bottom bg-white">
        <span className="col" style={{color: '#8B90A0'}}>{props.keys}</span>
        <span className="col font-weight-bold" style={{color: '#212429'}}>{props.value}</span>
        <span className="col "
          style={{color: 'transparent'}}
        >{props.edit}</span>
      </div>
    </React.Fragment>
  )
}

export default ProfileItemV2