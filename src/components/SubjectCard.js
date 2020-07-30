import React from 'react'
import '../styles/Style.css'

const SubjectCard = (props) => {
  return(
    <React.Fragment>
      <img className="img-fluid subject-img" src={props.image} onClick={props.goToSubject} alt=""/>
      <span className="my-2 mx-2 subject">{props.subject}</span>
      <span className="my-2 mx-2 topic-size">{props.topicSize}</span>
    </React.Fragment>
  )
}

export default SubjectCard