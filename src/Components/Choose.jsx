import { Col, Container, Row } from "react-bootstrap"
import choose from "../assets/images/why-choose-us.png";
import video from "../assets/video.mp4";
import { DefaultPlayer } from "react-html5video";
import "react-html5video/dist/styles.css";
import { useState } from "react";

const ImageContent = () => {
    return <img src={choose} className="img-fluid" alt="" />;
}

const VideoContent = () => {
    return (
        <DefaultPlayer autoPlay loop className="w-100 h-100">
            <source src={video} type="video/mp4" />
        </DefaultPlayer>
    )
}

export const Choose = () => {
    const [state, setState] = useState(true);
    return (
        <section className="choose py-5">
            <Container>
                <Row>
                    <Col md="6" sm="12" className="text-center text-md-start">
                        <h2>Choose Us</h2>
                        <p className="lh-lg text-secondary">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi sed asperiores, hic temporibus quidem fuga obcaecati illo accusamus eveniet voluptates minus harum sit eum cum quisquam, ipsum deserunt quam. Eveniet quisquam labore, iusto dicta sit voluptatem amet laboriosam iste. Dolorum ducimus ab ullam perferendis obcaecati quis totam hic. Ad amet sint nemo, debitis adipisci exercitationem.</p>
                    </Col>
                    <Col md="6" sm="12" className="position-relative">
                        <button onClick={() => setState(!state)} className="position-absolute rounded-circle center" id="playButton">
                            <i className="fa-solid fa-play"></i>
                        </button>
                        {
                            state ? <ImageContent /> : <VideoContent />
                        }
                    </Col>
                </Row>
            </Container>
        </section>
    )
}