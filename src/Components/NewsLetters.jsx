import { Container } from "react-bootstrap"

export const NewsLetters = () => {
    return (
        <section className="news-letters py-5">
            <Container>
                <div className="news rounded-4">
                    <h2 className="text-center text-white fs-1 mb-3">Subscribe Our News</h2>
                    <form action="#" className="m-auto position-relative">
                        <input className="rounded-pill" type="text" placeholder="Email" />
                        <button className="position-absolute rounded-pill">Subscribe</button>
                    </form>
                </div>
            </Container>
        </section>
    )
}