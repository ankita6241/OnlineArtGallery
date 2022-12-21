import { Card, Form, Button, Col, Row, Container } from "react-bootstrap";
import React from 'react';
import RatingStars from "../Widgets/RatingStars";
const FeedBack = () => {

    return (
        <>
            <div className=" p-3 mb-2 bg-white ">
                <div className="page-header">
                    <h2 className="text-dark" style={{ textAlign: "center", paddingTop: "2px" }}>Write Your Feedback</h2>
                </div>


                <Container className="justify-content-md-center">
                    <Row >
                        <Col><Card style={{ border: "none" }}>
                            <div className="page-header">
                                <h2 className="text-dark" style={{ textAlign: "center", paddingTop: "2px" }}>Write Your Feedback about our website</h2>
                            </div>
                        </Card>
                        </Col>
                        <Form>
                            <Col>
                                <Form.Group controlId="formBasicName">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control />
                                </Form.Group>
                            </Col>
                            <Form.Group controlId="formBasicTextField">
                                <Form.Label>Message</Form.Label>
                                <Form.Control />
                            </Form.Group>
                            <RatingStars/>
                            <Button variant="success" style={{marginTop:"10px"}}type="submit">Submit
                            </Button>
                        </Form>
                       
                    </Row>
                </Container>
            </div>
        </>
    );
}

export default FeedBack;