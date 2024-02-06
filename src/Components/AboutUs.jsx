import { Col, Container, Row } from "react-bootstrap";
import image from "../assets/images/about-us.png";
import ScrollTrigger from "react-scroll-trigger";
import CountUp from "react-countup";
import { useState } from "react";

const aboutCountersData = [
    {
        finalValue: 25,
        text: "Completed Projects",
        suffix: "K"
    },
    {
        finalValue: 12,
        text: "Patient Around World",
        suffix: "M"
    },
    {
        finalValue: 25,
        text: "Completed Projects",
        suffix: "K"
    },
    {
        finalValue: 12,
        text: "Patient Around World",
        suffix: "M"
    }
]

export const About = () => {
    const [state, setState] = useState(false);
    return (
        <section className="about py-5">
            <Container>
                <Row className="row-gap-5">
                    <Col md="6" sm="12">
                        <img src={image} className="img-fluid" alt="About" />
                    </Col>
                    <Col md="6" sm="12" className="text-center text-md-start">
                        <h2>About Us</h2>
                        <p className="text-secondary lh-lg">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo, nam? Distinctio ullam reprehenderit minus aliquid ex ab et! Aut, dolor.</p>
                        <div className="counters">
                            <ScrollTrigger onEnter={() => setState(true)} onExit={() => setState(false)}>
                                <Row>
                                    {
                                        aboutCountersData.map(
                                            (counter, key) => 
                                                <Col sm="6" key={key}>
                                                    <h4>
                                                    {state ? <CountUp start={0} end={counter.finalValue} duration={1.5} delay={0.5} suffix={counter.suffix} /> : 0 + counter.suffix}
                                                    </h4>
                                                    <p className="text-secondary">{counter.text}</p>
                                                </Col>
                                        )
                                    }
                                </Row>
                            </ScrollTrigger>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}