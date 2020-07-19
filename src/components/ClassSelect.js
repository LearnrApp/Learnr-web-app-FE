import React, {useState} from 'react'
// import {Link} from 'react-router-dom'
import Dropdown from 'react-bootstrap/Dropdown'
import '../styles/Style.css'
import {gsap} from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Js1 from './classSelect/WelcomeJs1'
import Js2 from './classSelect/WelcomeJs2'
import Js3 from './classSelect/WelcomeJs3'
import Ss1 from './classSelect/WelcomeSs1'
import Ss2 from './classSelect/WelcomeSs2'
import Ss3 from './classSelect/WelcomeSs3'
import General from './classSelect/WelcomeGeneral'

gsap.registerPlugin(ScrollTrigger);


const ClassSelect = () => {
  
  const [subjects, nextSubject] = useState(<Js1 />)
  const [dropValue, updateDropValue] = useState('Js 1')

  return (
    <React.Fragment>
      <div className="container-fluid bg-white px-0">
        <div className="container explore-wrap">
          <h3 className="text-center py-3 class-explore">Explore</h3>
          <div id="classes" className="classes d-flex justify-content-between align-items-center mx-auto">
            <div onClick={() => {
              nextSubject(<Js1 />)
            }} className="class-linkd"><span>Js 1</span></div>

            <div onClick={() => {
              nextSubject(<Js2 />)
            }} className="class-linkd"><span>Js 2</span></div>

            <div onClick={() => {
              nextSubject(<Js3 />)
            }} className="class-linkd"><span>Js 3</span></div>

            <div onClick={() => {
              nextSubject(<Ss1 />)
            }} className="class-linkd"><span>Ss 1</span></div>

            <div onClick={() => {
              nextSubject(<Ss2 />)
            }} className="class-linkd"><span>Ss 2</span></div>

            <div onClick={() => {
              nextSubject(<Ss3 />)
            }} className="class-linkd"><span>Ss 3</span></div>

            <div onClick={() => {
              nextSubject(<General />)
            }} className="class-linkd"><span>General</span></div>
          </div>
          {/* <div className=""></div> */}
          {/* <Dropdown name={'class'} classes={classes} label={''} /> */}
          <Dropdown className="d-block my-2">
            <Dropdown.Toggle id="dropdown-basic">
              {dropValue}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item onClick={() => {
                nextSubject(<Js1 />)
                updateDropValue('Js 1')
              }}>Js 1</Dropdown.Item>
              <Dropdown.Item onClick={() => {
                nextSubject(<Js2 />)
                updateDropValue('Js 2')
              }}>Js 2</Dropdown.Item>
              <Dropdown.Item onClick={() => {
                nextSubject(<Js3 />)
                updateDropValue('Js 3')
              }}>Js 3</Dropdown.Item>
              <Dropdown.Item onClick={() => {
                nextSubject(<Ss1 />)
                updateDropValue('Ss 1')
              }}>Ss 1</Dropdown.Item>
              <Dropdown.Item onClick={() => {
                nextSubject(<Ss2 />)
                updateDropValue('Ss 2')
              }}>Ss 2</Dropdown.Item>
              <Dropdown.Item onClick={() => {
                nextSubject(<Ss3 />)
                updateDropValue('Ss 3')
              }}>Ss 3</Dropdown.Item>
              <Dropdown.Item onClick={() => {
                nextSubject(<General />)
                updateDropValue('General')
              }}>General</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
          <div className="d-flex justify-content-center">
          <div className="subject-card--wra">
                {/* {subjects.map((subject, index) => (
                  <div className="subject-card d-flex flex-column align-items-center" key={index}>{subject}</div>
                ))} */}
                {subjects}
          </div>
        </div>
        </div>
    </React.Fragment>
  )
}

export default ClassSelect