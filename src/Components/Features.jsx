import { Container } from "react-bootstrap";

const featuresData = [
    {
        icon: "fa-solid fa-file-pen",
        title: "Quick Learning"
    },
    {
        icon: "fa-regular fa-message",
        title: "All Time Support"
    },
    {
        icon: "fa-solid fa-certificate",
        title: "Certification"
    }
]

export const Features = () => {
    return (
        <section className="features py-5">
            <Container className="d-grid">
                {
                    featuresData.map(
                        (feature, key) => {
                            const {icon, title} = feature;
                            return (
                                <article key={key} className="text-center">
                                    <h2><i className={icon}></i></h2>
                                    <h6 className="my-3">{title}</h6>
                                    <p className="lh-lg text-secondary">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus pariatur animi nulla veritatis blanditiis omnis asperiores commodi est. Rem, esse!
                                    </p>
                                </article>
                            )
                        }
                    )
                }
            </Container>
        </section>
    )
}