const Join = () => {
    return (
        <section className="join section">
            <div className="join__container container grid">
                <div className="join__content">
                    <div>
                        <h2 className="join__title">Join our newsletter</h2>

                        <p className="join__description">
                            Subscribe to our newsletter to be aware of many
                            things on discounts, gifts, training and much more.
                            Just enter your email.
                        </p>
                    </div>

                    <form action="" className="join__form">
                        <input type="text" placeholder="For latest update send mail" className="join__input" />

                        <button className="button join__button">
                            Subscribe <i className="ri-arrow-right-line"></i>
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export { Join };
