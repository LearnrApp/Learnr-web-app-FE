import React, { useState, useEffect } from 'react'
import Helmet from 'react-helmet'
import {Link} from  'react-router-dom'
import MyCourses from './MyCourses'
import SubjectCard from '../../../../components/SubjectCard'
import { getCoursesInAClass, getStudentProfile, getArticlesInCourses } from '../../../Utils/StudentUtils'
import getCurrentUser from '../../../Utils/AuthUtils'
import '../../../../styles/UserDashboard.css'
// import '../../styles/Style.css'

const Courses = () => {
  const documentTitle = 'Learnr | Student Dashboard-Courses'

  const checkSubjectAndSet = () => {
    
  }
  const toSubjectMaths = () => {
    
    // window.open('/course/topics', '_self');
  }
  const toSubjectTopics = () => {
    // window.open('/course/topics', '_self');
    window.open('/topics/mathematics/js1', '_self');
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
  // console.log(studentToken)

    

  // .then(response => {
  //     localStorage.setItem('studentProfile', JSON.stringify(response.data.student))
  //   }
  // )

  // console.log(response)

  getCurrentUser()
  console.log(getCurrentUser().id)
  if(getCurrentUser().id) {
    console.log('user exists')
  }

  getStudentProfile()
  .then(res => {
    console.log(res.data.data.student)
    localStorage.setItem('learnrStudentProfile', JSON.stringify(res.data.data.student))
  })
  const studentData = JSON.parse(localStorage.getItem('learnrStudentProfile'))
  console.log(studentData)

  useEffect(() => {
    getCourses()
  })

  getCoursesInAClass()
  .then(res => {
    console.log(Object.values(res.data.data))
    localStorage.setItem('learnrStudentCourses', JSON.stringify(res.data.data))
  })

  const [listMyCourses, addedCourses] = useState(myCoursesList)

  const [courseData, updateCourseData] = useState([])

 
  
  const response = JSON.parse(localStorage.getItem('learnrStudentCourses'))
  console.log(response)
  const courses = Object.values(response)
  console.log(courses)
  
  const getCourses = () => {
    setLoading(true)

    // updateCourseData(Object.values(response))
    setLoading(false)
  }
  console.log(courseData.length)


  return (
    <React.Fragment>
      <Helmet>
        <title>{documentTitle}</title>
      </Helmet>
      <div className="main--wrap">
        <div className="p-3 info-wrap">
          <div className="d-flex align-items-center justify-content-end">
            <img className="mx-3" src={require('../../../../images/bell.svg')} alt="" />
            <span className="mx-3" >{studentData.fullName}</span>
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
            {/*<p className="">All Your Courses</p>*/}
            {/*<Link to="" className="">See All</Link>*/}
          </div>
          {courses.length > 0 ?
            <div className="all-courses">
              {courses.map((course, index) => {
                return (
                  <div className="mx-2 subject-card bg-white d-flex flex-column align-items-center" key={index}>
                    <SubjectCard
                      image={ course.courseImage }
                      goToSubject={ () => {
                        let className = course.class.className
                        let courseId = course._id
                        console.log(courseId)
                        console.log(className)
                        getArticlesInCourses(courseId)
                        .then(res => {
                          console.log(res.data.data)
                          if(course.courseTitle === 'Mathematics') {
                            const mathematicsArticles = Object.values(res.data.data)
                            localStorage.setItem('mathematicsArticles', JSON.stringify(mathematicsArticles))
                            // console.log(biologyArticles)
                            // const data = biologyArticles.map((data) => {
                            //   return data.topic
                            // })
                            // console.log(data)
                            // const datared = data.splice(1)
                            // console.log(datared)
                          } else if(course.courseTitle === 'English') {
                            const englishArticles = Object.values(res.data.data)
                            localStorage.setItem('englishArticles', JSON.stringify(englishArticles))
                          } else if(course.courseTitle === 'Basic Science') {
                            const basicSciArticles = Object.values(res.data.data)
                            localStorage.setItem('basicSciArticles', JSON.stringify(basicSciArticles))
                          } else if(course.courseTitle === 'Basic Technology') {
                            const basicTechArticles = Object.values(res.data.data)
                            localStorage.setItem('basicTechArticles', JSON.stringify(basicTechArticles))
                          } else if(course.courseTitle === 'Social Science') {
                            const socSciArticles = Object.values(res.data.data)
                            localStorage.setItem('socSciArticles', JSON.stringify(socSciArticles))
                          } else if(course.courseTitle === 'Civic Education') {
                            const civicEduArticles = Object.values(res.data.data)
                            localStorage.setItem('civicEduArticles', JSON.stringify(civicEduArticles))
                          } else if(course.courseTitle === 'Economics') {
                            const economicsArticles = Object.values(res.data.data)
                            localStorage.setItem('economicsArticles', JSON.stringify(economicsArticles))
                          } else if(course.courseTitle === 'Biology') {
                            const biologyArticles = Object.values(res.data.data)
                            localStorage.setItem('biologyArticles', JSON.stringify(biologyArticles))
                            window.open('/biology/topics', '_self')
                          } else if(course.courseTitle === 'Physics') {
                            const physicsArticles = Object.values(res.data.data)
                            localStorage.setItem('physicsArticles', JSON.stringify(physicsArticles))
                          } else if(course.courseTitle === 'Chemistry') {
                            const chemistryArticles = Object.values(res.data.data)
                            localStorage.setItem('chemistryArticles', JSON.stringify(chemistryArticles))
                          } else if(course.courseTitle === 'Literature') {
                            const literatureArticles = Object.values(res.data.data)
                            localStorage.setItem('literatureArticles', JSON.stringify(literatureArticles))
                          } else if(course.courseTitle === 'Government') {
                            const governmentArticles = Object.values(res.data.data)
                            localStorage.setItem('governmentArticles', JSON.stringify(governmentArticles))
                          } else if(course.courseTitle === 'C.R.S') {
                            const crsArticles = Object.values(res.data.data)
                            localStorage.setItem('crsArticles', JSON.stringify(crsArticles))
                          } else {
                            return false
                          }
                        })
                        // toSubjectMaths()
                        
                        // if (course.courseTitle === 'Biology' && course.class.className === 'Ss 3') {
                        //   console.log('Nawa o!')
                        // } else if (course.courseTitle === 'English') {
                        //   window.open('https://twitter.com')
                        // }
                      } }
                      subject={ course.courseTitle }
                      topicSize={ course.courseSize }
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