const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container grid">
                <div className="footer__content grid">
                    <div>
                        <a href="#" className="footer__logo">
                            Yoga
                        </a>

                        <p className="footer__description">
                            Take care of your health and <br />
                            your mind with the best <br />
                            Yoga classes.
                        </p>
                    </div>
                    <div className="footer__data grid">
                        <div>
                            <h3 className="footer__title">Address</h3>
                            <p className="footer__info">
                                12345 M/01 Sol <br />
                                Avenue, Lima, Peru
                            </p>
                        </div>
                        <div>
                            <h3 className="footer__title">Contact</h3>
                            <p className="footer__info">
                                +123 456 7890 <br />
                                yoga@email.com
                            </p>
                        </div>
                        <div>
                            <h3 className="footer__title">Office</h3>
                            <p className="footer__info">
                                Monday - Saturday <br />
                                9AM - 10PM
                            </p>
                        </div>
                    </div>
                </div>

                <div className="footer__group">
                    <ul className="footer__social">
                        <li>
                            <a
                                href="https://www.facebook.com/"
                                target="_blank"
                                className="footer__social-link"
                            >
                                <i className="ri-facebook-circle-line"></i>
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.instagram.com/"
                                target="_blank"
                                className="footer__social-link"
                            >
                                <i className="ri-instagram-line"></i>
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://twitter.com/"
                                target="_blank"
                                className="footer__social-link"
                            >
                                <i className="ri-twitter-line"></i>
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.youtube.com/"
                                target="_blank"
                                className="footer__social-link"
                            >
                                <i className="ri-youtube-line"></i>
                            </a>
                        </li>
                    </ul>

                    <span className="footer__copy">
                        &#169; Copyright. All rights reserved
                    </span>
                </div>
            </div>
        </footer>
    );
};

export { Footer };
