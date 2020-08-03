import React from 'react'
import Helmet from 'react-helmet'
import NavBar from '../../components/navbar/NavBar'
import Form from 'react-bootstrap/Form'
import Footer from '../../components/Footer'
import Button from 'react-bootstrap/Button'
import '../../styles/Contact.css'
// import '../../styles/Sign.css'

const Contact = () => {
  const documentTitle = 'Learnr | Contact Us'

  return (
    <React.Fragment>
      <Helmet>
        <title>{documentTitle}</title>
        <meta
          name="description"
          content="Get in touch with us."
        />
      </Helmet>
      <NavBar />
      {/* <section class="pt-0 pb-20">
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
          </div>
        </div>
      </section> */}
      <div className="container contact-wrap">
        <div className="contact--inner-wrap">
          <h4 className="font-weight-bold">Contact us</h4>
          <div className="contact--form-wrap">
            <div className="contact--details">
              <div className="details--item">
                <h5 className="font-weight-bold">Get in Touch</h5>
                <p className="m-0">Days: Monday - Friday</p>
                <p className="m-0">Time: 8:00am - 4:00pm</p>
              </div>
              <div className="details--item">
                <h5 className="font-weight-bold">Address</h5>
                <p className="m-0">20 Main Street, Wuse Abuja.</p>
              </div>
              <div className="details--item">
                <h5 className="font-weight-bold">Phone</h5>
                <p className="m-0">+234 803 124 1578</p>
              </div>
              <div className="details--item">
                <h5 className="font-weight-bold">Email</h5>
                <p className="m-0">contact@learnr.com</p>
              </div>
            </div>
            <div className="contact--form">
              <Form>
                <Form.Group controlId="exampleForm.ControlInput1">
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control type="text" placeholder="" />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlInput1">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="" />
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
        </div>
      </div>
      <Footer />
    </React.Fragment>
  )
}

export default Contact;
