import React from 'react'
import {Link} from 'react-router-dom'
import '../../../styles/UserDashboard.css'

const MyCourses = (props) => {
  return (
    <React.Fragment>
      <Link style={{ textDecoration: 'none'}} className="d-block" to="">
        <div className="row">
          <img width="" className="col-4 pt-2 pb-2 ml-2  img-fluid" src={props.myCoursesImage} alt="" />
          <div className="d-flex py-2 flex-column justify-content-center">
            <p className="" style={{fontSize: '14px', fontWeight: 'bolder', color: '#363740'}}>{props.myCoursesSubject}</p>
            <span className="" style={{fontSize: '14px', fontWeight: 'bolder', color: '#363740'}}>{props.myCoursesSubjectTopic}</span>
            <div className="">
              <img className="mr-3" src={require('../../../images/progress-success.svg')} alt="" />
              <span className="" style={{fontSize: '14px', color: '#363740'}}>70%</span>
            </div>
          </div>
        </div>
      </Link>
    </React.Fragment>
  )
}

export default MyCourses