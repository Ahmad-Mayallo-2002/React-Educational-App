import { About } from "../Components/AboutUs"
import { Choose } from "../Components/Choose"
import { Company } from "../Components/Company"
import { Courses } from "../Components/Courses"
import { Features } from "../Components/Features"
import { Footer } from "../Components/Footer"
import { FreeCourses } from "../Components/FreeCourses"
import { Header } from "../Components/Header"
import { Hero } from "../Components/HeroSection"
import { NewsLetters } from "../Components/NewsLetters"
import { Testimonial } from "../Components/Testimonial"
export const Home = () => {
    return (
        <section className="home">
            <Header />
            <Hero />
            <Company />
            <About />
            <Courses />
            <Choose />
            <Features />
            <FreeCourses />
            <Testimonial />
            <NewsLetters />
            <Footer />
        </section>
    )
}