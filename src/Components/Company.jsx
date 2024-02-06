import { Container } from "react-bootstrap";

const companyData = [
    {
        title: "Vimeo",
        icon: "fa-brands fa-vimeo-v"
    },
    {
        title: "Pinterest",
        icon: "fa-brands fa-pinterest"
    },
    {
        title: "Dribble",
        icon: "fa-solid fa-basketball"
    },
    {
        title: "Apple",
        icon: "fa-brands fa-apple"
    },
    {
        title: "Google",
        icon: "fa-brands fa-google"
    }
];

export const Company = () => {
    return (
        <section className="company py-5">
            <Container>
                <div className="companies gap-3 d-grid">
                    {
                        companyData.map(
                            company => {
                                const {title, icon} = company;
                                return (
                                    <div className="comp" key={title}>
                                        <h2 className="mb-0">
                                            <i className={icon}></i>
                                            {title}
                                        </h2>
                                    </div>
                                )
                            }
                        )
                    }
                    <div className="comp">
                        <h2 className="mb-0">
                            <svg width={36} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g><path d="M0 0H24V24H0z" fill="none"/><path d="M21 3c.552 0 1 .448 1 1v16c0 .552-.448 1-1 1H3c-.552 0-1-.448-1-1V4c0-.552.448-1 1-1h18zm-1 2h-8.465c-.69 1.977-1.035 4.644-1.035 8h3c-.115.92-.15 1.878-.107 2.877 1.226-.211 2.704-.777 4.027-1.71l1.135 1.665c-1.642 1.095-3.303 1.779-4.976 2.043.052.37.113.745.184 1.125H20V5zM6.555 14.168l-1.11 1.664C7.602 17.27 9.792 18 12 18v-2c-1.792 0-3.602-.603-5.445-1.832zM17 7c.552 0 1 .448 1 1v1c0 .552-.448 1-1 1s-1-.448-1-1V8c0-.552.448-1 1-1zM7 7c-.552 0-1 .452-1 1v1c0 .552.448 1 1 1s1-.45 1-1V8c0-.552-.448-1-1-1z"/></g></svg>
                            Finder
                        </h2>
                    </div>
                </div>
            </Container>
        </section>
    )
}