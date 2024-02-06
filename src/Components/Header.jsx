import { useEffect, useRef } from "react"
import { Container } from "react-bootstrap"
export const Header = () => {
    const refOne = useRef();
    const refTwo = useRef();
    const handleRefTwo = () => {
        refTwo.current.classList.toggle("height-100");
    }
    useEffect(() => {
        const nav = document.querySelector("header nav");
        window.addEventListener("resize", () => {
            if (window.innerWidth >= 768) {
                nav.classList.remove("height-100");
            }
        });
    }, []);
    return (
        <header className="py-3">
            <Container className="center-y-between">
                <h1 className="mb-0">
                    <i className="fa-solid fa-scroll me-3"></i>
                    Learners.
                </h1>
                <div className="toggle" ref={refOne} onClick={handleRefTwo}>
                    <i className="fa-solid fa-bars fs-1"></i>
                </div>
                <nav className="center-y" ref={refTwo}>
                    <ul className="d-flex column-gap-3">
                        <li><a href="/">Home</a></li>
                        <li><a href="/">About</a></li>
                        <li><a href="/">Courses</a></li>
                        <li><a href="/">Pages</a></li>
                        <li><a href="/">Blog</a></li>
                    </ul>
                    <div className="phone center-y">
                        <i className="me-3 fa-solid fa-phone"></i>
                        +01234567890
                    </div>
                </nav>
            </Container>
        </header>
    )
}