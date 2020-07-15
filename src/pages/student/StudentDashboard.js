import React, {useState} from 'react'
import {Link} from  'react-router-dom'
import SidebarItems from '../../components/Users/SidebarItems'
import NavBarUser from '../../components/navbar/NavBarUser'
import MyCourses from '../../components/dashboard/MyCourses'
import SubjectCard from '../../components/SubjectCard'
import DashboardBottom from '../../components/dashboard/DashboardBottom'
import '../../styles/UserDashboard.css'
import '../../styles/Style.css'

const StudentDashboard = () => {
  const toSubjectMaths = () => {
    window.open('/subjects/mathematics', '_self');
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

  const subjectList = [
    <SubjectCard
      image={require('../../images/maths-2.png')}
      goToSubject={toSubjectMaths}
      subject={'Mathematics'}
      topicSize={'29 Topics'}
    />,
    <SubjectCard
      image={require('../../images/civic-edu-2.png')}
      goToSubject={toSubjectCivEdu}
      subject={'Civic Education'}
      topicSize={'40 Topics'}
    />,
    <SubjectCard
      image={require('../../images/english-2.png')}
      goToSubject={toSubjectEng}
      subject={'English'}
      topicSize={'25 Topics'}
    />,
    <SubjectCard
      image={require('../../images/basic-tech-2.png')}
      goToSubject={toSubjectBasTech}
      subject={'Basic Technology'}
      topicSize={'40 Topics'}
    />
  ]

  const [subjects, nextSubject] = useState(subjectList)

  return (
    <React.Fragment>
      <NavBarUser />
      <div className="container-fluid px-0 dash-wrap">
        <div className="sidebar--wrap">
          <div className="sidebar--greet px-3 py-4">
            <span className="text-white">Hello, Tony Sandy</span>
          </div>
          <div className="sidebar--item">
            <SidebarItems sidebaricon={require('../../images/readme.svg')} sidebartext={'Courses'} />
          </div>
          <div className="sidebar--item">
            <SidebarItems sidebaricon={require('../../images/loadbar-doc.svg')} sidebartext={'Quiz'} />
          </div>
          <div className="sidebar--item">
            <SidebarItems sidebaricon={require('../../images/trophy.svg')} sidebartext={'Achievements'} />
          </div>
          <div className="sidebar--item">
            <SidebarItems sidebaricon={require('../../images/help-circle.svg')} sidebartext={'Help'} />
          </div>
          <div className="sidebar--item">
            <SidebarItems sidebaricon={require('../../images/mdi_account_circle.svg')} sidebartext={'Profile'} />
          </div>
          <div className="sidebar--item">
            <SidebarItems sidebaricon={require('../../images/log-in.svg')} sidebartext={'Log Out'} />
          </div>
        </div>
        <div className="main--wrap">
          <div className="p-3 info-wrap">
            <div className="d-flex align-items-center justify-content-end">
              <img className="mx-3" src={require('../../images/search.svg')} alt="" />
              <img className="mx-3" src={require('../../images/bell.svg')} alt="" />
              <span className="mx-3" >Tony Sandy</span>
              <img className="mx-3" src={require('../../images/profile-pic.png')} alt="" />
            </div>
            <Link to=""><img className="mx-3 logout-link" src={require('../../images/log-in.svg')} alt="" /></Link>
          </div>
          <div className="p-4">
            <MyCourses />
          </div>
          <div className="p-3">
            <div className="d-flex justify-content-between">
              <p className="">My Courses</p>
              <Link to="" className="">See All</Link>
            </div>
            <div className="all-courses">
                {subjects.map((subject, index) => (
                  <div className="mx-2 subject-card bg-white d-flex flex-column align-items-center" key={index}>{subject}</div>
                ))}
            </div>
          </div>
        </div>
      </div>
      <div className="bottom-navigate">
        <DashboardBottom />
      </div>
    </React.Fragment>
  )
}

export default StudentDashboard