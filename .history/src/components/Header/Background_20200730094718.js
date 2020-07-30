import React, {useRef, useEffect} from 'react';
import Button from '../Header/Button'
import '../../styles/Style.css'


const Background = () => {
  let headerTitle = useRef()
  let headerText = useRef()
  let headerBtnStud = useRef()
  let headerBtnPar = useRef()
 

  return (
    <React.Fragment>
      <div className="container-fluid d-flex px-0 header-bg">
        <div className="header--details my-auto">
          <h1 ref={headerTitle} className="header--title">Build the minds of the future</h1>
          <p ref={headerText} className="header--text text-white mb-5">
            Learnr is an e-learning platform which presently focuses on providing
            learning resources to students in the high school division.
          </p>
          <div className="d-flex">
            <div ref={headerBtnStud} className="btn-wrap "><Button link={'/students/signup'} linkText={'Students'} /></div>
            <div ref={headerBtnPar} className="btn-wrap "><Button link={'/parents/signup'} linkText={'Parents'} /></div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Background