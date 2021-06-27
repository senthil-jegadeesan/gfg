import React from 'react';
import backArrow from '../assets/images/left.svg';


interface IProps {
    title: string
}
const Header = (props: IProps) => {
    return (
        <header className="header subheader">
            <div className="header-container ">
                <div className="header-left">
                    <a href="/">
                        <img src={backArrow} alt="Auto Shop" title="Auto Shop" className="header-arrow" />
                        <span className="header-back">Product Selector</span>
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