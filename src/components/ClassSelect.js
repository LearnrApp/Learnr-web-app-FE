import React, {useState} from 'react'
// import {Link} from 'react-router-dom'
import Dropdown from './Dropdown'
import SubjectCard from './SubjectCard'
import Mathematics from '../images/maths.png'
import English from '../images/english.png'
import BasicScience from '../images/basic-sci.png'
import BasicTech from '../images/basic-tech.png'
import SocialSci from '../images/social-studies.png'
import CivicEdu from '../images/civic-edu.png'
import '../styles/Style.css'


const ClassSelect = () => {
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

  const classes = [
    {
      id: "1",
      name: "Jss 1"
    },
    {
      id: "2",
      name: "Jss 2"
    },
    {
      id: "3",
      name: "Jss 3"
    },
    {
      id: "4",
      name: "Sss 1"
    },
    {
      id: "5",
      name: "Sss 2"
    },
    {
      id: "6",
      name: "Sss 3"
    }
  ];

  const subjectList = [
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
  const subjectList2 = [
    <SubjectCard
      image={Mathematics}
      goToSubject={toSubjectMaths}
      subject={'Mathematics'}
      topicSize={'290 Topics'}
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
  const [subjects, nextSubject] = useState(subjectList)

  return (
    <React.Fragment>
      <div className="container-fluid bg-white px-0">
        <div className="container explore-wrap">
          <h3 className="text-center pt-4 pb-2 class-explore">Explore</h3>
          <div className="classes d-flex justify-content-between align-items-center mx-auto mt-2 mb-4">
            <span onClick={() => {
              nextSubject(subjectList2)
            }} className="class-item ">Js 1</span>

            <span onClick={() => { }} className="class-link">Js 2</span>

            <span className="class-link">Js 3</span>
            <span className="class-link">Ss 1</span>
            <span className="class-link">Ss 2</span>
            <span className="class-link">Ss 3</span>
            <span className="class-link">General</span>
          </div>
          {/* <div className=""></div> */}
          <Dropdown name={'class'} classes={classes} label={''} />
        </div>
          <div className="d-flex justify-content-center">
          <div className="subject-card--wrap">
                {subjects.map((subject, index) => (
                  <div className="subject-card d-flex flex-column align-items-center" key={index}>{subject}</div>
                ))}
          </div>
        </div>
        </div>
    </React.Fragment>
  )
}

export default ClassSelect