import React, { useRef, useState } from 'react'
import { Modal, ModalBody } from 'reactstrap';
import {Link} from 'react-router-dom'
import '../../../../styles/UserDashboard.css'
import StudentSidebarItems from './StudentSidebarItems'
import { studentsUrl } from '../../../routes/StudentRoutes'

const StudentSidebar = () => {
  const coursesLink = useRef()
  const quizLink = useRef()
  const achievementsLink = useRef()
  const helpLink = useRef()
  const profileLink = useRef()

  const updateBackgroundCourses = () => {
    if(coursesLink.current) {
      coursesLink.current.classList.add('sidebar--item--active')
      quizLink.current.classList.remove('sidebar--item--active')
      achievementsLink.current.classList.remove('sidebar--item--active')
      helpLink.current.classList.remove('sidebar--item--active')
      profileLink.current.classList.remove('sidebar--item--active')
    }
  }
  const updateBackgroundQuiz = () => {
    if(quizLink.current) {
      quizLink.current.classList.add('sidebar--item--active')
      coursesLink.current.classList.remove('sidebar--item--active')
      achievementsLink.current.classList.remove('sidebar--item--active')
      helpLink.current.classList.remove('sidebar--item--active')
      profileLink.current.classList.remove('sidebar--item--active')
    }
  }
  const updateBackgroundAchievements = () => {
    if(achievementsLink.current) {
      achievementsLink.current.classList.add('sidebar--item--active')
      quizLink.current.classList.remove('sidebar--item--active')
      coursesLink.current.classList.remove('sidebar--item--active')
      helpLink.current.classList.remove('sidebar--item--active')
      profileLink.current.classList.remove('sidebar--item--active')
    }
  }
  const updateBackgroundHelp = () => {
    if(helpLink.current) {
      helpLink.current.classList.add('sidebar--item--active')
      quizLink.current.classList.remove('sidebar--item--active')
      coursesLink.current.classList.remove('sidebar--item--active')
      achievementsLink.current.classList.remove('sidebar--item--active')
      profileLink.current.classList.remove('sidebar--item--active')
    }
  }
  const updateBackgroundProfile = () => {
    if(profileLink.current) {
      profileLink.current.classList.add('sidebar--item--active')
      quizLink.current.classList.remove('sidebar--item--active')
      coursesLink.current.classList.remove('sidebar--item--active')
      achievementsLink.current.classList.remove('sidebar--item--active')
      helpLink.current.classList.remove('sidebar--item--active')
    }
  }
  const studentData = JSON.parse(localStorage.getItem('learnrStudentProfile'))

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  return (
    <React.Fragment>
      <div className="sidebar--wrap">
        <div className="sidebar--wrap">
            <div className="sidebar--greet px-3 py-4">
              <span className="text-white text-capitalize">{ `Hello, ${studentData.username}` }</span>
            </div>
            <div className="pt-4">
              <div ref={coursesLink} onClick={() => updateBackgroundCourses()} className="sidebar--item--active sidebar--item">
                <Link to={studentsUrl.STUDENT_DASHBOARD_COURSES_URL}>
                  <StudentSidebarItems sidebaricon={require('../../../../images/readme.svg')} sidebartext={'Courses'} />
                </Link>
              </div>
              <div ref={quizLink} onClick={() => updateBackgroundQuiz()} className="sidebar--item">
                <Link to={studentsUrl.STUDENT_DASHBOARD_QUIZ_URL}>
                  {/*<StudentSidebarItems sidebaricon={require('../../../../images/loadbar-doc.svg')} sidebartext={'Quiz'} />*/}
                </Link>
              </div>
              <div ref={achievementsLink} onClick={() => updateBackgroundAchievements()} className="sidebar--item">
                <Link to={studentsUrl.STUDENT_DASHBOARD_ACHIEVEMENTS_URL}>
                  {/*<StudentSidebarItems sidebaricon={require('../../../../images/trophy.svg')} sidebartext={'Achievements'} />*/}
                </Link>
              </div>
              <div ref={helpLink} onClick={() => updateBackgroundHelp()} className="sidebar--item">
                <Link to="/students/dashboard/help">
                  {/*<StudentSidebarItems sidebaricon={require('../../../../images/help-circle.svg')} sidebartext={'Help'} />*/}
                </Link>
              </div>
              <div ref={profileLink} onClick={() => updateBackgroundProfile()} className="sidebar--item">
                <Link to="/students/dashboard/profile">
                  <StudentSidebarItems sidebaricon={require('../../../../images/mdi_account_circle.svg')} sidebartext={'Profile'} />
                </Link>
              </div>
              <div onClick={() => toggle()} className="sidebar--item">
                <StudentSidebarItems sidebaricon={require('../../../../images/log-in.svg')} sidebartext={'Log Out'} />
              </div>
            </div>
          </div>
        {/* <SidebarItems sidebaricon={require('')} sidebartext={''} />
        <SidebarItems sidebaricon={require('')} sidebartext={''} />
        <SidebarItems sidebaricon={require('')} sidebartext={''} />
        <SidebarItems sidebaricon={require('')} sidebartext={''} />
        <SidebarItems sidebaricon={require('')} sidebartext={props.sidebartext} />
        <Link to=""><SidebarItems sidebaricon={require('')} sidebartext={''} /></Link> */}
        
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
      </div>
    </React.Fragment>
  )
}

export default StudentSidebar