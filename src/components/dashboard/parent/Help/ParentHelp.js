import React, {useState} from 'react'
import Helmet from 'react-helmet'
import {Link} from  'react-router-dom'

import '../../../../styles/UserDashboard.css'
// import '../../styles/Style.css'

const HelpSupport = () => {
  const documentTitle = 'Learnr | Parent Dashboard-Help'


  return (
    <React.Fragment>
      <Helmet>
        <title>{documentTitle}</title>
        <meta
          name="description"
          content="The Help section of the parent dashboard."
        />
      </Helmet>
      <div className="main--wrap" style={{
        backgroundColor: '#F6F6F6',
        height: 'max-content'
      }}>
        <div className="p-3 info-wrap">
          <div className="d-flex align-items-center justify-content-end">
            <img className="mx-3" src={require('../../../../images/bell.svg')} alt="" />
            <span className="mx-3" >Tony Sandy</span>
            <img className="mx-3" src={require('../../../../images/profile-pic.png')} alt="" />
          </div>
          <Link to=""><img className="mx-3 logout-link" src={require('../../../../images/log-in.svg')} alt="" /></Link>
        </div>
        <div className="m-3 pb-5">
          <div className="admin-message-bubble">
            <span className="text-white">
              Hi! I am here for you. Ask me any question.
            </span>
          </div>
          <div className="user-message-bubble">
            <span className="text-white">
              I need more clarity on Self Reliance.
            </span>
          </div>
          <div className="admin-message-bubble">
            <span className="text-white">
              Hi! I am here for you. Ask me any question.
            </span>
          </div>
          {/* <div className="user-message-bubble">
            <span className="text-white">
              I need more clarity on Self Reliance. 
            </span>
          </div>
          <div className="admin-message-bubble">
            <span className="text-white">
              Hi! I am here for you. Ask me any question.
            </span>
          </div>
          <div className="user-message-bubble">
            <span className="text-white">
              Do you love me?
            </span>
          </div> */}
        </div>
          <div className="py-3 px-4 messaging-area fixed-bottom" style={{backgroundColor: '#ECEEEF'}}>
            <div className="d-flex justify-content-between">
              <img className="" src={require('../../../../images/smiley.svg')} alt="" />
              <input className="bg-white mx-3 message-input px-3 w-100" type="text" placeholder="Type a message" />
              <button className="border-0" type="submit"><img className="" src={require('../../../../images/msg-send.svg')} alt="" /></button>
            </div>
          </div>
      </div>
    </React.Fragment>
  )
}

export default HelpSupport