import React from 'react'
import {Link} from 'react-router-dom'
import '../../../../styles/UserDashboard.css'

const MyAchievementCard = (props) => {

  return (
    <React.Fragment>
      
      <Link style={{ textDecoration: 'none'}} className="d-block" to="">
        <div className="d-flex align-items-center">
          <img width="" className="col-4 img-fluid my-1 w-100 h-100" src={props.myCoursesImage} alt="" />
          <div className="col-8 d-flex px-0 py-2 flex-column justify-content-center">
            <p className="mb-2" style={{fontSize: '14px', fontWeight: 'bolder', color: '#363740'}}>{props.myAchievedSubject}</p>
            <div className="d-flex">
              <img
                className=""
                style={{
                  width: '12%'
                }}
                src={props.awardImage}
                alt=""
              />
              <p
                className=""
                style={{
                  color: '#A4A6B3',
                  fontSize: '12px',
                  textDecoration: 'none',
                  margin: '0',
                  width: '70%'
                }}>
                {props.awardMessage}
              </p>
            </div>
          </div>
        </div>
      </Link>
    </React.Fragment>
  )
}

export default MyAchievementCard