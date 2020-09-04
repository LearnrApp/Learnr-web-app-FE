import React, { useState, useLayoutEffect } from 'react'
import Helmet from 'react-helmet'
import {Link} from  'react-router-dom'
import FaqItem from './FaqItem'
import ParentHelp from './ParentHelp'
import getCurrentUser from '../../components/Utils/AuthUtils'



const Faq = () => {
  const documentTitle = 'Learnr | FAQ'

  useLayoutEffect(() => {
    getCurrentUser()
    if(getCurrentUser()) {
      return window.open('/students/dashboard/courses', '_self')
    }
  }, [])

  const FaqList = [
    <FaqItem question={'Do I get a discount if I register more than two children'} />,
    <FaqItem question={'Do I get a discount if I register more than two children'} />,
    <FaqItem question={'Do I get a discount if I register more than two children'} />,
    <FaqItem question={'Do I get a discount if I register more than two children'} />,
  ]
  const [faqDefault, helpChat] = useState(FaqList)

  return (
    <React.Fragment>
      <Helmet>
        <title>{documentTitle}</title>
        <meta
          name="description"
          content="Frequently Asked Questions."
        />
      </Helmet>
      <div className="main--wrap" style={{
        backgroundColor: '#F6F6F6',
        height: '100vw'
      }}>
        <div className="p-3 info-wrap">
          <div className="d-flex align-items-center justify-content-end">
            <img className="mx-3" src={require('../../../../images/bell.svg')} alt="" />
            <span className="mx-3" >Tony Sandy</span>
            <img className="mx-3" src={require('../../../../images/profile-pic.png')} alt="" />
          </div>
          <Link to=""><img className="mx-3 logout-link" src={require('../../../../images/log-in.svg')} alt="" /></Link>
        </div>
        <div className="text-center">Can’t find an answer? <span onClick={helpChat(<ParentHelp />)}>Click Here</span></div>
        <React.Fragment>
          {FaqList.map((subject, index) => (
            <div className="container" key={index}>{faqDefault}</div>
          ))}
        </React.Fragment>
      </div>
    </React.Fragment>
  )
}

export default Faq