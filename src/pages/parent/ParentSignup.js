import React, {useState} from 'react'
import Helmet from 'react-helmet'
import NavBar from '../../components/navbar/NavBar'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Alert } from 'reactstrap'
import '../../styles/Sign.css'
import { Link } from 'react-router-dom'
import { ParentRegister } from '../../components/Utils/RegisterUtils'


const ParentSignup = () => {
  const register = async (e) => {
    e.preventDefault()
    const username = document.getElementById('username').value
    const password = document.getElementById('password').value
    const email = document.getElementById('email').value
    const statusMessageError = document.getElementById('status-message-error')
    const statusMessageSuccess = document.getElementById('status-message-success')

    // const form = document.getElementById('registerStudent')
    if(username === '' && password === '' && email === '') {
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
    } else if(username === '' || email === '') {
      statusMessageError.innerHTML = 'Please fill all required fields'
      statusMessageError.classList.remove('msg-show')
      statusMessageError.classList.add('error-message')
      setTimeout(() => {
        statusMessageError.classList.add('msg-show')
        statusMessageError.classList.remove('error-message')
      }, 4000)
    } else if(email === '' || password === '') {
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
        'email': email,
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
        const { data } = await ParentRegister(parentData)
        console.log(data)
        if (data.status === 'error: user-exists') {
          statusMessageError.innerHTML = data.msg
          statusMessageError.classList.remove('msg-show')
          statusMessageError.classList.add('error-message')
          setTimeout(() => {
            statusMessageError.classList.add('msg-show')
            statusMessageError.classList.remove('error-message')
          }, 4000)
        } else if(data.status === 'success') {
            statusMessageSuccess.innerHTML = data.msg
            statusMessageSuccess.classList.remove('msg-show')
            statusMessageSuccess.classList.add('success-message')
          // redirect to login page
          setTimeout(() => {
            statusMessageSuccess.classList.add('msg-show')
            window.location.replace('/parents/dashboard')
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
  const documentTitle = 'Learnr | Parent Sign Up'


  return (
    <React.Fragment>
      <Helmet>
        <title>{documentTitle}</title>
        <meta
          name="description"
          content="Parent Sign Up Page."
        />
      </Helmet>
      <NavBar />
      <div className="sign-bg-2 container-fluid px-0">
        <div className="container py-5">
          <div className="mx-auto signup-form--wrap">
          <h3 className="track-text">
            Track your child’s performance in both the  learning resources and Quiz provided.
          </h3>
          <p className="mx-auto px-4">
            By registering on Learnr, you agree to our <Link className="" to="/terms-of-use">Terms of use</Link> and <Link className="" to="/privacy-policy">Privacy Policy.</Link>
          </p>
            <div /*ref={form => signForm = form}*/ className="bg-white signup-form">
              <span className="text-danger small mb-4 d-block">Fields with * are required</span>
              <Form>
                {/* <Form.Group controlId="formBasicFullName">
                  <Form.Label className="small">Full Name *</Form.Label>
                  <Form.Control type="text" placeholder="Audrey Sam" />
                </Form.Group> */}

                <Form.Group controlId="formBasicUsername">
                  {/*<div id="status-message" className="msg-show"></div>*/}
                  <Alert color="danger" id="status-message-error" className="msg-show"></Alert>
                  <Alert color="success" id="status-message-success" className="msg-show"></Alert>
                  <Form.Label className="small">Username *</Form.Label>
                  <Form.Control id="username" type="text" placeholder="Audrey20" />
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                  <Form.Label className="small">Email Address *</Form.Label>
                  <Form.Control id="email" type="email" placeholder="example@email.com" />
                </Form.Group>

                <Form.Group className="m-0" controlId="formBasicPassword">
                  <Form.Label className="small">Password *</Form.Label>
                  <Form.Control id="password" type={passwordShown ? "text" : "password"} placeholder="********" />
                  <img onClick={togglePasswordVisiblity} className="togglePassword" src={require('../../images/eye-hide.svg')} alt="" />
                  <Form.Text className="text-muted">
                    * Password must have at least 8 characters.
                  </Form.Text>
                </Form.Group>
                {/* <Form.Group controlId="formBasicCheckbox">
                  <Form.Check className="small" type="checkbox" label="Show password" />
                </Form.Group> */}

                <Button onClick={(e) => {register(e)}} style={{fontSize: '20px'}} className="general-btn-2 my-3 py-3" type="submit">
                  Sign Up
                </Button>
              </Form>
              <span className="text-center d-block pb-5">Have an account? <Link style={{color: '#2342C0'}} to="/parents/signin">Sign In</Link></span>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default ParentSignup