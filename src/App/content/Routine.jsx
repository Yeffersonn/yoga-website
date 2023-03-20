const Routine = () => {
    return (
        <section className="routine section" id="routine">
            <div className="routine__container container grid">
                <div className="routine__data">
                    <h2 className="section__title">
                        Anytime, Any Place, Any Workout
                    </h2>
                    <p className="routine__description">
                        Take your routine at any time of your day, with the new
                        videos and with the teachers who will guide you.
                    </p>
                    <a href="#" className="button">
                        Get Started Free
                        <i className="ri-arrow-right-line"></i>
                    </a>
                </div>

                <div className="routine__images">
                    <img
                        src="assets/img/routine-yoga-1.png"
                        alt="routine image"
                        className="routine__img-1"
                    />
                    <img
                        src="assets/img/routine-yoga-2.png"
                        alt="routine image"
                        className="routine__img-2"
                    />

                    <div className="routine__box-1">
                        <i className="ri-play-circle-fill routine__icon"></i>
                        <span className="routine__title">
                            High Quality Video
                        </span>
                    </div>
                    <div className="routine__box-2">
                        <i className="ri-run-fill routine__icon"></i>
                        <span className="routine__title">Professional Trainer</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export { Routine };
