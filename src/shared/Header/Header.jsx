import React from 'react';
import ButtonPrimary from '../buttonPrimary/ButtonPrimary';
import './Header.css';
import Logo from '../../assets/images/logo.png'

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg ">
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