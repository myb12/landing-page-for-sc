import React from 'react';
import './Banner.css';
import Shape from '../../assets/images/curve-shape.png'

const BannerHeading = ({ children }) => {
    return (
        <div className="banner-heading-wrapper">
            <h1 className="banner-heading">
                {children}
            </h1>
            <div className="banner-heading-shape">
                <img src={Shape} alt="" />
            </div>
        </div>
    );
};

export default BannerHeading;