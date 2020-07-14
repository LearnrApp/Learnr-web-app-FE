import React from 'react';
// import {Link} from 'react-router-dom';
import '../styles/Style.css'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Background from '../components/Header/Background'
import ClassSelect from '../components/ClassSelect'
import Button from '../components/Header/Button'


const Welcome = () => {
  return (
    <React.Fragment>
      <NavBar />
      <Background />
      <ClassSelect />
      <div className="mt-4 d-flex justify-content-center border">
        <div className="demo--wrap">
          <div className="demo-text">
            <h3>Parents</h3>
            <p>
              Learnr provides a dashboard for you to monitor the 
              progress of your child and view the awards earned
              by the child. 
            </p>
            <Button link={'/parents/signup'} linkText={'Get Started'} />
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