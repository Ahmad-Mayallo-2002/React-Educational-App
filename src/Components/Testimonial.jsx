import { Col, Container, Row } from "react-bootstrap";
import Slider from "react-slick";
import img from "../assets/images/testimonial01.png";
const TestimonialSlider = () => {
    const settings = {
        infinite: true,
        dots: true,
        speed: 500,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToScroll: 1,
    }
    return (
        <div>
            <Slider {...settings}>
                <div>
                    <div className="single">
                        <h6>Excellent Course of Materials</h6>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At nam corrupti voluptas ad quidem assumenda? Maiores pariatur corrupti aperiam iusto?</p>
                        <div className="student-info">
                            <h6>Jhon Doe</h6>
                            <p>California, United State</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="single">
                        <h6>Excellent Course of Materials</h6>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At nam corrupti voluptas ad quidem assumenda? Maiores pariatur corrupti aperiam iusto?</p>
                        <div className="student-info">
                            <h6>Jhon Doe</h6>
                            <p>California, United State</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="single">
                        <h6>Excellent Course of Materials</h6>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At nam corrupti voluptas ad quidem assumenda? Maiores pariatur corrupti aperiam iusto?</p>
                        <div className="student-info">
                            <h6>Jhon Doe</h6>
                            <p>California, United State</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="single">
                        <h6>Excellent Course of Materials</h6>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At nam corrupti voluptas ad quidem assumenda? Maiores pariatur corrupti aperiam iusto?</p>
                        <div className="student-info">
                            <h6>Jhon Doe</h6>
                            <p>California, United State</p>
                        </div>
                    </div>
                </div>
            </Slider>
        </div>
    )
}

export const Testimonial = () => {
    const x = false;
    return (
        <section className="testimonials py-5 overflow-x-hidden">
            <Container>
                <Row>
                    <Col md="6" sm="12">
                        <img src={img} className="img-fluid w-100" alt="" />
                    </Col>
                    <Col md="6" sm="12">
                        <h2>Our Studenst Voice</h2>
                        <TestimonialSlider />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

/*


*/