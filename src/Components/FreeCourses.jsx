import { Container } from "react-bootstrap";
import courseImg01 from "../assets/images/web-development.png";
import courseImg02 from "../assets/images/kids-learning.png";
import courseImg03 from "../assets/images/seo.png";
import courseImg04 from "../assets/images/ui-ux.png";
const freeCourseData = [
    {
      id: "01",
      title: "Basic Web Development Course",
      imgUrl: courseImg01,
      students: 5.3,
      rating: 1.7,
    },
    {
      id: "02",
      title: "Coding for Junior Basic Course",
      imgUrl: courseImg02,
      students: 5.3,
      rating: 1.7,
    },
    {
      id: "03",
      title: "Search Engine Optimization - Basic",
      imgUrl: courseImg03,
      students: 5.3,
      rating: 1.7,
    },
    {
      id: "04",
      title: "Basic UI/UX Design - Figma",
      imgUrl: courseImg04,
      students: 5.3,
      rating: 1.7,
    },
];

export const FreeCourses = () => {
    return (
        <section className="free-courses py-5">
            <Container>
                <h2 className="text-center fw-bold text-dark mb-3">Our Free Courses</h2>
                <section className="courses-details row-gap-4 d-grid">
                    {
                        freeCourseData.map(
                            free => {
                                const {id, title, imgUrl, students, rating} = free;
                                return (
                                    <article key={id}>
                                        <figure className="position-relative">
                                            <img src={imgUrl} alt={title} className="img-fluid rounded-4" />
                                            <button className="position-absolute rounded-pill">Free</button>
                                        </figure>
                                        <h3>{title}</h3>
                                        <div className="info center-y-between">
                                            <p className="mb-0">
                                                <i className="fa-regular fa-user me-2"></i>
                                                {students}
                                            </p>
                                            <p className="mb-0">
                                                <i className="fa-solid fa-star me-2"></i>
                                                {rating}
                                            </p>
                                        </div>
                                    </article>
                                )
                            }
                        )
                    }
                </section>
            </Container>
        </section>
    )
}