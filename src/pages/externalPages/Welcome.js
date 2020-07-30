import React, {useRef, useEffect} from 'react';
import Helmet from 'react-helmet'
// import {Link} from 'react-router-dom';
import '../../styles/Style.css'
import NavBar from '../../components/navbar/NavBar'
import Footer from '../../components/Footer'
import Background from '../../components/Header/Background'
import ClassSelect from '../../components/ClassSelect'
import ButtonV2 from '../../components/Header/ButtonV2'

const Welcome = () => {
  let welcome = useRef()
  const documentTitle = 'Learnr | Welcome'

  return (
    <React.Fragment>
      <Helmet>
        <title>{documentTitle}</title>
        <meta
          name="description"
          content="Welcome to Learnr. Explore available courses."
        />
      </Helmet>
      <div className="welcome-body" ref={welcome}>
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
              <img className="img-fluid" src={require('../../images/demo-image.png')} alt="" />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </React.Fragment>
  )
}

export default Welcome;