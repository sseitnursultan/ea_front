import React, {SyntheticEvent, useState} from 'react';
import {Col, Button, Row, Container, Card, Form} from "react-bootstrap";
import {useNavigate} from 'react-router-dom'


export const Register = () => {
    const navigate = useNavigate()

    const [name, setName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [redirect,setRedirect] = useState(false)

    const submit = async (e: SyntheticEvent) => {
        e.preventDefault()

        console.log(process.env.REACT_APP_BACK_URL)

        await fetch(process.env.REACT_APP_BACK_URL + '/api/register', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                name,
                lastName,
                email,
                password
            })
        })
        setRedirect(true)
    }

    if(redirect)
    navigate('/login')

    return (
        <div>
            <Container>
                <Row className="vh-100 d-flex justify-content-center align-items-center">
                    <Col md={8} lg={6} xs={12}>
                        <div className="border border-2 border-primary"></div>
                        <Card className="shadow px-4">
                            <Card.Body>
                                <div className="mb-3 mt-md-4">
                                    <div className="mb-3">
                                        <Form onSubmit={submit}>
                                            <Form.Group className="mb-3" controlId="Name">
                                                <Form.Label className="text-center">
                                                    Name
                                                </Form.Label>
                                                <Form.Control onChange={e => setName(e.target.value)} type="text"
                                                              placeholder="Enter Name"/>
                                            </Form.Group>
                                            <Form.Group className="mb-3" controlId="lastName">
                                                <Form.Label className="text-center">
                                                    Last Name
                                                </Form.Label>
                                                <Form.Control onChange={e => setLastName(e.target.value)} type="text"
                                                              placeholder="Enter Last Name"/>
                                            </Form.Group>

                                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                                <Form.Label className="text-center">
                                                    Email address
                                                </Form.Label>
                                                <Form.Control onChange={e => setEmail(e.target.value)} type="email"
                                                              placeholder="Enter email"/>
                                            </Form.Group>

                                            <Form.Group
                                                className="mb-3"
                                                controlId="formBasicPassword"
                                            >
                                                <Form.Label>Password</Form.Label>
                                                <Form.Control onChange={e => setPassword(e.target.value)}
                                                              type="password" placeholder="Password"/>
                                            </Form.Group>

                                            <Form.Group
                                                className="mb-3"
                                                controlId="formBasicCheckbox"
                                            >
                                            </Form.Group>
                                            <div className="d-grid">
                                                <Button variant="primary" type="submit">
                                                    Create Account
                                                </Button>
                                            </div>
                                        </Form>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};
