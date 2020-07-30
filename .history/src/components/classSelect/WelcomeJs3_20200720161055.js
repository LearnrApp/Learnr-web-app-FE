import React, {useEffect, useRef} from 'react'
import SubjectCard from '../SubjectCard'
import '../../styles/Style.css'
import {gsap, TweenMax} from 'gsap'



const Js3 = () => {
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

  let subCards = useRef(null)
  useEffect(() => {
    TweenMax.to(subCards, 0, {css: {visibility: 'visible'}})
    gsap.from(subCards, 1, {scale: 0.2})
  })

  const subjectListJS3 = [
    <SubjectCard
      image={require('../../images/maths-3.jpg')}
      goToSubject={toSubjectMaths}
      subject={'Mathematics'}
      topicSize={'23 Topics'}
    />,
    <SubjectCard
      image={require('../../images/english-3.png')}
      goToSubject={toSubjectEng}
      subject={'English'}
      topicSize={'25 Topics'}
    />,
    <SubjectCard
      image={require('../../images/basic-sci-3.jpg')}
      goToSubject={toSubjectBasSci}
      subject={'Basic Science'}
      topicSize={'40 Topics'}
    />,
    <SubjectCard
      image={require('../../images/basic-tech-3.jpg')}
      goToSubject={toSubjectBasTech}
      subject={'Basic Technology'}
      topicSize={'40 Topics'}
    />,
    <SubjectCard
      image={require('../../images/social-studies-3.jpg')}
      goToSubject={toSubjectSocStud}
      subject={'Social Science'}
      topicSize={'35 Topics'}
    />,
    <SubjectCard
      image={require('../../images/civic-edu-3.jpg')}
      goToSubject={toSubjectCivEdu}
      subject={'Civic Education'}
      topicSize={'30 Topics'}
    />,
  ]

  return (
    <React.Fragment>
      <div ref={cards => subCards = cards} className="subject-card--wrap">
          {subjectListJS3.map((subject, index) => (
            <div className="subject-card d-flex flex-column align-items-center" key={index}>{subject}</div>
          ))}
      </div>
    </React.Fragment>
  )

}

export default Js3