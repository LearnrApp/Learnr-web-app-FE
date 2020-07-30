import React, {useEffect, useRef} from 'react'
import SubjectCard from '../SubjectCard'
import '../../styles/Style.css'


const General = () => {
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


  const General = [
    <SubjectCard
      image={require('../../images/code-img.png')}
      goToSubject={toSubjectMaths}
      subject={'Introduction to Programming'}
      topicSize={'23 Topics'}
    />,
    <SubjectCard
      image={require('../../images/dm-img.png')}
      goToSubject={toSubjectEng}
      subject={'Digital Marketing for Beginners'}
      topicSize={'25 Topics'}
    />,
    <SubjectCard
      image={require('../../images/photo-img.png')}
      goToSubject={toSubjectBasSci}
      subject={'Photography Fundamentals'}
      topicSize={'40 Topics'}
    />,
    <SubjectCard
      image={require('../../images/g-design-img.png')}
      goToSubject={toSubjectBasTech}
      subject={'Graphic Design Basics'}
      topicSize={'40 Topics'}
    />,
    <SubjectCard
      image={require('../../images/fashion-img.png')}
      goToSubject={toSubjectSocStud}
      subject={'Fashion Designing'}
      topicSize={'35 Topics'}
    />,
    <SubjectCard
      image={require('../../images/event-img.png')}
      goToSubject={toSubjectCivEdu}
      subject={'Event Management'}
      topicSize={'30 Topics'}
    />,
  ]

  return (
    <React.Fragment>
      <div ref={subCards} className="subject-card--wrap">
          {General.map((subject, index) => (
            <div className="subject-card d-flex flex-column align-items-center" key={index}>{subject}</div>
          ))}
      </div>
    </React.Fragment>
  )

}

export default General