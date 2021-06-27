import React from 'react';
import menu from '../assets/images/Menu.svg';
import logo from '../assets/images/Logo.svg';

const Header = () => {
    return (
        <header className="header">
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