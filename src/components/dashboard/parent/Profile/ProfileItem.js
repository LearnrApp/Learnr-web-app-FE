import React from 'react'
import '../../../../styles/UserDashboard.css'


const ProfileItem = (props) => {

  return (
    <React.Fragment>
      <div className="profile-items row border-bottom bg-white">
        <span className="col " style={{color: '#8B90A0'}}>{props.keys}</span>
        <span className="col text-break font-weight-bold" style={{color: '#212429'}}>{props.value}</span>
        <span className="col text-right"
          onClick={props.editSection}
          style={{color: '#2342C0', cursor: 'pointer'}}
        >{props.edit}</span>
      </div>
    </React.Fragment>
  )
}

export default ProfileItem