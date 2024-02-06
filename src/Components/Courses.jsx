import { Button, Col, Container, Row } from "react-bootstrap"
import course_1 from "../assets/images/web-design.png";
import course_2 from "../assets/images/graphics-design.png";
import course_3 from "../assets/images/ui-ux.png";
export const Courses = () => {
    return (
        <section className="courses py-5">
            <Container>
                <Row className="center-y mb-5">
                    <Col md="9" sm="12" className="text-center text-md-start">
                        <h2 className="mb-3">Our Popular Courses</h2>
                        <p className="text-secondary lh-lg">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo adipisci qui quo debitis suscipit blanditiis ipsam sequi repellendus assumenda quam!</p>
                    </Col>
                    <Col md="3" sm="12" className="text-center">
                        <Button variant="outline-success" style={{width: "100px",padding: ".5rem 1rem"}}>See All</Button>
                    </Col>
                </Row>
                <Row className="row-gap-5">
                    <Col lg="4" sm="12" md="6" className="h-100">
                        <img src={course_1} className="img-fluid" alt="" />
                        <div className="info center-y-between py-3">
                            <p>
                                <i className="fa-solid fa-book-open"></i>
                                12 Lessons
                            </p>
                            <p>
                                <i className="fa-solid fa-user"></i>
                                12.5K
                            </p>
                        </div>
                        <div className="enroll center-y-between">
                            <p>
                                <i className="fa-solid fa-star"></i>
                                5.9K
                            </p>
                            <a href="/">Enroll Now</a>
                        </div>
                    </Col>
                    <Col lg="4" sm="12" md="6" className="h-100">
                        <img src={course_2} className="img-fluid" alt="" />
                        <div className="info center-y-between py-3">
                            <p>
                                <i className="fa-solid fa-book-open"></i>
                                12 Lessons
                            </p>
                            <p>
                                <i className="fa-solid fa-user"></i>
                                12.5K
                            </p>
                        </div>
                        <div className="enroll center-y-between">
                            <p>
                                <i className="fa-solid fa-star"></i>
                                5.9K
                            </p>
                            <a href="/">Enroll Now</a>
                        </div>
                    </Col>
                    <Col lg="4" sm="12" md="6" className="h-100">
                        <img src={course_3} className="img-fluid" alt="" />
                        <div className="info center-y-between py-3">
                            <p>
                                <i className="fa-solid fa-book-open"></i>
                                12 Lessons
                            </p>
                            <p>
                                <i className="fa-solid fa-user"></i>
                                12.5K
                            </p>
                        </div>
                        <div className="enroll center-y-between">
                            <p>
                                <i className="fa-solid fa-star"></i>
                                5.9K
                            </p>
                            <a href="/">Enroll Now</a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}