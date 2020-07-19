import React from 'react'
// import {Link} from 'react-router-dom'
// import Dropdown from 'react-bootstrap/Dropdown'
import SubjectCard from '../SubjectCard'
import '../../styles/Style.css'
import {gsap} from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


const Ss3 = () => {
  const toSubjectMaths = () => {
    window.open('/subjects/mathematics', '_self');
  }
  const toSubjectEng = () => {
      window.open('/subjects/english', '_self');
  }
  const toSubjectBasSci = () => {
      window.open('/subjects/basic-science', '_self');
  }
  const toSubjectBasTech = () => {
      window.open('/subjects/basic-technology', '_self');
  }
  const toSubjectSocStud = () => {
      window.open('/subjects/social-studies', '_self');
  }
  const toSubjectCivEdu = () => {
      window.open('/subjects/civic-education', '_self');
  }

  const subjectListSS3 = [
    <SubjectCard
      image={require('../../images/senior-maths-3.jpg')}
      goToSubject={toSubjectMaths}
      subject={'Mathematics'}
      topicSize={'23 Topics'}
    />,
    <SubjectCard
      image={require('../../images/senior-english.png')}
      goToSubject={toSubjectEng}
      subject={'English'}
      topicSize={'25 Topics'}
    />,
    <SubjectCard
      image={require('../../images/economics.png')}
      goToSubject={toSubjectBasSci}
      subject={'Economics'}
      topicSize={'40 Topics'}
    />,
    <SubjectCard
      image={require('../../images/biology.png')}
      goToSubject={toSubjectBasTech}
      subject={'Biology'}
      topicSize={'40 Topics'}
    />,
    <SubjectCard
      image={require('../../images/physics.png')}
      goToSubject={toSubjectSocStud}
      subject={'Physcs'}
      topicSize={'35 Topics'}
    />,
    <SubjectCard
      image={require('../../images/chemistry.png')}
      goToSubject={toSubjectCivEdu}
      subject={'Chemistry'}
      topicSize={'30 Topics'}
    />,
    <SubjectCard
      image={require('../../images/literature.png')}
      goToSubject={toSubjectBasTech}
      subject={'Literature'}
      topicSize={'40 Topics'}
    />,
    <SubjectCard
      image={require('../../images/government.png')}
      goToSubject={toSubjectSocStud}
      subject={'Government'}
      topicSize={'35 Topics'}
    />,
    <SubjectCard
      image={require('../../images/crs.png')}
      goToSubject={toSubjectCivEdu}
      subject={'C.R.S'}
      topicSize={'30 Topics'}
    />,
  ]

  return (
    <React.Fragment>
      <div className="subject-card--wrap">
          {subjectListSS3.map((subject, index) => (
            <div className="subject-card d-flex flex-column align-items-center" key={index}>{subject}</div>
          ))}
      </div>
    </React.Fragment>
  )

}

export default Ss3