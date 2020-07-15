import React from 'react'
import NavBar from '../../components/navbar/NavBar'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
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
              <span className="text-center small mb-4 d-block">Sign in</span>
              <Form>
                <Form.Group controlId="formBasicUsername">
                  <Form.Label className="small">Username *</Form.Label>
                  <Form.Control type="text" placeholder="Please enter a unique username" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label className="small">Password *</Form.Label>
                  <Form.Control type="password" placeholder="Enter password" />
                  <Form.Text className="text-muted">
                    Password must have at least 8 characters.
                  </Form.Text>
                </Form.Group>

                <Link className="" to="">Forgot Password?</Link>
                <Button className="general-btn-2 my-3 py-2" variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default StudentSignin