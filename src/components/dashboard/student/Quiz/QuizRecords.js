import React, {useState} from 'react'
import Helmet from 'react-helmet'
import { Modal, ModalBody } from 'reactstrap';
import MyQuizCourse from './MyQuizCourse'

import '../../../../styles/UserDashboard.css'
// import '../../styles/Style.css'

const QuizRecords = () => {
  const documentTitle = 'Learnr | Student Dashboard-Quiz'

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

  const studentData = JSON.parse(localStorage.getItem('learnrStudentProfile'))

  const myQuizCourseList = [
    <MyQuizCourse
      myCoursesImage={require('../../../../images/maths.png')}
      myQuizSubject={'Mathematics'}
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

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  return (
    <React.Fragment>
      <Helmet>
        <title>{documentTitle}</title>
        <meta
          name="description"
          content="The Quiz section of the student dashboard."
        />
      </Helmet>
      <div className="main--wrap" style={{
        backgroundColor: '#F6F6F6',
        height: '100vh'
        }}>
        <div className="p-3 info-wrap">
          <div className="d-flex align-items-center justify-content-end">
            <img className="mx-3" src={require('../../../../images/bell.svg')} alt="" />
            <span className="mx-3" >{ studentData.fullName }</span>
            <img className="mx-3" src={require('../../../../images/profile-pic.png')} alt="" />
          </div>
          <div onClick={() => toggle()}><img className="mx-3 logout-link" src={require('../../../../images/log-in.svg')} alt="" /></div>
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
      <Modal centered={true} isOpen={modal} toggle={toggle}>
          {/* <ModalHeader toggle={toggle}>Modal title</ModalHeader> */}
          <ModalBody className="mx-auto p-5">
            <span className="small text-center d-block mb-3">
              Are you sure?
            </span>
            <div className="">
              <span onClick={() => {
                localStorage.clear()
                window.open('/students/signin', '_self')
              }} style={{
                backgroundColor: '#C02342',
                color: '#FFFFFF',
                borderRadius: '50px',
                border: 'none',
                fontSize: '0.8rem',
                padding: '5px 10px',
                margin: '20px 10px',
                cursor: 'pointer'
              }}>Logout</span>
              <span onClick={toggle} style={{
                backgroundColor: '#2342C0',
                color: '#FFFFFF',
                borderRadius: '50px',
                border: 'none',
                fontSize: '0.8rem',
                padding: '5px 10px',
                margin: '20px 10px',
                cursor: 'pointer'
              }}>Cancel</span>
            </div>
          </ModalBody>
        </Modal>
    </React.Fragment>
  )
}

export default QuizRecords