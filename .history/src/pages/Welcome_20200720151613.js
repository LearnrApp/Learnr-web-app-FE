import React, {useRef, useEffect} from 'react';
// import {Link} from 'react-router-dom';
import '../styles/Style.css'
import NavBar from '../components/navbar/NavBar'
import Footer from '../components/Footer'
import Background from '../components/Header/Background'
import ClassSelect from '../components/ClassSelect'
import ButtonV2 from '../components/Header/ButtonV2'
import {gsap, TweenMax} from 'gsap'
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);



const Welcome = () => {
  let welcome = useRef(null)

  useEffect(() => {
    TweenMax.to(welcome, 0, {css: {visibility: 'visible'}})
  })

  return (
    <React.Fragment>
      <div className="welcome-body" ref={body => welcome = body}>
        <NavBar />
        <Background />
        <ClassSelect />
        <div className="d-flex justify-content-center">
          <div
          className="demo--wrap">
            <div className="demo-text">
              <h3 className="demo-category">Parents</h3>
              <p>
                Learnr provides a dashboard for you to monitor the 
                progress of your child and view the awards earned
                by the child. 
              </p>
              <ButtonV2 link={'/parents/signup'} linkText={'Get Started'} />
            </div>
            <div className="demo-image">
              <img className="img-fluid" src={require('../images/demo-image.png')} alt="" />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </React.Fragment>
  )
}

export default Welcome;