import React, {useEffect, useRef} from 'react'
import SubjectCard from '../SubjectCard'
import '../../styles/Style.css'



const Ss2 = () => {
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


  const subjectListSS2General = [
    <SubjectCard
      image={require('../../images/senior-maths-2.jpg')}
      goToSubject={toSubjectMaths}
      subject={'Mathematics'}
      topicSize={'23 Topics'}
    />,
    <SubjectCard
      image={require('../../images/senior-english-2.jpg')}
      goToSubject={toSubjectEng}
      subject={'English'}
      topicSize={'25 Topics'}
    />,
    <SubjectCard
      image={require('../../images/economics-2.jpg')}
      goToSubject={toSubjectBasSci}
      subject={'Economics'}
      topicSize={'40 Topics'}
    />,
  ]

  const subjectListSS2Science = [
    <SubjectCard
      image={require('../../images/biology-2.jpg')}
      goToSubject={toSubjectBasTech}
      subject={'Biology'}
      topicSize={'40 Topics'}
    />,
    <SubjectCard
      image={require('../../images/physics-2.jpg')}
      goToSubject={toSubjectSocStud}
      subject={'Physics'}
      topicSize={'35 Topics'}
    />,
    <SubjectCard
      image={require('../../images/chemistry-2.jpg')}
      goToSubject={toSubjectCivEdu}
      subject={'Chemistry'}
      topicSize={'30 Topics'}
    />,
  ]

  const subjectListSS2Arts = [
    <SubjectCard
      image={require('../../images/literature-2.jpg')}
      goToSubject={toSubjectBasTech}
      subject={'Literature'}
      topicSize={'40 Topics'}
    />,
    <SubjectCard
      image={require('../../images/government-2.jpg')}
      goToSubject={toSubjectSocStud}
      subject={'Government'}
      topicSize={'35 Topics'}
    />,
    <SubjectCard
      image={require('../../images/crs-2.jpg')}
      goToSubject={toSubjectCivEdu}
      subject={'C.R.S'}
      topicSize={'30 Topics'}
    />,
  ]

  return (
    <React.Fragment>
      <div ref={subCards} className="subject-card--wrap">
          {subjectListSS2General.map((subject, index) => (
            <div className="subject-card d-flex flex-column align-items-center" key={index}>{subject}</div>
          ))}
      </div>
      <span ref={category} className="class-category">Science</span>
      <div ref={subCards2} className="subject-card--wrap">
          {subjectListSS2Science.map((subject, index) => (
            <div className="subject-card d-flex flex-column align-items-center" key={index}>{subject}</div>
          ))}
      </div>
      <span ref={ category2} className="class-category">Arts</span>
      <div ref={subCards3} className="subject-card--wrap">
          {subjectListSS2Arts.map((subject, index) => (
            <div className="subject-card d-flex flex-column align-items-center" key={index}>{subject}</div>
          ))}
      </div>
    </React.Fragment>
  )

}

export default Ss2