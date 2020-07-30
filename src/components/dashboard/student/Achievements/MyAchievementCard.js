import React from 'react'
import {Link} from 'react-router-dom'
import '../../../styles/UserDashboard.css'

const MyQuizCourse = (props) => {
  return (
    <React.Fragment>
      <Link style={{ textDecoration: 'none'}} className="d-block" to="">
        <div className="row">
          <img width="" className="col-5 pt-2 pb-2 ml-2  img-fluid" src={props.myCoursesImage} alt="" />
          <div className="d-flex py-2 flex-column justify-content-center">
            <p className="mb-2" style={{fontSize: '14px', fontWeight: 'bolder', color: '#363740'}}>{props.myAchievedSubject}</p>
            <img className="" src={props.awardImage} alt="" />
            <p className="">{props.awardMessage}</p>
          </div>
        </div>
      </Link>
    </React.Fragment>
  )
}

export default MyQuizCourse