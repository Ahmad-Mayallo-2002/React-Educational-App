import { Col, Container, ListGroup, Row } from "react-bootstrap"

export const Footer = () => {
    return (
        <footer className="py-5">
            <Container>
                <Row className="row-gap-4">
                    <Col md="3" className="text-center text-md-start">
                        <h3 className="fs-3">
                            <i className="fa-solid fa-scroll me-3"></i>
                            Learners.
                        </h3>
                        <p className="text-secondary mt-4">Follow Us On Social Media</p>
                        <div className="socials d-flex justify-content-center column-gap-3">
                            <i className="fa-brands fa-facebook"></i>
                            <i className="fa-brands fa-youtube"></i>
                            <i className="fa-brands fa-twitter"></i>
                            <i className="fa-brands fa-linkedin-in"></i>
                        </div>
                    </Col>
                    <Col md="3" className="text-center text-md-start">
                        <h3 className="mb-4">Explore</h3>
                        <ListGroup>
                            <ListGroup.Item>Home</ListGroup.Item>
                            <ListGroup.Item>About Us</ListGroup.Item>
                            <ListGroup.Item>Courses</ListGroup.Item>
                            <ListGroup.Item>Pages</ListGroup.Item>
                            <ListGroup.Item>Blog</ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col md="3" className="text-center text-md-start">
                    <h3 className="mb-4">Information</h3>
                        <ListGroup>
                            <ListGroup.Item>Privacy Policy</ListGroup.Item>
                            <ListGroup.Item>Membership</ListGroup.Item>
                            <ListGroup.Item>Purchases Guide</ListGroup.Item>
                            <ListGroup.Item>Terms of Service</ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col md="3" className="text-center text-md-start">
                        <h3 className="mb-4">Get in Touch</h3>
                        <ListGroup>
                            <ListGroup.Item>Address Egypt, Damietta</ListGroup.Item>
                            <ListGroup.Item>About Us</ListGroup.Item>
                            <ListGroup.Item>Courses</ListGroup.Item>
                        </ListGroup>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}