import React, { useRef } from 'react'
import NavBar from '../../components/navbar/NavBar'
import NavBarUser from '../../components/navbar/NavBarUser'
import Helmet from "react-helmet";
import {Link} from "react-router-dom";
import '../../styles/Topics.scss'
import SubjectCard from "../../components/SubjectCard";
import English from "../../images/english.png";
import BasicScience from "../../images/basic-sci.png";
import BasicTech from "../../images/basic-tech.png";


const BiologyTopics = () => {

  const documentTitle = 'Learnr | Biology Articles'

  const link = useRef()

  const getBiology = Object.values(JSON.parse(localStorage.getItem('biologyArticles')))
  console.log(getBiology)
  console.log(getBiology.length)
  const arr = []
  const articleBody = (item) => getBiology.forEach((body) => {
    arr.push(body)
  })
  articleBody(link)
  console.log(arr)

  const subjectListJS1 = [
    <SubjectCard
      image={English}
      // goToSubject={toSubjectEng}
      subject={'English'}
      topicSize={'25 Topics'}
    />,
    <SubjectCard
      image={BasicScience}
      // goToSubject={toSubjectBasSci}
      subject={'Basic Science'}
      topicSize={'30 Topics'}
    />,
    <SubjectCard
      image={BasicTech}
      // goToSubject={toSubjectBasTech}
      subject={'Basic Technology'}
      topicSize={'40 Topics'}
    />,
  ]

  return (
    <React.Fragment>
      <Helmet>
        <title>{documentTitle}</title>
        <meta
          name="description"
          content="Topics relating to Mathematics for Js1 students"
        />
      </Helmet>
      <div>
        <NavBar />
        <NavBarUser />
      </div>
      <div className="container">
        <div className="topics-wrap">
          <h3 className="topic-subject">{`Biology - ${getBiology.length} Topics`}</h3>
          <Link to="/students/dashboard/courses">Go Back</Link>
          <div className="topics-list-wrap">
            <span className="topics-term">First Term</span>
            <div className="topics-list">
              <div className="">
                {/* <Link className="topic-link" to="/articles/mathematics/js1">1 &nbsp; Development of number systems; counting, symbols for numbers and the place-value system</Link> */}
                <span className=" d-flex flex-column" >
                  {getBiology.map((getTopics, index) => {
                    return (
                      <div ref={link} className="topics-item " key={index}>
                        <span onClick={() => {
                          const articleTopic = getTopics.topic
                          const articleContent = getTopics.content
                          const article = {
                            articleTopic,
                            articleContent
                          }
                          console.log(getTopics.content)
                          localStorage.setItem('learnrBiologyArticleBody', JSON.stringify(article))
                          window.open('/biology/article', '_self')
                        }
                          // '/articles/mathematics/js1'
                          // () => {
                          // console.log(getTopics.content)
                        } className="topic-link">{getTopics.topic}</span>
                        <input type="checkbox" className="" />
                      </div>
                    )
                  })}
                </span>
              </div>
              <div className="topics-item">
                <Link className="topic-link" to="">2 &nbsp; Large and small numbers; reading and writing large numbers.</Link>
                <input type="checkbox" className=""/>
              </div>
              <div className="topics-item">
                <Link onClick={e => e.preventDefault()} className="topic-link" to="/">3 &nbsp; Factors and multiples; highest common factors (hcf), multiples, lowest common multiple (lcm)</Link>
                <input type="checkbox" className=""/>
              </div>
              <div className="topics-item">
                <Link onClick={e => e.preventDefault()} className="topic-link" to="/">4 &nbsp; Fractions and percentages; common fractions, equivalent fraction, basic operations on fractions, percentages.</Link>
                <input type="checkbox" className=""/>
              </div>
              <div className="topics-item">
                <Link onClick={e => e.preventDefault()} className="topic-link" to="/">5 &nbsp; Solids; three-dimensional shapes, cuboids and cubes, cylinders and prisms, cones and pyramids, spheres, naming vertices.</Link>
                <input type="checkbox" className=""/>
              </div>
              <div className="topics-item">
                <Link onClick={e => e.preventDefault()} className="topic-link" to="/">6 &nbsp; Algebraic simplification; coefficients, grouping positive and negative terms, word problems.</Link>
                <input type="checkbox" className=""/>
              </div>
              <div className="topics-item">
                <Link onClick={e => e.preventDefault()} className="topic-link" to="/">7 &nbsp; Angles; measurement of angles, angle as rotation, measuring angles, constructing angles.</Link>
                <input type="checkbox" className=""/>
              </div>
              <div className="topics-item">
                <Link onClick={e => e.preventDefault()} className="topic-link" to="/">8 &nbsp; Angles continued; construction of angles.</Link>
                <input type="checkbox" className=""/>
              </div>
              <div className="topics-item">
                <Link onClick={e => e.preventDefault()} className="topic-link" to="/">9 &nbsp; Factors and multiples; highest common factors (hcf), multiples, lowest common multiple (lcm)</Link>
                <input type="checkbox" className=""/>
              </div>
            </div>
          </div>

          <div className="topics-list-wrap">
            <span className="topics-term">Second Term</span>
            <div className="topics-list">
              <div className="topics-item">
                <Link className="topic-link" to="">1 &nbsp; Fractions; decimal and percentages, addition and subtraction, multiplication and division.</Link>
                <input type="checkbox" className=""/>
              </div>
              <div className="topics-item">
                <Link className="topic-link" to="">2 &nbsp; Use of symbols; word problems, algebra from words.</Link>
                <input type="checkbox" className=""/>
              </div>
              <div className="topics-item">
                <Link onClick={e => e.preventDefault()} className="topic-link" to="/">3 &nbsp; Plane shapes; rectangles and squares, triangles, polygons, circles.</Link>
                <input type="checkbox" className=""/>
              </div>
              <div className="topics-item">
                <Link onClick={e => e.preventDefault()} className="topic-link" to="/">4 &nbsp; Direct numbers; the number line, adding and subtracting positive numbers, adding and subtracting negative numbers.</Link>
                <input type="checkbox" className=""/>
              </div>
              <div className="topics-item">
                <Link onClick={e => e.preventDefault()} className="topic-link" to="/">5 &nbsp; Solids; three-dimensional shapes, cuboids and cubes, cylinders and prisms, cones and pyramids, spheres, naming vertices.</Link>
                <input type="checkbox" className=""/>
              </div>
              <div className="topics-item">
                <Link onClick={e => e.preventDefault()} className="topic-link" to="/">6 &nbsp; Perimeter of plane shapes; using formula to calculate perimeter, perimeter of circles.</Link>
                <input type="checkbox" className=""/>
              </div>
              <div className="topics-item">
                <Link onClick={e => e.preventDefault()} className="topic-link" to="/">7 &nbsp; Area of plane shape; area of rectangles and squares, area of parallelograms, area of triangles and trapeziums, area of circles.</Link>
                <input type="checkbox" className=""/>
              </div>
              <div className="topics-item">
                <Link onClick={e => e.preventDefault()} className="topic-link" to="/">8 &nbsp; Algebraic simplification; brackets, multiplication and division of algebraic terms, order of operations, removing brackets.</Link>
                <input type="checkbox" className=""/>
              </div>
              <div className="topics-item">
                <Link onClick={e => e.preventDefault()} className="topic-link" to="/">9 &nbsp; Volume of solids; volume of cuboids and cubes.</Link>
                <input type="checkbox" className=""/>
              </div>
              <div className="topics-item">
                <Link onClick={e => e.preventDefault()} className="topic-link" to="/">10 &nbsp; Volume of right angled triangular prism, capacity of containers.</Link>
                <input type="checkbox" className=""/>
              </div>
              <div className="topics-item">
                <Link onClick={e => e.preventDefault()} className="topic-link" to="/">11 &nbsp; Volume of solids; volume of cuboids and cubes 2.</Link>
                <input type="checkbox" className=""/>
              </div>
            </div>
          </div>

          <div className="topics-list-wrap">
            <span className="topics-term">Third Term</span>
            <div className="topics-list">
              <div className="topics-item">
                <Link className="topic-link" to="">1 &nbsp; Statistics; purpose and data collection, the need for statistics.</Link>
                <input type="checkbox" className=""/>
              </div>
              <div className="topics-item">
                <Link className="topic-link" to="">2 &nbsp; Statistics continued; types of presentation, list and tables, graphical presentation.</Link>
                <input type="checkbox" className=""/>
              </div>
              <div className="topics-item">
                <Link onClick={e => e.preventDefault()} className="topic-link" to="/">3 &nbsp; Simple equations; solution of an equation.</Link>
                <input type="checkbox" className=""/>
              </div>
              <div className="topics-item">
                <Link onClick={e => e.preventDefault()} className="topic-link" to="/">4 &nbsp; Angles between lines; angles in a triangle, calculating the sizes of angles, parallel lines, angles in a triangle.</Link>
                <input type="checkbox" className=""/>
              </div>
              <div className="topics-item">
                <Link onClick={e => e.preventDefault()} className="topic-link" to="/">5 &nbsp; Geometrical constructions; construction of parallel lines and an angle of 60 & 90, construction of perpendiculars.</Link>
                <input type="checkbox" className=""/>
              </div>
              <div className="topics-item">
                <Link onClick={e => e.preventDefault()} className="topic-link" to="/">6 &nbsp; Statistics; averages, the mean, the median, the mode.</Link>
                <input type="checkbox" className=""/>
              </div>
              <div className="topics-item">
                <Link onClick={e => e.preventDefault()} className="topic-link" to="/">7 &nbsp; Estimation and approximation; rounding off numbers, approximation.</Link>
                <input type="checkbox" className=""/>
              </div>
              <div className="topics-item">
                <Link onClick={e => e.preventDefault()} className="topic-link" to="/">8 &nbsp; Base 2 arithmetic; number bases, binary numbers, operations with binary numbers.</Link>
                <input type="checkbox" className=""/>
              </div>
              <div className="topics-item">
                <Link onClick={e => e.preventDefault()} className="topic-link" to="/">9 &nbsp; Statistics; averages, the mean, the median, the mode.</Link>
                <input type="checkbox" className=""/>
              </div>
            </div>
          </div>
        </div>

        <React.Fragment>
          <h4 className="topic-subject">Recommendations</h4>
          <div className="recommended-wrap">
            {subjectListJS1.map((subject, index) => (
              <div className="subject-card d-flex flex-column align-items-center" key={index}>{subject}</div>
            ))}
          </div>
        </React.Fragment>
      </div>
    </React.Fragment>
  )
}

export default BiologyTopics