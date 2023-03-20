const Header = () => {
    return (
        <header className="header" id="header">
            <nav className="nav container">
                <a href="#" className="nav__logo">
                    Yoga
                </a>
                <div className="nav__menu" id="nav-menu">
                    <ul className="nav__list">
                        <li className="nav__item">
                            <a href="#home" className="nav__link active-link">
                                Home
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#health" className="nav__link">
                                Health
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#routine" className="nav__link">
                                Routine
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#follow" className="nav__link">
                                Follow
                            </a>
                        </li>
                    </ul>
                    <div className="nav__close" id="nav-close">
                        <i className="ri-close-line"></i>
                    </div>
                </div>

                <div className="nav__buttons">
                    <i
                        className="ri-moon-line change-theme"
                        id="theme-button"
                    ></i>
                    <div className="nav__toggle" id="nav-toggle">
                        <i className="ri-apps-2-line"></i>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export { Header };
