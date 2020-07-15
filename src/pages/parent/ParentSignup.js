import React from 'react'
import NavBar from '../../components/navbar/NavBar'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import '../../styles/Sign.css'
import { Link } from 'react-router-dom'

const ParentSignup = () => {
  return (
    <React.Fragment>
      <NavBar />
      <div className="sign-bg container-fluid px-0">
        <div className="container py-5">
          <div className="mx-auto signup-form--wrap">
          <p className="track-text">
            Track your child’s performance in both the  learning resources and Quiz provided.
          </p>
          <p className="mx-auto">
            By registering on Learnr, you agree to our <Link className="" to="/terms-of-use">Terms of use</Link> and <Link className="" to="/privacy-policy">Privacy Policy.</Link>
          </p>
            <div className="bg-white signup-form">
              <span className="text-danger small mb-4 d-block">Fields with * are required</span>
              <Form>
                <Form.Group controlId="formBasicFullName">
                  <Form.Label className="small">Full Name *</Form.Label>
                  <Form.Control type="text" placeholder="Enter full name" />
                  {/* <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text> */}
                </Form.Group>

                <Form.Group controlId="formBasicUsername">
                  <Form.Label className="small">Username *</Form.Label>
                  <Form.Control type="text" placeholder="Please enter a unique username" />
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                  <Form.Label className="small">Email Address *</Form.Label>
                  <Form.Control type="email" placeholder="Please enter your parent/guardian email" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label className="small">Password *</Form.Label>
                  <Form.Control type="password" placeholder="Enter password" />
                  <Form.Text className="text-muted">
                    Password must have at least 8 characters.
                  </Form.Text>
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                  <Form.Check className="small" type="checkbox" label="Show password" />
                </Form.Group>

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

export default ParentSignup