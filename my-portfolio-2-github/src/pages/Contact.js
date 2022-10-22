import React from 'react'
import { Row, Col, Form, FormControl, FormGroup, FormLabel, Button, ListGroupItem, ListGroup } from 'react-bootstrap'
import { motion } from 'framer-motion'

const Contact = () => {
  const handleSubmit = (event) => {}
  return (
    <motion.div 
  initial={{ scaleY: 0 }} 
  animate={{ scaleY: 1 }} 
  exit={{ scaleY: 0 }}
  transition={{ duration: 0.2 }}
  className="contact"
  >
      <h2>Contact</h2>
      <Row>
        <Col>
        <div className='contact-form'>
          <Form onSubmit={handleSubmit}>
            <FormGroup className='mb-3' controlId="validationCustom01">
              <FormLabel>Name</FormLabel>
              <FormControl required type="text" placeholder='Name'/>
            </FormGroup>
            <FormGroup className='mb-3' controlId="validationCustom02">
              <FormLabel>Email</FormLabel>
              <FormControl required type="Email" placeholder='Email'/>
            </FormGroup>
            <FormGroup className='mb-3' controlId="validationCustom03">
              <FormLabel>Message</FormLabel>
              <FormControl required as="textarea" placeholder='Message'/>
            </FormGroup>
            <Button type="submit">Submit Form</Button>
          </Form>
        </div>
        </Col>
        <Col>
        <div className='contact-data'>
          <p>
              If you want to chat about a project — email me on
              khanshakib14478@gmail.com
            </p>
            <p>
              I can help designing a website, designing a new product, improving
              an existing part of your product, building a strong design system,
              building websites in Webflow, or designing a custom icon set for
              your business.{" "}
            </p>
            <p>
              Currently based in Wroclaw, Banglore — available for remote-friendly
              work from October 2022.
            </p>
            <p>
              <ListGroup horizontal>
                <ListGroupItem><a href="https://www.youtube.com/c/chubey gamer">Yotube</a></ListGroupItem>
                <ListGroupItem><a href="">LinkedIn</a></ListGroupItem>
                <ListGroupItem><a href="https://github.com/Shakib098">GitHub</a></ListGroupItem>
                <ListGroupItem><a href="https://app.netlify.com/teams/shakib098/sites">Netlify</a></ListGroupItem>
              </ListGroup>
            </p>
          </div>
        </Col>
      </Row>
    </motion.div>
  )
}

export default Contact