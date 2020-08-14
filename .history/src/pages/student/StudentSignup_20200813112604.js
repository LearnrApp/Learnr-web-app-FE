import React, {useState} from 'react'
import Helmet from 'react-helmet'
import NavBar from '../../components/navbar/NavBar'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import '../../styles/Sign.css'
import { Link } from 'react-router-dom'
import { StudentRegister } from '../../components/Utils/RegisterUtils'


const StudentSignup = () => {
  const register = async (e) => {
    e.preventDefault()
    const username = document.getElementById('username').value
    const password = document.getElementById('password').value
    const pEmail = document.getElementById('parentEmail').value
    const statusMessage = document.getElementById('status-message')
    const id = document.getElementById('classes').value
    const idValue = document.getElementById('classes').text
    console.log(idValue)
      
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
        'parentEmail': pEmail,
        'password': password,
        'classSelect': idValue
      }
  
      // let addValidation = true
      // if(form.checkValidity() === false) {
      //   e.preventDefault()
      //   e.stopPropagation()
      // } else if(form.checkValidity()) {
      //   e.preventDefault()
      // }
  
      try {
        const { data } = await StudentRegister(studentData, id)
        if (data.status === 'error: user-exists') {
          statusMessage.innerHTML = data.msg
          statusMessage.classList.remove('msg-show')
          statusMessage.classList.add('error-message')
          setTimeout(() => {
            statusMessage.classList.add('msg-show')
            statusMessage.classList.remove('error-message')
          }, 4000)
        } else if(data.status === 'success') {
            console.log(data)
            statusMessage.innerHTML = data.msg
            statusMessage.classList.remove('msg-show')
            statusMessage.classList.add('success-message')
          // redirect to login page
          setTimeout(() => {
            statusMessage.classList.add('msg-show')
            window.location.replace('/students/signin')
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
  const documentTitle = 'Learnr | Student Sign Up'

  return (
    <React.Fragment>
      <Helmet>
        <title>{documentTitle}</title>
        <meta
          name="description"
          content="Student Sign up Page."
        />
      </Helmet>
      <NavBar />
      <div className="sign-bg-2 container-fluid px-0">
        <div className="container py-5">
          <div className="mx-auto signup-form--wrap">
          <p className="mx-auto">
            By registering on Learnr, you agree to our <Link className="" to="/terms-of-use">Terms of use</Link> and <Link className="" to="/privacy-policy">Privacy Policy.</Link>
          </p>
            <div className="bg-white signup-form">
              <span className="text-danger small mb-4 d-block">Fields with * are required</span>
              <Form id="registerStudent" className="">
                {/* <Form.Group controlId="formBasicFullName">
                  <Form.Label className="small">Full Name *</Form.Label>
                  <Form.Control type="text" placeholder="Audrey Sam" />
                </Form.Group> */}

                <Form.Group controlId="">
                  <div id="status-message" className="msg-show"></div>
                  <Form.Label style={{color: '#979797'}} className="small">Username *</Form.Label>
                  <Form.Control id="username" type="text" placeholder="Audrey20" />
                </Form.Group>

                <Form.Group controlId="">
                  <Form.Label style={{color: '#979797'}} className="small">Parent or Gaurdian Email Address</Form.Label>
                  <Form.Control id="parentEmail" type="email" placeholder="example@email.com" />
                </Form.Group>

                <Form.Group className="m-0" controlId="">
                  <Form.Label style={{color: '#979797'}} className="small">Password *</Form.Label>
                  <Form.Control id="password" type={passwordShown ? "text" : "password"} placeholder="********" minLength='8' />
                  <img onClick={togglePasswordVisiblity} className="togglePassword" src={require('../../images/eye-hide.svg')} alt="" />
                  <Form.Text className="text-muted" style={{marginTop: '-25px'}}>
                    * Password must have at least 8 characters.
                  </Form.Text>
                </Form.Group>
                {/* <Form.Group controlId="formBasicCheckbox">
                  <Form.Check className="small" type="checkbox" label="Show password" />
                </Form.Group> */}

                <div className="d-flex justify-content-between">
                  {/* <Form.Group controlId="sex.ControlSelect">
                    <Form.Label className="small">Sex *</Form.Label>
                    <Form.Control as="select">
                      <option>Female</option>
                      <option>Male</option>
                      <option>Prefer not to say</option>
                    </Form.Control>
                  </Form.Group> */}
                  <Form.Group controlId="class.ControlSelect">
                    <Form.Label className="small text-right">Class *</Form.Label>
                    <Form.Control id="classes" as="select">
                      <option value="5f3380f4a21afc4bbccf84a0">Js1</option>
                      <option>Js 2</option>
                      <option>Js 3</option>
                      <option>Ss 1</option>
                      <option>Ss 2</option>
                      <option>Ss 3</option>
                    </Form.Control>
                  </Form.Group>
                </div>
                <Button onClick={(e) => register(e)} style={{fontSize: '20px'}} className="general-btn-2 my-3 py-3" type="submit">
                  Sign Up
                </Button>
              </Form>
              <span className="text-center d-block pb-5">Have an account? <Link style={{color: '#2342C0'}} to="/students/signin">Sign In</Link></span>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default StudentSignup