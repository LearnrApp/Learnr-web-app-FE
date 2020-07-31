import React  from 'react'
import Helmet from 'react-helmet'
import {Link} from  'react-router-dom'

import '../../../../styles/UserDashboard.css'
// import '../../styles/Style.css'

const YourKids = () => {
  const documentTitle = 'Learnr | Parent Dashboard-Courses'

  // const toSubjectMaths = () => {
  //   window.open('/subjects/mathematics', '_self');
  // }
  // const toSubjectEng = () => {
  //     window.open('/subjects/english', '_self');
  // }
  // const toSubjectBasTech = () => {
  //     window.open('/subjects/basic-technology', '_self');
  // }
  // const toSubjectCivEdu = () => {
  //     window.open('/subjects/civic-education', '_self');
  // }

  return (
    <React.Fragment>
      <Helmet>
        <title>{documentTitle}</title>
      </Helmet>
      <div style={{height: '100vh', backgroundColor: '#F6F6F6'}} className="main--wrap">
          <div className="p-3 info-wrap">
            <div className="d-flex align-items-center justify-content-end">
              <img className="mx-3" src={require('../../../../images/bell.svg')} alt="" />
              <span className="mx-3" >James Ferdinand</span>
              <img className="mx-3" src={require('../../../../images/profile-pic.png')} alt="" />
            </div>
            <Link to=""><img className="mx-3 logout-link" src={require('../../../../images/log-in.svg')} alt="" /></Link>
          </div>
          <div className="mx-4 d-flex flex-column align-items-center justify-content-center my-auto">
            <img className="" src={require('../../../../images/add-child.svg')} alt="" />
            <p className="text-center">Ready to add your Child?</p>
            <p className="text-center">Click “Add a child” to create a new account for your child or connect to an existing account.</p>
            <Link className="addchild-btn text-center" to="">Add Child</Link>
          </div>
        </div>
    </React.Fragment>
  )
}

export default YourKids