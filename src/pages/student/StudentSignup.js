import React, {useState} from 'react'
import NavBar from '../../components/navbar/NavBar'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import '../../styles/Sign.css'
import { Link } from 'react-router-dom'


const StudentSignup = () => {
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  return (
    <React.Fragment>
      <NavBar />
      <div className="sign-bg-2 container-fluid px-0">
        <div className="container py-5">
          <div className="mx-auto signup-form--wrap">
          <p className="mx-auto">
            By registering on Learnr, you agree to our <Link className="" to="/terms-of-use">Terms of use</Link> and <Link className="" to="/privacy-policy">Privacy Policy.</Link>
          </p>
            <div className="bg-white signup-form">
              <span className="text-danger small mb-4 d-block">Fields with * are required</span>
              <Form>
                <Form.Group controlId="formBasicFullName">
                  <Form.Label className="small">Full Name *</Form.Label>
                  <Form.Control type="text" placeholder="Audrey Sam" />
                </Form.Group>

                <Form.Group controlId="formBasicUsername">
                  <Form.Label className="small">Username *</Form.Label>
                  <Form.Control type="text" placeholder="Audrey20" />
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                  <Form.Label className="small">Email Address *</Form.Label>
                  <Form.Control type="email" placeholder="example@email.com" />
                </Form.Group>

                <Form.Group className="m-0" controlId="formBasicPassword">
                  <Form.Label className="small">Password *</Form.Label>
                  <Form.Control type={passwordShown ? "text" : "password"} placeholder="********" />
                  <img onClick={togglePasswordVisiblity} className="togglePassword" src={require('../../images/eye-hide.svg')} alt="" />
                  <Form.Text className="text-muted">
                    * Password must have at least 8 characters.
                  </Form.Text>
                </Form.Group>
                {/* <Form.Group controlId="formBasicCheckbox">
                  <Form.Check className="small" type="checkbox" label="Show password" />
                </Form.Group> */}

                <div className="d-flex justify-content-between">
                  <Form.Group controlId="sex.ControlSelect">
                    <Form.Label className="small">Sex *</Form.Label>
                    <Form.Control as="select">
                      <option>Female</option>
                      <option>Male</option>
                      <option>Prefer not to say</option>
                    </Form.Control>
                  </Form.Group>
                  <Form.Group controlId="class.ControlSelect">
                    <Form.Label className="small text-right">Class *</Form.Label>
                    <Form.Control as="select">
                      <option>Js 1</option>
                      <option>Js 2</option>
                      <option>Js 3</option>
                      <option>Ss 1</option>
                      <option>Ss 2</option>
                      <option>Ss 3</option>
                    </Form.Control>
                  </Form.Group>
                </div>
                <Button style={{fontSize: '20px'}} className="general-btn-2 my-3 py-3" type="submit">
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