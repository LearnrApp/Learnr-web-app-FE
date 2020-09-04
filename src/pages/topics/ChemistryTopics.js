import React, { useRef } from 'react'
import NavBar from '../../components/navbar/NavBar'
import Helmet from "react-helmet";
import {Link} from "react-router-dom";
import '../../styles/Topics.scss'
import SubjectCard from "../../components/SubjectCard";
import English from "../../images/english.png";
import BasicScience from "../../images/basic-sci.png";
import BasicTech from "../../images/basic-tech.png";


const ChemistryTopics = () => {

  const documentTitle = 'Learnr | Chemistry Articles'

  const link = useRef()

  const getChemistry = Object.values(JSON.parse(localStorage.getItem('chemistryArticles')))
  console.log(getChemistry)
  console.log(getChemistry.length)
  const arr = []
  const articleBody = (item) => getChemistry.forEach((body) => {
    arr.push(body)
  })
  articleBody(link)
  console.log(arr)

  // const subjectListJS1 = [
  //   <SubjectCard
  //     image={English}
  //     // goToSubject={toSubjectEng}
  //     subject={'English'}
  //     topicSize={'25 Topics'}
  //   />,
  //   <SubjectCard
  //     image={BasicScience}
  //     // goToSubject={toSubjectBasSci}
  //     subject={'Basic Science'}
  //     topicSize={'30 Topics'}
  //   />,
  //   <SubjectCard
  //     image={BasicTech}
  //     // goToSubject={toSubjectBasTech}
  //     subject={'Basic Technology'}
  //     topicSize={'40 Topics'}
  //   />,
  // ]

  return (
    <React.Fragment>
      <Helmet>
        <title>{documentTitle}</title>
        <meta
          name="description"
          content="Topics relating to Chemistry for Js1 students"
        />
      </Helmet>
      <div>
        <NavBar />
      </div>
      <div className="container">
        <div className="topics-wrap">
          <h3 className="topic-subject">{`Chemistry - ${getChemistry.length} Topics`}</h3>
          <Link to="/students/dashboard/courses">Go Back</Link>
          <div className="topics-list-wrap">
            {/* <span className="topics-term">First Term</span> */}
            <div className="topics-list">
              <div className="">
                {/* <Link className="topic-link" to="/articles/mathematics/js1">1 &nbsp; Development of number systems; counting, symbols for numbers and the place-value system</Link> */}
                <span className=" d-flex flex-column" >
                  {getChemistry.map((getTopics, index) => {
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
                          localStorage.setItem('learnrChemistryArticleBody', JSON.stringify(article))
                          window.open('/chemistry/article', '_self')
                        }
                          // '/articles/mathematics/js1'
                          // () => {
                          // console.log(getTopics.content)
                        } style={{cursor: 'pointer'}} className="topic-link">{getTopics.topic}</span>
                        <input type="checkbox" className="" />
                      </div>
                    )
                  })}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* <React.Fragment>
          <h4 className="topic-subject">Recommendations</h4>
          <div className="recommended-wrap">
            {subjectListJS1.map((subject, index) => (
              <div className="subject-card d-flex flex-column align-items-center" key={index}>{subject}</div>
            ))}
          </div>
        </React.Fragment> */}
      </div>
    </React.Fragment>
  )
}

export default ChemistryTopics