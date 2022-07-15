import React from 'react';
import ButtonPrimary from '../buttonPrimary/ButtonPrimary';
import './Header.css';
import Logo from '../../assets/images/logo.png'
import { useRef } from 'react';

const Header = () => {
    const headerRef = useRef();
    const scrollFunction = () => {
        const header = headerRef.current;
        if (
            document.body.scrollTop > 20 ||
            document.documentElement.scrollTop > 20
        ) {
            header.style.backgroundColor = "#fff";
            header.style.boxShadow = "rgb(0 0 0 / 10%) 0px 2px 4px -1px, rgb(0 0 0 / 8%) 0px 4px 5px 0px, rgb(0 0 0 / 8%) 0px 1px 10px 0px";
        } else {
            header.style.backgroundColor = "transparent";
            header.style.boxShadow = "none";
        }
    }
    window.onscroll = function () {
        scrollFunction();
    };
    window.onload = function () {
        scrollFunction();
    };
    return (
        <nav className="navbar navbar-expand-lg fixed-top" id='myHeader' ref={headerRef}>
            <div className="container">
                <a className="navbar-brand" href="/#">
                    <img src={Logo} alt="" width="100" />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{ flexGrow: 0 }}>
                    <ul className="navbar-nav  mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="/#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/#">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/#">Work</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/#">Premium products</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/#">Blog</a>
                        </li>
                    </ul>
                    <ButtonPrimary title='Start a project' variant='header' />
                </div>
            </div>
        </nav>
    );
};

export default Header;