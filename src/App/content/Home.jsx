const Home = () => {
    return (
        <section className="home section" id="home">
            <div className="home__container container grid">
                <div className="home__data">
                    <h1 className="home__title">
                        Choose Your
                        <div className="home__title-box">
                            Best <div>Yoga</div>
                        </div>
                        Teacher
                        <img src="/assets/img/star-img.svg" alt="home image" />
                    </h1>
                    <p className="home__description">
                        Calm your mind and body with the best yoga teachers
                        available, relax your day and stay positive.
                        <img src="assets/img/circle-img.svg" alt="home image" />
                    </p>

                    <a href="#" className="button">
                        Get Started Free
                        <i className="ri-arrow-right-line"></i>
                    </a>

                    <div className="home__box">
                        <div>
                            <h3>300</h3>
                            <span>Class</span>
                        </div>
                        <div>
                            <h3>40+</h3>
                            <span>Participants</span>
                        </div>
                    </div>
                </div>

                <img src="assets/img/home-yoga.png" alt="home image" className="home__img" />
            </div>
        </section>
    );
};

export { Home };
