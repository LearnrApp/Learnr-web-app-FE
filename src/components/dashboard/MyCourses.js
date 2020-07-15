import React from 'react'
import {Link} from 'react-router-dom'
import '../../styles/UserDashboard.css'

const MyCourses = () => {
  return (
    <React.Fragment>
      <div className="container-fluid px-0">
        <p className="">My Courses</p>
        <div className="d-flex row my-courses">
          <div className="col bg-white mb-3 p-1 d-flex align-items-center">
            <Link to=""><img className="mr-3 img-fluid" src={require('../../images/img-place-1.png')} alt="" /></Link>
            <div className="d-flex flex-column align-items-center justify-content-center">
              <p className="">Mathematics</p>
              <span className="">23 Topics</span>
              <div className="pr-3">
                <img className="" src={require('../../images/progress-success.svg')} alt="" />
                <span className="">70%</span>
              </div>
            </div>
          </div>

          <div className="col bg-white ml-3 mb-3 p-1 d-flex align-items-center">
            <Link to=""><img className="mr-3 img-fluid" src={require('../../images/img-place-2.png')} alt="" /></Link>
            <div className="d-flex flex-column align-items-center justify-content-center">
              <p className="">Mathematics</p>
              <span className="">23 Topics</span>
              <div className="pr-3">
                <img className="" src={require('../../images/progress-success-1.svg')} alt="" />
                <span className="">50%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default MyCourses