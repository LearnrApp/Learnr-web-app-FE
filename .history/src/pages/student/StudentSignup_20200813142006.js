import React, {useState} from 'react'
import Helmet from 'react-helmet'
import NavBar from '../../components/navbar/NavBar'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import '../../styles/Sign.css'
import { Link } from 'react-router-dom'
import { StudentRegister } from '../../components/Utils/RegisterUtils'
import {Alert} from "reactstrap";



const StudentSignup = () => {
  const register = async (e) => {
    e.preventDefault()
    const username = document.getElementById('username').value
    const password = document.getElementById('password').value
    const pEmail = document.getElementById('parentEmail').value
    const statusMessageError = document.getElementById('status-message-error')
    const statusMessageSuccess = document.getElementById('status-message-success')
    const id = document.getElementById('classes').selectedIndex
    const idText = document.getElementsByTagName('option')[id].innerText
    console.log(idText)
    
      
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
      const studentData = {
        'username': username,
        'parentEmail': pEmail,
        'password': password,
        // 'classSelect': idValue
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
          statusMessageError.innerHTML = data.msg
          statusMessageError.classList.remove('msg-show')
          statusMessageError.classList.add('error-message')
          setTimeout(() => {
            statusMessageError.classList.add('msg-show')
            statusMessageError.classList.remove('error-message')
          }, 4000)
        } else if(data.status === 'success') {
            console.log(data)
            statusMessageSuccess.innerHTML = data.msg
            statusMessageSuccess.classList.remove('msg-show')
            statusMessageSuccess.classList.add('success-message')
          // redirect to login page
          setTimeout(() => {
            statusMessageSuccess.classList.add('msg-show')
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
                  <Alert color="danger" id="status-message-error" className="msg-show"></Alert>
                  <Alert color="success" id="status-message-success" className="msg-show"></Alert>
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
                  <form>
                    <label for="classes" className="small text-right">Class *</label>
                    <select id="classes" className="form-control">
                      <option value="5f352a023be4b886d0f6094a">Js1</option>
                      <option>Js 2</option>
                      <option>Js 3</option>
                      <option>Ss 1</option>
                      <option>Ss 2</option>
                      <option>Ss 3</option>
                    </select>
                  </form>
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