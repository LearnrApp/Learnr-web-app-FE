import React from 'react'
import NavBar from '../../components/navbar/NavBar'
import Helmet from "react-helmet";
import {Link} from "react-router-dom";
import '../../styles/Articles.scss'


const ChemistryArticle = () => {

  const documentTitle = 'Learnr | Chemistry'

  const getChemistryArticle = JSON.parse(localStorage.getItem('learnrChemistryArticleBody'))

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
        <div className="article-wrap">
          <div className="page-selector">
            <span className="selected-page">Article</span>
            {/* <span className="unselected-page">Quiz</span> */}
          </div>
          <h3 className="article-subject">Chemistry</h3>
          {/* <p className="article-topic">Development of number systems; counting, symbols for numbers and the place-value system</p> */}
          <div className="d-flex">
            <Link to='/chemistry/topics' className="">Topics&nbsp;&gt;</Link>
            <span className="d-block pl-2">{getChemistryArticle.articleTopic}</span>
          </div>
        </div>
        <div className="video-wra">
          {/* <iframe width="650" height="480" src="https://www.youtube.com/embed/ku4KOFQ-bB4" frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen></iframe> */}
        </div>

        <div className="main-article">
          <article className="section-article">
            <h5 className="section-heading">Introduction</h5>
            <p className="section-paragraph">
            <div dangerouslySetInnerHTML={{__html: getChemistryArticle.articleContent}} />
            </p>
          </article>
          
        </div>
      </div>
    </React.Fragment>
  )
}



export default ChemistryArticle