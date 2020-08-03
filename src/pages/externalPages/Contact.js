import React from 'react'
import NavBar from '../../components/navbar/NavBar'
import Form from 'react-bootstrap/Form'
import Footer from '../../components/Footer'
// import Getintouch from '../components/Getintouch'
import Button from 'react-bootstrap/Button'
//import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import '../../styles/Sign.css'

const Contact = () => {
  return (
    <React.Fragment>
      <NavBar />
      <section class="pt-0 pb-20">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-lg-6 py-5">
              <div className="p-30 mb-30 py-5 card-view">
                <Form>
                  <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" />
                  </Form.Group>

                  <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Message</Form.Label>
                    <Form.Control as="textarea" rows="3" />
                  </Form.Group>
                  <Button className="general-btn-2 my-3 py-2" variant="primary" type="submit">
                  Submit
                </Button>
                </Form>
              </div>
            </div>
            <div className="py-5">
                {/* <Getintouch /> */}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </React.Fragment>
  )
}

export default Contact;
