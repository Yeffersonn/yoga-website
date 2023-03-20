const List = () => {
    return (
        <section className="list section">
            <div className="list__container container grid">
                <div className="list__content">
                    <h1 className="list__number">#01</h1>
                    <div className="list__blob">
                        <img src="assets/img/list-yoga.png" alt="list image" />
                    </div>
                </div>
                <div className="list__data">
                    <p className="list__description">
                        Get a list of specific influencers in your niche at your
                        fingertips so you can focus on managing your status.
                        <img src="assets/img/star-2-img.svg" alt="List Image" />
                    </p>
                    <a href="#" className="button list__button">
                        Next
                        <i className="ri-arrow-right-line"></i>
                        <img
                            src="assets/img/ellipse-img.svg"
                            alt="Button Image"
                        />
                    </a>
                </div>
            </div>
        </section>
    );
};

export { List };
