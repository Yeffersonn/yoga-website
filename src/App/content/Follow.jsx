const Follow = () => {
    return (
        <section className="follow section" id="follow">
            <div className="follow__container container grid">
                <div className="follow__content-1">
                    <div className="follow__data">
                        <h2 className="section__title follow__title">
                            Follow Us On 
                            Instagram
                            <div>#YOGA</div>
                        </h2>
                        <a href="#" className="button follow__button">
                            Follow
                            <i className="ri-arrow-right-line"></i>
                        </a>
                    </div>

                    <img src="assets/img/follow-yoga-1.png" alt="follow image" className="follow__img-1" />
                    <img src="assets/img/follow-yoga-2.png" alt="follow image" className="follow__img-2" />
                </div>

                <div className="follow__content-2">
                    <img src="assets/img/follow-yoga-3.png" alt="follow image" className="follow__img-3" />
                    <img src="assets/img/follow-yoga-4.png" alt="follow image" className="follow__img-4" />
                </div>
            </div>
        </section>
    );
};

export { Follow };
