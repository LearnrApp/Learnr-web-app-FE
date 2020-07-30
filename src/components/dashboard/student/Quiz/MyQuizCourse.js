import React from 'react'
import {Link} from 'react-router-dom'
import '../../../../styles/UserDashboard.css'

const MyQuizCourse = (props) => {
  return (
    <React.Fragment>
      <Link style={{ textDecoration: 'none'}} className="d-block" to="">
        <div className="row">
          <img width="" className="col-5 pt-2 pb-2 ml-2  img-fluid" src={props.myCoursesImage} alt="" />
          <div className="d-flex py-2 flex-column justify-content-center">
            <p className="mb-2" style={{fontSize: '14px', fontWeight: 'bolder', color: '#363740'}}>{props.myQuizSubject}</p>
            <span className="mb-2" style={{fontSize: '14px', fontWeight: 'bolder', color: '#363740'}}>Score</span>
            <div className="" >
            <span className="p-2 mt-1" style={{width: '50px', height: '50px', border: '1px solid #2342C0', borderRadius: '50%', fontSize: '14px', color: '#363740'}}>{props.currentScore}/{props.totalScore}</span>
            </div>
          </div>
        </div>
      </Link>
    </React.Fragment>
  )
}

export default MyQuizCourse