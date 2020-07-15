import React from 'react'
import NavBar from '../../components/navbar/NavBarUser'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import '../../styles/Sign.css'
import { Link } from 'react-router-dom'

const AdminSignin = () => {
  return (
    <React.Fragment>
      <NavBar />
      <div className="admin-bg container-fluid px-0">
        <div className="container py-5">
          <div className="mx-auto signup-form--wrap">
          <p className="text-white text-center">
            Administrator Sign In
          </p>
            <div className="bg-white signup-form">
              {/* <span className="text-center small mb-4 d-block">Sign in</span> */}
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

export default AdminSignin