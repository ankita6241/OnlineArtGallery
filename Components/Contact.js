import { Col, Row, Container, Form, Card, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faSquarePhone } from "@fortawesome/free-solid-svg-icons";
const Contact = () => {

    return (
        <>
            <div className=" p-3 mb-2 bg-white ">
                <div className="page-header">
                    <h2 className="text-dark" style={{ textAlign: "center", paddingTop: "2px" }}>Contact Us</h2>
                </div>
                <Card className="justify-content-md-center" style={{ border: "none" }}>
                    <Container >
                        <Row>
                            <div className="page-header">
                                <h3 className="text-dark" style={{ paddingTop: "2px" }}>Get in Touch</h3>
                            </div>
                        </Row>
                        
                        <Form>
                        <Row>
                                <Form.Group controlId="formBasicName">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control />
                                </Form.Group>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control />
                                </Form.Group>
                            </Row>
                            <Row>
                                <Col>
                                <Form.Group controlId="formBasicTextField">
                                <Form.Label>Message</Form.Label>
                                <Form.Control />
                            </Form.Group>
                                </Col>
                            </Row>
                            <Button variant="success" type="submit">Submit   </Button>
                         
                        </Form>
                        <h2><FontAwesomeIcon icon={faEnvelope} /></h2>
                        <h2><FontAwesomeIcon icon={faSquarePhone} /></h2>
            </Container>
                </Card>
        </div>
         </>
    );
}
export default Contact;