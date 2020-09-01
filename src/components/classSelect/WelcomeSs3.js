import React, {useEffect, useRef} from 'react'
import SubjectCard from '../SubjectCard'
import '../../styles/Style.css'

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

  let subCards = useRef()
  let subCards2 = useRef()
  let subCards3 = useRef()
  let category = useRef()
  let category2 = useRef()


  const subjectListSS3General = [
    <SubjectCard
      image={require('../../images/senior-maths-3.jpg')}
      goToSubject={toSubjectMaths}
      subject={'Mathematics'}
      topicSize={'23 Topics'}
    />,
    <SubjectCard
      image={require('../../images/senior-english-3.png')}
      goToSubject={toSubjectEng}
      subject={'English'}
      topicSize={'25 Topics'}
    />,
    <SubjectCard
      image={require('../../images/economics-3.jpg')}
      goToSubject={toSubjectBasSci}
      subject={'Economics'}
      topicSize={'40 Topics'}
    />,
  ]

  const subjectListSS3Science = [
    <SubjectCard
      image={require('../../images/biology-3.jpg')}
      goToSubject={toSubjectBasTech}
      subject={'Biology'}
      topicSize={'40 Topics'}
    />,
    <SubjectCard
      image={require('../../images/physics-3.jpg')}
      goToSubject={toSubjectSocStud}
      subject={'Physics'}
      topicSize={'35 Topics'}
    />,
    <SubjectCard
      image={require('../../images/chemistry-3.jpg')}
      goToSubject={toSubjectCivEdu}
      subject={'Chemistry'}
      topicSize={'30 Topics'}
    />,
  ]

  const subjectListSS3Arts = [
    <SubjectCard
      image={require('../../images/literature-3.jpg')}
      goToSubject={toSubjectBasTech}
      subject={'Literature'}
      topicSize={'40 Topics'}
    />,
    <SubjectCard
      image={require('../../images/government-3.jpg')}
      goToSubject={toSubjectSocStud}
      subject={'Government'}
      topicSize={'35 Topics'}
    />,
    <SubjectCard
      image={require('../../images/crs-3.jpg')}
      goToSubject={toSubjectCivEdu}
      subject={'C.R.S'}
      topicSize={'30 Topics'}
    />,
  ]

  return (
    <React.Fragment>
      <div ref={subCards} className="subject-card--wrap">
          {subjectListSS3General.map((subject, index) => (
            <div className="subject-card d-flex flex-column align-items-center" key={index}>{subject}</div>
          ))}
      </div>
      <span ref={category} className="class-category">Science</span>
      <div ref={subCards2} className="subject-card--wrap">
          {subjectListSS3Science.map((subject, index) => (
            <div className="subject-card d-flex flex-column align-items-center" key={index}>{subject}</div>
          ))}
      </div>
      <span ref={category2} className="class-category">Arts</span>
      <div ref={subCards3} className="subject-card--wrap">
          {subjectListSS3Arts.map((subject, index) => (
            <div className="subject-card d-flex flex-column align-items-center" key={index}>{subject}</div>
          ))}
      </div>
    </React.Fragment>
  )

}

export default Ss3