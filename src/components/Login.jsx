// src/components/Login.js
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import '../style/css/my.css';
const Login = () => {
   
    return (
       
        <Container fluid className="vh-100 d-flex justify-content-center align-items-center">
        <Row>
            <Col md={12}>
                <Card className="signin">
                    <Card.Body>
                        <Card.Title className="text-center kr"><h1>Sign In</h1></Card.Title>
                        <Form className='form'>
                            <Form.Group controlId="formBasicEmail">
                                
                                <Form.Control type="email" placeholder="Enter email" required />
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                
                                <Form.Control type="password" placeholder="Password" required />
                            </Form.Group>
                            <div className="text-center mt-3 links">
                            <Link to="/forgot">Forgot Password</Link>
                                <Link to="/signup">Signup</Link>
                            </div>
                            <Button variant="primary" type="submit" className="w-100">
                                Submit
                            </Button>
                        </Form>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    </Container>
    );
};

export default Login;
