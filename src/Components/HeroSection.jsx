import { Col, Container, Row } from "react-bootstrap"
import image from "../assets/images/hero-img1.png";

export const Hero = () => {
    return (
        <section className="hero-section">
            <Container>
                <Row>
                    <Col md="6" sm="12" className="text-center text-md-start">
                        <article>
                            <h2 className="lh-base">Anytime Anywhere Learn on your Suitable Schedule</h2>
                            <p className="text-secondary lh-lg">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus ad, vel error a sint adipisci sed deleniti velit dignissimos quas!</p>
                            <div className="search">
                                <input type="text" placeholder="Search" />
                                <button>Search</button>
                            </div>
                        </article>
                    </Col>
                    <Col md="6" sm="12">
                        <img src={image} className="img-fluid w-100" alt="Hero Section" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}