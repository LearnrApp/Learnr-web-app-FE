import React, {useEffect, useRef} from 'react'
import SubjectCard from '../SubjectCard'
import '../../styles/Style.css'
import {gsap, TweenMax} from 'gsap'



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

  let subCards = useRef(null)
  let subCards2 = useRef(null)
  let subCards3 = useRef(null)
  let category = useRef(null)
  let category2 = useRef(null)


  useEffect(() => {
    TweenMax.to(subCards, 0, {css: {visibility: 'visible'}})
    TweenMax.to(subCards2, 0, {css: {visibility: 'visible'}})
    TweenMax.to(subCards3, 0, {css: {visibility: 'visible'}})
    gsap.from(subCards, 1, {scale: 0.2})
    gsap.from(subCards2, 1, {scale: 0.2})
    gsap.from(subCards3, 1, {scale: 0.2})
    gsap.fromTo(category, 0.3, {opacity: 0}, {opacity: 1, delay: 1})
    gsap.fromTo(category2, 0.3, {opacity: 0}, {opacity: 1, delay: 1})
  })

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
      subject={'Physcs'}
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
      <div ref={cards => subCards = cards} className="subject-card--wrap">
          {subjectListSS2General.map((subject, index) => (
            <div className="subject-card d-flex flex-column align-items-center" key={index}>{subject}</div>
          ))}
      </div>
      <span ref={cat => category = cat} className="class-category">Science</span>
      <div ref={cards2 => subCards2 = cards2} className="subject-card--wrap">
          {subjectListSS2Science.map((subject, index) => (
            <div className="subject-card d-flex flex-column align-items-center" key={index}>{subject}</div>
          ))}
      </div>
      <span ref={cat2 => category2 = cat2} className="class-category">Arts</span>
      <div ref={cards3 => subCards3 = cards3} className="subject-card--wrap">
          {subjectListSS2Arts.map((subject, index) => (
            <div className="subject-card d-flex flex-column align-items-center" key={index}>{subject}</div>
          ))}
      </div>
    </React.Fragment>
  )

}

export default Ss2