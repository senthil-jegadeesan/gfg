import React from 'react';

const Footer = () => {
    return (
        <footer className="footer">
            <ul className="footer-container">
                <li>
                    <a href="/" className="footer-links icon">About us</a>
                </li>
                <li>
                    <a href="/" className="footer-links icon">Services</a>
                </li>
                <li>
                    <a href="/" className="footer-links icon">Contacts</a>
                </li>
                <li>
                    <a href="/" className="footer-links icon">Careers</a>
                </li>
                <li>
                    <a href="/" className="footer-links icon">Work</a>
                </li>
            </ul>
            <div className="footer-copyright">&copy; Copyright 2021 Embitel. All Rights Reserved.</div>
        </footer>
    );
}
export default Footer;