import React, {useState} from 'react'
import Helmet from 'react-helmet'
import NavBar from '../../components/navbar/NavBar'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import '../../styles/Sign.css'
import { Link } from 'react-router-dom'
import { StudentLogin } from '../../components/Utils/RegisterUtils'


const StudentSignin = () => {
  const studentLogin = async (e) => {
    e.preventDefault()
    const username = document.getElementById('username').value
    const password = document.getElementById('password').value
    const statusMessage = document.getElementById('status-message')
      
    // const form = document.getElementById('registerStudent')
    if(username === '' && password === '') {
      statusMessage.innerHTML = 'Please fill all required fields'
      statusMessage.classList.remove('msg-show')
      statusMessage.classList.add('error-message')
      setTimeout(() => {
        statusMessage.classList.add('msg-show')
        statusMessage.classList.remove('error-message')
      }, 4000)
    } else if(username === '' || password === '') {
      statusMessage.innerHTML = 'Please fill all required fields'
      statusMessage.classList.remove('msg-show')
      statusMessage.classList.add('error-message')
      setTimeout(() => {
        statusMessage.classList.add('msg-show')
        statusMessage.classList.remove('error-message')
      }, 4000)
    } else {
      const studentData = {
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
        const { data } = await StudentLogin(studentData)
        console.log(data)
        if (data.status === 'error: wrong-username') {
          statusMessage.innerHTML = data.msg
          statusMessage.classList.remove('msg-show')
          statusMessage.classList.add('error-message')
          setTimeout(() => {
            statusMessage.classList.add('msg-show')
            statusMessage.classList.remove('error-message')
          }, 4000)
        } else if(data.status === 'error: wrong-details') {
          statusMessage.innerHTML = data.msg
          statusMessage.classList.remove('msg-show')
          statusMessage.classList.add('error-message')
          setTimeout(() => {
            statusMessage.classList.add('msg-show')
            statusMessage.classList.remove('error-message')
          }, 4000)
        } else if (data.status === 'success') {
            statusMessage.innerHTML = data.msg
            statusMessage.classList.remove('msg-show')
            statusMessage.classList.add('success-message')
          // redirect to login page
          setTimeout(() => {
            statusMessage.classList.add('msg-show')
            window.location.replace('/students/dashboard')
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
  const documentTitle = 'Learnr | Student Sign In'


  return (
    <React.Fragment>
      <Helmet>
        <title>{documentTitle}</title>
        <meta
          name="description"
          content="Student Sign in Page."
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
              <span className="text-center mb-3 d-block" style={{fontSize: '18px'}}>Sign In</span>
              <Form>
                <Form.Group controlId="formBasicUsername">
                <div id="status-message" className="msg-show"></div>
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
                <Button onClick={(e) => studentLogin(e)} style={{fontSize: '20px'}} className="general-btn-2 my-3 py-3" variant="primary" type="submit">
                  Sign In
                </Button>
              </Form>
              <span className="text-center d-block pb-5">Don't have an account? <Link style={{color: '#2342C0'}} to="/students/signup">Create an account</Link></span>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default StudentSignin