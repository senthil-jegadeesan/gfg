import React, {useState, useEffect} from 'react';
import menu from '../assets/images/Menu.svg';
import logo from '../assets/images/Logo.svg';

const Header = () => {
    const [scroll, setScroll] = useState(false);
    useEffect(() => {
    window.addEventListener("scroll", () => {
        setScroll(window.scrollY > 50);
    });
    }, []);

    return (
        <header className={scroll ? "header__sticky header" : "header"}>
            <div className="header-container">
                <div className="header-left">
                    <a href="/">
                        <img src={menu} alt="Auto Shop" title="Auto Shop" className="" />
                    </a>
                    <a href="/plp" className="header-logo">
                        <img src={logo} alt="Auto Shop" title="Auto Shop" className="" />
                    </a>
                </div>
                <div className="header-right">
                    <a href="/" className="header-search icon header-icon"></a>
                    <a href="/" className="header-myaccount icon header-icon"></a>
                    <a href="/" className="header-language icon header-icon"><span>EN</span></a>
                </div>
            </div>
        </header>
    );
}
export default Header;