import React, {useState} from 'react'
import Helmet from 'react-helmet'
import { Modal, ModalBody } from 'reactstrap';

import '../../../../styles/UserDashboard.css'
// import '../../styles/Style.css'

const HelpSupport = () => {
  const documentTitle = 'Learnr | Student Dashboard-Help'

  const studentData = JSON.parse(localStorage.getItem('learnrStudentProfile'))

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  return (
    <React.Fragment>
      <Helmet>
        <title>{documentTitle}</title>
        <meta
          name="description"
          content="The Help section of the student dashboard."
        />
      </Helmet>
      <div className="main--wrap" style={{
        backgroundColor: '#F6F6F6',
        height: 'max-content'
      }}>
        <div className="p-3 info-wrap">
          <div className="d-flex align-items-center justify-content-end">
            <img className="mx-3" src={require('../../../../images/bell.svg')} alt="" />
            <span className="mx-3" >{studentData.fullName}</span>
            <img className="mx-3" src={require('../../../../images/profile-pic.png')} alt="" />
          </div>
          <div onClick={() => toggle()}><img className="mx-3 logout-link" src={require('../../../../images/log-in.svg')} alt="" /></div>
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
          <div className="user-message-bubble">
            <span className="text-white">
              Do you love me?
            </span>
          </div>
        </div>
          <div className="py-3 px-4 messaging-area fixed-bottom" style={{backgroundColor: '#ECEEEF'}}>
            <div className="d-flex justify-content-between">
              <img className="" src={require('../../../../images/smiley.svg')} alt="" />
              <input className="bg-white mx-3 message-input px-3 w-100" type="text" placeholder="Type a message" />
              <button className="border-0" type="submit"><img className="" src={require('../../../../images/msg-send.svg')} alt="" /></button>
            </div>
          </div>
      </div>
      <Modal centered={true} isOpen={modal} toggle={toggle}>
          {/* <ModalHeader toggle={toggle}>Modal title</ModalHeader> */}
          <ModalBody className="mx-auto p-5">
            <span className="small text-center d-block mb-3">
              Are you sure?
            </span>
            <div className="">
              <span onClick={() => {
                localStorage.clear()
                window.open('/students/signin', '_self')
              }} style={{
                backgroundColor: '#C02342',
                color: '#FFFFFF',
                borderRadius: '50px',
                border: 'none',
                fontSize: '0.8rem',
                padding: '5px 10px',
                margin: '20px 10px',
                cursor: 'pointer'
              }}>Logout</span>
              <span onClick={toggle} style={{
                backgroundColor: '#2342C0',
                color: '#FFFFFF',
                borderRadius: '50px',
                border: 'none',
                fontSize: '0.8rem',
                padding: '5px 10px',
                margin: '20px 10px',
                cursor: 'pointer'
              }}>Cancel</span>
            </div>
          </ModalBody>
        </Modal>
    </React.Fragment>
  )
}

export default HelpSupport