import React, { useState } from 'react'
import { Modal, ModalBody } from 'reactstrap';
import {Link} from 'react-router-dom'
import '../../../../styles/UserDashboard.css'
import StudentSidebarItems from './StudentSidebarItems'
import { studentsUrl } from '../../../routes/StudentRoutes'

const StudentSidebar = () => {
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
              <div id="courses-back" className="sidebar--item--active sidebar--item">
                <Link to={studentsUrl.STUDENT_DASHBOARD_COURSES_URL}>
                  <StudentSidebarItems sidebaricon={require('../../../../images/readme.svg')} sidebartext={'Courses'} />
                </Link>
              </div>
              <div id="quiz-back" className="sidebar--item">
                <Link to={studentsUrl.STUDENT_DASHBOARD_QUIZ_URL}>
                  {/* <StudentSidebarItems sidebaricon={require('../../../../images/loadbar-doc.svg')} sidebartext={'Quiz'} /> */}
                </Link>
              </div>
              <div id="achieve-back" className="sidebar--item">
                <Link to={studentsUrl.STUDENT_DASHBOARD_ACHIEVEMENTS_URL}>
                  {/* <StudentSidebarItems sidebaricon={require('../../../../images/trophy.svg')} sidebartext={'Achievements'} /> */}
                </Link>
              </div>
              <div id="help-back" className="sidebar--item">
                <Link to={studentsUrl.STUDENT_DASHBOARD_HELP_URL}>
                  {/* <StudentSidebarItems sidebaricon={require('../../../../images/help-circle.svg')} sidebartext={'Help'} /> */}
                </Link>
              </div>
              <div id="profile-back" className="sidebar--item">
                <Link to={studentsUrl.STUDENT_DASHBOARD_PROFILE_URL}>
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