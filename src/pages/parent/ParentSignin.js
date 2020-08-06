import React, {useState} from 'react'
import Helmet from 'react-helmet'
import NavBar from '../../components/navbar/NavBar'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import '../../styles/Sign.css'
import { Link } from 'react-router-dom'
import { ParentLogin } from '../../components/Utils/RegisterUtils'
import {Alert} from "reactstrap";

const StudentSignin = () => {
  const parentLogin = async (e) => {
    e.preventDefault()
    const username = document.getElementById('username').value
    const password = document.getElementById('password').value
    const statusMessageError = document.getElementById('status-message-error')
    const statusMessageSuccess = document.getElementById('status-message-success')
      
    // const form = document.getElementById('registerStudent')
    if(username === '' && password === '') {
      statusMessageError.innerHTML = 'Please fill all required fields'
      statusMessageError.classList.remove('msg-show')
      statusMessageError.classList.add('error-message')
      setTimeout(() => {
        statusMessageError.classList.add('msg-show')
        statusMessageError.classList.remove('error-message')
      }, 4000)
    } else if(username === '' || password === '') {
      statusMessageError.innerHTML = 'Please fill all required fields'
      statusMessageError.classList.remove('msg-show')
      statusMessageError.classList.add('error-message')
      setTimeout(() => {
        statusMessageError.classList.add('msg-show')
        statusMessageError.classList.remove('error-message')
      }, 4000)
    } else {
      const parentData = {
        'username': username,
        'password': password
      }
  
      // let addValidation = true
      // if(form.checkValidity() === false) {
      //   e.preventDefault()
      //   e.stopPropagation()
      // } else if(form.checkValidity()) {
      //   e.preventDefault()
      // }
  
      try {
        const { data } = await ParentLogin(parentData)
        console.log(data)
        if (data.status === 'error: wrong-username') {
          statusMessageError.innerHTML = data.msg
          statusMessageError.classList.remove('msg-show')
          statusMessageError.classList.add('error-message')
          setTimeout(() => {
            statusMessageError.classList.add('msg-show')
            statusMessageError.classList.remove('error-message')
          }, 4000)
        } else if(data.status === 'error: wrong-details') {
          statusMessageError.innerHTML = data.msg
          statusMessageError.classList.remove('msg-show')
          statusMessageError.classList.add('error-message')
          setTimeout(() => {
            statusMessageError.classList.add('msg-show')
            statusMessageError.classList.remove('error-message')
          }, 4000)
        } else if (data.status === 'success') {
            statusMessageSuccess.innerHTML = data.msg
            statusMessageSuccess.classList.remove('msg-show')
            statusMessageSuccess.classList.add('success-message')
          // redirect to login page
          setTimeout(() => {
            statusMessageSuccess.classList.add('msg-show')
            window.open = '/parents/dashboard'
          }, 3000)
        }
      } catch(err) {
          throw err
      }
      // if (addValidation) {
      //   form.classList.add('was-validated');
      // }
    }
  }

  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };
  const documentTitle = 'Learnr | Parent Sign In'

  return (
    <React.Fragment>
      <Helmet>
        <title>{documentTitle}</title>
        <meta
          name="description"
          content="Parent Sign in Page."
        />
      </Helmet>
      <NavBar />
      <div className="sign-bg container-fluid px-0">
        <div className="container pt-5">
          <div className="mx-auto signup-form--wrap">
          <p className="text-center demo-category">
            Welcome Back
          </p>
            <div className="bg-white signup-form">
              <span className="text-center mb-3 d-block" style={{fontSize: '18px'}}>Sign in<br /><span style={{color: '#999999'}}>with one of these services</span></span>
              <div className="row">
                <Link to="" className="col mr-2 d-flex align-items-center bg-white border rounded text-dark py-2 pr-4 my-3 d-block">
                  <img width="27px" className="mr-2" src={require('../../images/icons8-facebook-old.svg')} alt="" />
                  Facebook
                </Link>
                <Link to="" className="col ml-2 d-flex align-items-center bg-white border rounded text-dark py-2 pr-4 my-3 d-block">
                  <img width="24px" className="mr-2" src={require('../../images/icons8-google.svg')} alt="" />
                  Google
                </Link>
              </div>
              <div className="my-2 d-flex align-items-center justify-content-center">
                <div className="hLine"></div><span className="mx-2">or</span><div className="hLine"></div>
              </div>
              <Form>
                <Form.Group controlId="formBasicUsername">
                  <Alert color="danger" id="status-message-error" className="msg-show"></Alert>
                  <Alert color="success" id="status-message-success" className="msg-show"></Alert>
                  <Form.Label className="small">Username *</Form.Label>
                  <Form.Control id="username" type="text" placeholder="Enter username" />
                </Form.Group>

                <Form.Group className="m-0" controlId="formBasicPassword">
                  <Form.Label className="small">Password *</Form.Label>
                  <Form.Control id="password" type={passwordShown ? "text" : "password"} placeholder="********" />
                  <img onClick={togglePasswordVisiblity} className="togglePassword" src={require('../../images/eye-hide.svg')} alt="" />
                  {/* <Form.Text className="text-muted">
                    Password must have at least 8 characters.
                  </Form.Text> */}
                </Form.Group>

                <Link style={{color: '#2342C0'}} className="float-right" to="">Forgot Password?</Link>
                <button onClick={(e) => {parentLogin(e)}} style={{fontSize: '20px'}} className="general-btn-2 my-3 py-2" type="submit">
                  Sign In
                </button>
              </Form>
              <span className="text-center d-block">Don't have an account? <Link style={{color: '#2342C0'}} to="/parents/signup">Create an account</Link></span>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default StudentSignin