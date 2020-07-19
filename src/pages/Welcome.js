import React, {useRef, useEffect} from 'react';
// import {Link} from 'react-router-dom';
import '../styles/Style.css'
import NavBar from '../components/navbar/NavBar'
import Footer from '../components/Footer'
import Background from '../components/Header/Background'
import ClassSelect from '../components/ClassSelect'
import ButtonV2 from '../components/Header/ButtonV2'
import {gsap} from 'gsap'
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);



const Welcome = () => {
  let demoImage = useRef(null)
  useEffect(() => {
    gsap.fromTo(
      demoImage,
      {
        x: 0, y: 300, opacity: 0
      },
      {
        ScrollTrigger: {
          trigger: demoImage,
          toggleActions: 'restart none none reverse',
          markers: true
        },
        x: 0,
        y: 0,
        opacity: 1,
        // delay: 10,
        duration: 1,
        ease: 'back',
      }
    )
  })

  return (
    <React.Fragment>
      <NavBar />
      <Background />
      <ClassSelect />
      <div className="mt-4 d-flex justify-content-center border">
        <div
        ref={a => {demoImage = a}}
        className="demo--wrap">
          <div className="demo-text">
            <h3>Parents</h3>
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
    </React.Fragment>
  )
}

export default Welcome;