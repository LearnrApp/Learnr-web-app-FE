import React from 'react';
// import {Link} from 'react-router-dom';
import '../styles/Style.css'
import NavBar from '../components/navbar/NavBar'
import Footer from '../components/Footer'
import Background from '../components/Header/Background'
import ClassSelect from '../components/ClassSelect'
import ButtonV2 from '../components/Header/ButtonV2'

const About = () => {
    return (
      <React.Fragment>
        <NavBar />
        <div className="mt-4 d-flex justify-content-center border">
          <div className="demo--wrap">
            <div className="demo-text">
              <h3>About US</h3>
              <p>
                Learnr provides a dashboard for you to monitor the 
                progress of your child and view the awards earned
                by the child. 
              </p>
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
  
  export default About;