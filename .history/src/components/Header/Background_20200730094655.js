import React, {useRef, useEffect} from 'react';
import Button from '../Header/Button'
import {gsap, Power3} from 'gsap'
import '../../styles/Style.css'


const Background = () => {
  let headerTitle = useRef()
  let headerText = useRef()
  let headerBtnStud = useRef()
  let headerBtnPar = useRef()
  useEffect(() => {
    gsap.from(headerTitle, 1.4, {y: -500, ease: Power3.easeOut})
    gsap.from(headerText, 1.5, {y: -700, ease: Power3.easeOut, delay: 0.5})
    gsap.from(headerBtnStud, 1.4, {x: -600, ease: Power3.easeOut})
    gsap.from(headerBtnPar, 1.5, {x: -700, ease: Power3.easeOut, delay: 0.5})
  })

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