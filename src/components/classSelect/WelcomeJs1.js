import React, {useEffect, useRef} from 'react'
import SubjectCard from '../SubjectCard'
import Mathematics from '../../images/maths.png'
import English from '../../images/english.png'
import BasicScience from '../../images/basic-sci.png'
import BasicTech from '../../images/basic-tech.png'
import SocialSci from '../../images/social-studies.png'
import CivicEdu from '../../images/civic-edu.png'
import '../../styles/Style.css'


const Js1 = () => {
  const toSubjectMaths = () => {
    window.open('/topics/mathematics/js1', '_self');
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

  const subjectListJS1 = [
    <SubjectCard
      image={Mathematics}
      goToSubject={toSubjectMaths}
      subject={'Mathematics'}
      topicSize={'29 Topics'}
    />,
    <SubjectCard
      image={English}
      goToSubject={toSubjectEng}
      subject={'English'}
      topicSize={'25 Topics'}
    />,
    <SubjectCard
      image={BasicScience}
      goToSubject={toSubjectBasSci}
      subject={'Basic Science'}
      topicSize={'30 Topics'}
    />,
    <SubjectCard
      image={BasicTech}
      goToSubject={toSubjectBasTech}
      subject={'Basic Technology'}
      topicSize={'40 Topics'}
    />,
    <SubjectCard
      image={SocialSci}
      goToSubject={toSubjectSocStud}
      subject={'Social Science'}
      topicSize={'35 Topics'}
    />,
    <SubjectCard
      image={CivicEdu}
      goToSubject={toSubjectCivEdu}
      subject={'Civic Education'}
      topicSize={'40 Topics'}
    />,
  ]

  return (
    <React.Fragment>
      <div ref={subCards} className="subject-card--wrap">
          {subjectListJS1.map((subject, index) => (
            <div className="subject-card d-flex flex-column align-items-center" key={index}>{subject}</div>
          ))}
      </div>
    </React.Fragment>
  )

}

export default Js1