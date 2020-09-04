import React, { useLayoutEffect } from 'react'
import Form from 'react-bootstrap/Form'
import '../../styles/Style.css'
import Helmet from 'react-helmet'
import getCurrentUser from '../../components/Utils/AuthUtils'
// import ResetInput from './ResetInput'

const ResetPassword = () => {
  const documentTitle = 'Learnr | Reset Password'

  useLayoutEffect(() => {
    getCurrentUser()
    if(getCurrentUser()) {
      return window.open('/students/dashboard/courses', '_self')
    }
  }, [])
  
  return (
    <React.Fragment>
      <Helmet>
        <title>{documentTitle}</title>
        <meta
          name="description"
          content="Reset Password"
        />
      </Helmet>
      <div className="container mx-auto">
        <h4 className="font-weight-bold">Account Recovery</h4>
        <p className="">Please enter your email address and we will send you a password reset link</p>
        <div className="">
          <Form>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Email address *</Form.Label>
              <Form.Control type="email" placeholder="Enter your email address" />
            </Form.Group>
            <div className="d-flex">
              <a href="/"
                style={{
                  backgroundColor: '#FFF',
                  color: '#2342C0',
                  border: '1px solid #2342C0',
                  borderRadius: '20px',
                  padding: '8px 32px',
                  textDecoration: 'none'
                }}
              >Cancel</a>
              <a href="/"
                style={{
                  color: '#FFF',
                  backgroundColor: '#2342C0',
                  border: 'none',
                  borderRadius: '20px',
                  padding: '8px 32px',
                  textDecoration: 'none'
                }}
              >Submit</a>
            </div>
          </Form>
        </div>
      </div>
    </React.Fragment>
  )
}

export default ResetPassword