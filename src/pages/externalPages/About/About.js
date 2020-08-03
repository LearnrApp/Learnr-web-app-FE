import React from 'react'
import Helmet from 'react-helmet'
import Carousel from 'react-bootstrap/Carousel'
import NavBar from '../../../components/navbar/NavBar'
import Footer from '../../../components/Footer'
import AboutCard from './AboutCard'
import '../../../styles/About.css'


const About = () => {
  const documentTitle = 'Learnr | About Us'

  const aboutCardList = [
    <AboutCard
      cardImage={require('../../../images/abt-learn-home.svg')}
      cardTitle={'Learn at Home'}
      cardText={'Learn at your pace and at your convience.'}
    />,
    <AboutCard
      cardImage={require('../../../images/abt-30-subjects.svg')}
      cardTitle={'30+ Subjects'}
      cardText={'Get access to variety of subjects and other resources like technology.'}
    />,
    <AboutCard
      cardImage={require('../../../images/abt-40-tests.svg')}
      cardTitle={'40+ Online Tests'}
      cardText={'Sharpen your horizon by taking our well crafted quiz.'}
    />,
    <AboutCard
      cardImage={require('../../../images/abt-dashboard.svg')}
      cardTitle={'Dashboard'}
      cardText={'Track your progress and level up.'}
    />,
    <AboutCard
      cardImage={require('../../../images/abt-rewards.svg')}
      cardTitle={'Rewards'}
      cardText={'For starting or completing any of our subject you get rewarded.'}
    />,
    <AboutCard
      cardImage={require('../../../images/abt-qna.svg')}
      cardTitle={'Q/A Section'}
      cardText={'Do you have any question? Let us know.'}
    />,
  ]

  return (
    <React.Fragment>
      <Helmet>
        <title>{documentTitle}</title>
        <meta
          name="description"
          content="Find out about Learnr."
        />
      </Helmet>
      <NavBar />
      <div className="container about-wrap">
        <div className="about--vision">
          <div className="about--vision-details">
            <h4 className="">About Us</h4>
            <p className="">
              Learnr is an e-learning platform which presently focuses on providing learning resources to students in the high school division.
              We teach and motivate students to be successful. Our Platform is well drafted with awesome features which makes learning more fun
              and less stressful. 
            </p>
            <h5 className="">Our Mission</h5>
            <p className="">
              Reaching over 20,000 students through the power of e-learning and changing the face of education in Nigeria 
            </p>
            <h5 className="">Our Objective</h5>
            <p className="">
              Reaching over 20,000 students through the power of e-learning and changing the face of education in Nigeria 
            </p>
          </div>
          <img className="about-image" src={require('../../../images/about-img.svg')} alt="" />
        </div>
      </div>
      <div className="about--details container">
        {aboutCardList.map((subject, index) => (
          <div className="" key={index}>{subject}</div>
        ))}
      </div>
      <div className="testimony-wrap">
        <h4 className="mb-4 font-weight-bold text-center">Testimonials</h4>
        <Carousel className="container">
          <Carousel.Item className="text-center">
            <p className="">Great platform, very easy to use and I love the quiz section.. </p>
            <span className="">- Anthony Sanddy from Jss 1</span>
          </Carousel.Item>
          <Carousel.Item className="text-center">
            <p className="">Great platform, very easy to use and I love the quiz section.. </p>
            <span className="">- Anthony Sanddy from Jss 1</span>
          </Carousel.Item>
          <Carousel.Item className="text-center">
            <p className="">Great platform, very easy to use and I love the quiz section.. </p>
            <span className="">- Anthony Sanddy from Jss 1</span>
          </Carousel.Item>
        </Carousel>
      </div>
      <Footer />
    </React.Fragment>
  )
}

export default About