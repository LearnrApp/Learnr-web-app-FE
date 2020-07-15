import React from 'react'
import NavBar from '../../components/navbar/NavBar'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import '../../styles/Sign.css'
import { Link } from 'react-router-dom'

const StudentSignin = () => {
  return (
    <React.Fragment>
      <NavBar />
      <div className="sign-bg container-fluid px-0">
        <div className="container py-5">
          <div className="mx-auto signup-form--wrap">
          <p className="text-center">
            Welcome Back
          </p>
            <div className="bg-white signup-form">
              <span className="text-center mb-3 d-block">Sign in<br /><i>with one of these services</i></span>
              <div className="row">
                <Link className="col mr-2 d-flex align-items-center bg-white border rounded text-dark pr-4 py-2 my-3 d-block">
                  <img className="mx-2" src={require('../../images/facebook-col.svg')} alt="" />
                  Facebook
                </Link>
                <Link className="col ml-2 d-flex align-items-center bg-white border rounded text-dark pr-4 py-2 my-3 d-block">
                  <img className="mx-2" src={require('../../images/google-col.svg')} alt="" />
                  Google
                </Link>
              </div>
              <div className="my-2 text-center">
                <img src={require('../../images/line.svg')} alt="" /><span className="mx-4">or</span><img src={require('../../images/line.svg')} alt="" />
              </div>
              <Form>
                <Form.Group controlId="formBasicUsername">
                  <Form.Label className="small">Username *</Form.Label>
                  <Form.Control type="text" placeholder="Please enter a unique username" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label className="small">Password *</Form.Label>
                  <Form.Control type="password" placeholder="Enter password" />
                  {/* <Form.Text className="text-muted">
                    Password must have at least 8 characters.
                  </Form.Text> */}
                </Form.Group>

                <Link className="small text-right" to="">Forgot Password?</Link>
                <Button className="general-btn-2 my-3 py-2" variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
              <span className="d-block pb-5">Don't have an account? <Link to="/student/signup">Create an account</Link></span>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default StudentSignin