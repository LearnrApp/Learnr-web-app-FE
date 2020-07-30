import React, {useEffect, useRef} from 'react'
import SubjectCard from '../SubjectCard'
import '../../styles/Style.css'


const Js2 = () => {
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

  const subjectListJS2 = [
    <SubjectCard
      image={require('../../images/maths-2.jpg')}
      goToSubject={toSubjectMaths}
      subject={'Mathematics'}
      topicSize={'35 Topics'}
    />,
    <SubjectCard
      image={require('../../images/english-2.jpg')}
      goToSubject={toSubjectEng}
      subject={'English'}
      topicSize={'250 Topics'}
    />,
    <SubjectCard
      image={require('../../images/basic-sci-2.jpg')}
      goToSubject={toSubjectBasSci}
      subject={'Basic Science'}
      topicSize={'300 Topics'}
    />,
    <SubjectCard
      image={require('../../images/basic-tech-2.jpg')}
      goToSubject={toSubjectBasTech}
      subject={'Basic Technology'}
      topicSize={'400 Topics'}
    />,
    <SubjectCard
      image={require('../../images/social-studies-2.jpg')}
      goToSubject={toSubjectSocStud}
      subject={'Social Science'}
      topicSize={'350 Topics'}
    />,
    <SubjectCard
      image={require('../../images/civic-edu-2.jpg')}
      goToSubject={toSubjectCivEdu}
      subject={'Civic Education'}
      topicSize={'40 Topics'}
    />,
  ]

  return (
    <React.Fragment>
      <div ref={subCards} className="subject-card--wrap">
          {subjectListJS2.map((subject, index) => (
            <div className="subject-card d-flex flex-column align-items-center" key={index}>{subject}</div>
          ))}
      </div>
    </React.Fragment>
  )

}

export default Js2