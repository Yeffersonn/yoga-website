const Health = () => {
    return (
        <section className="health section" id="health">
            <div className="health__container container grid">
                <div className="health__data">
                    <h2 className="section__title">
                        Bring Happiness To Good Health!
                    </h2>
                    <p className="health__description">
                        If you take care of your good health, take care of your
                        mentality and lead a healthy life with positive thoughts
                        every day.
                    </p>
                    <a href="#" className="button">
                        Let´s Start
                        <i className="ri-arrow-right-line"></i>
                    </a>
                </div>

                <div className="health__image">
                    <img
                        src="assets/img/health-fitness.png"
                        alt="Health Image"
                        className="health__img"
                    />

                    <div className="health__rate">
                        <div className="health__icon">
                            <i className="ri-heart-3-fill"></i>
                        </div>

                        <div className="health__group">
                            <span className="health__title">Heart Rate</span>
                            <span className="health__number">168 bpm</span>
                        </div>
                    </div>
                    <div className="health__course">
                        <div className="health__group">
                            <span className="health__number">500+</span>
                            <span className="health__title">Free Courses</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export { Health };
