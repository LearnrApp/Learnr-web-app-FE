import React, { useState, useEffect } from 'react'
import Helmet from 'react-helmet'
import {Link} from  'react-router-dom'
import MyCourses from './MyCourses'
import SubjectCard from '../../../../components/SubjectCard'
import { getCoursesInAClass } from '../../../Utils/studentUtils'

import '../../../../styles/UserDashboard.css'
// import '../../styles/Style.css'

const Courses = () => {
  const documentTitle = 'Learnr | Student Dashboard-Courses'

  const toSubjectMaths = () => {
    window.open('/topics/mathematics/js1', '_self');
  }
  const toSubjectEng = () => {
      window.open('/subjects/english', '_self');
  }
  const toSubjectBasTech = () => {
      window.open('/subjects/basic-technology', '_self');
  }
  const toSubjectCivEdu = () => {
      window.open('/subjects/civic-education', '_self');
  }

  const [loading, setLoading] = useState(false)

  const myCoursesList = [
    <MyCourses
      myCoursesImage={require('../../../../images/basic-sci.png')}
      myCoursesSubject={'Basic Science'}
      // goToSubject={toSubjectMaths}
      myCoursesSubjectTopic={'29 Topics'}
    />,
    <MyCourses
      myCoursesImage={require('../../../../images/dm-img.png')}
      myCoursesSubject={'Digital Marketing'}
      // goToSubject={toSubjectCivEdu}
      myCoursesSubjectTopic={'40 Topics'}
    />,
  ]
  const [listMyCourses, addedCourses] = useState(myCoursesList)

  const [courseData, updateCourseData] = useState([])

  const currentClass = '5f365280ecc3590024c93342'
  useEffect(() => {
    // if(subjects) return;
    // getCoursesInAClass(currentClass)
    //   .then((data) => {
    //     updateCourseData(data.data.data)
    //
    //     const dataArray = Object.values(data.data)
    //     const dataArrayPayload = Object.values(dataArray[1][0])[2]
    //
    //   })
    getCourses(currentClass)
  }, [])

  const getCourses = async (currentClass) => {
    setLoading(true)
    const response = await getCoursesInAClass(currentClass)

    updateCourseData(Object.values(response.data.data))
    setLoading(false)
  }
  // console.log(courseData[0])
  console.log(courseData.length)


  const subjectList = [
    <SubjectCard
      image={require('../../../../images/senior-maths.png')}
      goToSubject={toSubjectMaths}
      subject={
        useEffect(() => {
          getCoursesInAClass(currentClass)
            .then((data) => {
              const dataArray = Object.values(data.data)
              return Object.values(dataArray[1][0])[2]
            })
        })
      }
      topicSize={'29 Topics'}
    />,
    <SubjectCard
      image={require('../../../../images/civic-edu.png')}
      goToSubject={toSubjectCivEdu}
      subject={'Civic Education'}
      topicSize={'40 Topics'}
    />,
    <SubjectCard
      image={require('../../../../images/english.png')}
      goToSubject={toSubjectEng}
      subject={'English'}
      topicSize={'25 Topics'}
    />,
    <SubjectCard
      image={require('../../../../images/basic-tech.png')}
      goToSubject={toSubjectBasTech}
      subject={'Basic Technology'}
      topicSize={'40 Topics'}
    />
  ]
  const [subjects, nextSubject] = useState(subjectList)

  return (
    <React.Fragment>
      <Helmet>
        <title>{documentTitle}</title>
      </Helmet>
      <div className="main--wrap">
        <div className="p-3 info-wrap">
          <div className="d-flex align-items-center justify-content-end">
            <img className="mx-3" src={require('../../../../images/bell.svg')} alt="" />
            <span className="mx-3" >Tony Sandy</span>
            <img className="mx-3" src={require('../../../../images/profile-pic.png')} alt="" />
          </div>
          <Link to=""><img className="mx-3 logout-link" src={require('../../../../images/log-in.svg')} alt="" /></Link>
        </div>
        <div className="p-md-4 p-3 ">
        <p className="">My Courses</p>
        <div className="my-courses-wrap">
          {/*  {listMyCourses.map((subject, index) => (*/}
          {/*  <div style={{borderRadius: '4px'}} className="bg-white" key={index}>{subject}</div>*/}
          {/*))}*/}
        </div>
        </div>
        <div className="p-3 where-the-courses">
          <div className="d-flex justify-content-between">
            <p className="">All Your Courses</p>
            {/*<Link to="" className="">See All</Link>*/}
          </div>
          {courseData.length > 0 ?
            <div className="all-courses">
              {courseData.map((course, index) => {
                return (
                  <div className="mx-2 subject-card bg-white d-flex flex-column align-items-center" key={index}>
                    <SubjectCard
                      image={course.courseImage}
                      goToSubject={toSubjectMaths}
                      subject={course.courseTitle}
                      topicSize={course.courseSize}
                    />
                  </div>
                )
              })}
            </div>: ''}
        </div>
      </div>
    </React.Fragment>
  )
}

export default Courses