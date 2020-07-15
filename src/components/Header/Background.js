import React from 'react'
// import { Link } from 'react-router-dom'
import Button from '../Header/Button'

import '../../styles/Style.css'


const Background = () => {
  return (
    <React.Fragment>
      <div className="container-fluid d-flex px-0 header-bg">
        <div className="header--details my-auto">
          <h1 className="header--title">Build the minds of the future</h1>
          <p className="header--text text-white mb-5">
            Learnr is an e-learning platform which presently focuses on providing
            learning resources to students in the high school division.
          </p>
          <div className="d-flex">
            <div className="btn-wrap "><Button link={'/students/signup'} linkText={'Students'} /></div>
            <div className="btn-wrap "><Button link={'/parents/signup'} linkText={'Parents'} /></div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Background