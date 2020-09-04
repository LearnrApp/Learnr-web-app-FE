import React, {useEffect, useRef, useState, useLayoutEffect } from 'react'
import Helmet from 'react-helmet'
import NavBar from '../../components/navbar/NavBar'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import '../../styles/Sign.css'
import { Link } from 'react-router-dom'
import getCurrentUser, { StudentRegister } from '../../components/Utils/AuthUtils'
import { getStudentProfile, getCoursesInAClass } from '../../components/Utils/StudentUtils'
import {Alert} from "reactstrap";


const StudentSignup = () => {
  const spinner = useRef()
  const btnText = useRef()
  const btnSign = useRef()

  useLayoutEffect(() => {
    getCurrentUser()
    if(getCurrentUser()) {
      return window.open('/students/dashboard/courses', '_self')
    }
  }, [])

  useEffect(() => {
    spinner.current.classList.remove('spinner-border')

    btnSign.current.addEventListener('click', async (e) => {
      e.preventDefault()
      const username = document.getElementById('username').value
      const password = document.getElementById('password').value
      const pEmail = document.getElementById('parentEmail').value
      const statusMessageError = document.getElementById('status-message-error')
      const statusMessageSuccess = document.getElementById('status-message-success')
      const studentClass = document.getElementById('classes').value
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
        spinner.current.classList.add('spinner-border')
        btnText.current.style.display = 'none'
        const studentData = {
          'username': username,
          'parentEmail': pEmail,
          'password': password,
          'classSelect': idText
        }

        // let addValidation = true
        // if(form.checkValidity() === false) {
        //   e.preventDefault()
        //   e.stopPropagation()
        // } else if(form.checkValidity()) {
        //   e.preventDefault()
        // }

        try {
          const { data } = await StudentRegister(studentData, studentClass)
          if (data.status === 'error: user-exists') {
            spinner.current.classList.remove('spinner-border')
            btnText.current.style.display = 'block'
            statusMessageError.innerHTML = data.msg
            statusMessageError.classList.remove('msg-show')
            statusMessageError.classList.add('error-message')
            setTimeout(() => {
              statusMessageError.classList.add('msg-show')
              statusMessageError.classList.remove('error-message')
            }, 4000)
          } else if(data.status === 'success') {
              spinner.current.classList.remove('spinner-border')
              btnText.current.style.display = 'block'
              console.log(data.userToken)
              localStorage.setItem('learnrToken', data.userToken)
              statusMessageSuccess.innerHTML = data.msg
              statusMessageSuccess.classList.remove('msg-show')
              statusMessageSuccess.classList.add('success-message')
              getStudentProfile()
              .then(res => {
                console.log(res.data.data.student)
                localStorage.setItem('learnrStudentProfile', JSON.stringify(res.data.data.student))
                getCoursesInAClass()
                .then(res => {
                  console.log(Object.values(res.data.data))
                  localStorage.setItem('learnrStudentCourses', JSON.stringify(res.data.data))
                  // redirect to login page
                  setTimeout(() => {
                    statusMessageSuccess.classList.add('msg-show')
                    window.location.replace('/students/dashboard/courses')
                  }, 1000)
                })
              })
          }
        } catch(err) {
            throw err
        }
        // if (addValidation) {
        //   form.classList.add('was-validated');
        // }
      }
    }
    )
  })

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
                  <div className="d-flex flex-column">
                    <label htmlFor="classes" className="small ">Class *</label>
                    <select id="classes" className="form-control">
                      <option value="5f365280ecc3590024c93342">Js 1</option>
                      <option value="457845896512354514796321">Js 2</option>
                      <option>Js 3</option>
                      <option>Ss 1</option>
                      <option>Ss 2</option>
                      <option value="5f3652dbecc3590024c93347">Ss 3</option>
                    </select>
                  </div>
                </div>
                <Button ref={btnSign} style={{fontSize: '1rem'}} className="general-btn-2 my-3 py-2" type="submit">
                  <span ref={btnText}>Sign Up</span>
                  <div ref={spinner} className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                  </div>
                </Button>
              </Form>
              <span className="text-center d-block ">Have an account? <Link style={{color: '#2342C0'}} to="/students/signin">Sign In</Link></span>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default StudentSignup