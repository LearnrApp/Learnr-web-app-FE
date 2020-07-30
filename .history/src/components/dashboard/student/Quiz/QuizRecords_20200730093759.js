import React, {useState} from 'react'
import {Link} from  'react-router-dom'
import MyQuizCourse from './MyQuizCourse'

import '../../../styles/UserDashboard.css'
// import '../../styles/Style.css'

const QuizRecords = () => {
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


  const myQuizCourseList = [
    <MyQuizCourse
      myCoursesImage={require('../../../../images/maths.png')}
      myQuizSubject={'Basic Science'}
      // goToSubject={toSubjectMaths}
      currentScore={'6'}
      totalScore={'10'}
    />,
    <MyQuizCourse
      myCoursesImage={require('../../../../images/civic-edu.png')}
      myQuizSubject={'Civic Education'}
      // goToSubject={toSubjectCivEdu}
      currentScore={'8'}
      totalScore={'10'}
    />,
    <MyQuizCourse
      myCoursesImage={require('../../../../images/english.png')}
      myQuizSubject={'English'}
      // goToSubject={toSubjectCivEdu}
      currentScore={'2'}
      totalScore={'10'}
    />,
  ]
  const [listMyQuizCourse, addedCourses] = useState(myQuizCourseList)

  return (
    <React.Fragment>
      <div className="main--wrap" style={{
        backgroundColor: '#F6F6F6',
        height: '100vh'
        }}>
        <div className="p-3 info-wrap">
          <div className="d-flex align-items-center justify-content-end">
            <img className="mx-3" src={require('../../../../images/bell.svg')} alt="" />
            <span className="mx-3" >Tony Sandy</span>
            <img className="mx-3" src={require('../../../images/profile-pic.png')} alt="" />
          </div>
          <Link to=""><img className="mx-3 logout-link" src={require('../../../../images/log-in.svg')} alt="" /></Link>
        </div>
        <div className="p-md-4 p-3">
        <p className="">My Records</p>
        <div className="my-courses-wrap">
            {listMyQuizCourse.map((subject, index) => (
            <div style={{borderRadius: '4px'}} className="bg-white" key={index}>{subject}</div>
          ))}
        </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default QuizRecords