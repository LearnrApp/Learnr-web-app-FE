import React, {useState} from 'react'
import Helmet from 'react-helmet'
import {Link} from  'react-router-dom'
import MyAchievementCard from './MyAchievementCard'

import '../../../../styles/UserDashboard.css'
// import '../../styles/Style.css'

const AchievementParent = () => {
  const documentTitle = 'Learnr | Student Dashboard-Achievements'

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


  const myAchievementsList = [
    <MyAchievementCard
      myCoursesImage={require('../../../../images/maths.png')}
      myAchievedSubject={'Mathematics'}
      // goToSubject={toSubjectMaths}
      awardImage={require('../../../../images/silver-award.svg')}
      awardMessage={`
        You earned a silver batch
        for completing 50% of this
        course.
      `}
    />,
    <MyAchievementCard
      myCoursesImage={require('../../../../images/civic-edu-2.jpg')}
      myAchievedSubject={'Civic Education'}
      // goToSubject={toSubjectCivEdu}
      awardImage={require('../../../../images/bronze-award.svg')}
      awardMessage={`
        You earned a bronze batch
        for starting this
        course.
      `}
    />,
  ]
  const [listMyAchievements, addedAchievements] = useState(myAchievementsList)

  return (
    <React.Fragment>
      <Helmet>
        <title>{documentTitle}</title>
        <meta
          name="description"
          content="The Achievements section of the student dashboard."
        />
      </Helmet>
      <div className="main--wrap" style={{
        backgroundColor: '#F6F6F6',
        height: '100vh'
        }}>
        <div className="p-3 info-wrap">
          <div className="d-flex align-items-center justify-content-end">
            <img className="mx-3" src={require('../../../../images/bell.svg')} alt="" />
            <span className="mx-3" >James Ferdinand</span>
            <img className="mx-3" src={require('../../../../images/profile-pic.png')} alt="" />
          </div>
          <Link to=""><img className="mx-3 logout-link" src={require('../../../../images/log-in.svg')} alt="" /></Link>
        </div>
        <div className="d-flex justify-content-center mt-3">
        <span  className="child-select mr-2">Sandy</span>
        <span  className="child-select-disabled ml-2">Anthony</span>
        </div>
        <div className="p-md-4 p-3">
        <p className="">My Records</p>
        <div className="my-courses-wrap">
            {listMyAchievements.map((subject, index) => (
            <div style={{borderRadius: '4px'}} className="bg-white" key={index}>{subject}</div>
          ))}
        </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default AchievementParent