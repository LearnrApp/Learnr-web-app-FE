import React from 'react'
import '../../../styles/About.css'


const AboutCard = (props) => {
  return (
    <React.Fragment>
      <div className="abt-card-wrap">
        <img className="" src={props.cardImage} alt="" />
        <span className="font-weight-bold">{props.cardTitle}</span>
        <p className="abt-card--text">{props.cardText}</p>
      </div>
    </React.Fragment>
  )
}

export default AboutCard